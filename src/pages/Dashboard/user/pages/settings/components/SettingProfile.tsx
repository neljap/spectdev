import {useContext, useEffect, useRef } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import SpinnerLoad from "../../../../../components/SpinnerLoad";
import FooterCR from "../../FooterCR";
import { hosturl } from "../../../../../../utils/ApiFeatures";
import Settingsmain from "../Settingsmain";
import { BsCloudUpload } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";


const SettingProfile = () => {
    const {data} = useContext(AuthContext);
  const [fullname, setFullname] = useState(data?.fullname);
  const [number, setNumber] = useState(data?.number);
  const [email, setEmail] = useState(data?.email);
  const [dob, setDob] = useState(data?.dob);
  const [profilePics, setProfilePics] = useState(data?.profilePics);
  const [country, setCountry] = useState(data?.country);
  const [city, setCity] = useState(data?.city);
  const [postcode, setPostcode] = useState(data?.postcode);
  const [state, setState] = useState(data?.state);
  
  const [loading, setLoading] = useState(false);
  // const [isUpload, setIsUpload] = useState(false);
   const [profilePicState, setProfilePicState] = useState(false);

  const [loadingSet, setLoadingSet] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingSet(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | Settings"
  }, [])
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // if (profilePics === "") {
    //   toast.info("Please Upload a profile Picture", {
    //     position: "bottom-left",
    //   });
    //   return;
    // }
    try {
      setLoading(true)
    const updatedata = {fullname, dob, number, country, city, postcode, state}
     await axios.patch(`${hosturl}/api/user/update/${data?._id}`, updatedata);
       toast.success("Updated Successfully", {position: "bottom-left"}) 
    } catch (err : any) {
      toast.error(err.code, {position: "bottom-left"})
    }finally{
      setLoading(false);
    }
  };

  const profileRef = useRef<any>(null)

  const preFile = async (type : any) => {
    const data = new FormData();
    data.append("file", profilePics);
    data.append("upload_preset", "kyc_preset");

    try {
      let cloudName = "dpqswhzt3";
      let resourceType = type === "image" ? "image" : "";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (error :any) {
      toast.error(error.code, { position: "bottom-left" });
    }
  };

  const uploadProRef = () => {
    profileRef.current.click();
  }

  const handleUploadPics = async(e:any) => {
    e.preventDefault()
    try {
      setLoading(true)
      const profilePics = await preFile('image');
      await axios.patch(`${hosturl}/api/user/update/${data?._id}`, {
        profilePics
      });
    } catch (error : any) {
      toast.error(error.code, { position: "bottom-left" });
    } finally{
      setLoading(false)
      setProfilePicState(false)
    }
  }


  return (
    <>
     {loadingSet ? (
      <SpinnerLoad /> 
    ): (
      <Settingsmain>
      <div className="h-fit w-[75%] mx-auto p-3 rounded-2xl my-1  bg-primary mt-8">
        <div className="flex justify-between items-center py-2 flex-wrap">
          <div className="flex flex-row gap-4">
            <div>
              {data?.profilePics === "" ? (
                <BiUserCircle size={45} />
              ) : (
                <div>
                  <img
                    src={profilePics}
                    alt="image"
                    className="w-24 h-24 rounded-full"
                   
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-[500] text-xl font-[Jost] capitalize">{fullname}</p>
              <p className="font-[500]">{email}</p>

              <div>
              <button
                className="bg-black py-2 px-4 rounded-xl text-white font-[500]"
                onClick={() => setProfilePicState(true)}
              >
                Upload Photo
              </button>
            </div>
            </div>
            
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded p-4 w-full">
        <h4 className="text-black mt-3 md:text-xl text-lg font-[700] font-[Jost]">Personal Information</h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-between items-center px-3">
            <div className="flex flex-col">
              <label className="text-black font-[500]">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={fullname}
                required
                onChange={(e : any) => setFullname(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-[500]">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                required
                value={email}
                onChange={(e : any) => setEmail(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-between items-center px-3 py-2">
            <div className="flex flex-col">
              <label className="text-black font-[500]">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                name="number"
                required
                value={number}
                onChange={(e : any) => setNumber(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-[500]">Date Of Birth</label>
              <input
                type="text"
                placeholder="Date of Birth"
                name="email"
                required
                value={dob}
                onChange={(e: any) => setDob(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
          </div>
          <h4 className="text-black mt-3 md:text-xl text-lg font-[700] font-[Jost]">Address</h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-between items-center px-3">
            <div className="flex flex-col">
              <label className="text-black font-[500]">Country</label>
              <input
                type="text"
                placeholder="Country"
                name="country"
                required
                value={country}
                onChange={(e : any) => setCountry(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-[500]">City</label>
              <input
                type="text"
                placeholder="City"
                name="city"
                required
                value={city}
                onChange={(e: any) => setCity(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-between items-center px-3">
            <div className="flex flex-col">
              <label className="text-black font-[500]">Post Code</label>
              <input
                type="text"
                placeholder="Postal Code"
                name="postCode"
                required
                value={postcode}
                onChange={(e: any) => setPostcode(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-[500]">State</label>
              <input
                type="text"
                placeholder="State"
                name="state"
                required
                value={state}
                onChange={(e: any) => setState(e.target.value)}
                className="p-2 rounded-xl border border-primary"
              />
            </div>
          </div>

          <div className="pt-6 pb-3">
            <button className="py-2 px-4 bg-primary rounded-xl font-[500]" type="submit">
              {loading ? <>Updating...</> : <>Update</>}
            </button>
          </div>
        </form>
      </div>
      <FooterCR />
        </Settingsmain>
      
    )}
    {profilePicState && (<div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="border border-primary p-8 rounded-2xl bg-[#f1f1f1] dark:bg-[#1f2937]" onClick={uploadProRef} >
                <input
                  type="file"
                  name=""
                  style={{ display: "none" }}
                  accept="/image/*"
                  id=""
                  onChange={(e: any) => setProfilePics(e.target.files[0])}
                  ref={profileRef}
                />
                {/* <p>{percent} % done</p> */}
                <BsCloudUpload size={100} color="black" />
                <p className="text-center text-black">
                  Upload Your Profile Picture Here
                </p>
              </div>
                <div className="flex justify-between items-center">
<button
                className="bg-primary px-4 py-2 rounded-xl"
                onClick={() => setProfilePicState(false)}
              >
                Close
              </button>
              <button
                className="bg-primary px-4 py-2 rounded-xl"
                onClick={handleUploadPics}
              >
                Upload
              </button>
                </div>
              
              {loading && <ThreeDots /> }
            </div>
        </div>)}
    </>
  );
};

export default SettingProfile;
