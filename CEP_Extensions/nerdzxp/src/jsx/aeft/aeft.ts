import {
  helloError,
  helloStr,
  helloNum,
  helloArrayStr,
  helloObj,
} from "../utils/samples";
export { helloError, helloStr, helloNum, helloArrayStr, helloObj };

export const helloWorld = () => {
  alert("Hello from After Effects!");
  app.project.activeItem;
};

//#region explodeShapeLayers
export function explodeShapeLayers() {
  let comp: CompItem; 
  let layer; 

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

  var x: number;
  var y: number;
  var d: number;

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

      for (var k = 2; k <= (shapeContents.numProperties - d ); k++) {
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

      for (var k = 1; k <= (shapeContents.numProperties - d ); k++) {
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