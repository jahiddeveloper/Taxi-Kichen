import "./App.css";
import Heading from "./Component/Heading";
import Navbar from "./Component/Navbar";
import States from "./Component/States";

function App() {
  return (
    <>
      <header className="max-w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kichen Room</Heading>
      </section>
      <section>
        <States></States>
      </section>
    </>
  );
}

export default App;
