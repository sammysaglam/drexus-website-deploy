import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { validateFrontmatter } from "../src/lib/insights-schema";

const CONTENT_DIR = path.join(process.cwd(), "content/insights");

async function validateAllFrontmatter() {
  const contentTypes = ["articles", "special-reports", "trends", "benchmarks", "playbooks"];
  const errors: Array<{ file: string; error: string }> = [];
  let totalFiles = 0;
  let validFiles = 0;

  for (const contentType of contentTypes) {
    const dirPath = path.join(CONTENT_DIR, contentType);

    if (!fs.existsSync(dirPath)) {
      console.log(`⚠️  Directory not found: ${dirPath}`);
      continue;
    }

    const files = fs.readdirSync(dirPath).filter((file) => file.endsWith(".mdx"));

    for (const file of files) {
      totalFiles++;
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      try {
        validateFrontmatter(data);
        validFiles++;
        console.log(`✅ ${contentType}/${file}`);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        errors.push({ file: `${contentType}/${file}`, error: errorMessage });
        console.log(`❌ ${contentType}/${file}: ${errorMessage}`);
      }
    }
  }

  console.log("\n📊 Summary:");
  console.log(`Total files: ${totalFiles}`);
  console.log(`Valid files: ${validFiles}`);
  console.log(`Invalid files: ${errors.length}`);

  if (errors.length > 0) {
    console.log("\n❌ Validation errors:");
    errors.forEach(({ file, error }) => {
      console.log(`\n${file}:`);
      console.log(`  ${error}`);
    });
    process.exit(1);
  } else {
    console.log("\n✅ All frontmatter is valid!");
  }
}

validateAllFrontmatter().catch((error) => {
  console.error("Error validating frontmatter:", error);
  process.exit(1);
});
