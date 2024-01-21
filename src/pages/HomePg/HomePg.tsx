import { useEffect, useState } from "react";
import { Footer } from "../components";
import {AsMangeSection, InvestSection, SectorHmSection} from "./components";
import TestHero from "./components/TestHero";
import SpinnerLoad from "../components/SpinnerLoad";

const HomePg = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals"
  }, [])
  return (
    <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
    <div >
      {/* <HeroSection /> */}
      <TestHero />
      <AsMangeSection />
      <InvestSection />
      <SectorHmSection />
      {/* <BlogSection /> */}
      <Footer />
    </div>
     )}
    </>
  )
}

export default HomePg;