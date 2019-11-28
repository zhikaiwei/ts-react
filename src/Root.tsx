import React from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";

// mount
let App = Loader;
const MOUNT_NODE: Element | null = document.getElementById("root");
const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

render();
if ((module as any).hot) {
  (module as any).hot.accept("./Loader", () => {
    const NextLoader = require("./Loader").default;
    App = NextLoader;
    setImmediate(() => {
      if (MOUNT_NODE !== null) {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      }
      render();
    });
  });
}
