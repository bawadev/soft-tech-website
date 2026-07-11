/**
 * SoftX World — LinkedIn Launch Kit compositor (Batch 2: posts 7–9)
 *
 * Composites text + branding onto the 3 new strategic-message backgrounds.
 * Produces 3 square post graphics (1200×1200) + 3 OG cards (1200×627).
 * Identical visual treatment to the original 6 posts.
 */
import { createCanvas, loadImage } from "canvas";
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const BG = new URL("../backgrounds/", import.meta.url).pathname;
const OUT = new URL("../final/", import.meta.url).pathname;
const LOGO = new URL("../../../../public/logo.png", import.meta.url).pathname;

const BLUE = "#0c62aa";
const WHITE = "#ffffff";

function withShadow(ctx, fn, { blur = 18, alpha = 0.5, y = 3 } = {}) {
  ctx.save();
  ctx.shadowColor = `rgba(0,0,0,${alpha})`;
  ctx.shadowBlur = blur;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = y;
  fn();
  ctx.restore();
}

function drawScrim(ctx, w, h, intensity = 0.35) {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, `rgba(8,40,75,${intensity})`);
  grad.addColorStop(0.5, `rgba(8,40,75,${intensity * 0.6})`);
  grad.addColorStop(1, `rgba(8,40,75,${intensity})`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}

async function drawBrandmark(ctx, { x, y, size, label = true }) {
  const logo = await loadImage(LOGO);
  ctx.drawImage(logo, x, y, size, size);
  if (label) {
    const fs = Math.round(size * 0.82);
    ctx.font = `700 ${fs}px Inter, "Helvetica Neue", Arial, sans-serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    const textX = x + size + Math.round(size * 0.28);
    const textY = y + size / 2;
    withShadow(ctx, () => ctx.fillText("SoftX", textX, textY));
    const wWidth = ctx.measureText("SoftX").width;
    ctx.font = `400 ${Math.round(fs * 0.78)}px Inter, "Helvetica Neue", Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.82)";
    ctx.fillText(" World", textX + wWidth, textY);
    ctx.fillStyle = WHITE;
  }
}

function drawUrl(ctx, w, h, text = "softx.world") {
  ctx.font = `500 22px Inter, Arial, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,0.78)";
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  withShadow(ctx, () => ctx.fillText(text, w - 40, h - 28));
  ctx.fillStyle = BLUE;
  ctx.beginPath();
  const dotX = w - 40 - ctx.measureText(text).width - 14;
  ctx.arc(dotX, h - 36, 4, 0, Math.PI * 2);
  ctx.fill();
}

const POSTS = [
  {
    bg: "post-7-agents",
    kicker: "THE SHAPE OF WHAT'S NEXT",
    headline: "Small team.\nAI-augmented.",
    body: "Senior engineers and AI agents replace departments.\nLess overhead. More speed.",
  },
  {
    bg: "post-8-design-filter",
    kicker: "DESIGN AS A FILTER",
    headline: "Premium design\nattracts the right customer.",
    body: "Not gimmicks. Not likes. Trust — earned\nbefore the first click.",
  },
  {
    bg: "post-9-ai-discoverable",
    kicker: "BUILT TO BE FOUND",
    headline: "Your next customer\nmay never visit your site.",
    body: "An engine will, on their behalf.\nWe build for that.",
  },
];

async function buildPost(spec) {
  const W = 1200, H = 1200;
  const bgBuf = await readFile(`${BG}${spec.bg}.png`);
  const bg = await loadImage(bgBuf);
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(bg, 0, 0, W, H);
  drawScrim(ctx, W, H, 0.28);
  await drawBrandmark(ctx, { x: 56, y: 56, size: 48 });

  const kickerY = 540;
  ctx.font = `600 22px Inter, Arial, sans-serif`;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = BLUE;
  ctx.beginPath();
  ctx.arc(64, kickerY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  withShadow(ctx, () => ctx.fillText(spec.kicker, 84, kickerY));

  ctx.font = `700 64px Inter, "Helvetica Neue", Arial, sans-serif`;
  ctx.fillStyle = WHITE;
  ctx.textBaseline = "top";
  let y = kickerY + 32;
  for (const line of spec.headline.split("\n")) {
    withShadow(ctx, () => ctx.fillText(line, 56, y), { blur: 22, alpha: 0.55, y: 4 });
    y += 76;
  }

  ctx.font = `400 26px Inter, Arial, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  y += 14;
  for (const line of spec.body.split("\n")) {
    withShadow(ctx, () => ctx.fillText(line, 56, y), { blur: 12, alpha: 0.45, y: 2 });
    y += 38;
  }

  drawUrl(ctx, W, H);

  ctx.fillStyle = `rgba(255,255,255,0.08)`;
  ctx.fillRect(0, 0, W, 4);
  ctx.fillStyle = BLUE;
  ctx.globalAlpha = 0.7;
  ctx.fillRect(0, 0, W, 3);
  ctx.globalAlpha = 1;

  const buf = canvas.toBuffer("image/jpeg", { quality: 0.9 });
  const outName = `${spec.bg.replace(/^post-\d+-/, "post-")}.jpg`;
  await writeFile(`${OUT}${outName}`, buf);
  console.log(`✓ ${outName} (${W}×${H}, ${(buf.length / 1024).toFixed(0)} KB)`);
}

async function buildOG(spec) {
  const W = 1200, H = 627;
  const bgBuf = await readFile(`${BG}${spec.bg}.png`);
  const cropped = await sharp(bgBuf).resize(W, H, { fit: "cover", position: "attention" }).jpeg().toBuffer();
  const bg = await loadImage(cropped);
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(bg, 0, 0);
  drawScrim(ctx, W, H, 0.34);
  await drawBrandmark(ctx, { x: 48, y: 36, size: 40 });

  ctx.font = `600 18px Inter, Arial, sans-serif`;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = BLUE;
  ctx.beginPath(); ctx.arc(60, 300, 4, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  withShadow(ctx, () => ctx.fillText(spec.kicker, 76, 300));

  ctx.font = `700 46px Inter, "Helvetica Neue", Arial, sans-serif`;
  ctx.fillStyle = WHITE;
  ctx.textBaseline = "top";
  let y = 326;
  for (const line of spec.headline.split("\n")) {
    withShadow(ctx, () => ctx.fillText(line, 48, y), { blur: 18, alpha: 0.55 });
    y += 54;
  }
  drawUrl(ctx, W, H);

  const buf = canvas.toBuffer("image/jpeg", { quality: 0.88 });
  const outName = `og-${spec.bg.replace(/^post-\d+-/, "")}.jpg`;
  await writeFile(`${OUT}${outName}`, buf);
  console.log(`✓ ${outName} (${W}×${H}, ${(buf.length / 1024).toFixed(0)} KB)`);
}

async function main() {
  for (const spec of POSTS) {
    await buildPost(spec);
    await buildOG(spec);
  }
  console.log("\nBatch 2 graphics composited.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
