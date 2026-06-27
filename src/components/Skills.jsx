import { dataSkills } from "../constants/data";

export default function Skills() {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold transition-colors duration-300">Skills & Tools</h3>
            <div className="flex flex-wrap gap-2 mt-4">
                {dataSkills.length > 0 && dataSkills.map((item, index) => (
                    <div className="inline-flex flex-nowrap whitespace-nowrap items-center bg-black dark:bg-white dark:text-primary-text rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white hover:dark:ring-black hover:dark:bg-white ring-offset-2 transition text-xs leading-normal py-0.5 px-2.5 transition-colors duration-300" key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
