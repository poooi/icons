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

## Follow-up: ties, button surfaces and outlines

The three furniture boxes use a single band parallel to the box's long x edge, tied on top and continuing down the right side. The opposite side is hidden by the box; no second crossing band runs down the front. The approved botanical decoration is retained.

Operation buttons gain shaded panels and inset edge highlights. The factory hammer has a distinct striking face, metal neck, curved claw and shaded red grip; its two fasteners have flat round heads and slender pointed shafts. The compass is reconstructed with its loop behind the left side of the case, rather than at the top of the ellipse. Its oblique dial, lower gold case and red/black needle follow the original button's placement. Barrel shading and the sortie aircraft's surface shading are strengthened.

Button lettering outlines increase from 1 to 1.85 units; state lettering increases from 2.2 to 3.8 units, painted behind the glyph fill. The 12 revised icons were checked at 8 times native width and 18/24/32/48 px on both backgrounds, including the complete lettering bounds and the bands' continuity around the lid.

## Operation button type and metal frame

The four operation labels now use outlined Noto Sans JP Bold (700). A single font size (approximately 15.20 units in the 78-unit viewBox) fits the longest label, `補給/入渠`, within 66 units of ink width plus its outline. All labels retain the font's native advance widths, equal X/Y scaling and one baseline. Shorter labels are centered without widening them. This supersedes the Mincho lettering described in earlier operation revisions; equipment and state labels retain Mincho.

The shared border uses a metallic gradient face, a fine bright lip, a darker outer edge and an inset shadow. The four updated buttons were visually checked at 624 px and 18/24/32/48 px on both backgrounds. The longest label is complete, and SVG paint references and rendered bounds passed validation.

## Compass structure and sortie aircraft

The compass has a large suspension loop at its top and a smaller knurled crown on its side. In the oblique view, the top loop projects toward the upper left, while the side crown projects toward the lower left. An earlier revision reversed these two attachments; their positions and relative sizes are now corrected. Parallel oblique rims and a displaced lower brass shell express its thickness; the red/black needle and central pivot establish the dial direction. The corrected attachments were inspected at 624 px and 18/24/32/48 px on both backgrounds, with local paint references and rendered bounds checked.

The sortie aircraft now has a complete continuous main wing beneath a rounded, tapered fuselage, an engine cowling, framed canopy, horizontal stabilizer, upright tail fin and two-bladed nose propeller. Separate surface shading clarifies the wing/body overlap without fragmenting the silhouette. It retains the source's cream color and front-left viewpoint.

Both buttons were inspected at 624 px and 18/24/32/48 px against dark and light backgrounds. The enlarged check removed an inconsistent side-shell contour; the final SVGs parse, resolve local paints and remain inside their rendered bounds. The preview DOM check passed. Common sans-serif labels and metal frames are unchanged.

## Shared projection for compass attachments

The dial, top loop and side crown are now constructed in the same front-view coordinate system and share one affine projection. The loop is centered on the dial's top axis; the crown extends radially from its side and sits halfway through the case depth. The lower case uses the same projection with a depth offset. This replaces independently positioned screen-space attachments, which did not rotate coherently with the dial.

This revision also removes the incorrect crossing furniture band. All four revised icons were inspected enlarged and at 18/24/32/48 px on both backgrounds. SVG parsing, paint references and rendered bounds passed.

The compass assembly is rotated a further 12 degrees counterclockwise to bring its face axis closer to the source (approximately 40 degrees from the horizontal). The needle heading is adjusted independently within the shared projected dial, as a compass needle is not fixed to its case.
