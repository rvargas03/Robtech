import Container from "@/components/landing/Container";
import Text from "@/components/landing/Text";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="py-10">
      <Container className="max-w-[1100px]">
        <header className="flex items-center justify-between">
          <div className="">
            <Text variant="subtitle">Carrito</Text>
            <Text>12 productos</Text>
          </div>
        </header>
        <div className="grid gap-6 mt-8">
         <CartItem />
         <CartItem />
         <CartItem />
        </div>
        <div className="mt-12 border-t border-white/40 pt-6 space-y-2">
          <div className="flex items-center  justify-between text-xl text-white/80">  
            <p className="">Subtotal</p>
            <p className="">$1200.00</p>
          </div>
          <div className="flex items-center justify-between text-2xl text-white"> 
            <p>Total</p>
            <p>$1200.00</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
