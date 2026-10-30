/**
 * SoftX World — LinkedIn Launch Kit background generator (Batch 3: posts 10–19)
 *
 * 10 new backgrounds for organic-reach posts across 4 formats:
 *   - Contrarian takes (3)
 *   - Saveable frameworks (3)
 *   - Build-in-public transparency (2)
 *   - Audience questions (2)
 *
 * Cost: ~$0.02 × 10 = $0.20
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
  // ── Contrarian takes (3) ──
  {
    name: "post-10-wrong-thing",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: a single sharp arrow pointing confidently in the wrong direction, made of glass and light, against a dark void — the feeling of precise execution aimed at the wrong target. Stark, provocative, unsettling-but-clean. STYLE_PLACEHOLDER",
  },
  {
    name: "post-11-debt-decision",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: a glass structure being deliberately built with visible intentional joints and seams — not broken or decayed, but purposefully constructed with trade-offs visible. The feeling of a decision made on purpose, not an accident. Deliberate, architectural, honest. STYLE_PLACEHOLDER",
  },
  {
    name: "post-12-nobody-asked",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: a single ornate glowing glass ornament sitting alone in vast empty space — beautiful and elaborate but with no audience, no connection points, no context around it. The feeling of craftsmanship that serves no one. Isolated, ornate, lonely. STYLE_PLACEHOLDER",
  },

  // ── Saveable frameworks (3) ──
  {
    name: "post-13-three-questions",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: three clean geometric glass shapes arranged in a precise vertical column — a circle, a square, a triangle — each sharply defined and evenly spaced. The feeling of a simple, memorable checklist. Ordered, minimal, clear. STYLE_PLACEHOLDER",
  },
  {
    name: "post-14-rebuild-eval",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: two glass architectural structures side by side — one older and weathered, one new and clean — connected by a thin bridge of light. A decision point between them. The feeling of a measured evaluation, a fork in the road. Balanced, architectural, decisive. STYLE_PLACEHOLDER",
  },
  {
    name: "post-15-senior-signals",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: four distinct glass pillars of different heights standing in a row, each with a unique internal glow and texture — solid, grounded, each clearly different from the others. The feeling of distinct, recognizable qualities that set certain people apart. Strong, individual, clear. STYLE_PLACEHOLDER",
  },

  // ── Build-in-public / transparency (2) ──
  {
    name: "post-16-what-we-turn-down",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: a single open glass doorway with warm light beyond it, and a clear empty path leading away — the feeling of choosing to walk away, of deliberate refusal. A threshold, an exit, quiet confidence. Calm, decisive, spacious. STYLE_PLACEHOLDER",
  },
  {
    name: "post-17-discovery-process",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: a sequence of glass steps ascending gently from left to right, each one slightly higher, each illuminated — like a clear process unfolding step by step. The feeling of a visible, repeatable method. Sequential, transparent, steady. STYLE_PLACEHOLDER",
  },

  // ── Audience questions / discussion (2) ──
  {
    name: "post-18-rebuilt-three-times",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: three overlapping translucent glass layers stacked at slightly different angles, each version visible through the others — like something rebuilt multiple times, each iteration showing through. The feeling of repetition, iteration, honest frustration. Layered, complex, reflective. STYLE_PLACEHOLDER",
  },
  {
    name: "post-19-unbuild-one-thing",
    aspect_ratio: "1:1",
    prompt: "Square abstract composition: a single glass structure with one glowing element being gently pulled out or dissolving — a piece being removed from the whole, leaving a visible space. The feeling of relief, of removing what shouldn't be there. Clean, intentional, cathartic. STYLE_PLACEHOLDER",
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

console.log("\n=== Batch 3 background summary ===");
for (const r of results) console.log(r.ok ? `  ✓ ${r.name}` : `  ✗ ${r.name}: ${r.error}`);
const ok = results.filter((r) => r.ok).length;
console.log(`\n${ok}/${results.length} backgrounds generated`);
if (ok < results.length) process.exit(1);
