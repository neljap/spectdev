import { useEffect, useState } from 'react';
import { Footer } from '../components';
import SpinnerLoad from '../components/SpinnerLoad';
import { Herosection } from './components'

const InvestForex = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Forex"
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

export default InvestForex;