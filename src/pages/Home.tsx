import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import type { Product } from "../types/product"

function Home() {

    const [products, setProducts] = useState<Product[]>([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="p-6">

            <input
                type="text"
                placeholder="Search products..."
                className="border p-2 w-full mb-6"
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {filtered.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>

        </div>
    )
}

export default Home