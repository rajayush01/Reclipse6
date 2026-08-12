export interface Film {
  slug: string
  title: string
  couple: string
  location: string
  year: string
  poster: string
  description: string
  quote?: { text: string; attribution: string }
  stills: { src: string; alt: string }[]
}

// Placeholder posters/stills (picsum) — replace with real film frames before launch.
export const films: Film[] = [
  {
    slug: 'effie-and-sam',
    title: 'Effie & Sam',
    couple: 'Effie & Sam',
    location: 'Glencoe',
    year: '2026',
    poster: 'https://picsum.photos/seed/film-glencoe/1600/2000',
    description:
      'Four minutes of mist, river sound and two people who forgot the camera was there by the second take. Cut with the sync sound from the ceremony itself — no score needed.',
    quote: { text: 'Watching it back, I forgot I was watching us.', attribution: 'Sam' },
    stills: [
      { src: 'https://picsum.photos/seed/film-glencoe-1/1600/1000', alt: 'Film still of the couple crossing a river bend' },
      { src: 'https://picsum.photos/seed/film-glencoe-2/1600/1000', alt: 'Film still of hands during the vow exchange' },
    ],
  },
  {
    slug: 'nara-and-june',
    title: 'Nara & June',
    couple: 'Nara & June',
    location: 'Isle of Skye',
    year: '2025',
    poster: 'https://picsum.photos/seed/film-skye/1600/2000',
    description:
      'Shot across a single unpredictable afternoon on the Storr — rain, then forty minutes of gold light we didn\u2019t plan for and weren\u2019t going to waste.',
    quote: { text: 'The weather is basically a third person in this film.', attribution: 'June' },
    stills: [
      { src: 'https://picsum.photos/seed/film-skye-1/1600/1000', alt: 'Film still of the couple climbing toward the Old Man of Storr' },
      { src: 'https://picsum.photos/seed/film-skye-2/1600/1000', alt: 'Film still of golden hour light breaking through cloud' },
    ],
  },
  {
    slug: 'priya-and-tom',
    title: 'Priya & Tom',
    couple: 'Priya & Tom',
    location: 'Eilean Shona',
    year: '2025',
    poster: 'https://picsum.photos/seed/film-shona/1600/2000',
    description:
      'An island wedding for twelve, told in wide, patient shots that let the walled garden and the tide do most of the talking.',
    stills: [
      { src: 'https://picsum.photos/seed/film-shona-1/1600/1000', alt: 'Film still of a small boat crossing to the island' },
      { src: 'https://picsum.photos/seed/film-shona-2/1600/1000', alt: 'Film still of guests gathered in the walled garden' },
    ],
  },
]

export const getFilmBySlug = (slug: string) => films.find((f) => f.slug === slug)
