import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages";
import Form from "./pages/form";
import PaymentConfirmation from "./pages/paymentconfirmation";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/payment" element={<PaymentConfirmation></PaymentConfirmation>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
