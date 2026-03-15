import { useEffect, useState } from "react"
import ProductCard from "./components/ProductCard"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

function App() {
  return (
    <div className="text-center text-3xl font-bold mt-20">
      FakeStore Product Page
    </div>
  )
}

export default App