// Leave this line here at the beginning
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

// Global variables
var SCRIPT_NAME  = 'Ungrouper',
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
    } else if (typeof (currLayerRadio) == 'undefined') {
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
    chkClipping.onClick = function () {
      chkRmvClipping.enabled = !chkRmvClipping.enabled;
    }

    // Buttons
    var btns = win.add('group');
    btns.alignChildren = ['fill', 'fill'];
    btns.margins = [0, 10, 0, 0];
    var cancel = btns.add('button', undefined, 'Cancel', { name: 'cancel' });
    cancel.helpTip = 'Press Esc to Close';
    var ok = btns.add('button', undefined, 'OK', { name: 'ok' });
    ok.helpTip = 'Press Enter to Run';
    ok.onClick = okClick;

    if (doc.groupItems.length > 0) {
      win.show();
    } else { 
      alert(scriptName + '\nDocument does not contain any groups.'); 
    }

    cancel.onClick = function () {
      win.close();
    }

    function okClick() {
      // Ungroup selected objects
      if (typeof (currSelRadio) !== 'undefined' && currSelRadio.value) {
        var currSel = getSelection(doc);
        for (var i = 0; i < currSel.length; i++) {
          if (currSel[i].typename === 'GroupItem') ungroup(currSel[i]);
        }
      }
      // Ungroup in active Layer if it contains groups
      if (typeof (currLayerRadio) !== 'undefined' && currLayerRadio.value) {
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
    } catch (e) { }
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