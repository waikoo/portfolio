import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactCarousel from "./ReactCarousel.tsx";
import ReactCarouselImage from "./ReactCarouselImage.tsx";
import ReactIconX from "./ReactIconX.tsx";
import { Lightbox } from "react-modal-image";

interface Props {
  showByDefault: number
  items: { name: string, imgName: string, color: string }[]
  isQuizzical?: boolean
  border: string
  cardBgColor: string
  isCompetitiveAnalysis?: boolean
}

export default function DynamicImgSrc({ showByDefault, items, isQuizzical, border, cardBgColor, isCompetitiveAnalysis }: Props) {
  const [index, setIndex] = useState(showByDefault)
  const [selectedImg, setSelectedImg] = useState(
    items[index].imgName
  )
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null)

  const competitiveAnalysisStyles = isCompetitiveAnalysis ? "mt-[15px]" : ""
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

  return (
    <>
      <ReactCarousel items={items} handleClick={handleClick} index={index} isQuizzical={isQuizzical} border={border} cardBgColor={cardBgColor}>
        <ReactCarouselImage selectedImg={selectedImg} setShowModal={setShowModal} className={competitiveAnalysisStyles} />
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

