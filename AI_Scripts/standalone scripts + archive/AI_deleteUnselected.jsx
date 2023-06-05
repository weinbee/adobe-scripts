//#endregion delete unselected */

//#region delete unselected
function deleteUnselected() {
    // check if a document is open
    if (app.documents.length > 0) {
        // work on the active document
        var doc = app.activeDocument;

        // store the initial count of layers, items, and artboards
        var initialLayerCount = doc.layers.length;
        var initialItemCount = doc.pageItems.length;
        var initialArtboardCount = doc.artboards.length;

        // loop backwards through all page items of the document
        for (var i = doc.pageItems.length - 1; i >= 0; i--) {
            // current item
            var currentItem = doc.pageItems[i];

            // if the item isn't selected and isn't a child of a selected item
            if (!currentItem.selected && (currentItem.parent.typename === 'Document' || !currentItem.parent.selected)) {
                // delete it
                currentItem.remove();
            }
        }

        // delete all artboards except the current one
        var activeArtboardIndex = doc.artboards.getActiveArtboardIndex();
        for (var i = doc.artboards.length - 1; i >= 0; i--) {
            // if this is not the active artboard
            if (i !== activeArtboardIndex) {
                // delete it
                doc.artboards[i].remove();
            }
        }

        // delete empty layers
        for (var i = doc.layers.length - 1; i >= 0; i--) {
            var currentLayer = doc.layers[i];

            // if the layer doesn't contain any page items
            if (currentLayer.pageItems.length === 0) {
                // delete it
                currentLayer.remove();
            }
        }

        // calculate the count of deleted layers, items, and artboards
        var deletedLayerCount = initialLayerCount - doc.layers.length;
        var deletedItemCount = initialItemCount - doc.pageItems.length;
        var deletedArtboardCount = initialArtboardCount - doc.artboards.length;

        // show an alert with the deletion summary
        alert(
            "Deletion Summary:\n" +
            "Deleted Layers: " + deletedLayerCount + "\n" +
            "Deleted Items: " + deletedItemCount + "\n" +
            "Deleted Artboards: " + deletedArtboardCount
        );
    }
}
//#endregion delete unselected