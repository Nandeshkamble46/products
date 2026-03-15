import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Product } from "../types/product"

function ProductDetails() {

    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    if (!product) return <p>Loading...</p>

    return (
        <div className="p-8 grid md:grid-cols-2 gap-10">

            <img
                src={product.image}
                className="h-80 object-contain mx-auto"
            />

            <div>

                <h1 className="text-2xl font-bold">
                    {product.title}
                </h1>

                <p className="mt-4 text-gray-600">
                    {product.description}
                </p>

                <p className="text-green-600 text-xl mt-4 font-bold">
                    ${product.price}
                </p>

                <p className="mt-2">
                    ⭐ {product.rating.rate}
                </p>

                <button className="bg-black text-white px-6 py-2 mt-6 rounded">
                    Add to Cart
                </button>

            </div>

        </div>
    )
}

export default ProductDetails