import { Link } from "react-router-dom";

export default function ProductPage() {
    return (
        <div style={{ backgroundColor: 'green' }}>
            <h1>Product Page</h1>
            <Link to="/">Back to homepage</Link>

        </div>
    )
}