# Brand logos

Drop each brand's logo here using the **exact filename** below. The Brands grid
loads `/brands/<slug>.svg`; any file that's missing falls back automatically to
the brand name + category text, so the site never breaks.

## Required files (SVG preferred)

| Brand        | Filename            |
| ------------ | ------------------- |
| Bosch        | `bosch.svg`         |
| Mobotix      | `mobotix.svg`       |
| Digifort     | `digifort.svg`      |
| Milesight    | `milesight.svg`     |
| Lilin        | `lilin.svg`         |
| Redvision    | `redvision.svg`     |
| Infortrend   | `infortrend.svg`    |
| Premiumline  | `premiumline.svg`   |
| STid         | `stid.svg`          |
| Quanika      | `quanika.svg`       |
| Allegion     | `allegion.svg`      |
| Wavelynx     | `wavelynx.svg`      |
| SAFR         | `safr.svg`          |
| Oosto        | `oosto.svg`         |
| Atenco       | `atenco.svg`        |
| Effekta      | `effekta.svg`       |
| Planar       | `planar.svg`        |
| WEYTEC       | `weytec.svg`        |
| OODA World   | `ooda-world.svg`    |

## Notes

- **SVG** is best (sharp at any size). PNG works too — if you only have PNGs,
  either rename them to `<slug>.png` and update the `logo` extension in
  `src/lib/data.ts`, or tell the dev and it'll be switched.
- Prefer **monochrome / single-color** or full-color logos on a transparent
  background. The grid shows them de-saturated by default and reveals full
  color on hover (a clean "brand wall" effect) — transparent backgrounds keep
  that looking tidy.
- Trim surrounding whitespace so logos optically align across the grid.
