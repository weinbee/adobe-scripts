app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

var vers = "1.1.1"; // change version number here and it gets updated in the panel's name

// WINAIRHEAD
// ==========
var winAIRHEAD = new ShowPalette("dialog", "AIRHEAD™_v" + vers, undefined, {maximizeButton: true, minimizeButton: true, resizeable: true}); 
    winAIRHEAD.orientation = "column"; 
    winAIRHEAD.alignChildren = ["center","top"]; 
    winAIRHEAD.spacing = 10; 
    winAIRHEAD.margins = 16; 

//#region UI
    // PANEL1
    // ======
    var panel1 = winAIRHEAD.add("panel", undefined, undefined, {
        name: "panel1"
    });
    panel1.text = "Butts";
    panel1.orientation = "column";
    panel1.alignChildren = ["center", "center"];
    panel1.spacing = 8;
    panel1.margins = 11;

    var buttUngrouper = panel1.add("button", undefined, undefined, {
        name: "buttUngrouper"
    });
    buttUngrouper.text = "Ungroup All";
    buttUngrouper.preferredSize.width = 131;

    var buttFata = panel1.add("button", undefined, undefined, {
        name: "buttFata"
    });
    buttFata.text = "FATA";
    buttFata.preferredSize.width = 131;

    var buttRenamer = panel1.add("button", undefined, undefined, {
        name: "buttRenamer"
    });
    buttRenamer.text = "Renamer";
    buttRenamer.preferredSize.width = 131;

    var buttUnlockAll = panel1.add("button", undefined, undefined, {
        name: "buttUnlockAll"
    });
    buttUnlockAll.text = "Unlock All";
    buttUnlockAll.preferredSize.width = 131;

    var divider1 = panel1.add("panel", undefined, undefined, {
        name: "divider1"
    });
    divider1.alignment = "fill";

    // GRPSOLOUNSOLO
    // =============
    var grpSoloUnsolo = panel1.add("group", undefined, {
        name: "grpSoloUnsolo"
    });
    grpSoloUnsolo.orientation = "row";
    grpSoloUnsolo.alignChildren = ["center", "center"];
    grpSoloUnsolo.spacing = 10;
    grpSoloUnsolo.margins = 0;

    var buttSolo = grpSoloUnsolo.add("button", undefined, undefined, {
        name: "buttSolo"
    });
    buttSolo.text = "Solo";
    buttSolo.preferredSize.width = 65;

    var buttUnsolo = grpSoloUnsolo.add("button", undefined, undefined, {
        name: "buttUnsolo"
    });
    buttUnsolo.text = "Unsolo";
    buttUnsolo.preferredSize.width = 65;
//#endregion UI

//#region event listeners
    buttUngrouper.onClick = function() {
        ungrouper();
        
    };
    buttFata.onClick = function() {
        openFata();
    };
    buttRenamer.onClick = function() {
        openRenamer();
        
    };
    buttUnlockAll.onClick = function() {
        unlocker();
        
    };
    buttSolo.onClick = function() {
        soloLayers();
        
    };
    buttUnsolo.onClick = function() {
        unsoloLayers();
        
    };
//#endregion event listeners

