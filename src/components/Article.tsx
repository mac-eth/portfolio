import { Card } from "@/components/Card";
import { formatDate } from "@/lib/formatDate";
import React from "react";

import type { ArticleProps } from '@/types'

const Article: React.FC<ArticleProps> = ({ article }: ArticleProps) => {
  return (
    <Card as="article" className="">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow className="" as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

export default Article;