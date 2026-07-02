import Link, { LinkProps } from 'next/link'

interface NoPrefetchLinkProps extends LinkProps {
  children: React.ReactNode
}

export default function NoPrefetchLink({ 
  prefetch = false, // 设置默认值为 false
  ...rest 
}: NoPrefetchLinkProps) {
  
  return <Link prefetch={prefetch} {...rest} />
}