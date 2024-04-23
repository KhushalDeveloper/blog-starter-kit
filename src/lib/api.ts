import { MetaData } from '@/interface/Metadata'
import { Post } from '@/interface/post'
import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import { ReactElement } from 'react'
const postsDirectory = path.join(process.cwd(), 'src', 'app', 'content')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

function toSorted<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
  return [...array].sort(compareFn)
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs: any = await getPostSlugs()
  const posts = await Promise.all(slugs.map((slug: any) => getPostBySlug(slug)))
  const sortedPosts = toSorted(posts, (post1, post2) =>
    post1.meta.slug.localeCompare(post2.meta.slug)
  )

  return sortedPosts
}

export async function getPostBySlug(
  slug: string
): Promise<{ meta: MetaData; content: ReactElement }> {
  // Ensure the slug does not include the file extension
  const realSlug = slug.replace('.mdx', '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)

  // Read the file content from the filesystem
  const fileContent = fs.readFileSync(fullPath, 'utf8')

  // Compile the MDX content to extract frontmatter and the actual content
  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  })

  return { meta: { ...frontmatter, slug: realSlug }, content: content }
}

export const getAllPostMeta = async () => {
  const slugs = getPostSlugs()
  let postMeta = []
  for (const slug of slugs) {
    const { meta } = await getPostBySlug(slug)
    postMeta.push(meta)
  }

  return postMeta
}
