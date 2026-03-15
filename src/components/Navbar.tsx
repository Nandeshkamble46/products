import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-black text-white p-4 flex justify-between">
            <Link to="/" className="text-xl font-bold">
                Products
            </Link>

            <div className="space-x-4">
                <Link to="/">Products</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    )
}

export default Navbar