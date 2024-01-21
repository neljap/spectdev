
interface SolidTypes {
    img: string,
    title: String,
    text: String
}

const SolidItemCard = ({img, title, text}: SolidTypes) => {
  return (
    <div className="bg-[#f1f1f1] dark:bg-[#1f2937] rounded-xl" data-aos="zoom-in">
      <img src={img} alt="" className="h-40 object-cover w-full bg-black rounded-t-xl"/>
      <div className="p-4">
        <h3 className="text-xl font-[500]">{title}</h3>
        <p className="text-sm">{text}</p>
      </div>
        
    </div>
  )
}

export default SolidItemCard