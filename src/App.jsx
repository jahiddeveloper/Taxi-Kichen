import { Suspense } from "react";
import "./App.css";
import Heading from "./Component/Heading";
import Navbar from "./Component/Navbar";
import OrderContainer from "./Component/OrderContainer";

let fetchOrder = () => fetch("/orders.json").then((res) => res.json());

function App() {
  let loadOrder = fetchOrder();
  return (
    <>
      <header className="max-w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kichen Room</Heading>
      </section>
      <section>
        <Suspense fallback={<h3>Just a sec</h3>}>
          <OrderContainer loadOrder={loadOrder}></OrderContainer>
        </Suspense>
      </section>
    </>
  );
}

export default App;
