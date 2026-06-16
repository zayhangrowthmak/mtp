# Client logos

Drop each client's logo here using the **exact filename** below. The Clients
section loads `/clients/<slug>.svg`; any file that's missing falls back
automatically to the client name text, so the site never breaks.

| Client                      | Filename                          |
| --------------------------- | --------------------------------- |
| United Nations              | `united-nations.svg`              |
| Royal Oman Police           | `royal-oman-police.svg`           |
| Royal Court Affairs         | `royal-court-affairs.svg`         |
| Oman Ministry of Health     | `oman-ministry-of-health.svg`     |
| Petroleum Development Oman   | `petroleum-development-oman.svg`  |
| Oman LNG                    | `oman-lng.svg`                    |
| King Abdullah Medical City  | `king-abdullah-medical-city.svg`  |
| Lulu Hypermarket            | `lulu-hypermarket.svg`            |
| Crowne Plaza                | `crowne-plaza.svg`                |
| Salalah Free Zone           | `salalah-free-zone.svg`           |

## Notes

- **SVG** is best (sharp at any size). PNG works too — if you only have PNGs,
  rename them to `<slug>.png` and update the `logo` extension in
  `src/lib/data.ts` (the `CLIENTS` array), or tell the dev and it'll be switched.
- Prefer logos on a **transparent background**. The grid uses `mix-blend-multiply`
  so white backgrounds drop out cleanly, but transparent is tidiest.
- Many of these are government/institutional emblems — use the official crest/
  wordmark the client provides.
