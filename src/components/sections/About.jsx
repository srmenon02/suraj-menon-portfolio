import { RevealOnScroll } from "../ReviewOnScroll";


export const About = () => {

    const development = ["python", "C/C++", "C#", "Java", "JavaScript", "TypeScript", "MATLAB", "SQL", ".NET", "HTML", "CSS"]

    const tools = ["GitHub", "Azure DevOps", "Visual Studio", "Visual Studio Code", "Windows", "Linux", "macOS", "Power BI"]

    const engineering = ["SOLIDWORKS", "Autodesk Fusion 360", "COMSOL Multiphysics"]
    return <section
    id="about"
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Software Engineer with experience in back-end development, bioinformatics, and medical product development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-center justify-center">Languages</h3>
                        <div className="flex flex-wrap gap02 justify-center">
                            {development.map((tech, key) => (
                                <span 
                                key={key}
                                className="text-center bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,02)] transition
                                ">
                                    {tech}
                                </span>
                                ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-center">Tools/OS</h3>
                        <div className="flex flex-wrap gap02 justify-center">
                            {tools.map((tech, key) => (
                                <span 
                                key={key}
                                className="text-center bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,02)] transition
                                ">
                                    {tech}
                                </span>
                                ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-center">Engineering</h3>
                        <div className="flex flex-wrap gap02 justify-center">
                            {engineering.map((tech, key) => (
                                <span 
                                key={key}
                                className="text-center bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,02)] transition
                                ">
                                    {tech}
                                </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                        <li className="text-gray-300 marker:text-blue-500">
                            <div className="font-bold text-blue-500"> <strong> M.S.E in Advanced Medical Product Engineering and Development </strong> </div>
                            <div> University of Michigan-Ann Arbor (2024-2025) </div>
                        </li>
                        <li className="text-gray-300 marker:text-blue-500">
                            <div className="font-bold text-blue-500"><strong> B.S.E in Biomedical Engineering </strong></div>
                            <div className="font-semibold text-blue-500"><strong><i>Minor in Computer Science, Multidiscplinary Design</i></strong></div>
                            <div>University of Michigan-Ann Arbor (2020-2024)</div>
                        </li>
                    </ul>
                    <ul className="list-none list-inside text-gray-300 mt-8">
                        <li>
                            <div className="font-semibold text-blue-500">Relevant Coursework:</div>
                            <div>Biomedical Instrumentation and Design, Artificial Intelligence and Machine Learning, Biostatistics</div>
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Work Experience</h3>
                    <div className="space-y-4 text-gray-300 ">
                        <div>
                            <h4 className="font-bold text-blue-500 bg-blue-500/10">
                                Software Development Engineer at BD (2025-present)
                            </h4>
                            <p>
                                Working as a GUI Software Engineer on the HemoSphere Alta platform 
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-blue-500 bg-blue-500/10">
                                Software Engineer at CHEPS (2024-2025)
                            </h4>
                            <p>
                                Built a discrete event simulation that modifies provider schedules to gain insights
                                into scheduling utilization, patient delay time, and appointment volume to improve new patient access. 
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-blue-500 bg-blue-500/10">
                                Research Assistant at the UMich Systems Biology Lab(2021-2025)
                            </h4>
                            <p>
                                Developed COBRA toolboxes and ML Models to run Dynamic Flux Analysis on cancer cell
                                lines and predict cancer and immune cell metabolic activity to aid in tumor-based treatment.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-blue-500 bg-blue-500/10">
                                Manufacturing Intern at P&G (2023)
                            </h4>
                            <p>
                                Utilized BVOA principles and Power BI to streamline manufacturing processes and improve efficiency
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </RevealOnScroll>
    </section>;
}