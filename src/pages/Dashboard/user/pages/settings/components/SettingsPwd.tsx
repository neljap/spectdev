import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Settingsmain from '../Settingsmain'
import { useState } from 'react'
import FooterCR from '../../FooterCR'

const SettingsPwd = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [oldVisible, setOldvisible] = useState(false);
  const [newVisible, setNewVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [loading, setLoading] = useState(false);




  const handlePwdSubmit = (e: any) => {
    e.preventDefault()
    try {
      setLoading(true)
    } catch (error) {
      
    }finally{
      setLoading(false);
    }
  }


  return (
    <Settingsmain>
        <div className='container py-8'>
          <form action="" onSubmit={handlePwdSubmit} className='md:w-1/2 w-full mx-auto'>
          <div className="flex flex-col py-4 relative">
              <label className="font-[500]">Old Password</label>
              <input
                type={oldVisible ? "text" : "password"}
                className="p-2 w-full rounded-lg border border-primary"
                value={oldPassword}
                onChange={(e: any) => setOldPassword(e.target.value)}
              />
              <div className="absolute top-12 right-5 cursor-pointer">
                {oldVisible ? (
                  <AiOutlineEye
                    size={25}
                    color="green"
                    onClick={() => setOldvisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    color="green"
                    size={25}
                    onClick={() => setOldvisible(true)}
                  />
                )}
              </div>
            </div>
          <div className="flex flex-col py-4 relative">
              <label className="font-[500]">New Password</label>
              <input
                type={newVisible ? "text" : "password"}
                className="p-2 w-full rounded-lg border border-primary"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <div className="absolute top-12 right-5 cursor-pointer">
                {newVisible ? (
                  <AiOutlineEye
                    size={25}
                    color="green"
                    onClick={() => setNewVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    color="green"
                    size={25}
                    onClick={() => setNewVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col py-4 relative">
              <label className=" font-[500]">Password</label>
              <input
                type={visibleConfirm ? "text" : "password"}
                className="p-2 w-full rounded-lg border border-primary"
                value={passwordConfirm}
                onChange={(e: any) => setPasswordConfirm(e.target.value)}
              />
              <div className="absolute top-12 right-5 cursor-pointer">
                {visibleConfirm ? (
                  <AiOutlineEye
                    size={25}
                    color="green"
                    onClick={() => setVisibleConfirm(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    color="green"
                    size={25}
                    onClick={() => setVisibleConfirm(true)}
                  />
                )}
              </div>
            </div>

            <button className='bg-primary px-4 py-2 rounded-xl'>{loading ? "Submitting": "Submit"}</button>
        </form>
        </div>
      <FooterCR />
    </Settingsmain>
  )
}

export default SettingsPwd