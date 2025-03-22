import { useCallback, useMemo, useState } from "react"
import ReactCarousel from "./ReactCarousel"
import ReactArrow from "./ReactArrow"

interface Props {
  showByDefault: number
  items: { name: string, imgName: string, color: string, alt: string }[]
  cardBgColor: string
}

const prototypeLink: { [key: string]: string } = {
  mobile: "https://www.figma.com/proto/rYHpeGA58sDsEux8FwsCpJ/Portfolio-neolor?page-id=1858%3A816&node-id=2926-14928&p=f&viewport=-692%2C-120%2C0.32&t=gFbacvRZNgOfcnSR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2926%3A14928",
  tablet: "https://www.figma.com/proto/rYHpeGA58sDsEux8FwsCpJ/Portfolio-neolor?page-id=2926%3A5872&node-id=3094-15267&p=f&viewport=937%2C217%2C0.12&t=5WzhvPa9iz5Gpvie-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3094%3A15267",
  desktop: "https://www.figma.com/proto/rYHpeGA58sDsEux8FwsCpJ/Portfolio-neolor?page-id=2926%3A5873&node-id=3012-26156&p=f&viewport=462%2C211%2C0.02&t=C5209aZu8k7hnIVy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3012%3A26156",
}

export default function DynamicVideoSrc({ showByDefault, items, cardBgColor }: Props) {
  const [index, setIndex] = useState(showByDefault)
  const [selectedVideo, setSelectedVideo] = useState(
    items[index].imgName
  )
  const viewport = selectedVideo.replace("-prototype", "")
  const memoizedClickHandler = useMemo(() => (e: React.MouseEvent, i: number) => {
    const target = e.target as HTMLLIElement;
    setIndex(i);

    if (target.dataset.img) {
      setSelectedVideo(target.dataset.img);
    }
  }, []);

  const handleClick = useCallback(memoizedClickHandler, []);

  return (
    <div className="flex flex-col">
      <ReactCarousel items={items} handleClick={handleClick} index={index} cardBgColor={cardBgColor} isPrototypes={true}>
        <video key={selectedVideo} autoPlay loop muted className="mx-auto mt-[15px]" onError={(e) => { console.log(e) }}>
          <source src={`/videos/${selectedVideo}.mp4`} type="video/mp4" />
        </video>
      </ReactCarousel>
      <a href={prototypeLink[viewport]} className="flex items-center gap-[2px] text-[#4d3566] font-medium mt-[25px] mx-auto">View Figma Prototype <ReactArrow /> </a>
    </div>
  )
}
