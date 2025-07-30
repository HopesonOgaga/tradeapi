import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages";
import Form from "./pages/form";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/form" element={<Form></Form>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
