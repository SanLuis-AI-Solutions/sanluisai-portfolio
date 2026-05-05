import Image from 'next/image'

interface FlameMarkProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function FlameMark({ size = 'sm', className = '' }: FlameMarkProps) {
  const dims = { sm: 16, md: 24, lg: 40 }
  const w = dims[size]
  const h = Math.round(w * 1.5)
  return (
    <Image
      src="/assets/flame-mark.svg"
      alt=""
      width={w}
      height={h}
      className={`inline-block align-middle opacity-70 ${className}`}
      aria-hidden="true"
    />
  )
}
