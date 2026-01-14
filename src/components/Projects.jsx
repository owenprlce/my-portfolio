import { useState, useEffect } from "react"

export default function ProjectSection() {
    return (
        <div className='w-screen h-[40vh] bg-zinc-800'>
            <div className='w-full h-full relative'>
                <div>
                    <div className='w-9/12 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Projects />
                    </div>
                </div>

            </div>
        </div>
    )
}

export function Projects() {

    const [progressBarOne, setProgressBarOne] = useState(false);
    const [projectOneInfo, setProjectOneInfo] = useState(false);
    const [projectOneTextState, setProjectOneTextState] = useState(false);
    const [textTransistionStateOne, setTextTransitionStateOne] = useState(false);

    const [progressBarTwo, setProgressBarTwo] = useState(false);
    const [projectTwoInfo, setProjectTwoInfo] = useState(false);
    const [projectTwoTextState, setProjectTwoTextState] = useState(false);
    const [textTransistionStateTwo, setTextTransitionStateTwo] = useState(false);


    // 1st Progress Bar (Timer)
    useEffect(() => {
        if (!progressBarOne) {
            setProjectOneInfo(false);
            setProjectOneTextState(false);
            setTextTransitionStateOne(false);
            return;
        }

        const projOne = setInterval(() => {
            setProjectOneInfo(true);
            setProjectOneTextState(true);
        }, 4000)

        return () => {
            clearInterval(projOne);
        }

    }, [progressBarOne])

    // Project One Text Transition
    useEffect(() => {
        if (!projectOneTextState) { return; }

        const projOneText = setInterval(() => {
            setTextTransitionStateOne(true);
        }, 400)

        return () => {
            clearInterval(projOneText);
        }


    }, [projectOneTextState])

    // 2nd Progress Bar (Timer)
    useEffect(() => {
        if (!progressBarTwo) {
            setProjectTwoInfo(false);
            setProjectTwoTextState(false);
            setTextTransitionStateTwo(false);
            return;
        }

        const projTwo = setInterval(() => {
            setProjectTwoInfo(true);
            setProjectTwoTextState(true);
        }, 4000)

        return () => {
            clearInterval(projTwo);
        }

    }, [progressBarTwo])

    // Project Two Text Transition
    useEffect(() => {
        if (!projectTwoTextState) { return; }

        const projTwoText = setInterval(() => {
            setTextTransitionStateTwo(true);
        }, 400)

        return () => {
            clearInterval(projTwoText);
        }


    }, [projectTwoTextState])


    return (
        <>
            <div className="w-12/12 h-11/12 flex flex-row justify-center items-center gap-x-20">
                <div
                    className="w-1/2 h-full cursor-pointer"
                    onClick={() => window.open(
                        "https://github.com/TooshieTom/Billingsley-Eviction-Risk-Dashboard",
                        "_blank"
                    )}>
                    <div
                        onMouseEnter={() => setProgressBarOne(true)}
                        onMouseLeave={() => setProgressBarOne(false)}
                        className="w-full h-full hover-3d transform-gpu will-change-transform">

                        <ProjectType
                            image={'https://www.billingsleyco.com/wp-content/uploads/2022/02/BCO-Logo-White.svg'}
                            background={'bg-[#101820]'}
                            hoverBackground={'bg-white'}
                            progressBar={'h-[6px] bg-white'}
                            progressBarState={progressBarOne}
                            projectInfo={projectOneInfo}
                            title={'Eviction Risk Insights Dashboard'}
                            description={'Internal web application with predictive modeling to estimate eviction risk and simulate screening policy changes'}
                            bulletPoints={[
                                'Developed React-based front-end architecture with client-side routing',
                                'Implemented secure user authentication with hashing and salting',
                                'Designed intuitive property-to-resident drill-down workflows',
                                'Enabled data-driven dashboards and screening scenario simulations',
                            ]}
                            hoverText={'text-[#101820]'}
                            textTransitionState={textTransistionStateOne}/>



                        {/* 3D Effect */}
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
                <div
                    className="w-1/2 h-full cursor-pointer"
                    onClick={() => window.open(
                        "https://owenprlce.github.io/textual-tennis/",
                        "_blank"
                    )}
                >
                    <div
                        onMouseEnter={() => setProgressBarTwo(true)}
                        onMouseLeave={() => setProgressBarTwo(false)}
                        className="w-full h-full hover-3d transform-gpu will-change-transform">

                        <ProjectType
                            name={'Textual Tennis'}
                            background={'bg-zinc-300'}
                            hoverBackground={'bg-zinc-700'}
                            font={'text-9xl text-zinc-700 pacifico-regular'}
                            progressBar={'h-[6px] bg-zinc-700'}
                            progressBarState={progressBarTwo}
                            projectInfo={projectTwoInfo}
                            hoverText={'text-zinc-300'}
                            title={'Textual Tennis'}
                            description={'Minimalist, text-based tennis game that simulates real match rules through an interactive web interface'}
                            bulletPoints={[
                                'Built a React-based text interface to simulate real tennis scoring and match flow',
                                'Implemented persistent player data and match history with the LocalStorage API',
                                'Developed customizable key bindings for personalized gameplay controls',
                                'Designed a minimal UI focused on clarity, usability, and engaging interaction',
                            ]}
                            textTransitionState={textTransistionStateTwo}
                        />

                        {/* 3D Effect */}
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
        </>
    )
}

function ProjectType({
    image,              alt,
    name,               background,
    hoverBackground,    hoverText,
    font,               title,
    description,        bulletPoints,
    progressBar,        progressBarState,
    projectInfo,        textTransitionState
}) {
    return (
        <div className="h-full border-2 border-amber-300 rounded-2xl">

            <div
                className={`h-full bg-cover bg-center ${background}`}>
                <div className="w-full h-full relative flex justify-center items-center">
                    <div className="w-full h-full">{
                        name ? (

                            <div className="w-full h-full flex justify-center items-center">
                                <p className={`${font}`}>{name}</p>
                            </div>
                        ) : (

                            <img
                                className="w-full h-full p-32"
                                src={image}
                                alt={alt}
                            />
                        )}
                    </div>

                    <div className={`absolute right-0 bottom-0 w-full h-full ${hoverBackground} z-10 transition-all flex justify-center items-center
                                    ${projectInfo ? 'translate-y-0 duration-500 ease-out' : 'translate-y-full duration-300 ease-in'}`}>
                        <div className={`w-12/12 max-w-4xl rounded-xl p-16 flex flex-col gap-4 ${hoverText} font-sans transition-all
                                        ${textTransitionState ? 'duration-500 translate-y-0 ease-out opacity-100' : 'duration-300 -translate-y-full ease-in opacity-0'}`}>
                            <p className="text-4xl font-semibold">
                                {title}
                            </p>

                            <p className="text-xl leading-relaxed italic">
                                {description}
                            </p>

                            <ul className="list-disc list-inside text-xl space-y-2">
                                {bulletPoints.map((point, idx) => (
                                    <li className="pl-6 -indent-6 leading-snug" key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    {/* Progress Bar */}
                    <div className={`absolute bottom-0 w-full ${progressBar} transition-all ease-in-out ${progressBarState ? 'translate-x-0 duration-[4s]' : 'translate-x-full ease-out duration-200'}`}>

                    </div>
                </div>
            </div>
        </div>

    )
}