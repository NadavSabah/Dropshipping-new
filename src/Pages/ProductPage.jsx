import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProductByHandle } from "../data";
export default function ProductPage() {

    let params = useParams()
    let product = getProductByHandle(params.productHandle)

    return (
        <div style={{ backgroundColor: 'green' }}>
            <h1>{product.title}</h1>
            <img src={product.images[0].url} alt="" />
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button> Order Now</button>
            <Link to="/">Back to homepage</Link>


        </div>
    )
}