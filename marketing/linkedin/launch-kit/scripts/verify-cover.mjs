/**
 * Quick verification: render the cover upscaled 2x so the text legibility
 * can be visually checked at a reasonable size (1128×191 is very thin).
 */
import sharp from "sharp";
await sharp("marketing/linkedin/launch-kit/final/cover.jpg")
  .resize(2256, 382, { fit: "fill" })
  .png()
  .toFile("/tmp/verify-cover-2x.png");
console.log("ok");
