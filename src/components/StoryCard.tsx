import { Link } from 'react-router-dom'
import EditorialImage from './EditorialImage'
import type { Story } from '@/data/stories'

interface Props {
  story: Story
  className?: string
}

export default function StoryCard({ story, className = '' }: Props) {
  return (
    <Link to={`/photography/${story.slug}`} className={`group block ${className}`}>
      <EditorialImage
        image={story.heroImage}
        cursorLabel="VIEW STORY →"
        className="aspect-[4/5] transition-[filter] duration-700"
      />
      <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-4">
        <div>
          <h3 className="font-display text-xl md:text-2xl">{story.title}</h3>
          <p className="mt-1 text-sm text-ash">{story.location}</p>
        </div>
        <p className="eyebrow shrink-0">{story.year}</p>
      </div>
    </Link>
  )
}
