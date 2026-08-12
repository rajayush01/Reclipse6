import SectionHeading from '@/components/SectionHeading'
import StoryCard from '@/components/StoryCard'
import { stories } from '@/data/stories'

export default function Photography() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-28 pt-36 md:px-10 md:pt-44">
      <SectionHeading eyebrow="Portfolio" title="Photography" className="mb-16 md:mb-24" />
      <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
        {stories.map((story, i) => (
          <StoryCard key={story.slug} story={story} className={i % 3 === 1 ? 'md:mt-20' : ''} />
        ))}
      </div>
    </section>
  )
}
