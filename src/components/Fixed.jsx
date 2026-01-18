import { useState, useEffect } from 'react';

import Mail from './Mail';
import Info from './Info';

export default function Fixed({ showMail }) {


    return (
        <>
            <div className={`fixed z-10 top-1/2 left-1/2 transition-all transform bg-zinc-800/70 ${showMail ? '-translate-x-1/2 -translate-y-1/2 opacity-100 duration-700 ease-out' : 'translate-x-full -translate-y-1/2 opacity-0 duration-300 ease-in'}`}>
                <Mail />
            </div>


            <div>
                <Info />
            </div>
        </>
    )
}