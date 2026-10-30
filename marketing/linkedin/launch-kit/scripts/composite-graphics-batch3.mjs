/**
 * SoftX World — LinkedIn Launch Kit compositor (Batch 3: posts 10–19)
 *
 * FIX: Brandmark now renders on a semi-opaque rounded scrim so "SoftX World"
 * is always readable regardless of background darkness in the top-left corner.
 *
 * Produces 10 square post graphics (1200×1200) + 10 OG cards (1200×627).
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

/**
 * FIXED brandmark: draws a rounded semi-opaque dark scrim behind logo + text
 * so the wordmark is always legible against any background.
 */
async function drawBrandmark(ctx, { x, y, size, label = true }) {
  const logo = await loadImage(LOGO);

  // Measure wordmark width first
  const fs = Math.round(size * 0.82);
  ctx.font = `700 ${fs}px Inter, "Helvetica Neue", Arial, sans-serif`;
  const softXWidth = ctx.measureText("SoftX").width;
  ctx.font = `400 ${Math.round(fs * 0.78)}px Inter, "Helvetica Neue", Arial, sans-serif`;
  const worldWidth = ctx.measureText(" World").width;
  const textGap = Math.round(size * 0.28);
  const totalWidth = label ? size + textGap + softXWidth + worldWidth : size;

  // Draw rounded scrim behind the whole brandmark
  const pad = Math.round(size * 0.35);
  const scrimX = x - pad;
  const scrimY = y - pad;
  const scrimW = totalWidth + pad * 2;
  const scrimH = size + pad * 2;
  const radius = Math.round(scrimH * 0.22);

  ctx.save();
  ctx.fillStyle = "rgba(8, 30, 60, 0.55)";
  ctx.beginPath();
  ctx.roundRect(scrimX, scrimY, scrimW, scrimH, radius);
  ctx.fill();
  // Subtle white border for definition
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();

  // Draw logo on top of scrim
  ctx.drawImage(logo, x, y, size, size);

  // Draw wordmark
  if (label) {
    ctx.font = `700 ${fs}px Inter, "Helvetica Neue", Arial, sans-serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    const textX = x + size + textGap;
    const textY = y + size / 2;
    withShadow(ctx, () => ctx.fillText("SoftX", textX, textY), { blur: 4, alpha: 0.4, y: 1 });
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = `400 ${Math.round(fs * 0.78)}px Inter, "Helvetica Neue", Arial, sans-serif`;
    withShadow(ctx, () => ctx.fillText(" World", textX + softXWidth, textY), { blur: 4, alpha: 0.4, y: 1 });
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
  // ── Contrarian takes ──
  {
    bg: "post-10-wrong-thing",
    kicker: "THE HARD TRUTH",
    headline: "Most software fails because\nit builds the wrong thing well.",
    body: "Teams optimize for execution speed\nbefore validating direction.",
  },
  {
    bg: "post-11-debt-decision",
    kicker: "A DIFFERENT VIEW",
    headline: "Technical debt isn't a sin.\nIt's a decision.",
    body: "The question is whether you made it\non purpose — or by accident.",
  },
  {
    bg: "post-12-nobody-asked",
    kicker: "UNPOPULAR OPINION",
    headline: "Most features nobody asked for.\nAnd nobody uses.",
    body: "The best product decision is often\nto not build the thing at all.",
  },
  // ── Saveable frameworks ──
  {
    bg: "post-13-three-questions",
    kicker: "SAVE THIS",
    headline: "Three questions\nbefore any feature.",
    body: "What problem? For whom?\nHow will we know it worked?",
  },
  {
    bg: "post-14-rebuild-eval",
    kicker: "FRAMEWORK",
    headline: "Should you rebuild?\nA simple test.",
    body: "Lost context. Coupled code. Fear of the core.\nIf one: evolve. If three: rebuild.",
  },
  {
    bg: "post-15-senior-signals",
    kicker: "HOW WE HIRE",
    headline: "Four signals of\na senior engineer.",
    body: "They ask why. They simplify.\nThey own outcomes. They teach.",
  },
  // ── Build-in-public ──
  {
    bg: "post-16-what-we-turn-down",
    kicker: "BEHIND THE DECISION",
    headline: "What we turn down\n—and why.",
    body: "Not every engagement is a fit.\nThat's a feature, not a bug.",
  },
  {
    bg: "post-17-discovery-process",
    kicker: "HOW WE ACTUALLY WORK",
    headline: "Discovery first.\nAlways.",
    body: "Before architecture. Before code.\nWe talk to your customers.",
  },
  // ── Audience questions ──
  {
    bg: "post-18-rebuilt-three-times",
    kicker: "QUESTION",
    headline: "How many times\nhave you rebuilt\nthe same system?",
    body: "We're curious. What was the trigger\nthat finally made it stick?",
  },
  {
    bg: "post-19-unbuild-one-thing",
    kicker: "QUESTION",
    headline: "If you could un-build\none thing this year...",
    body: "What would it be — and why?\nWe read every answer.",
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

  // FIXED brandmark with scrim
  await drawBrandmark(ctx, { x: 56, y: 56, size: 44 });

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

  // Headline — adjust font size if 3 lines
  const headlineLines = spec.headline.split("\n");
  const headlineSize = headlineLines.length > 2 ? 52 : 64;
  ctx.font = `700 ${headlineSize}px Inter, "Helvetica Neue", Arial, sans-serif`;
  ctx.fillStyle = WHITE;
  ctx.textBaseline = "top";
  let y = kickerY + 32;
  const lineSpacing = headlineSize > 60 ? 76 : 62;
  for (const line of headlineLines) {
    withShadow(ctx, () => ctx.fillText(line, 56, y), { blur: 22, alpha: 0.55, y: 4 });
    y += lineSpacing;
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

  // FIXED brandmark with scrim
  await drawBrandmark(ctx, { x: 48, y: 32, size: 36 });

  ctx.font = `600 18px Inter, Arial, sans-serif`;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = BLUE;
  ctx.beginPath(); ctx.arc(60, 300, 4, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  withShadow(ctx, () => ctx.fillText(spec.kicker, 76, 300));

  const headlineLines = spec.headline.split("\n");
  const headlineSize = headlineLines.length > 2 ? 38 : 46;
  ctx.font = `700 ${headlineSize}px Inter, "Helvetica Neue", Arial, sans-serif`;
  ctx.fillStyle = WHITE;
  ctx.textBaseline = "top";
  let y = 326;
  const lineSpacing = headlineSize > 40 ? 54 : 46;
  for (const line of headlineLines) {
    withShadow(ctx, () => ctx.fillText(line, 48, y), { blur: 18, alpha: 0.55 });
    y += lineSpacing;
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
  console.log("\nBatch 3 graphics composited.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
