import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, getCart } from '../cart'

let cart = getCart()

export default function CartPage() {
    const [cart, setCart] = useState({});
    useEffect(() => {
        console.log('the component is mount')
        setCart(getCart())

    }, [cart])
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            <h1>Cart Page</h1>
            {cart.products?.length > 0 ? cart.products.map(product => (
                <div>
                    <img height="100" width="100" src={product.images[0].url} alt="" />
                    <div>Title: {product.title}</div>
                    <div>Qty: {product.quantity}</div>
                    <div>Price{product.price}</div>
                    <button onClick={() => removeFromCart(product.handle)}>Remove</button>

                </div>
            ))
                : <div>Cart is Empty</div>
            }

            <Link to="/">Back to homepage</Link>

        </div>
    )
}