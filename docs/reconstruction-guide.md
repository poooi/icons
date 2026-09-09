# Game icon reconstruction guide

Use this guide when adding or revising icons. It records the design and review decisions for this collection, including lessons from rejected reconstructions.

This is the current policy, consolidated after the September 2026 reconstruction and poi integration session. The other correction documents retain chronological evidence; an earlier experiment there is not an instruction to undo a later accepted correction.

## Start a new icon in this order

1. **Identify the symbol.** Check the current game atlas and equipment `api_type[3]`. A newly added equipment item may use an existing category icon and need no new SVG. Record the icon ID separately from the equipment ID. Do not assume IDs are continuous: icon 53 is unused in the reviewed atlas.
2. **Collect evidence before tracing.** Put the current small PNG, its larger source variants, relevant game card emblems and main equipment illustrations side by side. Include the nearest accepted family members. Resolve propulsion, viewpoint, major parts and occlusion before spending time on curves or decoration.
3. **Reuse the accepted family composition.** Copy a current sibling's canvas, transforms, body, badge and layer order together. Change only differences supported by the source. If the body is genuinely new, construct its complete silhouette independently of its badge first.
4. **Review the structural draft yourself.** Check object identity, direction, proportions, solid areas, holes, connections and overlaps enlarged, then check recognition at actual use size on white and dark backgrounds. Fix these before adding textures, highlights or tiny lettering details. Compare the whole affected family, not just the new file.
5. **Finish and review the actual final files.** Add the appropriate lettering, outline hierarchy and restrained surface treatment. Run the visual and technical checks below, correct every supported defect, then rerender. Independent review should examine the fixed assets, not stop at agreement that a problem exists.
6. **Publish only the checked revision.** Update the preview entry and evidence notes, optimize deliverable assets and recheck them. Verify the published file content. Keep a brief record of what was checked and what remains uncertain so the next contributor does not repeat the same investigation.

For one new icon, a compact record is sufficient:

```text
Icon ID / equipment ID(s):
Current PNG or atlas version / reference URLs:
Family and sibling SVG(s):
Observed structure / uncertain interpretation:
Source-specific differences and foreground/background order:
Changes propagated to other family members:
Reviewed sizes and backgrounds / renderer:
Defects fixed / accepted limitations / final revision:
```

Do not make the user act as the first visual reviewer. A clean enlarged contour alone is not acceptance, and collecting reference pictures is not completing the reconstruction.

## Scope and objective

Cover game-derived PNG icons across equipment, resources, proficiency, operations and ship status. Do not assume that every icon is equipment. Exclude the poi logo and other application-only artwork. Keep source IDs and source versions traceable. Write repository documentation in English.

The goal is a faithful, scalable game symbol. Preserve recognition through color, silhouette, orientation, occupied area, category marks and composition. Small lettering need not be readable. Do not freely redesign an uncertain symbol or treat a blurry pixel boundary as intentional geometry.

The chosen production method is controlled SVG reconstruction from the bitmap, supported by reference artwork. Automatic tracing can provide a rough contour but needs structural cleanup. Generic upscaling, including the Real-ESRGAN trial in this session, did not reliably preserve lettering. Image-to-image generation sometimes suggested a better aircraft concept, but it did not provide sufficient control over the final symbol. Neither an AI-generated interpretation nor an upscaled blur is structural evidence. Raster exports are made from the accepted SVG when a consumer requires PNG.

## Reference priority

1. Use the current game icon/atlas for category identity, color, viewpoint, composition and badge. Check the actual icon ID through equipment `api_type[3]`; equipment IDs are different identifiers.
2. Use the corresponding game equipment illustrations to resolve unclear structure. The classification emblem on a higher-resolution equipment card can be a clearer reference than the small atlas PNG. For abstract personnel/tools/facilities, inspect that emblem as well as the main illustration.
3. Use historical equipment photographs only as supplementary evidence when game artwork is still unclear. Game variants, especially hypothetical jet aircraft, must follow their game illustration rather than an invented historical extrapolation.

Record source links, the equipment identity, the structural detail used and any uncertainty. An archived card can have an outdated category badge: keep the current atlas badge. One category may cover several real designs; a representative photograph or illustration does not identify every member. Distinguish original aircraft, restorations, replicas and fictional configurations.

