const fs = require("fs");
const path = require("path");
const camelcase = require("camelcase");

const BASE_DIR = path.join(process.cwd(), "src/heroicons/optimized");
const OUTPUT_DIR = path.join(process.cwd(), "icons");

(async () => {
    console.log("Generating icons...");
    if (fs.existsSync(OUTPUT_DIR)) fs.rmSync(OUTPUT_DIR, { recursive: true });
    fs.mkdirSync(OUTPUT_DIR);
    const variantDirs = fs.readdirSync(BASE_DIR);
    for (const variantDir of variantDirs) {
        fs.mkdirSync(path.join(OUTPUT_DIR, variantDir));
        const iconFiles = fs.readdirSync(path.join(BASE_DIR, variantDir));
        const exports = [];
        for (const iconFile of iconFiles) {
            const iconName = camelcase(iconFile.replace(".svg", ""), { pascalCase: true });
            const iconSVG = await fs.readFileSync(path.join(BASE_DIR, variantDir, iconFile), "utf8");
            exports.push(`export const ${iconName} = '${iconSVG.replace(/\n/g, "")}'`);
        }
        fs.writeFileSync(path.join(OUTPUT_DIR, variantDir, "index.js"), exports.join("\n"));
        fs.writeFileSync(
            path.join(OUTPUT_DIR, variantDir, "package.json"),
            JSON.stringify({ name: variantDir, main: "index.js" }, null, 2)
        );
    }
})();
