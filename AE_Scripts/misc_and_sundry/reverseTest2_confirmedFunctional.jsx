// ReverseSelectedLayers.jsx
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

    reverseSelectedLayers();
}



