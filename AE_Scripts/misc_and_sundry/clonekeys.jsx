function clone() {
    var mainComp = app.project.activeItem;
    if ((!mainComp) || (!(mainComp instanceof CompItem))) { 
    alertNoComp();
    return;
    }
    app.beginUndoGroup("Clone");
    allcomps = app.project.selection;
    activecomp = app.project.activeItem;
    addTimeOffset = 1;
    comp = [];
    if (activecomp !== undefined) { 
    if (keyframeSelected(activecomp)) { 
    comp[0] = activecomp;
    pasteKeyframes(comp[0], addTimeOffset);
    }
    else {
    Alert("No keyframe(s) selected.");
    }
    }
    else {
    Alert("No composition selected.");
    }
    }
    function pasteKeyframes(addTimeOffset, comp) {
    if (comp instanceof CompItem) { 
    var currentTime = comp.time;
    var selectedProps = comp.selectedProperties;
    var unsettableProps = [];
    if (selectedProps.length > 0) { 
    var earliestTime = getEarliestTime(comp);
    for (var i = 0; i < selectedProps.length; i += 1) { 
    var currentProp = selectedProps[i];
    var canSetKey = true;
    if (currentProp instanceof Property) { 
    if (currentProp.propertyValueType == PropertyValueType.CUSTOM_VALUE) { 
    canSetKey = false;
    unsettableProps[unsettableProps.length] = currentProp;
    }
    if (canSetKey) { 
    var selectedKeyIndex = currentProp.selectedKeys;
    var newKeyframes = [];
    for (var j = 0; j < selectedKeyIndex.length; j += 1) { 
    var currentSelectedKeyIndex = selectedKeyIndex[j];
    var selectedValues = null;
    var selectedTime = null;
    maskBezier = false;
    if (currentProp.propertyValueType == PropertyValueType.SHAPE) { 
    maskBezier = currentProp.parentProperty.rotoBezier;
    if (maskBezier) { 
    currentProp.parentProperty.rotoBezier = false;
    }
    }
    selectedValues = currentProp.keyValue(currentSelectedKeyIndex);
    selectedTime = currentProp.keyTime(currentSelectedKeyIndex);
    if (addTimeOffset == 1) { 
    timeOffset = selectedTime - earliestTime;
    }
    else {
    timeOffset = 0;
    }
    var newTime = currentTime + timeOffset;
    newKeyframes[newKeyframes.length] = newTime;
    newKeyframes[newKeyframes.length] = selectedValues;
    newKeyframes[newKeyframes.length] = currentSelectedKeyIndex;}
    for (var k = 0; k < newKeyframes.length; k += 3) { 
    var newKey = currentProp.addKey(newKeyframes[k]);
    currentProp.setValueAtKey(newKey, newKeyframes[k + 1]);
    if (currentProp.propertyValueType == PropertyValueType.SHAPE) { 
    if (maskBezier) { 
    currentProp.parentProperty.rotoBezier = true;
    }
    }
    getKeyframeProperties(currentProp, newKeyframes[k + 2], newKey);}
    }
    }}
    }
    }
    }
    function getKeyframeProperties(copyKeyIndex, pasteKeyIndex, prop) {
    var keyframeProperties = Array();
    var propertyType = prop.propertyValueType;
    keyframeProperties[keyframeProperties.length] = prop.isInterpolationTypeValid(KeyframeInterpolationType.LINEAR);
    keyframeProperties[keyframeProperties.length] = prop.isInterpolationTypeValid(KeyframeInterpolationType.BEZIER);
    keyframeProperties[keyframeProperties.length] = prop.isInterpolationTypeValid(KeyframeInterpolationType.HOLD);
    keyframeProperties.keyInInterpolationType = prop.keyInInterpolationType(copyKeyIndex);
    keyframeProperties.keyOutInterpolationType = prop.keyOutInterpolationType(copyKeyIndex);
    if ((propertyType == PropertyValueType.TwoD_SPATIAL) || (propertyType == PropertyValueType.ThreeD_SPATIAL)) { 
    keyframeProperties.keyInSpatialTangent = prop.keyInSpatialTangent(copyKeyIndex);
    keyframeProperties.keyOutSpatialTangent = prop.keyOutSpatialTangent(copyKeyIndex);
    keyframeProperties.keySpatialContinuous = prop.keySpatialContinuous(copyKeyIndex);
    keyframeProperties.keySpatialAutoBezier = prop.keySpatialAutoBezier(copyKeyIndex);
    keyframeProperties.keyRoving = prop.keyRoving(copyKeyIndex);
    }
    keyframeProperties.keyInTemporalEase = prop.keyInTemporalEase(copyKeyIndex);
    keyframeProperties.keyOutTemporalEase = prop.keyOutTemporalEase(copyKeyIndex);
    keyframeProperties.keyTemporalContinuous = prop.keyTemporalContinuous(copyKeyIndex);
    keyframeProperties.keyTemporalAutoBezier = prop.keyTemporalAutoBezier(copyKeyIndex);
    if ((propertyType == PropertyValueType.TwoD_SPATIAL) || (propertyType == PropertyValueType.ThreeD_SPATIAL)) { 
    prop.setSpatialTangentsAtKey(pasteKeyIndex, keyframeProperties.keyInSpatialTangent, keyframeProperties.keyOutSpatialTangent);
    prop.setSpatialContinuousAtKey(pasteKeyIndex, keyframeProperties.keySpatialContinuous);
    prop.setSpatialAutoBezierAtKey(pasteKeyIndex, keyframeProperties.keySpatialAutoBezier);
    prop.setRovingAtKey(pasteKeyIndex, keyframeProperties.keyRoving);
    }
    prop.setTemporalEaseAtKey(pasteKeyIndex, keyframeProperties.keyInTemporalEase, keyframeProperties.keyOutTemporalEase);
    prop.setTemporalContinuousAtKey(pasteKeyIndex, keyframeProperties.keyTemporalContinuous);
    prop.setTemporalAutoBezierAtKey(pasteKeyIndex, keyframeProperties.keyTemporalAutoBezier);
    prop.setInterpolationTypeAtKey(pasteKeyIndex, keyframeProperties.keyInInterpolationType, keyframeProperties.keyOutInterpolationType);
    }
    function getEarliestTime(comp) {
        var earliestTime = findSmallestValue(comp);
        return earliestTime;
    }
    function findSmallestValue(comp) {
    var selectedProps = comp.selectedProperties;
    for (var i = 0; i < selectedProps.length; i += 1) { 
    var currentProp = selectedProps[i];
    if (currentProp instanceof Property) { 
    var first_selected_key = currentProp.selectedKeys;
    if (first_selected_key[0] !== undefined) { 
    currentKeyTime = selectedProps[i].keyTime(first_selected_key[0]);
    }
    if ((currentKeyTime < smallestValue) || (smallestValue === undefined)) { 
    smallestValue = currentKeyTime;
    }
    }}
    return smallestValue;
    }
    function compareValues(valueArray) {
    for (var t = 0; t < valueArray.length; t += 1) { 
    if (tempValue === undefined) { 
    tempValue = valueArray[t];
    }
    else if (tempValue == valueArray[t]) {
    same = 1;
    }
    else {
    same = 0;
    break ;
    }}
    return same;
    }
    function keyframeSelected(activecomp) {
    var selectedProps = activecomp.selectedProperties;
    for (var b = 0; b < selectedProps.length; b += 1) { 
    var currentProp = selectedProps[b];
    if (currentProp instanceof Property) { 
    var first_selected_key = currentProp.selectedKeys;
    if (first_selected_key[0] !== undefined) { 
    return 1;
    }
    else {
    return 0;
    }
    }}
    app.endUndoGroup();
    }