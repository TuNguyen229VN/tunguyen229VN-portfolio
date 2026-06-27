import { dataEducation } from "../constants/data";

export default function EduExp() {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold transition-colors duration-300">Education</h3>
            <div>
                {dataEducation.length > 0 && dataEducation.map((item, index) => (
                    <div className="flex justify-between mt-4" key={index}>
                        <div className="flex gap-4">
                            <img src={item.image} alt={item.nameSchool} className="w-12 h-12 rounded-full border-2 border-gray-200 object-cover" />
                            <div>
                                <p className="text-sm font-semibold transition-colors duration-300">{item.nameSchool}</p>
                                <p className="text-xs text-[#737373] font-medium">{item.major}</p>
                            </div>
                        </div>
                        <p className="text-sm text-[#737373] font-medium">{item.yearStury}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
