import { useState } from "react"

export default function SocialsComponent({ viewMail, show }) {

    return (
        <>
            <div className={`p-4 bg-white/20 shadow-2xl xl:shadow-none xl:bg-zinc-800 rounded-full flex z-10 h-auto w-auto transition-all duration-500 ease-in-out 
                            ${show ? 'translate-y-0 translate-x-0 xl:translate-x-0' : 'translate-y-full xl:translate-y-0 xl:-translate-x-full'}`}>
                <div className="flex flex-row xl:flex-col justify-center items-center gap-8 md:gap-x-16 xl:gap-y-12">

                    <Social
                        name={"LinkedIn"}
                        link={"https://www.linkedin.com/in/owenprlce/"}
                        svg={<svg className="size-9 md:size-11 lg:size-12 xl:size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>}>
                    </Social>

                    <Social
                        name={"GitHub"}
                        link={"https://github.com/owenprlce?tab=repositories"}
                        svg={<svg className="size-9 md:size-11 lg:size-12 xl:size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>}>
                    </Social>

                    <Social
                        name={"Resume"}
                        link={"resume/experience.pdf"}
                        svg={<svg className="size-9 md:size-11 lg:size-12 xl:size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z"></path></svg>}>
                    </Social>

                    <>
                        <hr className="rotate-0 h-1/3 xl:h-0 w-1/3 border-1 border-amber-300 rounded-2xl hover:text-zinc-400" />
                    </>

                    <>
                        <Social
                            onClick={viewMail}
                            name={"Mail"}
                            svg={<svg className="size-9 md:size-10 lg:size-11 xl:size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>}>
                        </Social>
                    </>
                </div>
            </div>
        </>
    )
}

function Social({ name, link, svg, onClick }) {
    const [hovered, setHovered] = useState(false);


    return (
        <a
            className="w-full p-4"
            onClick={name === "Mail" ? onClick : undefined}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="w-full relative flex flex-row items-center justify-between">
                <div className={`fill-current transition-all ${hovered ? 'text-zinc-400 duration-500 ease-in scale-105' : 'text-amber-300 duration-500 ease-out'}`}>{svg}</div>
            </div>
        </a>
    );
}