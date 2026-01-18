import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

export default function GalleryCarousel() {

    const IMAGES_HIGH_RES = [
        { URL: '/images_high_res/diamondhead.jpeg', ALT: 'Diamond Head', CAP: 'LĒʻAHI CRATER' },
        { URL: '/images_high_res/landscape.jpeg', ALT: 'Landscape', CAP: 'JONSRUD VIEWPOINT' },
        { URL: '/images_high_res/lighthouse.jpeg', ALT: 'Lighthouse', CAP: 'LĒʻAHI LIGHTHOUSE' },
        { URL: '/images_high_res/mountain.jpeg', ALT: 'Mountain', CAP: 'GOVERNMENT CAMP' },
        { URL: '/images_high_res/palmtree.jpeg', ALT: 'Palm Tree', CAP: 'WAIKĪKĪ BEACH' },

    ]

    const IMAGES_MED_RES = [
        { URL: '/images_med_res/diamondhead_med.jpeg', ALT: 'Diamond Head', CAP: 'LĒʻAHI CRATER' },
        { URL: '/images_med_res/landscape_med.jpeg', ALT: 'Landscape', CAP: 'JONSRUD VIEWPOINT' },
        { URL: '/images_med_res/lighthouse_med.jpeg', ALT: 'Lighthouse', CAP: 'LĒʻAHI LIGHTHOUSE' },
        { URL: '/images_med_res/mountain_med.jpeg', ALT: 'Mountain', CAP: 'GOVERNMENT CAMP' },
        { URL: '/images_med_res/palmtree_med.jpeg', ALT: 'Palm Tree', CAP: 'WAIKĪKĪ BEACH' },

    ]

    const IMAGES_MED_RES_BW = [
        { URL: '/images_med_res_bw/diamondhead_med_bw.jpeg', ALT: 'Diamond Head', CAP: 'LĒʻAHI CRATER' },
        { URL: '/images_med_res_bw/landscape_med_bw.jpeg', ALT: 'Landscape', CAP: 'JONSRUD VIEWPOINT' },
        { URL: '/images_med_res_bw/lighthouse_med_bw.jpeg', ALT: 'Lighthouse', CAP: 'LĒʻAHI LIGHTHOUSE' },
        { URL: '/images_med_res_bw/mountain_med_bw.jpeg', ALT: 'Mountain', CAP: 'GOVERNMENT CAMP' },
        { URL: '/images_med_res_bw/palmtree_med_bw.jpeg', ALT: 'Palm Tree', CAP: 'WAIKĪKĪ BEACH' },

    ]

    return (
        <>
            <Splide
                options={{
                    autoHeight: true,
                    type: 'loop',
                    speed: 1000,
                    autoplay: true,
                    interval: 3000,
                    // // rewind: true,
                    // rewindByDrag: false,
                    drag: false,
                    direction: 'ltr',
                    pauseOnHover: false,
                    perMove: 1,
                    gap: '3rem',
                    focus: 'center',
                    perPage: 3,
                    arrows: false,
                    pagination: false,

                    breakpoints: {
                        1280: {
                            perPage: 2,
                            focus: false,
                        },
                        1024: {
                            perPage: 2,
                            focus: false,
                        },
                        768: {
                            perPage: 1,
                            focus: false,
                        },
                        640: {
                            perPage: 1,
                        },
                    }
                }}
            >
                {IMAGES_MED_RES.map(({ URL, ALT, CAP }, idx) => (

                    <SplideSlide key={idx}>
                        <div className='h-full w-full flex flex-col bg-white/20 backdrop-blur-xl overflow-hidden p-6 rounded-md'>
                            <div className='slide'>
                                <img
                                    src={`${import.meta.env.BASE_URL}${URL}`}
                                    alt={ALT}
                                    decoding='async'
                                    loading='lazy'
                                    fetchPriority='low'
                                    width={1600}
                                    height={900}
                                />
                            </div>
                            <div className='flex justify-start items-end h-20'>
                                <p className='text-4xl text-zinc-800 font-sans'>{CAP}</p>
                            </div>
                        </div>
                    </SplideSlide>

                ))}
            </Splide>

        </>
    );
}

export function VerticalTextCarouselNew() {

    const WORDS = [
        "Software Development",
        "UI/UX Enthusiast",
        "Pixel Perfect",
        "Vibe Coding",
        "React Ecosystem",
        "AI/ML Explorer"
    ]

    return (
        <>
            <Splide
                options={{
                    height: '120px',
                    type: 'loop',
                    speed: 500,
                    autoplay: true,
                    interval: 3000,
                    rewind: false,
                    drag: true,
                    perMove: 1,
                    gap: '3rem',
                    focus: 'center',
                    direction: 'ttb',
                    perPage: 1,
                    arrows: false,
                    pagination: false,
                    start: 0,

                    breakpoints: {
                        2560: {
                            height: '240px'
                        },

                        1280: {
                            height: '240px'
                        },
                        1024: {
                            height: '210px'
                        },
                        768: {
                            height: '180px'
                        },
                        640: {
                            height: '150px' 
                        },
                    }

                
                }}
            >
                {WORDS.map((word, idx) => (

                    <SplideSlide key={idx}>
                        <div className='w-full h-full z-10 flex justify-center items-center xl:justify-end xl:items-end'>
                            <p className='p-8 text-center xl:text-right
                                        

                                         w-full

                                         text-6xl
                                         sm:text-6xl
                                         md:text-7xl
                                         lg:text-7xl
                                         xl:text-7xl
                                         md:landscape:text-8xl
                                         lg:landscape:text-8xl
                                         2xl:landscape:text-9xl
                                         leading-tight
                                         
                                         
                                         
                                         zalando-sans text-amber-300'>{word}</p>
                        </div>
                    </SplideSlide>

                ))}
            </Splide>


        </>
    )
}