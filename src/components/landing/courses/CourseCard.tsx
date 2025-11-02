import Course from "@/assets/img/course.png"

interface CourseCardProps {
    isLocked?: boolean;
    className?: string;
}

export default function CourseCard({ isLocked = false, className = '' }: CourseCardProps) {
    return (
        <article className={`p-4 rounded-lg bg-[#4271E5] relative ${className}`}>
            <figure className="w-full relative mb-4">
                <img className="w-full h-[11rem] rounded-xl object-cover" src={Course} alt="course"/>
                <span className="inline-block rounded-3xl py-1.5 px-3 bg-white text-[#4271E5] text-xs absolute top-2.5 right-2.5 z-2">
                    Mecanica
                </span>
                <button className="size-[3.5rem] grid place-items-center rounded-full absolute bottom-0 right-6 bg-white text-[#4271E5] translate-y-1/2">
                    {isLocked ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-icon lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                    )}
                </button>
            </figure>
            <div className="py-5">
                <h2 className="text-base font-medium">
                    Curso IA Generativa + Prompt Engineering con ChatGPT-4
                </h2>
                <div className="flex items-center mt-1 gap-3 text-white/80 text-sm">
                    <p>4 Modulos</p>
                    <span>|</span>
                    <p>10 Videos</p>
                </div>
            </div>
        </article>
    )
}