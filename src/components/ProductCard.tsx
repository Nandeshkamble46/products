type Product = {
    id: number
    title: string
    price: number
    image: string
}

type Props = {
    product: Product
}

function ProductCard({ product }: Props) {
    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
            />

            <h2 className="mt-4 font-semibold line-clamp-2">
                {product.title}
            </h2>

            <p className="text-green-600 font-bold mt-2">
                ${product.price}
            </p>
        </div>
    )
}

export default ProductCard