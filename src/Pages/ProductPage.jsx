import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProductByHandle, addToCart, removeFromCart, getCart, getProducts } from "../data";
export default function ProductPage() {

    let params = useParams()
    let product = getProductByHandle(params.productHandle)

    return (
        <div style={{ backgroundColor: 'green' }}>
            <h1>{product.title}</h1>
            <img src={product.images[0].url} alt="" />
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => addToCart(product)}> Add to cart</button>
            <button onClick={() => removeFromCart(product.handle)}> Remove from cart</button>
            <button onClick={() => getCart()}> getCart</button>

            <Link to="/">Back to homepage</Link>


        </div>
    )
}