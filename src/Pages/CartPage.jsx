import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, getCart } from '../data'

export default function CartPage() {
    const [cart, setCart] = useState(getCart());

    // Check this isn't working
    function removeProductFromCart(handle) {
        let newCart = removeFromCart(handle)
        setCart(newCart)
    }
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            <h1>Cart Page</h1>
            {cart?.length > 0 ? cart.map((product, idx) => (
                <div key={`cartItem-${idx}`}>
                    <img height="100" width="100" src={product.images[0].url} alt="" />
                    <div>Title: {product.title}</div>
                    <div>Qty: {product.quantity}</div>
                    <div>Price{product.price}</div>
                    <button onClick={() => removeProductFromCart(product.handle)}>Remove</button>

                </div>
            ))
                : <div>Cart is Empty</div>
            }

            <Link to="/">Back to homepage</Link>

        </div>
    )
}