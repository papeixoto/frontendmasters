import { createRoot } from "react-dom/client";
import Order from "./Order";

// app component
const App = () => {
  // returns an element div that inside has an h1 with Padre Gino's
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
