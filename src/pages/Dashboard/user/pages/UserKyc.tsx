import { Link } from "react-router-dom";
import KycAsset from "../../../../assets/kyc.jpg";
import { useEffect, useState } from "react";
import SpinnerLoad from "../../../components/SpinnerLoad";
import FooterCR from "./FooterCR";

const UserKyc = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | KYC"
  }, [])
  return (
    <>
    {loading ? (
      <SpinnerLoad /> 
    ): (
      <div>
     <div className="container pt-8 pb-16">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center md:w-1/2 w-full gap-4 text-center bg-[#f1f1f1] dark:bg-[#1f2937] p-6 rounded-3xl">
          <img src={KycAsset} alt="" className="w-1/2 rounded-xl shadow" />
          <p className="font-[500]">
            With tier verification you stand a chance to increase your daily
            withdrawal limit.
          </p>
          <p className="font-[500]">
            We encourage you to upload a clear and standard version of your
            preferred document
          </p>
          <Link to="/user/kyc-data">
            <button className="p-2 rounded bg-primary font-[500]">
              Click here for Verification
            </button>
          </Link>
        </div>
      </div>
    </div>   
    <FooterCR />
      </div>
    
    )}
    </>
  );
};

export default UserKyc;