Conceptual completion is allowed where blur obscures a real structure, but it must be checked against the game artwork. State what is visible separately from what is inferred. Do not invent radar graduations merely because real radar displays often have them, or assign an uncertain projection a precise component name. The game illustration of hypothetical jet Shinden is more relevant to its silhouette than an extrapolation from historical propeller Shinden photographs.

## Families and consistency

Group related icons before drawing. Identical source airframes or bodies should share identical geometry, with only their source-defined color, lettering, badge and placement changing. The accepted generic carrier family is 6/7/8/9/45/46; keep its airframe unless a specific correction is requested.

Use one drawing vocabulary for related families, while retaining meaningful differences: propeller versus jet, tractor versus pusher, engine count, main wing versus canards, single versus twin floats, boat hull, rotor, gun count, antenna arrangement and viewpoint. Do not force all jets into one outline or treat the army-fighter category as exclusively twin-engined.

Compare the complete normalized composition, not only path strings: viewBox, every ancestor transform, silhouette scale and position, badge geometry and layer order all affect the visible cut. The carrier family uses one 54-unit canvas and identical aircraft placement; daytime 6/7/8/9 share badge geometry and placement. Night 45/46 retain their shared rounded badge. Twin-float 10/50/51 share one 54-unit canvas and aircraft transform.

Shared paths may be embedded in each standalone SVG. Apply a family geometry correction to all corresponding members. No external sprite or runtime font dependency is required.

The 8/9 regression is the warning case: identical path data still produced different wing cuts because their canvases, body scaling and badge placement differed. Compare rendered normalized compositions and all ancestor transforms. Do not repeatedly resize every aircraft because one reviewer finds badges prominent; first demonstrate a source-backed proportion error. Preserve legitimate propeller/jet, floatplane/flying-boat and day/night differences.

## Geometry and lettering

- Reconstruct meaningful smooth curves and straight edges. Color extraction and contour tracing are starting points, not finished SVGs. Remove pixel stair steps, accidental bumps, spurs, loops and isolated scraps.
- Use geometric primitives for genuinely geometric objects. A searchlight has a smooth circular lamp, explicit side handles/supports and a base; its blurry outer contour is not a scalloped circle.
- Resolve structure, not just outline: torpedo rudder notches, open wrench jaws, crane lattice, propeller blades, nacelles, floats, struts, mast gaps and track openings must remain intentional.
- Keep thin structures attached and large enough to render predictably. Do not rely on subpixel contacts or cover a malformed contour with an arbitrary thick stroke. Avoid tiny details that do not help recognition.
- Equipment and state lettering is bold Mincho/serif. Operation buttons use Noto Sans JP Bold (700), following their sans-serif source labels. All four operation labels share one font size and baseline, fitted to the complete longest label; preserve the font advance widths and use equal horizontal and vertical scale. The current outlined lettering uses Noto Serif JP ExtraBold (800); Source Han Serif or an appropriate free bold Japanese Mincho is also consistent with the design direction. Do not substitute sans-serif lettering outside the operation-button family. Deliver paths rather than requiring a font installation.

Every hexagonal aircraft badge is a regular point-up hexagon. In normalized 54-unit coordinates, its circumradius and each side are 12.25, with stroke width 2.4. Scale uniformly for a different viewBox; never flatten it in one axis. Placement follows composition. Night rounded rectangular badges are a separate design, not distorted hexagons.

Use a clear outline hierarchy rather than one universal stroke width. External contrast edges must survive on white; internal bands, braces and struts must not become equally heavy. White-filled equipment 13/14 needed stronger outside edges, while crane 26 needed a stronger main mast, boom and hook with lighter lattice. Equipment 32 needed its light-centered base back, not simply a thicker dark line. State graphics are large in use and can carry strong text outlines.

## Connectivity and overlap

Build a complete airframe first, then compose it with the badge. Inspect both the isolated silhouette and the final layered icon. A foreground badge must overlap actual aircraft geometry by an area, not merely touch its edge. Do not offset the aircraft away from the badge or shorten a wing to follow the badge border: both can expose background-colored seams at large sizes. Preserve legitimate space between the wing and tail; the requirement is a complete airframe under the badge, not filling every nearby negative space.

