import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ProductPage() {

    let params = useParams()
    console.log('params:', params)

    return (
        <div style={{ backgroundColor: 'green' }}>
            <h1>Product Page</h1>
            <Link to="/">Back to homepage</Link>

        </div>
    )
}