import { dataCerti } from "../constants/data";
import FadeInSection from "./FadeInSection";

export default function Certification() {
    return (
        <div className="mt-20">
            <FadeInSection delay={0.1}>
                <div className="flex flex-col items-center">
                    <div className="dark:bg-white dark:text-primary-text hover:dark:bg-white inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-sm py-1 px-2.5  duration-300">Certificates</div>
                    <h3 className="text-5xl font-bold mt-2 text-center transition-colors duration-300">Browse my achievements</h3>
                    <p className="text-xl text-[#737373] text-center mt-2 transition-colors duration-300">Certifications and awards that showcase my journey of continuous learning and expertise in the field.
                    </p>
                </div>
            </FadeInSection>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-10">
                {dataCerti.length > 0 && dataCerti.map((item, index) => (
                    <FadeInSection key={index} delay={0.1 * index}>
                        <a href={item.link} className="flex flex-col item-center group" target="_blank">
                            <div className="relative w-32 h-32 mb-3 mx-auto" >
                                <img src={item.image} alt={item.name} className="absolute w-full h-full object-cover" />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold line-clamp-1 mb-1 group-hover:text-[#06c] transition-colors duration-300" title={item.name}>{item.name}</p>
                                <p className="text-xs font-medium text-[#737373] mb-1">{item.platform_study}</p>
                                <p className="text-xs text-[#737373]">{item.date}</p>
                            </div>
                        </a>
                    </FadeInSection>
                ))}
            </div>
        </div>
    )
}
