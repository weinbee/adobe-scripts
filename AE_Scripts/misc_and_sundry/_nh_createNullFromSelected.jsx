//=================
// Null Function(s)
//=================
  
      function createANull() {
        var mainComp = app.project.activeItem;
        if ((!mainComp) || (!(mainComp instanceof CompItem))) {
          alert("Please select nothing--I should still work.");
          return false;
        } else {
          if (mainComp.selectedLayers.length < 1) {
            nullToComp(mainComp);
            return false;
          }
        }
        removeParents();
      }
  
      function removeParents() {
        app.beginUndoGroup("Null");
        var theLayers = app.project.activeItem.selectedLayers;
        for (var num = 0; num < theLayers.length; num += 1) {
          var theLayer = theLayers[num];
          theLayer.parent = null;
        }
        nullToItem();
        app.endUndoGroup();
      }
  
      function nullToItem() {
        var activeItem = app.project.activeItem;
        if (activeItem !== null) {
          var selectedLayers = activeItem.selectedLayers;
          var nullCounter = 1;
          while (activeItem.layer("NULL CONTROL " + nullCounter) != null) {
            nullCounter++;
          }
          var newNull = activeItem.layers.addNull();
          newNull.name = "NULL CONTROL " + nullCounter;
          newNull.label = 13;
          newNull.anchorPoint.setValue([newNull.width / 2, newNull.height / 2]);
          if (selectedLayers.length > 0) {
            var sortedLayers = selectedLayers.slice(0);
            sortedLayers.sort(function(a, b) {
              return a.index - b.index; // sort in ascending order
            });
            var lowestLayerIndex = sortedLayers[0].index; // get the lowest index
            newNull.moveBefore(activeItem.layer(lowestLayerIndex)); // move before the lowest indexed layer
            var bounds = getSelectedLayersBounds(selectedLayers);
            newNull.property("Position").setValue([(bounds.xmin + bounds.xmax) / 2, (bounds.ymin + bounds.ymax) / 2]);
            var newInpoint = activeItem.duration;
            var newOutpoint = 0;
            for (var num = 0; num < sortedLayers.length; num += 1) {
              var lay = sortedLayers[num];
              lay.parent = newNull;
              newInpoint = Math.min(newInpoint, lay.inPoint);
              newOutpoint = Math.max(newOutpoint, lay.outPoint);
            }
            newNull.inPoint = newInpoint;
            newNull.outPoint = newOutpoint;
          } else {
            newNull.property("Position").setValue([activeItem.width / 2, activeItem.height / 2]);
          }
        }
      }
  
      function getSelectedLayersBounds(selectedLayers) {
        var xmin = xmax = selectedLayers[0].property("Position").value[0];
        var ymin = ymax = selectedLayers[0].property("Position").value[1];
        for (var num = 0; num < selectedLayers.length; num += 1) {
          var lay = selectedLayers[num];
          var pos = lay.property("Position").value;
          xmin = Math.min(xmin, pos[0]);
          xmax = Math.max(xmax, pos[0]);
          ymin = Math.min(ymin, pos[1]);
          ymax = Math.max(ymax, pos[1]);
        }
        return {
          xmin: xmin,
          xmax: xmax,
          ymin: ymin,
          ymax: ymax
        };
      }
  
      function nullToComp(mainComp) {
        app.beginUndoGroup("Null");
        var nullCounter = 1;
        while (mainComp.layer("NULL CONTROL " + nullCounter) != null) {
          nullCounter++;
        }
        var target = mainComp.layers.addNull();
        target.name = "NULL CONTROL " + nullCounter;
        target.label = 13;
        target.property("Position").setValue([mainComp.width / 2, mainComp.height / 2]);
        target.anchorPoint.setValue([target.width / 2, target.height / 2]);
        app.endUndoGroup();
      }
