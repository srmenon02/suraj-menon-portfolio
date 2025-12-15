import { RevealOnScroll } from "../ReviewOnScroll"
import { GradientText } from "../GradientText";


export const Home = () => {
    return (
    <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <GradientText 
                    colors={["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4"]}
                    animationSpeed={8}
                >
                    Hi! I'm Suraj Menon
                </GradientText>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Software engineer passionate about the intersection of healthcare and tech.
                I am fueled by opportunities to develop patient-focused solutions in healthcare.
            </p>

            <div className="flex justify-center space-x-4">
                <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View Projects
                </a>
                <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                            hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10">
                    Contact Me
                </a>
            </div>

            <div className="mt-12 tb-6 flex justify-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <img 
                        src="/suraj-menon-portfolio/Files/headshot.jpg" 
                        alt="Suraj Menon" 
                        className="relative w-48 h-48 rounded-full object-cover border-4 border-blue-500/30 shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    )
}