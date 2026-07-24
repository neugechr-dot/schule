import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const links = [
  { to: "/", label: "Startseite" },
  { to: "/schule", label: "Die Schule" },
  { to: "/bildungsgaenge", label: "Bildungsgänge" },
  { to: "/aktuelles", label: "Aktuelles" },
  { to: "/kontakt", label: "Kontakt" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-ink-100">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto max-w-6xl px-4 md:px-8 flex items-center justify-between h-16 md:h-20"
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            aria-hidden="true"
            className="btn-cut-sm bg-brand-500 text-white w-10 h-10 flex items-center justify-center font-bold text-sm"
          >
            BSB
          </span>
          <span className="font-semibold leading-tight text-ink-900">
            Berufliche Schulen
            <span className="block text-brand-700 text-sm font-medium tracking-wide">
              Bebra
            </span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors btn-cut-sm ${
                    isActive
                      ? "bg-brand-500 text-white"
                      : "text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 text-ink-900"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-ink-100 bg-white px-4 py-3 space-y-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-medium btn-cut-sm ${
                    isActive
                      ? "bg-brand-500 text-white"
                      : "text-ink-800 hover:bg-brand-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
