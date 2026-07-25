import { Link, useLocation } from "react-router-dom"
import { ChevronRight } from "lucide-react"

const labels: Record<string, string> = {
  "/schule": "Die Schule",
  "/schule/team": "Schulleitung & Verwaltung",
  "/schule/organisation": "Organisation",
  "/schule/125-jahre": "125 Jahre",
  "/bildungsgaenge": "Bildungsgänge",
  "/angebote": "Weitere Angebote",
  "/aktuelles": "Aktuelles",
  "/service": "Service & Downloads",
  "/kontakt": "Kontakt",
  "/impressum": "Impressum",
  "/datenschutz": "Datenschutzerklärung",
}

interface BreadcrumbsProps {
  current: string
}

export default function Breadcrumbs({ current }: BreadcrumbsProps) {
  const { pathname } = useLocation()
  if (pathname === "/") return null

  const segmente = pathname.split("/").filter(Boolean)
  const pfade = segmente.map((_, i) => `/${segmente.slice(0, i + 1).join("/")}`)

  return (
    <nav aria-label="Brotkrumennavigation" className="anim-fade">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-white/70">
        <li>
          <Link to="/" className="hover:text-white transition-colors">
            Startseite
          </Link>
        </li>
        {pfade.map((pfad, i) => {
          const istLetztes = i === pfade.length - 1
          const label = istLetztes ? current : labels[pfad]
          if (!label) return null
          return (
            <li key={pfad} className="flex items-center gap-x-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-brand-400" aria-hidden="true" />
              {istLetztes ? (
                <span aria-current="page" className="text-white font-medium">
                  {label}
                </span>
              ) : (
                <Link to={pfad} className="hover:text-white transition-colors">
                  {label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
