
import Line from "@/assets/icon/line.min.svg";

export default function ComingMessage({ message }: { message?: string }) {
    return (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-md z-10 flex items-center justify-center">
            {
                message && (
                    <h2 className="font-medium text-white text-2xl md:text-4xl relative w-max">
                        {message}
                        <img src={Line} alt="line figure" className="h-14 absolute -bottom-4 right-0" />
                    </h2>
                )
            }
        </div>
    )
}
