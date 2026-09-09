# Icon families and reconstruction evidence

Use the [reconstruction guide](reconstruction-guide.md) as the current checklist for new and revised icons.

## Rules for the whole collection

The original game icon remains the composition reference. The corresponding game equipment illustration is the primary reference for uncertain structure; historical photographs are supplementary. This evidence does not replace the game icon with an illustration of a different object.

- Group icons by shared geometry before drawing. Reuse the same paths for genuinely identical bodies, changing only the source-defined color, lettering, badge or placement.
- Keep meaningful differences: propulsion, number and position of engines, wing layout, float arrangement, barrel count, antenna shape and viewpoint. Similar category names alone do not justify identical silhouettes.
- Use the same curve treatment and detail scale within a family. Keep negative spaces large enough to survive small rendering sizes. Avoid panel lines, rivets and other details that do not help recognition.
- Retain source colors and badge placement. Lettering uses outlined Noto Serif JP ExtraBold (800), a Mincho serif. Tiny text need not be readable.
- Consult the corresponding game equipment illustration before interpreting an ambiguous structural feature; use historical photographs only when the game artwork still leaves it unclear. Record the image, equipment identity, observation and affected icons. Distinguish historical photographs, preserved/restored objects, replicas and conjectural game equipment.
- Review the family together against the PNGs at large size and at 18/24/32/48 px on dark and light backgrounds. Inspect exceptions individually, especially details hidden by badges.

For non-aircraft icons, apply the same grouping rule to gun mounts, torpedo/rocket shapes, radar/sonar symbols, resources and status/proficiency variants. Do not add realistic radar-display markings to an abstract symbol without evidence in the original. These groups have not received the aircraft revision described below.

## Latest correction pass

[Equipment correction notes](equipment-corrections.md) supersede the earlier status below for aircraft 56–60 and all hexagonal aircraft badges. The remaining family descriptions document the earlier reconstruction pass.

## Game-art reference update

