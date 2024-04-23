import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => {
      // Extract the src, width, and height from props
      const { src, width, height, ...rest } = props as ImageProps

      return (
        <Image
          src={src}
          width={width || 1000} // Provide a default width if not specified
          height={height || 500} // Provide a default height if not specified
          layout='responsive'
          {...rest}
        />
      )
    },
  }
}
