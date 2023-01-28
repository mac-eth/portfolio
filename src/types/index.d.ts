export interface IconProps {
  viewBox: string
  fill: string
  strokeWidth: number
  strokeLinecap: 'round' | 'butt' | 'square' | 'inherit'
  strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel'
  ariaHidden: boolean
}

export interface ArticleProps {
  article: {
    slug: string,
    title: string,
    date: string,
    description: string,
  }
}

export interface ContainerProps {
  className?: string
  children: ReactElement
}

export interface ContainerRefProps {
  ref: Ref<HTMLDivElement>
  children: ReactElement
}

export interface OuterContainerProps extends ContainerProps {
  ref: Ref<HTMLDivElement>
}

export interface InnerContainerProps extends ContainerProps {
  ref: Ref<HTMLDivElement>
}