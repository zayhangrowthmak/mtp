# Product photos

Real product photos appear automatically on the **homepage "Featured Products"**
section and on every **solution catalog card** the moment the matching file
exists here. No code changes needed.

## Convention

```
/public/products/<product-slug>.jpg
```

`<product-slug>` = the product name, lowercased, with every run of non-letter/
number characters replaced by a single hyphen. A missing photo shows a clean
placeholder (never a broken image).

## Priority — homepage Featured Products (8)

| Product                          | Filename                            |
| -------------------------------- | ----------------------------------- |
| FLEXIDOME IP 5100i IR (Bosch)    | `flexidome-ip-5100i-ir.jpg`         |
| AUTODOME IP starlight 7000i      | `autodome-ip-starlight-7000i.jpg`   |
| AI Pro Bullet Camera (Milesight) | `ai-pro-bullet-camera.jpg`          |
| Ethos Reader (Wavelynx)          | `ethos-reader.jpg`                  |
| PRAESENSA System Controller      | `praesensa-system-controller.jpg`   |
| EonStor GS (Infortrend)          | `eonstor-gs.jpg`                    |
| Atenco Rack / Tower UPS          | `atenco-rack-tower-ups.jpg`         |
| Effekta MH Series                | `effekta-mh-series.jpg`             |

## Everything else

Every product in the solution catalogs follows the same rule — drop
`<slugified-name>.jpg` and it shows on that product's card. Examples:

- `FLEXIDOME IP 3000i IR` -> `flexidome-ip-3000i-ir.jpg`
- `MIC IP starlight 7100i` -> `mic-ip-starlight-7100i.jpg`
- `DINION IP 3000i IR` -> `dinion-ip-3000i-ir.jpg`

## Tips

- **PNG with a transparent or clean white background** looks best (cards sit on white).
- Source from each brand's **partner / media asset portal** (the rights-clean
  route for an authorised distributor), or save from the brand site.
- Don't have the exact filename? Drop the images anywhere and tell the dev which
  product each is — they'll be placed correctly (same as the brand/client logos).
