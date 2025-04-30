import { useParams } from "react-router-dom"

export default function ProductDetails() {

    const { id } = useParams<{ id: string }>()

  return (
    <div>ProductDetails {id}</div>
  )
}
