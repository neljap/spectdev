
interface AssType {
    assimg: string,
    asstitle: String,
    asstext: String
}

const AssemgeCard = ({assimg, asstitle, asstext}: AssType) => {
  return (
    <div className="shadow rounded-lg bg-[#f1f1f1] dark:bg-[#1f2937]">
        <img src={assimg} alt="" className="w-full rounded"/>
        <div className="p-4 flex flex-col justify-start">
          <h2 className="text-2xl">{asstitle}</h2>
        <p>{asstext}</p>
        </div>

    </div>
  )
}

export default AssemgeCard;