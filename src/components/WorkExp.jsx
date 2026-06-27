import { MdKeyboardArrowRight } from "react-icons/md";
import { dataWorkExp } from "../constants/data";
import { useState } from "react";

export default function WorkExp() {
    const [openDesc, setOpenDesc] = useState(false);
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold transition-colors duration-300">Work Experience</h3>
            <div>
                {dataWorkExp.length > 0 && dataWorkExp.map((item, index) => (
                    <div className="flex gap-4 mt-4" key={index}>
                        <img src={item.image} alt={item.nameCompany} className="w-12 h-12 rounded-full border-2 border-gray-200 object-cover" />
                        <div className="group cursor-pointer" onClick={() => setOpenDesc((prev) => !prev)}>
                            <div className="flex justify-between">
                                <div >
                                    <p className="text-sm font-semibold flex items-center gap-1 transition-colors duration-300">{item.nameCompany} <MdKeyboardArrowRight className={`w-5 h-5 transition-all translate-x-0 duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-2 ${openDesc ? "rotate-90" : "rotate-0"}`} /></p>
                                    <p className="text-xs text-[#737373] font-medium">{item.position}</p>
                                </div>
                                <p className="text-sm text-[#737373] font-medium">{item.yearWork}</p>
                            </div>
                            <p className={`text-sm mt-3 overflow-hidden transition-all duration-300 ease-in-out ${openDesc ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                                }`}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
