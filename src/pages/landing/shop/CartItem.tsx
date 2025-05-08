import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from "@/assets/img/image-cart.png";
import { Checkbox } from '@/components/ui/checkbox';


export default function CartItem() {
    return (
        <div className="flex gap-4 items-center ">
            <article className="flex-1 flex gap-6 bg-[#4271E5] p-6 rounded-lg">
              <figure className="w-[380px] aspect-square">
                <img src={Image} alt="product" className="size-full object-cover rounded-md" /> 
              </figure>
              <div className="py-4 grid gap-6 grid-cols-[1fr_auto_auto] items-center">
                <div className="flex-1 grid grid-rows-[1fr_auto] gap-4 h-full">
                  <div className="">
                    <h3 className="text-2xl mb-2 font-medium text-white">Telefono Iphone</h3>
                    <p className="text-white/80">Lorem ipsum dolor sit amet consectetur. Facilisis ante facilisis amet odio sed mauris mattis hendrerit mi. In id sodales pellentesque justo ut facilisi facilisi donec eget. </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Button className="w-max">Comprar solo este producto</Button>
                    <div className="flex bg-[#5682ED] rounded-md w-max overflow-hidden">
                      <button className="size-11 grid place-content-center transition hover:bg-[#5d8bff] cursor-pointer"> 
                        <Plus className="text-white" width={16} />
                      </button>
                      <div className="size-11 grid place-content-center "> 
                        <p>1</p>
                      </div>
                      <button className="size-11 grid place-content-center transition hover:bg-[#5d8bff] cursor-pointer"> 
                        <Minus className="text-white" width={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="font-medium text-white text-3xl">$180.00</p>
                <button className="size-12 rounded-full grid place-content-center bg-white">
                  <Trash className="text-black" width={16} />
                </button>
              </div>
            </article>
            <Checkbox />
          </div>
    )
}
