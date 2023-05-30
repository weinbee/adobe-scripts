/**
 * This script is provided free of charge for VCT278 students. Hit me up at nhartmann@shoreline.edu with questions and I'll MAKE A NEW VERSION FOR YA
 */

(function createDockablePanel(thisObj)
{
  function buildUI(thisObj)
  {
    var panel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined,
    {
      resizeable: true
    });
    /********************************************
     * UI Elements
     ********************************************/
    // Add your UI elements to the panel here
    var buttonSize = [15, 15];
    var window = panel;
    window.orientation = "column";

    // This line initalizes the copied keyframe counter for the cev script.
    var selectedKeys = [];

    // Main UI Group for RIPRAP
    var panelOne = window.add("panel", undefined, "REPO");
    panelOne.orientation = "column";

    // UI Group for pasteMultipleKeyframes Button
    var panelFour = window.add("panel", undefined, "Paste Multiple Keyframes");
    panelFour.orientation = "row";

    // Create the 'pasteMultipleKeyframes' button
    var pasteMultipleKeyframesButton = panelFour.add("button", [10, 10, 150, 30], "Paste Multiple Keyframes");

// PANEL_CEV
// ========
var panelCEV = window.add("panel", undefined, undefined,
{
  name: "panelCEV"
});
panelCEV.text = "CEV";
panelCEV.orientation = "column";
panelCEV.alignChildren = ["left", "center"];
panelCEV.spacing = 5;
panelCEV.margins = 10;

// Button group
var buttonGroup = panelCEV.add("group", undefined, {
  name: "buttonGroup"
});
buttonGroup.orientation = "row";
buttonGroup.alignChildren = ["left", "center"];
buttonGroup.spacing = 1;
buttonGroup.margins = 1;

// Icon buttons
var buttonC = buttonGroup.add("button", [0, 0, 30, 20], "C", {
  name: "buttonC",
});

var buttonE = buttonGroup.add("button", [0, 0, 30, 20], "E", {
  name: "buttonE",
});

var buttonV = buttonGroup.add("button", [0, 0, 30, 20], "V", {
  name: "buttonV",
});

// After creating the 'V' button...
var keyframeCountText = buttonGroup.add("statictext", undefined, "0");
keyframeCountText.characters = 2;  // Adjust this value for your needs


    // Main UI Group for Easement and aNullment
    var panelTwoThree = window.add("group");
    panelTwoThree.orientation = "column";
    panelTwoThree.alignChildren = ["center", "top"];
    
    // Custom symbols
    var buttonSymbols = [
      ["■", "■", "■"],
      ["■", "■", "■"],
      ["■", "■", "■"]
    ];
    // Updated button creation code block
    for (var i = 0; i < 3; i++)
    {
      var row = panelOne.add("group");
      row.orientation = "row";
      for (var j = 0; j < 3; j++)
      {
        var button = row.add("button", undefined, buttonSymbols[i][j]);
        button.size = buttonSize;
        button.col = i;
        button.row = j;
        button.onClick = function()
        {
          var ignoreMasks = false; // You can set this to true if you want to ignore masks
          moveAnchor(this.col, ignoreMasks, this.row);
          app.activate(); // Activate the After Effects main window
        };
      }
    }
    // UI Group for createANull script
    var panelThree = panelTwoThree.add("panel", undefined, "aNullment & asSortment");
    panelThree.orientation = "row";
    var nullButton = panelThree.add("button", [10, 10, 50, 30], "NULL");
    nullButton.onClick = function()
    {
      createANull();
      app.activate();
    };
    // Add the new UI group for the 'sort' button here
    // UI Group for Sort Button
    var panelSort = panelThree.add("group"); // Add the sort panel to panelThree (aNullment panel)
    panelSort.orientation = "row";
    // Create the 'sort' button
    var sortButton = panelSort.add("button", [10, 10, 50, 30], "SORT");
    // UI Group - Easement
    var panelTwo = panelTwoThree.add("panel", undefined, "Easement");
    panelTwo.orientation = "column";
    var sliderGroup = panelTwo.add("group");
    sliderGroup.orientation = "row";
    // Slider for Easing
    var slider = sliderGroup.add("slider", [10, 10, 150, 30], 0, 0, 100);
    slider.value = 70;
    slider.stepdelta = 1;
    slider.preferredSize.width = 100; // Set the preferred width for the slider

    // Decrease the space between the slider and the 'value' text by modifying the left position value
    var valueText = sliderGroup.add("edittext", undefined, slider.value.toFixed(0));
    valueText.bounds = [90, 10, 150, 30]; // [left edge, top edge, right edge, bottom edge]
    valueText.preferredSize.width = 30; // Set the preferred width for the value text
    slider.onChanging = function()
    {
      valueText.text = this.value.toFixed(0);
    };
    // Easing buttons
    var buttonsGroup = panelTwo.add("group");
    buttonsGroup.orientation = "row";
    /* So, if you have bounds = [10, 20, 50, 60], it means the UI element is positioned 10 units from the left and 20 units from the top of its parent container. The right edge of the UI element is 50 units from the left edge of its parent container, making the element 40 units wide (50-10). Similarly, the bottom edge of the UI element is 60 units from the top edge of its parent container, making the element 40 units tall (60-20). */
    var button1 = buttonsGroup.add("button", [10, 10, 35, 35], "<");
    button1.graphics.font = ScriptUI.newFont("Arial", "Bold", 14); // these new lines include font family, style, and size!
    
    var button2 = buttonsGroup.add("button", [50, 10, 75, 35], "<>");
    button2.graphics.font = ScriptUI.newFont("Arial", "Bold", 14);
    
    var button3 = buttonsGroup.add("button", [90, 10, 115, 35], ">");
    button3.graphics.font = ScriptUI.newFont("Arial", "Bold", 14);
    

    /********************************************
     * Event Handlers
     ********************************************/

    // 'applyEasing' event handlers
    button1.onClick = function()
    {
      applyEasing(parseFloat(valueText.text), 'in');
      app.activate();
    };
    button2.onClick = function()
    {
      applyEasing(parseFloat(valueText.text), 'both');
      app.activate();
    };
    button3.onClick = function()
    {
      applyEasing(parseFloat(valueText.text), 'out');
      app.activate();
    };
    valueText.addEventListener('focus', function()
    {
      valueText.active = true;
      valueText.selectAll();
    });
    // 'sort' event handlers
    sortButton.onClick = function()
    {
      sortProjectItems();
      app.activate();
    };

    // 'kcp' panel event handlers
    pasteMultipleKeyframesButton.onClick = function()
    {
      var comp = app.project.activeItem;
      var selectedProps = comp.selectedProperties;
      pasteMultipleKeyframes(selectedProps);
      app.activate(); // Activate the main After Effects window
    };

// 'CEV' panel event handlers (now for buttons 'c', 'e', and 'v')
buttonC.onClick = function() {
    cevCopyKeyframes();
    // After copying the keyframes, update the static text
    if (selectedKeys.length > 99) {
      keyframeCountText.text = "you can't select above 99 keyframes :/";
      alert("you can't select above 99 keyframes :/");
    } else {
      keyframeCountText.text = selectedKeys.length.toString();
    }
    app.activate();
  };
    buttonE.onClick = function() {
      cevPasteKeyframesEasing();
      app.activate();
    };
    buttonV.onClick = function() {
      cevPasteKeyframesValues();
      app.activate();
    };

    /********************************************
     * Functions
     ********************************************/
    function sortProjectItems()
    {
      app.beginUndoGroup('Sort Project Items'); // Start the undo group
      var project = app.project;
      var items = project.items;
      var itemsArray = [];
      for (var i = 1; i <= items.length; i++)
      {
        itemsArray.push(items[i]);
      }
      var audioExtensions = ['wav', 'aac', 'm4a', 'aif', 'aiff', 'mp3', 'mpeg', 'mpg', 'mpa', 'mpe'];
      var videoExtensions = ['crm', 'mxf', 'mov', '3gp', '3g2', 'amc', 'swf', 'flv', 'f4v', 'gif',
        'm2ts', 'dv', 'avi', 'm4v', 'mpg', 'mpe', 'mpa', 'mpv', 'mod', 'm2p',
        'm2v', 'm2a', 'm2t', 'mp4', 'wmv', 'wma'
      ];
      var imageExtensions = ['ai', 'eps', 'ps', 'pdf', 'psd', 'bmp', 'rle', 'dib', 'tif', 'crw', 'nef', 'raf',
        'orf', 'mrw', 'dcr', 'mos', 'raw', 'pef', 'srf', 'dng', 'x3f', 'cr2', 'erf',
        'cin', 'dpx', 'gif', 'rla', 'rpf', 'img', 'ei', 'iff', 'tdi', 'jpg', 'jpe',
        'heif', 'heic', 'ma', 'exr', 'pcx', 'png', 'hdr', 'rgbe', 'xyze', 'sgi',
        'bw', 'rgb', 'pic', 'tga', 'vda', 'icb', 'vst'
      ];
      var aiAndPsdExtensions = ['ai', 'psd', 'psb'];
      var folderTypes = {
        Audio:
        {
          name: 'Audio',
          found: false
        },
        Compositions:
        {
          name: 'Compositions',
          found: false
        },
        Images:
        {
          name: 'Images',
          found: false
        },
        NullsAndSolids:
        {
          name: 'Nulls & Solids',
          found: false
        },
        Video:
        {
          name: 'Video',
          found: false
        },
        Other:
        {
          name: 'Other',
          found: false
        },
        OldFolders:
        {
          name: 'Old Folders',
          found: false
        },
        AI_PSD:
        {
          name: 'AI & PSD',
          found: false
        },
      };
      for (var i = itemsArray.length - 1; i >= 0; i--)
      {
        var item = itemsArray[i];
        if (item instanceof FolderItem)
        {
          // Skip the folders we created
          if (isFolderInFolderTypes(item, folderTypes)) continue;
          item.parentFolder = getOrCreateFolder(folderTypes.OldFolders.name);
          folderTypes.OldFolders.found = true;
        }
        else if (item instanceof FootageItem)
        {
          var fileExt = getFileExtension(item.name).toLowerCase();
          if (indexOfArray(imageExtensions, fileExt) !== -1)
          {
            item.parentFolder = getOrCreateFolder(folderTypes.Images.name);
            folderTypes.Images.found = true;
          }
          else if (indexOfArray(audioExtensions, fileExt) !== -1)
          {
            item.parentFolder = getOrCreateFolder(folderTypes.Audio.name);
            folderTypes.Audio.found = true;
          }
          else if (indexOfArray(videoExtensions, fileExt) !== -1)
          {
            item.parentFolder = getOrCreateFolder(folderTypes.Video.name);
            folderTypes.Video.found = true;
          }
          else if (indexOfArray(aiAndPsdExtensions, fileExt) !== -1)
          {
            item.parentFolder = getOrCreateFolder(folderTypes.AI_PSD.name);
            folderTypes.AI_PSD.found = true;
          }
          else if (fileExt === '')
          {
            item.parentFolder = getOrCreateFolder(folderTypes.Other.name);
            folderTypes.Other.found = true;
          }
          // Check for solid and null layers
          if (item.mainSource instanceof SolidSource)
          {
            item.parentFolder = getOrCreateFolder(folderTypes.NullsAndSolids.name);
            folderTypes.NullsAndSolids.found = true;
          }
        }
        else if (item instanceof CompItem)
        {
          item.parentFolder = getOrCreateFolder(folderTypes.Compositions.name);
          folderTypes.Compositions.found = true;
        }
      }
      // Remove folders that aren't needed anymore
      for (var key in folderTypes)
      {
        if (folderTypes.hasOwnProperty(key) && !folderTypes[key].found)
        {
          var folder = findFolder(folderTypes[key].name);
          if (folder) folder.remove();
        }
      }

      function getOrCreateFolder(folderName)
      {
        for (var i = 1; i <= items.length; i++)
        {
          if (items[i] instanceof FolderItem && items[i].name === folderName)
          {
            items[i].twirled = false; // Twiddle the existing folder closed
            return items[i];
          }
        }
        return items.addFolder(folderName);
      }

      function findFolder(folderName)
      {
        for (var i = 1; i <= items.length; i++)
        {
          if (items[i] instanceof FolderItem && items[i].name === folderName)
          {
            return items[i];
          }
        }
        return null;
      }

      function getFileExtension(fileName)
      {
        var lastIndex = fileName.lastIndexOf('.');
        return lastIndex !== -1 ? fileName.slice(lastIndex + 1) : '';
      }

      function isFolderInFolderTypes(folder, folderTypes)
      {
        for (var key in folderTypes)
        {
          if (folderTypes.hasOwnProperty(key) && folderTypes[key].name === folder.name)
          {
            return true;
          }
        }
        return false;
      }

      function indexOfArray(array, value)
      {
        for (var i = 0; i < array.length; i++)
        {
          if (array[i] === value)
          {
            return i;
          }
        }
        return -1;
      }
      app.activate();
      app.endUndoGroup(); // End the undo group
    }

    function moveAnchor(col, ignoreMasks, row)
    {
      app.beginUndoGroup("Move Anchor Point");
      var mainComp = app.project.activeItem;
      var curTime = app.project.activeItem.time;
      var theLayers = app.project.activeItem.selectedLayers;
      for (var num = 0; num < theLayers.length; num += 1)
      {
        var theLayer = theLayers[num];
        var noMasks = true;
        if (ignoreMasks === true)
        {
          noMasks = true;
        }
        else
        {
          if (theLayer.mask.numProperties !== 0)
          {
            for (var i = 1; i <= theLayer.mask.numProperties; i += 1)
            {
              if (theLayer.mask(i).maskMode != MaskMode.NONE)
              {
                noMasks = false;
              }
            }
          }
        }
        if (noMasks)
        {
          switch (row)
          {
            case 0:
              x = 0;
              break;
            case 1:
              x = theLayer.sourceRectAtTime(curTime, false).width / 2;
              break;
            case 2:
              x = theLayer.sourceRectAtTime(curTime, false).width;
              break;
            default:
          }
          switch (col)
          {
            case 0:
              y = 0;
              break;
            case 1:
              y = theLayer.sourceRectAtTime(curTime, false).height / 2;
              break;
            case 2:
              y = theLayer.sourceRectAtTime(curTime, false).height;
              break;
            default:
          }
          if ((theLayer instanceof TextLayer) || (theLayer instanceof ShapeLayer))
          {
            x += theLayer.sourceRectAtTime(curTime, false).left;
            y += theLayer.sourceRectAtTime(curTime, false).top;
          }
        }
        else
        {
          var xBounds = Array();
          var yBounds = Array();
          var numMasks = theLayer.mask.numProperties;
          for (var f = 1; f <= numMasks; f += 1)
          {
            var numVerts = theLayer.mask(f).maskShape.value.vertices.length;
            if (theLayer.mask(f).maskMode == MaskMode.NONE)
            {
              continue;
            }
            for (var j = 0; j < numVerts; j += 1)
            {
              var curVerts = theLayer.mask(f).maskShape.valueAtTime(curTime, false).vertices[j];
              xBounds.push(curVerts[0]);
              yBounds.push(curVerts[1]);
            }
          }
          xBounds.sort((function(a, b)
          {
            return a - b;
          }));
          yBounds.sort((function(a, b)
          {
            return a - b;
          }));
          var xl = xBounds.shift();
          var xh = xBounds.pop();
          var yl = yBounds.shift();
          var yh = yBounds.pop();
          if ((theLayer instanceof TextLayer) || (theLayer instanceof ShapeLayer))
          {
            var xl2 = theLayer.sourceRectAtTime(curTime, false).left;
            var xh2 = xl2 + theLayer.sourceRectAtTime(curTime, false).width;
            var yl2 = theLayer.sourceRectAtTime(curTime, false).top;
            var yh2 = yl2 + theLayer.sourceRectAtTime(curTime, false).height;
            if (xl < xl2)
            {
              xl = xl2;
            }
            if (xh > xh2)
            {
              xh = xh2;
            }
            if (yl < yl2)
            {
              yl = yl2;
            }
            if (yh > yh2)
            {
              yh = yh2;
            }
          }
          switch (row)
          {
            case 0:
              x = xl;
              break;
            case 1:
              x = xl + ((xh - xl) / 2);
              break;
            case 2:
              x = xh;
              break;
            default:
          }
          switch (col)
          {
            case 0:
              y = yl;
              break;
            case 1:
              y = yl + ((yh - yl) / 2);
              break;
            case 2:
              y = yh;
              break;
            default:
          }
        }
        if (theLayer.anchorPoint.isTimeVarying)
        {
          var theComp = app.project.activeItem;
          theLayer.anchorPoint.setValueAtTime(theComp.time, [x, y]);
        }
        else
        {
          var curAnchor = theLayer.anchorPoint.value;
          var xMove = (x - curAnchor[0]) * (theLayer.scale.value[0] / 100);
          var yMove = (y - curAnchor[1]) * (theLayer.scale.value[1] / 100);
          var posEx = false;
          if (theLayer.position.expressionEnabled)
          {
            theLayer.position.expressionEnabled = false;
            posEx = true;
          }
          var dupLayer = theLayer.duplicate();
          var oldParent = theLayer.parent;
          dupLayer.moveToEnd();
          if (dupLayer.scale.isTimeVarying)
          {
            dupLayer.scale.setValueAtTime(app.project.activeItem.time, [100, 100]);
          }
          else
          {
            dupLayer.scale.setValue([100, 100]);
          }
          theLayer.parent = dupLayer;
          theLayer.anchorPoint.setValue([x, y]);
          if (theLayer.position.isTimeVarying)
          {
            var numKeys = theLayer.position.numKeys;
            for (var k = 1; k <= numKeys; k += 1)
            {
              curPos = theLayer.position.keyValue(k);
              curPos[0] += xMove;
              curPos[1] += yMove;
              theLayer.position.setValueAtKey(k, curPos);
            }
          }
          else
          {
            curPos = theLayer.position.value;
            theLayer.position.setValue([curPos[0] + xMove, curPos[1] + yMove, curPos[2]]);
          }
          theLayer.parent = oldParent;
          if (posEx)
          {
            theLayer.position.expressionEnabled = true;
          }
          dupLayer.remove();
        }
      }
      app.endUndoGroup();
    }

    function applyEasing(value, type)
    {
      var comp = app.project.activeItem;
      if (!comp || !(comp instanceof CompItem))
      {
        alert("Please select a composition.");
        return;
      }
      app.beginUndoGroup("Apply Easing");
      var selectedLayers = comp.selectedLayers;
      for (var i = 0; i < selectedLayers.length; i++)
      {
        var layer = selectedLayers[i];
        var selectedProperties = layer.selectedProperties;
        for (var j = 0; j < selectedProperties.length; j++)
        {
          var prop = selectedProperties[j];
          if (prop.canVaryOverTime)
          {
            for (var k = 0; k < prop.selectedKeys.length; k++)
            {
              var keyIndex = prop.selectedKeys[k];
              var easeIn = prop.keyInTemporalEase(keyIndex);
              var easeOut = prop.keyOutTemporalEase(keyIndex);
              var updatedEaseIn = [];
              var updatedEaseOut = [];
              for (var e = 0; e < easeIn.length; e++)
              {
                var newEaseIn = easeIn[e];
                var newEaseOut = easeOut[e];
                if (type === 'in' || type === 'both')
                {
                  newEaseIn.influence = value;
                  newEaseIn.speed = 0; // Set speed to 0
                }
                if (type === 'out' || type === 'both')
                {
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

    function createANull()
    {
      var mainComp = app.project.activeItem;
      if ((!mainComp) || (!(mainComp instanceof CompItem)))
      {
        alert("Please select nothing--I should still work.");
        return false;
      }
      else
      {
        if (mainComp.selectedLayers.length < 1)
        {
          nullToComp(mainComp);
          return false;
        }
      }
      removeParents();
    }
    
    function removeParents()
    {
      app.beginUndoGroup("Null");
      var theLayers = app.project.activeItem.selectedLayers;
      for (var num = 0; num < theLayers.length; num += 1)
      {
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
        newNull.label = 7;
        newNull.anchorPoint.setValue([newNull.width / 2, newNull.height / 2]);
    
        if (selectedLayers.length > 0) {
          var sortedLayers = selectedLayers.slice(0);
          sortedLayers.sort(function (a, b) {
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
    
        
    function getSelectedLayersBounds(selectedLayers)
    {
      var xmin = xmax = selectedLayers[0].property("Position").value[0];
      var ymin = ymax = selectedLayers[0].property("Position").value[1];
      for (var num = 0; num < selectedLayers.length; num += 1)
      {
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
    
    function nullToComp(mainComp)
    {
      app.beginUndoGroup("Null");
      var nullCounter = 1;
      while (mainComp.layer("NULL CONTROL " + nullCounter) != null)
      {
        nullCounter++;
      }
      var target = mainComp.layers.addNull();
      target.name = "NULL CONTROL " + nullCounter;
      target.label = 7;
      target.property("Position").setValue([mainComp.width / 2, mainComp.height / 2]);
      target.anchorPoint.setValue([target.width / 2, target.height / 2]);
      app.endUndoGroup();
    }
     
    function pasteMultipleKeyframes(selectedProps) {
      var comp = app.project.activeItem;
      if (!(comp instanceof CompItem)) {
        alert("Please select a composition to paste keyframes.");
        return;
      }
      if (selectedProps.length === 0) {
        alert("Please select at least one property to paste keyframes.");
        return;
      }
    
      var pasteTime = comp.time;
      app.beginUndoGroup("Paste Multiple Keyframes");
      
      // calculate the time difference between the playhead and the first keyframe
      var firstKeyTime = selectedProps[0].keyTime(selectedProps[0].selectedKeys[0]);
      var timeDifference = pasteTime - firstKeyTime;
      
      for (var i = 0; i < selectedProps.length; i++) {
        var prop = selectedProps[i];
        var propKeys = prop.selectedKeys;
        if (propKeys.length === 0) continue;
    
        for (var j = 0; j < propKeys.length; j++) {
          var keyIndex = propKeys[j];
          var keyValue = prop.keyValue(keyIndex);
          var keyTime = prop.keyTime(keyIndex);
    
          // add the time difference to the original keyframe time
          var newKeyTime = keyTime + timeDifference;
    
          var pasteKeyIndex = prop.addKey(newKeyTime);
          prop.setValueAtKey(pasteKeyIndex, keyValue);
    
          // handle keyframe ease values
          if (prop.keyInTemporalEase(keyIndex).length > 0) {
            prop.setTemporalEaseAtKey(pasteKeyIndex, prop.keyInTemporalEase(keyIndex), prop.keyOutTemporalEase(keyIndex));
          }
        }
      }
      app.endUndoGroup();
    }
    
    
    function cevCopyKeyframes()
    {
      selectedKeys = [];
      var selectedLayers = app.project.activeItem.selectedLayers;
      for (var i = 0; i < selectedLayers.length; i++)
      {
        for (var j = 0; j < selectedLayers[i].selectedProperties.length; j++)
        {
          var property = selectedLayers[i].selectedProperties[j];
          if (property instanceof Property)
          {
            for (var k = 0; k < property.selectedKeys.length; k++)
            {
              var keyIndex = property.selectedKeys[k];
              selectedKeys.push(
              {
                property: property,
                keyIndex: keyIndex,
                keyValue: property.keyValue(keyIndex),
                keyInTemporalEase: property.keyInTemporalEase(keyIndex),
                keyOutTemporalEase: property.keyOutTemporalEase(keyIndex),
              });
            }
          }
        }
      }
    }

    function cevPasteKeyframesEasing()
    {
      app.beginUndoGroup("Paste Easing Only"); // Begin undo group
      if (selectedKeys.length === 0)
      {
        alert('No keyframes copied. Use the "Copy" button first.');
        return;
      }
      var selectedLayers = app.project.activeItem.selectedLayers;
      for (var i = 0; i < selectedLayers.length; i++)
      {
        for (var j = 0; j < selectedLayers[i].selectedProperties.length; j++)
        {
          var property = selectedLayers[i].selectedProperties[j];
          if (property instanceof Property)
          {
            for (var k = 0; k < property.selectedKeys.length; k++)
            {
              var keyIndex = property.selectedKeys[k];
              var copiedKey = selectedKeys[k % selectedKeys.length];
              property.setTemporalEaseAtKey(keyIndex, copiedKey.keyInTemporalEase, copiedKey.keyOutTemporalEase);
            }
          }
        }
      }
      app.endUndoGroup("Paste Easing Only"); // End undo group
    }

    function cevPasteKeyframesValues()
    {
      app.beginUndoGroup("Paste Values Only"); // Begin undo group
      if (selectedKeys.length === 0)
      {
        alert('No keyframes copied. Use the "Copy" button first.');
        return;
      }
      var selectedLayers = app.project.activeItem.selectedLayers;
      for (var i = 0; i < selectedLayers.length; i++)
      {
        for (var j = 0; j < selectedLayers[i].selectedProperties.length; j++)
        {
          var property = selectedLayers[i].selectedProperties[j];
          if (property instanceof Property)
          {
            for (var k = 0; k < property.selectedKeys.length; k++)
            {
              var keyIndex = property.selectedKeys[k];
              var copiedKey = selectedKeys[k % selectedKeys.length];
              property.setValueAtKey(keyIndex, copiedKey.keyValue);
            }
          }
        }
      }
      app.endUndoGroup("Paste Values Only"); // End undo group
    }
    return panel;
  }
  var scriptPal = buildUI(thisObj);
  if ((scriptPal !== null) && (scriptPal instanceof Window))
  {
    scriptPal.center();
    scriptPal.show();
  }
  else
  {
    scriptPal.layout.layout(true);
  }
})(this);