//#region FitArtboardsToArtwork
    var openFata = function() {
        function main() {
            var SCRIPT = {
                    name: 'Fit Artboards To Artwork',
                    version: 'v.1.0'
                },
                CFG = {
                    units: getUnits(), // Active document units
                    paddings: 10,
                    isEqual: true,
                    dlgOpacity: .97 // UI window opacity. Range 0-1
                };

            if (!documents.length) {
                alert('Error\nOpen a document and try again');
                return;
            }

            // Scale factor for Large Canvas mode
            CFG.sf = activeDocument.scaleFactor ? activeDocument.scaleFactor : 1;

            // Dialog
            var dialog = new Window('dialog', SCRIPT.name + ' ' + SCRIPT.version);
            dialog.alignChildren = ['fill', 'fill'];
            dialog.opacity = CFG.dlgOpacity;

            // Paddings
            var padPnl = dialog.add('panel', undefined, 'Paddings, ' + CFG.units);
            padPnl.alignChildren = ['left', 'bottom'];
            padPnl.margins = 10;

            // Wrapper
            var wrapper = padPnl.add('group');
            wrapper.alignChildren = ['left', 'bottom'];
            wrapper.spacing = 10;

            // Top
            var top = wrapper.add('group');
            top.preferredSize.width = 50;
            top.orientation = 'column';
            top.alignChildren = ['fill', 'center'];
            top.spacing = 5;

            top.add('statictext', undefined, 'Top');
            var topInp = top.add('edittext', undefined, CFG.paddings);

            // Bottom
            var bottom = wrapper.add('group');
            bottom.preferredSize.width = 50;
            bottom.orientation = 'column';
            bottom.alignChildren = ['fill', 'center'];
            bottom.spacing = 5;

            bottom.add('statictext', undefined, 'Bottom');
            var bottomInp = bottom.add('edittext', undefined, CFG.paddings);

            // Left
            var left = wrapper.add('group');
            left.preferredSize.width = 50;
            left.orientation = 'column';
            left.alignChildren = ['fill', 'center'];
            left.spacing = 5;

            left.add('statictext', undefined, 'Left');
            var leftInp = left.add('edittext', undefined, CFG.paddings);

            // Right
            var right = wrapper.add('group');
            right.preferredSize.width = 50;
            right.orientation = 'column';
            right.alignChildren = ['fill', 'center'];
            right.spacing = 5;

            right.add('statictext', undefined, 'Right');
            var rightInp = right.add('edittext', undefined, CFG.paddings);

            var isEqual = wrapper.add('checkbox');
            isEqual.value = CFG.isEqual;

            bottomInp.enabled = !isEqual.value;
            leftInp.enabled = !isEqual.value;
            rightInp.enabled = !isEqual.value;

            // Artboards
            var absPnl = dialog.add('panel', undefined, 'Source');
            absPnl.orientation = 'row';
            absPnl.alignChildren = ['fill', 'top'];
            absPnl.margins = [10, 15, 10, 10];

            var activeRb = absPnl.add('radiobutton', undefined, 'Active artboard');
            activeRb.value = true;
            var allRb = absPnl.add('radiobutton', undefined, 'All artboards');

            var btns = dialog.add('group');
            btns.alignChildren = ['center', 'top'];
            var cancel = btns.add('button', undefined, 'Cancel', {
                name: 'cancel'
            });
            var ok = btns.add('button', undefined, 'Ok', {
                name: 'ok'
            });

            var copyright = dialog.add('statictext', undefined, '\u00A9 Nic.');
            copyright.justify = 'center';

            copyright.addEventListener('mousedown', function() {
                openURL('https://github.com/sakhaltai/');
            });

            isEqual.onClick = function() {
                bottomInp.enabled = !this.value;
                leftInp.enabled = !this.value;
                rightInp.enabled = !this.value;
            }

            cancel.onClick = dialog.close;
            ok.onClick = okClick;

            function okClick() {
                var doc = app.activeDocument,
                    paddings = {};

                paddings.top = convertUnits(strToAbsNum(topInp.text, CFG.paddings), CFG.units, 'px') / CFG.sf;
                paddings.bottom = isEqual.value ? paddings.top : convertUnits(strToAbsNum(bottomInp.text, CFG.paddings), CFG.units, 'px') / CFG.sf;
                paddings.left = isEqual.value ? paddings.top : convertUnits(strToAbsNum(leftInp.text, CFG.paddings), CFG.units, 'px') / CFG.sf;
                paddings.right = isEqual.value ? paddings.top : convertUnits(strToAbsNum(rightInp.text, CFG.paddings), CFG.units, 'px') / CFG.sf;

                selection = null;
                redraw();

                if (allRb.value) {
                    for (var i = 0, len = doc.artboards.length; i < len; i++) {
                        doc.artboards.setActiveArtboardIndex(i);
                        resizeArtboard(doc.artboards[i], i, paddings);
                    }
                } else {
                    var idx = doc.artboards.getActiveArtboardIndex();
                    resizeArtboard(doc.artboards[idx], idx, paddings);
                }

                dialog.close();
            }

            dialog.center();
            dialog.show();
        }

        // Add paddings to artboard
        function resizeArtboard(ab, idx, paddings) {
            activeDocument.selectObjectsOnActiveArtboard();
            if (!selection.length) return;

            activeDocument.fitArtboardToSelectedArt(idx);
            selection = null;

            var rect = ab.artboardRect,
                left = rect[0],
                top = rect[1],
                right = rect[2],
                bottom = rect[3];

            ab.artboardRect = [left - paddings.left, top + paddings.top, right + paddings.right, bottom - paddings.bottom];
        }

        // Get active document ruler units
        function getUnits() {
            if (!documents.length) return '';
            var key = activeDocument.rulerUnits.toString().replace('RulerUnits.', '');
            switch (key) {
                case 'Pixels':
                    return 'px';
                case 'Points':
                    return 'pt';
                case 'Picas':
                    return 'pc';
                case 'Inches':
                    return 'in';
                case 'Millimeters':
                    return 'mm';
                case 'Centimeters':
                    return 'cm';
                    // Added in CC 2023 v27.1.1
                case 'Meters':
                    return 'm';
                case 'Feet':
                    return 'ft';
                case 'FeetInches':
                    return 'ft';
                case 'Yards':
                    return 'yd';
                    // Parse new units in CC 2020-2023 if a document is saved
                case 'Unknown':
                    var xmp = activeDocument.XMPString;
                    if (/stDim:unit/i.test(xmp)) {
                        var units = /<stDim:unit>(.*?)<\/stDim:unit>/g.exec(xmp)[1];
                        if (units == 'Meters') return 'm';
                        if (units == 'Feet') return 'ft';
                        if (units == 'FeetInches') return 'ft';
                        if (units == 'Yards') return 'yd';
                        return 'px';
                    }
                    break;
                default:
                    return 'px';
            }
        }

        // Convert units of measurement
        function convertUnits(value, currUnits, newUnits) {
            return UnitValue(value, currUnits).as(newUnits);
        }

        // Convert string to absolute number
        function strToAbsNum(str, def) {
            if (arguments.length == 1 || def == undefined) def = 1;
            str = str.replace(/,/g, '.').replace(/[^\d.]/g, '');
            str = str.split('.');
            str = str[0] ? str[0] + '.' + str.slice(1).join('') : '';
            if (isNaN(str) || !str.length) return parseFloat(def);
            else return parseFloat(str);
        }

        try {
            main();
        } catch (e) {}
        
    };
