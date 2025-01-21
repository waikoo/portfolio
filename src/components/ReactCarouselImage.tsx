interface Props {
  selectedImg: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

export default function ReactCarouselImage({ selectedImg, setShowModal, className }: Props) {

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
          alt="selected quizzical game state"
          className={`quizzical-image rounded-[7px] xl:cursor-pointer sm:rounded-[30px]`}
          onClick={onClickHandler}
        />
      </picture>
    </div>
  )
}
