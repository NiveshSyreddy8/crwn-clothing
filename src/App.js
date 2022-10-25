import { Outlet, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/Navigation.component";
import SignIn from "./components/routes/authentication/authentication.component";

const Shop = () => {
  return <h1>I am the shop page </h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
