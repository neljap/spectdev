import { HeroSection } from "./components"
import { Footer } from "../components";
import { useEffect, useState } from "react";
import SpinnerLoad from "../components/SpinnerLoad";

const AboutPg = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | About"
  }, [])
    
  return (
    <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
    <div >
        <HeroSection />
        <Footer />
    </div>
    )}
    </>
  )
}

export default AboutPg