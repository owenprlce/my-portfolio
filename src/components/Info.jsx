import { useState, useEffect } from "react"

export default function Info() {

    const [showInfo, setShowInfo] = useState(false);
    const [showInfoBool, setShowInfoBool] = useState(false);
    const [visible, setVisible] = useState(true);

    // Interval -> Info Fade Out
    useEffect(() => {
        const infoTimer = setInterval(() => {
            setVisible(false);
        }, 5000)

        return () => {
            clearInterval(infoTimer);
        }
    }, [showInfoBool])

    // Interval -> Info Slide In
    useEffect(() => {
        const infoSliderTimer = setInterval(() => {
            setShowInfoBool(true);
        }, 2700)

        return () => {
            clearInterval(infoSliderTimer);
        }
    }, [])

    return (
        <>
                <div className={`fixed bottom-4 right-4 transform transition-[transform, opacity] ease-in-out 
                                    ${showInfoBool ? 'duration-300 translate-x-0' : 'duration-700 translate-x-full'}
                                    ${visible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="size-96 relative rounded-xl">
                        <div
                            className={`absolute bottom-0 right-0 rounded-xl transition-all duration-500 ease-in-out ${showInfo ? 'bg-zinc-800 shadow-xl border-2 border-amber-300' : 'border-2 border-zinc-800'}`}
                            style={{
                                width: showInfo ? '16rem' : '4rem',
                                height: showInfo ? '12rem' : '4rem',
                                borderRadius: showInfo ? '1rem' : '50%',
                            }}>
                            <div
                                className="w-full h-full flex items-center justify-center"
                                onMouseEnter={() => setShowInfo(true)}
                                onMouseLeave={() => setShowInfo(false)}
                            >
                                {showInfo ? (
                                    <InfoBox />
                                ) : (
                                    <div>
                                        <InfoIcon icon={<svg className="fill-amber-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

function InfoBox() {
    return (
        <>
            <div className="w-full h-full flex flex-row">
                <ToggleComponent
                    svg={<svg className="fill-amber-300" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M229.66,114.34l-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v80a16,16,0,0,0,16,16h80a16,16,0,0,0,16-16V128h40a8,8,0,0,0,5.66-13.66ZM176,112a8,8,0,0,0-8,8v88H88V120a8,8,0,0,0-8-8H51.31L128,35.31,204.69,112Z"></path></svg>}
                    letter={'S'}
                    name={'Toggle Sidebar'} />

                <ToggleComponent
                    svg={<svg className="fill-amber-300" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M229.66,114.34l-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v80a16,16,0,0,0,16,16h80a16,16,0,0,0,16-16V128h40a8,8,0,0,0,5.66-13.66ZM176,112a8,8,0,0,0-8,8v88H88V120a8,8,0,0,0-8-8H51.31L128,35.31,204.69,112Z"></path></svg>}
                    letter={'X'}
                    name={'Cycle Music'} />
            </div>
        </>
    )
}

function InfoIcon({ icon }) {
    return icon
}

function ToggleComponent({ svg, letter, name }) {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-4">
                <div className="flex justify-center items-center">
                    <div className="flex flex-row items-center p-4">
                        <div className="stroke-amber-300 size-8 flex justify-center items-center">
                            {svg}
                        </div>
                        <div className="size-8 flex justify-center items-center">
                            <p className="text-3xl text-amber-300 zalando-sans">{letter}</p>
                        </div>
                    </div>

                </div>
                <div>
                    <p className="text-center text-amber-300 text-xl zalando-sans">{name}</p>
                </div>
            </div>
        </>
    )
}