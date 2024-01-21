
interface SusTypes {
    img: string,
    title: String,
    text: String
}
const SusCard = ({img, title, text}: SusTypes) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-4" data-aos="zoom-in">
        <img src={img} alt="" className="rounded-lg"/>
        <h3 className="text-xl">{title}</h3>
        <p className="text-sm">{text}</p>
    </div>
  )
}

export default SusCard;