A connected path can still look broken when the badge hides a wing root and leaves an isolated tip. A contour can also technically connect while appearing to have a missing piece of wing. Check the complete wing profile, continuity into the fuselage, negative space against the frame and exposed tail/propeller details. Connected-component checks cannot judge these visual properties.

Icons 56 and 57 explicitly place the aircraft in front of the badge and lettering. Preserve that foreground overlap. For other icons, tune the geometry and spacing to preserve the intended layering and a visually complete silhouette; do not blindly reuse an offset or obscure lettering. Keep the direction and viewpoint of each game icon: never infer them merely from a related aircraft template.

Check the wing-to-badge region especially carefully in 39/49/58/59/60. A background-colored wedge beside the text frame can look like a missing wing even when the main path is connected. Fix the underlying wing/root geometry and overlap, rather than masking the seam or changing the badge outline to hide it.

Do not automatically delete every small detached component. In 22, two apparent droplets were the disconnected ends of a supported landing-gear structure. In 44, the isolated green point came from a source-backed upward projection. Restore their connections after checking the larger emblem. Conversely, do not connect unrelated parts just to reduce a connected-component count.

## Required visual review

Review each changed icon and its family against the source, on both dark and light backgrounds, in two independent passes:

- Enlarged: inspect at least 8 times its native size (for example 432 px for a 54-unit icon), and zoom further for suspect joins. Look for uneven curves, kinks, accidental points, disconnected scraps, hairlines, unintended holes, flattened circles/hexagons, seams and clipped or incomplete wings. Large clean shapes are part of the deliverable, not just a means of producing a tiny image.
- Actual use: equipment and resource icons must be inspected at 16, 18, 24, 32 and 48 px. Operation buttons, ship-state graphics and proficiency marks must instead be judged at their actual display sizes; illegibility at an unused 16–24 px size is not a defect. For equipment and resources, Check color/silhouette recognition, occupied area, thin-line disappearance, unwanted merging and badge balance. Tiny text may become unreadable; the shape and color still need to communicate the category.

Use equal rendered sizes for the main PNG/SVG comparison. A large SVG beside a much smaller PNG only tests contour interpretation, not relative occupied area or small-size readability. Show source PNGs with both smooth enlargement and nearest-neighbor enlargement when investigating blur; neither creates new detail. Label sizes and backgrounds in comparison sheets.

White and dark backgrounds are mandatory. Gray (`#808080`), dark green (`#244d3c`) and muted red (`#633743`) help diagnose theme-dependent losses; the dark review background used here was `#182129`. Compare the original on the same background before calling an issue a conversion regression. Smoke 54 is weak on gray in the original too; crane 26 retains a documented gray-background limitation. Do not redesign every icon for arbitrary colors without an actual product requirement. Light outlines may disappear on white, and dark hoses or bases may disappear on dark, so neither background alone is sufficient.

Only equipment/resources have the general 16–24 px acceptance requirement. The session's representative operation and status source frames were 78 and 85 px respectively; use the real consuming UI when available. Proficiency is a separate case: poi explicitly displays it at 14 px high, where rank/color distinction matters. Do not revive the rejected tiny-operation-label or tiny-state-label findings as new defects.

Judge contrasting outline weight primarily on a light background, then confirm it on dark. Distinguish object outlines from same-color joins, struts and internal mechanical lines. Strengthen outlines without closing holes or changing the underlying silhouette. Shell bands are surface markings on a continuous body; gun barrels need straight shafts and deliberate muzzle ends.

Compare related variants together. Recheck the final composite after any change to a badge, layer order or placement, even if the airframe path itself did not change. Iterate on discovered defects and rerender the changed assets. Do not describe small-size checks as enlarged visual review, or an isolated-path check as proof of a complete-looking composite.

Classify feedback as a demonstrated defect, a source-supported interpretation, or a non-blocking style observation. Fix demonstrated defects and have the result rechecked. Torpedo 5's remaining tail/body proportions and the general geometric appearance of some aircraft were observations without enough evidence to require another redraw. Do not present accepted limitations as perfect fidelity. A full-set sweep can find new defects after a targeted review passes; scan the remaining set once after broad changes, and rerender affected files after each correction rather than repeatedly rechecking unchanged work.

