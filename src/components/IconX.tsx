interface Props {
  id: string
}

export default function IconX({ id }: Props) {

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className="absolute top-5 right-5 text-[2rem] z-[1000] cursor-pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0004 15.1829L19.9549 23.1374C20.377 23.5595 20.9495 23.7966 21.5464 23.7966C22.1433 23.7966 22.7158 23.5595 23.1379 23.1374C23.56 22.7153 23.7971 22.1429 23.7971 21.5459C23.7971 20.949 23.56 20.3765 23.1379 19.9544L15.1804 11.9999L23.1364 4.04542C23.3453 3.83642 23.511 3.58832 23.624 3.31529C23.737 3.04226 23.7951 2.74964 23.7951 2.45414C23.795 2.15864 23.7367 1.86605 23.6236 1.59307C23.5104 1.32009 23.3446 1.07207 23.1356 0.863171C22.9266 0.654271 22.6785 0.488582 22.4055 0.375563C22.1325 0.262545 21.8398 0.204411 21.5443 0.204481C21.2488 0.20455 20.9563 0.262822 20.6833 0.375969C20.4103 0.489116 20.1623 0.654923 19.9534 0.863921L12.0004 8.81842L4.04588 0.863921C3.83843 0.648928 3.59023 0.477403 3.31578 0.359355C3.04133 0.241307 2.74611 0.1791 2.44736 0.176364C2.14861 0.173628 1.85231 0.230417 1.57574 0.343419C1.29917 0.456421 1.04787 0.623371 0.836518 0.834529C0.62516 1.04569 0.457973 1.29683 0.344711 1.57329C0.231448 1.84975 0.174379 2.146 0.176834 2.44475C0.179288 2.74351 0.241216 3.03878 0.359005 3.31334C0.476794 3.58791 0.648085 3.83626 0.862883 4.04392L8.82038 11.9999L0.864383 19.9559C0.649585 20.1636 0.478295 20.4119 0.360506 20.6865C0.242717 20.9611 0.180788 21.2563 0.178334 21.5551C0.175879 21.8538 0.232948 22.1501 0.346211 22.4266C0.459473 22.703 0.62666 22.9542 0.838017 23.1653C1.04937 23.3765 1.30067 23.5434 1.57724 23.6564C1.85381 23.7694 2.15011 23.8262 2.44886 23.8235C2.74761 23.8207 3.04283 23.7585 3.31728 23.6405C3.59173 23.5224 3.83993 23.3509 4.04738 23.1359L12.0004 15.1829Z"
        fill="black"></path>
    </svg>
  )
}
