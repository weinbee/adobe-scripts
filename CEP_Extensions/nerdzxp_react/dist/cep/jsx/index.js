(function (thisObj) {

var config = {
  version: version,
  id: "com.nerdzxp_react.cep",
  displayName: "Nerdzxp-React",
  symlink: "local",
  port: 3000,
  servePort: 5000,
  startingDebugPort: 8860,
  extensionManifestVersion: 6.0,
  requiredRuntimeVersion: 9.0,
  hosts: [{
    name: "AEFT",
    version: "[0.0,99.9]"
  }, {
    name: "PPRO",
    version: "[0.0,99.9]"
  }, {
    name: "ILST",
    version: "[0.0,99.9]"
  }, {
    name: "PHXS",
    version: "[0.0,99.9]"
  }, {
    name: "FLPR",
    version: "[0.0,99.9]"
  }],
  type: "Panel",
  iconDarkNormal: "./src/assets/light-icon.png",
  iconNormal: "./src/assets/dark-icon.png",
  iconDarkNormalRollOver: "./src/assets/light-icon.png",
  iconNormalRollOver: "./src/assets/dark-icon.png",
  parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
  width: 500,
  height: 550,
  panels: [{
    mainPath: "./main/index.html",
    name: "main",
    panelDisplayName: "Nerdzxp-React",
    autoVisible: true,
    width: 600,
    height: 650
  }],
  build: {
    jsxBin: "off",
    sourceMap: true
  },
  zxp: {
    country: "US",
    province: "CA",
    org: "MyCompany",
    password: "mypassword",
    tsa: "http://timestamp.digicert.com/",
    sourceMap: false,
    jsxBin: "off"
  },
  installModules: [],
  copyAssets: [],
  copyZipAssets: []
};

var ns = config.id;

var helloVoid = function helloVoid() {
  alert("test");
};
var helloError = function helloError(str) {
  // Intentional Error for Error Handling Demonstration
  
  strr;
};
var helloStr = function helloStr(str) {
  alert("ExtendScript received a string: ".concat(str));
  return str;
};
var helloNum = function helloNum(n) {
  alert("ExtendScript received a number: ".concat(n.toString()));
  return n;
};
var helloArrayStr = function helloArrayStr(arr) {
  alert("ExtendScript received an array of ".concat(arr.length, " strings: ").concat(arr.toString()));
  return arr;
};
var helloObj = function helloObj(obj) {
  alert("ExtendScript received an object: ".concat(JSON.stringify(obj)));
  return {
    y: obj.height,
    x: obj.width
  };
};

var helloWorld$4 = function helloWorld() {
  alert("Hello from After Effects!");
  app.project.activeItem;
};

//#region explodeShapeLayers
function explodeShapeLayers() {
  var comp;
  var layer;
  app.beginUndoGroup("Explode Shape Layers");
  if (!(app.project.activeItem instanceof CompItem)) {
    return;
  }
  comp = app.project.activeItem;
  if (comp.selectedLayers.length <= 0) {
    return;
  }
  layer = comp.selectedLayers[0];
  var shapeContents = layer.property("ADBE Root Vectors Group");
  if (!(shapeContents instanceof PropertyGroup)) {
    return;
  }
  var x;
  var y;
  var d;
  if (layer.selectedProperties.length == 0) {
    for (var i = 1; i <= shapeContents.numProperties; i++) {
      layer.duplicate();
      var duplicate = comp.layer(layer.index - 1);
      duplicate.name = duplicate.property("ADBE Root Vectors Group").property(i).name;
      x = 0;
      y = 0;
      d = 0;
      for (var h = 1; h < i; h++) {
        duplicate.property("ADBE Root Vectors Group").property(h - x).remove();
        x++;
        d++;
      }
      for (var k = 2; k <= shapeContents.numProperties - d; k++) {
        duplicate.property("ADBE Root Vectors Group").property(k - y).remove();
        y++;
      }
    }
  } else if (layer.selectedProperties.length > 0) {
    for (var i = 0; i < layer.selectedProperties.length; i++) {
      layer.duplicate();
      var duplicate = comp.layer(layer.index - 1);
      duplicate.name = layer.selectedProperties[i].name;
      x = 0;
      y = 0;
      d = 0;
      for (var h = 1; h < i; h++) {
        if (duplicate.property("ADBE Root Vectors Group").property(h - x).name != layer.selectedProperties[i].name) {
          duplicate.property("ADBE Root Vectors Group").property(h - x).remove();
          x++;
          d++;
        }
      }
      for (var k = 1; k <= shapeContents.numProperties - d; k++) {
        if (duplicate.property("ADBE Root Vectors Group").property(k - y).name != layer.selectedProperties[i].name) {
          duplicate.property("ADBE Root Vectors Group").property(k - y).remove();
          y++;
        }
      }
    }
  }
  if (comp && layer && layer.enabled) {
    layer.enabled = false;
  }
  app.endUndoGroup();
}
//#endregion explodeShapeLayers

//#region flip horizontal
function flipHorizontal() {
  app.executeCommand(app.findMenuCommandId("Flip Horizontal"));
}
//#endregion flip horizontal

//#region flip vertical
function flipVertical() {
  app.executeCommand(app.findMenuCommandId("Flip Vertical"));
}
//#endregion flip vertical

//#region applyEasing
function applyEasing(value, type) {
  var comp = app.project.activeItem;
  if (!comp || !(comp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }
  app.beginUndoGroup("Apply Easing");
  var selectedLayers = comp.selectedLayers;
  for (var i = 0; i < selectedLayers.length; i++) {
    var layer = selectedLayers[i];
    var selectedProperties = layer.selectedProperties;
    for (var j = 0; j < selectedProperties.length; j++) {
      var prop = selectedProperties[j];
      if (prop.canVaryOverTime) {
        for (var k = 0; k < prop.selectedKeys.length; k++) {
          var keyIndex = prop.selectedKeys[k];
          var easeIn = prop.keyInTemporalEase(keyIndex);
          var easeOut = prop.keyOutTemporalEase(keyIndex);
          var updatedEaseIn = [];
          var updatedEaseOut = [];
          for (var e = 0; e < easeIn.length; e++) {
            var newEaseIn = easeIn[e];
            var newEaseOut = easeOut[e];
            if (type === 'in' || type === 'both') {
              newEaseIn.influence = value;
              newEaseIn.speed = 0; // Set speed to 0
            }

            if (type === 'out' || type === 'both') {
              newEaseOut.influence = value;
              newEaseOut.speed = 0; // Set speed to 0
            }

            updatedEaseIn.push(newEaseIn);
            updatedEaseOut.push(newEaseOut);
          }
          prop.setTemporalEaseAtKey(keyIndex, updatedEaseIn, updatedEaseOut);
        }
      }
    }
  }
  app.endUndoGroup();
}

//#endregion applyEasing

var aeft = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloWorld: helloWorld$4,
  explodeShapeLayers: explodeShapeLayers,
  flipHorizontal: flipHorizontal,
  flipVertical: flipVertical,
  applyEasing: applyEasing
});

var helloWorld$3 = function helloWorld() {
  alert("Hello from Illustrator");
  app.activeDocument.path;
};

var ilst = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld$3
});

var helloWorld$2 = function helloWorld() {
  alert("Hello from Animate");
};

var anim = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloWorld: helloWorld$2
});

var qeDomFunction = function qeDomFunction() {
  if (typeof qe === "undefined") {
    app.enableQE();
  }
  if (qe) {
    qe.name;
    qe.project.getVideoEffectByName("test");
  }
};
var helloWorld$1 = function helloWorld() {
  alert("Hello from Premiere Pro.");
};

var ppro = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  qeDomFunction: qeDomFunction,
  helloWorld: helloWorld$1
});

var helloWorld = function helloWorld() {
  app.activeDocument;
  alert("Hello from Photoshop");
};

var phxs = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld
});

var main;
switch (BridgeTalk.appName) {
  case "premierepro":
  case "premiereprobeta":
    main = ppro;
    break;
  case "aftereffects":
  case "aftereffectsbeta":
    main = aeft;
    break;
  case "illustrator":
  case "illustratorbeta":
    main = ilst;
    break;
  case "photoshop":
  case "photoshopbeta":
    main = phxs;
    break;
  default:
    
    if (app.appName === "Adobe Animate") {
      main = anim;
    }
    break;
}

var host = typeof $ !== "undefined" ? $ : window;
host[ns] = main;
