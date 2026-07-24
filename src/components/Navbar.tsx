import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
import { asset } from "../lib/asset"

interface NavLinkItem {
  to: string
  label: string
  children?: { to: string; label: string }[]
}

const links: NavLinkItem[] = [
  { to: "/", label: "Startseite" },
  {
    to: "/schule",
    label: "Die Schule",
    children: [
      { to: "/schule", label: "Über uns" },
      { to: "/schule/team", label: "Schulleitung & Verwaltung" },
      { to: "/schule/organisation", label: "Organisation" },
      { to: "/schule/125-jahre", label: "125 Jahre" },
    ],
  },
  {
    to: "/bildungsgaenge",
    label: "Bildungsgänge",
    children: [
      { to: "/bildungsgaenge", label: "Übersicht" },
      { to: "/bildungsgaenge/berufliches-gymnasium", label: "Berufliches Gymnasium" },
      { to: "/bildungsgaenge/fachoberschule", label: "Fachoberschule" },
      { to: "/bildungsgaenge/berufsfachschule", label: "Berufsfachschule" },
      { to: "/bildungsgaenge/berufsschule", label: "Berufsschule" },
      { to: "/bildungsgaenge/fachschule-technik", label: "Fachschule für Technik" },
      { to: "/angebote", label: "Weitere Angebote" },
    ],
  },
  { to: "/aktuelles", label: "Aktuelles" },
  { to: "/service", label: "Service" },
  { to: "/kontakt", label: "Kontakt" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const itemClass = (isActive: boolean) =>
    `px-4 py-2 text-sm font-medium transition-colors btn-cut-sm ${
      isActive ? "bg-brand-700 text-white" : "text-ink-800 hover:bg-brand-50 hover:text-brand-700"
    }`

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-ink-100">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto max-w-6xl px-4 md:px-8 flex items-center justify-between h-16 md:h-20"
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={asset("/logo-bs-bebra.png")}
            alt="Berufliche Schulen Bebra"
            width={466}
            height={258}
            className="h-11 md:h-14 w-auto"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li
              key={link.to}
              className="relative"
              onMouseEnter={() => link.children && setOpenMenu(link.to)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {link.children ? (
                <>
                  <NavLink
                    to={link.to}
                    end={false}
                    className={({ isActive }) =>
                      `${itemClass(isActive)} inline-flex items-center gap-1`
                    }
                    aria-expanded={openMenu === link.to}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                  </NavLink>
                  {openMenu === link.to && (
                    <ul className="absolute left-0 top-full pt-2 min-w-60">
                      <div className="card-cut bg-white border border-ink-100 shadow-lg py-2">
                        {link.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              end
                              className={({ isActive }) =>
                                `block px-4 py-2.5 text-sm transition-colors ${
                                  isActive
                                    ? "text-brand-700 font-semibold bg-brand-50"
                                    : "text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </div>
                    </ul>
                  )}
                </>
              ) : (
                <NavLink to={link.to} end className={({ isActive }) => itemClass(isActive)}>
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden p-2 text-ink-900"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden border-t border-ink-100 bg-white px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-medium btn-cut-sm ${
                    isActive ? "bg-brand-700 text-white" : "text-ink-800 hover:bg-brand-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
              {link.children && (
                <ul className="ml-4 mt-1 space-y-1 border-l-2 border-ink-100 pl-3">
                  {link.children.slice(1).map((child) => (
                    <li key={child.to}>
                      <NavLink
                        to={child.to}
                        end
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm ${
                            isActive
                              ? "text-brand-700 font-semibold"
                              : "text-ink-600 hover:text-brand-700"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
