import "./App.css";
import Heading from "./Component/Heading";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <header className="max-w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <Heading>Kichen Room</Heading>
    </>
  );
}

export default App;
