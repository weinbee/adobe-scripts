(function(thisObj) {

    buildUI(thisObj);

    function buildUI(thisObj) {
        var windowName = "N-bar Alhpa";
        var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", windowName, undefined, {
            resizeable: true
        });

        myPanel.orientation = "column";

        var expressionContainer = myPanel.add("panel", undefined, "Expressions");
        expressionContainer.orientation = "column";

        var expressions = [];

        function addButton(expressionData) {
            var buttonGroup = expressionContainer.add("group");
            buttonGroup.orientation = "row";
            buttonGroup.alignChildren = "center";
        
            var deleteButton = buttonGroup.add("button", undefined, "-");
            deleteButton.size = [20, 20];
        
            deleteButton.onClick = function() {
                alert("Clicked the '-' button");
        
                var index = expressions.findIndex(function(data) {
                    return data.expressionButton === deleteButton.parent.children[1];
                });
        
                if (index !== -1) {
                    expressions.splice(index, 1);
                    buttonGroup.parent.remove(buttonGroup);
                    expressionContainer.layout.layout(true);
                    alert("Button deleted!");
                }
            };
        
            var expressionButton = buttonGroup.add("button", undefined, expressionData.label);
            expressionButton.expression = expressionData.expression;
            expressionButton.onClick = function() {
                pasteExpression(this.expression);
            };
            expressions.push({
                label: expressionData.label,
                expression: expressionData.expression,
                expressionButton: expressionButton
            });
        
            myPanel.layout.layout(true);
        }        

        var newButton = myPanel.add("button", undefined, "New Button");
        newButton.onClick = function() {
            createNewExpression();
        };

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

        function createNewExpression() {
            var newExpressionWindow = new Window("dialog", "New Expression", undefined);
            newExpressionWindow.orientation = "column";

            newExpressionWindow.add("statictext", undefined, "Button Name (max 8 characters):");
            var buttonName = newExpressionWindow.add("edittext", undefined, "");
            buttonName.characters = 8;

            newExpressionWindow.add("statictext", undefined, "Expression:");
            var expressionField = newExpressionWindow.add("edittext", undefined, "", {multiline: true});
            expressionField.size = [300, 100];

            var saveButton = newExpressionWindow.add("button", undefined, "Save");
            saveButton.onClick = function() {
                if (buttonName.text && expressionField.text) {
                    addButton({label: buttonName.text, expression: expressionField.text});
                    newExpressionWindow.close();
                } else {
                    alert("Please enter a name and expression.");
                }
            };

            var cancelButton = newExpressionWindow.add("button", undefined, "Cancel");
            cancelButton.onClick = function() {
                newExpressionWindow.close();
            };

            newExpressionWindow.center();
            newExpressionWindow.show();
        }

        function pasteExpression(expression) {
            var comp = app.project.activeItem;
            if (comp && comp instanceof CompItem) {
                var selectedLayers = comp.selectedLayers;
                if (selectedLayers.length > 0) {
                    app.beginUndoGroup("Paste Expression");
                    for (var i = 0; i < selectedLayers.length; i++) {
                        var layer = selectedLayers[i];
                        if (layer.selectedProperties.length > 0) {
                            for (var j = 0; j < layer.selectedProperties.length; j++) {
                                var property = layer.selectedProperties[j];
                                if (property.canSetExpression) {
                                    property.expression = expression;
                                }
                            }
                        }
                    }
                    app.endUndoGroup();
                } else {
                    alert("Please select at least one property to apply the expression.");
                }
            } else {
                alert("Please select a composition.");
            }
        }
    }

})(this);

