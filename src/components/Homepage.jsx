import { useState, useEffect } from 'react'

  // Organized Component Imports
  import { Footer, SectionPartition, SectionTitlePartition } from './Partition';
  import HeroSection from './HeroSection';
  import ProjectSection from './Projects';
  import GallerySection from './Gallery';
  import SkillsSection from './Skills';
  import Fixed from './Fixed';
  import Anchors from './Anchors';


function Homepage() {

  const [showMail, setShowMail] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [showPage, setShowPage] = useState(false);

  const [staggerAnchor, setStaggerAnchor] = useState({
    anchorOne: false,
    anchorTwo: false,
    anchorThree: false,
    anchorFour: false
  })

  // Sliding Window Effect (Close Mail If Sidebar Closes)
  useEffect(() => { if (sidebar === false && showMail === true) { setShowMail(false); } }, [sidebar])

  // Transition Timing Elements
  useEffect(() => {
    const showSidebar = setTimeout(() => { setSidebar(true) }, 3500)
    const enablePage = setTimeout(() => { setShowPage(true) }, 4000)

    return () => { clearTimeout(showSidebar); clearTimeout(enablePage); }
  }, [])

  // Staggering Anchor Visualization
  useEffect(() => {
    const anchors = ["anchorOne", "anchorTwo", "anchorThree", "anchorFour"]

    const stagger = anchors.map((key, i) => { setTimeout(() => { setStaggerAnchor(prev => ({ ...prev, [key]: true })) }, (i * 200) + 2200) })

    return () => { stagger.forEach(clearTimeout) }

  }, [])

  return (
    <>
      <Anchors 
        one={staggerAnchor.anchorOne} 
        two={staggerAnchor.anchorTwo} 
        three={staggerAnchor.anchorThree} 
        four={staggerAnchor.anchorFour} />

      <SectionTitlePartition id={'home'} styling={'bg-zinc-800'} />
      <HeroSection />

      <>
        <div className={`${showPage ? 'opacity-100' : 'fixed opacity-0'}`}>

            {/* Project Section */}
            <SectionTitlePartition id={'projects'} height={'h-[20vh]'} styling={'bg-zinc-800 mt-96'} title={'Projects'} />
            <ProjectSection />

            {/* Gallery Section */}
            <SectionTitlePartition id={'gallery'} height={'h-[20vh]'} styling={'bg-zinc-800 mt-96'} title={'Gallery'} />
            <GallerySection />

            {/* Skills Section */}
            <SectionTitlePartition id={'skills'} height={'h-[20vh]'} styling={'bg-zinc-800 mt-96'} title={'Skills'} />
            <SkillsSection />

            {/* Footer Section */}
            <Footer height={'h-[30vh]'} styling={'bg-zinc-800'} />
          
        </div>

        <Fixed sidebar={sidebar} setSidebar={setSidebar} showMail={showMail} setShowMail={setShowMail} />
      </>
    </>
  )
}

export default Homepage