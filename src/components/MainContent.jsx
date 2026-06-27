import About from "./About";
import Certification from "./Certification";
import Contact from "./Contact";
import EduExp from "./EduExp";
import FadeInSection from "./FadeInSection";
import Information from "./Information";
import Project from "./Project";
import Skills from "./Skills";
import WorkExp from "./WorkExp";

export default function MainContent() {
    return (
        <div className="mx-auto max-w-190 py-10">
            <div className="relative z-10 backdrop-blur-lg bg-white/80 dark:bg-neutral-900/80 rounded-lg p-6 xs:p-4 transition-colors duration-300">
                <Information />
                <FadeInSection delay={0.2}>
                    <About />
                </FadeInSection>
                <FadeInSection delay={0.3}>
                    <WorkExp />
                </FadeInSection>
                <FadeInSection delay={0.4}>
                    <EduExp />
                </FadeInSection>
                <FadeInSection delay={0.1}>
                    <Skills />
                </FadeInSection>
                <Project />
                <Certification />
                <FadeInSection delay={0.1}>
                    <Contact />
                </FadeInSection>
            </div>
        </div>
    )
}
