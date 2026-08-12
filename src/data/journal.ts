export interface JournalPost {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  cover: string
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'how-to-elope-in-scotland',
    title: 'How to Elope in Scotland',
    category: 'Planning',
    date: 'March 2026',
    excerpt: 'Permits, weather windows and the honest timeline of planning a Highland elopement.',
    cover: 'https://picsum.photos/seed/journal-1/1600/1100',
  },
  {
    slug: 'best-places-to-elope-in-scotland',
    title: 'Best Places to Elope in Scotland',
    category: 'Locations',
    date: 'January 2026',
    excerpt: 'Eleven glens, islands and coastlines worth building a ceremony around.',
    cover: 'https://picsum.photos/seed/journal-2/1600/1100',
  },
  {
    slug: 'scotland-elopement-planning-guide',
    title: 'A Scotland Elopement Planning Guide',
    category: 'Planning',
    date: 'November 2025',
    excerpt: 'What to book first, what can wait, and what never goes to plan.',
    cover: 'https://picsum.photos/seed/journal-3/1600/1100',
  },
]
