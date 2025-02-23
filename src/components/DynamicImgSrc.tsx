import React, { useCallback, useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import ReactCarousel from "./ReactCarousel.tsx";
import ReactCarouselImage from "./ReactCarouselImage.tsx";
import WithMagnifyingGlass from "./WithMagnifyingGlass.tsx";

interface Props {
  showByDefault: number
  items: { name: string, imgName: string, color: string, alt: string }[]
  isQuizzical?: boolean
  cardBgColor: string
  isCompetitiveAnalysis?: boolean
  isAdminInterface?: boolean
  isHome?: boolean
  isFinalAccount?: boolean
}

export default function DynamicImgSrc({ showByDefault, items, isQuizzical, cardBgColor, isCompetitiveAnalysis, isAdminInterface, isHome, isFinalAccount }: Props) {
  const [index, setIndex] = useState(showByDefault)
  const [selectedImg, setSelectedImg] = useState(
    items[index].imgName
  )
  const [open, setOpen] = useState(false);

  const competitiveAnalysisStyles = isCompetitiveAnalysis ? "mt-[15px]" : ""
  const adminInterfaceStyles = isAdminInterface ? "mt-[10px] sm:mt-[15px]" : ""
  const homeStyles = isHome ? "mt-[15px]" : ""
  const isFinalAccountStyles = isFinalAccount ? "mt-[15px]" : ""

  const memoizedClickHandler = useMemo(() => (e: React.MouseEvent, i: number) => {
    const target = e.target as HTMLLIElement;
    setIndex(i);

    if (target.dataset.img) {
      setSelectedImg(target.dataset.img);
    }
  }, []);

  const handleClick = useCallback(memoizedClickHandler, []);

  const altText = isQuizzical ? 'final design of the app quizzical' : isCompetitiveAnalysis ? 'competitive analysis of the thriftstudio app' : isHome ? 'home page components for men, women and kids sections' : "account subpage"
  return (
    <>
      <ReactCarousel items={items} handleClick={handleClick} index={index} isQuizzical={isQuizzical} cardBgColor={cardBgColor} isCompetitiveAnalysis={isCompetitiveAnalysis} isAdminInterface={isAdminInterface} isHome={isHome} isFinalAccount={isFinalAccount}>
        <WithMagnifyingGlass invert={true} isFinalAccount={isFinalAccount}>
          <ReactCarouselImage selectedImg={selectedImg} setShowModal={setOpen} className={`${adminInterfaceStyles} ${competitiveAnalysisStyles} ${homeStyles} ${isFinalAccountStyles}`} alt={altText} isCompetitiveAnalysis={isCompetitiveAnalysis} />
        </WithMagnifyingGlass>
      </ReactCarousel>

      {open && (
        <Lightbox
          open={open}
          plugins={[Zoom]}
          close={() => setOpen(false)}
          slides={[
            { src: `/images/${selectedImg}.avif`, alt: items[index].alt },
          ]}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
          className="z-[99999999999999]"
        />
      )}
    </>
  )
}

