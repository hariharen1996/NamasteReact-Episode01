// Using ReactJS
//Simple Coding
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(heading);

//Complex Coding
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
