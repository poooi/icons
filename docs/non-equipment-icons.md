# Non-equipment icon reconstruction

This first pass adds all 27 remaining catalog entries: 11 resources, seven aircraft proficiency levels, four operation buttons and five ship-state labels. Equipment artwork is unchanged.

## Source and family decisions

| Family | Files | Source and reconstruction |
| --- | --- | --- |
| Resources | `svg/material/{1..8,10..12}.svg` | Original 27 px PNGs define composition. Existing 100 px resource variants help resolve barrel lids, shell bodies, ingot faces, mineral facets, torch piping, bucket water, development tools and screw threads. Their card backgrounds are not part of the new icons. |
| Furniture boxes | Material 10/11/12 | Shared box perspective and tied ribbon, with the original wood/dark/red colors and distinct trim. |
| Proficiency | `svg/airplane/alv1.svg` through `alv7.svg` | Shared blue vertical bars for 1–3, gold slanted bars for 4–6, double chevrons for 7. Preserve the 31 × 39 aspect ratio. Sharp outlines replace bitmap blur; intentional gradients/glow are not inferred from blur. |
| Operations | `svg/operation/{build,expedition,repair,sortie}.svg` | Preserve the 78 × 78 colored button composition. Share frame, honeycomb geometry and lettering alignment. The barrel shape also appears in the fuel resource. The sortie aircraft uses the accepted carrier drawing vocabulary in the source's cream color. |
| Ship states | `svg/state/{0..4}.svg` | Preserve the violet expedition, turquoise repair and yellow/orange/red damage sequence. Use one burst shape and consistent tilted two-character Mincho lettering. Leave space around glyphs to prevent accidental clipping. |

Source paths and historical variants remain in `catalog.js` and `sources.json`. Old poi material SVGs remain under `reference-svg/material/` and are selectable as reference variants; the new SVGs are separately reconstructed, not copies of those files.

All lettering uses Noto Serif JP ExtraBold (800), converted into paths. No font file, external sprite or bitmap is required. Color gradients and honeycomb patterns are local SVG paint definitions; unused definitions were removed. No permanent generation script was added.

## Review and limits

Compared each entry against its source at 18/24/32/48 px on dark and light backgrounds. Also inspected at eight times its viewBox width: resources at 256 px, proficiency at 248 px, operation buttons at 624 px and state labels at 680 px. Corrections included cylindrical shell bodies, smaller furniture ties, complete state lettering, a clearer sortie aircraft, consistent barrel colors and a correctly tiled honeycomb pattern.

This is a first reconstruction pass for user review. Some small resource details remain interpretations of the available PNGs. Gradients preserve basic material cues, while highlights, textures and decoration are simplified for clean enlarged rendering. Tiny button/state lettering may not be legible at the smallest sizes; color, silhouette and family remain the primary recognition cues. Operation labels use the requested Mincho family rather than reproducing the source's heavier bitmap lettering exactly.

The standalone preview now covers 86 of 86 catalog entries. This change does not integrate the new icons into poi or alter the original PNG inventory.
