
import wdprocess from "../../../../assets/wdprocessing.svg";

const UserWdSuccess = () => {
  return (
    <div className="container pt-12">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="md:text-2xl text-md font-[600] font-[Jost]">Withdrawal Successful</h1>
        <div className="p-4 w-80 h-60 bg-[#f1f1f1] dark:bg-[#1f2937] rounded-xl shadow-md">
          <img src={wdprocess} alt="" className="w-full"/>
        </div>
        <p className="text-md">Processing Payment...</p>
        </div>
    </div>
  )
}

export default UserWdSuccess;