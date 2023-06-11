import { useEffect, useState } from "react";
import { os, path } from "../lib/cep/node";
import {
  csi,
  evalES,
  evalFile,
  openLinkInBrowser,
  subscribeBackgroundColor,
  evalTS,
} from "../lib/utils/bolt";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import tsLogo from "../assets/typescript.svg";
import sassLogo from "../assets/sass.svg";

import bolt from "../assets/bolt-cep.svg";

import "./main.scss";

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");
  const [count, setCount] = useState(0);

  const explode = () => {
    evalTS("explodeShapeLayers").then((res) => {
      console.log(res);
    });
  };

  const flipHorizontal = () => {
    evalTS("flipHorizontal").then((res) => {
      console.log(res);
    });
  };

  const flipVertical = () => {
    evalTS("flipVertical").then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
    }
  }, []);

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <header className="app-header">
        <div className="stack-icons">
          <div>
            <img src={viteLogo} />
            Vite
          </div>
          +
          <div>
            <img src={reactLogo} />
            React
          </div>
          +
          <div>
            <img src={tsLogo} />
            TypeScript
          </div>
          +
          <div>
            <img src={sassLogo} />
            Sass
          </div>
        </div>
        <div className="button-group">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </button>
        </div>
        <p>
          Edit <code>main.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <button
            className="app-link"
            onClick={() => openLinkInBrowser("https://reactjs.org")}
          >
            React Docs
          </button>
          {" | "}
          <button
            className="app-link"
            onClick={() =>
              openLinkInBrowser("https://vitejs.dev/guide/features.html")
            }
          >
            Vite Docs
          </button>
          <div className="sherbetButtons">
            <button
              className="learn-more"
              onClick={explode}>Explode 💣</button>
            <button
              className="learn-more"
              onClick={flipHorizontal}>Flip X</button>
            <button
              className="learn-more"
              onClick={flipVertical}>Flip Y</button>
          </div>
        </p>
      </header>
    </div>
  );
};

export default Main;