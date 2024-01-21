import { useEffect, useState } from 'react'
import { Footer } from '../components'
import SpinnerLoad from '../components/SpinnerLoad'
import { Herosection } from './components'

const Investmentstocks = () => {
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
    <div>
        <Herosection />
        <Footer />
    </div>
    )}
    </>
  )
}

export default Investmentstocks