/**
 * SoftX World — LinkedIn Launch Kit background generator
 *
 * Generates 8 abstract backgrounds via fal.ai Nano Banana 2 in the softx.world
 * brand style (deep-blue glass-morphism, calm/premium). These are the base art
 * that text + branding get composited onto later.
 *
 * Cost: ~$0.02 × 8 = $0.16
 * Model: fal-ai/nano-banana-2 — best for abstract scenes + text-safe composition
 */
import { fal } from "@fal-ai/client";
import { writeFile, mkdir } from "node:fs/promises";

fal.config({ credentials: process.env.FAL_KEY });

const OUT = new URL("../backgrounds/", import.meta.url).pathname;

// A shared style anchor keeps the whole set cohesive. Every prompt references it.
const STYLE = [
  "premium enterprise software brand aesthetic",
  "deep brand blue #0c62aa fading to darker navy #0a3d6b",
  "frosted glass-morphism panels with soft white edge-light",
  "subtle abstract geometric tech forms: flowing circuit lines, node networks, soft data grids",
  "smooth gradient mesh, gentle depth-of-field bokeh",
  "calm, confident, unhurried — premium and minimal, not flashy",
  "generous clean negative space for text overlay, no text in the image itself, no logos, no people",
  "editorial tech photography, soft studio lighting, high-end, 2026",
].join("; ");

const SPECS = [
  // ── LinkedIn Company Page cover (1128 × 191, ultra-wide banner) ──
  {
    name: "bg-cover",
    aspect_ratio: "21:9", // closest to 1128×191; we crop to exact size in composite step
    prompt:
      "Ultra-wide panoramic abstract background for a LinkedIn company cover banner. " +
      "A wide horizontal sweep of flowing circuit lines and a faint node-network stretching across the frame, " +
      "with two softly glowing glass panels floating at different depths. " +
      "The left third is slightly darker (for a logo to sit over), the right two-thirds lighter and more open (for a tagline). " +
      STYLE,
  },

  // ── 6 square post graphics (1200 × 1200) — one per post theme ──
  {
    name: "post-1-intro",
    aspect_ratio: "1:1",
    prompt:
      "Square abstract composition: a single large frosted-glass panel floating over a deep blue gradient, " +
      "framed by delicate converging circuit lines that suggest a foundation being laid. " +
      "Quiet, architectural, confident — the feeling of a senior engineering partnership. " +
      "STYLE_PLACEHOLDER",
  },
  {
    name: "post-2-human-way",
    aspect_ratio: "1:1",
    prompt:
      "Square abstract composition: two interlocking soft glass forms — one geometric/precise, one organic/flowing — " +
      "meeting at a glowing seam of warm light. The precise and the human, joined. Calm and meaningful. " +
      "STYLE_PLACEHOLDER",
  },
  {
    name: "post-3-platforms",
    aspect_ratio: "1:1",
    prompt:
      "Square abstract composition suggesting a large-scale platform: layered glass planes receding into depth, " +
      "thin glowing connection lines between distant nodes, a sense of horizontal scale and real-time flow. " +
      "Architectural, engineered, monumental. " +
      "STYLE_PLACEHOLDER",
  },
  {
    name: "post-4-decades",
    aspect_ratio: "1:1",
    prompt:
      "Square abstract composition about longevity: a single glass monolith standing in clear space, " +
      "soft morning light slowly crossing it, delicate concentric rings radiating outward suggesting time and endurance. " +
      "Dignified, lasting, unhurried. " +
      "STYLE_PLACEHOLDER",
  },
  {
    name: "post-5-discovery",
    aspect_ratio: "1:1",
    prompt:
      "Square abstract composition about human discovery: a soft illuminated glass circle at the center like a conversation, " +
      "delicate hand-drawn-feeling lines radiating outward mapping thoughts and decisions, a quiet glow of understanding. " +
      "Warm, human, attentive. " +
      "STYLE_PLACEHOLDER",
  },
  {
    name: "post-6-few-clients",
    aspect_ratio: "1:1",
    prompt:
      "Square abstract composition about focus: a small cluster of three or four precisely arranged glass panels in sharp focus " +
      "in the foreground, surrounded by soft out-of-focus shapes blurred away into the background. " +
      "Depth, selectivity, deliberate focus on a few. " +
      "STYLE_PLACEHOLDER",
  },
].map((s) => ({ ...s, prompt: s.prompt.replace("STYLE_PLACEHOLDER", STYLE) }));

async function gen(spec) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`→ ${spec.name} (attempt ${attempt})`);
      const result = await fal.subscribe("fal-ai/nano-banana-2", {
        input: {
          prompt: spec.prompt,
          aspect_ratio: spec.aspect_ratio,
          num_images: 1,
          image_format: "png",
        },
      });
      const url = result.data.images[0].url;
      const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
      const out = `${OUT}${spec.name}.png`;
      await writeFile(out, buf);
      console.log(`  ✓ ${spec.name}.png (${(buf.length / 1024).toFixed(0)} KB)`);
      return { name: spec.name, ok: true };
    } catch (e) {
      console.error(`  ✗ attempt ${attempt}: ${e.message}`);
      if (attempt === 3) return { name: spec.name, ok: false, error: e.message };
    }
  }
}

const results = [];
// Run sequentially — fal.ai rate-limits aggressive concurrency and these are large.
for (const spec of SPECS) results.push(await gen(spec));

console.log("\n=== Background generation summary ===");
for (const r of results) console.log(r.ok ? `  ✓ ${r.name}` : `  ✗ ${r.name}: ${r.error}`);
const ok = results.filter((r) => r.ok).length;
console.log(`\n${ok}/${results.length} backgrounds generated`);
if (ok < results.length) process.exit(1);
