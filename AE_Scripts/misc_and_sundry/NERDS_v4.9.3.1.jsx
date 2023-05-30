/*
NERDS_vX.Y.Y
Written with love for the students of VCT278 SPR 2023
No Copyright, Nic Hartmann™ 2023
Use Without Caution
*/


vers = "4.9.3.1"; // change version number here and it gets updated in the panel's name
(function createDockablePanel(thisObj) {
    function buildUI(thisObj) {
        var windowNERDS = (thisObj instanceof Panel) ? thisObj : new Window('palette', 'NERDS_v' + vers + '', undefined, {
            resizeable: true, independent: true
        });
        windowNERDS.orientation = "column";
        windowNERDS.alignChildren = ["center", "top"];
        windowNERDS.spacing = 0;
        windowNERDS.margins = 5;

//#region UI stuff
        /*
        000000000000000000000000000000
        0000000000 UI Code 00000000000
        000000000000000000000000000000
        */

        // GRPTOP
        // ======
        var grpTop = windowNERDS.add("group", undefined, {
            name: "grpTop"
        });
        grpTop.orientation = "row";
        grpTop.alignChildren = ["center", "fill"];
        grpTop.spacing = 5;
        grpTop.margins = 10;

        // PANELREPO
        // =========
        var panelREPO = grpTop.add("panel", undefined, {
            name: "panelREPO"
        });
        panelREPO.text = "REPO";
        panelREPO.orientation = "column";
        panelREPO.alignChildren = ["left", "center"];
        panelREPO.spacing = 0;
        panelREPO.margins = 10;
        // Custom symbols for REPO
        var buttonSize = [20, 20];
        var buttonSymbols = [
            ["◤", "▲", "◥"],
            ["◀", "■", "▶"],
            ["◣", "▼", "◢"]
        ];
        // Updated button creation code block
        for (var i = 0; i < 3; i++) {
            var row = panelREPO.add("group");
            row.orientation = "row";
            for (var j = 0; j < 3; j++) {
                var button = row.add("button", undefined, buttonSymbols[i][j]);
                button.size = buttonSize;
                button.col = i;
                button.row = j;
                button.onClick = function() {
                    var ignoreMasks = false; // You can set this to true if you want to ignore masks
                    moveAnchor(this.col, ignoreMasks, this.row);
                    app.activeViewer.setActive(); // Activate the After Effects main window
                };
            }
        }

        // GRPMAINBUTTS
        // ============
        var grpMainButts = windowNERDS.add("group", undefined, {
            name: "grpMainButts"
        });
        grpMainButts.orientation = "row";
        grpMainButts.alignChildren = ["center", "center"];
        grpMainButts.spacing = 0;
        grpMainButts.margins = [4, 5, 4, 4];
        grpMainButts.alignment = ["fill", "top"];

        // COL1BUTTS
        // =========
        var col1Butts = grpMainButts.add("group", undefined, {
            name: "col1Butts"
        });
        col1Butts.orientation = "column";
        col1Butts.alignChildren = ["left", "left"];
        col1Butts.spacing = 0;
        col1Butts.margins = 0;

        var iconButtNull_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00O%00%00%00%15%08%06%00%00%00%07!%C2%B3%17%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%03%C2%85IDATX%C2%85%C3%ADX%C2%BFk%C3%93A%14%C3%BFD%0C%14%C2%9A!%C3%89R%C3%92%C2%A1%C2%86%C3%90%C2%A5S%03%09%C3%AD%C3%90%0E%11%C3%92%C2%A1%C2%9D%5C%C2%AE%C2%B85S%C2%9D%C2%9C%0D.I%C3%80%C2%A1%C3%8E%3A%05%07A%5C%7C%C3%B6%0F%C2%90%06L%C2%A1%1D%02%C2%86vrhc%C2%A8%C2%83%C2%8BCS1s%2B%2F%C2%BE%C2%93%C3%AB%C3%B5%C3%AE%C2%9B_%15%14%C3%B2%C2%81%C2%90%C3%AF%C2%BD%C3%BB%C2%BEww%C2%9F%7B%C2%BF%C2%92%C3%90%C3%95%C3%95%15%26%18%0Dw%26%C2%BC%C2%8D%C2%8E%09yc%C3%A0%C3%AE%7F%C2%BB%C3%B3%5B%00%11%C3%A5%C3%98%C2%8AR%C2%AA%C2%8E%C3%9F%C3%A34%C2%80(%C2%80c%C2%A5%C3%94%05%11%C3%B13%C3%8B.%C2%94R%C3%87%C3%B6%C2%8A%5E%C3%B2%C2%88%C3%A8%1D%C3%9B%C2%B5%C3%84%1D%C2%A5T%C2%9C%C2%88%C2%9E%00%C3%98%C3%91%C2%AF*%C2%A56%0D%3Ds%C3%8EDV%C2%9E%3F%C2%99%C2%B6%C2%AC5%C3%8F%01%C3%84%C3%AC%C2%AD%C2%98%C3%B6%C2%87%C3%99%C2%A7O%07%40%12%40%01%40I%C3%86!%00%C3%A5H%24R%C3%A8v%C2%BB%C3%B7%00%C3%9Cga%26%C2%93)4%C2%9B%C3%8D-%00%C3%BB%00r%C2%B6%C2%91%C2%A0%C2%B0%C3%A5CT%01%C2%AC%C3%89%C2%A7%C3%882%22%C3%9A%03%C2%90%02%C3%90%C2%94y%C3%BB%C2%B0%C2%90%C2%B95%C3%A3%C2%A3%C3%AD%C3%A9w%C2%8B%1E%C2%BD%C2%98%C3%8Ci%5D%C2%9F%C3%BD%C2%BE%C3%BB%C3%AC%C2%A3%C3%83%C3%A4%C2%95R%C2%A9%C3%947%00%C3%8FEVZXX%60%C3%A2*%00%C3%8E%C2%98%C2%AC%C2%99%C2%99%C2%99%C2%AD%C3%99%C3%99%C3%99C%00%C2%AF%5DFnx%C2%9Eu%C2%93E%C2%A5TM%C3%A4M%C2%91i%C2%AFby%5B%C2%88%C2%B4%3D%C2%AE%C2%A6%C3%B5d%C2%8E%C2%BF%C3%B6%C2%8Ce%C2%9A%C3%86%C2%B3%C3%ADqMc%C3%8D%C2%8C%C2%B6%3F%C3%84%3E%03Y%1309%C2%95L%26%C3%B3%C2%BD%C3%9Dn%7F%16Y%25%C2%99L%22%C2%99L%C2%96e%5C%C2%9F%C2%9E%C2%9E%C3%86%C3%8A%C3%8AJ%C3%9Dg%C3%93%C3%A5y%C3%8E%5BSJq(%C3%B0-%C2%B1%C2%A5%C3%8E%20%3B%1C%02%C3%BD%3C%C3%85%C2%85Qt4%C2%98%3C%26%C2%89%C2%89%C3%93%C2%B9%C2%8C%C3%87e%C3%89s%C2%8C%C2%BA%C3%88%60%C2%BCs%0DCW%5B%C3%89%3FLbm%C2%80%C3%97%C3%BFi%C3%AC%C3%AE%C3%AE%3E%13%C2%92zh4%1A%1B%00%C2%9E%C3%AA1%17%10y%C3%A7%C2%95%C3%AB%1C%03W%5B%22%C3%A2%C2%9B%C3%9E%C2%96%C2%90%C3%AC%C3%A5%09%09%C3%95%C3%BF%11%C2%9C%C3%BC%3F%5E%5E%5E%C3%AA%C2%AD%C2%B3%C2%B7%3D%C2%9E%C2%9A%C2%9AZ%09%C2%87%C3%83%3F%C2%89hC)%C2%B5%C2%94%C3%8B%C3%A5J%C3%B5z%C2%8F%C3%9B%C3%83%C2%B1%C3%88%C3%A3%C3%A2%239%C2%ADJD%C2%9Ccn%3Bt%7D%C3%88%13%C2%91%C3%B93%C2%A8%C2%A8%2F%2F%08%C2%96%C2%8E%C2%B3b%C2%AF%C2%AE%C2%AE~988x%C3%89%C2%AD%08%C3%A7%C3%AF%C3%85%C3%85E%C2%9C%C2%9C%C2%9C%C2%BCQJqX%2FE%C2%A3Q%2C%2F%2F%7Fh4%1A%C3%AF%5DK%C2%8D%C3%92%24o%C3%8Bg%18d%C2%8Dj%C2%98%1DB%C2%AF%C3%AA%C2%A8%C3%9A%C2%81%C2%90%C3%82a%C3%AA4%1D%C3%B9%C2%91%C3%9D)%C2%94H%24%C2%B2F%3E%7B%0B%C3%A0%C2%85%10%C3%87(%C2%87%C3%83%C3%A1%C3%90%C3%9C%C3%9C%C3%9CC%00-%C3%97%C2%9A%7F%C2%ABIfo9%C3%97%C2%BD%C2%96R%C3%AAOu%0D%C3%A8%03o%40%C2%BC%C3%9B%C2%AE%C3%9A%C2%83%C3%A8%C2%99%3A%C3%9E%089%3A%3A*%C2%98%C3%85%C2%80%C2%88%C2%92v%C2%93%3C%3F%3F_%C2%B0%C2%BB%03%C2%8D~%C3%A4m%13Q%5E%C2%9Ec%0EyJ%C3%9A%15%17tOhC%C3%B7%C2%88%C2%8F%3Cz%3BA%07%1E%60%C2%9F62%C2%8E%C3%83%C3%B7%C2%9A%C3%A4V%C2%AB5V%C2%93%C3%9C%C2%8F%C2%BC%C2%94%C3%91g%C2%B5-9%24%C2%AC%7C%C3%A41%7C%07%C3%9A4%C2%BD%C3%91qX%17%C2%AA%C3%92%00%C2%BB%C2%AA%7C%C3%8A%C3%93%0F%C3%96%C2%A43%C2%B0%C3%B7%C3%98k%C2%92c%C2%B1%C3%98%C2%8FN%C2%A7%C2%A3%3D%C2%AF%C2%94H%24pzz%C2%BA%2F9%C3%B0A%3C%1E%C3%9F%C2%8AD%22_%C2%BB%C3%9D%C2%AE%C2%B3U%19%26l%C3%9B%C3%96%06%C3%9BV%C3%A2%C2%AE%C3%8AwPH%C3%B6%3C.%C2%80%C2%B8%20%C2%90%19%C2%8E%03%C2%A2%C3%A6).%C2%BD%269%C2%9F%C3%8F%C2%9F%19%C2%BF%1E*%C3%A9t%1A%C3%A9tZ%C3%B7vQ.%18%C3%AB%C3%AB%C3%ABu%C2%B3%C2%9D1%C3%A1%22%C2%AF%C3%AA%C2%B9%C3%9D%C2%B6%25%C2%BFv%C2%9B%C2%9C%C2%9F%C2%88%C2%A8zS%C3%AD%C2%BA%0D%0Fq%C3%85%01%C2%B8%C2%B0%C3%B5%7C%C3%BB4%C3%A1%C2%9B%3F3%1A%60%0D%7B%C3%AC%25Mc%C3%B2g%C3%A8%18%C2%98%C3%BC%C2%9F7%06%26%C3%A4%C2%8D%C2%81%09y%C2%A3%02%C3%80%2FA~V!%0D%3C%C3%98%C3%9A%00%00%00%00IEND%C2%AEB%60%C2%82"; 
        var iconButtNull = col1Butts.add("iconbutton", undefined, File.decode(iconButtNull_imgString), {name: "iconButtNull", style: "toolbutton"});
            iconButtNull.helpTip = "Select any number of layers (even if it's zero layers!), press this button, and it will make a null with all selected layers as children.";
            // iconButtNull = createANull
            iconButtNull.onClick = function() {
            createANull();
            app.activeViewer.setActive();
        };

        var iconButtReverse_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00O%00%00%00%15%08%06%00%00%00%07!%C2%B3%17%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%02%C3%99IDATX%C2%85%C3%ADX%C2%B1n%1AA%10%7D%C2%89%C3%9C%C3%87%C3%B7%05%C2%89%C3%B0%07%C3%84%12.%C3%92%C2%85%C2%82%C3%94I3i%C3%93%C2%992tP%C3%9A%1D%C3%AEh%C2%A1s%7B%C2%AFJmK!%7D%C2%90%C3%B2%03A%C3%BC%01%C3%8E%17%10%C2%8D2%0B%C3%83f%C2%8F%5B%C3%80%C3%A5%C2%8D%C2%B4%3A%C3%B6n%C3%B6%C3%8D%C3%9C%C2%9B%C3%99%C2%B7%C3%B6%C2%BDX%C2%AF%C3%97h%C3%AC8%7B%C3%99%C3%B0v%C2%BC5%C3%A4%C2%9D%60%0Dy'%C3%98YXJ%C2%B2%00P%C2%A4%C2%A0Dd%C3%A1%C3%A7%24%5B%09%C2%B7%C2%95%C2%88%C2%AC%0CG%C3%97%C2%AC%C2%A25%C2%9B%C3%BB%C2%87%C3%84%C2%8A%C3%97%26%C3%AE%C3%AF%C3%85%C3%89%C3%89%C3%A7X%C3%BA%7C%C3%A7%C2%95%00~'%C3%86O%C2%92%03%17%C2%B4%5B%C3%A5g.z-%13%04%C2%97%C3%8E'%2B%16%C2%B6%C2%85*%C3%ADY%0A%C2%B3%0E''%C2%9FJ%23yNrVG%5E%0F%C3%80c%C3%82g%C2%AE%05%C2%B2%17%C3%91%C3%AB%20%C3%A1%C2%A36u%C2%BF%C2%95%C3%A0I%C2%A8%C2%AE%25%C3%9E%3D%24%16v%C2%89%C3%9B%C2%BCpDB%16NF%3E%C3%BBl%0C%C3%A0%3D%C3%89~%C3%AC%C2%B3!%C3%8F%C3%9A%C3%BC3%C2%80%0B7%C2%AE%2CH%C3%98%1A%23%C2%9B%0F%23%C2%BF%0B%11%C2%B9s%2F47%C2%BF%C2%87%C2%90%C2%B0%C2%B7%C2%9CX%24%C3%9BF%C2%9C%5E%17V%C2%9C%C2%B6%11%C3%98%3E%20%C3%A7%C3%9A%7C%5C%C2%B1%3A%24%C3%97%3Al~%09%C3%A0%C2%8B%3D%C2%BE%C3%91.%C3%B4%C3%BEg~b%C3%BB%7F%C3%A5%C3%80R%C3%9A%06%C3%93%C2%B7%C3%BF%C2%B4%C3%890%1EI*%C2%B9%C2%93*%3D%C3%8A%C2%8C52%C2%B2%C3%A6F%C3%9C%C3%8A%08%C3%A8%C3%9A%C2%B3%0F98%C2%B9%C3%B9T%C3%98%C3%98%C3%9D~%C2%A5%04%02%C3%98t%C3%A0%0EyV%C2%95Q%C2%84%13%C2%93%C2%A4s%09%C3%957%1BF%C3%82%3Bw%C3%9Bi%C3%A4%C3%96%1D%12%C2%ABe8%3D%11%C2%99%C3%9B%1A%C3%AD%C2%B2%07%7BvH%C3%8E%C2%B5%C3%B9%C3%84F%C3%B2%C2%93n%C3%97%C3%A8%C3%B6W%C2%92c%11Y%22%26%0F%C3%80%C2%B5%C2%8D%C2%9D%C3%B7t%C2%81%C2%AFL%C3%B3b%C3%9D%2B%C2%A8%C2%82(B%C3%93E%C2%894'%C3%86%C3%89%C2%89%C2%A52%C2%B0%08%C3%84a%7BR%0F%3Dyu89%C3%B9%C3%98v%C2%BC%C2%B4%11%C3%AC%1D%C2%80%7B%00%1D%00%C2%AF%01%C3%BC%00%C2%A0%07%C3%87%1B%00I%C3%B2%C2%A6Qb%C2%B0%C2%A0%C3%9AeSK%C3%BE.%C3%91%C3%BE%C3%81%C2%87V%C3%99%C3%82%12%5B%C2%A4prbY%C2%81%C2%B4(%C3%9Ay%C3%84%C2%B6%C3%8BJ%C3%9B%C2%A6%C2%B98%C2%B5%C3%B9%C2%88%C3%88%C2%93v%14%C2%80%C2%B7%C3%AE%C3%B9%C3%80%08%5B%1Ay3%11%C2%B9%C3%B1AR%C2%9A%C3%97%C3%9B%C2%94%C3%A6%C2%9F~%5C%7BM%C3%89%C3%B1%C2%B1d%C2%B5%13%C2%A7%C3%8F%C2%80S%24%C3%A6%C3%8F%C2%9E%C2%8Fi%C3%99%C3%B7%C2%A8%08%C3%BDH%C3%B7v%2C%C2%A5yq%C2%B2%C2%88%7C%C3%A2*W%C2%89p%C3%A1%7CS8%C2%B5%C2%B1r%C3%AC%00%C2%9C%C2%BD%C3%B9%C2%88%C3%88%C2%8C%C3%A47%00%1F%C3%AD%C3%96%C2%BD%C2%88%C3%BC%22Y%C2%99%C2%85%C3%BF%0F%C2%A3m'R%3B%C3%B2a%C3%98%16%24'%09%7D%09%3Ea%1B%C2%AD%C3%9C%C3%B6%1DU%C3%A0%C3%94%C3%86%C3%8A%C2%B1L%C2%9C%C3%9A%7C%C2%9C%C3%B5%C2%8D%C2%BC%3F%C3%A1T%15%C2%91N-yFJ%C2%918%C2%85Z%16(%C3%BCN%C2%9DR%C2%AA%1BA%C3%A8iz%C2%B2%0F''%C3%96%C3%82tjs%C3%88%C3%A8%C2%9FG%24%C2%BD%C3%86%C3%A5%C3%A0%C3%A4%C3%A4%13%C3%B0%C2%97%24o%01%3C%C2%A9%0E%26%C3%9Es%C3%97%C3%B4%7B%5E3%C2%B6%C2%A3%2C%C3%8B%C3%B3%5C%3E%C2%9A%C2%8F%C2%A1'X%C3%B3I%C3%AA%04k%C3%88%3B%C3%81%1A%C3%B2%C2%8E5%00%7F%01k%7B%C2%93m%C2%8E%3FL%C3%BC%00%00%00%00IEND%C2%AEB%60%C2%82"; 
        var iconButtReverse = col1Butts.add("iconbutton", undefined, File.decode(iconButtReverse_imgString), {name: "iconButtReverse", style: "toolbutton"}); 
            iconButtReverse.helpTip = "Select at least two layers, press this button, all layers will reverse their layer order.";
            // iconButtReverse = reverseSelectedLayers
            iconButtReverse.onClick = function() {
            reverseSelectedLayers();
            app.activeViewer.setActive();
        };

        var iconButtLoop_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00O%00%00%00%15%08%06%00%00%00%07!%C2%B3%17%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%03%C2%BFIDATX%C2%85%C3%ADXKH%1BA%18%C2%9EmMmR%C2%AC%C2%89%1A7%C2%89%C3%B1%C2%91%C3%94CH%C2%A1XL.%C3%8D%C2%A1%C2%82%C3%9B%C2%8BX%C2%AB%C3%A8x%C2%B1%07A%0C%5E%C2%BC%09%0D4%C3%92%C2%A2%C2%82)%C3%98%5E%C3%84K%C3%ADA%C2%90%C3%A2cZ%C3%B4R%2C6%15O%C2%B5%07%1F%C3%8DB%C2%B1Mz(%C2%88%16%1BH%08%C2%8Di%12%C2%92%C3%9D%C2%B2!%C2%BB%5D%C3%93%C2%A4%C3%86%C3%9D%C3%84C%C2%9B%0F%C2%96%C3%8C%C3%BE%C2%99ov%C3%A6%C3%9B%C3%B9%1F%3B%18M%C3%93%C2%A0%00a8W%C3%90M8%0A%C3%A2%C2%89%40Q%3A*B%C3%A8%1E%00%C3%80%C3%81%C2%B7A%08%C2%B1L%C2%8FI%C3%97%3F%13R%C3%87%11%C3%8AE%08%09%C2%8976%08%C3%A1%23%C3%B6f%7D%7D%1Dkjj%C2%92%C2%B0%C3%B7%C2%81%40%00lll%C3%A0%C2%91H%C2%84%C2%B3a%18F%C2%99%C3%8D%C3%A6C%C2%B5Z%1D%C3%A7%3D%3B%0E!%C2%8C%C3%BF!%5Er1D%C2%B6%C2%B3%11%C3%98%7F%0BB%C3%A8%14%C3%83%C3%8D%C2%96%C2%93%02%02!%04%C3%B8%02%C2%B2%C2%88%C3%85b%C2%8C%C3%9DA%C2%92doqq1%C3%85%C3%9A)%C2%8Ab%5E%C2%98kkk%C2%AB%C2%BD%C2%B2%C2%B22%C3%8C%C3%A7%C2%A4s%5B%C3%87i%16%24%C2%B0%7Fc%0E%C2%B8B%40d%C3%9A%C3%A5GG%C2%A1K%C3%9B%C3%9B%C3%9Bwu%3A%C2%9D%C2%BB%C2%BA%C2%BA%C3%9A%C2%AD%C3%97%C3%AB%C3%9D%C2%B5%C2%B5%C2%B5%C2%89v%24%12%C2%B9F%C2%92%C2%A4)%C2%95%C3%B3%C3%8F%C3%85%C2%BC%C2%A4k%C3%9BR%C3%9B'%C3%81%C3%A9%7C%C2%A3%C2%A1i%C3%BA%C2%82%C3%89d*%C3%AA%C3%AD%C3%AD%C3%95%0C%0D%0D%C3%A9%C3%BA%C3%BB%C3%BBU%16%C2%8B%C2%85%C2%96%C3%8B%C3%A5%C2%91%C2%95%C2%95%15%7D%C3%AA%10ic%C2%9EH8%C2%93%C2%97%23%C2%A5%C2%9D%C3%95%1ADp%C3%B9%C3%B0'%C2%B9Yagg%C2%A7bpp%10%C3%99l6%C2%AA%C2%A3%C2%A3%C2%A3Q%C2%A3%C3%91p%C2%B4%C3%A6%C3%A6f%C2%9D%C3%91h%C3%BC%3A666b4%1A%3D%7D%7D%7D%1B%C3%AC%7F%C3%B9%C3%98yN%5ELq%C2%A6%C2%8B%2Fy%C3%A2r%C2%80%10%3E%C2%85%10%C3%9E%C3%8A%C2%B6%C2%BF%C3%9Dn%C2%B7wvv%C2%AA%C2%BB%C2%BB%C2%BB%15%C2%ACp%3E%C2%9F%2F%C3%B1%2B%C2%97%C3%8BA%5B%5B%5B%C3%9D%C3%80%C3%80%40%60tt%C3%B4I%20%10%C3%A0%C2%92I%3E%C3%9D%C2%96%C2%99%3C%3Ak.%C2%93T%10B%04%C3%882%C2%99%C3%AD%C3%AF%C3%AF%C2%97%C2%B8%5C%C2%AE%C3%9B%C2%AD%C2%AD%C2%ADR%C2%A5R%C3%89%C3%99C%C2%A1%10%C3%97%C2%96J%C2%A5%C2%80%20%C2%88%1A%C2%85Bqyff%C3%A6%26k%C3%8F%C2%87xzf%C3%B2lFd%17r%06%5C%16%C2%A7JHn%C2%B7%C3%BB*%C2%8E%C3%A3%C3%92%C2%AA%C2%AA%C2%AAb%C2%BE%C2%BDb%C3%8F%C3%8D%C2%A4Z%C3%AE%5E%C2%A5R%C3%89zzz%C2%B6%C3%87%C3%87%C3%87'Y%5B%C3%961%2FM%5De%C3%8B%C3%A0V%C3%96%C3%A4%C3%85%04kx%C3%8A%C2%98%25%C2%86%C3%8B%C2%87%03!%C2%94%15W%26%C2%93%C2%9D%C2%8B%C3%87%C3%A3T%3C%C3%8E%C2%95q%C3%80%C3%AF%C3%B7%C2%83%22u%0D%C2%B8%C2%88%C3%BD.I)%C2%8A%02%1E%C2%8F'%C2%ACP(%C2%A4%C2%AC-%1F%09%23%C2%81%C3%93%C3%96p%C2%B9%C3%A2%C3%BE%05i%C2%B3%C2%AE%C3%81%60%C3%B4%C3%B8%7C%C2%BE%C3%98%C3%9E%C3%9E%5E%C2%A8%C2%BE%C2%BE%5E%C3%86%C2%88%14%C2%8DF%C2%81%C2%A2%C2%AE%C3%BEX%C2%BF%C2%83%C2%83%C2%83%C3%A0%C3%9A%C3%9AZ%C3%A3%C3%B4%C3%B4%C2%B3%C2%87%5E%C3%AF%C3%B7%C2%84-o%C3%A2%C2%89%C3%985b%C2%B9i%C2%91)%C3%B9%C2%94%C2%96%C2%96x%C2%BB%C2%BA%C3%A0%C3%BB%C3%99%C3%99%C3%99%C3%AB%06%C2%83%C2%A1%C2%8EI%188%C2%8E%1F%C3%AB%13%0C%06%C3%81%C3%A2%C3%A2%C3%A2G%C2%A5RYn%C2%B1%C3%9Cx%C2%B1%C2%BC%C2%BC%C2%9C%C2%B0%C3%A7S%C2%BC%C2%B3F%C2%A60r%22%C3%AC%C3%B6%C3%BB%0F%08%C2%82x599%C3%B9%C3%85j%C2%B5%5E%C3%91j%C2%B5%C2%98D%22I%C2%B8%C2%AA%C3%97%C3%AB%C2%A5%C3%A7%C3%A6%C3%A6%3E%C3%8C%C3%8F%C3%8F%C2%AB%C2%96%C2%96%C2%96%C2%86%25%12I%C2%90%1D%2F%17%C3%A2%C3%99%C2%92.%26%C3%84%C3%8D%C3%84ps%C2%86%C2%B2%C2%B2%C2%B2%C3%8F%0B%0B%C3%88j67%3E%3F%3C%3C%7C%C3%9B%C3%90%C3%90P%C2%81%C3%A3%C2%B8%C3%8C%C3%AF%C3%B7%C3%BFp%C2%B9%5C%C3%9FVWW%C2%8D%13%13%C2%8FgL%26%C3%93%22%C3%BF%C2%99%C2%A2%C3%85c%C3%9E6%C3%B3%C2%BD(D%001%C3%9C%5C%C2%A3%C2%A6F%C3%BBN%C2%AB%C3%95%C3%BE%C3%9C%C3%9C%C3%9C%2C'I2%C3%8AT%2B%00%C2%80%C3%B3%14E%C2%A9B%C2%A1P%C2%85%C3%99lz%0D%008%C2%964%C3%BF%C3%AB%C3%83%C3%90%C3%94S%C2%95%C3%9D%C3%9DO%1DSSS%C3%83%C3%A1p%C2%98%2B%5B0%0C%C2%A3%C3%9B%C3%9B%C3%AF%C2%BClii%19%C3%810%2C%C2%91%C2%92%C3%99S%C2%95%C3%82I%C2%B2%C2%80Z%C2%97)%C3%9B%20%C2%84tA%3C%11(%C2%9C%24%0B%05%00%C3%A0%17%2BJ%C2%97%C3%93%C2%B6%2F%C3%91%C2%9C%00%00%00%00IEND%C2%AEB%60%C2%82"; 
        var iconButtLoop = col1Butts.add("iconbutton", undefined, File.decode(iconButtLoop_imgString), {name: "iconButtLoop", style: "toolbutton"}); 
            iconButtLoop.helpTip = "Select a precomp, move timeline indicator to where you want the end of your loop, and press this button!";
            // iconButtLoop = loopAtPlayhead
            iconButtLoop.onClick = function() {
            loopAtPlayhead();
            app.activeViewer.setActive();
        };

        var iconButtColor_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00O%00%00%00%15%08%06%00%00%00%07!%C2%B3%17%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%01%C3%A1IDATX%C2%85%C3%AD%C2%98%C3%ADm%C3%820%10%C2%86_W%5D%C2%80%C2%8E%C2%80%C2%94%09%C3%92%0D%08%23t%C2%85%C3%8A%C2%99%00F%C2%80%09%1C%C2%B1BG%C3%80%19!%13D%C3%AA%080%C2%82%2B%1B%C2%BB%C2%98%C3%86%06%7F%04%C2%A9%3F%C3%BCH%C2%88%C2%90%C3%9C%C3%B9%C2%927w%3E%1B%22%C2%84%40!%C2%8D%C2%97%C2%A2%5B%3AE%C2%BC%0C%5E%C2%9D%C2%AE%2B%C2%B2%01%C2%B0%0B%18v%C2%8B%5E%C3%ACo%C3%8E%C3%90%20_%C2%8EN%C2%AC%C3%AD%13'L%C3%BC%C3%B8%1Bnm%0Clj%C3%AB%C2%8D%C3%93Zc%10%C2%8C%C2%B1s%C3%94V%C2%A0%C3%9A%C3%BB.N3%C3%AF%22%5C%138x%C2%A3%C3%AD%2F%C3%90%60%C3%9F%C2%A5%C2%B2%C2%A5d%C2%89%C2%ABpA1Y%C2%84%C2%AD%C2%8C%23%C3%AD%19.q%12h%08%C3%86%C2%8D%C3%8Fm%C3%9A0V%24%C2%BE%C2%83%C3%B4%C2%82%C2%A8o%1A%C3%AD%C2%BBF'%C3%B8%09N%3Fg%C3%A61%C2%B7%C3%AD%C3%838-%04%C3%B7d%C3%9E%19%C3%80%C2%A0_%C3%88%C2%B7%C3%BE%5D%C3%9B%06%02%15q%0DZ%C3%A6%3C%60%10%C2%A8%C3%8CK%3A%C2%A8%C2%A9(%C2%90g%C2%8Bgn%C3%A4%C2%A0%C2%B2%C3%ACy1%C3%AC%C2%87O%C2%8D%23%C3%BD%C2%BEb%1C%C3%9C%0Dc%C2%8AI%C3%ADX%06%C3%95%1C%C3%A4w'8%C2%A83%C3%BBs%19dI2%10n%1D%C3%87%0C%C2%B9%20%18%1B%C2%81J%C2%96%C3%B5%C3%B2o%C3%89%C3%8E!%C3%9E%C2%80%C3%9E%C3%9D%C3%B9%1E%C3%92%25%C3%BAE%C3%92z%3As%00R%C2%AC%C2%A3j%C3%86%C3%80G%60%17W%C2%84%C2%8A%C2%97%C2%8A%C2%BC%C2%91wP%C3%B2%C2%A9o%2C%C3%AA%C2%A1N%20G%C3%BB%C2%84g%C3%A9%C2%B2c%20g)%1ECR%1C%05%C3%81xT%C2%AB%C2%80%08B%C3%85%5B%60E%C3%BC%C3%8B%C2%83%5Ep%C3%8F%C2%95%1AT%C3%B9%C3%95%11%C3%8B%C2%8Bk%C3%8C0%1FUf%0C%C3%89q%0C%C3%86%2Fx%C2%8A%0A%15%C3%8F%C2%A4%C2%B6%C2%8F%7B%C2%93%C3%8C%3D%C2%BF9%C2%99%2B%C2%8E%C3%9D%7D%C3%AF%C3%B2%C3%AC%C2%B2%C3%BD%C3%AF%C2%98%C3%95%C2%80%3D%C3%8F%C3%95%C2%BA%C2%84%7F%C3%B1%C2%89%C2%99%2B%1E%C3%97%1F%C3%83V%C2%A7%7Fj%C3%A9%C2%840g%C2%8CA%2F%C2%8C%0DM%C3%8C%C3%98%C2%B9%C3%AB%3C~%C2%B3%C2%B7%C3%AD%C3%94%C2%B1o%C3%BE%C2%9B%C2%85%16%C3%B3%C3%86%10%C2%A8%C2%BE%C3%A5%C3%BEU%C3%AFa%C2%A3%C3%86-%C3%BF%C3%A7eP%C2%B6g%19%14%C3%B12(%C3%A2eP%C3%84K%05%C3%80%0F~%C3%A2%C2%92%06%C3%AFU!H%00%00%00%00IEND%C2%AEB%60%C2%82"; 
        var iconButtColor = col1Butts.add("iconbutton", undefined, File.decode(iconButtColor_imgString), {name: "iconButtColor", style: "toolbutton"}); 
            iconButtColor.helpTip = "Opens a color picker. Pick any color and then copy the hex code to use it elsewhere.";
            iconButtColor.onClick = function() {
            colorPicker();
            app.activeViewer.setActive();
        };

        // COL2BUTTS
        // =========
        var col2Butts = grpMainButts.add("group", undefined, {
            name: "col2Butts"
        });
        col2Butts.orientation = "column";
        col2Butts.alignChildren = ["left", "center"];
        col2Butts.spacing = 0;
        col2Butts.margins = 0;

        var iconButtRename_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00P%00%00%00%15%08%06%00%00%00%C3%91%C2%84ir%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%01%C3%97IDATX%C2%85%C3%AD%C2%98%C2%81%C2%8D%C3%820%0CEM%C3%85%02%C2%AC%C3%80%0A%5D!%1D%C3%81%2B%C2%B0%C3%82u%04n%C2%85%C2%AE%C3%A0%11%C3%9A%15%C2%BA%02%2B0%02%C2%A7J%C3%B6%C2%9D%C2%89%C2%9C%C3%84%01%C2%84N%C2%B4_B%C2%A2I%1Ev%C2%8C%1D%07v%C2%B7%C3%9B%0D6%3D%C2%AE%C2%BD%26%C2%89%C2%A8%05%C2%80s%C3%A2%C3%93zD%C2%9C%C3%A3%C3%81%C2%B53%C2%8D%0A%C3%84%11%00B%C3%AE%C3%85%1F%0E%09%C3%A6%00%00%C3%8B%C2%B3%C2%ACY%05%C3%93%C2%A8%C3%B7%C2%98%C2%89%3C%C3%B0%5C%3C%C2%AF%C2%99%1E%00%06%00%C2%98%11%C2%B1%5B%0B%C3%93p%26-%C2%83'%C2%9D%C2%AA%02%03%40%C2%A7%C3%86%5B%22%1A%13LJ%1F%C3%8B%C2%80%C3%8A%C3%80%C2%96%C3%93%C2%B5%C2%A4%03%C2%A7%C2%B2%C3%85%C3%88%C3%B3%C2%81%C2%88%C2%82%1A%C3%BFd%C3%A6%C2%BE%C2%89(%C3%A94%1D%13kV%C3%8FX%01%C2%9C%C2%B9%7Cc%C3%A5%C2%82%C2%98b%C3%84%C2%89%C3%96%18%17%26%C2%9E%C3%AF2%C2%8C%C2%A8g%5E%C3%A4%C3%B1%C2%AD%C3%86N%C3%95~%C3%A2%00%5E%11q%C2%8A)%22%C3%8A%C3%B8h3%C3%8C%5DsL%3Co%C2%8D%19%C2%9A%C2%B5%3D%C2%8Fo%C2%95v%C2%AA%C3%B6c%C2%960%1F%C2%92%C2%BFu%C2%8E%C2%88%C2%BBx%C2%AC%C3%84x%C2%B4t7%22%C3%BA*t%7F%C3%91%C3%84%C3%ABG%7D%C2%88%7B%7CSv%C2%82%C3%AA%C2%A8Yy%C3%B7%C3%93%C2%94%16T%C2%88T%C3%B7v%C2%89%C2%88%C2%A4%C3%AB%C2%B9%19e%C2%A7%C3%8F%C2%94%C3%9A%3D%C3%B0gg%C3%A2%40%C3%96%C3%98%C3%89%C3%BA%C2%96j%22%C3%95B%C3%84%C2%81%C2%9D%0D%C3%8E%C3%AB%00%C3%B0%C2%BDkbg%5D%C2%8C%C3%98%C2%A9%C2%94%C3%98%C2%99%C3%B9%C3%8C%C3%BC%C3%B6%C3%9A)%C3%AD%C3%87%0C%60%C2%9C%C3%A6DT%C3%BC%C3%81%C3%BCH%09%C2%B3%C3%8E%5C%C2%9E%3B%C3%8Fb%C3%ABx%C2%A9%C2%B0%C3%A3%C2%96w%3F%C2%A93%C3%B0%C3%84%C3%B7%1DQ%C3%8F%C3%9FB%C3%AE%C2%AEH%C3%BC-k%C2%95%18%C3%91q)-D%2Cf%C3%86%1B%C3%A5%C3%9AO%C2%AA%C2%84%C3%91h%22!%17%0C%C2%AB%C2%B4J%C2%8C%C3%92%C2%913%C3%A4%C3%9F%04%C3%90%C2%BB%C2%9F8%C2%80%C3%81*%C3%97B%09%C2%9BLA%2F%C2%B3%C3%B3.%26%25%C3%9D%C2%85'%C3%95q%06~%C2%BE%C2%A8N7%18%1Di%C3%B5L%1C%40%C2%B9%C2%95J%C3%BD_%C3%94%C2%B9Dj~cX%C3%9B%3F%C3%92O%C3%AA%C2%95%17%C3%A9Uj%0B%C3%A03%02%C2%80%1F%C2%B6%7B%C2%A7%C2%8B%04%14%C3%83%3E%00%00%00%00IEND%C2%AEB%60%C2%82"; 
        var iconButtRename = col2Butts.add("iconbutton", undefined, File.decode(iconButtRename_imgString), {name: "iconButtRename", style: "toolbutton"}); 
            iconButtRename.helpTip = "Opens a renaming dialog.";
            iconButtRename.onClick = function() {
            var win = new Window('palette', 'Layer Rename', [300, 100, 645, 396]);
            var w = buildrenameUI(win);
            if (w != null) {
            w.show();
            }
            app.activeViewer.setActive();
        }
        var iconButtSmartXY_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00O%00%00%00%18%08%06%00%00%00%C2%BB%C2%BF%C2%A0%C3%89%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%02PIDATX%C2%85%C3%ADY%C2%8B%C2%91%C3%9A0%10%5Dn%C3%92%C3%80%C2%95p%C2%B4%C3%A0%2B%01%C2%97%C2%B0)%C3%81%C2%94%C3%A0%2B%C2%81%2B%01%C2%B7%C3%B0J%08%25%C2%84%16%5C%C3%82Q%027%0BO%19%C2%A1%C2%91%2C%19%13%12%06%C2%BF%19%C2%8Fa-%C2%ADVO%C3%BB3%2C%C2%8E%C3%87%C2%A3%C3%8C%C2%B8%0E%2F3o%C3%97c%26o%02f%C3%B2%26%60%26o%02%C2%9E%C2%92%3C%00%5B%00%C2%AF%C2%81%C3%AC5%C2%94%C3%A5%C3%B0%C2%AC%C2%9EW%C2%89%C3%88%2F%00K9%13%C3%97%C2%8A%C3%88%C2%97%C3%89%C3%86(yV%C3%B2%40%02%C3%8D%037%22b%C3%97ND~%C2%8EQr%C3%91%C3%A7%01(j%C3%BATu%01%C3%80Ni%C2%A7%C2%AA%C2%9FI%0B%C3%8F%C3%BAjU%C3%9D%C3%A5t%C3%B2%C3%B4W%C2%AAZ%C2%8F%C2%B4%C2%A3%C3%A5%C3%A6s%C3%B8%C3%B0m%0D%C3%A6%C3%AD%C2%8D8U%C3%ADK%C3%96u%C2%98%C3%AAy%0DO%C3%AE%02%00*%C2%92%5B%04%C3%AAh%26%C3%9ArS%C2%94%C3%A4%C3%80%1F%09%C3%B9%C2%8EW%0E%C2%963%14%C3%80%C3%81%C2%9D*%C2%80%C2%95%C3%89%C3%8C%C2%8B%0A%C2%89k9%C3%9Et%C2%B9%C2%93%C3%BF%18%C2%98%C2%B2%0At%C3%AF%C2%83%C3%B1%C2%8D%C2%A7%C2%AB%0B%C3%86%C3%B9k%C2%BAP5y%C3%8B%10%5E%C2%9B%C3%B7q%0Fv%C3%B8%3DeQ.R%C3%A4%C3%B5%C3%BEb%19%C2%98%C2%A1%1B%00n%C2%BC%C2%96x%11O%C2%B5J%C2%84%C3%9C%C3%90%C3%9AK%C3%BF%0B7%C3%B6gs%C3%9C%C3%B8%C2%89%C2%BCXJ!q-%C3%97pd%1Dh%C2%87E%C2%8C%C2%B3%C2%A9g%C2%A8'%C2%9D(E%5E%C2%93!%60%11%C2%91%C2%8D%C2%AAT%C2%AE%C3%A2%25%C2%9E%C2%8D%C3%95U%0C%23%14%40%C2%A7%C2%AA%077%C2%872%C3%BB%C3%B8f%C2%84%C2%92%C3%BCl%C2%AE%C3%BE'%C3%95%C2%96%C2%A7%C3%BF%C3%97%08%C3%8A%C3%81'%C3%8E%C2%83y%C2%A2%C3%B3%C3%94%C2%A2%22%17%C2%92W%0F%5C%5DB%C3%87%C2%9Es%1C%C2%BA%C2%A1%C2%9C%15)%0E%C3%B5%40%C2%98%C3%86tu%C2%9E%C2%8D7%01%00K5%5B%3FT%C2%AD%C2%91%C2%8E%C3%98~Q%40%C3%82%C2%B0%C2%AD%06%C2%8CY%26%C3%A4%07.%C3%A66%C2%99%C3%8CW%C2%91%C3%A2%C3%90qn%C3%8C%13%C2%84c%C3%80%C3%8F.7%C3%9A%C3%9C%C2%A5%C2%AA%C2%A6%0Es%14%C2%98%237~%C2%A8%C2%92%C2%A4%C2%86%C3%B75%C3%B5mY%1C%C3%8D%C3%A6%C2%93%2C%24%C2%AF%C2%A4_%C2%8A%22%C3%A8%C2%A1.*m%C2%A48%C2%9CH%19%C3%AA%11%1D%C3%98%7B%7DRg%C3%85JkmD_%12Z%05%C3%BA%C2%8D%C2%ACw%C3%B1%C3%82%C3%99%C3%AE8'A%C3%B5%C2%87%C3%92fGf%C2%B2%60%C3%9C%1Aaq%C3%A8J%C2%88%0B6Y%C2%B3w%5Cy%C3%BAb%C2%85k4%129%C3%90%C2%91%C3%A4%08%C2%84'%3B%C3%A1%C3%A1~I%C3%B6%C3%9F%0C%C3%AC%0D%C3%A3%0E%C3%AB%C3%BD%C3%A6Z%C3%AF%C3%A1%C2%B3G%7C%C2%B7E%C2%A6%C2%89%C2%BE%1B%1E%C2%8E%3C%C3%A6%C3%80%C3%BF%C2%82%C3%80%C3%B9%0F%C2%A0%09%C2%98%7FI%C2%9E%C2%80%C2%99%C2%BCk!%22%C3%9F%C2%92%3B%1E%C3%BCP%C2%BC%C2%86%C2%B5%00%00%00%00IEND%C2%AEB%60%C2%82"; 
        var iconButtSmartXY = col2Butts.add("iconbutton", undefined, File.decode(iconButtSmartXY_imgString), {name: "iconButtSmartXY", style: "toolbutton"}); 
            iconButtSmartXY.helpTip = "Separates the layer's X and Y positions, and attempts to retain their easing/velocity influence.";
            iconButtSmartXY.onClick = function() {
            separateDimensionsPreserveEasing();
            app.activeViewer.setActive();
        }

        var iconButtSort_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00O%00%00%00%15%08%06%00%00%00%07!%C2%B3%17%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%03%C2%ADIDATX%C2%85%C3%ADX_HSQ%18%C3%BFM%C3%9D%C3%94%C2%AB%C3%B3%1F%C2%A8%C3%A4%C2%9F%C2%8C%C2%96%0F%233SA%C3%8B%C2%82IJ%C2%BDx%C2%91%C3%ACD%0F%C2%85%C3%90%C3%83%C2%84%5E%C2%AA%C2%87%C2%9A%C3%B4%10%3D%C2%99%22%04%C2%BE%14%0AAPO%C2%9D%C2%92%C2%BAb%14%0D%C3%94%C2%8AJAS%14%C2%94l%C3%8B%C3%88%C3%BE%C2%998a%C2%A4)%C2%B6%C3%85Ygb%C3%B3%C3%AE%5E%C3%A7U%08%C3%B5%07%C2%97%C2%9D%C2%9D%C3%AF%C3%BB%C3%8E%C3%8E%C3%B9%C3%9D%C3%AF%C3%BC%C3%8E%C2%B7%C2%A3%C3%B3z%C2%BD%C3%98%C3%82%C3%AA%10%C2%B1%C2%99y%C2%93%24i%07%C2%80i%00%09%C2%A2(%C2%8E%C2%85%1A%C2%BF%C3%A92O%C2%92%24%0B%C2%80%C3%8A%C2%99%C2%99%C2%99%C3%83%3D%C3%AF%7Br%2C%C2%B9%C2%96%0B%C3%9F%C3%9D%C3%9FO%1A%C3%83%C2%8Di%C2%82%20%5C%07p%5B%14%C3%85%C3%A9%C2%95%C2%8C%C2%B5)%C3%88%C2%93%24%C2%A9%C2%92%11%C3%86%C2%9E%C2%B67m%C3%B1%C3%9E9%2F2%C3%922%7C%C2%B6%C3%BC%C3%AC%C3%BC%C3%9E%C2%A9%C2%99%C2%A9%C2%82%C3%96'%C2%AD8v%C3%B4%18%5CS%C2%AE%C2%9F%C2%A6%0C%C3%93%7D%00W%C3%95%C2%B2q%C2%B3l%C3%9B%1DR%C2%97T%C2%9D%C2%BC-%19%15%C3%85%15%C2%BE%C2%8E%7B%C2%8F%C2%9F%23%3B3%C2%995%0B%C2%92%C2%84%24T%C2%95V!J%17%C2%85%C2%8EO%1D1%C3%91Bt%C3%B5%C3%A0%C3%A8%605%C2%80G%C2%A2(V%06%1BT%C2%91%3CJ%C2%A9%03%C3%80N%05%C2%97%16BH%0D%C3%B7e~%C2%8E%15%C3%BA2%C2%BF%16%00%C2%84M%5E!%C3%86D%08qRJ%C2%AD%00%C2%9A%C2%95%C3%A6%0A%C3%80I%081%05%C2%B1u%C3%AA%22uH%C2%8DI%C3%B5%7Dy%C3%9A%C3%B9%1A%C3%BD1G%C3%B0%C3%BE%C3%9B%17%C3%AC%C3%9B%03%C3%8C%C3%8E%C3%8E%C3%A2eS%13%0Cqq%C3%88%2B*BZR%1A%C2%86%0D%C3%83%C3%B88%C3%B1%C3%91%C2%AC%C3%B4%C2%83a*%13*W%C2%B1%5B)%C2%A56%C3%96%60%C2%8B%04P%C2%A3%C3%A2k%C3%A5m%C3%A6%C3%ABR!%C2%8E%C3%81A)-%03%C2%90H%08%C3%91%C3%B1%C2%B8%60%C3%98I)%7D%16h%2B%C2%B9%C3%A9%3C%C3%9F%C3%B09%C3%A7%C3%AD%C3%9E%5D%16t%C2%BF%C3%ABF%C3%A3%C2%ADF%C2%BCrt%C3%82%C3%B3%C3%B5%01J%C3%92%3D%3E%C2%9F%0F%2F%5E%C3%A0%C2%B4%5E%C2%8F%2B%0B%0B%18%C3%A9%C3%AB%C3%B3%C2%919%C3%BAa%14Y)Y%C3%97%C2%94%26'%C2%ABy%C2%9C%C2%90z%C2%95%C2%851%C3%B4%02%C2%A8%05%60%C3%A3m%C3%9B%12%C2%9B%C2%93g%17x%7F%22o%C2%B3%17%C2%B2l%C2%91l%1CBH%C2%83L%06%C2%97s%C2%92Y%C2%BFU%26n)%C3%AC%C2%84%C2%90%C3%85%17%3EyW%C2%977%C3%A1%C3%89%C2%B8%3F%C3%A1M7%C3%BD%12%C3%8Aq%C2%A3%7D%00n%C2%AF%1BC%C2%87%C2%86%C2%90x'%1E%C2%B5%C2%A7.%C2%A1%C2%BD%C3%87%C2%81%1F%23%C3%9D%C2%98%14%C3%86%C3%A1%C2%8D%C3%B4%20%C3%92%1D%0Bs%C3%9En%14g%C3%A7%C3%8F%C2%9F%3B%7B1R%C3%A9%C3%87B%C3%92%3C%C3%BE%C3%B6%C2%97%C2%81%C2%93m%0B%C3%A8g%C3%9B%C2%A8%01%7F%C3%AD%C3%96%25%C3%A4%C2%85%04B%C2%88%C2%9DR%C3%AA%C3%A4%C3%B1%0D2%C3%92%C2%B0(%072HH%09%1B7%C2%A5%60%1CQ%C2%99%C2%B98j%C3%8B%C3%A1%1E%C3%BB%C2%81%12%C3%B69%C2%863%07%C3%83%01%1C%C2%90%09u%190%7C%C3%99%C2%9FY%C2%A50%C3%97uj%22%C2%8FR%1A%C2%98%C2%A6J%13%0F%15%C3%B5%C2%94%C3%92%C3%80l%C3%B7i%18%C2%97%04%C2%BF%C2%AE%C2%AE%0A1%C2%B1F-s%C3%AB%C2%97%C3%AB%C2%94%C3%95%3C%C2%9E1-r%C2%B6%00%2Cj%C3%9E%3A%C2%A0%C3%86O%C2%9AVD%08%C2%A9%C3%90%C2%85%2B%C3%AE%40%25%0C%C3%80%5C'%5B%C3%B7%05%C3%8D%3C%C2%9EQ%C3%8B%C2%B2*%04%3D%C3%94%C2%8AfJ%C2%A9%7D-%08%C3%94%C3%87n%C3%97%12%C2%BEl%C2%BB%C3%BA%11%C2%94%3CJi%C3%B3%0A%04z%C2%BD%C3%81%C3%B4MVgC%C2%81%C3%9E%C2%98%C2%A5%25%3C4%C3%B2xvi%25%C2%AELF%23%C2%95P%C3%8B%C3%8B%17%C2%B5z.d%C3%A8%C2%8D%1A2%C3%8F%5C%C3%B70%C2%98I%C2%AD%C3%8ESC%2F%7F(_%C2%B8%1A%C2%A8R%C2%ADF%08i%C3%A1'%C3%AA%C2%9AA%C2%A3%C3%9Eu)%19%C2%B5%1C%18%C2%AC%14)d%C2%A5%04_t%C2%A1%C2%8A%3F%3B%C2%99Op%0D%0B%C3%BC'%60%C3%B7%C2%975%C2%84%C2%90%C3%9A%25Z%C3%BB%C2%8F%C2%9FL!nW%3B%C3%AD%C3%97K%C3%AF%C2%B0%C3%91%2F%06%26%C3%AF%C3%AA%2Cq%C2%A6%C3%A3%1D%C2%86%C2%84%C3%AC%C3%95%0E!%5B%C3%9F%C3%B9%C2%A1u%C3%9B%C3%BE%C3%B7%C3%90%C2%A8w%C2%8A%C2%99%C2%B7%C2%A1oU%C2%A2S%0A%C2%85%C3%9Fs%C2%AE%15%C3%9D%C3%8D%05%C3%823%C3%AF%1E3%C2%A8%C3%B8l%5D%C3%83k%C3%80%C2%86%C3%9F%C2%B6%C3%AB%06%00%7F%00%C2%A5%C3%A2J%C2%83%C2%A3D%C3%B5d%00%00%00%00IEND%C2%AEB%60%C2%82"; 
        var iconButtSort = col2Butts.add("iconbutton", undefined, File.decode(iconButtSort_imgString), {name: "iconButtSort", style: "toolbutton"}); 
            iconButtSort.helpTip = "Sort all project items into folders by category.";
            iconButtSort.onClick = function() {
            sortProjectItems();
            app.activeViewer.setActive();
        }

        var iconButtExplode_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00Q%00%00%00%15%08%06%00%00%00%3EF%02L%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%03RIDATX%C2%85%C3%AD%C2%98_HSQ%1C%C3%87%7F%1BN(%0C%C2%BA%C2%82%C2%A2QB%C3%B7%C3%B6PB%26X%10ik%C3%90%C2%AEd%2F%C3%A9%C3%83%092%C3%9A%C2%93L%C3%B2%25%08C%C2%A9'%7D%C3%8A%C2%87%60%2F%05%C3%B3%C3%8D%05%C2%85%C3%BB%25%3DhOM%C3%90%07%C2%A5%C2%A0%C2%8B%04A%14%C3%AC%C2%92%C2%8C%C3%8C%C2%84%146q%C2%8E%C2%84%C3%85%19%C3%A7%C2%8C%C2%B3%C3%AB%C2%B9%C3%9B%C3%8C%C3%91%1F%C2%B8%C2%9F%C2%97q%C3%AF%C3%B9%C2%9D%C3%9F~%C3%A7%7B~%7F%C3%86%5C%C3%99l%16%1C%C3%B6%C2%87%C3%9B%C3%91o%C3%BF8%22V%00G%C3%84%0A%C3%A0%C2%88X%01%C2%AA%C3%BE%C3%BB%13%C3%BC%05%C2%A6%C2%A7gNNNN%C3%B6%C3%B5%C3%B4%C3%B4%3Coll%C3%BC%C3%A4%C2%8AF%C2%A3C%00%C2%A0%00%C2%80%1F%00%C3%9AlB%C3%92%C3%98g%1C%00%C3%86%09!%C3%BD%7C%01%11%C3%A9%C3%BE%C2%87%00%C2%A0%13Bb%C2%88%C2%A82%3B%19%C3%B9%C2%BD%C2%88%18%04%C2%800%C2%B3)%C3%B0)%22%C3%B8%C2%B7b%C3%A7K%24F%08%C3%91%C2%99%0D%3D_%C2%90%C2%AD%11%C2%9B%C3%B8%C3%BA%09!%C3%A3%C3%85%C2%AEe%7B%3BS%C3%93%C3%A7%C3%B3%C3%8D%C3%B9%3F%2F%C2%B7%C2%85S%1B%C3%B0%C3%B4%C3%A3%07%1F%2Fg%C2%B3%C2%88%C2%80%C2%9C!B%C2%88%C2%8B%C2%8A%C3%8D%02%C3%A2%C2%81%C3%B1%03%C2%86-v%C2%A6%C3%84G%C2%90%C3%AFe%C3%9F%C2%A7I%C3%9E%17%40%08%19%C3%9B%C2%A3%2F%11%3F%13%C2%98%13%2B%22%C3%A0.%C2%B6%C2%B6%C3%925%13%13%C2%91%3B%C2%BA%C3%9E%C2%B9%C2%ACiZ%C2%B6%C2%AB%C3%AB%C3%AAW%C2%AF%C3%97%C2%9B8p%C2%B4J%C2%BD%11%C3%92%C2%BFx%3D%07%C3%810%C3%9E%C3%B9x9%C2%8B%C2%B7%C2%98%C2%BF%3D%11D%1CcY%C2%A12%7B%1A4%7D%C3%A6X%C2%B3S%C2%B5%C2%89-%2C%1CX%C2%96%3Dy%101%C3%8A%C2%AA%C2%84%C3%BB%1A%C2%A6%C2%A2%22b%C2%98eU9%C2%BE%C3%A8%C3%BBq%C2%99%0D%C2%BBl%5B%02%C2%81%5B%C2%AF%C2%96%C2%96%C2%96%C2%BCuuuP__%0F%C3%AB%C3%AB%3F%C2%8E(%C3%8Aa%C2%A89%C3%96%0C%C2%A7%C3%AE%3F%C2%AB%3A~%C3%AE%C2%B41%C2%A4w%C3%8E%C2%94%1C%2CT%10V%C2%A2%1B%C2%AC%C3%A4)*%22f%C2%85gZZ1%C2%BEf)%C2%BFaZ%C3%AA%12%C3%97Aa%C2%BF%1DJ%1962_%C2%BAX%0DL%C3%B4R%C3%A7%2C%C3%88%C3%9A%C3%87%C2%8F%C2%9F%5C%C2%A2%02vtt%40CCC%C3%AE%C2%9D%C3%9B%C3%AD%C2%86d2%09%C2%8B%C2%8B%C2%8Bp%C3%B1r%C3%97%C2%9B%C3%99%C3%B9%C2%B9%C2%B3%C2%B5%C2%B5%C2%8A!%1B%2C~%26P%C3%81w%10B%C2%A8%C2%88%3A%22%C3%86%C2%ADYf%C3%97%C3%8F%C3%BEu%24%C3%A7%C3%8C%C2%9Fcj%C3%AAE%1F%C3%8D%C3%80%C3%95%C3%95U%C3%88d2%05F%3B%3B%3B%C2%B0%C2%B6%C3%B6%C3%9D%C3%83%C2%9Fe%22%C3%9A%C2%95%C2%B3j%C3%97O%C3%98%0D%C2%9AB6%C2%8AX%C2%87%02%C3%BE%09mYLv-%25G%C2%B1r%5EYY9%C2%A1(J.%C3%B3%C2%ACTWWC%3A%C2%9D%C3%8E%C2%BF%C3%9D%C3%ABO%1C%C3%99%C2%94%04%C3%96kd%25%0B%C2%AC%C2%99sq%C2%A9%C3%90v%22%12D%C3%A4%C3%83%C2%8D%5E%C2%A4!%C2%B1%C2%A1U%02e%0CA%C3%82Z%C3%81o%C3%93%C3%92%C3%922k%C2%9A%C3%A6y%C2%8F%C3%87%C2%B3%C3%8B%C3%85%C3%A6%C3%A6%26h%C2%9A%C2%96%C3%A2%C3%8F%C3%A5%C2%96%C2%B3u%C3%B2Q14D%7C%5DF%C3%8F%C2%8A%C2%B1%09%5B%C2%8A%C2%A0e%5D%C2%96%25%C3%BE%3D%C3%B4%C3%88%C2%92%C3%88%C3%8A%C2%99%C3%BF%C3%84%C3%A9%C3%AD%C2%BD%C3%B9r%60%C3%A0%C3%B6%C2%83%C2%A6%C2%A6%26p%C2%B9%0ACI%26%C2%93%3F%07%07%C3%AF%3D%C3%A2%C3%8Ft%C2%B0%18lh%C3%98%C2%8A%C3%80%C3%96y)%1BB%C3%96%C3%91%1E%C3%82%C2%B3%C3%8C%2F%C3%98s6%C2%98%C2%BD%C2%8Cbe%C3%8D%C3%97%C2%AE%5B%C3%BC%C2%89%C2%88q%14%C3%B5%C3%85z%C2%B6Y%24%16%C2%B0%C2%AEww_3FFFG%13%C2%89%04%C2%A4R%C2%A9%5C%1F%C2%A4%C2%A5%1D%C2%8F%C3%87!%14%0A%C3%9Dmm%3D3%C3%8Fm%C2%9D%C2%BF%C3%82J%10%08%04%C2%9A%17%16%16%C2%AE%C2%98%C2%A6yHU%C2%B5o%C3%AD%C3%AD%17%C3%9EF%22%C2%91%C3%B7%C3%A2.G%C3%84%0A%C3%A0%C3%BC%01Q%01%1C%11%2B%C2%80%23b%05pD%C3%9C%2F%00%C3%B0%0B%25wOlE%C2%8CP%2F%00%00%00%00IEND%C2%AEB%60%C2%82"; 
        var iconButtExplode = col2Butts.add("iconbutton", undefined, File.decode(iconButtExplode_imgString), {name: "iconButtExplode", style: "toolbutton"}); 
            iconButtExplode.helpTip = "Explodes all shapes within a shape layer into separate layers!";
            iconButtExplode.onClick = function() {
            explodeShapeLayers();
            app.activeViewer.setActive();
        }
        
        // GRP_EaseDrop
        var grpEaseDrop = windowNERDS.add("group", undefined, {
            name: "grpDropDown"
        });
        grpEaseDrop.orientation = "column";
        grpEaseDrop.alignChildren = ["left", "left"];
        grpEaseDrop.spacing = 0;
        grpEaseDrop.margins = [4, 5, 4, 4];
        grpEaseDrop.alignment = ["fill", "top"];

//#region Easement Easing
        // UI - PANEL EASEMENT
        // ==============
        var panelEasement = grpEaseDrop.add("panel", undefined, {name: "panelEasement"});
        panelEasement.text = "Easement"
        panelEasement.orientation = "column";
        panelEasement.alignChildren = ["center", "center"];
        panelEasement.spacing = 5;
        panelEasement.margins = 10;

        // Slider+Text Group
        var SliderNText = panelEasement.add("group", undefined, "SliderNText");
            SliderNText.orientation = "row";
            SliderNText.alignChildren = ["center", "center"];

        // Slider Group
        var sliderGroup = panelEasement.add("group");
            sliderGroup.orientation = "row";

        // Slider for Easing
        var slider = sliderGroup.add("slider", [10, 10, 142, 30], 0, 0, 100);
            slider.value = 50;
            slider.stepdelta = 1; 

        // EaseButts Group
        var grpEaseButts = panelEasement.add("group", undefined, {name: "grpEaseButts"}); 
            grpEaseButts.orientation = "row"; 
            grpEaseButts.alignChildren = ["center","center"]; 
            grpEaseButts.spacing = 10; 
            grpEaseButts.margins = 0; 
        var inButton = grpEaseButts.add("button", [10, 10, 35, 35], "◁");
        var bothButton = grpEaseButts.add("button", [50, 10, 75, 35], "◁▷");
        var outButton = grpEaseButts.add("button", [90, 10, 115, 35], "▷");
        var valueText = grpEaseButts.add("edittext", undefined, slider.value.toFixed(0));
            valueText.preferredSize.width = 35; 
            valueText.preferredSize.height = 23; 
            valueText.alignment = ["center","center"]; 
            valueText.bounds = [90, 10, 150, 30];
            slider.onChanging = function() {
            valueText.text = this.value.toFixed(0);
        };

        // 'applyEasing' event handlers
        inButton.onClick = function() {
            applyEasing(parseFloat(valueText.text), 'in');
            app.activeViewer.setActive();
        };
        bothButton.onClick = function() {
            applyEasing(parseFloat(valueText.text), 'both');
            app.activeViewer.setActive();
        };
        outButton.onClick = function() {
            applyEasing(parseFloat(valueText.text), 'out');
            app.activeViewer.setActive();
        };
        valueText.addEventListener('focus', function() {
            valueText.active = true;
            valueText.selectAll();
        });
//#endregion Easement Easing
//#region UI stuff     
        // GRP_DROPDOWN
        // ============
        var grpDropDown = grpEaseDrop.add("group", undefined, {
            name: "grpDropDown"
        });
        grpDropDown.orientation = "column";
        grpDropDown.alignChildren = ["left", "left"];
        grpDropDown.spacing = 0;
        grpDropDown.margins = [4, 5, 4, 4];
        grpDropDown.alignment = ["fill", "top"];

        // DROPDOWNS
        var housekeeping_array = ["Housekeeping", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Sort", "Rename Comp to File Name", "Clear Render Queue", "Purge All Memory & Disk Cache"];
        var utilities_array = ["Utilities", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Calc Dist Btwn Keyframes", "Precompose Individually", "Round Position", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Select All Children", "Select All Non-Nulls", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Lock All Nulls", "Unlock All Nulls", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Lock All Layers", "Unlock All Layers", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Scale Composition", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Align Stroke"];

        var housekeepingDropdown = grpDropDown.add("dropdownlist", undefined, undefined, {
            name: "housekeepingDropdown",
            items: housekeeping_array
        });
            housekeepingDropdown.alignment = ["center", "center"];
        var utilitiesDropdown = grpDropDown.add("dropdownlist", undefined, undefined, {
            name: "utilitiesDropdown",
            items: utilities_array
        });
            utilitiesDropdown.alignment = ["center", "center"];

        housekeepingDropdown.selection = 0;
        utilitiesDropdown.selection = 0;

        housekeepingDropdown.onChange = function() {
            switch (this.selection.text) {
                case "Sort":
                    sortProjectItems();
                    app.activeViewer.setActive();
                    break;
                case "Clear Render Queue":
                    clearRenderQueue();
                    app.activeViewer.setActive();
                case "Rename Comp to File Name":
                    renameCompToFile();
                    app.activeViewer.setActive();
                    break;
                case "Purge All Memory & Disk Cache":
                    purgeAllMemDiskCache();
                    app.activeViewer.setActive();
                    break;
            }
            this.selection = 0; // Reset menu selection to "Housekeeping"
        };

        utilitiesDropdown.onChange = function() {
            switch (this.selection.text) {
                case "Calculate Distance Between Keyframes":
                    calcDistBtwnKF();
                    app.activeViewer.setActive();
                    break;
                case "Precompose Individually":
                    var comp = app.project.activeItem;
                    if (comp && comp instanceof CompItem) {
                        var selectedLayers = comp.selectedLayers;
                        precomposeOneByOne(selectedLayers);
                    } else {
                        alert("Please select a composition and some layers");
                    }
                    app.activeViewer.setActive();
                    break;
                case "Lock All Nulls":
                    lockAllNulls();
                    app.activeViewer.setActive();
                    break;
                case "Unlock All Nulls":
                    unlockAllNulls();
                    app.activeViewer.setActive();
                    break;
                case "Lock All Layers":
                    doLockAllInComp();
                    app.activeViewer.setActive();
                    break;
                case "Unlock All Layers":
                    doUnlockAllInComp();
                    app.activeViewer.setActive();
                    break;
                case "Round Position":
                    roundPosition();
                    app.activeViewer.setActive();
                    break;
                case "Select All Children":
                    doSelectAllChildren();
                    app.activeViewer.setActive();
                    break;
                case "Select All Non-Nulls":
                    doSelectNonNullLayers();
                    app.activeViewer.setActive();
                    break;
                case "Scale Composition":
                    doScaleComposition();
                    app.activeViewer.setActive();
                    break;
                case "Align Stroke":
                    openAlignStroke();
                    app.activeViewer.setActive();
                    break;
            }
            this.selection = 0; // Reset menu selection to "Utilities"
        };
//#endregion UI stuff


        /*
        000000000000000000000000000000
        0000000000 Functions 000000000
        000000000000000000000000000000
        */

//#region 'Apply Easing'
        //=======================

        function applyEasing(value, type) {
            var comp = app.project.activeItem;
            if (!comp || !(comp instanceof CompItem)) {
                alert("Please select a composition.");
                return;
            }
            app.beginUndoGroup("Apply Easing");
            var selectedLayers = comp.selectedLayers;
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];
                var selectedProperties = layer.selectedProperties;
                for (var j = 0; j < selectedProperties.length; j++) {
                    var prop = selectedProperties[j];
                    if (prop.canVaryOverTime) {
                        for (var k = 0; k < prop.selectedKeys.length; k++) {
                            var keyIndex = prop.selectedKeys[k];
                            var easeIn = prop.keyInTemporalEase(keyIndex);
                            var easeOut = prop.keyOutTemporalEase(keyIndex);
                            var updatedEaseIn = [];
                            var updatedEaseOut = [];
                            for (var e = 0; e < easeIn.length; e++) {
                                var newEaseIn = easeIn[e];
                                var newEaseOut = easeOut[e];
                                if (type === 'in' || type === 'both') {
                                    newEaseIn.influence = value;
                                    newEaseIn.speed = 0; // Set speed to 0
                                }
                                if (type === 'out' || type === 'both') {
                                    newEaseOut.influence = value;
                                    newEaseOut.speed = 0; // Set speed to 0
                                }
                                updatedEaseIn.push(newEaseIn);
                                updatedEaseOut.push(newEaseOut);
                            }
                            prop.setTemporalEaseAtKey(keyIndex, updatedEaseIn, updatedEaseOut);
                        }
                    }
                }
            }
            app.endUndoGroup();
        }
//#endregion 'Apply Easing'

//#region 'Batch Rename'
        // ======================

        function buildrenameUI(win) {
            if (win != null) {
                win.nameSearchLabel = win.add('statictext', [14, 15, 314, 37], 'Search for:');
                win.nameSearchT = win.add('edittext', [25, 40, 325, 62], '');
                win.nameReplaceLabel = win.add('statictext', [14, 73, 314, 95], 'Replace with:');
                win.nameReplaceT = win.add('edittext', [25, 98, 325, 120], '');
                win.typePnl = win.add('panel', [16, 138, 206, 243 + 25], 'Rename Type:');
                win.progLbl = win.add('statictext', [20, 271, 206, 308], '');

                win.repRad = win.typePnl.add('radiobutton', [14, 13, 174, 35], 'Search and Replace');
                win.repRad.value = true;
                win.repRad.onClick = function() {
                    doTextChange(win.nameSearchLabel, 'Search for:');
                    doTextChange(win.nameReplaceLabel, 'Replace with:');

                    doViz(win.startNumLabel, true);
                    doViz(win.startNumT, true);
                    doViz(win.countNumLabel, true);
                    doViz(win.countNumT, true);
                };
                win.appRad = win.typePnl.add('radiobutton', [14, 39, 174, 61], 'Append');
                win.appRad.onClick = function() {
                    doTextChange(win.nameSearchLabel, 'Append Head with:');
                    doTextChange(win.nameReplaceLabel, 'Append Tail with:');
                    doViz(win.startNumLabel, true);
                    doViz(win.startNumT, true);
                    doViz(win.countNumLabel, true);
                    doViz(win.countNumT, true);
                };
                win.remRad = win.typePnl.add('radiobutton', [14, 65, 174, 87], 'Remove # of Characters');
                win.remRad.onClick = function() {
                    doTextChange(win.nameSearchLabel, 'Remove this many chars from head (number):');
                    doTextChange(win.nameReplaceLabel, 'Remove this many chars from tail (number):');
                    doViz(win.startNumLabel, true);
                    doViz(win.startNumT, true);
                    doViz(win.countNumLabel, true);
                    doViz(win.countNumT, true);

                };
                win.numRad = win.typePnl.add('radiobutton', [14, 90, 174, 112], 'Number');
                win.numRad.onClick = function() {
                    doTextChange(win.nameSearchLabel, 'String BEFORE number (or blank):');
                    doTextChange(win.nameReplaceLabel, 'String AFTER number (or blank):');
                    doViz(win.startNumLabel, false);
                    doViz(win.startNumT, false);
                    doViz(win.countNumLabel, false);
                    doViz(win.countNumT, false);

                };

                win.startNumLabel = win.add('statictext', [225, 143, 270, 165], 'Start #:');
                win.startNumLabel.visible = false;
                win.startNumT = win.add('edittext', [279, 140, 324, 162], '0');
                win.startNumT.visible = false;
                win.countNumLabel = win.add('statictext', [225, 176, 281, 198], 'Count by:');
                win.countNumLabel.visible = false;
                win.countNumT = win.add('edittext', [290, 173, 324, 195], '1');
                win.countNumT.visible = false;

                win.okBtn = win.add('button', [240, 245, 320, 267], 'OK', {
                    name: 'OK'
                });
                win.okBtn.onClick = function() {
                    doRenaming(this.parent);
                };

                win.cancBtn = win.add('button', [240, 210, 320, 232], 'Close', {
                    name: 'Cancel'
                });
                win.cancBtn.onClick = function() {
                    this.parent.close(1)
                };
            }
            return win
        }

        function doTextChange(target, newText) {
            target.text = newText;
        }

        function doViz(target, bool) {
            target.visible = !bool;
        }

        function splitReplace(st, ss, rs) {
            var stArray = st.split(ss);
            var patchedString = "";
            var i = 0;
            while (i < (stArray.length)) {
                if (i == (stArray.length - 1)) {
                    rs = "";
                }
                patchedString = (patchedString + (stArray[i] + rs));
                i = (i + 1);
            }
            //  alert(patchedString);
            return patchedString
        }

        function doRenaming(theDialog) {
            var activeItem = app.project.activeItem;
            if (activeItem == null || !(activeItem instanceof CompItem)) {
                alert("You need to select some layers first.");
            } else {

                var s = activeItem.selectedLayers;
                var selNum = s.length;
                if (selNum < 2) {
                    alert("You need to select at least two layers first.");
                } else {

                    app.beginUndoGroup("layer rename");
                    var inputError = false;
                    theDialog.progLbl.text = 'WORKING ............. PLEASE WAIT';
                    theDialog.hide();
                    theDialog.show();

                    for (var n = (selNum - 1); n >= 0; n--) {
                        if (!inputError) {
                            item = s[n];
                            oldName = item.name;
                            sear = theDialog.nameSearchT.text;
                            repl = theDialog.nameReplaceT.text

                            newName = oldName;

                            if (theDialog.repRad.value) {

                                newName = splitReplace(newName, sear, repl);

                                //now we check for pre-cs4 app version, for which we truncate:
                                if ((parseFloat(app.version) < 9.0)) {
                                    newName = (newName.substr(0, 25));
                                }
                            } else if (theDialog.appRad.value) {
                                newName = (sear + oldName + repl);

                            } else if (theDialog.remRad.value) {
                                if (sear == "") {
                                    sear = 0;
                                }
                                if (repl == "") {
                                    repl = 0;
                                }
                                sear = (parseFloat(sear));
                                repl = (parseFloat(repl));
                                if ((isNaN(sear)) || (isNaN(repl))) {
                                    alert('Error: Not a number?');
                                    inputError = true;
                                } else {
                                    newName = (newName.substr(sear, oldName.length));
                                    newName = (newName.substr(0, newName.length - repl));
                                    sear = "";
                                    repl = "";
                                }
                            } else if (theDialog.numRad.value) {
                                sear = theDialog.startNumT.text;
                                repl = theDialog.countNumT.text
                                if (sear == "") {
                                    sear = 0;
                                }
                                if ((repl == "") || (repl == 0)) {
                                    repl = "NaN";
                                }
                                sear = (parseFloat(sear));
                                repl = (parseFloat(repl));

                                if ((isNaN(sear)) || (isNaN(repl))) {
                                    alert('Error: Not a number, or invalid number to count by.');
                                    inputError = true;
                                } else {
                                    h = theDialog.nameSearchT.text;
                                    t = theDialog.nameReplaceT.text;
                                    numNum = ((n * repl) + sear);
                                    newName = (h + numNum.toString() + t);
                                    //now we check for pre-cs4 app version and we error if name too long:
                                    if ((parseFloat(app.version) < 9.0)) {
                                        if (newName.length > 25) {
                                            inputError = true;
                                            // this generates 'error', at beginning of loop,
                                            // which is largest number (highest number)
                                            alert('Error: Name too long.');
                                        }
                                    }
                                    sear = "";
                                    repl = "";
                                }
                            }
                            //////////////////////
                            if (!inputError) {
                                item.name = newName;

                            } else {
                                theDialog.progLbl.text = '(ERROR)';
                            }
                            //////////////////////
                        }
                    }
                    if (!inputError) {
                        theDialog.progLbl.text = '';
                    }
                    app.endUndoGroup();
                }
            }
        }
//#endregion 'Batch Rename'

//#region 'Sort'
        //===============

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
            // Delete all folders
            for (var i = items.length; i > 0; i--) {
                if (items[i] instanceof FolderItem) {
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
            app.activeViewer.setActive();
            app.endUndoGroup(); // End the undo group
        }
//#endregion 'Sort'

//#region 'Reposition Anchor Point'
        //==================================

        function moveAnchor(col, ignoreMasks, row) {
            app.beginUndoGroup("Move Anchor Point");
            var mainComp = app.project.activeItem;
            var curTime = app.project.activeItem.time;
            var theLayers = app.project.activeItem.selectedLayers;
            for (var num = 0; num < theLayers.length; num += 1) {
                var theLayer = theLayers[num];
                var noMasks = true;
                if (ignoreMasks === true) {
                    noMasks = true;
                } else {
                    if (theLayer.mask.numProperties !== 0) {
                        for (var i = 1; i <= theLayer.mask.numProperties; i += 1) {
                            if (theLayer.mask(i).maskMode != MaskMode.NONE) {
                                noMasks = false;
                            }
                        }
                    }
                }
                if (noMasks) {
                    switch (row) {
                        case 0:
                            x = 0;
                            break;
                        case 1:
                            x = theLayer.sourceRectAtTime(curTime, false).width / 2;
                            break;
                        case 2:
                            x = theLayer.sourceRectAtTime(curTime, false).width;
                            break;
                        default:
                    }
                    switch (col) {
                        case 0:
                            y = 0;
                            break;
                        case 1:
                            y = theLayer.sourceRectAtTime(curTime, false).height / 2;
                            break;
                        case 2:
                            y = theLayer.sourceRectAtTime(curTime, false).height;
                            break;
                        default:
                    }
                    if ((theLayer instanceof TextLayer) || (theLayer instanceof ShapeLayer)) {
                        x += theLayer.sourceRectAtTime(curTime, false).left;
                        y += theLayer.sourceRectAtTime(curTime, false).top;
                    }
                } else {
                    var xBounds = Array();
                    var yBounds = Array();
                    var numMasks = theLayer.mask.numProperties;
                    for (var f = 1; f <= numMasks; f += 1) {
                        var numVerts = theLayer.mask(f).maskShape.value.vertices.length;
                        if (theLayer.mask(f).maskMode == MaskMode.NONE) {
                            continue;
                        }
                        for (var j = 0; j < numVerts; j += 1) {
                            var curVerts = theLayer.mask(f).maskShape.valueAtTime(curTime, false).vertices[j];
                            xBounds.push(curVerts[0]);
                            yBounds.push(curVerts[1]);
                        }
                    }
                    xBounds.sort((function(a, b) {
                        return a - b;
                    }));
                    yBounds.sort((function(a, b) {
                        return a - b;
                    }));
                    var xl = xBounds.shift();
                    var xh = xBounds.pop();
                    var yl = yBounds.shift();
                    var yh = yBounds.pop();
                    if ((theLayer instanceof TextLayer) || (theLayer instanceof ShapeLayer)) {
                        var xl2 = theLayer.sourceRectAtTime(curTime, false).left;
                        var xh2 = xl2 + theLayer.sourceRectAtTime(curTime, false).width;
                        var yl2 = theLayer.sourceRectAtTime(curTime, false).top;
                        var yh2 = yl2 + theLayer.sourceRectAtTime(curTime, false).height;
                        if (xl < xl2) {
                            xl = xl2;
                        }
                        if (xh > xh2) {
                            xh = xh2;
                        }
                        if (yl < yl2) {
                            yl = yl2;
                        }
                        if (yh > yh2) {
                            yh = yh2;
                        }
                    }
                    switch (row) {
                        case 0:
                            x = xl;
                            break;
                        case 1:
                            x = xl + ((xh - xl) / 2);
                            break;
                        case 2:
                            x = xh;
                            break;
                        default:
                    }
                    switch (col) {
                        case 0:
                            y = yl;
                            break;
                        case 1:
                            y = yl + ((yh - yl) / 2);
                            break;
                        case 2:
                            y = yh;
                            break;
                        default:
                    }
                }
                if (theLayer.anchorPoint.isTimeVarying) {
                    var theComp = app.project.activeItem;
                    theLayer.anchorPoint.setValueAtTime(theComp.time, [x, y]);
                } else {
                    var curAnchor = theLayer.anchorPoint.value;
                    var xMove = (x - curAnchor[0]) * (theLayer.scale.value[0] / 100);
                    var yMove = (y - curAnchor[1]) * (theLayer.scale.value[1] / 100);
                    var posEx = false;
                    if (theLayer.position.expressionEnabled) {
                        theLayer.position.expressionEnabled = false;
                        posEx = true;
                    }
                    var dupLayer = theLayer.duplicate();
                    var oldParent = theLayer.parent;
                    dupLayer.moveToEnd();
                    if (dupLayer.scale.isTimeVarying) {
                        dupLayer.scale.setValueAtTime(app.project.activeItem.time, [100, 100]);
                    } else {
                        dupLayer.scale.setValue([100, 100]);
                    }
                    theLayer.parent = dupLayer;
                    theLayer.anchorPoint.setValue([x, y]);
                    if (theLayer.position.isTimeVarying) {
                        var numKeys = theLayer.position.numKeys;
                        for (var k = 1; k <= numKeys; k += 1) {
                            curPos = theLayer.position.keyValue(k);
                            curPos[0] += xMove;
                            curPos[1] += yMove;
                            theLayer.position.setValueAtKey(k, curPos);
                        }
                    } else {
                        curPos = theLayer.position.value;
                        theLayer.position.setValue([curPos[0] + xMove, curPos[1] + yMove, curPos[2]]);
                    }
                    theLayer.parent = oldParent;
                    if (posEx) {
                        theLayer.position.expressionEnabled = true;
                    }
                    dupLayer.remove();
                }
            }
            app.endUndoGroup();
        }
//#endregion 'Reposition Anchor Point'

//#region 'Null'
        //===============

        function createANull() {
            var mainComp = app.project.activeItem;
            if ((!mainComp) || (!(mainComp instanceof CompItem))) {
                alert("Please create a composition first.");
                return false;
            } else {
                if (mainComp.selectedLayers.length < 1) {
                    nullToComp(mainComp);
                    return false;
                }
            }
            removeParents();
        }

        function removeParents() {
            app.beginUndoGroup("Null");
            var theLayers = app.project.activeItem.selectedLayers;
            for (var num = 0; num < theLayers.length; num += 1) {
                var theLayer = theLayers[num];
                theLayer.parent = null;
            }
            nullToItem();
            app.endUndoGroup();
        }

        function nullToItem() {
            var activeItem = app.project.activeItem;
            if (activeItem !== null) {
                var selectedLayers = activeItem.selectedLayers;
                var nullCounter = 1;
                while (activeItem.layer("NULL CONTROL " + nullCounter) != null) {
                    nullCounter++;
                }
                var newNull = activeItem.layers.addNull();
                newNull.name = "NULL CONTROL " + nullCounter;
                newNull.label = 13;
                newNull.anchorPoint.setValue([newNull.width / 2, newNull.height / 2]);
                if (selectedLayers.length > 0) {
                    var sortedLayers = selectedLayers.slice(0);
                    sortedLayers.sort(function(a, b) {
                        return a.index - b.index; // sort in ascending order
                    });
                    var lowestLayerIndex = sortedLayers[0].index; // get the lowest index
                    newNull.moveBefore(activeItem.layer(lowestLayerIndex)); // move before the lowest indexed layer
                    var bounds = getSelectedLayersBounds(selectedLayers);
                    newNull.property("Position").setValue([(bounds.xmin + bounds.xmax) / 2, (bounds.ymin + bounds.ymax) / 2]);
                    var newInpoint = activeItem.duration;
                    var newOutpoint = 0;
                    for (var num = 0; num < sortedLayers.length; num += 1) {
                        var lay = sortedLayers[num];
                        lay.parent = newNull;
                        newInpoint = Math.min(newInpoint, lay.inPoint);
                        newOutpoint = Math.max(newOutpoint, lay.outPoint);
                    }
                    newNull.inPoint = newInpoint;
                    newNull.outPoint = newOutpoint;
                } else {
                    newNull.property("Position").setValue([activeItem.width / 2, activeItem.height / 2]);
                }
            }
        }

        function getSelectedLayersBounds(selectedLayers) {
            var xmin = xmax = selectedLayers[0].property("Position").value[0];
            var ymin = ymax = selectedLayers[0].property("Position").value[1];
            for (var num = 0; num < selectedLayers.length; num += 1) {
                var lay = selectedLayers[num];
                var pos = lay.property("Position").value;
                xmin = Math.min(xmin, pos[0]);
                xmax = Math.max(xmax, pos[0]);
                ymin = Math.min(ymin, pos[1]);
                ymax = Math.max(ymax, pos[1]);
            }
            return {
                xmin: xmin,
                xmax: xmax,
                ymin: ymin,
                ymax: ymax
            };
        }

        function nullToComp(mainComp) {
            app.beginUndoGroup("Null");
            var nullCounter = 1;
            while (mainComp.layer("NULL CONTROL " + nullCounter) != null) {
                nullCounter++;
            }
            var target = mainComp.layers.addNull();
            target.name = "NULL CONTROL " + nullCounter;
            target.label = 13;
            target.property("Position").setValue([mainComp.width / 2, mainComp.height / 2]);
            target.anchorPoint.setValue([target.width / 2, target.height / 2]);
            app.endUndoGroup();
        }
//#endregion 'Null'

//#region 'Loop'
        //===============

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

                        // Remove the last keyframe
                        layer.timeRemap.removeKey(layer.timeRemap.numKeys);

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

//#endregion 'Loop'

//#region 'Reverse Layer Order'
        //==============================
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
                // Sort the selected layers by their index
                selectedLayers.sort(function(a, b) {
                    return a.index - b.index;
                });
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
        }
        // Mini event listener
        iconButtReverse.onClick = function() {
            reverseSelectedLayers();
        };
//#endregion 'Reverse Layer Order'

//#region 'Color Picker'
        //=======================

        function colorPicker(startValue) {
            // find the active comp
            var crntComp = app.project.activeItem;
            if (!crntComp || !(crntComp instanceof CompItem)) {
                alert("Please open a comp first");
                return [];
            }
            // add a temp null;
            var tempLayer = crntComp.layers.addShape();
            var newColorControl = tempLayer("ADBE Effect Parade").addProperty("ADBE Color Control");
            var theColorProp = newColorControl("ADBE Color Control-0001");
            // set the value given by the function arguments
            if (startValue && startValue.length == 3) {
                theColorProp.setValue(startValue);
            }
            // prepare to execute
            var editValueID = 2240 // or app.findMenuCommandId("Edit Value...");
            theColorProp.selected = true;
            app.executeCommand(editValueID);
            // harvest the result
            var result = theColorProp.value;
            // remove the null
            if (tempLayer) {
                tempLayer.remove();
            }
            return result;
        }
//#endregion 'Color Picker'

//#region 'Smart Separate Dimensions'
        //====================================

        function separateDimensionsPreserveEasing() {
            function buildPropTemporalEaseArray(property) {
                var propTemporalEases = [];
                for (var ii = 1, il = property.numKeys; ii <= il; ii++) {
                    var ite = property.keyInTemporalEase(ii)[0];
                    if (
                        property.keyInInterpolationType(ii) == KeyframeInterpolationType.HOLD ||
                        property.keyInInterpolationType(ii) == KeyframeInterpolationType.LINEAR
                    )
                        ite = new KeyframeEase(0, 10);
                    var ote = property.keyOutTemporalEase(ii)[0];
                    if (
                        property.keyOutInterpolationType(ii) == KeyframeInterpolationType.HOLD ||
                        property.keyOutInterpolationType(ii) == KeyframeInterpolationType.LINEAR
                    )
                        ote = new KeyframeEase(0, 10);
                    propTemporalEases.push({
                        ite: ite,
                        ote: ote,
                    });
                }
                return propTemporalEases;
            }

            function setDimensionTemporalEaseFromObject(
                transformGroup,
                propTemporalEases
            ) {
                var posProps = [
                    transformGroup("ADBE Position_0"),
                    transformGroup("ADBE Position_1"),
                    transformGroup("ADBE Position_2"),
                ];
                for (var ii = 0, il = posProps.length; ii < il; ii++) {
                    var property = posProps[ii];
                    for (var jj = 1, jl = property.numKeys; jj <= jl; jj++) {
                        var temporalEaseObject = propTemporalEases[jj - 1];
                        property.setTemporalEaseAtKey(
                            jj,
                            [temporalEaseObject.ite],
                            [temporalEaseObject.ote]
                        );
                    }
                }
            }
            var comp = app.project.activeItem;
            if (!(comp && comp instanceof CompItem)) {
                alert("Open a comp!");
                return;
            }
            app.beginUndoGroup("Separate Dimensions & Preserve Easing");
            var selection = comp.selectedLayers;
            for (var ii = 0, il = selection.length; ii < il; ii++) {
                var layer = selection[ii];
                if (layer.locked) {
                    continue;
                }
                var transform = layer.transform;
                var pos = transform.position;
                if (pos.dimensionsSeparated) {
                    continue;
                }
                var propTemporalEases = buildPropTemporalEaseArray(pos);
                pos.dimensionsSeparated = true;
                setDimensionTemporalEaseFromObject(transform, propTemporalEases);
            }
            app.endUndoGroup();
        };
//#endregion 'Smart Separate Dimensions'

//#region explodeShapeLayers
    function explodeShapeLayers() {
        app.beginUndoGroup("Explode Shape Layers"); // Begin undo group
        var comp = app.project.activeItem; // Get active composition
        var layer = comp.selectedLayers[0]; // Get selected layer
        var shapeContents = layer.property("ADBE Root Vectors Group"); // Initialize shape layer group property
        var x, y, d; // Initialize variables

        if (layer.selectedProperties.length == 0) { // If there are no selected properties; Explode all
            for (var i = 1; i <= shapeContents.numProperties; i++) { // Loop through shape properties
                layer.duplicate();
                duplicate = comp.layer(layer.index - 1);
                duplicate.name = duplicate.property("ADBE Root Vectors Group").property(i).name;
                x = 0; y = 0; d = 0;
                for (var h = 1; h < i; h++) {
                    duplicate.property("ADBE Root Vectors Group").property(h - x).remove();
                    x++; d++;
                }    
                for (var k = 2; k <= (shapeContents.numProperties - d ); k++) {
                    duplicate.property("ADBE Root Vectors Group").property(k - y).remove();
                    y++;
                }
            }
        } else if (layer.selectedProperties.length > 0) { // If there is selected properties
            for (var i = 0; i < layer.selectedProperties.length; i++) {
                layer.duplicate();
                duplicate = comp.layer(layer.index - 1);
                duplicate.name = layer.selectedProperties[i].name; // Set layer name to current property name
                x = 0; y = 0; d = 0;            
                for (var h = 1; h < i; h++) {
                    if (duplicate.property("ADBE Root Vectors Group").property(h - x).name != layer.selectedProperties[i].name) {
                        duplicate.property("ADBE Root Vectors Group").property(h - x).remove();
                        x++; d++;
                    }
                }    
                for (var k = 1; k <= (shapeContents.numProperties - d ); k++) {
                    if (duplicate.property("ADBE Root Vectors Group").property(k - y).name != layer.selectedProperties[i].name) {
                        duplicate.property("ADBE Root Vectors Group").property(k - y).remove();
                        y++;
                    }
                }
            }
        }
        layer.enabled = false; // Disable layer
        app.endUndoGroup(); // End undo group
    }
//#endregion explodeShapeLayers

//#region 'Misc for dropdowns'

        ///// 'Clear Render Queue' /////
        function clearRenderQueue() {
            var renderQueue = app.project.renderQueue;
            while (renderQueue.numItems > 0) {
                renderQueue.item(1).remove();
            }
        }

        ///// 'Calculate Distance Between Keyframes /////
        function calcDistBtwnKF() {
            var comp = app.project.activeItem;
            var selectedProperties = comp.selectedProperties;
            var numSelectedProperties = selectedProperties.length;
            for (var p = 0; p < numSelectedProperties; p++) {
                var selectedProperty = selectedProperties[p];
                var selectedKeys = selectedProperty.selectedKeys;
                var numSelectedKeys = selectedKeys.length;
                if (numSelectedKeys === 2) {
                    var selectedPropertyName = selectedProperty.name;
                    var keyframeIndexOne = selectedKeys[0];
                    var keyframeIndexTwo = selectedKeys[1];
                    var keyValueOne = selectedProperty.keyValue(keyframeIndexOne);
                    var keyValueTwo = selectedProperty.keyValue(keyframeIndexTwo);
                    var difference = Math.abs(keyValueTwo - keyValueOne);
                    var message = [
                        selectedPropertyName,
                        "[" + keyframeIndexTwo + "]" + keyValueTwo + " -",
                        "[" + keyframeIndexOne + "]" + keyValueOne + " =",
                        difference
                    ];
                    alert(message.join("\n"));
                }
            }
        }

        ///// 'Precompose Individually' /////
        function precomposeOneByOne(selectedLayers) {
            app.beginUndoGroup("Precompose Individually");
            var thisPrecompLayer;
            var thisIndex, inPoint, outPoint;
            var thisPrecompComp;
            for (var i = 0; i < selectedLayers.length; i++) {
                thisIndex = selectedLayers[i].index;
                inPoint = selectedLayers[i].inPoint;
                outPoint = selectedLayers[i].outPoint;
                thisPrecompComp = app.project.activeItem.layers.precompose([thisIndex], selectedLayers[i].name, true);
                thisPrecompLayer = app.project.activeItem.layer(thisIndex);
                thisPrecompLayer.inPoint = inPoint;
                thisPrecompLayer.outPoint = outPoint;
                thisPrecompComp.workAreaStart = thisPrecompLayer.inPoint;
                thisPrecompComp.workAreaDuration = outPoint - inPoint;
                thisPrecompComp.openInViewer();
                app.executeCommand(app.findMenuCommandId("Trim Comp to Work Area"));
                app.executeCommand(app.findMenuCommandId("Close"));
                thisPrecompLayer.startTime = inPoint;
                thisPrecompLayer.inPoint = inPoint;
            }
            app.endUndoGroup();
        }

        ///// 'Lock All Null Layers' /////
        function lockAllNulls() {
            app.beginUndoGroup("Lock All Null Layers")
            var comp = app.project.activeItem;
            var layers = comp.layers;
            var numLayers = layers.length;
            for (var l = 1; l <= numLayers; l++) {
                var layer = layers[l];
                if (layer.nullLayer === true) {
                    layer.locked = true;
                }
            }
            app.endUndoGroup();
        }

        ///// 'Unlock All Null Layers' /////
        function unlockAllNulls() {
            app.beginUndoGroup("Unlock All Null Layers")
            var comp = app.project.activeItem;
            var layers = comp.layers;
            var numLayers = layers.length;
            for (var l = 1; l <= numLayers; l++) {
                var layer = layers[l];
                if (layer.nullLayer === true) {
                    layer.locked = false;
                }
            }
            app.endUndoGroup();
        }

        ///// 'Lock All Layers /////
        var doLockAllInComp = function() {
            function lockAllInComp(comp) {
                var layers = comp.layers;
                var numLayers = layers.length;
                for (var l = 1; l <= numLayers; l++) {
                    var layer = layers[l];
                    layer.locked = true;
                }
            }

            app.beginUndoGroup("Lock Layer(s)");
            var project = app.project;
            var items = project.items;
            var numItems = items.length;
            for (var i = 1; i <= numItems; i++) {
                var item = items[i];
                if (item instanceof CompItem) {
                    lockAllInComp(item);
                }
            }
            app.endUndoGroup();
        }

        ///// 'Unlock All Layers' /////
        var doUnlockAllInComp = function() {
            function unlockAllInComp(comp) {
                var layers = comp.layers;
                var numLayers = layers.length;
                for (var l = 1; l <= numLayers; l++) {
                    var layer = layers[l];
                    layer.locked = false;
                }
            }

            app.beginUndoGroup("Unlock Layer(s)");
            var project = app.project;
            var items = project.items;
            var numItems = items.length;
            for (var i = 1; i <= numItems; i++) {
                var item = items[i];
                if (item instanceof CompItem) {
                    unlockAllInComp(item);
                }
            }
            app.endUndoGroup();
        }

        ///// 'Rename Comp to File Name' /////
        function renameCompToFile() {
            app.beginUndoGroup("Rename Comp to File Name");
            var comp = app.project.activeItem;
            if (comp !== null && (comp instanceof CompItem)) {
                comp.name = app.project.file.name.replace(/\.aep/ig, "");
            }
            app.endUndoGroup();
        }

        ///// 'Round Position' /////
        function roundPosition() {
            app.beginUndoGroup("Round Position");
            var comp = app.project.activeItem;
            var layers = comp.selectedLayers;
            var numLayers = layers.length;
            for (var l = 0; l < numLayers; l++) {
                var layer = layers[l];
                var oldPosition = layer.transform.position.value;
                var newPosition = [
                    Math.round(oldPosition[0]),
                    Math.round(oldPosition[1]),
                    Math.round(oldPosition[2])
                ];
                if (layer.transform.position.dimensionsSeparated === true) {
                    layer.transform.xPosition.setValue(newPosition[0]);
                    layer.transform.yPosition.setValue(newPosition[1]);
                    if (layer.threeDLayer === true) {
                        layer.transform.zPosition.setValue(newPosition[2]);
                    }
                } else {
                    layer.transform.position.setValue(newPosition);
                }
            }
            app.endUndoGroup();
        }

        ///// 'Select all children (of a parent)' /////
        var doSelectAllChildren = function() {
            function getParentLayer(layer) {
                while (layer.parent !== null) {
                    layer = layer.parent
                }
                return layer;
            }

            function selectAllChilden(comp, selectedLayer) {
                var layers = comp.layers;
                var numLayers = layers.length;
                for (var l = 1; l <= numLayers; l++) {
                    var layer = layers[l];
                    var parentLayer = getParentLayer(layer);
                    if (selectedLayer === parentLayer) {
                        layer.selected = true;
                    }
                }
            }

            try {
                app.beginUndoGroup("Select All Children");
                var comp = app.project.activeItem;
                var selectedLayer = comp.selectedLayers[0];
                selectAllChilden(comp, selectedLayer);
            } catch (err) {
                alert(err);
            } finally {
                app.endUndoGroup();
            }
        }

        ///// 'Select all non-null layers' /////
        var doSelectNonNullLayers = function() {
            try {
                app.beginUndoGroup("Select All Non-Null Layers");
                var comp = app.project.activeItem;
                var layers = comp.layers;
                var numLayers = layers.length;
                for (var l = 1; l <= numLayers; l++) {
                    var layer = layers[l];
                    if (layer.nullLayer !== true) {
                        layer.selected = true;
                    }
                }
            } catch (err) {
                alert(err);
            } finally {
                app.endUndoGroup();
            }
        }

        ///// Purge All Memory & Disk Cache /////
        var purgeAllMemDiskCache = function() {
            app.executeCommand(10200)
        }

        ///// 'Scale Composition' /////
        var doScaleComposition = function() {
            function ScaleComposition(thisObj) {
                var scriptName = "Scale Composition";
                // This variable stores the scale_factor.
                var scale_factor = 1.0;
                var text_input = null;
                var scaleButton = null;
                var widthButton = null;
                var heightButton = null;

                function onScaleButtonClick() {
                    this.parent.text_input.text = scale_factor;
                }

                function onWidthButtonClick() {
                    var activeItem = app.project.activeItem;
                    if ((activeItem == null) || !(activeItem instanceof CompItem)) {
                        alert("Please select or open a composition first.", scriptName);
                    } else {
                        this.parent.text_input.text = Math.floor(activeItem.width * scale_factor);
                    }
                }

                function onHeightButtonClick() {
                    var activeItem = app.project.activeItem;
                    if ((activeItem == null) || !(activeItem instanceof CompItem)) {
                        alert("Please select or open a composition first.", scriptName);
                    } else {
                        this.parent.text_input.text = Math.floor(activeItem.height * scale_factor);
                    }
                }

                function testNewScale(test_scale) {
                    var is_ok = true;
                    var activeItem = app.project.activeItem;
                    if ((activeItem == null) || !(activeItem instanceof CompItem)) {
                        alert("Please select or open a composition first.", scriptName);
                    } else {
                        if (test_scale * activeItem.width < 1 || test_scale * activeItem.width > 30000) {
                            is_ok = false;
                        } else if (test_scale * activeItem.height < 1 || test_scale * activeItem.height > 30000) {
                            is_ok = false;
                        }
                    }

                    return is_ok;
                }

                // This function is called when the user enters text for the scale.
                function on_textInput_changed() {
                    var activeItem = app.project.activeItem;
                    if ((activeItem == null) || !(activeItem instanceof CompItem)) {
                        alert("Please select or open a composition first.", scriptName);
                    } else {
                        // Set the scale_factor based on the text.
                        var value = this.text;
                        if (isNaN(value)) {
                            alert(value + " is not a number. Please enter a number.", scriptName);
                        } else {
                            var new_scale_factor;
                            if (this.parent.scaleButton.value == true) {
                                new_scale_factor = value;
                            } else if (this.parent.widthButton.value == true) {
                                new_scale_factor = value / activeItem.width;
                            } else {
                                new_scale_factor = value / activeItem.height;
                            }
                            if (testNewScale(new_scale_factor)) {
                                scale_factor = new_scale_factor;
                            } else {
                                alert("Value will make height or width out of range 1 to 30000. Reverting to previous value.", scriptName);
                                // Load text back in from current values.
                                if (scaleButton.value == true) {
                                    onScaleButtonClick();
                                } else if (widthButton.value == true) {
                                    onWidthButtonClick();
                                } else {
                                    onHeightButtonClick();
                                }
                            }
                        }
                    }
                }

                function onScaleClick() {
                    var activeItem = app.project.activeItem;
                    if ((activeItem == null) || !(activeItem instanceof CompItem)) {
                        alert("Please select or open a composition first.", scriptName);
                    } else {
                        // Validate the input field, in case the user didn't defocus it first (which often can be the case).
                        this.parent.parent.optsRow.text_input.notify("onChange");
                        var activeComp = activeItem;
                        // By bracketing the operations with begin/end undo group, we can undo the whole script with one undo operation.
                        app.beginUndoGroup(scriptName);
                        // Create a null 3D layer.
                        var null3DLayer = activeItem.layers.addNull();
                        null3DLayer.threeDLayer = true;
                        // Set its position to (0,0,0).
                        null3DLayer.position.setValue([0, 0, 0]);
                        // Set null3DLayer as parent of all layers that don't have parents.  
                        makeParentLayerOfAllUnparented(activeComp, null3DLayer);
                        // Set new comp width and height.
                        activeComp.width = Math.floor(activeComp.width * scale_factor);
                        activeComp.height = Math.floor(activeComp.height * scale_factor);
                        // Then for all cameras, scale the Zoom parameter proportionately.
                        scaleAllCameraZooms(activeComp, scale_factor);
                        // Set the scale of the super parent null3DLayer proportionately.
                        var superParentScale = null3DLayer.scale.value;
                        superParentScale[0] = superParentScale[0] * scale_factor;
                        superParentScale[1] = superParentScale[1] * scale_factor;
                        superParentScale[2] = superParentScale[2] * scale_factor;
                        null3DLayer.scale.setValue(superParentScale);
                        // Delete the super parent null3DLayer with dejumping enabled.
                        null3DLayer.remove();

                        app.endUndoGroup();
                        // Reset scale_factor to 1.0 for next use.
                        scale_factor = 1.0;
                        if (this.parent.parent.optsRow.scaleButton.value) {
                            this.parent.parent.optsRow.text_input.text = "1.0";
                        }
                    }
                }

                // This function puts up a modal dialog asking for a scale_factor. Once the user enters a value, the dialog closes, and the script scales the comp.
                function BuildAndShowUI(thisObj) {
                    // Create and show a floating palette.
                    var my_palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptName, undefined, {
                        resizeable: true
                    });
                    if (my_palette != null) {
                        var res =
                            "group { \
                            orientation:'column', alignment:['fill','top'], alignChildren:['left','top'], spacing:5, margins:[0,0,0,0], \
                            introStr: StaticText { text:'Scale composition using:', alignment:['left','center'] }, \
                            optsRow: Group { \
                            orientation:'column', alignment:['fill','top'], \
                            scaleButton: RadioButton { text:'New Scale Factor', alignment:['fill','top'], value:'true' }, \
                            widthButton: RadioButton { text:'New Comp Width', alignment:['fill','top'] }, \
                            heightButton: RadioButton { text:'New Comp Height', alignment:['fill','top'] }, \
                            text_input: EditText { text:'1.0', alignment:['left','top'], preferredSize:[80,20] }, \
                            }, \
                            cmds: Group { \
                            alignment:['fill','top'], \
                            okButton: Button { text:'Scale', alignment:['fill','center'] }, \
                            }, \
                            }";

                        my_palette.margins = [10, 10, 10, 10];
                        my_palette.grp = my_palette.add(res);

                        // Workaround to ensure the edittext text color is black, even at darker UI brightness levels.
                        var winGfx = my_palette.graphics;
                        var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0, 0, 0], 1);
                        my_palette.grp.optsRow.text_input.graphics.foregroundColor = darkColorBrush;

                        my_palette.grp.optsRow.scaleButton.onClick = onScaleButtonClick;
                        my_palette.grp.optsRow.widthButton.onClick = onWidthButtonClick;
                        my_palette.grp.optsRow.heightButton.onClick = onHeightButtonClick;

                        // Set the callback. When the user enters text, this will be called.
                        my_palette.grp.optsRow.text_input.onChange = on_textInput_changed;

                        my_palette.grp.cmds.okButton.onClick = onScaleClick;

                        my_palette.onResizing = my_palette.onResize = function() {
                            this.layout.resize();
                        }
                    }

                    return my_palette;
                }

                // Sets newParent as the parent of all layers in theComp that don't have parents. This includes 2D/3D lights, camera, av, text, etc.
                function makeParentLayerOfAllUnparented(theComp, newParent) {
                    for (var i = 1; i <= theComp.numLayers; i++) {
                        var curLayer = theComp.layer(i);
                        var wasLocked = curLayer.locked;
                        curLayer.locked = false;
                        if (curLayer != newParent && curLayer.parent == null) {
                            curLayer.parent = newParent;
                        }
                        curLayer.locked = wasLocked
                    }
                }

                // Scales the zoom factor of every camera by the given scale_factor. Handles both single values and multiple keyframe values.
                function scaleAllCameraZooms(theComp, scaleBy) {
                    for (var i = 1; i <= theComp.numLayers; i++) {
                        var curLayer = theComp.layer(i);
                        if (curLayer.matchName == "ADBE Camera Layer") {
                            var curZoom = curLayer.zoom;
                            if (curZoom.numKeys == 0) {
                                curZoom.setValue(curZoom.value * scaleBy);
                            } else {
                                for (var j = 1; j <= curZoom.numKeys; j++) {
                                    curZoom.setValueAtKey(j, curZoom.keyValue(j) * scaleBy);
                                }
                            }
                        }
                    }
                }


                // 
                // The main script.
                //
                if (parseFloat(app.version) < 8) {
                    alert("This script requires After Effects CS3 or later.", scriptName);
                    return;
                }

                var my_palette = BuildAndShowUI(thisObj);
                if (my_palette != null) {
                    if (my_palette instanceof Window) {
                        my_palette.center();
                        my_palette.show();
                    } else {
                        my_palette.layout.layout(true);
                        my_palette.layout.resize();
                    }
                } else {
                    alert("Could not open the user interface.", scriptName);
                }
            }


            ScaleComposition(this);
        }


//#endregion 'Misc for dropdowns'

        ///////////////////////////this is the end of the script. don't fuck with this part////////////////////////////////////////
        return windowNERDS;
    }
    var scriptPal = buildUI(thisObj);
    if ((scriptPal !== null) && (scriptPal instanceof Window)) {
        scriptPal.center();
        scriptPal.show();
    } else {
        scriptPal.layout.layout(true);
    }
})(this);