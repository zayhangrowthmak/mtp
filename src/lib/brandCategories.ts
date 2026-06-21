// ─── Brand-specific product categories / series ──────────────────────────────
// The real product lines each vendor makes — so every brand page shows its OWN
// products, not a generic per-solution list. Sourced from each brand's product
// range (factual product/series names). Fall back to generic solution families
// (familiesForBrand) only for brands not listed here.

export const BRAND_CATEGORIES: Record<string, string[]> = {
  bosch: [
    'FLEXIDOME fixed dome cameras',
    'DINION box & bullet cameras',
    'AUTODOME PTZ cameras',
    'MIC rugged PTZ cameras',
    'AVENAR fire detection panels',
    'PRAESENSA voice-alarm (PAVA)',
    'AMC2 access controllers & AMS',
    'AMAX intrusion alarm panels',
  ],
  mobotix: [
    'MOBOTIX 7 single-lens cameras (c71 / v71 / p71)',
    'S74 modular multisensor cameras',
    'M73 modular outdoor camera',
    'MOVE PTZ & dome cameras',
    'MxManagementCenter VMS',
  ],
  milesight: [
    'AI Pro bullet cameras',
    'AI dome & mini-dome cameras',
    'AI PTZ & Pro Bullet Plus cameras',
    'LPR / ANPR cameras',
    'Network video recorders (NVR)',
    'PoE network switches',
  ],
  lilin: [
    'AI-enabled IP cameras (V / 6 / 7 Series)',
    'Covert & specialty cameras',
    '4K network video recorders (NVR)',
    'PoE switches & embedded storage',
    'Video management software',
  ],
  iqsight: [
    'Video analytics software',
    'Intelligent surveillance modules',
    'Object & behaviour detection',
  ],
  redvision: [
    'X-SERIES rugged PTZ dome cameras',
    'VEGA rugged camera housings',
    'REDCOP mobile CCTV towers',
    'VMS1000 control system',
  ],
  digifort: [
    'Explorer & Standard VMS editions',
    'Professional & Enterprise VMS',
    'LPR / ANPR recognition module',
    'Analytics & alarm modules',
    'Mobile & web clients',
  ],
  infortrend: [
    'EonStor GS unified SAN / NAS',
    'EonStor GSe & GSe Pro storage',
    'EonStor GSx parallel file storage',
    'EonServ surveillance servers',
    'RAID & expansion enclosures',
  ],
  v: ['Embedded surveillance storage', 'Recording appliances'],
  premiumline: [
    'Cat6 / Cat6A copper cabling',
    'Fibre optic cabling & patch panels',
    'Network racks & cabinets',
    'PoE & connectivity accessories',
  ],
  stid: [
    'Architect modular readers (ARC-A / ARC-C)',
    'Architect One mullion readers',
    'Architect Blue Bluetooth readers',
    'STid Mobile ID credentials',
    'SSCP secure protocol',
  ],
  allegion: [
    'Schlage locks & electronic locking',
    'Von Duprin exit devices',
    'LCN door closers & operators',
    'CISA locking systems',
    'Networked access hardware',
  ],
  quanika: [
    'Quanika Enterprise access & security',
    'VisitorPoint visitor management',
    'Time & attendance / mustering',
    'Open hardware integration (HID / Mercury / Axis)',
  ],
  xpr: [
    'BIO & B100 biometric readers',
    'RFID readers & keypads',
    'EWS door controllers',
    'Standalone & networked access software',
  ],
  wavelynx: [
    'Ethos multi-technology readers',
    'Ethos mobile-credential readers',
    'APEX readers',
    'Mobile & wallet credentials',
  ],
  safr: [
    'SAFR SCAN SC200 face reader',
    'SAFR SCAN SC50 mullion reader',
    'Facial-recognition platform',
    'Video intercom & surveillance integration',
  ],
  oosto: [
    'OnAccess touchless access control',
    'OnWatch watchlist alerting',
    'OnPatrol mobile recognition',
    'Vision AI edge platform',
  ],
  'ooda-world': [
    'PSIM command & control software',
    'Situational-awareness dashboards',
    'Multi-system security integration',
  ],
  ctf: [
    'Control-room operator consoles',
    'Technical monitoring furniture',
    'Collaborative control-room layouts',
  ],
  weytec: [
    'distributionPLATFORM KVM matrix',
    'smartTOUCH operator keyboard',
    'smartVISUAL video-wall control',
    'ultraFLEX mini PCs',
    'Control-room & trading-floor consoles',
  ],
  'technology-desking': [
    'Control-room operator consoles',
    'Operator desks & workstations',
    'Bespoke control-room furniture',
  ],
  planar: [
    'Clarity Matrix LCD video walls',
    'DirectLight LED video walls',
    'Large-format & touch displays',
    'Control-room visualization systems',
  ],
  atenco: [
    'IST3J rack online UPS (1–10 kVA)',
    'IST4 three-phase UPS (10–20 kVA)',
    'Voltage regulators (AVR)',
    'Solar & hybrid inverters',
    'Battery & energy storage',
  ],
  effekta: [
    'MHD modular online UPS',
    'TRITON three-phase UPS',
    'Line-interactive office UPS',
    'Large-system UPS',
    'Solar & inverter systems',
  ],
}

export const brandCategories = (slug: string): string[] | undefined => BRAND_CATEGORIES[slug]
