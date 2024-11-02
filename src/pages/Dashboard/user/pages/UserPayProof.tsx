import { BsCloudUpload } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import SpinnerLoad from "../../../components/SpinnerLoad";
import { toast } from "react-toastify";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
// import { hosturl } from "../../../../utils/ApiFeatures";
import FooterCR from "./FooterCR";


const UserPayProof = () => {
    const [kycFile, setKycFile] = useState("");
  // const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false)

 const inputRef = useRef<any>(null);

 const {data} = useContext(AuthContext);

 const [loadingKyc, setLoadingKyc] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingKyc(false)
    }, 2000)
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
      toast.info("Kindly Upload your Payment Receipt", {
        position: "bottom-left",
      });
      return;
    }

    try {
      setLoading(true)
      const kycinfo = await preFile('image');

      if(!kycinfo || !data?._id){
        toast.info("Payment Receipt not uploaded, Kindly Upload", {position: "bottom-left"})
        return
      }else{
     await axios.post("https://specserver.vercel.app/api/user/receipts", {
        userid: data?._id,
        receipt: kycinfo,
      });
      toast.success("Receipt Uploaded Successfully", {position: "bottom-left"})
      }

      
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
        <h2 className="text-center py-4 text-3xl">PROOF OF PAYMENT</h2>
        <div className="flex flex-col gap-6">
          <div style={{ maxWidth: "500px", margin: "0px auto" }} >
            <p className="text-center">
                Please, Kindly Upload Proof of Payment, Such as Receipt, Screenshot or Snapshot of Payment
            </p>
          </div>
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="border border-primary p-8 rounded-2xl bg-[#f1f1f1] dark:bg-[#1f2937]" onClick={uploadRef}>
                <input
                  type="file"
                  name=""
                  style={{ display: "none" }}
                  accept="/image/*"
                  id=""
                  onChange={(e: any) => setKycFile(e.target.files[0])}
                  ref={inputRef}
                />
                {/* <p>{percent} % done</p> */}
                <BsCloudUpload size={100} color="black" />
                <p className="text-center text-black">
                  Upload Your Receipt here
                </p>
              </div>
              <button
                className="bg-primary px-4 py-2 rounded-xl"
                onClick={uploadFile}
              >
                Upload
              </button>
              {loading && <ThreeDots /> }
            </div>
        </div>
      </div>
    </div>     
    <div className="mt-20">
    <FooterCR />
    </div>  
    
        </div>
    
    )}
    </>
  );
}

export default UserPayProof