## Delivery checks

SVGs must parse and render without embedded bitmaps or external fonts/sprites. Check viewBox bounds, shared geometry, regular hexagon measurements and intended layer order where applicable. Use raster connectivity checks as supporting evidence for unintended fragments, and inspect their result visually. Preserve source links and document meaningful interpretations.

Verify that preview references resolve, and report the actual revision scope. A collected reference is not a completed reconstruction. After publication, verify the deployed revision and file content. Do not add a permanent generation pipeline unless one is requested; a repeatable family convention does not require a build system.

resvg comparisons are asset-rendering evidence, not Chrome/Electron application verification. Check the actual application when changing display sizing, theme handling or consumption paths. Optimization is also a change: compare before/after SVG rendering, and verify decoded PNG pixels after lossless optimization. The poi import used SVGO 4.1.0 multipass with `preset-default` and five decimal places, plus OxiPNG 10.2.1 `-o 4 --strip safe`; these are recorded working settings, not a reason to skip visual verification on later files.

Keep a SVG source even when a platform requires raster output. poi's native notification image loader required PNG, so operation assets have raster copies. Audit plugin paths and explicit display dimensions before deleting old PNGs or changing their intrinsic size. Five proficiency PNG consumers all fixed their display height, allowing 124 × 156 exports instead of 31 × 39 while retaining the old paths. See the [poi consumer audit](https://github.com/poooi/poi/blob/91d2385b/docs/proficiency-icon-consumers.md). Resource and equipment set choices are independent in poi; do not bundle them again during future imports.

## Small resource and interface symbols

Match the object's volume as well as its silhouette. A bullet needs a curved nose, cylindrical body and base rim; a thin wedge is not equivalent. Preserve source-specific effects such as water overflowing the repair bucket, even when a larger item illustration omits them. Use transparent cutouts for actual holes and inspect them on both backgrounds. Check the color of shared component edges as well as fills when making variants.

For decorated objects, establish the lid, body, perspective and cord placement before adding ornament. Keep uncertain botanical motifs documented as interpretations. Operation buttons have their own symbol composition and texture scale; do not substitute an equipment silhouette solely because it depicts the same kind of object. Compare character angle, placement and burst irregularity in state labels rather than imposing a generic radial badge.

## Specific mistakes to avoid repeating

| Object | Accepted reconstruction lesson |
| --- | --- |
| Gun mounts 1–4/16 | Straight continuous barrel shafts, deliberate muzzle ends and source-correct barrel count; the category emblem can differ from a representative weapon's main illustration. |
| Shell 12 / rockets 31 | One continuous shell with surface bands; three separate smooth rocket bodies with contrasting outlines. Bands must not split a body into floating pieces. |
| Searchlight 24 | Smooth round lamp with handles/supports and base, not a jagged traced perimeter. |
| Submarine equipment 42 | Preserve asymmetrical solid steps and narrow openings. Replacing these with a regular transparent grid was wrong. The upper-right dark region is supported, but its exact component identity is not established. |
| Night floatplane 51 | Keep the night glyph's dark edge on light backgrounds and softly fading navigation lights. Hard concentric circles were too literal and visually unlike the source. |
| Ammunition / steel / repair bucket | Two recognizable cylindrical bullets; thick closely stacked ingots rather than thin plates; water reaching and overflowing the bucket rim. Match volume and source-specific effects, not only boundary pixels. |
| Furniture boxes | Japanese gift wrapping: one band parallel to the box's local x axis, with a top knot and coherent continuation around the lid/body. No invented crossing front band. Gold leaf-like decoration is an interpretation, not a confirmed botanical identification. |
| Expedition compass | A thick case with a large top suspension loop and smaller side crown, all attached in one local coordinate system and projected together. Match source tilt, depth and loop length. Rotation about the center-to-loop local axis changes foreshortening; it is not another image-plane rotation. The needle's heading can move independently within the dial. |
| Operation buttons | Shared metal frame, plausible hammer/fasteners and recognizable propeller plane. Fit all sans-serif labels to the longest complete label using one size/baseline and uniform scaling; do not stretch X or Y to fill space. |

The fastest reliable first pass settles identity, projection, connectivity, family composition and small-size outline weight before ornament. These caused most of the session's avoidable redraws.
