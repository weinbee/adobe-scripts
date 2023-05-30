function sortItems() {
    function grabProjItems(itemType) {
    var typeOptions = new Array(CompItem, FolderItem, FootageItem);
    for (var t = 0; t < 3; t += 1) { 
    if (itemType == typeOptions[t]) { 
    itemAry = [];
    proj = app.project;
    itemTotal = proj.numItems;
    for (var i = 1; i <= itemTotal; i += 1) { 
    curItem = proj.item(i);
    if (curItem instanceof itemType) { 
    itemAry[itemAry.length] = curItem;
    }}
    return itemAry;
    }}
    }
    app.beginUndoGroup("Sort");
    if (grabProjItems !== null) { 
    var folderResults = grabProjItems(FolderItem);
    var compositionResults = grabProjItems(CompItem);
    var footageResults = grabProjItems(FootageItem);
    var mainFolder = app.project.rootFolder;
    var compositionFolderItem = app.project.items.addFolder(" " + compInput.text);
    compositionFolderItem.label = 9;
    for (var a = 0; a < compositionResults.length; a += 1) { 
    compositionResults[a].parentFolder = mainFolder;
    compositionResults[a].parentFolder = compositionFolderItem;
    compositionResults[a].label = 9;}
    var audioFolderItem = app.project.items.addFolder(" " + audioInput.text);
    audioFolderItem.label = 13;
    for (var b = 0; b < footageResults.length; b += 1) { 
    if (footageResults[b].hasAudio) { 
    footageResults[b].parentFolder = mainFolder;
    footageResults[b].parentFolder = audioFolderItem;
    footageResults[b].label = 13;
    }}
    var videoFolderItem = app.project.items.addFolder(" " + videoInput.text);
    videoFolderItem.label = 3;
    for (var c = 0; c < footageResults.length; c += 1) { 
    if (footageResults[c].hasVideo) { 
    footageResults[c].parentFolder = mainFolder;
    footageResults[c].parentFolder = videoFolderItem;
    footageResults[c].label = 3;
    }}
    var imageFolderItem = app.project.items.addFolder(" " + imageInput.text);
    imageFolderItem.label = 10;
    for (var d = 0; d < footageResults.length; d += 1) { 
    if (footageResults[d].mainSource.isStill) { 
    footageResults[d].parentFolder = mainFolder;
    footageResults[d].parentFolder = imageFolderItem;
    footageResults[d].label = 10;
    }}
    var oldFolderItem = app.project.items.addFolder(" " + oldFootageInput.text);
    oldFolderItem.label = 15;
    for (var g = 0; g < folderResults.length; g += 1) { 
    folderResults[g].parentFolder = mainFolder;
    folderResults[g].parentFolder = oldFolderItem;
    folderResults[g].label = 15;}
    var vectorFolderItem = app.project.items.addFolder(" " + aiIconInput.text);
    vectorFolderItem.label = 2;
    for (var h = 0; h < footageResults.length; h += 1) { 
    if (footageResults[h].name.lastIndexOf(".ai") == (footageResults[h].name.length - 3)) { 
    footageResults[h].parentFolder = mainFolder;
    footageResults[h].parentFolder = vectorFolderItem;
    footageResults[h].label = 2;
    }
    if (footageResults[h].name.lastIndexOf(".psd") == (footageResults[h].name.length - 4)) { 
    footageResults[h].parentFolder = mainFolder;
    footageResults[h].parentFolder = vectorFolderItem;
    footageResults[h].label = 2;
    }}
    var solidFolderItem = app.project.items.addFolder(" " + nullInput.text);
    solidFolderItem.label = 11;
    for (var e = 0; e < footageResults.length; e += 1) { 
    if (footageResults[e].mainSource instanceof SolidSource) { 
    footageResults[e].parentFolder = mainFolder;
    footageResults[e].parentFolder = solidFolderItem;
    footageResults[e].label = 11;
    }}
    var missingFolderItem = app.project.items.addFolder(" " + missingInput.text);
    missingFolderItem.label = 1;
    for (var f = 0; f < footageResults.length; f += 1) { 
    if (footageResults[f].footageMissing) { 
    footageResults[f].parentFolder = mainFolder;
    footageResults[f].parentFolder = missingFolderItem;
    footageResults[f].label = 1;
    }}
    var userInputIgnoreStnd = userInputIgnore.text;
    var userInputIgnoreLwr = userInputIgnoreStnd.toLowerCase();
    var userInputIgnoreUpr = userInputIgnoreStnd.toUpperCase();
    var userInputIgnoreCap = userInputIgnoreLwr.charAt(0).toUpperCase() + userInputIgnoreLwr.slice(1);
    var userLengthInput = userInputIgnoreStnd.length;
    for (var j = 0; j < compositionResults.length; j += 1) { 
    var ignoreItem = compositionResults[j];
    var firstItemLength = ignoreItem.length;
    var startSearch = firstItemLength - userLengthInput;
    if (!ignoreItem.name.lastIndexOf(userInputIgnoreStnd, startSearch)) { 
    ignoreItem.parentFolder = mainFolder;
    ignoreItem.label = 8;
    }
    if (!ignoreItem.name.lastIndexOf(userInputIgnoreLwr, startSearch)) { 
    ignoreItem.parentFolder = mainFolder;
    ignoreItem.label = 8;
    }
    if (!ignoreItem.name.lastIndexOf(userInputIgnoreUpr, startSearch)) { 
    ignoreItem.parentFolder = mainFolder;
    ignoreItem.label = 8;
    }
    if (!ignoreItem.name.lastIndexOf(userInputIgnoreCap, startSearch)) { 
    ignoreItem.parentFolder = mainFolder;
    ignoreItem.label = 8;
    }}
    if (compositionFolderItem.numItems < 1) { 
    compositionFolderItem.remove();
    }
    if (audioFolderItem.numItems < 1) { 
    audioFolderItem.remove();
    }
    if (videoFolderItem.numItems < 1) { 
    videoFolderItem.remove();
    }
    if (imageFolderItem.numItems < 1) { 
    imageFolderItem.remove();
    }
    if (solidFolderItem.numItems < 1) { 
    solidFolderItem.remove();
    }
    if (missingFolderItem.numItems < 1) { 
    missingFolderItem.remove();
    }
    if (vectorFolderItem.numItems < 1) { 
    vectorFolderItem.remove();
    }
    if (app.settings.getSetting("Mt_Mograph", "deleteOldFolders") == "yes") { 
    oldFolderItem.remove();
    }
    if (app.settings.getSetting("Mt_Mograph", "removeUnused") == "yes") { 
    app.beginSuppressDialogs();
    app.executeCommand(2109);
    app.endSuppressDialogs(false);
    }
    special_motion.selection = 0;
    }
    app.endUndoGroup();
    }