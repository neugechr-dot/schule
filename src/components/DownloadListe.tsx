import { FileText } from "lucide-react"
import { asset } from "../lib/asset"

interface DownloadListeProps {
  items: { titel: string; datei: string; stand?: string }[]
}

export default function DownloadListe({ items }: DownloadListeProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.datei + item.titel}>
          <a
            href={asset(item.datei)}
            target="_blank"
            rel="noreferrer"
            className="btn-cut-sm flex items-center gap-3 bg-ink-50 hover:bg-brand-50 transition-colors px-4 py-3 group"
          >
            <FileText className="w-5 h-5 text-brand-700 shrink-0" aria-hidden="true" />
            <span className="font-medium group-hover:text-brand-700 transition-colors">
              {item.titel}
            </span>
            <span className="ml-auto text-xs text-ink-600 shrink-0">
              {item.stand ? `Stand ${item.stand} · PDF` : "PDF"}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
