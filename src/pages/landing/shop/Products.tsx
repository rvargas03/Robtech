import Phone from "@/assets/img/phone.png"
import Container from "@/components/landing/Container"

export default function Products() {
  return (
    <section className="py-20">
        <Container> 
            <h1 className="text-5xl text-center font-medium ">
                Robtech Shop 
            </h1>
            <div className="flex gap-4 mx-auto max-w-[600px] mt-12">
                <input className="flex-1 h-12 bg-white rounded text-gray-700 px-4 placeholder:text-sm" type="email" id="email" name="email" placeholder="Correo electrónico" />
                <button className="py-2 px-8 shadow-[0px_6px_0px_0_#0033a4] rounded text-white text-sm bg-[#3071FF] cursor-pointer transition ">
                    Buscar
                </button>
            </div>
        </Container>
        <div className="grid grid-cols-[250px_1fr] mt-10">
            <aside className="border-r border-white/20">
                <h4 className="font-medium px-8">Categorias</h4>
                <nav className="text-white/80 mt-4">
                    <a href="#" className="py-3 px-8 block transition hover:text-white border-l-4 border-white">
                        Todos
                    </a>
                    <a href="#" className="py-3 px-8 block transition hover:text-white">
                        Todos
                    </a>
                    <a href="#" className="py-3 px-8 block transition hover:text-white">
                        Todos
                    </a>
                </nav>
            </aside>
            <div className="p-8">
                <div className="flex text-white/80 items-center justify-between mb-8">
                    <p>Buscar por: <span className="text-white">iPhone 14</span></p>
                    <p>10 resultados</p>
                </div>
                <div className="grid gap-6 grid-cols-3">
                    <article className="p-6 rounded-lg bg-white relative shadow-[0px_7px_0px_0_#00268f]">
                        <img src={Phone} alt="phone" className="block mx-auto"/>
                        <div>
                            <p className="text-gray-400 ">Iphone 14</p> 
                            <span className="text-[#275BD7] font-semibold text-3xl">$10,000</span>
                        <div className="mt-6 flex gap-3">
                            <button className="bg-[#275BD7] shadow-[0px_4px_0px_0_#002a8f] text-white rounded px-6 h-12 flex-1 py-3 text-sm transition hover:bg-white hover:text-[#4271E5]">
                                Comprar ahora
                            </button>
                            <button className="bg-[#1CB0F7] shadow-[0px_4px_0px_0_#005d8a] size-12 aspect-square grid place-items-center rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                            </button>
                        </div>
                        </div>
                    </article>
                    <article className="p-6 rounded-lg bg-white relative shadow-[0px_7px_0px_0_#00268f]">
                        <img src={Phone} alt="phone" className="block mx-auto"/>
                        <div>
                            <p className="text-gray-400 ">Iphone 14</p> 
                            <span className="text-[#275BD7] font-semibold text-3xl">$10,000</span>
                        <div className="mt-6 flex gap-3">
                            <button className="bg-[#275BD7] shadow-[0px_4px_0px_0_#002a8f] text-white rounded px-6 h-12 flex-1 py-3 text-sm transition hover:bg-white hover:text-[#4271E5]">
                                Comprar ahora
                            </button>
                            <button className="bg-[#1CB0F7] shadow-[0px_4px_0px_0_#005d8a] size-12 aspect-square grid place-items-center rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                            </button>
                        </div>
                        </div>
                    </article>
                    <article className="p-6 rounded-lg bg-white relative shadow-[0px_7px_0px_0_#00268f]">
                        <img src={Phone} alt="phone" className="block mx-auto"/>
                        <div>
                            <p className="text-gray-400 ">Iphone 14</p> 
                            <span className="text-[#275BD7] font-semibold text-3xl">$10,000</span>
                        <div className="mt-6 flex gap-3">
                            <button className="bg-[#275BD7] shadow-[0px_4px_0px_0_#002a8f] text-white rounded px-6 h-12 flex-1 py-3 text-sm transition hover:bg-white hover:text-[#4271E5]">
                                Comprar ahora
                            </button>
                            <button className="bg-[#1CB0F7] shadow-[0px_4px_0px_0_#005d8a] size-12 aspect-square grid place-items-center rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                            </button>
                        </div>
                        </div>
                    </article>
                    <article className="p-6 rounded-lg bg-white relative shadow-[0px_7px_0px_0_#00268f]">
                        <img src={Phone} alt="phone" className="block mx-auto"/>
                        <div>
                            <p className="text-gray-400 ">Iphone 14</p> 
                            <span className="text-[#275BD7] font-semibold text-3xl">$10,000</span>
                        <div className="mt-6 flex gap-3">
                            <button className="bg-[#275BD7] shadow-[0px_4px_0px_0_#002a8f] text-white rounded px-6 h-12 flex-1 py-3 text-sm transition hover:bg-white hover:text-[#4271E5]">
                                Comprar ahora
                            </button>
                            <button className="bg-[#1CB0F7] shadow-[0px_4px_0px_0_#005d8a] size-12 aspect-square grid place-items-center rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                            </button>
                        </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}
