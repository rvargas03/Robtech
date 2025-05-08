import Profile from "@/assets/img/profile.png";
import CourseModule from "@/components/landing/courses/CourseModule";
import CourseModuleItem from "@/components/landing/courses/CourseModuleItem";
import { ChevronLeft, PanelsTopLeft, Play, Star } from "lucide-react";
import Video from "@/assets/img/video.png";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    name: "Informacion",
    icon: <PanelsTopLeft width={16} />,
  },
  {
    name: "Actividades",
    icon: <ChevronLeft width={16} />,
  },
  {
    name: "Examen",
    icon: <Play width={16} />,
  },
]

export default function Course() {

  const [tapCurrent, setTapCurrent] = useState(0)


  return (
    <div className="grid grid-cols-[300px_1fr] min-h-screen">
      <aside className="px-6 bg-[#4271E5]">
        <div className="flex items-center gap-3 py-6 border-b border-white/40">
          <figure className="size-12 rounded-full border-[3px] border-white overflow-hidden">
            <img src={Profile} alt="profile" className="size-full object-cover" />
          </figure>
          <div>
            <p className="font-medium text">Roberto Silva</p>
            <p className="text-white/80 text-sm flex items-center gap-2"><Star className="fill-yellow-300 stroke-yellow-300" width={14} /> Nivel 10</p>
          </div>
        </div>
        <div className="py-6">
          <p className="text-white/80">Contenido del curso</p>
          <div className="mt-4 space-y-2">
            <CourseModule title="Módulo 1">
              <CourseModuleItem checked={true} text="Aprendizaje de electronica" />
              <CourseModuleItem checked={false} text="Enseñanza de arduino" />
              <CourseModuleItem checked={false} text="Comunicacion y fiabilidad de sistemas" />
            </CourseModule>
            <CourseModule title="Módulo 1">
              <CourseModuleItem checked={true} text="Aprendizaje de electronica" />
              <CourseModuleItem checked={false} text="Enseñanza de arduino" />
              <CourseModuleItem checked={false} text="Comunicacion y fiabilidad de sistemas" />
            </CourseModule>
          </div>
        </div>
      </aside>
      <div className="py-4 px-10">
        <div className="text-white/80 text-sm flex items-center gap-2">
          <PanelsTopLeft width={16} /> 
          <p>Cursos</p>
          <span>/</span>
          <p className="text-white">Modulo 1</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="text-white/80 size-8 border border-white/50 rounded grid place-content-center">
          <ChevronLeft width={18} />
          </div>
          <h1 className="text-white text-2xl">Aprendizaje de electronica</h1>
        </div>
        <div className="mt-6 relative w-max">
          <img src={Video} alt="video" className="w-full rounded-md aspect-video max-w-[700px]" />
          <button className="size-20 rounded-full absolute inset-0 m-auto grid place-content-center bg-background">
            <Play className="fill-white" />
          </button>
        </div>
        <section className="mt-4">
          <div className="flex">
            {
              tabs.map((tab, index) => (
                <button onClick={() => setTapCurrent(index)} key={index} className={cn("py-4 px-8 transition duration-300 cursor-pointer border-b-2 hover:border-white",{
                  'border-transparent ': tapCurrent !== index,
                  'border-white': tapCurrent === index,
                })}> 
                  {tab.name}
                </button>
              ))
            }
          </div>
          <div className="bg-[#2051D7] rounded-md p-8 text-white mt-8 max-w-3xl">
            <h3 className="text-xl font-medium">¿Que es un Robot?</h3>
            <p className="text-white/80 mt-2">Lorem ipsum dolor sit amet consectetur. Facilisis ante facilisis amet odio sed mauris mattis hendrerit mi. In id sodales pellentesque justo ut facilisi facilisi donec eget. </p>
          </div>
        </section>
      </div>
    </div>
  )
}
