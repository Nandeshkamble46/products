import { useEffect, useState } from "react"
import ProductCard from "./components/ProductCard"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

function App() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6 text-center">
        FakeStore Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  )
}

export default App