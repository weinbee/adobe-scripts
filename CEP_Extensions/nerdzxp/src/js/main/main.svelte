<script lang="ts">
  import { onMount } from "svelte";
  import { os, path } from "../lib/cep/node";
  import {
    csi,
    evalES,
    evalFile,
    openLinkInBrowser,
    subscribeBackgroundColor,
    evalTS,
  } from "../lib/utils/bolt";
  import { explodeShapeLayers } from "../../jsx/aeft/aeft";

  // import nodeJs from "../assets/node-js.svg";

  import "../index.scss";
  import "./main.scss";

  let count: number = 0;
  let backgroundColor: string = "#282c34";

  //* Demonstration of Traditional string eval-based ExtendScript Interaction
  const jsxTest = () => {
    console.log(evalES(`helloWorld("${csi.getApplicationID()}")`));
  };

  // //* Demonstration of End-to-End Type-safe ExtendScript Interaction
  // const jsxTestTS = () => {
  //   evalTS("helloStr", "test").then((res) => {
  //     console.log(res);
  //   });
  //   evalTS("helloNum", 1000).then((res) => {
  //     console.log(typeof res, res);
  //   });
  //   evalTS("helloArrayStr", ["ddddd", "aaaaaa", "zzzzzzz"]).then((res) => {
  //     console.log(typeof res, res);
  //   });
  //   evalTS("helloObj", { height: 90, width: 100 }).then((res) => {
  //     console.log(typeof res, res);
  //     console.log(res.x);
  //     console.log(res.y);
  //   });
  //   evalTS("helloError", "test").catch((e) => {
  //     console.log("there was an error", e);
  //   });
  // };

  // const nodeTest = () => {
  //   alert(
  //     `Node.js ${process.version}\nPlatform: ${
  //       os.platform
  //     }\nFolder: ${path.basename(window.cep_node.global.__dirname)}`
  //   );
  // };

  // onMount(() => {
  //   if (window.cep) {
  //     subscribeBackgroundColor((c: string) => (backgroundColor = c));
  //   }
  // });

  const explode = () => {
    explodeShapeLayers();
  };
</script>

<div class="app" style="background-color: {backgroundColor};">
  <header class="app-header">
    <div class="button-group">
      <button on:click={() => (count += 1)}>Count is: {count}</button>
    </div>
    <div>
      <button
        class="learn-more"
        on:click={async () => {
          const result = await evalTS("explodeShapeLayers");
        }}>Explode 💣</button
      >
    </div>
  </header>
</div>

<style>
  /* Add the button styles here */
  :root {
    --bg: #fff;
    --text: #382b22;
    --light-pink: #fff0f0;
    --pink: #ffe9e9;
    --dark-pink: #f9c4d2;
    --pink-border: #b18597;
  }

  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
  }

  .learn-more {
    font-weight: 600;
    color: var(--text);
    text-transform: uppercase;
    padding: 1em 1.2em;
    background: var(--light-pink);
    /* border: 2px solid var(--pink-border);
    border-radius: 0.75em; */
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      background 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  .learn-more::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--dark-pink);
    border-radius: inherit;
    /* box-shadow: 0 0 0 2px var(--pink-border), 0 0.625em 0 0 var(--pink-shadow); */
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  .learn-more:hover {
    background: var(--pink);
    transform: translate(0, 0.25em);
  }

  .learn-more:hover::before {
    box-shadow: 0 0 0 2px var(--pink-border), 0 0.5em 0 0 var(--pink-shadow);
    transform: translate3d(0, 0.5em, -1em);
  }

  .learn-more:active {
    background: var(--pink);
    transform: translate(0em, 0.75em);
  }

  .learn-more:active::before {
    box-shadow: 0 0 0 2px var(--pink-border), 0 0 var(--pink-shadow);
    transform: translate3d(0, 0, -1em);
  }
</style>
