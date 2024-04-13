import { getAllPosts } from '@/lib/api'
import Container from './_components/container'
import { HeroPost } from './_components/hero-post'
import { Intro } from './_components/intro'
import { MoreStories } from './_components/more-stories'

export default function Home() {
  const allPost = getAllPosts()
  const heroPost = allPost[0]

  const morePosts = allPost.slice(1)
  console.log('heroPost', heroPost)

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories post={morePosts} />}
      </Container>
    </main>
  )
}
