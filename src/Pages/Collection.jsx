import { useParams } from "react-router-dom";
import { getCollection, getProducts } from "../data";
import ProductCard from "../Components/ProductCard";

export default function Collection() {

    let params = useParams();
    let collection = getCollection(params.collectionHandle)
    let products = getProducts()
    console.log('products:', products)


    return (
        <div className="w-100">
            <h1> This is a single collection cpmp - Handle  {collection.handle}- {params.collectionHandle}</h1>

            {
                collection.products?.map((product, idx) => (
                    <ProductCard key={collection.handle + idx} product={product} idx={idx} />

                ))
            }

            {/* <h5> Remember Url params are only string</h5>
            <ul>
                <li>Index routes render in the parent routes outlet at the parent route's path. </li>
                <li>Index routes match when a parent route matches but none of the other children match.</li>
                <li>Index routes are the default child route for a parent route.</li>
                <li>Index routes render when the user hasn't clicked one of the items in a navigation list yet.</li>
            </ul> */}
        </div>
    )
}