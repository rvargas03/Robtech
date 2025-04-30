import Comment from "@/components/landing/Comment";
import Container from "@/components/landing/Container";
import Service from "@/components/landing/Service";
import Text from "@/components/landing/Text";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";
export default function Home() {
  return (
    <div>
      <section className="h-[calc(100vh-80px)] flex items-center">
        <Container>
          <div className="grid gap-4 grid-cols-2">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-6xl font-medium leading-[1.15]">
                Dedicados a promover la tecnologia y la educación
              </h1>
              <Text className="text-xl mt-6 mb-10"> 
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500
              </Text>
              <Button>Inicia tu aprendizaje</Button>
            </div>
            <div className="flex-1"></div>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className=""> 
            <div className="text-center max-w-xl mx-auto">    
            <Text className="mb-4" variant="subtitle">Unete a nosotros</Text> 
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry dummy text of the printing and typesetting industry
            </Text>
            </div>
            <div className="grid gap-8 grid-cols-3 mt-14">
              <article className="p-8 rounded-xl bg-[#2051D7] text-center"> 
                <div className="flex items-center justify-center rounded-full size-20 bg-[#4271E5] text-[#ADDEE9] mx-auto mb-6 border border-[#6B8DDD]">  
                  <Box className="size-8" />
                </div>
                <h3 className="font-medium text-2xl mb-2">Mecatronica</h3>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Text>
                <Button className="mt-6 w-full">Ver más</Button>
              </article>
              <article className="p-8 rounded-xl bg-[#2051D7] text-center"> 
                <div className="flex items-center justify-center rounded-full size-20 bg-[#4271E5] text-[#ADDEE9] mx-auto mb-6 border border-[#6B8DDD]">  
                  <Box className="size-8" />
                </div>
                <h3 className="font-medium text-2xl mb-2">Mecatronica</h3>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Text>
                <Button className="mt-6 w-full">Ver más</Button>
              </article>
              <article className="p-8 rounded-xl bg-[#2051D7] text-center"> 
                <div className="flex items-center justify-center rounded-full size-20 bg-[#4271E5] text-[#ADDEE9] mx-auto mb-6 border border-[#6B8DDD]">  
                  <Box className="size-8" />
                </div>
                <h3 className="font-medium text-2xl mb-2">Mecatronica</h3>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Text>
                <Button className="mt-6 w-full">Ver más</Button>
              </article>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="">
            <div className="text-center max-w-xl mx-auto">
              <Text variant="subtitle" className="mb-4">Comunidad</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry dummy text of the printing and typesetting industry
              </Text>
            </div>
            <div className="grid gap-6 grid-cols-3 mt-14">
             <Comment />
             <Comment />
             <Comment />
             <Comment />
             <Comment />
             <Comment />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div>
            <div className="text-center max-w-xl mx-auto">
              <Text variant="subtitle" className="mb-4">Servicios</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry dummy text of the printing and typesetting industry
              </Text>
            </div>
            <div className="grid gap-6 grid-cols-3 mt-14">
                <Service />
                <Service />
                <Service />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container> 
        <div className="flex justify-between gap-4">
            <h1 className="text-4xl font-medium flex-1 max-w-xl">
                Simples precios basados en tus necesidades
            </h1>
            <p className="text-white/80 flex-1 max-w-sm">
                Descubra una variedad de funciones avanzadas. Ilimitadas y gratuitas para particulares.
            </p>
        </div>
        <div className="grid gap-6 grid-cols-3 mx-auto max-w-[1000px] mt-20">
            <article className="p-6 bg-white text-black rounded-lg shadow-[-7px_8px_0px_0_#000]">
                <p className="">Gratis</p> 
                <h2 className="text-5xl font-medium my-4"> 
                    $0
                </h2>
                <ul className="text-gray-500 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a todos los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a todos los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a los cursos
                    </li>
                </ul>
                <button className="w-full py-3 mt-12 text-white text-sm font-medium bg-[#275BD7] rounded-md transition hover:bg-white hover:text-[#4271E5]"> 
                    Actualizar a Pro
                </button>
            </article>
            <article className="p-6 bg-[#3071FF] text-white rounded-lg shadow-[-7px_8px_0px_0_#000]">
                <p className="">Gratis</p> 
                <h2 className="text-5xl font-medium my-4"> 
                    $0
                </h2>
                <ul className=" text-sm space-y-2">
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a todos los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a todos los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a los cursos
                    </li>
                </ul>
                <button className="w-full py-3 mt-12 text-[#275BD7] font-medium text-sm bg-white rounded-md transition hover:bg-white hover:text-[#4271E5]"> 
                    Actualizar a Pro
                </button>
            </article>
            <article className="p-6 bg-[#1247D8] text-white rounded-lg shadow-[-7px_8px_0px_0_#000]">
                <p className="">Gratis</p> 
                <h2 className="text-5xl font-medium my-4"> 
                    $0
                </h2>
                <ul className=" text-sm space-y-2">
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a todos los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a todos los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a los cursos
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a los cursos
                    </li>
                </ul>
                <button className="w-full py-3 mt-12 text-white text-sm bg-black rounded-md transition hover:bg-white hover:text-[#4271E5]"> 
                    Actualizar a Pro
                </button>
            </article>
        </div>
        </Container>
      </section>
    </div>
  );
}
