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
