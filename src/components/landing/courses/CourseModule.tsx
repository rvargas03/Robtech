import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface Props{
    children: React.ReactNode,
    title: string,
}
export default function CourseModule({children, title}: Props) {

    const [show, setshow] = useState(false)

    return (
        <div>
            <div className="w-full flex items-center justify-between">
                <span>{title}</span>
                <button onClick={() => setshow(!show)} className='size-4 cursor-pointer grid place-content-center'>
                    <ChevronDown className={`transition duration-300 ${show ? "rotate-180" : ""}`}  />
                </button>
            </div>
            {show && <div className="space-y-3 py-4 pl-4">
                {children}
            </div>}
        </div>
    )
}
