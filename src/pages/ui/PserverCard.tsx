import { Link } from "react-router-dom"

interface Pstypes{
    psimg: string,
    buserve: String
}

const PserverCard = ({psimg, buserve}: Pstypes) => {
  return (
    <Link to="/service">
      <div className="bg-[#f1f1f1] dark:bg-[#1f2937] hover:shadow-2xl" data-aos="fade-up-right">
        <img src={psimg} alt="" className="w-full h-64 object-cover rounded-t-lg" />
        <div className='w-full p-4 bg-primary rounded-b-lg'>
            <p className="text-center">PLANNING SERVICES</p>
            <p className="text-center text-xl font-[600]">{buserve}</p>
        </div>
    </div>
    </Link>
    
  )
}

export default PserverCard