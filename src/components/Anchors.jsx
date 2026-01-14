import { getLenis } from "./SmoothScroll";

export default function Anchors( { one, two, three, four }) {
  const handleClick = (e, target) => {
    e.preventDefault();

    const lenis = getLenis();
    if (!lenis) return;

    lenis.scrollTo(target, {
      offset: -window.innerHeight * 0.1,
    });

    window.history.pushState(null, "", target);
  };

  return (
    <div className="fixed z-20 w-screen h-[10vh]">
      <div className="w-full h-full flex justify-end items-center gap-x-8 text-amber-300 p-4 pr-16 zalando-sans">
        <a className={`w-[60px] text-center ${one ? 'ease-in duration-300 opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`} href="#home" onClick={(e) => handleClick(e, "#home")}>Home</a>
        <a className={`w-[60px] text-center ${two ? 'ease-in duration-300 opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`} href="#projects" onClick={(e) => handleClick(e, "#projects")}>Projects</a>
        <a className={`w-[60px] text-center ${three ? 'ease-in duration-300 opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`} href="#gallery" onClick={(e) => handleClick(e, "#gallery")}>Gallery</a>
        <a className={`w-[60px] text-center ${four ? 'ease-in duration-300 opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`} href="#skills" onClick={(e) => handleClick(e, "#skills")}>Skills</a>
      </div>
    </div>
  );
}
