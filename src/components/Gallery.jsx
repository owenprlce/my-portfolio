import GalleryCarousel from './Carousel';

export default function GallerySection() {
    return (
        <div className='w-screen h-[40vh] bg-zinc-800'>
            <div className='w-full h-full relative'>
                <div>
                    <div className='w-9/12 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <GalleryCarousel />
                    </div>
                </div>

            </div>
        </div>
    )
}