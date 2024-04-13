import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface props {
  src: string
  title: string
  slug?: string
}

const CoverImage = ({ src, title, slug }: props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={twMerge('shadow-sm w-full',
        'hover:shadow-lg transition-shadow duration-200',
      )}
      width={1300}
      height={630}
    />
  )
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]' aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
