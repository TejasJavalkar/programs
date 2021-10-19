import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminHome from "./components/AdminHome";
import Footer from "./pages/Footer";
import Profile from "./pages/Profile";
import AdminOrderDetails from "./components/AdminOrderDetails";

function App() {
  return (
    <div>
      <Router>
        <Home />
        <div className="dropdown-divider"></div>
        <main>
          <Route path="/" component={AdminHome} exact />
          <Route path="/profile" component={Profile} />
          <Route path="/orders" component={AdminOrderDetails} />
        </main>
        <div className="dropdown-divider"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
