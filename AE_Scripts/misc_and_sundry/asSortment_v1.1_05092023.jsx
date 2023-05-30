(function createDockablePanel(thisObj) {
    function buildUI(thisObj) {
      var panel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {
        resizeable: true
      });

      var iconSortButt_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%04%03%00%00%00%C2%81Tg%C3%87%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%00%20cHRM%00%00z%26%00%00%C2%80%C2%84%00%00%C3%BA%00%00%00%C2%80%C3%A8%00%00u0%00%00%C3%AA%60%00%00%3A%C2%98%00%00%17p%C2%9C%C2%BAQ%3C%00%00%00%18PLTE%00%00%00%C2%80%C2%80%C2%80%C3%80%C3%80%C3%80%00%00%00%C3%BF%C3%BF%C3%BF%00%00%C3%BF%C3%BF%C3%BF%00%C2%80%C2%80%00%C2%BF%C2%8E%C2%AAf%00%00%00%01tRNS%00%40%C3%A6%C3%98f%00%00%00%01bKGD%04%C2%8Fh%C3%99Q%00%00%00%07tIME%07%C3%A2%06%18%17%035%C3%A9B%C2%B8%C3%AC%00%00%00%C2%8DIDAT(%C3%8F%C2%B5%C2%91A%0E%C2%83%20%14D%C3%BD7(B%C2%BAoI%5C%C2%93h%C3%AC%C2%BA%C3%A4%C3%9B%13p%01%C3%AD%C3%82%23%C3%B4%C3%BA%C3%9A0c)%7B%C3%9F%C2%8E%C3%A1%C3%B1%C2%87%40%C3%93%C2%9C%C3%89%C2%A5Z%C2%8B%C2%AF%02%17C%C2%B9m%C2%8Cj%C2%A98u%C2%9A%0AE%C3%A2%C2%AC%C3%93%C2%A4%C3%9Ep%C2%B0%C2%BCv!%C2%A58%C2%AE%0C%C2%9E%C2%BB%C3%B0U%C3%96%7CJ%C3%9A%7B%26%3E%02F%C2%82%C3%81%C3%A7%C2%A0%5D%C3%80%C2%80%C2%A2k%07%2C%C3%AE%224%C3%9E0%C2%84%C3%86%C3%8D%C2%86%7FcA%C3%8Bo%08%C2%83%C2%A3%C3%86%C3%96%06%C3%AEQ%C3%9408j%18%7C%08%C2%9F%C2%A4'g%C3%BD%C3%A0%06%C2%AB%0B%2FI3%C2%8E%7Ca%00%00%00%25tEXtdate%3Acreate%002018-06-24T23%3A03%3A53-04%3A00%C3%89K%C3%9DO%00%00%00%25tEXtdate%3Amodify%002018-06-24T23%3A03%3A53-04%3A00%C2%B8%16e%C3%B3%00%00%00%00IEND%C2%AEB%60%C2%82"; 
      var iconSortButt = panel.add("iconbutton", undefined, File.decode(iconSortButt_imgString), {name: "iconSortButt", style: "toolbutton"}); 
      iconSortButt.text = "SORT"; 

/********************************************
  * Event Listeners
********************************************/

      // 'sort' event handlers
      iconSortButt.onClick = function() {
        sortProjectItems();
        app.activate();
     };
//=================
// Sort Function(s)
//=================
function sortProjectItems() {
  app.beginUndoGroup('Sort Project Items'); // Start the undo group
  var project = app.project;
  var items = project.items;
  var itemsArray = [];

  // First, move all items out of folders
  for (var i = 1; i <= items.length; i++) {
    if (items[i] instanceof FolderItem) {
      var folderItems = items[i].items;
      for (var j = folderItems.length; j > 0; j--) {
        folderItems[j].parentFolder = project.rootFolder;
      }
    }
  }

// Delete all empty folders
for (var i = items.length; i > 0; i--) {
    if (items[i] instanceof FolderItem && items[i].numItems == 0) {
        items[i].remove();
    }
}

  // Collect all items
  for (var i = 1; i <= items.length; i++) {
    itemsArray.push(items[i]);
  }

        var audioExtensions = ['wav', 'aac', 'm4a', 'aif', 'aiff', 'mp3', 'mpeg', 'mpg', 'mpa', 'mpe'];
        var videoExtensions = ['crm', 'mxf', 'mov', '3gp', '3g2', 'amc', 'swf', 'flv', 'f4v', 'gif', 'm2ts', 'dv', 'avi', 'm4v', 'mpg', 'mpe', 'mpa', 'mpv', 'mod', 'm2p', 'm2v', 'm2a', 'm2t', 'mp4', 'wmv', 'wma'];
        var imageExtensions = ['pdf', 'bmp', 'rle', 'dib', 'tif', 'crw', 'nef', 'raf', 'orf', 'mrw', 'dcr', 'mos', 'raw', 'pef', 'srf', 'dng', 'x3f', 'cr2', 'erf', 'cin', 'dpx', 'gif', 'rla', 'rpf', 'img', 'ei', 'iff', 'tdi', 'jpg', 'jpe', 'heif', 'heic', 'svg', 'ma', 'exr', 'pcx', 'png', 'hdr', 'rgbe', 'xyze', 'sgi', 'bw', 'rgb', 'pic', 'tga', 'vda', 'icb', 'vst'];
        var aiAndPsdExtensions = ['ai', 'psd', 'psb', 'eps'];
        var folderTypes = {
          Audio: {
            name: 'Audio',
            found: false
          },
          Compositions: {
            name: 'Compositions',
            found: false
          },
          Images: {
            name: 'Images',
            found: false
          },
          NullsAndSolids: {
            name: 'Nulls & Solids',
            found: false
          },
          Video: {
            name: 'Video',
            found: false
          },
          Other: {
            name: 'Other',
            found: false
          },
          OldFolders: {
            name: 'Old Folders',
            found: false
          },
          AI_PSD: {
            name: 'AI & PSD',
            found: false
          },
        };
        for (var i = itemsArray.length - 1; i >= 0; i--) {
          var item = itemsArray[i];
          if (item instanceof FolderItem) {
            // Skip the folders we created
            if (isFolderInFolderTypes(item, folderTypes)) continue;
            item.parentFolder = getOrCreateFolder(folderTypes.OldFolders.name);
            folderTypes.OldFolders.found = true;
          } else if (item instanceof FootageItem) {
            var fileExt = getFileExtension(item.name).toLowerCase();
            if (indexOfArray(imageExtensions, fileExt) !== -1) {
              item.parentFolder = getOrCreateFolder(folderTypes.Images.name);
              folderTypes.Images.found = true;
            } else if (indexOfArray(audioExtensions, fileExt) !== -1) {
              item.parentFolder = getOrCreateFolder(folderTypes.Audio.name);
              folderTypes.Audio.found = true;
            } else if (indexOfArray(videoExtensions, fileExt) !== -1) {
              item.parentFolder = getOrCreateFolder(folderTypes.Video.name);
              folderTypes.Video.found = true;
            } else if (indexOfArray(aiAndPsdExtensions, fileExt) !== -1) {
              item.parentFolder = getOrCreateFolder(folderTypes.AI_PSD.name);
              folderTypes.AI_PSD.found = true;
            } else if (fileExt === '') {
              item.parentFolder = getOrCreateFolder(folderTypes.Other.name);
              folderTypes.Other.found = true;
            }
            // Check for solid and null layers
            if (item.mainSource instanceof SolidSource) {
              item.parentFolder = getOrCreateFolder(folderTypes.NullsAndSolids.name);
              folderTypes.NullsAndSolids.found = true;
            }
          } else if (item instanceof CompItem) {
            item.parentFolder = getOrCreateFolder(folderTypes.Compositions.name);
            folderTypes.Compositions.found = true;
          }
        }
        // Remove folders that aren't needed anymore
        for (var key in folderTypes) {
          if (folderTypes.hasOwnProperty(key) && !folderTypes[key].found) {
            var folder = findFolder(folderTypes[key].name);
            if (folder) folder.remove();
          }
        }
  
        function getOrCreateFolder(folderName) {
          for (var i = 1; i <= items.length; i++) {
            if (items[i] instanceof FolderItem && items[i].name === folderName) {
              items[i].twirled = false; // Twiddle the existing folder closed
              return items[i];
            }
          }
          return items.addFolder(folderName);
        }
  
        function findFolder(folderName) {
          for (var i = 1; i <= items.length; i++) {
            if (items[i] instanceof FolderItem && items[i].name === folderName) {
              return items[i];
            }
          }
          return null;
        }
  
        function getFileExtension(fileName) {
          var lastIndex = fileName.lastIndexOf('.');
          return lastIndex !== -1 ? fileName.slice(lastIndex + 1) : '';
        }
  
        function isFolderInFolderTypes(folder, folderTypes) {
          for (var key in folderTypes) {
            if (folderTypes.hasOwnProperty(key) && folderTypes[key].name === folder.name) {
              return true;
            }
          }
          return false;
        }

        function indexOfArray(array, value) {
          for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
              return i;
            }
          }
          return -1;
        }
        app.activate();
        app.endUndoGroup(); // End the undo group
      }
        return panel;
    }

    var scriptPal = buildUI(thisObj);
    if ((scriptPal !== null) && (scriptPal instanceof Window)) {
      scriptPal.center();
      scriptPal.show();
    } else {
      scriptPal.layout.layout(true);
    }
  })(this);