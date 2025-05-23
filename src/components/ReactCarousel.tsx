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
  isHome?: boolean
  isFinalAccount?: boolean
  isProductsFilters?: boolean
  isCheckout?: boolean
  isPrototypes?: boolean
}

export default function ReactCarousel({ items, children, handleClick, index, isQuizzical, cardBgColor, isCompetitiveAnalysis, isAdminInterface, isHome, isFinalAccount, isProductsFilters, isCheckout, isPrototypes }: Props) {
  const quizzicalStyles = isQuizzical ? "flex w-[92%] mx-auto border-[#E1CA02]" : ""
  const thriftstudioStyles = isCompetitiveAnalysis || isAdminInterface || isHome || isFinalAccount || isProductsFilters || isCheckout || isPrototypes ? "flex border-[#D2D62E]" : ""
  const competitiveAnalysisStyles = isAdminInterface ? "flex w-fit mt-[30px] sm:mt-[40px]" : ""
  const isHomeStyles = isHome ? "text-[12px] sm:text-[14px] sm:h-[50px] xl:text-[16px] sm:w-[440px] xl:w-[91%] justify-between" : "text-[12px] gap-[8px] sm:justify-between "
  const isFinalAccountStyles = isFinalAccount ? "!text-[12px] sm:!text-[14px] xl:!text-[16px] !gap-0 sm:w-[440px] xl:w-[425px] justify-between" : ""
  const productsFiltersStyles = isProductsFilters ? "!text-[12px] sm:!text-[14px] justify-between w-[340px] sm:w-[440px] w-full xl:w-[515px]" : ""
  const checkoutStyles = isCheckout ? "!text-[12px] sm:!text-[14px] sm:w-[304px] justify-between w-[190px] sm:w-[320px]" : ""
  const prototypeStyles = isPrototypes ? "sm:w-[350px] xl:w-[425px]" : ""

  return (
    <>
      <ul
        className={`mx-auto font-['Jost'] flex-row ${isHomeStyles} ${isFinalAccountStyles} sm:text-[14px] xl:text-[16px] font-medium overflow-scroll items-center border-[2px] sm:border-[3px] rounded-full p-[2px] h-max-content uppercase scrollbar-0 tracking-wide ${competitiveAnalysisStyles} ${quizzicalStyles} ${thriftstudioStyles} ${productsFiltersStyles} ${checkoutStyles} ${prototypeStyles}`}
        style={{ scrollbarWidth: 'none' }}
      >
        {
          items.map(({ name }, i) => {
            return (
              <li
                className={`cursor-pointer state whitespace-nowrap ${isQuizzical ? 'px-4' : ''} ${isAdminInterface ? 'sm:h-[35px] px-4' : ''} ${isCompetitiveAnalysis ? 'sm:h-[35px] px-4' : ''} ${isHome ? 'h-[35px] sm:w-[125px] sm:h-[40px]' : 'sm:h-[27px] h-[35px] '} ${isFinalAccount ? 'sm:w-[125px] sm:h-[40px]' : ""} ${isProductsFilters ? 'h-[35px] sm:h-[40px] sm:w-[135px]' : ''} ${isCheckout ? "h-[35px] w-[100px] sm:w-[135px] sm:h-[40px]" : ""} ${isPrototypes ? 'sm:h-[35px] px-6' : ''} xl:h-[41px] grid place-items-center rounded-full`}
                key={`quizzical-state-carousel-${i}`}
                data-img={`${items[i].imgName}`}
                style={{
                  backgroundColor: index == i ? items[i].color : '',
                  color: index === i ? cardBgColor : '#001649',
                  fontWeight: '600',
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
