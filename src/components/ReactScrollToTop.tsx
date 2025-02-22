import { useEffect, useState } from "react"

export default function ReactScrollToTop() {
  const [icon, setIcon] = useState('hidden')

  const scrollToTop = () => {
    if (scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIcon("");
      } else {
        setIcon("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button className={`fixed z-[99] bottom-[20px] right-[20px] bg-black h-[50px] w-[50px] rounded-full cursor-pointer ${icon}`} onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Circle atas"><circle cx="12" cy="12" r="10" style={{ fill: '#000' }} /><path d="M15 14a1 1 0 0 1-.707-.293L12 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 14z" style={{ fill: '#fff' }} /></g></svg>
    </button>
  )
}
