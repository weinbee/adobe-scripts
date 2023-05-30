// Create a new window with three buttons
var win = new Window("palette", "Keyframe Copy-Paste", undefined);
win.add("button", undefined, "Copy");
win.add("button", undefined, "Paste Easing");
win.add("button", undefined, "Paste Value");

var keyframesToCopy = [];

win.children[0].onClick = function() {
    // When the 'Copy' button is clicked, get selected keyframes
    var activeItem = app.project.activeItem;
    if (activeItem && activeItem instanceof CompItem && activeItem.selectedLayers.length > 0) {
        var selectedLayer = activeItem.selectedLayers[0];
        var selectedProperty = selectedLayer.selectedProperties[0];
        keyframesToCopy = [];
        for (var i = 1; i <= selectedProperty.numKeys; i++) {
            if (selectedProperty.keySelected(i)) {
                var keyframeValue = selectedProperty.keyValue(i);
                var keyframeEaseIn = selectedProperty.keyInTemporalEase(i);
                var keyframeEaseOut = selectedProperty.keyOutTemporalEase(i);
                keyframesToCopy.push({value: keyframeValue, easeIn: keyframeEaseIn, easeOut: keyframeEaseOut});
            }
        }
        alert("Copied " + keyframesToCopy.length + " keyframes.");
    }
};

function countSelectedKeys(property) {
    var count = 0;
    for (var i = 1; i <= property.numKeys; i++) {
        if (property.keySelected(i)) {
            count++;
        }
    }
    return count;
}

win.children[1].onClick = function() {
    // When the 'Paste Easing' button is clicked, apply copied easing to selected keyframes
    var activeItem = app.project.activeItem;
    if (activeItem && activeItem instanceof CompItem && activeItem.selectedLayers.length > 0 && keyframesToCopy.length > 0) {
        var selectedLayer = activeItem.selectedLayers[0];
        var selectedProperty = selectedLayer.selectedProperties[0];
        var selectedKeyCount = countSelectedKeys(selectedProperty);
        if (selectedKeyCount == keyframesToCopy.length) {
            // The rest of the code...
        } else {
            alert("The number of selected keyframes doesn't match the number of copied keyframes.");
        }
    }
};

win.children[2].onClick = function() {
    // When the 'Paste Value' button is clicked, apply copied values to selected keyframes
    var activeItem = app.project.activeItem;
    if (activeItem && activeItem instanceof CompItem && activeItem.selectedLayers.length > 0 && keyframesToCopy.length > 0) {
        var selectedLayer = activeItem.selectedLayers[0];
        var selectedProperty = selectedLayer.selectedProperties[0];
        var selectedKeyCount = countSelectedKeys(selectedProperty);
        if (selectedKeyCount == keyframesToCopy.length) {
            // The rest of the code...
        } else {
            alert("The number of selected keyframes doesn't match the number of copied keyframes.");
        }
    }
};


win.show();
