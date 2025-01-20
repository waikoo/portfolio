import { useState } from "react"

interface Props {
  items: { name: string, imgName: string, color: string }[]
  showByDefault: number
}

export default function ReactCarousel({ items, showByDefault }: Props) {
  const [index, setIndex] = useState(showByDefault)
  const [selectedImg, setSelectedImg] = useState(
    items[index].imgName
  )

  const handleClick = (e: React.MouseEvent, i: number) => {
    const target = e.target as HTMLLIElement
    setIndex(i)
    if (target.dataset.img) {
      setSelectedImg(target.dataset.img)
    }
  }
  return (
    <>
      <ul
        className="flex flex-row gap-[8px] sm:justify-between pr-2 font-semibold text-[10px] overflow-scroll items-center border-[2px] sm:border-[3px] rounded-full p-1 border-[#E1CA02] h-max-content uppercase"
      >
        {
          items.map(({ name }, i) => (
            <li
              key={`quizzical-state-carousel-${i}`}
              className="cursor-pointer state whitespace-nowrap h-[46px] sm:h-[52px] xl:h-auto grid place-items-center rounded-full px-[10px]"
              data-img={`/${items[i].imgName}`}
              data-style={`state-${i}`}
              style={{
                backgroundColor: index == i ? items[i].color : '',
                color: index === i ? 'white' : 'black'
              }}
              onClick={(e) => handleClick(e, i)}
            >
              {name}
            </li>
          ))
        }
      </ul>

      <picture id="state-picture">
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
          className="quizzical-image rounded-[7px] mt-2 xl:cursor-pointer sm:rounded-[30px]"
        />
      </picture>
    </>
  )
}
