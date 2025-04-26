import Container from "@/components/landing/Container";
import Course from "@/assets/img/course.png"

export default function Courses() {
  return (
    <>
    <section className="py-20">
    <Container> 
        <h1 className="text-4xl font-medium ">
            Mis cursos 
        </h1>
        <p className="text-white/80 mt-1">
            Continuar viendo...
        </p>
        <div className="grid gap-4 grid-cols-3 mt-10">
            <article className="p-4 rounded-lg bg-[#4271E5] relative">
                <figure className="w-full relative mb-4">
                    <img className="w-full h-[11rem] rounded-xl object-cover" src={Course} alt="course"/>
                    <span className="inline-block rounded-3xl py-1.5 px-3 bg-white text-[#4271E5] text-xs absolute top-2.5 right-2.5 z-2">
                        Mecanica
                    </span>
                    <button className="size-[3.5rem] grid place-items-center rounded-full absolute  bottom-0 right-6 bg-white text-[#4271E5] translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-icon lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                    </button>
                </figure>
                <div className="py-5">
                    <h2 className="text-base font-medium ">
                        Curso IA Generativa + Prompt Engineering con ChatGPT-4
                    </h2>
                    <div className="flex items-center mt-1 gap-3 text-white/80 text-sm">
                        <p>4 Modulos</p>
                        <span>|</span>
                        <p>10 Videos</p>
                    </div>
                </div>
            </article>
            <article className="p-4 rounded-lg bg-[#4271E5] relative">
                <figure className="w-full relative mb-4">
                    <img className="w-full h-[11rem] rounded-xl object-cover" src={Course} alt="course"/>
                    <span className="inline-block rounded-3xl py-1.5 px-3 bg-white text-[#4271E5] text-xs absolute top-2.5 right-2.5 z-2">
                        Mecanica
                    </span>
                    <button className="size-[3.5rem] grid place-items-center rounded-full absolute  bottom-0 right-6 bg-white text-[#4271E5] translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-icon lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                    </button>
                </figure>
                <div className="py-5">
                    <h2 className="text-base font-medium ">
                        Curso IA Generativa + Prompt Engineering con ChatGPT-4
                    </h2>
                    <div className="flex items-center mt-1 gap-3 text-white/80 text-sm">
                        <p>4 Modulos</p>
                        <span>|</span>
                        <p>10 Videos</p>
                    </div>
                </div>
            </article>
            <article className="p-4 rounded-lg bg-[#4271E5] relative">
                <figure className="w-full relative mb-4">
                    <img className="w-full h-[11rem] rounded-xl object-cover" src={Course} alt="course"/>
                    <span className="inline-block rounded-3xl py-1.5 px-3 bg-white text-[#4271E5] text-xs absolute top-2.5 right-2.5 z-2">
                        Mecanica
                    </span>
                    <button className="size-[3.5rem] grid place-items-center rounded-full absolute  bottom-0 right-6 bg-white text-[#4271E5] translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-icon lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                    </button>
                </figure>
                <div className="py-5">
                    <h2 className="text-base font-medium ">
                        Curso IA Generativa + Prompt Engineering con ChatGPT-4
                    </h2>
                    <div className="flex items-center mt-1 gap-3 text-white/80 text-sm">
                        <p>4 Modulos</p>
                        <span>|</span>
                        <p>10 Videos</p>
                    </div>
                </div>
            </article>
        </div>
        <div className="pagination flex justify-center gap-4 mt-10 text-white/80 font-medium">
            <button className="size-[3.75rem] grid place-items-center hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="transition lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="flex gap-1">
                <button className="size-[3.75rem] rounded-full cursor-pointer grid place-items-center transition duration-500 hover:bg-white hover:text-[#4271E5] active:bg-[#4271E5] active:text-white">1</button>
                <button className="size-[3.75rem] rounded-full cursor-pointer grid place-items-center transition duration-500 hover:bg-white hover:text-[#4271E5] active:bg-[#4271E5] active:text-white">2</button>
                <button className="size-[3.75rem] rounded-full cursor-pointer grid place-items-center transition duration-500 hover:bg-white hover:text-[#4271E5] active:bg-[#4271E5] active:text-white">3</button>
                <button className="size-[3.75rem] rounded-full cursor-pointer grid place-items-center transition duration-500 hover:bg-white hover:text-[#4271E5] active:bg-[#4271E5] active:text-white">4</button>
            </div>
            <button className="size-[3.75rem] grid place-items-center hover:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="transition lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>
        </div>
    </Container>
</section>
<section className="py-20">
    <Container>
        <h2 className="text-4xl font-medium ">
            Todos los cursos
        </h2>
        <p className="text-white/80 mt-1">
            Sigue aprendiendo y obten recompensar por tus certificados.
        </p>
        <div className="flex items-center gap-4 mt-10 flex-wrap ">
            <button className="py-2 px-6 rounded-3xl  text-white text-sm border border-white cursor-pointer transition hover:bg-white hover:text-[#4271E5]">
                Categoria
            </button>
            <button className="py-2 px-6 rounded-3xl  text-white text-sm border border-white cursor-pointer transition hover:bg-white hover:text-[#4271E5]">
                Categoria
            </button>
            <button className="py-2 px-6 rounded-3xl  text-white text-sm border border-white cursor-pointer transition hover:bg-white hover:text-[#4271E5]">
                Categoria
            </button>
        </div>
        <div className="grid gap-4 grid-cols-3 mt-10">
            <article className="p-4 border border-white/20 rounded-lg bg-[#4271E5] relative">
                <figure className="w-full relative mb-4">
                    <img className="w-full h-[11rem] rounded-xl object-cover" src={Course} alt="course"/>
                    <span className="inline-block rounded-3xl py-1.5 px-3 bg-white text-[#4271E5] text-xs absolute top-2.5 right-2.5 z-2">
                        Mecanica
                    </span>
                    <button className="size-[3.5rem] grid place-items-center rounded-full absolute  bottom-0 right-6 bg-white text-[#4271E5] translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </button>
                </figure>
                <div className="py-5">
                    <h2 className="text-base font-medium ">
                        Curso IA Generativa + Prompt Engineering con ChatGPT-4
                    </h2>
                    <div className="flex items-center mt-1 gap-3 text-white/80 text-sm">
                        <p>4 Modulos</p>
                        <span>|</span>
                        <p>10 Videos</p>
                    </div>
                </div>
            </article>
            <article className="p-4 border border-white/20 rounded-lg bg-[#4271E5] relative">
                <figure className="w-full relative mb-4">
                    <img className="w-full h-[11rem] rounded-xl object-cover" src={Course} alt="course"/>
                    <span className="inline-block rounded-3xl py-1.5 px-3 bg-white text-[#4271E5] text-xs absolute top-2.5 right-2.5 z-2">
                        Mecanica
                    </span>
                    <button className="size-[3.5rem] grid place-items-center rounded-full absolute  bottom-0 right-6 bg-white text-[#4271E5] translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </button>
                </figure>
                <div className="py-5">
                    <h2 className="text-base font-medium ">
                        Curso IA Generativa + Prompt Engineering con ChatGPT-4
                    </h2>
                    <div className="flex items-center mt-1 gap-3 text-white/80 text-sm">
                        <p>4 Modulos</p>
                        <span>|</span>
                        <p>10 Videos</p>
                    </div>
                </div>
            </article>
            <article className="p-4 border border-white/20 rounded-lg bg-[#4271E5] relative">
                <figure className="w-full relative mb-4">
                    <img className="w-full h-[11rem] rounded-xl object-cover" src={Course} alt="course"/>
                    <span className="inline-block rounded-3xl py-1.5 px-3 bg-white text-[#4271E5] text-xs absolute top-2.5 right-2.5 z-2">
                        Mecanica
                    </span>
                    <button className="size-[3.5rem] grid place-items-center rounded-full absolute  bottom-0 right-6 bg-white text-[#4271E5] translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </button>
                </figure>
                <div className="py-5">
                    <h2 className="text-base font-medium ">
                        Curso IA Generativa + Prompt Engineering con ChatGPT-4
                    </h2>
                    <div className="flex items-center mt-1 gap-3 text-white/80 text-sm">
                        <p>4 Modulos</p>
                        <span>|</span>
                        <p>10 Videos</p>
                    </div>
                </div>
            </article>
        </div>
        <button className="mx-auto block mt-8 py-2 px-6 rounded-3xl border border-white cursor-pointer transition bg-white text-[#4271E5]">
            Ver más
        </button>
    </Container>
</section>
    </>
  )
}
