import fs from "fs";
import path from "path";

import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/insights");

interface AccessibilityCheck {
  file: string;
  issues: string[];
}

async function checkAccessibility() {
  const contentTypes = ["articles", "special-reports", "trends", "benchmarks", "playbooks"];
  const results: AccessibilityCheck[] = [];
  let totalFiles = 0;
  let filesWithIssues = 0;

  for (const contentType of contentTypes) {
    const dirPath = path.join(CONTENT_DIR, contentType);

    if (!fs.existsSync(dirPath)) {
      continue;
    }

    const files = fs.readdirSync(dirPath).filter((file) => file.endsWith(".mdx"));

    for (const file of files) {
      totalFiles++;
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { content } = matter(fileContent);

      const issues: string[] = [];

      // Check for images without alt text
      const imgPattern = /<Figure\s+[^>]*>/g;
      const imgMatches = content.match(imgPattern) || [];
      imgMatches.forEach((match) => {
        if (!match.includes("alt=")) {
          issues.push("Figure component missing alt text");
        }
      });

      // Check for tables without captions
      const tablePattern = /<table[^>]*>[\s\S]*?<\/table>/gi;
      const tableMatches = content.match(tablePattern) || [];
      const tableWithCaptionPattern = /<caption[^>]*>[\s\S]*?<\/caption>/gi;

      tableMatches.forEach((table) => {
        if (!tableWithCaptionPattern.test(table)) {
          // Check if there's a header above the table
          const tableIndex = content.indexOf(table);
          const beforeTable = content.substring(Math.max(0, tableIndex - 100), tableIndex);
          if (!beforeTable.includes("##") && !beforeTable.includes("###")) {
            issues.push("Table without caption or preceding header");
          }
        }
      });

      // Check for raw markdown tables
      const markdownTablePattern = /\|[^\n]+\|[\s\S]*?\|[^\n]+\|/g;
      const markdownTables = content.match(markdownTablePattern) || [];
      if (markdownTables.length > 0) {
        // Check if tables have headers
        markdownTables.forEach((table) => {
          const lines = table.split("\n");
          if (lines.length >= 2 && !lines[1].includes("---")) {
            issues.push("Markdown table possibly missing header row");
          }
        });
      }

      if (issues.length > 0) {
        filesWithIssues++;
      }

      results.push({
        file: `${contentType}/${file}`,
        issues,
      });

      const status = issues.length === 0 ? "✅" : "⚠️";
      console.log(
        `${status} ${contentType}/${file}${issues.length > 0 ? ` (${issues.length} issues)` : ""}`
      );
    }
  }

  console.log("\n📊 Summary:");
  console.log(`Total files: ${totalFiles}`);
  console.log(`Files with accessibility issues: ${filesWithIssues}`);
  console.log(`Files without issues: ${totalFiles - filesWithIssues}`);

  const filesWithProblems = results.filter((r) => r.issues.length > 0);
  if (filesWithProblems.length > 0) {
    console.log("\n⚠️ Files with accessibility issues:");
    filesWithProblems.forEach(({ file, issues }) => {
      console.log(`\n${file}:`);
      issues.forEach((issue) => {
        console.log(`  - ${issue}`);
      });
    });
  }
}

checkAccessibility().catch((error) => {
  console.error("Error checking accessibility:", error);
  process.exit(1);
});
