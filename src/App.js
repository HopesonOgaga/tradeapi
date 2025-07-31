import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages";
import Form from "./pages/form";
import PaymentConfirmation from "./pages/paymentconfirmation";
import Login from "./components/login";
import SignIn from "./components/signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/payment" element={<PaymentConfirmation></PaymentConfirmation>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignIn></SignIn>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
