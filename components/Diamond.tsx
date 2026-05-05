interface DiamondProps {
  className?: string
}

export default function Diamond({ className = '' }: DiamondProps) {
  return (
    <span className={`inline-block w-3 h-3 flex-shrink-0 align-middle ${className}`} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M16 6 L24 16 L16 26 L8 16 Z" fill="currentColor" />
      </svg>
    </span>
  )
}
