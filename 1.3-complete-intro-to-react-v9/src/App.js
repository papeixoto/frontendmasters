const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

// app component
const App = () => {
  // returns an element div that inside has an h1 with Padre Gino's
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      description: "ingredients",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza 2",
      description: "ingredients",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza 3",
      description: "ingredients",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza 4",
      description: "ingredients",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
