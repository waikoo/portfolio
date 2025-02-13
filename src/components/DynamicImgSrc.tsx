import React, { useCallback, useMemo, useRef, useState } from "react";
import { Lightbox } from "react-modal-image";

import ReactCarousel from "./ReactCarousel.tsx";
import ReactCarouselImage from "./ReactCarouselImage.tsx";
import WithMagnifyingGlass from "./WithMagnifyingGlass.tsx";

interface Props {
  showByDefault: number
  items: { name: string, imgName: string, color: string }[]
  isQuizzical?: boolean
  cardBgColor: string
  isCompetitiveAnalysis?: boolean
  isAdminInterface?: boolean
}

export default function DynamicImgSrc({ showByDefault, items, isQuizzical, cardBgColor, isCompetitiveAnalysis, isAdminInterface }: Props) {
  const [index, setIndex] = useState(showByDefault)
  const [selectedImg, setSelectedImg] = useState(
    items[index].imgName
  )
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null)

  const competitiveAnalysisStyles = isCompetitiveAnalysis ? "mt-[15px]" : ""
  const adminInterfaceStyles = isAdminInterface ? "mt-[10px] sm:mt-[15px]" : ""
  const memoizedClickHandler = useMemo(() => (e: React.MouseEvent, i: number) => {
    const target = e.target as HTMLLIElement;
    setIndex(i);

    if (target.dataset.img) {
      setSelectedImg(target.dataset.img);
    }
  }, []);

  const handleClick = useCallback(memoizedClickHandler, []);

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      setShowModal(false)
    }
  }

  const altText = isQuizzical ? 'final design of the app quizzical' : 'competitive analysis of the thriftstudio app'
  return (
    <>
      <ReactCarousel items={items} handleClick={handleClick} index={index} isQuizzical={isQuizzical} cardBgColor={cardBgColor} isCompetitiveAnalysis={isCompetitiveAnalysis} isAdminInterface={isAdminInterface}>
        <WithMagnifyingGlass invert={true}>
          <ReactCarouselImage selectedImg={selectedImg} setShowModal={setShowModal} className={`${adminInterfaceStyles} ${competitiveAnalysisStyles}`} alt={altText} isCompetitiveAnalysis={isCompetitiveAnalysis} />
        </WithMagnifyingGlass>
      </ReactCarousel>

      {showModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs h-screen grid place-items-center z-9999999 cursor-pointer" onClick={(e) => closeModal(e)} ref={modalRef}>
          <Lightbox medium={`/images/${selectedImg}.avif`}
            large={`/images/${selectedImg}.png`}
            onClose={() => setShowModal(false)}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
      )
      }
    </>
  )
}

