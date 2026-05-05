import Image from 'next/image'

interface OrnamentDividerProps {
  className?: string
}

export default function OrnamentDivider({ className = '' }: OrnamentDividerProps) {
  return (
    <div className={`flex justify-center py-12 md:py-16 ${className}`}>
      <Image
        src="/assets/ornament-divider.svg"
        alt=""
        width={240}
        height={32}
        className="w-60 md:w-72 h-auto opacity-60"
        aria-hidden="true"
      />
    </div>
  )
}
