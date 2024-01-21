import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SpinnerLoad from '../../../components/SpinnerLoad'

const UserWithdraw = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Withdraw"
  }, [])
  return (
    <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
    <div className='container py-20'>
        <h2 className='text-center pb-2 font-[600] text-xl'>Withdraw from your account</h2>
        <p className='text-center pb-2 font-[500] text-md'>Place a withdrawal request using any of the payment method below</p>
        <div className='flex justify-center items-center flex-col pt-4'>
            <div className='border border-primary rounded-2xl p-6 max-w-80 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col gap-4'>
                <p className='text-center font-extrabold'>USDT</p>
                <h4 className='text-center text-md'>$1,000,000<span>Max</span></h4>
                <div>
                    <p className='pb-2'><span className='font-[600]'>Minimum amount:</span> $10,000</p>
                    <p className='pb-2'><span className='font-[600]'>Charge Type:</span> Percentage</p>
                    <p className='pb-2'><span className='font-[600]'>Charges Amount:</span> 3%</p>
                    <p className='pb-2'><span className='font-[600]'>Duration:</span> Instantly</p>
                </div>
                <Link to='/user/withdraw-funds'>
                <button className='bg-primary px-4 py-2 rounded-xl'>Select this method</button>
                </Link>
            </div>
        </div>
    </div>
    )}
    </>
  )
}

export default UserWithdraw