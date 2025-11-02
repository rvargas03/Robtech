import Container from "@/components/landing/Container";
import CourseCard from "@/components/landing/courses/CourseCard";

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
            <CourseCard />
            <CourseCard />
            <CourseCard />
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
            <CourseCard isLocked={true} />
            <CourseCard isLocked={true} />
            <CourseCard isLocked={true} />
        </div>
        <button className="mx-auto block mt-8 py-2 px-6 rounded-3xl border border-white cursor-pointer transition bg-white text-[#4271E5]">
            Ver más
        </button>
    </Container>
</section>
    </>
  )
}
