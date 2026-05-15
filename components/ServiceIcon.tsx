'use client'

type ServiceIconName = 'consulting' | 'automation' | 'agents' | 'custom-ai'

const iconPaths: Record<ServiceIconName, { viewBox: string; paths: string[] }> = {
  consulting: {
    viewBox: '0 0 48 48',
    paths: [
      // Magnifying glass with target — AI discovery / audit
      'M22 10a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0-4C11.5 6 3 14.5 3 25s8.5 19 19 19 19-8.5 19-19S32.5 6 22 6z',
      'M22 16a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0-2c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11z',
      'M22 22a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0-2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z',
      'M40 40l-8.5-8.5',
    ],
  },
  automation: {
    viewBox: '0 0 48 48',
    paths: [
      // Interlocking gears / automation cycle
      'M18 12a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
      'M33 24a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
      'M10 36c4-10 12-10 16-4s12 6 16-4',
    ],
  },
  agents: {
    viewBox: '0 0 48 48',
    paths: [
      // Network / agent nodes — hexagon nodes connected
      'M24 4l16 9.237v18.526L24 41 8 31.763V13.237L24 4z',
      'M24 4v37',
      'M8 13.237l16 9.763 16-9.763',
      'M8 31.763l16-9.763 16 9.763',
      'M8 22.5h32',
      'M24 13.237L8 31.763',
      'M24 13.237l16 18.526',
    ],
  },
  'custom-ai': {
    viewBox: '0 0 48 48',
    paths: [
      // Modular cube / building blocks — custom system
      'M4 12l20-8 20 8v24l-20 8-20-8V12z',
      'M24 4v40',
      'M4 12l20 12 20-12',
      'M4 36l20-12 20 12',
      'M14 8l20 12',
    ],
  },
}

export default function ServiceIcon({
  name,
  className = '',
  size = 48,
}: {
  name: ServiceIconName
  className?: string
  size?: number
}) {
  const icon = iconPaths[name]
  if (!icon) return null

  return (
    <svg
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icon.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}
