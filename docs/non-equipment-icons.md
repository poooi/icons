# Non-equipment icon reconstruction

The collection contains 27 non-equipment SVGs: 11 resources, seven aircraft proficiency levels, four operation buttons and five ship-state labels. This revision rechecks all 27 against their PNG sources after feedback about distorted shapes. Equipment artwork is unchanged.

## References

The original small PNG controls composition, angle and occupied area. The 100 px resource card variants in `original/poi/img/material/*_big.png` help resolve material surfaces and tool structure; their hexagonal card background is excluded. Card art does not override a source-specific detail: the repair bucket must retain the water spilling over its rim in the small icon.

Furniture references:

- [Small box, ItemIcon010](https://uploads.kcwiki.cn/commons/f/f7/ItemIcon010.png)
- [Medium box, ItemIcon011](https://uploads.kcwiki.cn/commons/0/06/ItemIcon011.png)
- [Large box, ItemIcon012](https://uploads.kcwiki.cn/commons/c/c3/ItemIcon012.png)

These show Japanese gift boxes with shallow lids and cords lying against the lid and right side. The medium and large boxes have gold botanical decoration. Fan-shaped leaves are reconstructed from the visible pattern; identification as ginkgo is plausible but not confirmed by these images.

## Corrections

| Family | Changes |
| --- | --- |
| Fuel | Paired cylindrical drums, pale elliptical lids, raised hoops and vertical highlights. |
| Ammunition | Two solid cylindrical bullets with curved pointed noses, shaded bodies and rounded base rims, retaining the small icon's left-facing arrangement. |
| Steel and bauxite | Beveled metal ingots and irregular brown ore blocks with separate light top faces and darker mineral patches. |
| Instant construction | Torch reservoir, metal base and nozzle, looped tubing, and layered flame. |
| Instant repair | Water reaches the bucket rim and spills over the front-right edge in one continuous rounded shape. |
| Development material | Rounded silver/gold tool heads and tapered shafts over a toothed gear with a transparent aperture. |
| Improvement material | Broad elliptical cross-head screw, head thickness and shaded threaded shaft. |
| Furniture | Shared shallow lid and low cord knot, wood slats, dark/red lacquer and gold fan-leaf motifs. |
| Proficiency | Original bar/chevron counts and angles, pale beveled edges and restrained translucent outer edging. |
| Operations | Hammer and nails, tilted compass, paired colored drums and source-specific sortie plane with propeller disc; denser honeycomb pattern and adjusted lettering proportions. |
| Ship states | Uneven off-centre burst and diagonally placed, clockwise-rotated characters with complete outlines. |

Use shared geometry only where the source actually shares it. For example, a small operation-button plane should follow that button's silhouette rather than automatically inheriting an equipment-category airframe.

## Verification and limits

All 27 SVGs were rendered and compared against their sources at eight times native viewBox width and at 18/24/32/48 px on light and dark backgrounds. The enlarged review caught an incorrect ingot side face, an opaque gear aperture, missing paint definitions and green edging on the pink drum; these were corrected before publication. Rendered alpha bounds stay within the canvas. XML parsing, local paint references and absence of embedded bitmap/font dependencies were checked. The preview's 86 entries, 344 image references, filtering, source switching and size/theme controls passed the offline DOM check.

Lettering uses outlined Noto Serif JP ExtraBold (800). The source's bitmap typeface is not reproduced exactly. Small decoration and mineral surfaces remain interpretations, with simplified shading; this revision still needs visual feedback on fidelity. No permanent generation script was added. Original PNGs and historical SVG references remain available in the preview.
