// NERDS v3.X.X
// This script was made with love and provided free of charge for SCC VCT278 students. Hit me up at nhartmann@shoreline.edu with Q's.

(function createDockablePanel(thisObj) {
    function buildUI(thisObj) {
      var panel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {
        resizeable: true
      });

/********************************************
* UI Elements
********************************************/

// Add your UI elements to the panel here
    var buttonSize = [15, 15];
    var window = panel;
        window.orientation = "column";

// MAIN_GROUP (holds all panels)
// =============================
    var mainGroup = window.add("group");
        mainGroup.orientation = "row";
        mainGroup.alignChildren = ["left", "top"];

// PANEL_REPO
// ==========
    var panelOne = mainGroup.add("panel", undefined, "REPO");
        panelOne.orientation = "column";

// PANEL_EASEMENT
// ==============
    var panelTwoThree = window.add("group");
        panelTwoThree.orientation = "column";
        panelTwoThree.alignChildren = ["center", "top"];

// Custom symbols for REPO
    var buttonSymbols = [
        ["■", "■", "■"],
        ["■", "■", "■"],
        ["■", "■", "■"]
    ];
// Updated button creation code block
    for (var i = 0; i < 3; i++) {
        var row = panelOne.add("group");
            row.orientation = "row";
    for (var j = 0; j < 3; j++) {
        var button = row.add("button", undefined, buttonSymbols[i][j]);
            button.size = buttonSize;
        button.col = i;
        button.row = j;
        button.onClick = function() {
        var ignoreMasks = false; // You can set this to true if you want to ignore masks
            moveAnchor(this.col, ignoreMasks, this.row);
            app.activate(); // Activate the After Effects main window
            };
        }
    }

// PANELASSORTMENT
// ===============
var panelAsSortment = window.add("panel", undefined, undefined, {name: "panelAsSortment"});
    panelAsSortment.text = "asSortment"; 
    panelAsSortment.orientation = "column"; 
    panelAsSortment.alignChildren = ["center","center"]; 
    panelAsSortment.spacing = 0; 
    panelAsSortment.margins = 20; 
    panelAsSortment.alignment = ["center","top"]; 

// ROW1BUTTS
// =========
var row1Butts = panelAsSortment.add("group", undefined, {name: "row1Butts"}); 
    row1Butts.orientation = "row"; 
    row1Butts.alignChildren = ["left","center"]; 
    row1Butts.spacing = 5; 
    row1Butts.margins = 0; 

var sortButton = row1Butts.add("button", [10, 10, 45, 30], "Sort");
    sortButton.alignment = ["left","center"]; 
var nullButton = row1Butts.add("button", [10, 10, 45, 30], "Null");
var reverseButton = row1Butts.add("button", [10, 10, 45, 30], "Rvrs");
var loopButton = row1Butts.add("button", [10, 10, 45, 30], "Loop");

// ROW2BUTTS
// =========
    var row2Butts = panelAsSortment.add("group", undefined, {name: "row2Butts"}); 
        row2Butts.orientation = "row"; 
        row2Butts.alignChildren = ["center","center"]; 
        row2Butts.spacing = 0; 
        row2Butts.margins = 0; 

    var iconBlankButt2_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%12%00%00%00%12%08%06%00%00%00V%C3%8E%C2%8EW%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03(iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%205.6-c145%2079.163499%2C%202018%2F08%2F13-16%3A40%3A22%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%20CC%202019%20(Macintosh)%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A600D85EF3FAA11E99731F012F5360853%22%20xmpMM%3ADocumentID%3D%22xmp.did%3A600D85F03FAA11E99731F012F5360853%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3A600D85ED3FAA11E99731F012F5360853%22%20stRef%3AdocumentID%3D%22xmp.did%3A600D85EE3FAA11E99731F012F5360853%22%2F%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%12ywY%00%00%020IDATx%C3%9A%C2%AC%C2%94%3DK%5BQ%18%C3%87%C2%9F%C2%9C%7B%C3%89%C2%92%C3%9CB%C3%A56q%09T%C3%A2%C2%90%C2%A5%16b%3ATc%C2%BF%C2%80%14Zp%C3%AF%C2%A4%0En%16%C3%AB7ht%C2%A8C%C3%9D%C2%9A%C2%A9T%C2%9C%3A%C2%94%167%1D4%C3%94%C2%B9%C2%B5%C2%A1%C2%93b0%26h%1A%C3%AC5%C2%86%C2%82!I%C3%BB%C3%BF_%C3%8E%09%C2%97%10%C2%87%C2%82%0F%C3%BC%C3%A0%C2%9C%C3%B3%C2%BC%C3%9C%C3%B3%C2%BC%C2%9C%1B%C2%9A%C2%9B%C2%9F%C2%97%01%C3%A2%C2%80%110%0A%C2%86%C3%B4%C3%99%058%04%C3%87%C3%A0%C2%AA%C3%9F%C3%81%C3%AE%C3%9B%C3%9F%01%0F%C3%814%C2%98%01%C3%89%3E%C3%BD%11%C3%B8%08%C2%B6%C3%80w%C3%90%18%14%C3%A8.x%0AVm%C3%9B%1E%C2%9E%C2%9C%C2%98%C2%90%07ccr%C3%8Fu%7D%C3%A5%C2%AFz%5D~%1C%1C%24%C2%BF%C3%AE%C3%AF%2F%C2%B7%C3%9B%C3%AD%178Z%06_%C3%80o%C3%AAC%3A5%C3%9E%C3%A4%19x%C2%9FH%24dnvVb%C2%B1%C3%98%C2%A0%C2%94%C2%A5V%C2%AB%C3%89%C2%BB%7C%5E%C3%8A%C3%A52%C2%B7%0C%C3%B8%C2%897SZ%C3%8FtV%19%C3%A4%C3%95%C3%92%C3%92%C2%8DA(%C3%94%C3%91%C2%86%C2%B6%C3%B4%C3%91%C2%BE%C2%A2ta%C2%A7%C2%99%0Eo%12%0E%C2%87%7B_%C2%AE%23%1D%23%5C%C2%9F%C3%A3%C2%8CB%1B%C3%9A%C3%92G%C3%97%C3%93Q%C2%BA%3B3%C2%AC%C2%89%C2%B9%09%C2%83%C2%BC%C3%8E%C3%A5%24%C2%B7%C2%B2%22%C3%95j%C3%95%C2%87%C3%AB%1C%C3%8EL0%C3%9A%C3%92G7e%C3%84%C3%96-N%C2%B2%C2%B0F%C2%94RbY%C2%964%C2%9BMy%C2%B3%C2%B6%C3%A6%C2%9Fq%1D%C2%8DF%C3%85R%C2%AAgG%C2%9F%C3%9D%C2%BD%3DvvT%C2%9991%C3%9D%C2%A1%C2%B8X%C2%BF%5C%5C%C3%B4%1D%11%C2%A0D%C2%B8%C3%A6%C2%99%1B%C2%B0%0B%C3%B8%0C)%C2%B9%25Qzb%C3%BD9%09%16%C2%96)%C3%A9t%C3%AE%13%C2%93f%C2%B0%01%01%C2%9F%0B%C2%A5%C3%87%C3%BE%08%C3%83%C3%963%C3%A8v%C2%BB%C3%92%C3%A9t%C3%84%C2%A4c%C3%92%C3%A4Y%07%3A%23%C3%9A%C2%87%C3%93~h%C2%8Dg2%7FX%C2%96J%C2%A5%C2%92%7D%C2%94%C3%89H%24%12%C3%B1I%C2%A7%C3%93%C3%B2djJ%C3%A2%C3%B1%C2%B88%C2%8E%23%C3%A3%C3%98Of%C2%B3%12%0Ft%C3%B6%C3%83%C3%86%06%3F%C2%9A%C3%87%C3%B6%C2%B3%C3%92%0Fp%0Bc%7F%C3%86%C2%89m%C2%B5Z%C2%BD%C3%B6%C2%BA%7D%0D0AhC%5B%C3%BA%C3%A8ww%C3%85%1BQ%C3%A7%C2%81%C3%93F%C2%A3%C3%B1%C2%BCX%2CJ*%C2%95%C3%B2ou%C3%93%13y%C2%BB%C2%BEn%C2%9E%C3%88%02%C3%98%05%C3%97%26%C3%9058%01%3F%11%C3%ACq%C2%A1P%C2%88%5Ez%C2%88%1D%0A%C3%89_%C3%94%C2%84%C2%85%3E.%C2%95dg%7B%C3%9BO%C3%87%C3%B3%C2%BC3%1D%C2%84%C2%8F%C3%B62%C3%B8ho%C3%B57%22ZQ%00%C3%9F%C3%80%C3%A6%C3%BF%C3%BC%C3%98%C3%BE%090%00%C2%B97%C3%B8g%1C%C3%9D%C2%B3%0F%00%00%00%00IEND%C2%AEB%60%C2%82"; 

    var colorpickerButton = row2Butts.add("button", [10, 10, 45, 30], "Color");
        colorpickerButton.alignment = ["left","center"]; 
    var blinkButton = row2Butts.add("button", [10, 10, 45, 30], "Blink");
        blinkButton.alignment = ["left","center"]; 
    var unblinkButton = row2Butts.add("button", [10, 10, 45, 30], "UnBlink");
        unblinkButton.alignment = ["left","center"]; 
    var iconBlankButt8 = row2Butts.add("iconbutton", undefined, File.decode(iconBlankButt2_imgString), {name: "iconBlankButt8", style: "toolbutton"}); 
        iconBlankButt8.text = "8"; 

// KEY_CLONER_BUTTONS (add to PANELASSORTMENT)
// ===========================================
    var kc_button = panelAsSortment.add("button", undefined, "◆◇\n◆◇");
        kc_button.preferredSize = [50, 70]; // Let the button resize based on the content
        kc_button.alignment = ["left","top"]; 

// PANEL_EASEMENT
// ==============
    var panelTwo = panelTwoThree.add("panel", undefined, "Easement");
        panelTwo.orientation = "column";
    var sliderGroup = panelTwo.add("group");
        sliderGroup.orientation = "row";
// Slider for Easing
    var slider = sliderGroup.add("slider", [10, 10, 150, 30], 0, 0, 100);
        slider.value = 70;
        slider.stepdelta = 1;
        slider.preferredSize.width = 100;
// Decrease the space between the slider and the 'value' text by modifying the left position value
    var valueText = sliderGroup.add("edittext", undefined, slider.value.toFixed(0));
        valueText.bounds = [90, 10, 150, 30]; // [left edge, top edge, right edge, bottom edge]
        valueText.preferredSize.width = 30; // Set the preferred width for the value text
        slider.onChanging = function() {
        valueText.text = this.value.toFixed(0);
      };
// Easing buttons
    var buttonsGroup = panelTwo.add("group");
        buttonsGroup.orientation = "row";
    var button1 = buttonsGroup.add("button", [10, 10, 35, 35], "<");
    var button2 = buttonsGroup.add("button", [50, 10, 75, 35], "<>");
    var button3 = buttonsGroup.add("button", [90, 10, 115, 35], ">");

/********************************************
  * Event Listeners
********************************************/

    // 'nullButton' event handler
      nullButton.onClick = function() {
        createANull();
        app.activate();
      };

      // 'applyEasing' event handlers
      button1.onClick = function() {
        applyEasing(parseFloat(valueText.text), 'in');
        app.activate();
      };
      button2.onClick = function() {
        applyEasing(parseFloat(valueText.text), 'both');
        app.activate();
    };
      button3.onClick = function() {
        applyEasing(parseFloat(valueText.text), 'out');
        app.activate();
    };
      valueText.addEventListener('focus', function() {
        valueText.active = true;
        valueText.selectAll();
    });
      // 'sort' event handlers
      sortButton.onClick = function() {
        sortProjectItems();
        app.activate();
     };
      // 'keyCloner' event handlers
      kc_button.onClick = function() {
        //keyCloner();
        app.activate();
     };

    // 'Loop' button event handler
    loopButton.onClick = function() {
/*  var direction = 'loopOut'; // Default direction
    var method = 'cycle'; // Default method
*/
    loopAtPlayhead(direction, method);
    app.activate();
    };
    // reverse button event handler
    reverseButton.onClick = function() {
        reverseSelectedLayers();
    };

    // 'colorpicker' button event handler
    colorpickerButton.onClick = function() {
      colorPicker();
      app.activate();
    };
    
    // 'blink' button event handler
    blinkButton.onClick = function() {
        blinkSelectedLayers();
        app.activate();
    };

    // 'unblink' button event handler
    unblinkButton.onClick = function() {
        unblinkSelectedLayers();
        app.activate();
    }

/********************************************
  * Functions
********************************************/

// ==============
// Blink Function
// ==============

/**
 * Adds a scene blink controller & blinks selected layers.
 *
 * Modifiers:
 *  - Hold SHIFT to reverse the blink expression on given layers.
 */
function blinkSelectedLayers() {
  var BLINK_CONTROLLER_NAME = "Blink Controller";
  var BLINK_EFFECT_NAME = "Blink";
  var invertBlink = ScriptUI.environment.keyboardState.shiftKey;

  /**
   * Gets or creates a blink controller in a given comp
   *
   * @param {CompItem} comp Comp to add controller to
   * @returns {Layer}       Control layer
   */
  function getOrCreateBlinkController(comp) {
    // Get existing layer, if present
    for (var ii = 1, il = comp.numLayers; ii <= il; ii++) {
      var layer = comp.layer(ii);
      if (layer.name === BLINK_CONTROLLER_NAME) {
        return layer;
      }
    }

    // It doesn't exist, so create the null & add effect
    var blinkController = comp.layers.addNull();
    blinkController.name = BLINK_CONTROLLER_NAME;

    var effects = blinkController.effect;
    var blinkEffect = effects.addProperty("ADBE Checkbox Control");
    blinkEffect.name = BLINK_EFFECT_NAME;

    return blinkController;
  }

  var comp = app.project.activeItem;

  if (!(comp && comp instanceof CompItem)) {
    alert("Please select a composition!");
    return;
  }

  var layers = comp.selectedLayers;

  if (layers.length === 0) {
    alert("Please select some layers!");
    return;
  }

  app.beginUndoGroup("Blink Selected Layers");

  getOrCreateBlinkController(comp);

  for (var ii = 0, il = layers.length; ii < il; ii++) {
    var layer = layers[ii];

    var opacity = layer.opacity;
    opacity.expression = [
      'var blink = thisComp.layer("' + BLINK_CONTROLLER_NAME + '").effect("' + BLINK_EFFECT_NAME + '")("Checkbox");',
      invertBlink ? "blink == 0 ? 100 : 0" : "blink == 1 ? 100 : 0"
    ].join("\n");
  }
  app.endUndoGroup();
}
function unblinkSelectedLayers() {
    var comp = app.project.activeItem;
  
    if (!(comp && comp instanceof CompItem)) {
      alert("Please select a composition!");
      return;
    }
  
    var layers = comp.selectedLayers;
  
    if (layers.length === 0) {
      alert("Please select some layers!");
      return;
    }
  
    app.beginUndoGroup("Unblink Selected Layers");
  
    for (var ii = 0, il = layers.length; ii < il; ii++) {
      var layer = layers[ii];
      var opacity = layer.opacity;
      if (opacity.expression) {
        opacity.expression = "";
      }
    }
  
    app.endUndoGroup();
  }  

//=================
// Sort Function(s)
//=================

function sortProjectItems() {
  app.beginUndoGroup('Sort Project Items'); // Start the undo group
  var project = app.project;
  var items = project.items;
  var itemsArray = [];

  // First, move all items out of folders
  for (var i = 1; i <= items.length; i++) {
    if (items[i] instanceof FolderItem) {
      var folderItems = items[i].items;
      for (var j = folderItems.length; j > 0; j--) {
        folderItems[j].parentFolder = project.rootFolder;
      }
    }
  }

  // Delete all folders
  for (var i = items.length; i > 0; i--) {
    if (items[i] instanceof FolderItem) {
      items[i].remove();
    }
  }

  // Collect all items
  for (var i = 1; i <= items.length; i++) {
    itemsArray.push(items[i]);
  }

        var audioExtensions = ['wav', 'aac', 'm4a', 'aif', 'aiff', 'mp3', 'mpeg', 'mpg', 'mpa', 'mpe'];
        var videoExtensions = ['crm', 'mxf', 'mov', '3gp', '3g2', 'amc', 'swf', 'flv', 'f4v', 'gif', 'm2ts', 'dv', 'avi', 'm4v', 'mpg', 'mpe', 'mpa', 'mpv', 'mod', 'm2p', 'm2v', 'm2a', 'm2t', 'mp4', 'wmv', 'wma'];
        var imageExtensions = ['pdf', 'bmp', 'rle', 'dib', 'tif', 'crw', 'nef', 'raf', 'orf', 'mrw', 'dcr', 'mos', 'raw', 'pef', 'srf', 'dng', 'x3f', 'cr2', 'erf', 'cin', 'dpx', 'gif', 'rla', 'rpf', 'img', 'ei', 'iff', 'tdi', 'jpg', 'jpe', 'heif', 'heic', 'svg', 'ma', 'exr', 'pcx', 'png', 'hdr', 'rgbe', 'xyze', 'sgi', 'bw', 'rgb', 'pic', 'tga', 'vda', 'icb', 'vst'];
        var aiAndPsdExtensions = ['ai', 'psd', 'psb', 'eps'];
        var folderTypes = {
          Audio: {
            name: 'Audio',
            found: false
          },
          Compositions: {
            name: 'Compositions',
            found: false
          },
          Images: {
            name: 'Images',
            found: false
          },
          NullsAndSolids: {
            name: 'Nulls & Solids',
            found: false
          },
          Video: {
            name: 'Video',
            found: false
          },
          Other: {
            name: 'Other',
            found: false
          },
          OldFolders: {
            name: 'Old Folders',
            found: false
          },
          AI_PSD: {
            name: 'AI & PSD',
            found: false
          },
        };
        for (var i = itemsArray.length - 1; i >= 0; i--) {
          var item = itemsArray[i];
          if (item instanceof FolderItem) {
            // Skip the folders we created
            if (isFolderInFolderTypes(item, folderTypes)) continue;
            item.parentFolder = getOrCreateFolder(folderTypes.OldFolders.name);
            folderTypes.OldFolders.found = true;
          } else if (item instanceof FootageItem) {
            var fileExt = getFileExtension(item.name).toLowerCase();
            if (indexOfArray(imageExtensions, fileExt) !== -1) {
              item.parentFolder = getOrCreateFolder(folderTypes.Images.name);
              folderTypes.Images.found = true;
            } else if (indexOfArray(audioExtensions, fileExt) !== -1) {
              item.parentFolder = getOrCreateFolder(folderTypes.Audio.name);
              folderTypes.Audio.found = true;
            } else if (indexOfArray(videoExtensions, fileExt) !== -1) {
              item.parentFolder = getOrCreateFolder(folderTypes.Video.name);
              folderTypes.Video.found = true;
            } else if (indexOfArray(aiAndPsdExtensions, fileExt) !== -1) {
              item.parentFolder = getOrCreateFolder(folderTypes.AI_PSD.name);
              folderTypes.AI_PSD.found = true;
            } else if (fileExt === '') {
              item.parentFolder = getOrCreateFolder(folderTypes.Other.name);
              folderTypes.Other.found = true;
            }
            // Check for solid and null layers
            if (item.mainSource instanceof SolidSource) {
              item.parentFolder = getOrCreateFolder(folderTypes.NullsAndSolids.name);
              folderTypes.NullsAndSolids.found = true;
            }
          } else if (item instanceof CompItem) {
            item.parentFolder = getOrCreateFolder(folderTypes.Compositions.name);
            folderTypes.Compositions.found = true;
          }
        }
        // Remove folders that aren't needed anymore
        for (var key in folderTypes) {
          if (folderTypes.hasOwnProperty(key) && !folderTypes[key].found) {
            var folder = findFolder(folderTypes[key].name);
            if (folder) folder.remove();
          }
        }
  
        function getOrCreateFolder(folderName) {
          for (var i = 1; i <= items.length; i++) {
            if (items[i] instanceof FolderItem && items[i].name === folderName) {
              items[i].twirled = false; // Twiddle the existing folder closed
              return items[i];
            }
          }
          return items.addFolder(folderName);
        }
  
        function findFolder(folderName) {
          for (var i = 1; i <= items.length; i++) {
            if (items[i] instanceof FolderItem && items[i].name === folderName) {
              return items[i];
            }
          }
          return null;
        }
  
        function getFileExtension(fileName) {
          var lastIndex = fileName.lastIndexOf('.');
          return lastIndex !== -1 ? fileName.slice(lastIndex + 1) : '';
        }
  
        function isFolderInFolderTypes(folder, folderTypes) {
          for (var key in folderTypes) {
            if (folderTypes.hasOwnProperty(key) && folderTypes[key].name === folder.name) {
              return true;
            }
          }
          return false;
        }

        function indexOfArray(array, value) {
          for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
              return i;
            }
          }
          return -1;
        }
        app.activate();
        app.endUndoGroup(); // End the undo group
      }

