import GalleryCarousel from './Carousel';

export default function GallerySection() {
    return (
        <div className='w-screen min-h-[10vh] relative flex justify-center items-center'>
            <div className='w-9/12 h-full'>
                <GalleryCarousel />
            </div>
        </div>
    )
}