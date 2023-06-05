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