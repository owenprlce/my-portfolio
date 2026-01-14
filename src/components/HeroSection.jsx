import { useState, useEffect } from "react"
import { VerticalTextCarousel } from "./Carousel"

export default function HeroSection() {

    const [transition, setTransition] = useState(false);
    const [imageOpacity, setImageOpacity] = useState(false);
    const [scaleListener, setScaleListener] = useState(false);
    const [scale, setScale] = useState(false);
    const [carousel, setCarousel] = useState(false);
    const [lock, setLock] = useState(true);
    
    useEffect(() => {
        const initTransition = setTimeout(() => { setTransition(true); }, 400)
        const imageOpacity = setTimeout(() => { setImageOpacity(true); }, 800)
        const initScale = setTimeout(() => { setScaleListener(true); }, 1100)
        const initCarousel = setTimeout(() => { setCarousel(true); }, 3500)
        const lock = setTimeout(() => { setLock(false); }, 4000)
        
        return () => { clearTimeout(initTransition); clearTimeout(imageOpacity); clearInterval(initScale); clearTimeout(initCarousel); clearTimeout(lock) }
    }, [])

    useEffect(() => {
        if(!scaleListener) { return; }

        const scaleUp = setTimeout(() => { setScale(true);}, 100)
        const scaleDown = setTimeout(() => { setScale(false); }, 800)

        return () => { clearTimeout(scaleUp); clearTimeout(scaleDown); }

    }, [scaleListener])

    return (
        <>
            <div className={`${lock ? 'fixed' : ''} z-0 w-screen h-screen overflow-hidden bg-zinc-800`}>
                <div className={`w-full h-full transform-gpu will-change-transform flex justify-center items-center transition-all
                                ${scale ? 'duration-700 scale-105 ease-in-out' : 'duration-300 scale-100 ease-in'}`}>
                    <Portrait initTransistion={transition} initOpacity={imageOpacity} />
                    <Description initTransition={transition} carousel={carousel} />
                </div>
            </div>

        </>
    )
}

// Flip X
function Portrait({ initTransistion, initOpacity }) {
    return (
        <div className='w-1/2 h-8/12 flex justify-end items-center transform-gpu will-change-transform overflow-x-hidden'>
            
            <div className={`flex justify-start items-center w-9/12 h-9/12 border-2 border-amber-300 border-r-transparent -mr-[2px] transition-all
                            ${initTransistion ? 'rounded-l-[320px] w-1/2 duration-1000 translate-x-0 ease-in-out' : 'w-1/2 translate-x-full rounded-l-2xl'}`}>
                <div className={`hover-3d p-12 h-full aspect-square rounded-full transition-opacity
                                ${initOpacity ? 'duration-300 ease-in opacity-100' : 'opacity-0'}`}>
                    <div className={`w-full h-full rounded-full outline-2 outline-amber-300 flex justify-start items-center`}>
                        <img
                            className="p-2 w-full h-full rounded-full object-cover"
                            src={`${import.meta.env.BASE_URL}/headshot/me.jpeg`}
                            alt={'Portrait'}
                            loading='lazy'
                        />
                    </div>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

// Flip X
function Description({ initTransition, carousel }) {
    return (
        <div className={`w-1/2 h-8/12 flex justify-start items-center transition-all transform-gpu will-change-transform overflow-x-hidden`}>
            <div className={`w-9/12 h-9/12 border-2 border-amber-300 rounded-r-2xl border-l-transparent flex justify-center items-center -ml-[2px] overflow-y-hidden
                            ${initTransition ? 'w-1/2 duration-1000 translate-x-0 ease-in-out' : 'w-1/2 -translate-x-full'}`}>
                <div className={`w-full h-full flex flex-col justify-end items-center p-16 text-amber-300 pointer-events-none transition-transform
                                ${carousel ? 'ease-in-out duration-500 translate-y-0' : ' translate-y-full'}`}>
                    <VerticalTextCarousel />
                </div>
            </div>
        </div>
    )
}