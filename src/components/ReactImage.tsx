
interface Props {
  imgName: string
  imgAlt: string
  className?: string
}

export const ReactImage = ({ imgName, imgAlt, className }: Props) => {

  return (
    <picture>
      <source srcSet={`/images/${imgName}.avif`} type="image/avif" />
      <source srcSet={`/images/${imgName}.webp`} type="image/webp" />
      <img
        src={`/images/${imgName}.png`}
        alt={imgAlt}
        className={`${className}`}
      />
    </picture>
  )
}

export default ReactImage
