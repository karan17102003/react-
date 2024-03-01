const hading = React.createElement("div", { id: "div", xyz: "abc" }, [
  React.createElement(
    "h1",
    { id: "hading", xyz: "abc" },
    "Hello World from react"
  ),
  React.createElement(
    "h2",
    { id: "hading", xyz: "abc" },
    "Hello World from react h2"
  )
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(hading);

