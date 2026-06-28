import { images } from "../constants/data";
import FadeInSection from "./FadeInSection";
import Stack from "./Stack";

export default function Information() {
    return (
        <>
            <div className="flex gap-4">
                <div>
                    <FadeInSection>

                        <h1 className="text-3xl md:text-6xl font-bold transition-colors duration-300">Hi, I'm Tu Nguyen </h1>
                    </FadeInSection>
                    <FadeInSection delay={0.1}>
                        <p className="text-base md:text-xl mt-4 transition-colors duration-300">
                            Frontend Developer. I love designing websites and turning them into code. Powered by water, not by coffee, and allergic to <span className="relative">bu<span className="absolute top-0 transform translate-y-2 rotate-45">g.</span></span>
                        </p>
                    </FadeInSection>
                </div>
                <div className="block md:hidden shrink-0">
                    <FadeInSection delay={0.2}>
                        <img src="/images/tu1.jpg" alt="tu" className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full" />
                    </FadeInSection>
                </div>
                <FadeInSection delay={0.2}>
                    <div style={{ width: 200, height: 200 }} className="shrink-0 -rotate-6 md:block hidden">
                        <Stack
                            randomRotation={false}
                            sensitivity={200}
                            sendToBackOnClick={true}
                            cards={images.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`card-${i + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                                />
                            ))}
                            autoplay={false}
                            autoplayDelay={3000}
                            pauseOnHover={false}
                        />
                    </div>
                </FadeInSection>
            </div>
        </>
    )
}
