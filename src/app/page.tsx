import { getAllPostMeta } from '@/lib/api'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from './_components/container'
import DateFormatter from './_components/date-formatter'

export default async function Home() {
  const posts = await getAllPostMeta()

  if (!posts) return notFound()

  return (
    <main>
      <Container>
        <div className='grid grid-cols-3 gap-6 m-6'>
          {' '}
          {/* Adjusted for 3 columns grid */}
          {posts &&
            posts.map((post: any) => (
              <>
                <div
                  key={post.title}
                  className='text-white rounded-lg shadow-md overflow-hidden bg-stone-800'
                >
                  {' '}
                  {/* Card container */}
                  <div className='w-full h-60'>
                    {' '}
                    {/* Container for image */}
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='p-4'>
                    {' '}
                    {/* Container for text content */}
                    <Link
                      href={`/posts/${post.slug}`}
                      className='block hover:text-black/90' // Link styling
                    >
                      <h3 className='text-xl font-semibold'>{post.title}</h3>
                    </Link>
                    <p className='mt-2 text-sm'>{post.excerpt}</p>
                    <time className='text-xs text-gray-500 block mt-2'>
                      <DateFormatter dateString={post.date} />
                    </time>
                  </div>
                </div>
              </>
            ))}
        </div>
      </Container>
    </main>
  )
}
