interface Props {
  selectedImg: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  alt: string
  imgClassName?: string
  isCompetitiveAnalysis?: boolean
}

export default function ReactCarouselImage({ selectedImg, setShowModal, className, alt, imgClassName, isCompetitiveAnalysis }: Props) {
  const competitiveAnalysisStyles = isCompetitiveAnalysis ? "rounded-[16px] sm:rounded-[18px] xl:rounded-[30px]" : ""

  function onClickHandler() {
    setShowModal(true)
  }

  return (
    <div className={`${className} `}>
      <picture>
        <source
          type="image/avif"
          srcSet={`/images/${selectedImg}.avif`}
        />
        <source
          type="image/webp"
          srcSet={`/images/${selectedImg}.webp`}
        />
        <img
          src={`/images/${selectedImg}.png`}
          alt={alt}
          className={`${imgClassName} quizzical-image xl:cursor-pointer ${competitiveAnalysisStyles}`}
          onClick={onClickHandler}
        />
      </picture>
    </div>
  )
}
