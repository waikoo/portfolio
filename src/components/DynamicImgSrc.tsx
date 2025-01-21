import React, { useCallback, useMemo, useState } from "react";
import ReactCarousel from "./ReactCarousel.tsx";
import ReactCarouselImage from "./ReactCarouselImage.tsx";
import quizzicalStates from "../projects/evelinQuizzicalData.js";
import ReactModal from "./ReactModal.tsx";

interface Props {
  showByDefault: number
}

export default function DynamicImgSrc({ showByDefault }: Props) {
  const [index, setIndex] = useState(showByDefault)
  const [selectedImg, setSelectedImg] = useState(
    quizzicalStates[index].imgName
  )
  const [showModal, setShowModal] = useState(false)

  const memoizedClickHandler = useMemo(() => (e: React.MouseEvent, i: number) => {
    const target = e.target as HTMLLIElement;
    setIndex(i);

    if (target.dataset.img) {
      setSelectedImg(target.dataset.img);
    }
  }, []);

  const handleClick = useCallback(memoizedClickHandler, []);
  return (
    <>
      <ReactCarousel items={quizzicalStates} handleClick={handleClick} index={index} >
        <ReactCarouselImage selectedImg={selectedImg} setShowModal={setShowModal} />
      </ReactCarousel>

      {showModal && (
        <ReactModal setShowModal={setShowModal} showModal={showModal}>
          <ReactCarouselImage selectedImg={selectedImg} setShowModal={setShowModal} className="h-screen content-center" />
        </ReactModal>
      )
      }
    </>
  )
}

