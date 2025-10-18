import fs from "fs";
import path from "path";

import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/insights");

interface LinkCheck {
  file: string;
  insightLinks: string[];
  toolLinks: string[];
  hasRequiredLinks: boolean;
}

async function checkInternalLinks() {
  const contentTypes = ["articles", "special-reports", "trends", "benchmarks", "playbooks"];
  const results: LinkCheck[] = [];
  let totalFiles = 0;
  let filesWithRequiredLinks = 0;

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

      // Find all insight links
      const insightLinkPattern = /\[([^\]]+)\]\(\/insights\/([^)]+)\)/g;
      const insightLinks: string[] = [];
      let match;
      while ((match = insightLinkPattern.exec(content)) !== null) {
        insightLinks.push(match[2]);
      }

      // Find all tool links
      const toolLinkPattern = /\[([^\]]+)\]\(\/tools\/([^)]+)\)/g;
      const toolLinks: string[] = [];
      while ((match = toolLinkPattern.exec(content)) !== null) {
        toolLinks.push(match[2]);
      }

      const hasRequiredLinks = insightLinks.length >= 2 && toolLinks.length >= 1;
      if (hasRequiredLinks) {
        filesWithRequiredLinks++;
      }

      results.push({
        file: `${contentType}/${file}`,
        insightLinks,
        toolLinks,
        hasRequiredLinks,
      });

      const status = hasRequiredLinks ? "✅" : "❌";
      console.log(
        `${status} ${contentType}/${file}: ${insightLinks.length} insights, ${toolLinks.length} tools`
      );
    }
  }

  console.log("\n📊 Summary:");
  console.log(`Total files: ${totalFiles}`);
  console.log(`Files with required links (2+ insights, 1+ tool): ${filesWithRequiredLinks}`);
  console.log(`Files missing required links: ${totalFiles - filesWithRequiredLinks}`);

  const missingLinks = results.filter((r) => !r.hasRequiredLinks);
  if (missingLinks.length > 0) {
    console.log("\n❌ Files missing required links:");
    missingLinks.forEach(({ file, insightLinks, toolLinks }) => {
      console.log(`\n${file}:`);
      console.log(`  - Insight links: ${insightLinks.length} (need at least 2)`);
      console.log(`  - Tool links: ${toolLinks.length} (need at least 1)`);
    });
  }
}

checkInternalLinks().catch((error) => {
  console.error("Error checking internal links:", error);
  process.exit(1);
});
