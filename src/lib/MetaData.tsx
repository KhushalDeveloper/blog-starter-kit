// In MetaDat.tsx
import { getPostBySlug } from './api'

export const getDynamicMetadata = async (
  slug: string
): Promise<{
  title: string
  description: string
  openGraph: { images: string[] }
}> => {
  const { meta } = await getPostBySlug(slug)
  console.log('meta', meta)
  return {
    title: meta?.title || 'Default Title',
    description: meta?.description || `A detailed post about ${meta?.title}`,
    openGraph: {
      images: [meta?.image || 'default-image-url.jpg'],
    },
  }
}