//====================================
// Reposition Anchor Point Function(s)
//====================================

      function moveAnchor(col, ignoreMasks, row) {
        app.beginUndoGroup("Move Anchor Point");
        var mainComp = app.project.activeItem;
        var curTime = app.project.activeItem.time;
        var theLayers = app.project.activeItem.selectedLayers;
        for (var num = 0; num < theLayers.length; num += 1) {
          var theLayer = theLayers[num];
          var noMasks = true;
          if (ignoreMasks === true) {
            noMasks = true;
          } else {
            if (theLayer.mask.numProperties !== 0) {
              for (var i = 1; i <= theLayer.mask.numProperties; i += 1) {
                if (theLayer.mask(i).maskMode != MaskMode.NONE) {
                  noMasks = false;
                }
              }
            }
          }
          if (noMasks) {
            switch (row) {
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
            switch (col) {
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
            if ((theLayer instanceof TextLayer) || (theLayer instanceof ShapeLayer)) {
              x += theLayer.sourceRectAtTime(curTime, false).left;
              y += theLayer.sourceRectAtTime(curTime, false).top;
            }
          } else {
            var xBounds = Array();
            var yBounds = Array();
            var numMasks = theLayer.mask.numProperties;
            for (var f = 1; f <= numMasks; f += 1) {
              var numVerts = theLayer.mask(f).maskShape.value.vertices.length;
              if (theLayer.mask(f).maskMode == MaskMode.NONE) {
                continue;
              }
              for (var j = 0; j < numVerts; j += 1) {
                var curVerts = theLayer.mask(f).maskShape.valueAtTime(curTime, false).vertices[j];
                xBounds.push(curVerts[0]);
                yBounds.push(curVerts[1]);
              }
            }
            xBounds.sort((function(a, b) {
              return a - b;
            }));
            yBounds.sort((function(a, b) {
              return a - b;
            }));
            var xl = xBounds.shift();
            var xh = xBounds.pop();
            var yl = yBounds.shift();
            var yh = yBounds.pop();
            if ((theLayer instanceof TextLayer) || (theLayer instanceof ShapeLayer)) {
              var xl2 = theLayer.sourceRectAtTime(curTime, false).left;
              var xh2 = xl2 + theLayer.sourceRectAtTime(curTime, false).width;
              var yl2 = theLayer.sourceRectAtTime(curTime, false).top;
              var yh2 = yl2 + theLayer.sourceRectAtTime(curTime, false).height;
              if (xl < xl2) {
                xl = xl2;
              }
              if (xh > xh2) {
                xh = xh2;
              }
              if (yl < yl2) {
                yl = yl2;
              }
              if (yh > yh2) {
                yh = yh2;
              }
            }
            switch (row) {
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
            switch (col) {
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
          if (theLayer.anchorPoint.isTimeVarying) {
            var theComp = app.project.activeItem;
            theLayer.anchorPoint.setValueAtTime(theComp.time, [x, y]);
          } else {
            var curAnchor = theLayer.anchorPoint.value;
            var xMove = (x - curAnchor[0]) * (theLayer.scale.value[0] / 100);
            var yMove = (y - curAnchor[1]) * (theLayer.scale.value[1] / 100);
            var posEx = false;
            if (theLayer.position.expressionEnabled) {
              theLayer.position.expressionEnabled = false;
              posEx = true;
            }
            var dupLayer = theLayer.duplicate();
            var oldParent = theLayer.parent;
            dupLayer.moveToEnd();
            if (dupLayer.scale.isTimeVarying) {
              dupLayer.scale.setValueAtTime(app.project.activeItem.time, [100, 100]);
            } else {
              dupLayer.scale.setValue([100, 100]);
            }
            theLayer.parent = dupLayer;
            theLayer.anchorPoint.setValue([x, y]);
            if (theLayer.position.isTimeVarying) {
              var numKeys = theLayer.position.numKeys;
              for (var k = 1; k <= numKeys; k += 1) {
                curPos = theLayer.position.keyValue(k);
                curPos[0] += xMove;
                curPos[1] += yMove;
                theLayer.position.setValueAtKey(k, curPos);
              }
            } else {
              curPos = theLayer.position.value;
              theLayer.position.setValue([curPos[0] + xMove, curPos[1] + yMove, curPos[2]]);
            }
            theLayer.parent = oldParent;
            if (posEx) {
              theLayer.position.expressionEnabled = true;
            }
            dupLayer.remove();
          }
        }
        app.endUndoGroup();
      }

//====================================
// Apply Easing (Easement) Function(s)
//====================================
  
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

//==================================
// Paste Multiple Keyframes Function
//==================================

//=========================
// Time-remap Loop Function
//=========================

function loopAtPlayhead() {
    var activeItem = app.project.activeItem;

    // Check if active item is a comp or pre-comp
    if (activeItem instanceof CompItem) {
        var selectedLayers = activeItem.selectedLayers;

        // Check if any layer is selected
        if (selectedLayers.length > 0) {
            app.beginUndoGroup("Loop at Playhead");

            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                if (!layer.canSetTimeRemapEnabled) {
                    alert("Time remap cannot be enabled for " + layer.name);
                    continue;
                }

                // Enable time remapping
                layer.timeRemapEnabled = true;

                // Get playhead position
                var playheadTime = activeItem.time;

                // Add keyframe at playhead position
                var playheadKeyIndex = layer.timeRemap.addKey(playheadTime);

                // Get value of first keyframe
                var firstKeyValue = layer.timeRemap.keyValue(1);

                // Add keyframe one frame after playhead with first keyframe's value
                var oneFrameAfterPlayhead = playheadTime + activeItem.frameDuration;
                layer.timeRemap.addKey(oneFrameAfterPlayhead);
                layer.timeRemap.setValueAtTime(oneFrameAfterPlayhead, firstKeyValue);

                // Remove the last keyframe
                layer.timeRemap.removeKey(layer.timeRemap.numKeys);

                // Apply loopOut expression
                layer.timeRemap.expression = 'loopOut("cycle")';
            }

            app.endUndoGroup();
        } else {
            alert("Please select at least one layer.");
        }
    } else {
        alert("Please select a composition or pre-composition.");
    }
}

// Call the function when the button is clicked
loopButton.onClick = function() {
    loopAtPlayhead();
}


//=============================   
// Reverse Layer Order Function
//=============================

{
    function reverseSelectedLayers() {
        var activeItem = app.project.activeItem;
  
        if (activeItem == null || !(activeItem instanceof CompItem)) {
            alert("Please select a composition with layers to reverse.");
            return;
        }
  
        var selectedLayers = activeItem.selectedLayers;
        if (selectedLayers.length < 2) {
            alert("Please select at least two layers to reverse.");
            return;
        }
  
        app.beginUndoGroup("Reverse Selected Layers");
  
        // Sort the selected layers by their index
        selectedLayers.sort(function (a, b) {
            return a.index - b.index;
        });
  
        var layerIndices = [];
        for (var i = 0; i < selectedLayers.length; i++) {
            layerIndices.push(selectedLayers[i].index);
        }
  
        var reversedLayers = selectedLayers.slice().reverse();
        var numLayers = activeItem.layers.length;
  
        for (var i = 0; i < reversedLayers.length; i++) {
            var currentLayerIndex = reversedLayers[i].index;
            var targetLayerIndex = layerIndices[i];
  
            if (currentLayerIndex !== targetLayerIndex) {
                if (targetLayerIndex === numLayers) {
                    reversedLayers[i].moveToEnd();
                } else if (currentLayerIndex < targetLayerIndex) {
                    reversedLayers[i].moveAfter(activeItem.layer(targetLayerIndex));
                } else {
                    reversedLayers[i].moveBefore(activeItem.layer(targetLayerIndex));
                }
            }
        }
  
        app.endUndoGroup();
    } 
}

// Add your event listener as you did in your script
reverseButton.onClick = function() {
reverseSelectedLayers();
};

//======================
// Color Picker Function
//======================

function colorPicker(startValue){
  // find the active comp
  var crntComp = app.project.activeItem;
  if (!crntComp || !(crntComp instanceof CompItem)) {
    alert("Please open a comp first");
    return [];
  }

  // add a temp null;
  var tempLayer = crntComp.layers.addShape();
  var newColorControl = tempLayer("ADBE Effect Parade").addProperty("ADBE Color Control");
  var theColorProp = newColorControl("ADBE Color Control-0001");

  // set the value given by the function arguments
  if (startValue && startValue.length == 3) {
    theColorProp.setValue(startValue);
  }

  // prepare to execute
  var editValueID = 2240 // or app.findMenuCommandId("Edit Value...");
  theColorProp.selected = true;
  app.executeCommand(editValueID);

  // harvest the result
  var result = theColorProp.value;

  // remove the null
  if (tempLayer) {
    tempLayer.remove();
  }

  return result;
}

//==================================
// CEV Copy Keyframe Easing Function
//==================================

        return panel;
    }
    var scriptPal = buildUI(thisObj);
    if ((scriptPal !== null) && (scriptPal instanceof Window)) {
      scriptPal.center();
      scriptPal.show();
    } else {
      scriptPal.layout.layout(true);
    }
  })(this);