import { useState, useEffect } from 'react';

import { SocialsComponentNew, SocialsComponentOld } from './SocialsComponent'
import Mail from './Mail';
import Info from './Info';

export default function Fixed({ sidebar, setSidebar, showMail, setShowMail }) {

    // Sidebar Listener Component
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
        <>
            <div>
                <div className={`fixed z-20 left-0 top-1/2 -translate-y-1/2 h-full flex items-center justify-center transition-all transform ease-in-out ${sidebar ? 'translate-x-0 opacity-100 duration-500' : '-translate-x-full opacity-0 duration-500'}`}>
                    <SidebarListener />
                    <SocialsComponentNew
                        show={sidebar}
                        w={20}
                        h={20}
                        viewMail={() => setShowMail(prev => !prev)} />
                </div>
            </div>

            <div>
                <div className={`fixed z-10 top-1/2 left-1/2 transition-all transform bg-zinc-800/70 ${showMail ? '-translate-x-1/2 -translate-y-1/2 opacity-100 duration-700 ease-out' : 'translate-x-full -translate-y-1/2 opacity-0 duration-300 ease-in'}`}>
                    <Mail />
                </div>
            </div>

            <div>
                <Info />
            </div>
        </>
    )
}