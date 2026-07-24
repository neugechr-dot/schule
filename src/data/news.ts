export interface NewsItem {
  slug: string
  datum: string
  titel: string
  teaser: string
}

// TODO: Echte News-Beiträge von bs-bebra.de/aktuelles migrieren
export const news: NewsItem[] = []
