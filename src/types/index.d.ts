export interface IconProps {
  viewBox: string
  fill: string
  strokeWidth: number
  strokeLinecap: 'round' | 'butt' | 'square' | 'inherit'
  strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel'
  ariaHidden: boolean
}

interface ArticleProps {
  article: {
    slug: string,
    title: string,
    date: string,
    description: string,
  }
}