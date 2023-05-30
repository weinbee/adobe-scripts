(function(thisObj) {

// Any code you write here will execute before the panel is built.

buildUI(thisObj); // Calling the function to build the panel

‍

function buildUI(thisObj) {

var windowName = "your script name";

  var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("window", windowName, undefined, {
          resizeable: true
     });

      // Write any UI code here. Note: myPanel is your window panel object. If you add groups, buttons, or other UI objects make sure you use myPanel as their parent object, especially if you are using the only ScriptUI panel builder.

‍
     myPanel.onResizing = myPanel.onResize = function() {
        this.layout.resize();
     };
     if (myPanel instanceof Window) {
        myPanel.center();
        myPanel.show();
     } else {
        myPanel.layout.layout(true);
        myPanel.layout.resize();
     }

}

// Write your helper functions here

})(this);