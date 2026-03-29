import Comment from "@/components/landing/Comment";
import Container from "@/components/landing/Container";
import CourseCard from "@/components/landing/courses/CourseCard";
import Service from "@/components/landing/Service";
import Text from "@/components/landing/Text";
import { Button } from "@/components/ui/button";
import { Bot, Cable, Code, Facebook, FlaskConical, Gamepad, Instagram, MapPin, Plug } from "lucide-react";
import TopicCard from "@/components/landing/TopicCard";
import { Link } from "react-router-dom";
import ComingMessage from "@/components/ComingMessage";
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
                Aprende desde cero hasta niveles avanzados con proyectos reales. Formamos a los próximos innovadores tecnológicos a través de una metodología 100% práctica.
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
        <ComingMessage message="Cursos proximamente..." />
      </section>
      <section className="py-20">
        <Container>
          <div className=""> 
            <div className="text-center max-w-xl mx-auto">    
            <Text className="mb-4" variant="subtitle">Unete a nosotros</Text> 
            <Text>
              Domina las disciplinas que están construyendo el futuro tecnológico con una metodología práctica y orientada a proyectos reales.
            </Text>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mt-14">
              <TopicCard Icon={Bot} title="Robotica" description="Diseña, construye y programa sistemas autónomos. Aprende desde mecánica básica hasta algoritmos de control inteligente." />
              <TopicCard Icon={FlaskConical} title="Fisica" description="Comprende las leyes que gobiernan el universo digital y mecánico para optimizar cada uno de tus prototipos." />
              <TopicCard Icon={Cable} title="Electronica" description="Domina el flujo de la energía. Desde circuitos básicos hasta el diseño de placas profesionales y sistemas embebidos." />
             
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
                Aprende desde cero hasta niveles avanzados con proyectos reales. Formamos a los próximos innovadores tecnológicos a través de una metodología 100% práctica.
              </Text>
            </div>
            <div className="grid gap-6 md:grid-cols-3 mt-14">
              <Comment 
               name="Elena Rodríguez"
               username="elena_rob"
               description="Increíble ver cómo mi hijo pasó de solo jugar videojuegos a entender cómo programar sus propios niveles. El profesor tiene una paciencia admirable y hacen que temas complejos de electrónica sean divertidos para niños."
               rating={5}
             />
              <Comment
                name="Ricardo Soto"
                username="ricardo_papa"
                description="Buscaba una actividad que despertara la curiosidad de mi hija y estos cursos superaron mis expectativas. Ahora ella misma arregla sus juguetes electrónicos y me explica cómo funcionan los circuitos. ¡Es un orgullo!"
                rating={5}
              />
              <Comment
                name="Mónica G."
                username="monica_family"
                description="Lo que más me gusta es el enfoque práctico. Mi hijo no solo recibe teoría, sino que llega a casa emocionado a mostrarme los sensores que logró hacer funcionar. Una inversión excelente para su futuro."
                rating={5}
              />
              <Comment
                name="Carlos Medina"
                username="carlos_dev"
                description="Como estudiante de ingeniería, estos cursos fueron el complemento perfecto. En la universidad vemos mucha teoría, pero aquí fue donde realmente aprendí a soldar, diseñar mis propias PCBs y dar vida a mis proyectos."
                rating={4}
              />
              <Comment
                name="Javier López"
                username="javi_maker"
                description="Siempre quise aprender robótica pero no sabía por dónde empezar. La metodología paso a paso me permitió construir mi primer robot autónomo en menos de un mes. ¡Totalmente recomendado si empiezas de cero!"
                rating={5}
              />
              <Comment
                name="Andrea Valadez"
                username="andrea_tech"
                description="Los cursos de IoT y Electrónica me abrieron las puertas a un nuevo mundo laboral. El soporte de los mentores es constante y la comunidad que se forma en el foro ayuda muchísimo a resolver dudas técnicas rápido."
                rating={4}
              />
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
                <Service Icon={Gamepad} index={1} title="Juegos Educativos Interactivos" description=" Descubre una colección de juegos diseñados para desarrollar habilidades
        en matemáticas, ciencia, lenguaje y más, adaptados para todas las
        edades."/>
                <Service Icon={Code} index={2} title="Cursos de Programación" description="Aprende a programar desde cero con nuestros cursos prácticos y enfocados en proyectos reales."/>
                <Service Icon={Plug} index={3} title="Talleres de Electrónica" description="Descubre el mundo de la electrónica con talleres prácticos que combinan teoría y práctica."/>
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
            <article className="p-6 bg-white text-black rounded-lg shadow-[-7px_8px_0px_0_#000] flex flex-col justify-between">
              <div>
                <p className="">Inicial</p> 
                <h2 className="text-5xl font-medium my-4"> 
                    $0
                </h2>
                <ul className="text-gray-500 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a cursos introductorios.
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Participación en el foro comunitario.
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Material de lectura descargable.
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Visualización limitada de proyectos.
                    </li>
                </ul>
              </div>
                <button className="w-full py-3 mt-12 text-white text-sm font-medium bg-[#275BD7] rounded-md transition hover:bg-white hover:text-[#4271E5]"> 
                    Gratis
                </button>
            </article>
            <article className="p-6 bg-[#3071FF] text-white rounded-lg shadow-[-7px_8px_0px_0_#000] flex flex-col justify-between">
                <div>
                  <p className="">Gratis</p> 
                  <h2 className="text-5xl font-medium my-4"> 
                      $49<span className="text-lg">/mes</span>
                  </h2>
                  <ul className=" text-sm space-y-2">
                      <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                          Todo lo del plan Inicial.
                      </li>
                      <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                          Acceso ilimitado a todos los cursos.
                      </li>
                      <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                          Certificados de finalización.
                      </li>
                      <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                          Guías de armado paso a paso.
                      </li>
                  </ul>
                </div>
                <button className="w-full py-3 mt-12 text-[#275BD7] font-medium text-sm bg-white rounded-md transition hover:bg-white hover:text-[#4271E5]"> 
                    Actualizar a Pro
                </button>
            </article>
            <article className="p-6 bg-[#1247D8] text-white rounded-lg shadow-[-7px_8px_0px_0_#000] flex flex-col justify-between">
              <div>
                <p className="">Master</p> 
                <h2 className="text-5xl font-medium my-4"> 
                    $199<span className="text-lg">/único</span>
                </h2>
                <ul className=" text-sm space-y-2">
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Todo lo del plan Pro.
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Mentoría 1 a 1 personalizada.
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso a la bolsa de proyectos industriales.
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Descuentos en kits de electrónica físicos.
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Acceso prioritario a nuevos lanzamientos.
                    </li>
                </ul>
              </div>
                <button className="w-full py-3 mt-12 text-white text-sm bg-black rounded-md transition hover:bg-white hover:text-[#4271E5]"> 
                    Ser un master
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
                <li>
                  <Link className="flex items-center gap-4" to={'https://maps.app.goo.gl/4YvvHFdtGq1NaRxa8'} target="_blank">
                    <div className="size-12 rounded-full flex items-center justify-center border border-white/40 bg-white/10 text-white">
                        <MapPin />
                    </div>
                    <p className="text-white/80">Calle 107 Casa 604 Frac. Los heroes</p>
                  </Link>
                </li>
                <li>
                   <Link className="flex items-center gap-4 group" to={'https://www.instagram.com/robtech_24/'} target="_blank">
                      <div className="size-12 rounded-full flex items-center justify-center border border-white/40 bg-white/10 group-hover:bg-white/15 transition">
                          <Instagram />
                      </div>
                      <p className="text-white/80 group-hover:text-white transition">@robtech_24</p>
                  </Link>
                </li>
                <li>
                    <Link className="flex items-center gap-4 group" to={'https://www.facebook.com/people/RobTech/61554414910232/'} target="_blank">
                      <div className="size-12 rounded-full flex items-center justify-center border border-white/40 bg-white/10 group-hover:bg-white/15 transition">
                          <Facebook />
                      </div>
                      <p className="text-white/80 group-hover:text-white transition">@robtech</p>
                  </Link>
                </li>
                <li>
                    <Link className="flex items-center gap-4 group" to={'https://www.tiktok.com/@robtech24?is_from_webapp=1&sender_device=pc'} target="_blank">
                      <div className="size-12 rounded-full flex items-center justify-center border border-white/40 bg-white/10 group-hover:bg-white/15 transition">
                          <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path></svg>
                      </div>
                      <p className="text-white/80 group-hover:text-white transition">@robtech_24</p>
                  </Link>
                </li>
              
              </ul>
            </div>
            <div className="">
                <div className="p-6 md:p-8 bg-white rounded-2xl text-black shadow-[-6px_8px_0px_0_#000] max-w-xl">
                  <h2 className="text-xl md:text-2xl font-medium mb-1">¿Estas interesado?</h2>
                  <Text className="text-gray-500 text-sm mb-6">Envíanos tus datos y nos pondremos en contacto contigo a la brevedad.</Text>
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
                      <input type="email" id="email" placeholder="carlos21@gmail.com" className="border border-black/20 bg-transparent rounded-md w-full h-11 placeholder:text-sm px-4 placeholder:font-medium placeholder:text-black/30 hover:border-background hover:shadow-[0_0_0_3px_#4271E540] active:border-background focus:border-background focus-visible:border-background  duration-300" />
                    </div>
                    <div className="">
                      <label className="inline-block mb-2 text-sm font-medium" htmlFor="description">Descripción</label>
                      <textarea id="description" placeholder="Dejanos un mensaje para contizar algun producto o servicio" className="border resize-none border-black/20 bg-transparent rounded-md w-full placeholder:text-sm p-4 placeholder:font-medium placeholder:text-black/30 hover:border-background hover:shadow-[0_0_0_3px_#4271E540] active:border-background focus:border-background focus-visible:border-background  duration-300" />
                    </div>
                    <Button className="mt-4 md:w-max md:ml-auto bg-[#FED869] text-[#EF7C54] hover:bg-[#FED86980]">Enviar mensaje</Button>
                  </form>
                </div>
            </div>
        </div>      
        </Container>
      </section>
    </div>
  );
}
