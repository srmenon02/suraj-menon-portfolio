import { RevealOnScroll } from "../ReviewOnScroll";

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,02)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> cyberlogs </h3>
                    <p className="text-gray-400 mb-3">
                        Personal project to learn more about cyber. A real-time log monitoring tool to simulate 
                        and track cybersecurity alerts over time
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                        {["MongoDB", "React.js", "Kafka", "TailwindCSS", "Docker"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,02)] transition
                                ">
                                    {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 items-center  mt-2">
                        <a href="https://cyberlogs-teal.vercel.app" className="text-blue-400 hover:text-blue-300 transition-colors">
                            View Project →
                        </a>
                        <a href="https://github.com/srmenon02/cyberlogs" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Github
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,02)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> Team PACT </h3>
                    <p className="text-gray-400 mb-3">
                        Co-founder of project working with the Korle Bu Teaching Hospital to design a non-invasive and cost-efficient cervical
                        cancer screening urine collection device for women in Accra, Ghana.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                        {["SOLIDWORKS", "CAD", "Project Management"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,02)] transition
                                ">
                                    {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 items-center mt-2">
                        <a href="https://blogs.lib.umich.edu/student-stories/student-mini-grant-preventative-and-accessible-cervical-cancer-testing" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Project Background
                        </a>
                        <a href="https://obgyn.onlinelibrary.wiley.com/doi/10.1002/ijgo.70216" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Publication
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,02)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> RECON8D </h3>
                    <p className="text-gray-400 mb-3">
                        A metabolic regulome network from oct-omics and machine learning
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                        {["scikt-learn", "Shapley Analysis", "ML/AI", "MATLAB"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,02)] transition
                                ">
                                    {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 items-center  mt-2">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/39229112/" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Publication
                        </a>
                        <a href="https://github.com/sriram-lab/Metab8D" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Github
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,02)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> INPA </h3>
                    <p className="text-gray-400 mb-3">
                        Built a simulation in Python to improve new patient access to care within Michigan Medicine
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                        {["pandas", "Agile", "git", "Discrete Event Simulation"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,02)] transition
                                ">
                                    {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 items-center  mt-2">
                        <a href="Files/INPA_S24_Poster.pdf" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Poster
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,02)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> DaySense </h3>
                    <p className="text-gray-400 mb-3">
                        Leveraging AI to predict diurnal enuresis accidents in pediatric patients
                    </p>
                    <div className="flex justify-center gap-4 items-center">
                        {["xgboost", "Medical Product Development", "V&V"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,02)] transition
                                ">
                                    {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 items-center  mt-2">
                        <a href="Files/NPD_Report.pdf" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Report
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,02)] transition-all">
                    <h3 className="text-xl font-bold mb-2"> NeuroSense </h3>
                    <p className="text-gray-400 mb-3">
                        Development of a catheter insertion guide to assist female Spinal-Cord Injury patients with incontinence
                    </p>
                    <div className="flex justify-center gap-4 items-center items-center justify-center">
                        {["SOLIDWORKS", "COMSOL Multiphysics"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,02)] transition
                                ">
                                    {tech}
                                </span>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 items-center mt-2">
                        <a href="Files/Final_Assembled_DHF.pdf" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Design History File
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
};