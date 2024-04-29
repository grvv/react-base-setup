import React from "react";
import ReactDOM from "react-dom";
import { TestComponent } from "./components/Test";

function Main() {
  return (
    <div>
      <h1>Hello World From My Own Webpack Setup! Heheheh!</h1>
      <TestComponent />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
