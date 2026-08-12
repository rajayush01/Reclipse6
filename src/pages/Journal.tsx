import { Link } from 'react-router-dom'
import SectionHeading from '@/components/SectionHeading'
import EditorialImage from '@/components/EditorialImage'
import Guides from '@/components/Guides'
import { journalPosts } from '@/data/journal'

export default function Journal() {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pb-28 pt-36 md:px-10 md:pt-44">
        <SectionHeading eyebrow="Guides & Notes" title="Journal" className="mb-16 md:mb-24" />

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-3">
          {journalPosts.map((post) => (
            <Link key={post.slug} to={`/journal/${post.slug}`} className="group block">
              <EditorialImage
                image={{ src: post.cover, alt: post.title, orientation: 'landscape' }}
                className="aspect-[4/3]"
              />
              <p className="eyebrow mt-5">{post.category} — {post.date}</p>
              <h3 className="mt-2 font-display text-2xl">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <Guides />
    </>
  )
}
