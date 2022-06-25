
import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <h1>This is from the app component</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/collections">Collection Page</Link> |{" "}
        <Link to="/product">Product Page</Link>
        <Link to="/cart">Cart Page</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
