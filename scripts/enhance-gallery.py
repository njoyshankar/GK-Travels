#!/usr/bin/env python3
"""
Prepare GKVR gallery photos for the web - natural, unedited look.

Reads originals from gallery-raw/, corrects orientation, resizes to a
sensible web dimension and writes optimised JPEGs to public/gallery/.
No colour grading, sharpening or vignetting - photos stay as shot.

Usage: python3 scripts/enhance-gallery.py
"""

import json
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "gallery-raw"
OUT = ROOT / "public" / "gallery"
MAX_DIM = 1800
QUALITY = 88


def prepare(path: Path, out_path: Path):
    img = Image.open(path)
    img = ImageOps.exif_transpose(img).convert("RGB")
    img.thumbnail((MAX_DIM, MAX_DIM), Image.LANCZOS)
    img.save(out_path, "JPEG", quality=QUALITY, progressive=True, optimize=True)
    return img.size


def main():
    if not RAW.exists():
        sys.exit(f"Put original photos in {RAW} first.")
    OUT.mkdir(parents=True, exist_ok=True)
    files = sorted(
        p for p in RAW.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
    )
    if not files:
        sys.exit(f"No images found in {RAW}.")
    summary = []
    for i, path in enumerate(files, 1):
        out_path = OUT / f"g-{i:02d}.jpg"
        w, h = prepare(path, out_path)
        summary.append({"file": f"/gallery/g-{i:02d}.jpg", "src_name": path.name, "width": w, "height": h})
        print(f"{path.name} -> {out_path.name} ({w}x{h})")
    (ROOT / "scripts" / "gallery-manifest.json").write_text(json.dumps(summary, indent=2))
    print(f"\n{len(summary)} images prepared.")


if __name__ == "__main__":
    main()