The [aircraft reference gallery](https://poooi.github.io/icons/aircraft-references.html) now contains 26 examined game illustrations for the 20 aircraft icons outside the accepted carrier family. See [the mapping](game-art-references.json) for equipment IDs and observations. The SVG revision table below records the earlier photograph-based pass; it does not claim that the new game-art revisions are complete. In particular, icon 44 is a general army-fighter category, not a twin-engine-only family, and archived equipment cards may show outdated badges (for example equipment 453). Current atlas badges remain authoritative.

## Aircraft family map

| Icons | Family | Geometry policy / current revision |
| --- | --- | --- |
| 6, 7, 8, 9, 45, 46 | Generic tractor-prop monoplane | Identical `tractor-monoplane` paths; source-sized canvases and badge layouts retained. Revised together. |
| 10, 50, 51 | Twin-float monoplane | Identical `twin-float-monoplane` paths; placement adapts to source canvas/badge. Night 51 retains its lights and lettering; light centers follow the revised wing tips. Revised together. |
| 43 | Central-float fighter | Shares the float/strut drawing vocabulary, but retains one main float and an outboard stabilizer. Revised separately; A6M2-N photograph used for the main float and stabilizing float arrangement. |
| 40, 56 | Conventional twin jets | Separate paths: Kikka and Me 262 differ in wings and source viewpoint. Nacelles clarified using the photographs below. |
| 39 | Jet Keiun | Keep its own source silhouette; do not infer its structure from Kikka alone. Not revised here. |
| 57, 60 | Shinden / hypothetical jet Shinden | Preserve canards and rear main wing. Propeller and jet propulsion must differ. Photo review started; paths unchanged in this revision. |
| 59 | Flying wing | No conventional tail. Original-airframe photo verification still needed; paths unchanged. |
| 33 | Large flying boat | Boat hull, high wing and multiple engines; distinct from floatplanes. Photo review started; paths unchanged. |
| 21 | Autogyro | Rotor and propeller have different functions; retain both where shown. Not revised here. |
| 22, 37, 38, 44, 47, 48, 49, 58 | Other aircraft silhouettes | Retain source-specific engine count, viewpoint and proportions; do not collapse into the generic carrier body. Further photograph-backed refinement pending. |

Shared paths are embedded in each standalone SVG; there is no external sprite or runtime dependency. The family IDs make the intended correspondence explicit. A geometry change must be applied to every listed member of that family.

## Photographs examined

Examined on 2026-09-09. Photographs are linked, not redistributed. Wikipedia hosts the collection context; the linked image is the actual visual reference examined.

### Mitsubishi A6M Zero

[Context](https://en.wikipedia.org/wiki/Mitsubishi_A6M_Zero) 路 [Photograph](https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/A6M3_Zero_N712Z_1.jpg/1280px-A6M3_Zero_N712Z_1.jpg)

Restored aircraft in flight. Forward propeller, rounded engine cowling, low wing and conventional tail. Used for the generic tractor-prop vocabulary, not as proof that every carrier icon depicts a Zero.

### Aichi M6A

[Context](https://en.wikipedia.org/wiki/Aichi_M6A) 路 [Photograph](https://upload.wikimedia.org/wikipedia/commons/0/0e/M6A1.jpg)

Historical aircraft photograph. Two long floats sit below the fuselage on struts, with visible air between them and the airframe. Used for 10/50/51 structural reconstruction, not for exact type identification.

### Messerschmitt Me 262

[Context](https://en.wikipedia.org/wiki/Messerschmitt_Me_262) 路 [Photograph](https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Messerschmitt_Me_262A_at_the_National_Museum_of_the_USAF_%28cropped%29.jpg/1280px-Messerschmitt_Me_262A_at_the_National_Museum_of_the_USAF_%28cropped%29.jpg)

Museum aircraft photograph. Separate underslung engine nacelles and swept wings; no propeller. Used for 56.

### Kyushu J7W Shinden

[Context](https://en.wikipedia.org/wiki/Kyushu_J7W_Shinden) 路 [Photograph](https://upload.wikimedia.org/wikipedia/commons/e/e4/A_prototype_of_J7W_Shinden.jpg)

Historical prototype photograph. Canards ahead of the main wing and a rear pusher propeller. Reference for future refinement of 57. It does not substantiate the hypothetical jet installation in 60.

### Horten Ho 229

[Context](https://en.wikipedia.org/wiki/Horten_Ho_229) 路 [Photograph](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Horton_229_V3_-_Radar-testing_Ho_IX_V3_reproduction_at_the_San_Diego_Air_and_Space_Museum_%289668114493%29.jpg/1280px-Horton_229_V3_-_Radar-testing_Ho_IX_V3_reproduction_at_the_San_Diego_Air_and_Space_Museum_%289668114493%29.jpg)

Modern radar-test reproduction, NOT an original aircraft. Only a secondary layout illustration. Not accepted as historical evidence for new details in 59; obtain original-airframe photographs before refining it.

### Kawanishi H8K

[Context](https://en.wikipedia.org/wiki/Kawanishi_H8K) 路 [Photograph](https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Kawanishi_H8K2_%28Emily%29_flying_boat.jpg/1280px-Kawanishi_H8K2_%28Emily%29_flying_boat.jpg)

Preserved aircraft photograph. Boat hull, high wing, multiple engines and outboard stabilizing float. Reference for future refinement of 33; do not substitute a twin-float monoplane.

### Nakajima Kikka

[Context](https://en.wikipedia.org/wiki/Nakajima_Kikka) 路 [Photograph](https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Kikka_Orange_Blossom_Kikka-10.jpg/1280px-Kikka_Orange_Blossom_Kikka-10.jpg)

Historical aircraft photograph. Separate underslung jet nacelles, conventional tail and less-swept wings. Used for 40; do not copy the Me 262 silhouette verbatim.

### Nakajima A6M2-N

[Context](https://en.wikipedia.org/wiki/Nakajima_A6M2-N) · [Photograph](https://upload.wikimedia.org/wikipedia/commons/4/42/A6M2-N_Rufe.jpg)

Historical aircraft photograph. Large central float, smaller outboard floats and connecting struts. Used for the structural distinction in 43.

## Evidence limits

These are category symbols, not scale drawings or confirmed identifications of the exact aircraft originally drawn by the game artist. The new float strut positions and tiny nacelle contours remain icon-scale interpretations. The generic carrier body intentionally continues the previously reviewed icon shape. Historical references constrain structure; they do not certify every contour. Pending groups above retain the first-pass reconstruction and must not be described as historically verified.
