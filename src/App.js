import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Home from "./pages/Home";
import WithDraw from "./pages/WithDraw";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui top attached pointing menu">
        <NavLink className="item" to='/'>
          Home
        </NavLink>
        <NavLink className="item" to="/deposite" >
            Deposit
        </NavLink>
        <NavLink className="item" to="/withdraw">
          Withdraw
        </NavLink>
      </div>
      <Routes>
        <Route path="/" exact element={<Home />}> </Route>
        <Route path="/deposite" exact element={<Deposit />}></Route>
        <Route path="/withdraw" exact element={<WithDraw />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