//#endregion FitArtboardsToArtwork

//#region Ungrouper
    var ungrouper = function() {

        // Global variables
        var SCRIPT_NAME = 'Ungrouper',
            SCRIPT_VERSION = 'v.1.0';
        var doc = app.activeDocument;

        if (app.documents.length > 0) {
            try {
                var currLayer = doc.activeLayer,
                    boardNum = doc.artboards.getActiveArtboardIndex() + 1,
                    clearArr = [], // Array of Clipping Masks obj
                    uiMargins = [10, 20, 10, 10];

                // Create Main Window
                var win = new Window('dialog', SCRIPT_NAME + ' ' + SCRIPT_VERSION, undefined);
                win.orientation = 'column';
                win.alignChildren = ['fill', 'fill'];

                // Target radiobutton
                var slctTarget = win.add('panel', undefined, 'Target');
                slctTarget.alignChildren = 'left';
                slctTarget.margins = uiMargins;
                if (getSelection(doc).length > 0) {
                    var currSelRadio = slctTarget.add('radiobutton', undefined, 'Selected objects');
                }
                if (!currLayer.locked && currLayer.visible) {
                    var currLayerRadio = slctTarget.add('radiobutton', undefined, 'Active layer "' + currLayer.name + '"');
                    currLayerRadio.value = true;
                }
                var currBoardRadio = slctTarget.add('radiobutton', undefined, 'Artboard \u2116 ' + boardNum);
                var currDocRadio = slctTarget.add('radiobutton', undefined, 'All in document');
                if (getSelection(doc).length > 0) {
                    currSelRadio.value = true;
                } else if (typeof(currLayerRadio) == 'undefined') {
                    currBoardRadio.value = true;
                }

                // Action checkbox
                var options = win.add('panel', undefined, 'Options');
                options.alignChildren = 'left';
                options.margins = uiMargins;
                var chkUnroup = options.add('checkbox', undefined, 'Ungroup All');
                chkUnroup.value = true;
                var chkClipping = options.add('checkbox', undefined, 'Release Clipping Masks');
                var chkRmvClipping = options.add('checkbox', undefined, 'Remove Masks Shapes');
                chkRmvClipping.enabled = false;

                // Show/hide checkbox 'Remove Masks Shapes'
                chkClipping.onClick = function() {
                    chkRmvClipping.enabled = !chkRmvClipping.enabled;
                }

                // Buttons
                var btns = win.add('group');
                btns.alignChildren = ['fill', 'fill'];
                btns.margins = [0, 10, 0, 0];
                var cancel = btns.add('button', undefined, 'Cancel', {
                    name: 'cancel'
                });
                cancel.helpTip = 'Press Esc to Close';
                var ok = btns.add('button', undefined, 'OK', {
                    name: 'ok'
                });
                ok.helpTip = 'Press Enter to Run';
                ok.onClick = okClick;

                if (doc.groupItems.length > 0) {
                    win.show();
                } else {
                    alert(scriptName + '\nDocument does not contain any groups.');
                }

                cancel.onClick = function() {
                    win.close();
                }

                function okClick() {
                    // Ungroup selected objects
                    if (typeof(currSelRadio) !== 'undefined' && currSelRadio.value) {
                        var currSel = getSelection(doc);
                        for (var i = 0; i < currSel.length; i++) {
                            if (currSel[i].typename === 'GroupItem') ungroup(currSel[i]);
                        }
                    }
                    // Ungroup in active Layer if it contains groups
                    if (typeof(currLayerRadio) !== 'undefined' && currLayerRadio.value) {
                        ungroup(currLayer);
                    }
                    // Ungroup in active Artboard only visible & unlocked objects
                    if (currBoardRadio.value) {
                        doc.selectObjectsOnActiveArtboard();
                        ungroup(getSelection(doc));
                        doc.selection = null;
                    }
                    // Ungroup all in the current Document
                    if (currDocRadio.value) {
                        for (var j = 0; j < doc.layers.length; j++) {
                            var docLayer = doc.layers[j];
                            // Run only for editable visible layers
                            if (!docLayer.locked && docLayer.visible && docLayer.groupItems.length > 0) {
                                ungroup(docLayer);
                            }
                        }
                    }
                    // Remove empty clipping masks after ungroup
                    if (chkRmvClipping.value) {
                        removeMasks(clearArr);
                    }
                    win.close();
                }
            } catch (e) {
                // showError(e);
            }
        } else {
            alert(scriptName + '\nPlease open a document before running this script.');
        }

        function getSelection(doc) {
            return doc.selection;
        }

        function getChildAll(obj) {
            var childsArr = [];
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                childsArr.push.apply(childsArr, obj);
            } else {
                for (var i = 0; i < obj.pageItems.length; i++) {
                    childsArr.push(obj.pageItems[i]);
                }
            }
            if (obj.layers) {
                for (var l = 0; l < obj.layers.length; l++) {
                    childsArr.push(obj.layers[l]);
                }
            }
            return childsArr;
        }

        // Ungroup array of target objects
        function ungroup(obj) {
            if (!chkClipping.value && obj.clipped) {
                return;
            }

            var childArr = getChildAll(obj);

            if (childArr.length < 1) {
                obj.remove();
                return;
            }

            for (var i = 0; i < childArr.length; i++) {
                var element = childArr[i];
                try {
                    if (element.parent.typename !== 'Layer') {
                        element.move(obj, ElementPlacement.PLACEBEFORE);
                        // Push empty paths in array 
                        if ((element.typename === 'PathItem' && !element.filled && !element.stroked) ||
                            (element.typename === 'CompoundPathItem' && !element.pathItems[0].filled && !element.pathItems[0].stroked) ||
                            (element.typename === 'TextFrame' && element.textRange.fillColor == '[NoColor]' && element.textRange.strokeColor == '[NoColor]'))
                            clearArr.push(element);
                    }
                    if (element.typename === 'GroupItem' || element.typename === 'Layer') {
                        ungroup(element);
                    }
                } catch (e) {}
            }
        }

        // Remove empty clipping masks after ungroup
        function removeMasks(arr) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].remove();
            }
        }

        function showError(err) {
            if (confirm(scriptName + ': an unknown error has occurred.\n' +
                    'Would you like to see more information?', true, 'Unknown Error')) {
                alert(err + ': on line ' + err.line, 'Script Error', true);
            }
        }
        
    };
