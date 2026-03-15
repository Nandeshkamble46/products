import { type Product } from "../types/product"
import { Link } from "react-router-dom"

type Props = {
    product: Product
}

function ProductCard({ product }: Props) {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="border rounded-xl p-4 shadow hover:shadow-xl transition">

                <img
                    src={product.image}
                    className="h-40 mx-auto object-contain"
                />

                <h2 className="mt-3 font-semibold line-clamp-2">
                    {product.title}
                </h2>

                <p className="text-green-600 font-bold mt-2">
                    ${product.price}
                </p>

                <p className="text-yellow-500 text-sm">
                    ⭐ {product.rating.rate}
                </p>

            </div>
        </Link>
    )
}

export default ProductCard