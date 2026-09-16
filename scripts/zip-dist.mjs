import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const distDir = path.resolve(projectRoot, 'dist');
const zipFile = path.resolve(projectRoot, 'dist.zip');

if (!fs.existsSync(distDir)) {
  console.error('❌ Error: "dist" folder not found. Run "npm run build" first.');
  process.exit(1);
}

// Remove old dist.zip if it exists
if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

console.log('📦 Creating dist.zip for deployment...');

try {
  if (process.platform === 'win32') {
    // Windows PowerShell command
    execSync(`powershell -NoProfile -Command "Compress-Archive -Path dist/* -DestinationPath dist.zip -Force"`, {
      stdio: 'inherit',
      cwd: projectRoot,
    });
  } else {
    // macOS / Linux command: package contents of dist so index.html is at root of zip
    execSync(`cd dist && zip -r -q ../dist.zip .`, {
      stdio: 'inherit',
      cwd: projectRoot,
    });
  }

  if (fs.existsSync(zipFile)) {
    const stats = fs.statSync(zipFile);
    const sizeKB = (stats.size / 1024).toFixed(1);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    const displaySize = stats.size > 1024 * 1024 ? `${sizeMB} MB` : `${sizeKB} KB`;
    console.log(`✅ dist.zip successfully created (${displaySize}) at ${zipFile}`);
    console.log(`🚀 Ready for static hosting upload (e.g. Netlify Drop, Cloudflare Pages, S3/Vercel)`);
  } else {
    throw new Error('Archive was not created.');
  }
} catch (err) {
  console.error('❌ Failed to create dist.zip:', err.message);
  process.exit(1);
}
