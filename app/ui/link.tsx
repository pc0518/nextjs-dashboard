import Link, { LinkProps } from 'next/link'

// 使用 Omit 融合 Next.js 的 LinkProps 和原生 a 标签的 HTML 属性（包含 className、target 等）
interface NoPrefetchLinkProps 
  extends LinkProps, 
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  children: React.ReactNode
}

export default function NoPrefetchLink({ 
  prefetch = false, // 设置默认值为 false
  ...rest 
}: NoPrefetchLinkProps) {
  
  // 此时 ...rest 里面完美包含了 prefetch 之外的 className、href 和 children 等所有属性
  return <Link prefetch={prefetch} {...rest} />
}