import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';

interface Props {
  items: { name: string, imgName: string, color: string }[]
  children: React.ReactNode
  handleClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, i: number) => void
  index: number
  isQuizzical?: boolean
  border: string
  cardBgColor: string
}

export default function ReactCarousel({ items, children, handleClick, index, isQuizzical, border, cardBgColor }: Props) {
  const quizzicalStyles = isQuizzical ? " w-[92%] mx-auto" : ""

  return (
    <>
      <ul
        className={`font-['Jost'] flex flex-row gap-[8px] sm:justify-between text-[12px] sm:text-[14px] xl:text-[16px] font-medium overflow-scroll items-center border-[2px] sm:border-[3px] rounded-full p-[2px] h-max-content uppercase scrollbar-0 tracking-wide ${quizzicalStyles}`}
        style={{ scrollbarWidth: 'none', borderColor: border }}
      >
        {
          items.map(({ name }, i) => {
            return (
              <li
                key={`quizzical-state-carousel-${i}`}
                className={`cursor-pointer state whitespace-nowrap h-[46px] sm:h-[27px] xl:h-[41px] grid place-items-center rounded-full px-[16px]`}
                data-img={`${items[i].imgName}`}
                style={{
                  backgroundColor: index == i ? items[i].color : '',
                  color: index === i ? cardBgColor : '#001649',
                  fontWeight: index === i ? '600' : '500',
                }}
                onClick={(e) => handleClick(e, i)}
              >
                {name}
              </li>
            )
          })
        }
      </ul>

      {children}
    </>
  )
}
