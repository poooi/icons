# Equipment corrections from game artwork

This revision addresses icons 5, 14, 16, 24, 26, 28, 29, 30, 31, 42 and 52, plus aircraft 56–60. The current game atlas controls category colors, labels and composition. The equipment illustrations and the clearer classification emblems in the upper-left of the cards resolve the blurred structures. The classification emblem is especially useful for abstract tools, facilities and personnel categories: the fairy artwork alone is not a literal depiction of those symbols.

The 390 × 390 cards were downloaded through kcwiki's MediaWiki imageinfo API and visually inspected. Color-contour extraction was only a starting point. Thin structures that broke during extraction were redrawn, and noise was removed. Geometry remains an icon-scale reconstruction rather than a scale technical drawing.

## Non-aircraft changes and references

| Icon | Correction | Game equipment references |
| --- | --- | --- |
| 5 | Replaced the arrow-like tails with notched tail rudders; shared the same torpedo shape across all three rows. | [13: 61cm三連装魚雷](https://uploads.kcwiki.cn/commons/8/86/Soubi013HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi013HD.png)); [15: 61cm四連装(酸素)魚雷](https://uploads.kcwiki.cn/commons/5/59/Soubi015HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi015HD.png)) |
| 14 | Corrected the broad repair-tool head, head/handle junction and tapered handle against the card emblem. | [42: 応急修理要員](https://uploads.kcwiki.cn/commons/6/66/Soubi042HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi042HD.png)); [43: 応急修理女神](https://uploads.kcwiki.cn/commons/a/a5/Soubi043HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi043HD.png)) |
| 16 | Corrected the high-angle mount silhouette and the angle and spacing of its two barrels. | [3: 10cm連装高角砲](https://uploads.kcwiki.cn/commons/1/16/Soubi003HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi003HD.png)); [10: 12.7cm連装高角砲](https://uploads.kcwiki.cn/commons/c/c5/Soubi010HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi010HD.png)) |
| 24 | Restored the side pivots, lower lens clearance, support silhouette and broad base. | [74: 探照灯](https://uploads.kcwiki.cn/commons/d/dd/Soubi074HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi074HD.png)) |
| 26 | Reconstructed the open crane tower, rising lattice boom, cable and hook. | [86: 艦艇修理施設](https://uploads.kcwiki.cn/commons/d/d5/Soubi086HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi086HD.png)) |
| 28 | Corrected the branched mast, antenna tips, tower bracing and signal mark; redrew thin lines after color extraction broke them. | [107: 艦隊司令部施設](https://uploads.kcwiki.cn/commons/0/06/Soubi107HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi107HD.png)); [531: 艦隊通信アンテナ](https://uploads.kcwiki.cn/commons/d/d7/Soubi531HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi531HD.png)) |
| 29 | Restored the open wrench jaws and the neck/handle shape. | [108: 熟練艦載機整備員](https://uploads.kcwiki.cn/commons/7/7a/Soubi108HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi108HD.png)) |
| 30 | Corrected the rangefinder housing, side extensions and the two dark openings. | [120: 91式高射装置](https://uploads.kcwiki.cn/commons/6/64/Soubi120HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi120HD.png)); [121: 94式高射装置](https://uploads.kcwiki.cn/commons/d/d7/Soubi121HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi121HD.png)) |
| 31 | Recovered the three separate projectile contours and their small end projections from the game card emblem. | [126: WG42 (Wurfgerät 42)](https://uploads.kcwiki.cn/commons/9/91/Soubi126HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi126HD.png)) |
| 42 | Separated the periscopes/antennae and crossbars above the curved hull symbol; removed the invented solid panel. | [210: 潜水艦搭載電探&水防式望遠鏡](https://uploads.kcwiki.cn/commons/3/3b/Soubi210HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi210HD.png)) |
| 52 | Corrected the turret, barrel, hull and lower track openings. | [496: 陸軍歩兵部隊](https://uploads.kcwiki.cn/commons/c/c3/Soubi496HD.png) ([source](https://zh.kcwiki.cn/wiki/File:Soubi496HD.png)) |

## Aircraft corrections

- All 16 hexagonal aircraft badges (6, 7, 8, 9, 37, 38, 39, 40, 44, 47, 48, 50, 56, 57, 59, 60) use a regular point-up hexagon with circumradius 12.25 in a normalized 54-unit canvas. Stroke width is 2.1 in the same coordinates. The 45-unit canvases scale these values uniformly. Placement follows the individual icon composition. Night-operation rounded rectangular badges are a different source design and remain rectangular.
- 56 (Me 262) and 57 (Shinden): reconstructed their game silhouettes, restored regular hexagons and full-height interceptor lettering, and placed the aircraft after the badge and lettering so its overlapping parts remain in front.
- 58 (night dive bomber): recovered the forward propeller, small projections and more specific wing/tail contour from equipment 552's game emblem and illustration.
- 59 (Ho229) and 60 (jet Shinden): rebuilt connected aircraft silhouettes using equipment 561 and 548. Reinforced an extremely thin projection on 60 to avoid isolated antialiasing pixels. Historical aircraft photographs were not used to invent the jet Shinden configuration.

The [aircraft reference gallery](https://poooi.github.io/icons/aircraft-references.html) links the exact game illustrations. The accepted carrier airframe paths are unchanged; only their hexagon construction was normalized as requested.

## Verification

Compared all 16 requested silhouettes with the originals, enlarged and at 18/24/32/48 px, on dark and light backgrounds. Checked equal edge lengths and normalized size for every hexagon, foreground layer order on 56/57, and connected rendered silhouettes on 59/60 at 540 px. All 59 SVGs parse without external image, font or sprite dependencies. The preview's existing filtering, source switching, size and theme checks still pass.

Very fine crane lattice and mast detail necessarily becomes less distinct at 18 px. Reference artwork is linked rather than bundled into the icon assets.

## Follow-up visual corrections

- 24: replaced the traced scalloped outline with concentric circles, rounded side handles and a clean support/base.
- 37/38: simplified and smoothed the game-emblem airframe contours, removing tiny unrelated fragments.
- 39: rebuilt the jet Keiun as one airframe and increased clearance from the badge so the final composite does not expose a disconnected tail fragment.
- 40: corrected orientation using equipment 200's game emblem rather than the previous hand-built jet template; reviewed tail/wing placement and badge clearance.
- 49: rebuilt a continuous heavy-bomber silhouette with integral wing/engine projections and tail.
- 58: rebuilt a continuous night-bomber outline and removed hairline fragments while preserving the source orientation.
- 60: reconstructed the complete main wing and its root with clean geometry; increased clearance above the frame so the visible wing no longer appears cut away. This supersedes the earlier narrow-outline repair.

Reviewed the eight follow-up icons at 432 px and at 18/24/32/48 px, on dark and light backgrounds, with a further 648 px close-up of 60. Checked the final composited aircraft color regions, not only the isolated SVG paths. See the [reconstruction guide](reconstruction-guide.md) for the reusable rules.

## Aircraft silhouettes under badges

Reviewed all 26 aircraft-category SVGs at 432 px after feedback about visible gaps, with icon 39 as the example. Twelve icons changed: 6, 7, 8, 9, 38, 39, 40, 44, 45, 46, 47 and 60.

- The shared carrier-family near wing (6/7/8/9/45/46) now continues beneath the badge. The same complete wing path is embedded in all six variants.
- Removed upward offsets from 38/39/40 that separated the aircraft from its foreground hexagon. Moved 44/47 down one native unit to establish overlap instead of nearly tangent edges.
- Removed the upward offset from 60 and completed its near-wing surface beneath the hexagon; moving it alone did not fill the missing wing area.

The badge geometry, fills, stroke widths and lettering remain unchanged. Icons 56/57 retain their intentional aircraft-in-front ordering and were not edited. Other aircraft were reviewed but not changed in this pass.

Inspected final composites at 432 px and 18/24/32/48 px on light and dark backgrounds. Separately rendered aircraft and badge layers confirm a positive overlap area in every changed icon; badge XML comparisons confirm unchanged badge geometry. This supplements visual inspection of the exposed silhouette and does not establish fidelity by itself. SVG parsing and the preview DOM checks passed. No mask, clipping cutout or thicker outline was used to conceal the gap.


## Outline, projectile and aircraft-family follow-up

- 1/2/3: rebuilt mount contours and straight twin/twin/triple barrel polygons, preserving category colors and orientation. References: [12.7 cm twin mount](https://uploads.kcwiki.cn/commons/3/38/Soubi002HD.png), [20.3 cm twin mount](https://uploads.kcwiki.cn/commons/e/e9/Soubi006HD.png), and [41 cm twin mount](https://uploads.kcwiki.cn/commons/f/fb/Soubi008HD.png). The large-gun category emblem governs its three-barrel count, even though the representative weapon illustration has two.
- 4: straightened the secondary-gun barrel and simplified its mount against the [15.2 cm single mount](https://zh.kcwiki.cn/wiki/File:Soubi011HD.png).
- 12: rebuilt one continuous shell with dark-red surface bands, three perforations and surrounding particles. Reference: [Type 3 shell](https://zh.kcwiki.cn/wiki/File:Soubi035HD.png), including the category emblem.
- 31: rebuilt three individually closed, smooth rocket bodies with dark outlines. Reference: [WG42](https://uploads.kcwiki.cn/commons/9/91/Soubi126HD.png); the small category PNG supplies the outline absent from the card emblem.
- Strengthened existing contrasting contours on 4/13/14/17/19/23/24/25/28/29/30/32/34/35. The sixteen regular aircraft hexagons now use a 2.4-unit outline at normalized size 54; their radius remains 12.25. Rounded night badges use 1.9. Structural lines such as float struts and radar plots are not outline-weight targets.
- Reviewed all 26 aircraft icons against the original PNGs as families. Shared paths had hidden different effective scales: 6/7/8 now match 9's 54-unit composition and badge placement. All six carrier silhouettes (6/7/8/9/45/46) share paths and transforms, including a complete wing root under both badge styles. Colors and lettering remain category-specific.
- Twin-float 10 now matches the normalized placement and scale of 50/51; 51 retains its lights. Central-float 43, distinct land aircraft and individual jet configurations remain separate designs. Icons 56/57 retain their foreground-aircraft layer order.

Reviewed 40 changed SVGs at 432 px and 18/24/32/48 px on light and dark backgrounds. Extra magnification exposed a residual carrier wing/badge seam, prompting another shared wing-root correction. Geometry checks cover full family groups including transforms, regular hexagons, foreground exceptions, SVG parsing, external dependencies and raster bounds. Preview DOM checks cover 86 entries and 344 image references. These remain category-symbol reconstructions, not scale drawings of every referenced weapon.


## Small-size contrast review

After independent five-background review, strengthened the external contours of equipment 13/14 while keeping shell bands lighter. Equipment 26 now separates the heavier mast, boom and hook from thinner lattice braces. Equipment 32 restores the light-colored center of its base. Equipment 51 restores the dark outline behind the night lettering and uses radial, fading navigation lights instead of hard concentric rings; its shared twin-float geometry remains unchanged.

Resource 3 was checked against both `original/poi/img/material/03.png` and `3_big.png`. Its two steel ingots now have deeper side faces and closer placement, retaining the existing metallic face treatment. The larger source supports correcting volume and spacing, rather than redesigning the material symbol.

Reviewed all six modified assets at 432 px on white and dark backgrounds and at 16/18/24/32/48 px on white, dark, gray, dark green and muted red. Small-size acceptance applies only to equipment and resources. No operation, ship-state or proficiency asset was changed for artificial small-size legibility. The previously reviewed aircraft-family scale and badge placement are retained; the review did not establish a sufficient reason for another family-wide resize. These are resvg asset checks, not a Chrome/Electron rendering test.
