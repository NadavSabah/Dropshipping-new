

import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/collections">Collection Page</Link> |{" "}
                <Link to="/product">Product Page</Link>
                <Link to="/cart">Cart Page</Link>
                <Link to="/">Logo</Link>
            </nav>
            <Outlet />
        </div>
    )
}