import ReactImage from "./ReactImage"
import useMatchMedia from "./useMatchMedia"

type Props = {
  className: string
}

const TAILWIND_SM = 640
const TAILWIND_XL = 1280

export default function DynamoImgSrc({ className }: Props) {
  const matchesSM = useMatchMedia(TAILWIND_SM)
  const matchesXL = useMatchMedia(TAILWIND_XL)

  return (
    <div className={className}>
      <ReactImage src={matchesXL ? 'quizzical-monoton-desktop' : matchesSM ? 'quizzical-monoton-tablet' : 'quizzical-monoton-mobile'} alt="" />
    </div>
  )
}

