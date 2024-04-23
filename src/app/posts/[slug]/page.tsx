import Container from '@/app/_components/container'
import { getPostBySlug } from '@/lib/api'

const getPageContent = async (slugPromise: Promise<{ slug: string }[]>) => {
  const slugs = await slugPromise // Resolve the promise
  if (!Array.isArray(slugs)) {
    throw new Error('Expected slugs to be an array')
  }
  const results = await Promise.all(
    slugs.map(async ({ slug }) => {
      const { meta, content } = await getPostBySlug(`${slug}.mdx`)

      const typedMeta = { ...meta, slug: slug.replace('.mdx', '') } as any
      return { meta: typedMeta, content }
    })
  )
  return results
}

export async function generateMetaData({ params }: { params: any }) {
  const results = await getPageContent(params.slug)
  const { meta } = results[0]
  return { title: meta?.title }
}

const Page = async ({ params }: { params: any }) => {
  // Ensure params.slug is wrapped in a promise that resolves to an array
  const slugPromise = Promise.resolve([{ slug: params.slug }])
  const results = await getPageContent(slugPromise)
  const { content } = results[0]
  // Access the 'content' property correctly
  return (
    <article>
      <Container className='prose'>{content}</Container>
    </article>
  )
}

export default Page
