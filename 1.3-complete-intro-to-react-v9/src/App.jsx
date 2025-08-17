import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

// app component
const App = () => {
  // returns an element div that inside has an h1 with Padre Gino's
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" />
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" />
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" />
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
