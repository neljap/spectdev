import {dedabt} from "../../assets"

const BlogCard = () => {
  return (
    <div className="w-full flex flex-row border-b-2 border-primary bg-[#f1f1f1] dark:bg-[#1f2937]">
        <div className="w-1/2 py-6 ">
            <img src={dedabt} alt="" className="rounded-full" />
            <p>Title: Seeking Stability in Dogecoin’s Fluctuations: Could Rebel Satoshi and Chainlink Offer a Safe Haven?</p>
        </div>
        <div className="w-1/2 flex flex-row justify-start items-center">
          <div className='min-w-28'>
            <p>06 Jan 2024</p>
        </div>
        <div className='min-w-28'>
            <p>Italian</p>
        </div>
        <div className='min-w-28'>
            <p>Italian</p>
        </div >
        <div className='min-w-28'>
            <p>Ice</p>
        </div>
        <div className='min-w-28'>
            <p>Top</p>
        </div>  
        </div>
        
    </div>
  )
}

export default BlogCard