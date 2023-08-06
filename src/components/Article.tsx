import Image, { StaticImageData } from 'next/image'

interface ArticleProps {
  imageData: StaticImageData
  alt?: string
  title: string
  content: string
  textFirst?: boolean
}

export const Article = ({imageData, alt="", title, content, textFirst=false}: ArticleProps) => {
  return (
    <article data-text-first={textFirst} className="flex gap-32 data-[text-first=true]:flex-row-reverse">
      <Image src={imageData} alt={alt} width={250} height={250}/>

      <div>
        <h2 className="text-4xl mb-7">{title}</h2>
        <p className="text-3xl">{content}</p>
      </div>
    </article>
  )
}