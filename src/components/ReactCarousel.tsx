interface Props {
  items: { name: string, imgName: string, color: string }[]
  children: React.ReactNode
  handleClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, i: number) => void
  index: number
}

export default function ReactCarousel({ items, children, handleClick, index }: Props) {

  return (
    <>
      <ul
        className="flex flex-row gap-[8px] sm:justify-between pr-2 font-semibold text-[10px] overflow-scroll items-center border-[2px] sm:border-[3px] rounded-full p-1 border-[#E1CA02] h-max-content uppercase scrollbar-0"
        style={{ scrollbarWidth: 'none' }}
      >
        {
          items.map(({ name }, i) => (
            <li
              key={`quizzical-state-carousel-${i}`}
              className="cursor-pointer state whitespace-nowrap h-[46px] sm:h-[52px] xl:h-auto grid place-items-center rounded-full px-[10px]"
              data-img={`${items[i].imgName}`}
              style={{
                backgroundColor: index == i ? items[i].color : '',
                color: index === i ? '#FFF3D4' : '#001649'
              }}
              onClick={(e) => handleClick(e, i)}
            >
              {name}
            </li>
          ))
        }
      </ul>

      {children}
    </>
  )
}
