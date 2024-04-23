import { Metadata } from 'next'
import { Author } from './author'

export type Post = {
  meta: Metadata
  content: React.ReactElement
  title: string
  date: Date
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }

  preview?: boolean
}
