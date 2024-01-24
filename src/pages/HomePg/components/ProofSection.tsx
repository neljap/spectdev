
import { Link } from 'react-router-dom'
import { proimg, tesxtPdf } from '../../../assets';

const ProofSection = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 justify-center items-center overflow-hidden">
        <div className='flex flex-col gap-4'>
          <h6 className="text-primary font-[700] font-[Jost] md:text-4xl text-xl">
          Licensed and Certified Trading Platform
            
          </h6>
          <p className="text-md">
          Spectrum Capitals operates as an authorized and certified trading platform.
         
          </p>
          <div>
            <Link to={tesxtPdf} target="_blank" className="text-primary">
              Find Out More
            </Link>
          </div>
        </div>
        <div>
          <img src={proimg} alt="img" className="w-100 rounded" />
        </div>
      </div>
    </div>
  )
}

export default ProofSection