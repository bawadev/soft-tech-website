/**
 * SoftX World — LinkedIn Launch Kit compositor
 *
 * Takes the 7 generated backgrounds and composites crisp text + branding onto
 * them using node-canvas. Text rendered this way is always sharper and more
 * consistent than AI-generated text.
 *
 * Outputs:
 *   final/cover.jpg          — 1128×191 LinkedIn Company Page cover
 *   final/post-1.jpg … post-6.jpg — 1200×1200 LinkedIn post graphics
 *   final/og-*.jpg           — bonus 1200×627 OG-card variants of each post
 */
import { createCanvas, loadImage, registerFont } from "canvas";
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const BG = new URL("../backgrounds/", import.meta.url).pathname;
const OUT = new URL("../final/", import.meta.url).pathname;
const LOGO = new URL("../../../../public/logo.png", import.meta.url).pathname;

// ─── Brand tokens (from positioning.md + tailwind config) ───────────────
const BLUE = "#0c62aa";
const BLUE_DEEP = "#0a3d6b";
const WHITE = "#ffffff";

// ─── Text helpers ───────────────────────────────────────────────────────

/**
 * Wrap text to a max width, measuring with the current ctx font.
 */
function wrapText(ctx, text, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/**
 * Draw text with a subtle shadow for legibility on any background.
 */
function textWithShadow(ctx, x, y, color = WHITE, shadowAlpha = 0.45) {
  ctx.save();
  ctx.shadowColor = `rgba(0,0,0,${shadowAlpha})`;
  ctx.shadowBlur = 16;
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = color;
  ctx.fillText("", x, y); // prime the shadow state
  ctx.restore();
  ctx.fillStyle = color;
  ctx.fillText(ctx._pendingText ?? "", x, y);
}
// simpler: just set shadow on ctx before fillText. We'll inline it below.

function withShadow(ctx, fn, { blur = 18, alpha = 0.5, y = 3 } = {}) {
  ctx.save();
  ctx.shadowColor = `rgba(0,0,0,${alpha})`;
  ctx.shadowBlur = blur;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = y;
  fn();
  ctx.restore();
}

// ─── Common overlays ────────────────────────────────────────────────────

/**
 * Draw a subtle scrim to deepen the background where text will sit, so white
 * text always has sufficient contrast. Mimics the site's gradient overlays.
 */
function drawScrim(ctx, w, h, intensity = 0.35) {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, `rgba(8,40,75,${intensity})`);
  grad.addColorStop(0.5, `rgba(8,40,75,${intensity * 0.6})`);
  grad.addColorStop(1, `rgba(8,40,75,${intensity})`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}

/**
 * Draw the SoftX logo (from public/logo.png) at the top-left + wordmark.
 * If the logo has transparent padding we just place it cleanly.
 */
async function drawBrandmark(ctx, { x, y, size, color = WHITE, label = true }) {
  const logo = await loadImage(LOGO);
  // Draw logo at given size
  ctx.drawImage(logo, x, y, size, size);

  if (label) {
    const fs = Math.round(size * 0.82);
    ctx.font = `700 ${fs}px Inter, "Helvetica Neue", Arial, sans-serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    const textX = x + size + Math.round(size * 0.28);
    const textY = y + size / 2;
    withShadow(ctx, () => ctx.fillText("SoftX", textX, textY));
    // "World" in lighter weight, slightly smaller
    ctx.font = `400 ${Math.round(fs * 0.78)}px Inter, "Helvetica Neue", Arial, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.82)";
    const wWidth = ctx.measureText("SoftX").width;
    ctx.font = `400 ${Math.round(fs * 0.78)}px Inter, "Helvetica Neue", Arial, sans-serif`;
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
  // small dot accent before URL
  ctx.fillStyle = BLUE;
  ctx.beginPath();
  const dotX = w - 40 - ctx.measureText(text).width - 14;
  ctx.arc(dotX, h - 36, 4, 0, Math.PI * 2);
  ctx.fill();
}

// ─── 1. Company Page cover (1128 × 191) ────────────────────────────────

async function buildCover() {
  const W = 1128, H = 191;
  // Start from the wide background, crop to exact size
  const bgBuf = await readFile(`${BG}bg-cover.png`);
  const cropped = await sharp(bgBuf)
    .resize(W, H, { fit: "cover", position: "attention" })
    .jpeg({ quality: 88 })
    .toBuffer();

  const bg = await loadImage(cropped);
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(bg, 0, 0);

  // Scrim — a bit stronger here because LinkedIn compresses heavily
  drawScrim(ctx, W, H, 0.32);

  // Brandmark bottom-left-ish (LinkedIn overlays logo bottom-left, so put
  // brandmark top-left to avoid collision)
  await drawBrandmark(ctx, { x: 44, y: 40, size: 56 });

  // Tagline centered-right
  ctx.font = `600 30px Inter, Arial, sans-serif`;
  ctx.fillStyle = WHITE;
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  withShadow(ctx, () => ctx.fillText("Enterprise software, built the human way.", W - 44, H / 2));

  // Sub-tagline below
  ctx.font = `400 16px Inter, Arial, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,0.72)";
  withShadow(ctx, () =>
    ctx.fillText("Platform Engineering · Design · Growth · Partnership", W - 44, H / 2 + 26),
  );

  const buf = canvas.toBuffer("image/jpeg", { quality: 0.9 });
  await writeFile(`${OUT}cover.jpg`, buf);
  console.log(`✓ cover.jpg (${W}×${H}, ${(buf.length / 1024).toFixed(0)} KB)`);
}

// ─── 2. Post graphics (1200 × 1200) ────────────────────────────────────

const POSTS = [
  {
    bg: "post-1-intro",
    kicker: "WELCOME TO SOFTX WORLD",
    headline: "Enterprise software.\nBuilt the human way.",
    body: "A senior engineering partner for platforms that need to last —\nnot just launch.",
  },
  {
    bg: "post-2-human-way",
    kicker: "OUR DIFFERENCE",
    headline: "Anyone can generate\nsoftware now.",
    body: "Understanding people — your customers, their trust —\nis the part that can't be automated.",
  },
  {
    bg: "post-3-platforms",
    kicker: "PLATFORM ENGINEERING",
    headline: "Platforms built for\ndecades of growth.",
    body: "Real-time systems, payments, identity, scale —\nengineered by senior people who stay.",
  },
  {
    bg: "post-4-decades",
    kicker: "ENGINEERED TO LAST",
    headline: "Engagements measured\nin years, not sprints.",
    body: "Architecture that evolves with your business.\nProduction ownership that doesn't hand off.",
  },
  {
    bg: "post-5-discovery",
    kicker: "HUMAN-LED DISCOVERY",
    headline: "We start with your\ncustomers.",
    body: "Real conversations, real psychology, real decision journeys —\nbefore a single line of code.",
  },
  {
    bg: "post-6-few-clients",
    kicker: "BY DESIGN",
    headline: "A few clients,\nat a time.",
    body: "A deliberately small roster means senior people stay close\nto every build, every week.",
  },
];

async function buildPost(spec) {
  const W = 1200, H = 1200;
  const bgBuf = await readFile(`${BG}${spec.bg}.png`);
  const bg = await loadImage(bgBuf);

  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(bg, 0, 0, W, H);

  // Scrim — a touch lighter than cover, these are artful
  drawScrim(ctx, W, H, 0.28);

  // Brandmark top-left
  await drawBrandmark(ctx, { x: 56, y: 56, size: 48 });

  // Kicker — small uppercase label with a blue accent dot before it
  const kickerY = 540;
  ctx.font = `600 22px Inter, Arial, sans-serif`;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.letterSpacing = "3px";
  // blue accent dot
  ctx.fillStyle = BLUE;
  ctx.beginPath();
  ctx.arc(64, kickerY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  withShadow(ctx, () => ctx.fillText(spec.kicker, 84, kickerY));

  // Headline — large, bold, white, left-aligned, two lines
  ctx.font = `700 64px Inter, "Helvetica Neue", Arial, sans-serif`;
  ctx.fillStyle = WHITE;
  ctx.textBaseline = "top";
  const headlineLines = spec.headline.split("\n");
  let y = kickerY + 32;
  for (const line of headlineLines) {
    withShadow(ctx, () => ctx.fillText(line, 56, y), { blur: 22, alpha: 0.55, y: 4 });
    y += 76;
  }

  // Body — smaller, lighter, below headline
  ctx.font = `400 26px Inter, Arial, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  y += 14;
  for (const line of spec.body.split("\n")) {
    withShadow(ctx, () => ctx.fillText(line, 56, y), { blur: 12, alpha: 0.45, y: 2 });
    y += 38;
  }

  // URL bottom-right
  drawUrl(ctx, W, H);

  // Thin top + bottom rule in brand blue, very subtle
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

  return outName;
}

// ─── 3. Bonus: OG-card (1200×627) variants for each post ──────────────

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
  ctx.fillStyle = "rgba(255,255,255,0.8)";
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

// ─── Run ────────────────────────────────────────────────────────────────

async function main() {
  await buildCover();
  for (const spec of POSTS) {
    await buildPost(spec);
    await buildOG(spec);
  }
  console.log("\nAll graphics composited.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
