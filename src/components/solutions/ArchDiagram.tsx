// System-architecture diagram per solution. Pure markup — server component.

type Arch = { top: string; middle?: string; nodes: string[]; bottom?: string }

const ARCH: Record<string, Arch> = {
  fire: {
    top: 'Fire Alarm Control Panel (FACP)',
    nodes: ['Smoke Detector', 'Heat Detector', 'Call Point', 'Sounder / Beacon'],
    bottom: 'BMS Integration — Elevator Recall · HVAC Shutoff · Door Release',
  },
  cctv: {
    top: 'Monitoring Center / VMS',
    middle: 'Internet / LAN Network',
    nodes: ['IP Cameras (IPC/PTZ)', 'NVR / NAS Storage', 'AI Analytics Engine', 'ANPR Module'],
  },
  networking: {
    top: 'Core / Distribution Switch',
    nodes: ['Access Switches', 'Fiber Panels', 'PoE Injectors', 'Industrial Cabinets'],
    bottom: 'SAN / RAID Storage Arrays — Surveillance-grade',
  },
  pa: {
    top: 'Digital IP Controller / Router',
    nodes: ['Call Station', 'Mixing Amplifier', 'Ceiling Speakers', 'Horn Speakers'],
    bottom: 'Fire Alarm Interface · BMS Dry Contact Input',
  },
  access: {
    top: 'Access Control Software',
    nodes: ['IP Controller', 'Card / RFID Reader', 'Biometric / Face Reader', 'Electric Lock'],
    bottom: 'CCTV Integration · Fire Door Release · Time Attendance',
  },
  ibms: {
    top: 'Unified IBMS Dashboard',
    nodes: ['HVAC Control', 'Lighting Mgmt', 'Energy Monitoring', 'Water Mgmt', 'Environmental'],
  },
  ups: {
    top: 'Critical Power Distribution Unit',
    nodes: ['UPS System', 'Battery Bank', 'Solar Input', 'Bypass Module'],
    bottom: 'Protected loads: Servers · Cameras · Network Gear · Alarms',
  },
}

const Connector = () => <div className="w-px h-5 bg-[#E2ECF8]" />

export default function ArchDiagram({ id }: { id: string }) {
  const a = ARCH[id]
  if (!a) return null

  return (
    <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded-xl p-6 lg:p-8">
      <p className="text-[#94A3B8] text-[10px] uppercase tracking-widest font-semibold mb-6">
        System Architecture
      </p>
      <div className="flex flex-col items-center gap-1">
        <div className="bg-[#0D1B3E] text-white text-[11px] font-semibold px-6 py-2.5 rounded">{a.top}</div>
        <Connector />
        {a.middle && (
          <>
            <div className="bg-white border border-[#E2ECF8] rounded px-4 py-2 text-[11px] text-[#4A5568]">
              {a.middle}
            </div>
            <Connector />
          </>
        )}
        <div className="flex gap-3 flex-wrap justify-center">
          {a.nodes.map((n) => (
            <div
              key={n}
              className="bg-white border border-[#E2ECF8] rounded px-3.5 py-2.5 text-[11px] text-[#0D1B3E] font-medium text-center"
            >
              {n}
            </div>
          ))}
        </div>
        {a.bottom && (
          <>
            <Connector />
            <div className="bg-white border border-[#E2ECF8] rounded px-4 py-2 text-[11px] text-[#4A5568] text-center">
              {a.bottom}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
