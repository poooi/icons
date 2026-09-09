# poi icons

SVG reconstructions and visual comparisons of Kantai Collection game icons.

**Preview: https://poooi.github.io/icons/**

The default branch is `gh-pages`. GitHub Pages serves the repository root directly; no build step, package dependencies, or external fonts are required.

## Current coverage

| Category | Entries | Status |
| --- | ---: | --- |
| Equipment | 59 | First SVG pass completed and reviewed |
| Resources | 11 | First SVG pass completed and reviewed |
| Aircraft proficiency | 7 | First SVG pass completed and reviewed |
| Operations | 4 | First SVG pass completed and reviewed |
| Ship status | 5 | First SVG pass completed and reviewed |

There are 86 logical entries. The collection includes 152 relevant PNG files from poi, plus 59 equipment icons extracted from the game atlas. Size variants and historical versions are grouped under their corresponding entry and can be selected in the preview.

The scope covers game-derived icons and their existing variants. It excludes the poi logo, application header artwork, Touch Bar icons, and application placeholders. See `sources.json` for the included and excluded files.

All 86 entries now have reconstructed SVGs. The [non-equipment reconstruction notes](docs/non-equipment-icons.md) describe the latest 27 assets, shared families and review limits.

## Layout

- `svg/slotitem/<id>.svg`: reconstructed equipment icons, using actual game icon IDs.
- `svg/material/`, `svg/airplane/`, `svg/operation/`, `svg/state/`: reconstructed resources, proficiency marks, operation buttons and state labels.
- `original/slotitem/<id>.png`: icons extracted from the game atlas.
- `original/poi/`: relevant PNGs from poi, preserving their source directory structure below `assets/`, or their full repository-relative path for files outside `assets/`.
- `reference-svg/material/`: existing poi resource SVGs for comparison, **not newly reconstructed assets**.
- `catalog.js`: preview entries, source variants, SVG paths, categories, and progress.
- `index.html`, `preview.css`, `preview.js`: the static preview site.

Files such as `svg/slotitem/6.svg` can be used directly as images. All lettering in the new reconstructions is outlined, so consumers do not need to install a font.

## Game equipment illustration references

[Aircraft reference gallery](https://poooi.github.io/icons/aircraft-references.html) pairs 26 game equipment illustrations with 20 aircraft icons and their current SVG baselines. [The mapping](docs/game-art-references.json) records equipment IDs, source URLs and structural observations. The accepted carrier family is excluded. This reference collection does not mean those SVGs have already been revised against the game artwork.

See [Equipment corrections from game artwork](docs/equipment-corrections.md) for the 11 non-aircraft corrections, aircraft 56–60, and the shared regular hexagon specification.

## Reconstruction and review

Start with the [Game icon reconstruction guide](docs/reconstruction-guide.md) for new icons and revisions. It defines reference priority, shared families, geometric badges, layering, visual completeness, and separate enlarged/small-size reviews.

1. Preserve the original category colors, silhouette, orientation, composition, and identifying marks.
2. Group related icons and reuse their shared geometry. Resolve unclear structures using game equipment illustrations first, with historical photographs as supplementary evidence, recording observations and uncertainty in [Icon families and reconstruction evidence](docs/icon-families.md).
3. Use a bold Mincho serif for lettering. This pass uses Noto Serif JP ExtraBold at weight 800.
4. Inspect enlarged views and 18, 24, 32, and 48 px sizes on light and dark backgrounds. Tiny lettering does not need to be readable; color and silhouette are the primary recognition cues.

The equipment set has undergone several rounds of corrections to contours, internal details, badge placement, occupied area, and outlines needed on light backgrounds. Some blurred details remain interpretations. Changes in this standalone repository have not yet been integrated into poi.

When completing another category, place its new SVGs under `svg/<category>/`, add the `svg` path in `catalog.js`, and update its status. Old resource SVGs remain available in the source selector as reference variants.

See [Icon families and reconstruction evidence](docs/icon-families.md) for the aircraft family map, the photographs examined, and remaining review gaps.

## Sources

- PNGs and existing resource SVGs from [poooi/poi](https://github.com/poooi/poi/tree/4d34d26444e355afb2f3df3d5a9bddf13791fcf7). The source inventory is recorded in `sources.json`.
- Equipment atlas: [common_icon_weapon.json](https://w01y.kancolle-server.com/kcs2/img/common/common_icon_weapon.json) and [common_icon_weapon.png](https://w01y.kancolle-server.com/kcs2/img/common/common_icon_weapon.png), retrieved during this study on 2026-09-09.
- The atlas contains IDs 1–52 and 54–60; 53 is unused. Bundled game PNG filenames in poi typically use the icon ID plus 100. New SVG filenames in this repository always use the actual game ID.
- Lettering: [Noto Serif CJK / Noto Serif JP](https://github.com/notofonts/noto-cjk). Only outlined artwork is included; font files are not distributed.

Original game assets and fonts remain the property of their respective rights holders.

## Local preview

Open `index.html` directly, or run `python -m http.server 8000` from the repository directory and visit `http://localhost:8000/`.
