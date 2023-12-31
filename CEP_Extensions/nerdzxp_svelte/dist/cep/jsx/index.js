(function (thisObj) {// ----- EXTENDSCRIPT INCLUDES ------ //"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();// ---------------------------------- //// ----- EXTENDSCRIPT PONYFILLS -----function __objectFreeze(obj) { return obj; }// ---------------------------------- //var version = "0.0.1";

var config = {
  version: version,
  id: "com.nerdzxp.cep",
  displayName: "Nerdzxp",
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
    panelDisplayName: "Nerdzxp",
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
  flipVertical: flipVertical
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
})(this);//# sourceMappingURL=index.js.map
