import '@fontsource/jost/500.css';

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
        className="font-['Jost'] flex flex-row gap-[8px] sm:justify-between text-[12px] sm:text-[14px] xl:text-[16px] font-medium overflow-scroll items-center border-[2px] sm:border-[3px] rounded-full p-[2px] border-[#E1CA02] h-max-content uppercase scrollbar-0 tracking-wide w-[92%] mx-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {
          items.map(({ name }, i) => (
            <li
              key={`quizzical-state-carousel-${i}`}
              className="cursor-pointer state whitespace-nowrap h-[46px] sm:h-[27px] xl:h-[41px] grid place-items-center rounded-full px-[10px]"
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
