import { fixedata } from "../../../utils/data"
import { SectorCard } from "../../ui"

const SectorHmSection = () => {
  return (
    <div>
        <div className="container">
          {/* https://newsdata.io/api/1/crypto?apikey=YOUR_API_KEY */}
            <h2 className="text-center text-3xl font-600 py-6">Sector</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
              {fixedata.map(item => (
                  <SectorCard key={item.id} title={item.title} text={item.text} sub={item.sub}/>
              ))}
            </div>
            <hr />
        </div>   
    </div>
  )
}

export default SectorHmSection