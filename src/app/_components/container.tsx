import { twMerge } from 'tailwind-merge'

const Container = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={twMerge(' container mx-auto px-5', className)}>
      {children}
    </div>
  )
}
export default Container
