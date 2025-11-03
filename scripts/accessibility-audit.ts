#!/usr/bin/env tsx

import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";

interface AccessibilityIssue {
  file: string;
  line: number;
  issue: string;
  severity: "error" | "warning";
}

const issues: AccessibilityIssue[] = [];

// Check for accessibility issues in TSX files
async function checkTsxFiles() {
  const files = await glob("src/**/*.tsx", { ignore: "node_modules/**" });
  
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Check for images without alt text
      if (line.includes("<img") && !line.includes("alt=")) {
        issues.push({
          file,
          line: lineNum,
          issue: "Image missing alt attribute",
          severity: "error"
        });
      }
      
      // Check for links without accessible text
      if (line.includes("<a ") && line.includes("href=") && !line.includes("aria-label")) {
        // Check if there's text content
        const linkMatch = line.match(/<a[^>]*>(.*?)<\/a>/);
        if (linkMatch && !linkMatch[1].trim()) {
          issues.push({
            file,
            line: lineNum,
            issue: "Link without accessible text or aria-label",
            severity: "error"
          });
        }
      }
      
      // Check for buttons without accessible text
      if (line.includes("<button") && !line.includes("aria-label")) {
        const buttonMatch = line.match(/<button[^>]*>(.*?)<\/button>/);
        if (buttonMatch && !buttonMatch[1].trim()) {
          issues.push({
            file,
            line: lineNum,
            issue: "Button without accessible text or aria-label",
            severity: "error"
          });
        }
      }
      
      // Check for form inputs without labels
      if ((line.includes("<input") || line.includes("<Input")) && 
          !line.includes("aria-label") && 
          !line.includes("placeholder")) {
        issues.push({
          file,
          line: lineNum,
          issue: "Form input possibly missing label or aria-label",
          severity: "warning"
        });
      }
      
      // Check for onClick on non-interactive elements
      if (line.includes("onClick") && (line.includes("<div") || line.includes("<span"))) {
        if (!line.includes("role=") && !line.includes("tabIndex")) {
          issues.push({
            file,
            line: lineNum,
            issue: "onClick on non-interactive element without role and tabIndex",
            severity: "error"
          });
        }
      }
      
      // Check heading hierarchy
      const headingMatch = line.match(/<h([1-6])/);
      if (headingMatch) {
        const level = parseInt(headingMatch[1]);
        // This is a simplified check - would need more context for proper validation
        if (level > 1 && !content.includes(`<h${level - 1}`)) {
          issues.push({
            file,
            line: lineNum,
            issue: `Heading level ${level} used without h${level - 1}`,
            severity: "warning"
          });
        }
      }
    });
  }
}

// Check MDX files for accessibility
async function checkMdxFiles() {
  const files = await glob("content/**/*.mdx", { ignore: "node_modules/**" });
  
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Check for images without alt text in markdown
      if (line.includes("![") && line.includes("]()")) {
        issues.push({
          file,
          line: lineNum,
          issue: "Markdown image with empty alt text",
          severity: "warning"
        });
      }
      
      // Check for bare URLs
      if (line.match(/https?:\/\/[^\s\]]+/) && !line.includes("[") && !line.includes("](")) {
        issues.push({
          file,
          line: lineNum,
          issue: "Bare URL without descriptive link text",
          severity: "warning"
        });
      }
    });
  }
}

// Check for color contrast in CSS
async function checkColorContrast() {
  const files = await glob("src/**/*.{css,tsx}", { ignore: "node_modules/**" });
  
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Look for potentially problematic color combinations
      if (line.includes("text-gray-400") || line.includes("text-gray-500")) {
        if (line.includes("bg-gray-50") || line.includes("bg-gray-100")) {
          issues.push({
            file,
            line: lineNum,
            issue: "Potentially low color contrast (light gray text on light background)",
            severity: "warning"
          });
        }
      }
    });
  }
}

// Main function
async function main() {
  console.log("🔍 Running accessibility audit...\n");
  
  await checkTsxFiles();
  await checkMdxFiles();
  await checkColorContrast();
  
  // Sort issues by severity and file
  issues.sort((a, b) => {
    if (a.severity !== b.severity) {
      return a.severity === "error" ? -1 : 1;
    }
    return a.file.localeCompare(b.file);
  });
  
  // Report results
  const errors = issues.filter(i => i.severity === "error");
  const warnings = issues.filter(i => i.severity === "warning");
  
  if (errors.length > 0) {
    console.log(`❌ Found ${errors.length} accessibility errors:\n`);
    errors.forEach(issue => {
      console.log(`  ${issue.file}:${issue.line}`);
      console.log(`    ${issue.issue}\n`);
    });
  }
  
  if (warnings.length > 0) {
    console.log(`⚠️  Found ${warnings.length} accessibility warnings:\n`);
    warnings.forEach(issue => {
      console.log(`  ${issue.file}:${issue.line}`);
      console.log(`    ${issue.issue}\n`);
    });
  }
  
  if (issues.length === 0) {
    console.log("✅ No accessibility issues found!");
  } else {
    console.log(`\n📊 Summary: ${errors.length} errors, ${warnings.length} warnings`);
    
    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        errors: errors.length,
        warnings: warnings.length,
        total: issues.length
      },
      issues
    };
    
    fs.writeFileSync(
      path.join(process.cwd(), "accessibility-report.json"),
      JSON.stringify(report, null, 2)
    );
    console.log("\n📄 Full report saved to accessibility-report.json");
  }
  
  // Exit with error code if there are errors
  process.exit(errors.length > 0 ? 1 : 0);
}

main().catch(console.error);

