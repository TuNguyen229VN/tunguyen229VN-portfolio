import { FaArrowUp } from "react-icons/fa";
import { dataEducation } from "../constants/data";

export default function EduExp() {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold transition-colors duration-300">Education</h3>
            <div>
                {dataEducation.length > 0 && dataEducation.map((item, index) => (
                    <div className="flex justify-between mt-4" key={index}>
                        <div className="flex gap-4 w-full">
                            <img src={item.image} alt={item.nameSchool} className="w-12 h-12 rounded-full border-2 border-gray-200 object-cover" />
                            <a href={item.linkEdu} className="flex justify-between w-full group" target="_blank">
                                <div>
                                    <p className="text-sm font-semibold transition-colors duration-300 flex items-center gap-1">{item.nameSchool} <FaArrowUp className="w-3 h-3 text-gray-400 rotate-45 opacity-0 group-hover:opacity-100 transition-all translate-x-0 duration-300 ease-in-out group-hover:translate-x-2 font-bold" /></p>

                                    <p className="text-xs text-[#737373] font-medium">{item.major}</p>
                                </div>
                                <p className="text-sm text-[#737373] font-medium">{item.yearStury}</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
