import { NavLink, Outlet } from "react-router-dom";
import { getCollections } from "../data";



export default function CollectionPage() {
    let collections = getCollections();
    return (
        <div className="nadav" style={{ backgroundColor: '#fd6464' }}>

            <NavLink to="/">Back to homepage</NavLink>
            <div className="d-flex justify-content-center">
                {collections.map((collection) => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem",
                                color: isActive ? "white" : "",
                            };
                        }}
                        // className={({ isActive }) => isActive ? "red" : "blue"}
                        to={`/collections/${collection.handle}`}
                        key={collection.handle}
                    >
                        {collection.handle}
                    </NavLink>
                ))}
            </div>
            <Outlet />
        </div>
    )
}

