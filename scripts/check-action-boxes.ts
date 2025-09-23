import fs from "fs";
import path from "path";

import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/insights");

async function checkActionBoxes() {
  const contentTypes = ["articles", "special-reports", "trends", "benchmarks", "playbooks"];
  const results: Array<{ file: string; hasActionBox: boolean }> = [];
  let totalFiles = 0;
  let filesWithActionBox = 0;

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

      // Check for "Now do this" or similar action boxes
      const hasActionBox =
        content.includes("## Now do this") ||
        content.includes("## Your Action Plan") ||
        content.includes("## Next Steps") ||
        content.includes('<Step title="Now do this') ||
        content.includes('<Step title="Your next');

      if (hasActionBox) {
        filesWithActionBox++;
      }

      results.push({
        file: `${contentType}/${file}`,
        hasActionBox,
      });

      const status = hasActionBox ? "✅" : "❌";
      console.log(`${status} ${contentType}/${file}`);
    }
  }

  console.log("\n📊 Summary:");
  console.log(`Total files: ${totalFiles}`);
  console.log(`Files with action box: ${filesWithActionBox}`);
  console.log(`Files missing action box: ${totalFiles - filesWithActionBox}`);

  const missingActionBox = results.filter((r) => !r.hasActionBox);
  if (missingActionBox.length > 0) {
    console.log("\n❌ Files missing action box:");
    missingActionBox.forEach(({ file }) => {
      console.log(`  - ${file}`);
    });
  }
}

checkActionBoxes().catch((error) => {
  console.error("Error checking action boxes:", error);
  process.exit(1);
});
