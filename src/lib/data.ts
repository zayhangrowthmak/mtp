export const COMPANY = {
  name: 'MTP Distribution',
  tagline: 'Powered By Technology, Secure By Solutions',
  description:
    'A well-established Value Added Distributor (VAD) in the Middle East — connecting global security and infrastructure manufacturers to system integrators across UAE and Oman.',
  mission:
    'Contribution to partners through the introduction of innovative products and provide quality services.',
  vision:
    'To be one of the renowned Value Added distribution houses in the Global Market.',
  stats: [
    { value: 5, suffix: '+', label: 'Years in Business' },
    { value: 12, suffix: '', label: 'Business Regions' },
    { value: 30, suffix: '+', label: 'Global Brands' },
    { value: 100, suffix: '+', label: 'Projects Completed' },
  ],
  contacts: {
    uae: {
      label: 'UAE Office',
      address:
        'Al Mozna Building, Office No.315, Al Nahda Street, Al Qusais 1, PO Box – 238958, Dubai',
      email: 'sales@mtpdistribution.com',
      phone: '+971 54 749 9407',
    },
    oman: {
      label: 'Oman Office',
      address:
        'Way No: 4924, Block No: 149, Building: 1/A/2155, Ruwi, Muscat, Sultanate of Oman',
      email: 'sales@mtpdistribution.com',
      phone: '+968 9545 5970',
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/mtpdistribution/',
    facebook: 'https://www.facebook.com/mtpdistribution/',
    instagram: 'https://www.instagram.com/mtpdistribution/',
  },
}

export const SOLUTIONS = [
  {
    id: 'fire',
    label: 'Fire Alarm',
    shortLabel: 'Fire',
    color: '#0D1B3E',
    dotColor: '#E63946',
    description:
      'Addressable intelligent fire alarm panels with loop-wired detectors, unique device IDs, and central control — integrates with BMS for safe egress, elevator recall, and HVAC shutoff.',
    features: [
      'Addressable loop-wired detectors',
      'Central intelligent control panels',
      'BMS integration & interlocks',
      'Audio/visual alarm annunciation',
      'Safe egress route guidance',
    ],
    brands: ['Bosch'],
  },
  {
    id: 'cctv',
    label: 'CCTV & Video',
    shortLabel: 'CCTV',
    color: '#00B4C8',
    dotColor: '#00B4C8',
    description:
      'End-to-end IP surveillance from cameras to AI-powered video analytics, ANPR, enterprise VMS, and high-density NVR storage — covering retail, government, oil & gas, and airports.',
    features: [
      'IP cameras: bullet, dome, PTZ',
      'Video Management System (VMS)',
      'AI analytics & ANPR',
      'High-resolution remote access',
      'Large video wall integration',
    ],
    brands: ['Bosch', 'Mobotix', 'Digifort', 'Milesight', 'Lilin'],
  },
  {
    id: 'networking',
    label: 'Networking & Storage',
    shortLabel: 'Networking',
    color: '#F59E0B',
    dotColor: '#F59E0B',
    description:
      'Industrial switches, SAN and RAID storage systems, fiber panels, PoE accessories, and full IT infrastructure purpose-built for surveillance and enterprise deployments.',
    features: [
      'Industrial managed switches',
      'SAN / RAID / hyper-converged storage',
      'Fiber panels & structured cabling',
      'PoE accessories & illuminators',
      'Industrial cabinets & enclosures',
    ],
    brands: ['Infortrend', 'Lilin'],
  },
  {
    id: 'pa',
    label: 'PA & Conference',
    shortLabel: 'PA System',
    color: '#7C3AED',
    dotColor: '#7C3AED',
    description:
      'IP-based public address systems with digital controllers, mixing amplifiers, call stations, and conference-grade speakers — enabling emergency voice evacuation and facility-wide announcements.',
    features: [
      'Digital IP routing controllers',
      'Mixing amplifiers & call stations',
      'Emergency voice evacuation',
      'Touch-screen GUI management',
      'Fire alarm & BMS integration',
    ],
    brands: ['Bosch'],
  },
  {
    id: 'access',
    label: 'Access Control',
    shortLabel: 'Access Control',
    color: '#DB2777',
    dotColor: '#DB2777',
    description:
      'Smart card readers, biometric and face recognition, IP controllers, RFID locks, and intrusion alarms — fully integrated with CCTV, fire systems, and time-attendance platforms.',
    features: [
      'Smart card & RFID readers',
      'Biometric & face recognition',
      'IP access controllers',
      'Intrusion detection & alarms',
      'Time & attendance integration',
    ],
    brands: ['Bosch', 'STid', 'Quanika', 'Allegion', 'Wavelynx', 'SAFR', 'Oosto'],
  },
  {
    id: 'ibms',
    label: 'IBMS',
    shortLabel: 'IBMS',
    color: '#65A30D',
    dotColor: '#65A30D',
    description:
      'Unified building management platform for HVAC, lighting, energy, water, and environmental monitoring — reducing operational costs and moving buildings toward green compliance.',
    features: [
      'Unified command & control dashboard',
      'Smart energy management',
      'HVAC monitoring & control',
      'Smart street & indoor lighting',
      'Environmental monitoring',
    ],
    brands: ['Bosch'],
  },
  {
    id: 'ups',
    label: 'Power & UPS',
    shortLabel: 'UPS',
    color: '#16A34A',
    dotColor: '#16A34A',
    description:
      'UPS systems, battery banks, solar power, and critical power solutions for data centers — from desktop UPS units to large industrial installations with on-site preventive maintenance.',
    features: [
      'AC/DC UPS systems & batteries',
      'Solar power integration',
      'Critical data center power',
      'On-site preventive maintenance',
      'Industrial power design & build',
    ],
    brands: ['Atenco', 'Effekta'],
  },
]

// Logo files live in /public/brands/. `logo` points to the actual file; a
// missing file falls back gracefully to the brand name + category text.
export const BRANDS = [
  { name: 'Bosch', slug: 'bosch', logo: '/brands/bosch.png', category: 'Fire, CCTV, PA, Access Control' },
  { name: 'CTF', slug: 'ctf', logo: '/brands/ctf.jpg', category: 'Control Room' },
  { name: 'Digifort', slug: 'digifort', logo: '/brands/digifort.jpg', category: 'CCTV / VMS' },
  { name: 'Milesight', slug: 'milesight', logo: '/brands/milesight.png', category: 'CCTV' },
  { name: 'Lilin', slug: 'lilin', logo: '/brands/lilin.png', category: 'CCTV / Storage' },
  { name: 'Redvision', slug: 'redvision', logo: '/brands/redvision.jpg', category: 'CCTV' },
  { name: 'IQSIGHT', slug: 'iqsight', logo: '/brands/iqsight.jpg', category: 'CCTV Analytics' },
  { name: 'Infortrend', slug: 'infortrend', logo: '/brands/infortrend.png', category: 'Storage' },
  { name: 'Premiumline', slug: 'premiumline', logo: '/brands/premiumline.jpg', category: 'Cabling & Networking' },
  { name: 'STid', slug: 'stid', logo: '/brands/stid.png', category: 'Access Control' },
  { name: 'Quanika', slug: 'quanika', logo: '/brands/quanika.png', category: 'Access Control' },
  { name: 'Allegion', slug: 'allegion', logo: '/brands/allegion.svg', category: 'Access Control' },
  { name: 'Wavelynx', slug: 'wavelynx', logo: '/brands/wavelynx.png', category: 'Access Control' },
  { name: 'SAFR', slug: 'safr', logo: '/brands/safr.png', category: 'Face Recognition' },
  { name: 'Oosto', slug: 'oosto', logo: '/brands/oosto.png', category: 'AI Access Control' },
  { name: 'Atenco', slug: 'atenco', logo: '/brands/atenco.webp', category: 'UPS' },
  { name: 'Effekta', slug: 'effekta', logo: '/brands/effekta.png', category: 'UPS' },
  { name: 'Planar', slug: 'planar', logo: '/brands/planar.png', category: 'Control Room' },
  { name: 'WEYTEC', slug: 'weytec', logo: '/brands/weytec.png', category: 'Control Room' },
  { name: 'OODA World', slug: 'ooda-world', logo: '/brands/ooda-world.png', category: 'PSIM' },
]

// Logo files live in /public/clients/<slug>.svg (or .png — update `logo` if so).
// A missing file falls back gracefully to the client name text.
export const CLIENTS = [
  { name: 'Royal Oman Police', slug: 'royal-oman-police', logo: '/clients/royal-oman-police.jpg' },
  { name: 'Royal Court Affairs', slug: 'royal-court-affairs', logo: '/clients/royal-court-affairs.jpg' },
  { name: 'Oman Ministry of Health', slug: 'oman-ministry-of-health', logo: '/clients/oman-ministry-of-health.jpg' },
  { name: 'Petroleum Development Oman', slug: 'petroleum-development-oman', logo: '/clients/petroleum-development-oman.jpg' },
  { name: 'Oman LNG', slug: 'oman-lng', logo: '/clients/oman-lng.jpg' },
  { name: 'King Abdullah Medical City', slug: 'king-abdullah-medical-city', logo: '/clients/king-abdullah-medical-city.jpg' },
  { name: 'Lulu Hypermarket', slug: 'lulu-hypermarket', logo: '/clients/lulu-hypermarket.jpg' },
  { name: 'Crowne Plaza', slug: 'crowne-plaza', logo: '/clients/crowne-plaza.jpg' },
  { name: 'Rawafed Private School', slug: 'rawafed-private-school', logo: '/clients/rawafed-private-school.jpg' },
  { name: 'Salalah Free Zone', slug: 'salalah-free-zone', logo: '/clients/salalah-free-zone.jpg' },
]

export const NEWS = [
  {
    id: 1,
    title: 'Digifort Provides Innovative Technologies',
    excerpt:
      'The technological and operational versatility of Digifort has just been adopted at Perini business park, marking a significant milestone in intelligent video management deployment.',
    brand: 'Digifort',
    date: 'Oct 2024',
  },
  {
    id: 2,
    title: 'Digifort Releases Version 7.3',
    excerpt:
      'With new camera models and expanded device integrations, Digifort v7.3 brings a redesigned interface better suited for large-scale enterprise surveillance environments.',
    brand: 'Digifort',
    date: 'Sep 2024',
  },
  {
    id: 3,
    title: 'Bosch Applies for Local 5G Licenses',
    excerpt:
      'Bosch believes 5G local area networks are the way forward for industrial security and automation. The company applied for 5G spectrum licenses to power its next generation of connected security devices.',
    brand: 'Bosch',
    date: 'Aug 2024',
  },
]

// Bosch IP camera range — headline published specs per model, grouped by family.
// Source: Bosch Video Systems product selector / datasheets. Figures are summary
// specs; full datasheets available on request.
export type CameraSpec = { label: string; value: string }
export type Camera = {
  name: string
  family: string
  form: string
  specs: CameraSpec[]
}

export const BOSCH_CAMERAS: Camera[] = [
  {
    name: 'FLEXIDOME IP 3000i IR',
    family: 'FLEXIDOME',
    form: 'Fixed dome',
    specs: [
      { label: 'Form factor', value: 'Fixed dome' },
      { label: 'Resolution', value: 'Up to 5 MP' },
      { label: 'Infrared', value: 'Built-in IR, up to 20 m' },
      { label: 'Environment', value: 'Indoor & outdoor' },
      { label: 'Rating', value: 'IP66 · IK10' },
      { label: 'Analytics', value: 'Essential Video Analytics' },
    ],
  },
  {
    name: 'FLEXIDOME IP 5100i IR',
    family: 'FLEXIDOME',
    form: 'Fixed dome',
    specs: [
      { label: 'Form factor', value: 'Fixed dome' },
      { label: 'Resolution', value: 'Up to 5 MP' },
      { label: 'Infrared', value: 'Built-in IR, up to 30 m' },
      { label: 'Environment', value: 'Indoor & outdoor' },
      { label: 'Rating', value: 'IP66 · IK10' },
      { label: 'Analytics', value: 'Intelligent Video Analytics · starlight' },
    ],
  },
  {
    name: 'FLEXIDOME multi 7000i',
    family: 'FLEXIDOME',
    form: 'Multisensor',
    specs: [
      { label: 'Form factor', value: 'Multisensor (4 imagers)' },
      { label: 'Resolution', value: '12 MP or 20 MP' },
      { label: 'Field of view', value: 'Four motorized zoom imagers' },
      { label: 'Environment', value: 'Outdoor' },
      { label: 'Rating', value: 'IP66 · IK10' },
      { label: 'Analytics', value: 'Intelligent Video Analytics' },
    ],
  },
  {
    name: 'FLEXIDOME panoramic 5100i',
    family: 'FLEXIDOME',
    form: 'Panoramic',
    specs: [
      { label: 'Form factor', value: 'Panoramic fisheye' },
      { label: 'Resolution', value: '6 MP / 12 MP' },
      { label: 'Field of view', value: '180° / 360° with dewarping' },
      { label: 'Environment', value: 'Indoor & outdoor' },
      { label: 'Rating', value: 'IP66 · IK10' },
      { label: 'Analytics', value: 'Intelligent Video Analytics' },
    ],
  },
  {
    name: 'FLEXIDOME corner 9000i',
    family: 'FLEXIDOME',
    form: 'Corner mount',
    specs: [
      { label: 'Form factor', value: 'Anti-ligature corner' },
      { label: 'Resolution', value: 'Up to 5 MP' },
      { label: 'Infrared', value: 'Smart invisible IR' },
      { label: 'Environment', value: 'Indoor (custodial)' },
      { label: 'Rating', value: 'IK10+ impact-resistant' },
      { label: 'Use case', value: 'Cells & secure areas' },
    ],
  },
  {
    name: 'DINION IP 3000i IR',
    family: 'DINION',
    form: 'Bullet',
    specs: [
      { label: 'Form factor', value: 'Bullet' },
      { label: 'Resolution', value: 'Up to 5 MP' },
      { label: 'Infrared', value: 'Built-in IR, up to 30 m' },
      { label: 'Environment', value: 'Outdoor' },
      { label: 'Rating', value: 'IP66 · IK10' },
      { label: 'Analytics', value: 'Essential Video Analytics' },
    ],
  },
  {
    name: 'DINION IP bullet 5100i IR',
    family: 'DINION',
    form: 'Bullet',
    specs: [
      { label: 'Form factor', value: 'Bullet' },
      { label: 'Resolution', value: 'Up to 5 MP' },
      { label: 'Infrared', value: 'Built-in IR, up to 30 m' },
      { label: 'Environment', value: 'Outdoor' },
      { label: 'Rating', value: 'IP66 · IK10' },
      { label: 'Analytics', value: 'Intelligent Video Analytics · starlight' },
    ],
  },
  {
    name: 'DINION IP starlight 7000i',
    family: 'DINION',
    form: 'Box',
    specs: [
      { label: 'Form factor', value: 'Box (modular lens)' },
      { label: 'Resolution', value: 'Up to 5 MP' },
      { label: 'Low light', value: 'Starlight low-light' },
      { label: 'Environment', value: 'Indoor (housing for outdoor)' },
      { label: 'Lens', value: 'Interchangeable C/CS-mount' },
      { label: 'Analytics', value: 'Intelligent Video Analytics' },
    ],
  },
  {
    name: 'AUTODOME IP starlight 5000i',
    family: 'AUTODOME',
    form: 'PTZ',
    specs: [
      { label: 'Form factor', value: 'PTZ moving camera' },
      { label: 'Resolution', value: '1080p / 2 MP' },
      { label: 'Optical zoom', value: '30× optical' },
      { label: 'Environment', value: 'Indoor & outdoor' },
      { label: 'Rating', value: 'IP66' },
      { label: 'Low light', value: 'Starlight' },
    ],
  },
  {
    name: 'AUTODOME IP starlight 7000i',
    family: 'AUTODOME',
    form: 'PTZ',
    specs: [
      { label: 'Form factor', value: 'PTZ moving camera' },
      { label: 'Resolution', value: 'Up to 4 MP' },
      { label: 'Optical zoom', value: '30× optical' },
      { label: 'Environment', value: 'Outdoor' },
      { label: 'Rating', value: 'IP66' },
      { label: 'Analytics', value: 'Intelligent Video Analytics · starlight' },
    ],
  },
  {
    name: 'MIC IP starlight 7100i',
    family: 'MIC',
    form: 'Rugged PTZ',
    specs: [
      { label: 'Form factor', value: 'Ruggedized PTZ' },
      { label: 'Resolution', value: '1080p' },
      { label: 'Optical zoom', value: '30× optical' },
      { label: 'Environment', value: 'Heavy-duty outdoor' },
      { label: 'Rating', value: 'IP68 · IK10' },
      { label: 'Use case', value: 'Mission-critical, extreme weather' },
    ],
  },
  {
    name: 'MIC IP fusion 9000i',
    family: 'MIC',
    form: 'Rugged PTZ',
    specs: [
      { label: 'Form factor', value: 'Ruggedized PTZ (dual imager)' },
      { label: 'Resolution', value: '1080p optical + thermal' },
      { label: 'Imaging', value: 'Optical + thermal fusion' },
      { label: 'Environment', value: 'Heavy-duty outdoor' },
      { label: 'Rating', value: 'IP66 / IP68' },
      { label: 'Use case', value: 'Perimeter & critical infrastructure' },
    ],
  },
]

// ─── Per-category product catalogs (grouped, with headline spec tables) ───────
export type CatalogItem = { group: string; name: string; form: string; specs: CameraSpec[] }
export type CatalogMeta = { eyebrow: string; title: string; blurb: string; items: CatalogItem[] }

export const CATALOGS: Record<string, CatalogMeta> = {
  cctv: {
    eyebrow: 'Bosch — IP Camera Range',
    title: 'Cameras & Specifications',
    blurb:
      'The full Bosch video portfolio carried by MTP — every family and tier, with headline specifications. Complete datasheets available on request.',
    items: BOSCH_CAMERAS.map((c) => ({ group: c.family, name: c.name, form: c.form, specs: c.specs })),
  },

  fire: {
    eyebrow: 'Fire Alarm — Bosch',
    title: 'Panels, Detection & Notification',
    blurb:
      'Addressable fire detection from control panel to field device — EN 54 certified across the range.',
    items: [
      {
        group: 'Control Panels',
        name: 'AVENAR panel 8000',
        form: 'Networked addressable panel',
        specs: [
          { label: 'Type', value: 'Addressable' },
          { label: 'Loops', value: 'Up to 32 (networked)' },
          { label: 'Capacity', value: '4,000+ devices' },
          { label: 'Connectivity', value: 'Ethernet / IP' },
          { label: 'Standard', value: 'EN 54-2 / -4' },
        ],
      },
      {
        group: 'Control Panels',
        name: 'AVENAR panel 2000',
        form: 'Compact addressable panel',
        specs: [
          { label: 'Type', value: 'Addressable' },
          { label: 'Loops', value: '1–2' },
          { label: 'Display', value: 'Graphical' },
          { label: 'Use', value: 'Small–mid sites' },
          { label: 'Standard', value: 'EN 54-2 / -4' },
        ],
      },
      {
        group: 'Control Panels',
        name: 'FPA-1200',
        form: 'Entry addressable panel',
        specs: [
          { label: 'Type', value: 'Addressable' },
          { label: 'Loop', value: '1 (expandable)' },
          { label: 'Devices', value: '254 / loop' },
          { label: 'Standard', value: 'EN 54' },
        ],
      },
      {
        group: 'Detection & Devices',
        name: 'AVENAR detector 4000',
        form: 'Multisensor detector',
        specs: [
          { label: 'Sensing', value: 'Optical + thermal' },
          { label: 'Bus', value: 'LSN loop' },
          { label: 'Feature', value: 'Drift compensation' },
          { label: 'Standard', value: 'EN 54-5 / -7' },
        ],
      },
      {
        group: 'Detection & Devices',
        name: 'Optical Smoke Detector',
        form: 'Photoelectric detector',
        specs: [
          { label: 'Sensing', value: 'Optical smoke' },
          { label: 'Bus', value: 'Addressable loop' },
          { label: 'Mount', value: 'Ceiling' },
          { label: 'Standard', value: 'EN 54-7' },
        ],
      },
      {
        group: 'Detection & Devices',
        name: 'Manual Call Point',
        form: 'Break-glass call point',
        specs: [
          { label: 'Action', value: 'Single-action' },
          { label: 'Mount', value: 'Wall' },
          { label: 'Element', value: 'Resettable' },
          { label: 'Standard', value: 'EN 54-11' },
        ],
      },
      {
        group: 'Detection & Devices',
        name: 'Sounder Beacon',
        form: 'Audible + visual alarm',
        specs: [
          { label: 'Output', value: 'Tone + strobe' },
          { label: 'Mount', value: 'Wall / ceiling' },
          { label: 'Standard', value: 'EN 54-3 / -23' },
        ],
      },
    ],
  },

  networking: {
    eyebrow: 'Networking & Storage',
    title: 'Storage, Switching & Infrastructure',
    blurb:
      'Surveillance-grade storage and the IT backbone behind it — from Infortrend arrays to Premiumline cabling.',
    items: [
      {
        group: 'Infortrend — Storage',
        name: 'EonStor GS',
        form: 'Unified SAN + NAS',
        specs: [
          { label: 'Protocols', value: 'iSCSI / FC / SMB / NFS' },
          { label: 'Media', value: 'HDD + SSD cache' },
          { label: 'Scale', value: 'Multi-bay expansion' },
          { label: 'Use', value: 'Surveillance & enterprise' },
        ],
      },
      {
        group: 'Infortrend — Storage',
        name: 'EonStor GSe Pro',
        form: 'Entry unified storage',
        specs: [
          { label: 'Protocols', value: 'iSCSI / SMB / NFS' },
          { label: 'Bays', value: '8–16' },
          { label: 'Cache', value: 'SSD acceleration' },
          { label: 'Use', value: 'SMB / edge' },
        ],
      },
      {
        group: 'Infortrend — Storage',
        name: 'EonServ NVR',
        form: 'Surveillance recording server',
        specs: [
          { label: 'Role', value: 'VMS + storage in one' },
          { label: 'Media', value: 'HDD arrays' },
          { label: 'Throughput', value: 'High-channel recording' },
          { label: 'Use', value: 'IP CCTV' },
        ],
      },
      {
        group: 'Premiumline — Networking & Cabling',
        name: 'Industrial PoE Switch',
        form: 'Managed PoE switch',
        specs: [
          { label: 'Ports', value: '8–24' },
          { label: 'PoE', value: '802.3af / at / bt' },
          { label: 'Mount', value: 'DIN / rack' },
          { label: 'Use', value: 'Surveillance backbone' },
        ],
      },
      {
        group: 'Premiumline — Networking & Cabling',
        name: 'Fiber Patch Panel',
        form: 'Fiber distribution',
        specs: [
          { label: 'Type', value: 'LC / SC' },
          { label: 'Capacity', value: '12–48 cores' },
          { label: 'Mount', value: 'Rack' },
          { label: 'Use', value: 'Backbone links' },
        ],
      },
      {
        group: 'Premiumline — Networking & Cabling',
        name: 'Structured Cabling',
        form: 'Copper — Cat6 / 6A',
        specs: [
          { label: 'Class', value: 'Cat6 / 6A' },
          { label: 'Shield', value: 'U/UTP & F/FTP' },
          { label: 'Rating', value: 'PoE-ready' },
          { label: 'Use', value: 'Horizontal cabling' },
        ],
      },
      {
        group: 'Lilin — Recording',
        name: 'NVR Appliance',
        form: 'Network video recorder',
        specs: [
          { label: 'Codec', value: 'H.265' },
          { label: 'Channels', value: '9–36' },
          { label: 'Storage', value: 'Multi-bay' },
          { label: 'Feature', value: 'Built-in PoE' },
        ],
      },
    ],
  },

  pa: {
    eyebrow: 'PA & Conference — Bosch',
    title: 'Voice Evacuation & Public Address',
    blurb: 'IP voice-alarm and public address built on Bosch PRAESENSA — EN 54-16 certified.',
    items: [
      {
        group: 'Controllers & Amplifiers',
        name: 'PRAESENSA System Controller',
        form: 'IP voice-alarm controller',
        specs: [
          { label: 'Network', value: 'OMNEO / Dante' },
          { label: 'Role', value: 'Routing & supervision' },
          { label: 'Redundancy', value: 'Supported' },
          { label: 'Standard', value: 'EN 54-16' },
        ],
      },
      {
        group: 'Controllers & Amplifiers',
        name: 'PRAESENSA Power Amplifier',
        form: 'Multifunction networked amp',
        specs: [
          { label: 'Channels', value: '4 / 8' },
          { label: 'Backup', value: 'Integrated spare channel' },
          { label: 'Class', value: 'Class-D' },
          { label: 'Standard', value: 'EN 54-16' },
        ],
      },
      {
        group: 'Controllers & Amplifiers',
        name: 'PRAESENSA Call Station',
        form: 'IP call station',
        specs: [
          { label: 'Interface', value: 'Configurable keypad' },
          { label: 'Audio', value: 'HQ microphone' },
          { label: 'Use', value: 'Live & pre-recorded' },
        ],
      },
      {
        group: 'Stations & Speakers',
        name: 'Cabinet Loudspeaker',
        form: 'EN 54-24 cabinet speaker',
        specs: [
          { label: 'Power', value: '6–30 W tap' },
          { label: 'Mount', value: 'Wall' },
          { label: 'Rating', value: 'Indoor' },
          { label: 'Standard', value: 'EN 54-24' },
        ],
      },
      {
        group: 'Stations & Speakers',
        name: 'Ceiling Loudspeaker',
        form: 'EN 54-24 ceiling speaker',
        specs: [
          { label: 'Power', value: '6–24 W tap' },
          { label: 'Mount', value: 'Flush ceiling' },
          { label: 'Standard', value: 'EN 54-24' },
        ],
      },
      {
        group: 'Stations & Speakers',
        name: 'Horn Loudspeaker',
        form: 'Outdoor horn speaker',
        specs: [
          { label: 'Power', value: '10–25 W' },
          { label: 'Rating', value: 'IP66 outdoor' },
          { label: 'Use', value: 'High-noise areas' },
        ],
      },
    ],
  },

  access: {
    eyebrow: 'Access Control',
    title: 'Readers, Controllers & Identity',
    blurb:
      'From IP door controllers to biometric and face recognition — multi-brand and fully integrable with CCTV and fire.',
    items: [
      {
        group: 'Bosch — Controllers & Intrusion',
        name: 'AMC2 Access Controller',
        form: 'IP door controller',
        specs: [
          { label: 'Doors', value: 'Up to 8' },
          { label: 'Interface', value: 'Wiegand / OSDP' },
          { label: 'Network', value: 'Ethernet' },
          { label: 'Offline', value: 'Local decisions' },
        ],
      },
      {
        group: 'Bosch — Controllers & Intrusion',
        name: 'Access Management System',
        form: 'Access control software',
        specs: [
          { label: 'Scale', value: 'Enterprise' },
          { label: 'Integration', value: 'CCTV / intrusion' },
          { label: 'Credentials', value: 'Card / mobile / biometric' },
        ],
      },
      {
        group: 'Bosch — Controllers & Intrusion',
        name: 'AMAX Intrusion Panel',
        form: 'Intrusion alarm panel',
        specs: [
          { label: 'Zones', value: 'Up to 64' },
          { label: 'Comms', value: 'IP / cellular' },
          { label: 'Standard', value: 'EN 50131' },
        ],
      },
      {
        group: 'STid — Smart Readers',
        name: 'ARChitect Reader',
        form: 'Modular smart reader',
        specs: [
          { label: 'Tech', value: 'MIFARE DESFire / BLE / NFC' },
          { label: 'Security', value: 'SSCP protocol' },
          { label: 'Mobile', value: 'STid Mobile ID' },
          { label: 'Form', value: 'Modular' },
        ],
      },
      {
        group: 'Wavelynx — Readers',
        name: 'Ethos Reader',
        form: 'Multi-technology reader',
        specs: [
          { label: 'Tech', value: '125 kHz / 13.56 MHz / BLE / NFC' },
          { label: 'Mobile', value: 'Supported' },
          { label: 'Protocol', value: 'OSDP' },
          { label: 'Upgrade', value: 'Field-flashable' },
        ],
      },
      {
        group: 'Allegion — Locking Hardware',
        name: 'Schlage Electronic Lock',
        form: 'Networked electronic lock',
        specs: [
          { label: 'Type', value: 'Wireless / wired' },
          { label: 'Credentials', value: 'Card / mobile' },
          { label: 'Use', value: 'Doors & openings' },
        ],
      },
      {
        group: 'Allegion — Locking Hardware',
        name: 'Von Duprin / LCN',
        form: 'Exit devices & closers',
        specs: [
          { label: 'Type', value: 'Exit hardware' },
          { label: 'Function', value: 'Egress & closing' },
          { label: 'Use', value: 'Fire-rated doors' },
        ],
      },
      {
        group: 'Quanika — Software',
        name: 'Quanika Enterprise',
        form: 'Access management software',
        specs: [
          { label: 'Integration', value: 'CCTV / intrusion / VMS' },
          { label: 'Scale', value: 'Multi-site' },
          { label: 'Feature', value: 'Visitor management' },
        ],
      },
      {
        group: 'Face Recognition — SAFR / Oosto',
        name: 'SAFR SCAN',
        form: 'Face-recognition reader',
        specs: [
          { label: 'Mode', value: 'Frictionless access' },
          { label: 'Match', value: 'Sub-second' },
          { label: 'Liveness', value: 'Anti-spoofing' },
          { label: 'Use', value: 'Doors & turnstiles' },
        ],
      },
      {
        group: 'Face Recognition — SAFR / Oosto',
        name: 'Oosto OnAccess',
        form: 'AI face recognition platform',
        specs: [
          { label: 'Engine', value: 'Edge + server' },
          { label: 'Use', value: 'Watchlist & access' },
          { label: 'Throughput', value: 'High-volume' },
        ],
      },
    ],
  },

  ibms: {
    eyebrow: 'IBMS',
    title: 'Integrated Building Management',
    blurb: 'A unified platform for the critical systems of a smart building.',
    items: [
      {
        group: 'Platform',
        name: 'Building Integration System (BIS)',
        form: 'Unified management platform',
        specs: [
          { label: 'Subsystems', value: 'Fire / CCTV / Access / Intrusion' },
          { label: 'View', value: 'Single dashboard' },
          { label: 'Workflow', value: 'Alarm & SOP automation' },
        ],
      },
      {
        group: 'Platform',
        name: 'Command & Control',
        form: 'Aggregated visualization',
        specs: [
          { label: 'Role', value: 'Site-wide awareness' },
          { label: 'Output', value: 'Decision support' },
        ],
      },
      {
        group: 'Sub-systems',
        name: 'Smart Energy Management',
        form: 'Utility & DG analytics',
        specs: [
          { label: 'Function', value: 'Consumption monitoring' },
          { label: 'Output', value: 'Cost optimization' },
        ],
      },
      {
        group: 'Sub-systems',
        name: 'HVAC Monitoring & Control',
        form: 'Climate control',
        specs: [
          { label: 'Function', value: 'Setpoint & scheduling' },
          { label: 'Output', value: 'Comfort + efficiency' },
        ],
      },
      {
        group: 'Sub-systems',
        name: 'Smart Lighting Management',
        form: 'Lighting control',
        specs: [
          { label: 'Modes', value: 'Time / lux / on-demand' },
          { label: 'Scope', value: 'Indoor & street' },
        ],
      },
      {
        group: 'Sub-systems',
        name: 'Smart Water Management',
        form: 'Water monitoring',
        specs: [
          { label: 'Function', value: 'Flow & leak detection' },
          { label: 'Output', value: 'Loss reduction' },
        ],
      },
      {
        group: 'Sub-systems',
        name: 'Environmental Monitoring',
        form: 'Environment sensing',
        specs: [
          { label: 'Sensors', value: 'Temp / humidity / air' },
          { label: 'Output', value: 'Alerts & trends' },
        ],
      },
    ],
  },

  ups: {
    eyebrow: 'Power & UPS',
    title: 'UPS & Critical Power',
    blurb: 'From desktop UPS to data-center three-phase systems and solar — Atenco and Effekta.',
    items: [
      {
        group: 'Atenco',
        name: 'Atenco Rack / Tower UPS',
        form: 'Online UPS · 1–10 kVA',
        specs: [
          { label: 'Topology', value: 'Online double-conversion' },
          { label: 'Form', value: 'Rack / tower' },
          { label: 'Phase', value: 'Single' },
          { label: 'Battery', value: 'Scalable runtime' },
        ],
      },
      {
        group: 'Atenco',
        name: 'Atenco Three-Phase UPS',
        form: 'Online UPS · 10–80 kVA',
        specs: [
          { label: 'Topology', value: 'Online double-conversion' },
          { label: 'Phase', value: 'Three-phase' },
          { label: 'Use', value: 'Data center' },
          { label: 'Feature', value: 'Parallel redundancy' },
        ],
      },
      {
        group: 'Effekta',
        name: 'Effekta MH Series',
        form: 'Online UPS · 1–3 kVA',
        specs: [
          { label: 'Topology', value: 'Online double-conversion' },
          { label: 'Form', value: 'Tower / rack' },
          { label: 'Phase', value: 'Single' },
          { label: 'Use', value: 'Servers & network' },
        ],
      },
      {
        group: 'Effekta',
        name: 'Effekta 3-Phase (MTD / MKD)',
        form: 'Three-phase online UPS',
        specs: [
          { label: 'Range', value: '10–800 kVA' },
          { label: 'Phase', value: 'Three-phase' },
          { label: 'Use', value: 'Industrial / data center' },
          { label: 'Feature', value: 'Modular options' },
        ],
      },
      {
        group: 'Effekta',
        name: 'Effekta Solar Inverter',
        form: 'Solar / hybrid power',
        specs: [
          { label: 'Type', value: 'Hybrid inverter' },
          { label: 'Input', value: 'PV + grid' },
          { label: 'Use', value: 'Renewable backup' },
        ],
      },
    ],
  },
}
