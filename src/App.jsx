import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SurfboardList from "./pages/SurfboardList";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/surfboards" element={<SurfboardList />} />
        <Route exact path="/product/:id" element={<SingleProduct />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
