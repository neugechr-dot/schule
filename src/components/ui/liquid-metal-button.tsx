import { Link } from "react-router-dom"
import { ArrowRight, type LucideIcon } from "lucide-react"

type ViewMode = "default" | "icon"
type Variant = "primary" | "ghost"

interface LiquidMetalButtonProps {
  label?: string
  viewMode?: ViewMode
  variant?: Variant
  icon?: LucideIcon
  to?: string
  href?: string
  onClick?: () => void
  type?: "button" | "submit"
  className?: string
}

export function LiquidMetalButton({
  label = "Get Started",
  viewMode = "default",
  variant = "primary",
  icon: Icon = ArrowRight,
  to,
  href,
  onClick,
  type = "button",
  className = "",
}: LiquidMetalButtonProps) {
  const isIcon = viewMode === "icon"
  const surface = variant === "ghost" ? "btn-liquid-ghost" : "btn-liquid"
  const shape = isIcon
    ? "rounded-full w-12 h-12 justify-center"
    : "rounded-full px-7 py-3.5 gap-2"

  const classes = `${surface} ${shape} inline-flex items-center font-medium group ${className}`

  const content = isIcon ? (
    <Icon className="w-5 h-5" aria-hidden="true" />
  ) : (
    <>
      {label}
      <Icon
        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
        aria-hidden="true"
      />
    </>
  )

  const ariaLabel = isIcon ? label : undefined

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  )
}

export default LiquidMetalButton
