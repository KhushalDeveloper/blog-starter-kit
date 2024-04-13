import { type Author } from '@/interface/author'
import Link from 'next/link'
import CoverImage from './cover-image'
import DateFormatter from './date-formatter'
import { Avatar } from './avatar'

interface props {
  slug: string
  date: string
  excerpt: string
  title: string
  coverImage: string
  author: Author
}

export function PostPreview({
  slug,
  date,
  excerpt,
  title,
  coverImage,
  author,
}: props) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link
          as={`/posts/${slug}`}
          href='/posts/[slug]'
          className='hover:underline'
        >
          {title}
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <DateFormatter dateString={date} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
