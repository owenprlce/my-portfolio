export default function SkillsSection() {
    return (
        <div className='w-screen min-h-[20vh] flex justify-center items-center'>
            <div className='w-9/12 h-full'>
                <div className="hidden md:flex">
                    <Skills />
                </div>

                <div className="flex md:hidden">
                    <div className="w-full h-[40vh] rounded-2xl bg-white/20 flex justify-center items-center">
                        <p className="zalando-sans text-5xl text-amber-300">Coming soon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Skills() {
    return (
        <div className="w-full border-2 border-amber-300 rounded-2xl overflow-hidden">
            <table className="w-full table-fixed text-lg font-sans">
                <thead className="bg-white/20 border-b border-zinc-800">
                    <tr>
                        <th className="px-6 py-7 text-left">Technology</th>
                        <th className="px-6 py-7 text-left">Category</th>
                        <th className="px-6 py-7 text-left">Proficiency</th>
                        <th className="px-6 py-7 text-left">Experience</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                    <tr className="hover:bg-zinc-400 bg-white/20 transition-colors">
                        <td className="px-6 py-7">HTML5</td>
                        <td className="px-6 py-7">Web Development</td>
                        <td className="px-6 py-7">Intermediate</td>
                        <td className="px-6 py-7">2 years</td>
                    </tr>
                    <tr className="hover:bg-zinc-400 bg-white/20 transition-colors">
                        <td className="px-6 py-7">TailwindCSS</td>
                        <td className="px-6 py-7">Web Development</td>
                        <td className="px-6 py-7">Intermediate</td>
                        <td className="px-6 py-7">1.5 years</td>
                    </tr>
                    <tr className="hover:bg-zinc-400 bg-white/20 transition-colors">
                        <td className="px-6 py-7">React</td>
                        <td className="px-6 py-7">Application Development</td>
                        <td className="px-6 py-7">Intermediate</td>
                        <td className="px-6 py-7">~2 years</td>
                    </tr>
                    <tr className="hover:bg-zinc-400 bg-white/20 transition-colors">
                        <td className="px-6 py-7">Java</td>
                        <td className="px-6 py-7">Backend Development</td>
                        <td className="px-6 py-7">Foundational</td>
                        <td className="px-6 py-7">2 years</td>
                    </tr>
                    <tr className="hover:bg-zinc-400 bg-white/20 transition-colors">
                        <td className="px-6 py-7">C++</td>
                        <td className="px-6 py-7">Backend Development</td>
                        <td className="px-6 py-7">Foundational</td>
                        <td className="px-6 py-7">2 years</td>
                    </tr>
                    <tr className="hover:bg-zinc-400 bg-white/20 transition-colors">
                        <td className="px-6 py-7">Python</td>
                        <td className="px-6 py-7">Machine Learning</td>
                        <td className="px-6 py-7">Introductory</td>
                        <td className="px-6 py-7">Academic Coursework</td>
                    </tr>
                    <tr className="hover:bg-zinc-400 bg-white/20 transition-colors">
                        <td className="px-6 py-7">Spring Boot</td>
                        <td className="px-6 py-7">Backend Architecture</td>
                        <td className="px-6 py-7">Introductory</td>
                        <td className="px-6 py-7">Academic Coursework</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
