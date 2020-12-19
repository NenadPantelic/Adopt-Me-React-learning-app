const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Rex",
      animal: "Dog",
      breed: "Midleasian shephard",
    }),
    React.createElement(Pet, {
      name: "Jack",
      animal: "Parrot",
      breed: "Ara",
    }),
    React.createElement(Pet, {
      name: "Lexi",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
