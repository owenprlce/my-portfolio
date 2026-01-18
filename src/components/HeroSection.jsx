import { useState, useEffect } from "react"
import { VerticalTextCarouselNew } from "./Carousel"

export default function HeroSectionNew() {

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
                <div className={`w-screen h-screen 
                
                                flex justify-center items-center

                                flex-col
                                md:flex-col md:justify-center
                                xl:flex-row xl:justify-start

                                landscape:h-auto 
                                xl:landscape:h-screen
                                
                                p-6

                                overflow-hidden
                
                                transform-gpu will-change-transform
                                
                                transition-all
                                
                                ${scale ? 'duration-700 scale-105 ease-in-out' : 
                                            'duration-300 scale-100 ease-in'}`}>

                        <PortraitNew initTransistion={transition} initOpacity={imageOpacity} />
                        <DescriptionNew initTransition={transition} carousel={carousel} />
                </div>


        </>
    )
}

// Flip X
function PortraitNew({ initTransistion, initOpacity }) {
    return (
        <div className='flex justify-center items-end xl:justify-end xl:items-center

                        w-full h-auto md:w-full xl:w-1/2 xl:h-9/12 2xl:h-10/12            
                        
                        overflow-hidden
                        
                        transform-gpu will-change-transform'>
            
            <div className={`flex justify-center items-end xl:items-center xl:justify-start 
                            
                            w-full h-auto md:w-9/12 xl:h-8/12 xl:w-10/12 
                            
                            border-2 border-amber-300 border-b-transparent xl:border-b-amber-300 xl:rounded-t-none xl:rounded-tr-none xl:border-r-transparent  
                            
                            -mb-[2px] xl:m-[0px] xl:-mr-[2px] xl:overflow-hidden

                            transition-all
                            
                            ${initTransistion ? 'rounded-tl-[200px] rounded-tr-[200px] md:rounded-tl-[300px] md:rounded-tr-[300px] lg:rounded-tl-[300px] lg:rounded-tr-[300px] xl:rounded-l-[260px] 2xl:rounded-l-[420px] duration-1000 translate-y-0 xl:translate-y-0 xl:translate-x-0 ease-in-out' : 
                            'translate-y-full xl:-translate-y-0 xl:translate-x-full rounded-tr-2xl rounded-tl-2xl'}`}>
                
                <div className={`xl:hover-3d p-8 2xl:p-12
                
                                max-h-full aspect-square

                                flex justify-center items-center
                                
                                rounded-full 
                                
                                transition-opacity
                                
                                ${initOpacity ? 'duration-300 ease-in opacity-100' : 'opacity-0'}`}>
                    
                    <div className={`h-full aspect-square rounded-full outline-2 outline-amber-300`}>
                        
                        <img
                            className="z-20 w-full h-full rounded-full object-cover"
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
function DescriptionNew({ initTransition, carousel }) {
    return (
        <div className={`flex justify-center items-start xl:justify-start xl:items-center

                        w-full h-auto md:h-3/12 md:w-full xl:w-1/2 xl:h-9/12 2xl:h-10/12

                        overflow-hidden
                        
                        transform-gpu will-change-transform`}>
            
            <div className={`flex justify-center items-center lg:items-center xl:items-end
           
                            w-full h-auto md:h-full md:w-9/12 xl:h-8/12 xl:w-10/12
            
                            border-2 border-amber-300 rounded-b-2xl xl:rounded-bl-none border-t-transparent xl:border-t-amber-300 xl:rounded-r-2xl xl:border-l-transparent 
                            
                            -mt-[2px] xl:m-0  xl:-ml-[2px] overflow-y-hidden xl:overflow-y-hidden
                            
                            ${initTransition ? 'duration-1000 translate-y-0 xl:translate-y-0  xl:translate-x-0 ease-in-out' : 
                            '-translate-y-full xl:translate-y-0 xl:-translate-x-full'}`}>
                
                <div className={`flex items-center justify-center xl:justify-end xl:items-end

                                w-full h-auto

                                pointer-events-none 
                                
                                transition-transform 
                                
                                overflow-x-hidden
                                
                                ${carousel ? 'ease-in-out duration-500 translate-y-0 translate-x-0 xl:translate-y-0' : 
                                'translate-y-full xl:translate-x-0 xl:translate-y-full'}`}>
                    
                    <VerticalTextCarouselNew />
                </div>
            </div>
        </div>
    )
}