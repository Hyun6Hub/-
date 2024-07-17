import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Home, About, Skills, Work, Test } from "./components/Main";

export default function Main() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Work />
      <Test />
    </div>
  );
}
