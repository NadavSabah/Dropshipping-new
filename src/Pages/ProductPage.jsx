import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProductByHandle } from "../data";
import { addToCart, removeFromCart, getCart, cart } from '../cart'
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
            <button onClick={() => console.log(cart.item_count())}> getItemCount</button>

            <Link to="/">Back to homepage</Link>


        </div>
    )
}