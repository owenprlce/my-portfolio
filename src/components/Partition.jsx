// --- CLEAN COMPONENT DIVIDER ---

import SocialsComponent from "./SocialsComponent"
import { useEffect } from "react"

export function SectionPartition({ height, styling }) {
    return <div className={`w-screen bg-zinc-800 ${height} ${styling}`}></div>
}

export function SectionTitlePartition({ id, title, height, styling }) {
    return (
        <div id={`${id}`} className={`w-screen ${height} flex justify-center items-center ${styling}`}>
            <div className="w-9/12 h-full flex xl:justify-start justify-center items-center z-10">
                <p className="zalando-sans text-amber-300 text-6xl">{title}</p>
            </div>
        </div>
    )
}

export function LinkHeader( {sidebar, setSidebar, setShowMail}) {
    return (
        <div className="xl:h-0 w-screen">
            <LinkSelection sidebar={sidebar} setShowMail={setShowMail} setSidebar={setSidebar} />
        </div>
 )
}

export function Footer({ height, styling }) {
    return (
        <div className={`w-screen flex justify-center items-center ${height} ${styling}`}>
            <div className="w-9/12">
            </div>
        </div>
    )
}

export function LinkSelection( {sidebar, setSidebar, setShowMail} ) {

    const SidebarListener = () => {
        const ShowSidebar = (event) => {
            if (event.shiftKey && event.key === "S") {
                setSidebar(prev => !prev);
            }
        }

        useEffect(() => {
            window.addEventListener('keydown', ShowSidebar);

            return () => {
                window.removeEventListener('keydown', ShowSidebar);
            }
        }, [])
    }

    return (
        <div className={`z-20 fixed bottom-4 translate-x-0 xl:left-4 xl:top-1/2 xl:-translate-y-1/2 w-full xl:w-auto flex items-center justify-center transition-all transform ease-in-out ${sidebar ? 'translate-x-0 opacity-100 duration-500' : '-translate-x-full opacity-0 duration-500'}`}>
            <SidebarListener />
            <SocialsComponent
                show={sidebar}
                viewMail={() => setShowMail(prev => !prev)} />
        </div>
    )
}

// --- END ---