import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { BsCloudUpload } from "react-icons/bs";
import axios from "axios";
import {ThreeDots} from "react-loader-spinner";
import { hosturl } from "../../../../utils/ApiFeatures";
import { AuthContext } from "../../../context/AuthContext";
import SpinnerLoad from "../../../components/SpinnerLoad";
import FooterCR from "./FooterCR";
const UserKycVData = () => {
  const [kycFile, setKycFile] = useState <any>("");
  // const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false)

 const inputRef = useRef<any>(null);

 const {data} = useContext(AuthContext);

 const [loadingKyc, setLoadingKyc] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingKyc(false)
    }, 500)
  }, [])

  useEffect(() => {
    document.title = "Spectrum Capitals | KYC Verify"
  }, [])

  const preFile = async (type : any) => {
    const data = new FormData();
    data.append("file", kycFile);
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

  const uploadFile = async(e : any) => {
    e.preventDefault();
    if (!kycFile) {
      toast.error("Please Upload a file", {
        position: "bottom-left",
      });
      return;
    }

    try {
      setLoading(true)
      const kycinfo = await preFile('image');
      await axios.patch(`${hosturl}/api/user/update/${data?._id}`, {
        kycinfo,
      });

      toast.success("Kyc Data Uploaded Successfully", {position: "bottom-left"})
      window.location.reload()

    } catch (error : any) {
      toast.error(error.code, { position: "bottom-left" });
    } finally{
      setLoading(false)
    }
  };

  const uploadRef = () => {
    inputRef.current.click();
  };

  return (
    <>
    {loadingKyc ? (
      <SpinnerLoad /> 
    ): (
      <div>
     <div className="container py-6">
      <div>
        <h2 className="text-center py-4 text-3xl font-[Jost] font-[700]">TIER TWO VERIFICATION</h2>
        <div className="flex flex-col gap-6">
          <div style={{ maxWidth: "500px", margin: "0px auto" }} >
            <h3 className="text-center font-[700]">Tier two Verification (KYC)</h3>
            <p className="text-center font-[500]">
              Please kindly upload a government approved identification
              document. (ID Card, Driver licenses and any other document.)
            </p>
            <p className="text-center font-[500]">
              Note: This can be rejected upon submission due to unclear format
              or wrong input
            </p>
          </div>
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="border border-primary p-8 rounded-2xl bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center cursor-pointer h-56 md:w-[400px] w-[300px] " onClick={uploadRef} style={{backgroundImage: kycFile ? `url(${URL.createObjectURL(kycFile)})` : "", backgroundSize: "cover",  backgroundPosition: "center"}}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="/image/*"
                  onChange={(e: any) => setKycFile(e.target.files[0])}
                  ref={inputRef}
                />
                {/* <p>{percent} % done</p> */}
                {!kycFile && <>
                <BsCloudUpload size={100} color="black" />
                <p className="text-center text-black font-[500]">
                  Upload Your Document here
                </p>
                </>}

                
              </div>
              <button
                className="bg-primary px-4 py-2 rounded-xl font-[500]"
                onClick={uploadFile}
              >
                {loading ? "Uploading..." : "Upload"}
              </button>
              {loading && <ThreeDots /> }
            </div>
        </div>
      </div>
    </div>   
    <FooterCR />
      </div>
    
    )}
    </>
  );
};

export default UserKycVData;
