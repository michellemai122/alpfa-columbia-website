export type IconName =
  | 'calendar'
  | 'people'
  | 'ticket'
  | 'globe'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'arrow-right'
  | 'external'
  | 'instagram'
  | 'linkedin'
  | 'tiktok'
  | 'whatsapp'
  | 'mail'
  | 'pin'
  | 'briefcase'
  | 'presentation'
  | 'chart'
  | 'plane'
  | 'quote'

const paths: Record<IconName, string> = {
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M8 14h2M12 14h2M16 14h0M8 17h2M12 17h2',
  people: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM15 11a3 3 0 1 0 0-6M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14c3.3 0 6 2.7 6 6',
  ticket: 'M4 12l8-8 3 3a2 2 0 0 0 2 2l3 3-8 8-3-3a2 2 0 0 0-2-2zM10 10l4 4',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z',
  'chevron-down': 'M6 9l6 6 6-6',
  'chevron-left': 'M15 6l-6 6 6 6',
  'chevron-right': 'M9 6l6 6-6 6',
  'arrow-right': 'M4 12h15M13 6l6 6-6 6',
  external: 'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6',
  instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h0',
  linkedin: 'M4 4h16v16H4zM8 10v6M8 7.5v0M12 16v-6M12 13c0-2 4-2.5 4 0v3',
  tiktok: 'M14 3v11a3.5 3.5 0 1 1-3.5-3.5M14 3c0 2.5 2 4.5 4.5 4.5',
  whatsapp: 'M4 20l1.3-4A8 8 0 1 1 8 18.8zM9 9c0 3 3 6 6 6l1-1.5-2-1-1 1c-1 0-2.5-1.5-2.5-2.5l1-1-1-2z',
  mail: 'M3 6h18v12H3zM3 6l9 7 9-7',
  pin: 'M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zM12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  briefcase: 'M3 8h18v11H3zM9 8V5h6v3M3 13h18',
  presentation: 'M3 4h18v11H3zM12 15v5M8 20h8M7 11l3-3 3 2 4-4',
  chart: 'M4 20h16M6 16v-4M10 16V9M14 16v-6M18 16V6',
  plane: 'M2 13l20-8-7 16-3-7z',
  quote: 'M5 17c2 0 3-1.5 3-4V7H4v6h3M14 17c2 0 3-1.5 3-4V7h-4v6h3',
}

type IconProps = { name: IconName; size?: number; className?: string; strokeWidth?: number }

export function Icon({ name, size = 24, className, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
