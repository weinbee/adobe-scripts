(function createDockablePanel(thisObj) {
    function buildUI(thisObj) {
      var windowNERDS = (thisObj instanceof Panel) ? thisObj : new Window("palette", "NERDS_redux", undefined, {
        resizeable: true
      });
      windowNERDS.orientation = "column"; 
      windowNERDS.alignChildren = ["center","top"]; 
      windowNERDS.spacing = 0; 
      windowNERDS.margins = 5;

// GRPTOP
// ======
var grpTop = windowNERDS.add("group", undefined, {name: "grpTop"}); 
    grpTop.orientation = "row"; 
    grpTop.alignChildren = ["center","fill"]; 
    grpTop.spacing = 10; 
    grpTop.margins = 10; 

// PANELMISC
// =========
var panelMISC = grpTop.add("panel", undefined, undefined, {name: "panelMISC"}); 
    panelMISC.text = "MISC"; 
    panelMISC.orientation = "column"; 
    panelMISC.alignChildren = ["center","center"]; 
    panelMISC.spacing = 0; 
    panelMISC.margins = 0; 

var miscButtA = panelMISC.add("button", undefined, "miscA");
var miscButtB = panelMISC.add("button", undefined, "miscB");
var miscButtC = panelMISC.add("button", undefined, "miscC");

// GRPDIV1
// =======
var grpDiv1 = grpTop.add("group", undefined, {name: "grpDiv1"}); 
    grpDiv1.orientation = "row"; 
    grpDiv1.alignChildren = ["left","top"]; 
    grpDiv1.spacing = 0; 
    grpDiv1.margins = 0; 

var divider1 = grpDiv1.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.enabled = false; 
    divider1.alignment = "fill"; 

// PANELREPO
// =========
var panelREPO = grpTop.add("panel", undefined, {name: "panelREPO"}); 
    panelREPO.text = "REPO"; 
    panelREPO.orientation = "column"; 
    panelREPO.alignChildren = ["center","center"]; 
    panelREPO.spacing = 5; 
    panelREPO.margins = 5; 

// Custom symbols for REPO
var buttonSize = [23, 23];
var buttonSymbols = [
    ["■","■","■"],
    ["■","■","■"],
    ["■","■","■"]
    ];
    // Updated button creation code block
    for (var i = 0; i < 3; i++) {
    var row = panelREPO.add("group");
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

// GRPDIV2
// =======
var grpDiv2 = windowNERDS.add("group", undefined, {name: "grpDiv2"}); 
    grpDiv2.preferredSize.width = 211; 
    grpDiv2.preferredSize.height = 17; 
    grpDiv2.orientation = "column"; 
    grpDiv2.alignChildren = ["left","center"]; 
    grpDiv2.spacing = 0; 
    grpDiv2.margins = 0; 

var divider2 = grpDiv2.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.enabled = false; 
    divider2.alignment = "fill"; 

// GRPMAINBUTTS
// ============
var grpMainButts = windowNERDS.add("group", undefined, {name: "grpMainButts"}); 
    grpMainButts.orientation = "row"; 
    grpMainButts.alignChildren = ["left","center"]; 
    grpMainButts.spacing = 0; 
    grpMainButts.margins = [4,5,4,4]; 
    grpMainButts.alignment = ["fill","top"]; 

// COL1BUTTS
// =========
var col1Butts = grpMainButts.add("group", undefined, {name: "col1Butts"}); 
    col1Butts.orientation = "column"; 
    col1Butts.alignChildren = ["left","center"]; 
    col1Butts.spacing = 0; 
    col1Butts.margins = [0,0,20,0]; 

var iconButtA = col1Butts.add("button", undefined, "Sort");
var iconButtB = col1Butts.add("button", undefined, "Null");
var iconButtC = col1Butts.add("button", undefined, "Loop");
var iconButtD = col1Butts.add("button", undefined, "Reverse");
var iconButtE = col1Butts.add("button", undefined, "Color");

// GRPDIV3
// =======
var grpDiv3 = grpMainButts.add("group", undefined, {name: "grpDiv3"}); 
    grpDiv3.orientation = "column"; 
    grpDiv3.alignChildren = ["center","center"]; 
    grpDiv3.spacing = 0; 
    grpDiv3.margins = [1,50,1,1]; 

var divider3 = grpDiv3.add("panel", undefined, undefined, {name: "divider3"}); 
    divider3.enabled = false; 
    divider3.alignment = "fill"; 

// COL2BUTTS
// =========
var col2Butts = grpMainButts.add("group", undefined, {name: "col2Butts"}); 
    col2Butts.orientation = "column"; 
    col2Butts.alignChildren = ["left","center"]; 
    col2Butts.spacing = 0; 
    // col2Butts.margins = [0,0,42,0]; 

var iconButtF = col2Butts.add("button", undefined, "Blink");
var iconButtG = col2Butts.add("button", undefined, "Unblink");
var iconButtH = col2Butts.add("button", undefined, "UnPrecomp");
var iconButtI = col2Butts.add("button", undefined, "Smart XY");
var iconButtJ = col2Butts.add("button", undefined, "Rename");

// GRPDIV4
// =======
var grpDiv4 = windowNERDS.add("group", undefined, {name: "grpDiv4"}); 
    grpDiv4.preferredSize.width = 211; 
    grpDiv4.orientation = "row"; 
    grpDiv4.alignChildren = ["left","center"]; 
    grpDiv4.spacing = 10; 
    grpDiv4.margins = 10; 

var divider4 = grpDiv4.add("panel", undefined, undefined, {name: "divider4"}); 
    divider4.enabled = false; 
    divider4.alignment = "fill"; 

// PANEL EASEMENT
// ==============
var panelEasement = windowNERDS.add("panel", undefined, {name: "panelEasement"}); 
    panelEasement.orientation = "row"; 
    panelEasement.alignChildren = ["left","center"]; 
    panelEasement.spacing = 10; 
    panelEasement.margins = 5; 

var SliderNText = panelEasement.add("group", undefined, "SliderNText");
SliderNText.orientation = "column";
var sliderGroup = panelEasement.add("group");
sliderGroup.orientation = "row";
// Slider for Easing
var slider = sliderGroup.add("slider", [10, 10, 142, 30], 0, 0, 100);
slider.value = 70;
slider.stepdelta = 1;
// slider.preferredSize.width = 100;
var valueText = sliderGroup.add("edittext", undefined, slider.value.toFixed(0));
valueText.bounds = [90, 10, 150, 30];
// valueText.preferredSize.width = 30;
slider.onChanging = function() {
valueText.text = this.value.toFixed(0);
};
// Easing buttons
var buttonsGroup = panelEasement.add("group");
buttonsGroup.orientation = "column";
var button1 = buttonsGroup.add("button", [10, 50, 35, 35], "<");
var button2 = buttonsGroup.add("button", [50, 10, 75, 35], "<>");
var button3 = buttonsGroup.add("button", [90, 10, 115, 35], ">");

/********************************************
* Event Listeners
********************************************/
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

    // iconButtA = sortProjectItems
    iconButtA.onClick = function() {
        sortProjectItems();
        app.activate();
    };
    // iconButtB = createANull
        iconButtB.onClick = function() {
            createANull();
            app.activate();
        };
        // iconButtC = loopAtPlayhead
        iconButtC.onClick = function() {
            loopAtPlayhead(direction, method);
            app.activate();
            };
            // iconButtD = reverseSelectedLayers
            iconButtD.onClick = function() {
                reverseSelectedLayers();
            };
        
            // iconButtE = colorpicker
            iconButtE.onClick = function() {
              colorPicker();
              app.activate();
            };
            
        // iconButtF = blinkSelectedLayers
        iconButtF.onClick = function() {
          blinkSelectedLayers();
          app.activate();
        };
        
        // iconButtG = unblinkSelectedLayers
        iconButtG.onClick = function() {
          unblinkSelectedLayers();
          app.activate();
        };
        
        // iconButtH = unPrecompose
        iconButtH.onClick = function() {
          unPrecompose();
          app.activate();
        }

        // iconButtI = smartSeparateDimensions
       iconButtI.onClick = function() {
        separateDimensionsPreserveEasing();
      app.activate();
         }

         iconButtJ.onClick = function() {
            var win = new Window('palette', 'Layer Rename',[300,100,645,396]);
            var w = buildrenameUI(win);
            if (w != null) {
                w.show();
            }
            app.activate();
        }

/********************************************
 * Functions
 ********************************************/
// =======================
// Renaming functions here
// =======================
function buildrenameUI() {
    if (win != null) {
        win.nameSearchLabel = win.add('statictext', [14,15,314,37], 'Search in Names:');
        win.nameSearchT = win.add('edittext', [25,40,325,62], '');
        win.nameReplaceLabel = win.add('statictext', [14,73,314,95], 'Replace with:');
        win.nameReplaceT = win.add('edittext', [25,98,325,120], '');
        win.typePnl = win.add('panel', [16,138,206,243+25], 'Rename Type:');
        win.progLbl = win.add('statictext', [20,271,206,308], '');
        
        win.repRad = win.typePnl.add('radiobutton', [14,13,174,35], 'Search and Replace');
        win.repRad.value = true;
        win.repRad.onClick = function () {
            doTextChange(win.nameSearchLabel, 'Search in Names:');
            doTextChange(win.nameReplaceLabel, 'Replace with:');
            
            doViz(win.startNumLabel, true);
            doViz(win.startNumT, true);
            doViz(win.countNumLabel, true);
            doViz(win.countNumT, true);
        };
        win.appRad = win.typePnl.add('radiobutton', [14,39,174,61], 'Append');
        win.appRad.onClick = function () {
            doTextChange(win.nameSearchLabel, 'Append Head with:');
            doTextChange(win.nameReplaceLabel, 'Append Tail with:');
            doViz(win.startNumLabel, true);
            doViz(win.startNumT, true);
            doViz(win.countNumLabel, true);
            doViz(win.countNumT, true);
        };
        win.remRad = win.typePnl.add('radiobutton', [14,65,174,87], 'Remove # of Characters');
        win.remRad.onClick = function () {
            doTextChange(win.nameSearchLabel, 'Remove this many chars from head (number):');
            doTextChange(win.nameReplaceLabel, 'Remove this many chars from tail (number):');
            doViz(win.startNumLabel, true);
            doViz(win.startNumT, true);
            doViz(win.countNumLabel, true);
            doViz(win.countNumT, true);
            
        };
        win.numRad = win.typePnl.add('radiobutton', [14,90,174,112], 'Number');
        win.numRad.onClick = function () {
            doTextChange(win.nameSearchLabel, 'String BEFORE number (or blank):');
            doTextChange(win.nameReplaceLabel, 'String AFTER number (or blank):');
            doViz(win.startNumLabel, false);
            doViz(win.startNumT, false);
            doViz(win.countNumLabel, false);
            doViz(win.countNumT, false);
            
        };
        
        win.startNumLabel = win.add('statictext', [225,143,270,165], 'Start #:');
        win.startNumLabel.visible = false;
        win.startNumT = win.add('edittext', [279,140,324,162], '0');
        win.startNumT.visible = false;
        win.countNumLabel = win.add('statictext', [225,176,281,198], 'Count by:');
        win.countNumLabel.visible = false;
        win.countNumT = win.add('edittext', [290,173,324,195], '1');
        win.countNumT.visible = false;
        
        win.okBtn = win.add('button', [240,245,320,267], 'OK', {name:'OK'});
        win.okBtn.onClick = function () { doRenaming(this.parent); };
        
        win.cancBtn = win.add('button', [240,210,320,232], 'Close', {name:'Cancel'});
    win.cancBtn.onClick = function () {this.parent.close(1)};}
    return win
}

function doTextChange(target, newText) {
    target.text = newText;
}

function doViz(target, bool) {
    target.visible = !bool;
}

function splitReplace(st, ss, rs) {
    var stArray = st.split(ss);
    var patchedString = "";
    var i = 0;
    while (i < (stArray.length)) {
        if (i == (stArray.length-1)) {rs = "";}
        patchedString = (patchedString + (stArray[i] + rs) );
        i = (i + 1);
    }
  //  alert(patchedString);
    return patchedString
}

function doRenaming(theDialog) {
    // make sure a comp is selected
    var activeItem = app.project.activeItem;
    if (activeItem == null || !(activeItem instanceof CompItem)){
        alert("You need to select some layers first.");
    } else {
        
        var s = activeItem.selectedLayers;
        var selNum = s.length;
        if (selNum < 2) {
            alert("You need to select at least two layers first.");
        } else {
            
            app.beginUndoGroup("layer rename");
            var inputError = false;
            theDialog.progLbl.text = 'WORKING ............. PLEASE WAIT';
            theDialog.hide();
            theDialog.show();
            
            for (var n = (selNum-1); n >= 0; n--) {
                if ( ! inputError ) {
                    item = s[n];
                    oldName = item.name;
                    sear = theDialog.nameSearchT.text;
                    repl = theDialog.nameReplaceT.text
                    
                    newName = oldName;
                    
                    if (theDialog.repRad.value) {
                        
                    newName = splitReplace(newName, sear, repl);
                    
                    //now we check for pre-cs4 app version, for which we truncate:
                    if ((parseFloat(app.version) < 9.0)) { newName=(newName.substr(0,25));}
                    } else if (theDialog.appRad.value) {
                        newName=(sear + oldName + repl );
                        
                    } else if (theDialog.remRad.value) {
                        
                        
                        if (sear == "") {sear = 0;}
                        if (repl == "") {repl = 0;}
                        sear = ( parseFloat(sear) );
                        repl = ( parseFloat(repl) );
                        if ( (isNaN(sear)) || (isNaN(repl)) ) {
                            alert('Error: Not a number?');
                            inputError = true;
                        } else {
                            newName=(newName.substr( sear, oldName.length ));
                            newName=(newName.substr( 0, newName.length-repl ));
                            sear="";
                            repl="";
                        }
                        
                        
                        
                    } else if (theDialog.numRad.value) {
                        
                        sear = theDialog.startNumT.text;
                        repl = theDialog.countNumT.text
                        if (sear == "") {sear = 0;}
                        if ( (repl == "") || (repl == 0) ) {repl = "NaN";}
                        sear = ( parseFloat(sear) );
                        repl = ( parseFloat(repl) );
                        
                        if ( (isNaN(sear)) || (isNaN(repl)) ) {
                            alert('Error: Not a number, or invalid number to count by.');
                            inputError = true;
                        } else {
                            h = theDialog.nameSearchT.text;
                            t = theDialog.nameReplaceT.text;
                            numNum = ((n * repl) + sear);
                            newName = (h + numNum.toString() + t);
                     //now we check for pre-cs4 app version and we error if name too long:
                    if ((parseFloat(app.version) < 9.0)) {
                            if (newName.length > 25) {
                                inputError = true ;
                                // this generates 'error', at beginning of loop,
                                // which is largest number (highest number)
                                alert('Error: Name too long.');
                            }
                     }
                            sear="";
                            repl="";
                        }
                    }
                    
                    //////////////////////
                    if (! inputError) { item.name = newName;
                        
                    } else {
                        theDialog.progLbl.text = '(ERROR)';
                    }
                    //////////////////////
                }
            }
            if (! inputError) {theDialog.progLbl.text = '';}
            app.endUndoGroup();
            
        }
    }
    
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
  iconButtD.onClick = function() {
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
  // Smart Separate Dimension Function
  //==================================

  function separateDimensionsPreserveEasing() {
    /**
     * Makes an array of objects containing in and out ease for a property
     *
     * @param {Property} property Property to check (really only works with Position)
     * @returns {{ite: KeyframeEase, ote: KeyframeEase}[]} Array of ite/ote keyframe objects
     */
    function buildPropTemporalEaseArray(property) {
      var propTemporalEases = [];
  
      for (var ii = 1, il = property.numKeys; ii <= il; ii++) {
        var ite = property.keyInTemporalEase(ii)[0];
  
        if (
          property.keyInInterpolationType(ii) == KeyframeInterpolationType.HOLD ||
          property.keyInInterpolationType(ii) == KeyframeInterpolationType.LINEAR
        )
          ite = new KeyframeEase(0, 10);
  
        var ote = property.keyOutTemporalEase(ii)[0];
  
        if (
          property.keyOutInterpolationType(ii) == KeyframeInterpolationType.HOLD ||
          property.keyOutInterpolationType(ii) == KeyframeInterpolationType.LINEAR
        )
          ote = new KeyframeEase(0, 10);
  
        propTemporalEases.push({
          ite: ite,
          ote: ote,
        });
      }
  
      return propTemporalEases;
    }
  
    /**
     * Sets X, Y and Z positions from a pre-generated object array
     *
     * @param {PropertyGroup} transformGroup Transform group to set props in
     * @param {{ite: KeyframeEase, ote: KeyframeEase}[]} propTemporalEases Array of ite/ote keyframe objects
     */
    function setDimensionTemporalEaseFromObject(
      transformGroup,
      propTemporalEases
    ) {
      var posProps = [
        transformGroup("ADBE Position_0"),
        transformGroup("ADBE Position_1"),
        transformGroup("ADBE Position_2"),
      ];
  
      for (var ii = 0, il = posProps.length; ii < il; ii++) {
        var property = posProps[ii];
  
        for (var jj = 1, jl = property.numKeys; jj <= jl; jj++) {
          var temporalEaseObject = propTemporalEases[jj - 1];
          property.setTemporalEaseAtKey(
            jj,
            [temporalEaseObject.ite],
            [temporalEaseObject.ote]
          );
        }
      }
    }
  
    var comp = app.project.activeItem;
  
    if (!(comp && comp instanceof CompItem)) {
      alert("Open a comp!");
      return;
    }
  
    app.beginUndoGroup("Separate Dimensions & Preserve Easing");
  
    var selection = comp.selectedLayers;
  
    for (var ii = 0, il = selection.length; ii < il; ii++) {
      var layer = selection[ii];
  
      if (layer.locked) {
        continue;
      }
  
      var transform = layer.transform;
      var pos = transform.position;
  
      if (pos.dimensionsSeparated) {
        continue;
      }
  
      var propTemporalEases = buildPropTemporalEaseArray(pos);
  
      pos.dimensionsSeparated = true;
  
      setDimensionTemporalEaseFromObject(transform, propTemporalEases);
    }
  
    app.endUndoGroup();
  };

  return windowNERDS;
}
var scriptPal = buildUI(thisObj);
if ((scriptPal !== null) && (scriptPal instanceof Window)) {
  scriptPal.center();
  scriptPal.show();
} else {
  scriptPal.layout.layout(true);
}
})(this);