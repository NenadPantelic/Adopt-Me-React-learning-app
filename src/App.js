import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Rex" animal="Dog" breed="Middleasian shephard" />
      <Pet name="Jack" animal="Parrot" breed="Ara" />
      <Pet name="Lexi" animal="Cat" breed="Mixed" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
