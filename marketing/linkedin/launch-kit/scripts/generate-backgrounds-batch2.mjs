/**
 * SoftX World — LinkedIn Launch Kit background generator (Batch 2: posts 7–9)
 *
 * Generates 3 new abstract backgrounds for the strategic-message posts:
 *   - post-7-agents         (small team, AI-augmented)
 *   - post-8-design-filter  (premium design as filter)
 *   - post-9-ai-discoverable (built to be found by AI engines)
 *
 * Cost: ~$0.02 × 3 = $0.06
 * Model: fal-ai/nano-banana-2
 */
import { fal } from "@fal-ai/client";
import { writeFile } from "node:fs/promises";

fal.config({ credentials: process.env.FAL_KEY });

const OUT = new URL("../backgrounds/", import.meta.url).pathname;

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
  {
    name: "post-7-agents",
    aspect_ratio: "1:1",
    prompt:
      "Square abstract composition: a few small glowing glass nodes orbiting a single precise luminous core, each node connected to the core and to each other by thin living lines of light — the feeling of a small coordinated system moving together at speed. The core is sharp and deliberate; the nodes are bright, agile, clearly working in concert. Fast, coordinated, alive. STYLE_PLACEHOLDER",
  },
  {
    name: "post-8-design-filter",
    aspect_ratio: "1:1",
    prompt:
      "Square abstract composition: a single sharply-focused glass prism at the center splitting incoming light into one clear deliberate beam that travels forward, while other softer rays diffuse and scatter harmlessly away into the dark — the feeling of a precise filter that lets only the right signal through. Selective, refined, intentional. STYLE_PLACEHOLDER",
  },
  {
    name: "post-9-ai-discoverable",
    aspect_ratio: "1:1",
    prompt:
      "Square abstract composition: a clean geometric glass lattice structure with regular square openings, parallel rays of light passing cleanly through the lattice in structured aligned rows — the feeling of a system built to be read, indexed, and found by something looking in from the outside. Open, structured, legible, findable. STYLE_PLACEHOLDER",
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
for (const spec of SPECS) results.push(await gen(spec));

console.log("\n=== Batch 2 background summary ===");
for (const r of results) console.log(r.ok ? `  ✓ ${r.name}` : `  ✗ ${r.name}: ${r.error}`);
const ok = results.filter((r) => r.ok).length;
console.log(`\n${ok}/${results.length} backgrounds generated`);
if (ok < results.length) process.exit(1);
