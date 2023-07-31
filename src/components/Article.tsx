import Image, { StaticImageData } from 'next/image'

interface ArticleProps {
  imageData: StaticImageData
  alt?: string
  title: string
  content: string
  textFirst?: boolean
}

export const Article = ({ imageData, alt = "", title, content, textFirst = false }: ArticleProps) => {
  return (

    <div className='lg:min-h-[40vh] max-h-[700px] flex justify-center items-center max-w-full'>
      <article
        className={`max-w-full flex ${textFirst ? 'flex-row-reverse' : ''} w-full m-auto max-w-full flex-wrap md:flex-nowrap justify-between md:gap-16`}
      >
        <Image className="max-w-full w-200 md:w-50" src={imageData} alt={alt} width={200} height={200} />
        <div className="w-full mt-12 max-w-full">
          <h2 className="">{title}</h2>
          <p className="max-w-full">{content}</p>
        </div>
      </article>
    </div>

  )
}
