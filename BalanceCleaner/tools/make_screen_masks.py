#!/usr/bin/env python3
import sys, glob, pathlib
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

GROW_FRAC = 0.004   # расширение маски в долях ширины / mask growth as fraction of width
ALPHA_THRESHOLD = 40

def process(path, out_dir):
    img = Image.open(path).convert("RGBA")
    width, height = img.size
    alpha = np.array(img)[:, :, 3]
    labels, count = ndimage.label(alpha < ALPHA_THRESHOLD)
    border = set(np.unique(np.concatenate([labels[0,:],labels[-1,:],labels[:,0],labels[:,-1]])))
    best, best_size = None, 0
    for l in range(1, count+1):
        if l in border: continue
        s = int((labels==l).sum())
        if s > best_size: best, best_size = l, s
    if best is None:
        print(f"[!] {path.name}: вырез не найден"); return
    hole = ndimage.binary_fill_holes(labels == best)
    grow = max(1, round(width * GROW_FRAC))
    m = Image.fromarray((hole*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(grow*2+1))
    mask = np.array(m) > 127
    ys, xs = np.where(mask)
    top, bottom, left, right = ys.min(), ys.max()+1, xs.min(), xs.max()+1
    c = mask[top:bottom, left:right]
    rgba = np.zeros((*c.shape, 4), dtype=np.uint8); rgba[...,:3]=255; rgba[...,3]=c*255
    out_dir.mkdir(parents=True, exist_ok=True)
    out = out_dir / f"{path.stem.replace(' ','-')}-mask.png"
    Image.fromarray(rgba,"RGBA").save(out)
    print(f"{path.name} -> {out.name} (grow {grow}px)")
    print(f"  --vid-top:{top/height*100:.3f}%; --vid-left:{left/width*100:.3f}%; --vid-w:{(right-left)/width*100:.3f}%; --vid-h:{(bottom-top)/height*100:.3f}%;")

def main():
    pats = sys.argv[1:] or ["assets/mockups/*.png"]
    files = sorted({pathlib.Path(p) for pat in pats for p in glob.glob(pat)})
    for f in files:
        if not f.stem.endswith("-mask"): process(f, f.parent/"masks")
main()
