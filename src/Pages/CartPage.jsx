import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, getCart } from '../cart'

// let cart = getCart()

export default function CartPage() {
    const [cart, setCart] = useState({});
    useEffect(() => {

        setCart(getCart())

    }, [cart])

    // Check this isn't working
    function removeProductFromCart(handle) {
        console.log('removing product from cart...HAHAHAHA')
        let newCart = removeFromCart(handle)
        console.log('newCart is:', newCart)
        setCart(newCart)
    }
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            <h1>Cart Page</h1>
            {cart.products?.length > 0 ? cart.products.map((product, idx) => (
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