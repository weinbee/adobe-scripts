import { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import '@mui/material/styles';
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

import "./main.scss";

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");
  const [count, setCount] = useState(0);
  const [sliderValue, setSliderValue] = useState(50); // new state for slider value
  const [easeType, setEaseType] = useState(''); // new state for ease type

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

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setSliderValue(newValue[0]); // set the first value if newValue is an array
    } else {
      setSliderValue(newValue); // set the value if newValue is a number
    }
  };

  const applyEasing = () => {
    if (!easeType) {
      alert('Please select an easing type.');
      return;
    }
    evalTS("applyEasing", sliderValue, easeType).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
    }
  }, []);

  const valuetext = (value: number) => {
    return `${value}`;
  }

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
        <div className="slider-container">
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            aria-label="Temperature"
            defaultValue={50}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks={true}
            min={0}
            max={100}
          />
        <button onClick={() => {setEaseType('in'); applyEasing();}}>In</button>
        <button onClick={() => {setEaseType('out'); applyEasing();}}>Out</button>
        <button onClick={() => {setEaseType('both'); applyEasing();}}>Both</button>
        </div>
      </header>
    </div>
  );
};

export default Main;