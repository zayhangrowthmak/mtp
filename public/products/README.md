# Product thumbnails

The brand hover panel on the Solutions page shows a thumbnail next to each
product. Drop a product image at:

```
/products/<brand-slug>/<product-slug>.jpg
```

Any product **without** an image shows a neutral placeholder + its name, so the
panel never breaks. JPG is assumed; if you only have PNGs, tell the dev and the
lookup extension will be switched.

## Slug rule

Lowercase the name, replace every run of non-letter/number characters with a
single hyphen, trim leading/trailing hyphens. Examples:

- `FLEXIDOME 5100i` → `flexidome-5100i.jpg`
- `FPA-5000 Modular Panel` → `fpa-5000-modular-panel.jpg`
- `Atenco Rack UPS 1–10 kVA` → `atenco-rack-ups-1-10-kva.jpg`

## Expected files (current product lists)

### products/bosch/
fpa-5000-modular-panel · fap-421-addressable-detector · flm-420-o4-en-sounder ·
lsn-improved-loop · flexidome-5100i · autodome-7000i-ptz · mic-inteox-7100i ·
divar-ip-6000 · praesideo-digital-pa · lbb-1956-call-station · la2-ul60e-amplifier ·
la-250c-column-speaker · amc2-ip-controller · ard-select-w-reader · ds150-door-station ·
amax-intrusion-panel · building-integration-system-bis · bosch-video-management-system ·
energy-management

### products/digifort/
digifort-enterprise-vms · digifort-standard-vms · video-analytics-module ·
anpr-license-plate-recognition · digifort-mobile-app

### products/milesight/
ai-pro-bullet-camera · ai-pro-dome-camera · 4k-vandal-proof-dome ·
ai-ptz-network-camera · lpr-camera

### products/mobotix/
m73-outdoor-camera · q71-hemispheric-camera · mxbell-video-doorbell · mxdisplay-terminal

### products/lilin/
ndr-series-nvr · 4k-h-265-bullet-camera · imr-ip-dome-camera · poe-switches ·
nvr-storage-appliances

### products/infortrend/
eonstor-gse-raid · eonnas-pro-nas · gs-series-san · eonserv-nvr

### products/stid/
arc-d-bluetooth-reader · spectre-x-nfc-reader · mobile-access-app · uhf-long-range-reader

### products/quanika/
quanika-building-access · quanika-visitor-management · quanika-mobile-credential

### products/allegion/
sargent-electronic-lock · lcn-door-closer · schlage-wireless-lock · ad-series-access-hw

### products/wavelynx/
ethos-reader · ethos-multi-tech-reader · mobile-credential-platform

### products/safr/
safr-scan-kiosk · safr-platform-license · safr-watchlist-alert

### products/oosto/
onvision-platform · vision-ai-edge-device · awareid-identity

### products/atenco/
atenco-rack-ups-1-10-kva · atenco-tower-ups-3-kva · atenco-three-phase-10-80-kva

### products/effekta/
effekta-mh-online-ups · effekta-mtd-three-phase · effekta-srm-solar-inverter

## Tip

You don't have to rename files yourself — drop the product images anywhere and
tell the dev which product each belongs to, and they'll be placed with the
correct names (same as the brand/client logos).
