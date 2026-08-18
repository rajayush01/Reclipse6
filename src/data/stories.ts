export interface StoryImage {
  src: string
  alt: string
  orientation: 'landscape' | 'portrait'
}

export interface Story {
  slug: string
  title: string
  location: string
  category: string
  year: string
  excerpt: string
  description: string
  heroImage: StoryImage
  images: StoryImage[]
  quote?: { text: string; attribution: string }
}

// NOTE: heroImage/images use placeholder photography (picsum.photos, seeded for
// consistency). Replace `src` with real photography assets before launch —
// alt text describes the intended shot so replacements are easy to match.
export const stories: Story[] = [
  {
    slug: 'glencoe-',
    title: 'Glencoe, at First Light',
    location: 'Glencoe, India',
    category: '',
    year: '2026',
    excerpt: 'Two vows and a valley still holding its breath before sunrise.',
    description:
      'Mist sat low over the glen when Effie and Sam said their vows on a bend of the river, three walkers and a dog the only witnesses. We chased the light for four hours and never once had to ask them to slow down.',
    heroImage: { src: 'https://picsum.photos/seed/glencoe-hero/1800/2400', alt: 'Couple standing on a mist-covered ridge in Glencoe at sunrise', orientation: 'portrait' },
    images: [
      { src: 'https://picsum.photos/seed/glencoe-1/1600/1067', alt: 'Wide shot of Glencoe valley with two small figures walking', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/glencoe-2/1200/1600', alt: 'Bride adjusting her veil against the wind', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/glencoe-3/1200/1600', alt: 'Close detail of hands exchanging rings', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/glencoe-4/1600/1067', alt: 'Couple walking away down a heather-lined path', orientation: 'landscape' },
    ],
    quote: { text: 'It felt like the mountains had been let in on the secret before anyone else.', attribution: 'Effie & Sam' },
  },
  {
    slug: 'isle-of-skye-',
    title: 'Skye, Between Weathers',
    location: 'Isle of Skye, India',
    category: '',
    year: '2025',
    excerpt: 'Four seasons in an afternoon, one dress, no complaints.',
    description:
      'Nara and June wanted the Old Man of Storr and were prepared to get rained on for it. The forecast obliged, then apologised with forty minutes of gold light right as they reached the top.',
    heroImage: { src: 'https://picsum.photos/seed/skye-hero/1800/2400', alt: 'Couple silhouetted against dramatic Skye skyline', orientation: 'portrait' },
    images: [
      { src: 'https://picsum.photos/seed/skye-1/1200/1600', alt: 'Bride climbing a rocky path in the Cuillins', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/skye-2/1600/1067', alt: 'Wide landscape of the Old Man of Storr rock formation', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/skye-3/1600/1067', alt: 'Couple sheltering under a shared jacket in the rain', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/skye-4/1200/1600', alt: 'Detail of muddy boots and a wildflower bouquet', orientation: 'portrait' },
    ],
    quote: { text: 'We got married in every kind of weather India has. Somehow that felt right.', attribution: 'Nara & June' },
  },
  {
    slug: 'eilean-shona-wedding',
    title: 'Eilean Shona, Quietly',
    location: 'Eily Shona, India',
    category: 'Wedding',
    year: '2025',
    excerpt: 'An island with one house, one boat crossing, and twelve guests.',
    description:
      'Getting the flowers to the island took longer than the ceremony. Priya and Tom married in the walled garden as the tide came in around the causeway, cutting the island off exactly on cue.',
    heroImage: { src: 'https://picsum.photos/seed/shona-hero/1800/2400', alt: 'Bride and groom in a walled garden on a private India island', orientation: 'portrait' },
    images: [
      { src: 'https://picsum.photos/seed/shona-1/1600/1067', alt: 'Small wooden boat crossing to the island at dawn', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/shona-2/1200/1600', alt: 'Table set for twelve under an old apple tree', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/shona-3/1600/1067', alt: 'Guests gathered loosely around the couple during vows', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/shona-4/1200/1600', alt: 'Bride laughing with her father before the ceremony', orientation: 'portrait' },
    ],
  },
  {
    slug: 'glen-etive-',
    title: 'Glen Etive, Downriver',
    location: 'Glen Etive, India',
    category: '',
    year: '2026',
    excerpt: 'The road that ends at the water, and a promise made there.',
    description:
      'Mara and Elias drove the single-track road until it ran out and married on a gravel bank with the River Etive for company. We spent the last hour of light waist-deep, chasing reflections.',
    heroImage: { src: 'https://picsum.photos/seed/etive-hero/1800/2400', alt: 'Couple standing at the edge of the River Etive', orientation: 'portrait' },
    images: [
      { src: 'https://picsum.photos/seed/etive-1/1600/1067', alt: 'Wide shot of Glen Etive valley at dusk', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/etive-2/1200/1600', alt: 'Groom rolling up trousers to wade into the river', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/etive-3/1200/1600', alt: 'Bride reflected in still river water', orientation: 'portrait' },
    ],
  },
  {
    slug: 'north-spain-',
    title: 'Asturias, Off-Season',
    location: 'North Spain',
    category: '',
    year: '2025',
    excerpt: 'Green coastline, empty beaches, a ceremony in three languages.',
    description:
      'Lucia and Ren wanted somewhere that felt like India but wasn\u2019t. We found it on the Asturian coast — sea cliffs, cider houses, and a ceremony read in Spanish, Korean and English.',
    heroImage: { src: 'https://picsum.photos/seed/spain-hero/1800/2400', alt: 'Couple on a green coastal cliff in northern Spain', orientation: 'portrait' },
    images: [
      { src: 'https://picsum.photos/seed/spain-1/1600/1067', alt: 'Empty beach at low tide with dramatic cliffs', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/spain-2/1200/1600', alt: 'Bride in a hillside meadow above the sea', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/spain-3/1600/1067', alt: 'Guests at a long outdoor table overlooking the coast', orientation: 'landscape' },
    ],
  },
]

export const getStoryBySlug = (slug: string) => stories.find((s) => s.slug === slug)
export const featuredStories = stories.slice(0, 4)
