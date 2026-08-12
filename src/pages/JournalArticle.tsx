import { useParams, Navigate, Link } from 'react-router-dom'
import EditorialImage from '@/components/EditorialImage'
import { journalPosts } from '@/data/journal'

export default function JournalArticle() {
  const { slug } = useParams()
  const post = journalPosts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/journal" replace />

  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:px-10 md:pt-44">
      <p className="eyebrow mb-4 text-center">{post.category} — {post.date}</p>
      <h1 className="heading-hero mx-auto max-w-2xl text-center font-display text-[36px] md:text-[52px]">
        {post.title}
      </h1>

      <div className="mt-16">
        <EditorialImage image={{ src: post.cover, alt: post.title, orientation: 'landscape' }} className="aspect-[16/9]" eager />
      </div>

      <div className="mx-auto mt-16 max-w-xl space-y-6 text-[15px] leading-relaxed text-ash">
        <p>{post.excerpt}</p>
        <p>
          Scotland rewards elopements that plan loosely and dress warmly. Every couple who
          has trusted the weather here has come away with a story worth more than a perfect
          forecast would have given them.
        </p>
        <blockquote className="border-l-2 border-ink py-2 pl-6 font-display text-2xl not-italic text-ink">
          Plan for the weather you don&rsquo;t want — it&rsquo;s usually the one you remember.
        </blockquote>
        <p>
          If you&rsquo;re weighing locations, start with the season you&rsquo;re marrying in
          and work backwards from there. Some glens are unforgettable in June and
          unreachable in January.
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-xl text-center">
        <Link to="/enquire" className="eyebrow border border-ink px-8 py-4 transition-colors hover:bg-ink hover:text-bg">
          Plan Your Elopement
        </Link>
      </div>
    </article>
  )
}
