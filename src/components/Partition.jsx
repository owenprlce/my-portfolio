// --- CLEAN COMPONENT DIVIDER ---

export function SectionPartition( { height, styling } ) {
    return <div className={`w-screen bg-zinc-800 ${height} ${styling}`}></div>
}

export function SectionTitlePartition( { id, title, height, styling } ) {
    return (
        <div id={`${id}`} className={`w-screen flex justify-center items-center bg-zinc-800 ${height} ${styling}`}>
            <div className="w-9/12">
                <p className="zalando-sans text-amber-300 text-6xl">{title}</p>
            </div>
        </div>
    )
}

export function Footer( { height, styling } ) {
       return (
        <div className={`w-screen flex justify-center items-center bg-zinc-800 ${height} ${styling}`}>
            <div className="w-9/12">
            </div>
        </div>
    ) 
}

// --- END ---