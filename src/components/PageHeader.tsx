interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-ink-900 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
        <h1 className="anim-stagger text-3xl md:text-5xl font-semibold tracking-tight" style={{ animationDelay: "0.1s" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="anim-stagger mt-4 max-w-2xl text-white/80 text-base md:text-lg" style={{ animationDelay: "0.25s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
