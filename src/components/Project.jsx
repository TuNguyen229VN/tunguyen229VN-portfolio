
import { FaGithub } from "react-icons/fa";
import { dataProject } from "../constants/data";
import { MdLanguage } from "react-icons/md";
import FadeInSection from "./FadeInSection";

export default function Project() {
    return (
        <div className="mt-20">
            <FadeInSection>
                <div className="flex flex-col items-center">
                    <div className="dark:bg-white dark:text-primary-text hover:dark:bg-white inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-sm py-1 px-2.5  duration-300">My Projects</div>
                    <h3 className="text-5xl font-bold mt-2 text-center transition-colors duration-300">Check out my latest works</h3>
                    <p className="text-xl text-[#737373] text-center mt-2 transition-colors duration-300">I developed websites, from simple pages to advanced web applications. Here are a few of my favorites.</p>
                </div>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
                {dataProject.length > 0 && dataProject.map((item, index) => (
                    <FadeInSection key={index} delay={index * 0.1}>
                        <div className="rounded-lg bg-card flex flex-col overflow-hidden border dark:border-white/40 hover:shadow-lg transition-all duration-300 ease-out h-full border-gray-200 ">
                            <div className="relative w-full h-60 md:h-40">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-2 flex flex-col justify-between h-full">
                                <div>
                                    <p className="font-semibold transition-colors duration-300">{item.name}</p>
                                    <p className="text-xs font-medium mt-1">{item.dateCreate}</p>
                                    <p className="text-xs text-[#737373] mt-1">{item.desc}</p>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mt-8">
                                        {item.tech.length > 0 && item.tech.map((tech, i) => (
                                            <div className="text-[10px] px-2 py-1 dark:bg-[#121212] dark:border-white/40 dark:border bg-gray-100 rounded-md font-semibold transition-colors duration-300" key={i}>
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-2">
                                        <div className="inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-[10px] cursor-pointer  gap-1 py-1 px-2.5 dark:bg-white dark:text-primary-text hover:dark:bg-white hover:dark:ring-black duration-300">
                                            <a href={item.deployLink} className="flex items-center gap-1">
                                                <MdLanguage className="w-3 h-3" />  Website
                                            </a>
                                        </div>
                                        <div className="inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-[10px] cursor-pointer  gap-1 py-1 px-2.5 ml-2 dark:bg-white dark:text-primary-text hover:dark:bg-white hover:dark:ring-black  duration-300">
                                            <a href={item.srcCode} className="flex items-center gap-1">
                                                <FaGithub className="w-3 h-3" /> Source
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </div>
    )
}
