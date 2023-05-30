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