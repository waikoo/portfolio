import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';

interface Props {
  items: { name: string, imgName: string, color: string }[]
  children: React.ReactNode
  handleClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, i: number) => void
  index: number
  isQuizzical?: boolean
  isCompetitiveAnalysis?: boolean
  cardBgColor: string
  isAdminInterface?: boolean
}

export default function ReactCarousel({ items, children, handleClick, index, isQuizzical, cardBgColor, isCompetitiveAnalysis, isAdminInterface }: Props) {
  const quizzicalStyles = isQuizzical ? "flex w-[92%] mx-auto border-[#E1CA02]" : ""
  const thriftstudioStyles = isCompetitiveAnalysis || isAdminInterface ? "flex border-[#D2D62E]" : ""
  const competitiveAnalysisStyles = isAdminInterface ? "flex w-fit mt-[30px] sm:mt-[40px]" : ""

  return (
    <>
      <ul
        className={`mx-auto font-['Jost'] flex-row gap-[8px] sm:justify-between text-[12px] sm:text-[14px] xl:text-[16px] font-medium overflow-scroll items-center border-[2px] sm:border-[3px] rounded-full p-[2px] h-max-content uppercase scrollbar-0 tracking-wide ${competitiveAnalysisStyles} ${quizzicalStyles} ${thriftstudioStyles}`}
        style={{ scrollbarWidth: 'none' }}
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
