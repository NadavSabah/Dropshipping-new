import { Link } from "react-router-dom";

export default function ProductCard({ product, idx }) {
    return (
        <Link to={`/products/${product.handle}`}>
            <div>
                {product.images.length > 0 ?
                    <img style={{ width: '150px' }} className="img-fluid" loading="lazy" src={product.images[0].url} />
                    : <p>No image provided</p>
                }
                <p>Title:{product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>

            </div>
        </Link>
    )
}