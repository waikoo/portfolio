type Props = {
  src: string
}

const ReactQuizzicalImage = ({ src }: Props) => {

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`/images/${src}.avif`}
      />
      <source
        type="image/webp"
        srcSet={`/images/${src}.webp`}
      />
      <img
        src={`/images/${src}.png`}
        alt="selected quizzical game state"
        className={`xl:cursor-pointer sm:rounded-[30px] block max-h-[90vh] mx-auto`}
      />
    </picture>
  )
}

export default ReactQuizzicalImage