//#endregion Ungrouper

//#region Unlock All
    function unlocker() {
        function unlockAllLayers(doc) {
            for (var i = 0; i < doc.layers.length; i++) {
                var layer = doc.layers[i];
                unlockLayerItems(layer);
                if (layer.layers.length > 0) {
                    unlockAllLayers(layer);
                }
            }
        }

        function unlockLayerItems(parent) {
            if (parent.locked) {
                parent.locked = false;
            }
            for (var i = 0; i < parent.pageItems.length; i++) {
                var item = parent.pageItems[i];
                if (item.typename == "GroupItem") {
                    unlockLayerItems(item); // Recurse into groups
                }
                if (item.locked) {
                    item.locked = false;
                }
            }
        }
        unlockAllLayers(app.activeDocument);
        
    }

//#endregion Unlock All

//#region Renamer
    var openRenamer = function() {
        // Batch rename dialog
        var dialog = new Window('dialog', 'Batch Rename Layers');

        // Search input
        dialog.add('statictext', undefined, 'Search for:');
        var searchInput = dialog.add('edittext', undefined, 'Layer ');
        searchInput.characters = 30;

        // Replace input
        dialog.add('statictext', undefined, 'Replace with:');
        var replaceInput = dialog.add('edittext', undefined, 'cloud');
        replaceInput.characters = 30;

        // Buttons
        var buttonGroup = dialog.add('group');
        var okButton = buttonGroup.add('button', undefined, 'OK');
        var cancelButton = buttonGroup.add('button', undefined, 'Cancel');

        okButton.onClick = function() {
            renameLayers(app.activeDocument, searchInput.text, replaceInput.text);
            dialog.close();
        }

        cancelButton.onClick = function() {
            dialog.close();
        }

        dialog.show();

        function renameLayers(doc, find, replace) {
            for (var i = 0; i < doc.layers.length; i++) {
                var layer = doc.layers[i];
                if (!layer.locked && layer.visible) {
                    layer.name = layer.name.replace(find, replace);
                }
                if (layer.layers.length > 0) {
                    renameLayers(layer, find, replace);
                }
            }
        }
        
    }
//#endregion Renamer

//#region solo/unsolo
    var invisibleLayers = [];

    function soloLayers() {
        var doc = app.activeDocument;
        var selLayer = doc.activeLayer;

        // Make sure the array is empty before starting
        invisibleLayers = [];

        for (var i = 0; i < doc.layers.length; i++) {
            var layer = doc.layers[i];
            if (layer != selLayer && layer.visible) {
                layer.visible = false;
                invisibleLayers.push(layer);
            }
        }
    }

    function unsoloLayers() {
        for (var i = 0; i < invisibleLayers.length; i++) {
            var layer = invisibleLayers[i];
            if (!layer.visible) {
                layer.visible = true;
            }
        }

        // Clear the array after making all layers visible
        invisibleLayers = [];
        
    }
//#endregion solo/unsolo

winAIRHEAD.show();


// trial stuff here:
// 		    redraw();


