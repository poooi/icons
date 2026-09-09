# Game icon reconstruction guide

Use this guide when adding or revising icons. It records the design and review decisions for this collection, including lessons from rejected reconstructions.

## Scope and objective

Cover game-derived PNG icons across equipment, resources, proficiency, operations and ship status. Do not assume that every icon is equipment. Exclude the poi logo and other application-only artwork. Keep source IDs and source versions traceable. Write repository documentation in English.

The goal is a faithful, scalable game symbol. Preserve recognition through color, silhouette, orientation, occupied area, category marks and composition. Small lettering need not be readable. Do not freely redesign an uncertain symbol or treat a blurry pixel boundary as intentional geometry.

## Reference priority

1. Use the current game icon/atlas for category identity, color, viewpoint, composition and badge. Check the actual icon ID through equipment `api_type[3]`; equipment IDs are different identifiers.
2. Use the corresponding game equipment illustrations to resolve unclear structure. The classification emblem on a higher-resolution equipment card can be a clearer reference than the small atlas PNG. For abstract personnel/tools/facilities, inspect that emblem as well as the main illustration.
3. Use historical equipment photographs only as supplementary evidence when game artwork is still unclear. Game variants, especially hypothetical jet aircraft, must follow their game illustration rather than an invented historical extrapolation.

Record source links, the equipment identity, the structural detail used and any uncertainty. An archived card can have an outdated category badge: keep the current atlas badge. One category may cover several real designs; a representative photograph or illustration does not identify every member. Distinguish original aircraft, restorations, replicas and fictional configurations.

## Families and consistency

Group related icons before drawing. Identical source airframes or bodies should share identical geometry, with only their source-defined color, lettering, badge and placement changing. The accepted generic carrier family is 6/7/8/9/45/46; keep its airframe unless a specific correction is requested.

Use one drawing vocabulary for related families, while retaining meaningful differences: propeller versus jet, tractor versus pusher, engine count, main wing versus canards, single versus twin floats, boat hull, rotor, gun count, antenna arrangement and viewpoint. Do not force all jets into one outline or treat the army-fighter category as exclusively twin-engined.

Shared paths may be embedded in each standalone SVG. Apply a family geometry correction to all corresponding members. No external sprite or runtime font dependency is required.

## Geometry and lettering

- Reconstruct meaningful smooth curves and straight edges. Color extraction and contour tracing are starting points, not finished SVGs. Remove pixel stair steps, accidental bumps, spurs, loops and isolated scraps.
- Use geometric primitives for genuinely geometric objects. A searchlight has a smooth circular lamp, explicit side handles/supports and a base; its blurry outer contour is not a scalloped circle.
- Resolve structure, not just outline: torpedo rudder notches, open wrench jaws, crane lattice, propeller blades, nacelles, floats, struts, mast gaps and track openings must remain intentional.
- Keep thin structures attached and large enough to render predictably. Do not rely on subpixel contacts or cover a malformed contour with an arbitrary thick stroke. Avoid tiny details that do not help recognition.
- Equipment and state lettering is bold Mincho/serif. Operation buttons use Noto Sans JP Bold (700), following their sans-serif source labels. All four operation labels share one font size and baseline, fitted to the complete longest label (補給/入渠); preserve the font advance widths and use equal horizontal and vertical scale. The current outlined lettering uses Noto Serif JP ExtraBold (800); Source Han Serif or an appropriate free bold Japanese Mincho is also consistent with the design direction. Do not substitute sans-serif lettering outside the operation-button family. Deliver paths rather than requiring a font installation.

Every hexagonal aircraft badge is a regular point-up hexagon. In normalized 54-unit coordinates, its circumradius and each side are 12.25, with stroke width 2.1. Scale uniformly for a different viewBox; never flatten it in one axis. Placement follows composition. Night rounded rectangular badges are a separate design, not distorted hexagons.

## Connectivity and overlap

Build a complete airframe first, then compose it with the badge. Inspect both the isolated silhouette and the final layered icon.

A connected path can still look broken when the badge hides a wing root and leaves an isolated tip. A contour can also technically connect while appearing to have a missing piece of wing. Check the complete wing profile, continuity into the fuselage, negative space against the frame and exposed tail/propeller details. Connected-component checks cannot judge these visual properties.

Icons 56 and 57 explicitly place the aircraft in front of the badge and lettering. Preserve that foreground overlap. For other icons, tune the geometry and spacing to preserve the intended layering and a visually complete silhouette; do not blindly reuse an offset or obscure lettering. Keep the direction and viewpoint of each game icon: never infer them merely from a related aircraft template.

## Required visual review

Review each changed icon and its family against the source, on both dark and light backgrounds, in two independent passes:

- Enlarged: inspect at least 8 times its native size (for example 432 px for a 54-unit icon), and zoom further for suspect joins. Look for uneven curves, kinks, accidental points, disconnected scraps, hairlines, unintended holes, flattened circles/hexagons, seams and clipped or incomplete wings. Large clean shapes are part of the deliverable, not just a means of producing a tiny image.
- Actual use: inspect 18, 24, 32 and 48 px. Check color/silhouette recognition, occupied area, thin-line disappearance, unwanted merging and badge balance. Tiny text may become unreadable; the shape and color still need to communicate the category.

Compare related variants together. Recheck the final composite after any change to a badge, layer order or placement, even if the airframe path itself did not change. Iterate on discovered defects and rerender the changed assets. Do not describe small-size checks as enlarged visual review, or an isolated-path check as proof of a complete-looking composite.

## Delivery checks

SVGs must parse and render without embedded bitmaps or external fonts/sprites. Check viewBox bounds, shared geometry, regular hexagon measurements and intended layer order where applicable. Use raster connectivity checks as supporting evidence for unintended fragments, and inspect their result visually. Preserve source links and document meaningful interpretations.

Verify that preview references resolve, and report the actual revision scope. A collected reference is not a completed reconstruction. After publication, verify the deployed revision and file content. Do not add a permanent generation pipeline unless one is requested; a repeatable family convention does not require a build system.

## Small resource and interface symbols

Match the object's volume as well as its silhouette. A bullet needs a curved nose, cylindrical body and base rim; a thin wedge is not equivalent. Preserve source-specific effects such as water overflowing the repair bucket, even when a larger item illustration omits them. Use transparent cutouts for actual holes and inspect them on both backgrounds. Check the color of shared component edges as well as fills when making variants.

For decorated objects, establish the lid, body, perspective and cord placement before adding ornament. Keep uncertain botanical motifs documented as interpretations. Operation buttons have their own symbol composition and texture scale; do not substitute an equipment silhouette solely because it depicts the same kind of object. Compare character angle, placement and burst irregularity in state labels rather than imposing a generic radial badge.
