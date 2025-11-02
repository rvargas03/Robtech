import Comment from "@/components/landing/Comment";
import Container from "@/components/landing/Container";
import CourseCard from "@/components/landing/courses/CourseCard";
import Service from "@/components/landing/Service";
import Text from "@/components/landing/Text";
import { Button } from "@/components/ui/button";
import Line from "@/assets/icon/line.min.svg";
import { Box, Facebook, Instagram, MapPin, Twitter } from "lucide-react";
export default function Home() {
  return (
    <div>
      <section className="h-[calc(100vh-80px)] flex items-center relative">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-medium leading-[1.15]">
                Dedicados a promover la tecnologia y la educación
              </h1>
              <Text className="text-md md:text-xl mt-6 mb-10"> 
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500
              </Text>
              <Button>Inicia tu aprendizaje</Button>
            </div>
            <div className="flex-1"></div>
          </div>
        </Container>
        <div className="size-14 bg-white rounded-full absolute top-1/2 left-0 -translate-x-1/2"></div>
        <div className="size-16 bg-white/10 left-1/2 top-1/4 absolute" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="hidden  size-16 bg-white/10 left-2/8 bottom-20 absolute rotate-12" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
        <div className="size-16 bg-white left-4/8 bottom-20 absolute" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
        <div className="size-20 bg-white/10 left-10 bottom-10 absolute rotate-12" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
      </section>
      <section className="py-20 relative">
        <Container>
          <div className="grid gap-4 md:grid-cols-3 mt-10">
              <CourseCard className="hidden md:block"/>
              <CourseCard className="hidden md:block"/>
              <CourseCard />
          </div>
        </Container>
        <div className="absolute inset-0 bg-background/50 backdrop-blur-md z-10 flex items-center justify-center">
          <h2 className="font-medium text-white text-2xl md:text-4xl relative w-max">
            Cursos proximamente...
            <img src={Line} alt="line figure" className="h-14 absolute -bottom-4 right-0" />
          </h2>
        </div>
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
            <div className="grid gap-8 md:grid-cols-3 mt-14">
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
      <section className="py-20 relative">
        <Container>
          <div className="">
            <div className="text-center max-w-xl mx-auto">
              <Text variant="subtitle" className="mb-4">Comunidad</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry dummy text of the printing and typesetting industry
              </Text>
            </div>
            <div className="grid gap-6 md:grid-cols-3 mt-14">
             <Comment />
             <Comment />
             <Comment />
             <Comment />
             <Comment />
             <Comment />
            </div>
          </div>
        </Container>
         <div className="size-36 bg-white/10 right-0 translate-x-1/4 top-10 absolute" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
        <div className="size-24 bg-white/10 left-10 top-20 absolute rotate-12" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
        <div className="size-24 bg-white/10 left-10 bottom-0 absolute rotate-12" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
     
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
            <div className="grid gap-6 md:grid-cols-3 mt-14">
                <Service />
                <Service />
                <Service />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container> 
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <h1 className="text-4xl font-medium flex-1 max-w-xl">
                Simples precios basados en tus necesidades
            </h1>
            <p className="text-white/80 flex-1 max-w-sm">
                Descubra una variedad de funciones avanzadas. Ilimitadas y gratuitas para particulares.
            </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mx-auto max-w-[1000px] mt-20">
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
      <section className="py-20">
        <Container> 
        <div className="grid gap-8 md:grid-cols-2">
            <div className="">
              <div>
                  <h1 className="text-4xl font-medium mb-2">
                    Contactanos
                </h1>
                <p className="text-white/80 max-w-lg">
                    Descubra una variedad de funciones avanzadas. Ilimitadas y gratuitas para particulares.
                </p>
              </div>

              <ul className="grid gap-4 mt-8">
                <li className="flex items-center gap-4">
                    <div className="size-12 rounded-full flex items-center justify-center border border-white/40 bg-white/10 text-white">
                        <MapPin />
                    </div>
                    <p className="text-white/80">Calle 29 Colonia. Centro</p>
                </li>
                <li className="flex items-center gap-4">
                    <div className="size-12 rounded-full flex items-center justify-center border border-white/40 bg-white/10 text-white">
                        <Instagram />
                    </div>
                    <p className="text-white/80">@robertech</p>
                </li>
                <li className="flex items-center gap-4">
                    <div className="size-12 rounded-full flex items-center justify-center border border-white/40 bg-white/10 text-white">
                        <Facebook />
                    </div>
                    <p className="text-white/80">@robertech</p>
                </li>
                <li className="flex items-center gap-4">
                    <div className="size-12 rounded-full flex items-center justify-center border border-white/40 bg-white/10 text-white">
                        <Twitter />
                    </div>
                    <p className="text-white/80">@robertech</p>
                </li>
              
              </ul>
            </div>
            <div className="">
                <div className="p-6 md:p-8 bg-white rounded-2xl text-black shadow-[-6px_8px_0px_0_#000] max-w-xl">
                  <h2 className="text-xl md:text-2xl font-medium mb-6">¿Estas interesado en unirte a la comunidad o servicio?</h2>
                  <form className="grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="">
                        <label className="inline-block mb-2 text-sm font-medium" htmlFor="name">Nombre</label>
                        <input type="text" placeholder="Mariana" id="name" className="border border-black/20 bg-transparent rounded-md w-full h-11 placeholder:text-sm px-4 placeholder:font-medium placeholder:text-black/30 hover:border-background hover:shadow-[0_0_0_3px_#4271E540] active:border-background focus:border-background focus-visible:border-background  duration-300" />
                      </div>
                      <div className="">
                        <label className="inline-block mb-2 text-sm font-medium" htmlFor="last_name">Apellido</label>
                        <input type="text" id="last_name" placeholder="Lopez" className="border border-black/20 bg-transparent rounded-md w-full h-11 placeholder:text-sm px-4 placeholder:font-medium placeholder:text-black/30 hover:border-background hover:shadow-[0_0_0_3px_#4271E540] active:border-background focus:border-background focus-visible:border-background  duration-300" />
                      </div>
                    </div>
                    <div className="">
                      <label className="inline-block mb-2 text-sm font-medium" htmlFor="email">Correo Electrónico</label>
                      <input type="email" id="email" placeholder="Lopez" className="border border-black/20 bg-transparent rounded-md w-full h-11 placeholder:text-sm px-4 placeholder:font-medium placeholder:text-black/30 hover:border-background hover:shadow-[0_0_0_3px_#4271E540] active:border-background focus:border-background focus-visible:border-background  duration-300" />
                    </div>
                    <div className="">
                      <label className="inline-block mb-2 text-sm font-medium" htmlFor="description">Descripción</label>
                      <textarea id="description" placeholder="Dejanos un mensaje para contizar algun producto o servicio" className="border resize-none border-black/20 bg-transparent rounded-md w-full placeholder:text-sm p-4 placeholder:font-medium placeholder:text-black/30 hover:border-background hover:shadow-[0_0_0_3px_#4271E540] active:border-background focus:border-background focus-visible:border-background  duration-300" />
                    </div>
                    <Button className="mt-4 w-max ml-auto bg-[#FED869] text-[#EF7C54] hover:bg-[#FED86980]">Enviar mensaje</Button>
                  </form>
                </div>
            </div>
        </div>      
        </Container>
      </section>
    </div>
  );
}
