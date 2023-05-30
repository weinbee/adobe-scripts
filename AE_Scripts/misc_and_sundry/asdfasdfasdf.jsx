/**
 * This script is provided free of charge for VCT278 students. Hit me up at nhartmann@shoreline.edu with questions and I'll MAKE A NEW VERSION FOR YA
 */
(function createDockablePanel(thisObj) {
    function buildUI(thisObj) {
      var panel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {
        resizeable: true
      });
      /********************************************
       * UI Elements
       ********************************************/
      // Add your UI elements to the panel here
      var buttonSize = [15, 15];
      var window = panel;
      window.orientation = "column";
      // This line initalizes the copied keyframe counter for the cev script.
      var selectedKeys = [];

// Main Group that will contain all sub-groups/panels
var mainGroup = window.add("group");
mainGroup.orientation = "row";
mainGroup.alignChildren = ["left", "top"];

// REPO panel
var panelOne = mainGroup.add("panel", undefined, "REPO");
panelOne.orientation = "column";

// Right Group that will contain 'CEV' and 'Paste Multiple Keyframes' panels
var rightGroup = mainGroup.add("group");
rightGroup.orientation = "column";
rightGroup.alignChildren = ["left", "top"];

// 'CEV' panel in the right group
var panelCEV = rightGroup.add("panel", undefined, undefined, {name: "panelCEV"});
      panelCEV.text = "CEV";
      panelCEV.orientation = "column";
      panelCEV.alignChildren = ["left", "center"];
      panelCEV.spacing = 5;
      panelCEV.margins = 10;
      // Button group
      var buttonGroup = panelCEV.add("group", undefined, {
        name: "buttonGroup"
      });
      buttonGroup.orientation = "row";
      buttonGroup.alignChildren = ["left", "center"];
      buttonGroup.spacing = 1;
      buttonGroup.margins = 1;
      // Icon buttons
      var buttonC = buttonGroup.add("button", [0, 0, 30, 20], "C", {
        name: "buttonC",
      });
      var buttonE = buttonGroup.add("button", [0, 0, 30, 20], "E", {
        name: "buttonE",
      });
      var buttonV = buttonGroup.add("button", [0, 0, 30, 20], "V", {
        name: "buttonV",
      });
      // After creating the 'V' button...
      var keyframeCountText = buttonGroup.add("statictext", undefined, "0");
      keyframeCountText.characters = 2; // Adjust this value for your needs

// 'Paste Multiple Keyframes' panel in the right group
var panelFour = rightGroup.add("panel", undefined, "Paste Multiple Keyframes");
panelFour.orientation = "row";
// Create the 'pasteMultipleKeyframes' button
var pasteMultipleKeyframesButton = panelFour.add("button", [10, 10, 150, 30], "Paste Multiple Keyframes");

      // Main UI Group for Easement
    var panelTwoThree = window.add("group");
      panelTwoThree.orientation = "column";
      panelTwoThree.alignChildren = ["center", "top"];

      // Custom symbols
      var buttonSymbols = [
        ["■", "■", "■"],
        ["■", "■", "■"],
        ["■", "■", "■"]
      ];
      // Updated button creation code block
      for (var i = 0; i < 3; i++) {
        var row = panelOne.add("group");
        row.orientation = "row";
        for (var j = 0; j < 3; j++) {
          var button = row.add("button", undefined, buttonSymbols[i][j]);
          button.size = buttonSize;
          button.col = i;
          button.row = j;
          button.onClick = function() {
            var ignoreMasks = false; // You can set this to true if you want to ignore masks
            moveAnchor(this.col, ignoreMasks, this.row);
            app.activate(); // Activate the After Effects main window
          };
        }
      }
// PANELASSORTMENT
// ===============
var panelAsSortment = window.add("panel", undefined, undefined, {name: "panelAsSortment"});
    panelAsSortment.text = "asSortment"; 
    panelAsSortment.orientation = "column"; 
    panelAsSortment.alignChildren = ["center","center"]; 
    panelAsSortment.spacing = 0; 
    panelAsSortment.margins = 0; 
    panelAsSortment.alignment = ["center","top"]; 

// ROW1BUTTS
// =========
var row1Butts = panelAsSortment.add("group", undefined, {name: "row1Butts"}); 
    row1Butts.orientation = "row"; 
    row1Butts.alignChildren = ["center","center"]; 
    row1Butts.spacing = 0; 
    row1Butts.margins = 0; 

var iconSortButt_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%40%00%00%00%40%08%06%00%00%00%C2%AAiq%C3%9E%00%00%00%04sBIT%08%08%08%08%7C%08d%C2%88%00%00%00%09pHYs%00%00%01%C3%98%00%00%01%C3%98%01%C3%BA%5C%C2%A6r%00%00%00%19tEXtSoftware%00www.inkscape.org%C2%9B%C3%AE%3C%1A%00%00%09FIDATx%C2%9C%C3%AD%C2%9B%7Bp%1DU%1D%C3%87%3FI%03I%C3%BA2M%C3%9B%00b%C2%B1%09%C2%AD%20%C3%98%C3%82(8%1D%25%C2%A83Z%C2%A2H%2B3j%C2%A7%C2%A2%C2%83U%C2%81Q%C3%BBP%11%7CT%1E%C2%A5%02%C2%BE%C2%90%16e%1Cj%C3%81%11%C3%85Z%C3%B0U%C2%A1%C2%A8%08%C3%B8%18t%C3%94B%C2%AD%20%C2%AD%40i%C2%B0S%2B%C3%90%C3%84%C3%904%C3%8F%C2%86t%C3%BD%C3%A3%C3%BB%3B%3D%C2%9B%C3%8D%C3%9E%C3%9D%C2%BD7%7B%C3%A7%C2%96%19%C2%BE3g%C3%B6%C3%A6%3C~%C3%A7%C2%B7g%7F%C3%A7%C3%B7%3A'%C2%90%3F%C3%9E%0F%C3%AC%C2%B2%C2%B2%C2%A8%0C%C3%B4%C2%8Fh%C3%8C%04%C2%86%C2%80%17%C3%AD9%04%C2%B4T%C2%92!%C3%83G%C2%80%7B%C2%81%C3%85%C3%A5%C2%9Eh-%10%00%C2%97%03%C2%9F%C2%B1%C3%9F%C3%9F.%C3%B7%C2%A4)8%098d%C2%BC%0C%03%C2%A7%C2%97k%C2%92%C3%AF%02%C2%83%40%2F0%C3%91J%1Fp%10X%0F%C2%BCv%0C%C3%B4O%00%5E%5D%C3%A2%C3%98S%C3%91%C3%8B%C2%BBr%C3%8F%18%C3%B8%C2%88%C3%85%C2%85H%C3%A4%03%C3%A0%05%C3%A0%C2%B3%C2%A1%C2%B6K%C2%AD%C3%8E%C2%AD%C3%BE%C2%85%25%C3%90_%C2%8Eg%C3%BE%C3%93%25%C2%8C%3F%1AI%C3%80%C3%93%40%C2%BB%C3%91yS%09t%0A%C3%A2Q%C2%9B%609P%17%C3%93%5E%0B%2CE%0B%C3%B0%C3%8F%22i7%02%07%C2%80%1E%7B%C3%B6%02%C3%93%C2%8A%C2%A41%07%C2%BD%C3%B4C%C3%802%C3%BB%C2%BD%C3%895V%17I%2C%0E%03%40%15R%C2%80Sc%C3%9A%C2%A7Y%5B%C2%B5%C3%B5%C3%8D%C2%8A%C2%85%C3%80%C3%BDh%2B%C2%AD%03n%01%C3%86%03%C2%BF%05%C3%8E%C3%8FHc%22%C3%92K%00%3F%07n%05%C3%B6%01%C3%AF%06N%2C%C2%82%C2%97D%C2%B4%01%C3%9Dx1%C2%BF)%C3%94v%C2%A3%C3%95%05%C3%A8%0B%C2%B6e%C2%A4y%01%5E%C3%AC%C2%B7%23K%C3%92%0C%3C%1E%C2%AA%C3%BFP%0A%C2%8Ds%C2%81'%C2%AD%C3%AFV%24%C2%89%00WZ%C3%9D%C3%97%C2%A2%03%C2%8E%07%C3%9E%00L%C3%8A%C3%88d%18%C2%8D%C3%80J%C2%B4%10C%C3%A8%C2%ABOE%0A%C3%B0%00%C3%B0%25%C3%AB%C2%93%15%C2%B7%19%C2%93w%C2%A1%C2%AF%C3%A80%01%C3%98hm%C3%9F%2F0%C3%B6d%C3%A0W%C3%B8%C2%85%C3%BA%05%C3%90%10j%3F%16%C3%A9%C2%AC%C2%9D%C2%AE%C2%A2%1E%C2%B8%234%C2%A0%1BX%C2%8D%C3%84%C2%ADX%C2%AC6%1A_%05%C2%AE%C2%B7%C3%9F%C3%97%C2%95%40%C2%A7%0D-d%00t%22%C3%935%17%C3%A8%C2%B0%C2%BA%17%C2%81wE%C3%86L%02n%40%C2%8B%1E%00O%20)%C2%88%C3%83%03%C3%96g%0E%C3%807%C3%AC%C2%8Fv%C3%A0%C2%A7H%C3%A1%04%C3%88%C2%93%3B%C2%AFH%C3%86%C2%9B%C2%90%C2%A2r%C2%8B%C3%99%C2%87V%C2%BC%14%C2%BC%1E%C3%98lt%C3%96%23%3D%10%C2%A0%C2%AF%7BF%C2%A4%C3%AF%C3%AB%C3%B0%1A%C3%9E%C2%95A%60%0F%C2%92%C2%98%C2%86H%C3%BFK%C2%AD%C3%8FJ%C2%80%C3%BF%02%C3%BD%C3%80tk%C2%9C%01%C3%BC%24Dh%13RbY%C3%B1%0E%C3%A0A%2B%C3%B3%0B%C3%B4%19%0F%C2%B4%02%C3%AF%C2%B3r6%C3%B1%127%01)%C2%AD%C2%83%C3%B6B%C2%9D%C2%8C%C3%9E%C2%A2%C3%8D%C3%80%C3%B3%C2%8C%7C%C3%B9~%C3%A0Yd%C2%9D%C2%86%C2%91%C3%B4%C2%84q%C2%86%C3%B5%C3%9B%08%C3%90%C2%85%C3%84%C2%BE6%C3%92%C2%A9%0Dx%C3%8A%3A%C3%B6%C2%A2%C3%95%C2%AA%2F%C3%B0B%C3%85%60%3E%C3%B0%C2%9F%08%C3%83%01%C2%B0%178'%C2%A6%C3%BFb%C3%B4B%7D%C3%84%C3%87%16%0F%C3%9A%C3%B8.%C2%A4kf%C2%85%C3%9A%C3%86%C3%A3%C3%8D%C3%A6%0C%24%25%C3%8B%C2%AC~%18%C3%98%06~%C3%BF%7F%3E%C2%86x%1Dp%15Z%C3%BD%00%C3%98%C2%8D%C2%9C%C2%99R%C3%8Dg3R%C2%8A%C3%83H%C3%81%7D%C3%85%C3%8A%5DVw%C2%80%C3%B8%C3%98a%12%C3%B1%3EF%C2%AB%C3%B1%C2%B5%038.e%C3%AEYh%7B%1FB%01%C3%9B%3E%C3%B4%C3%A1%C2%99%C2%8D%C3%ACs%0Fr9%C2%A3%C2%98k%C3%8C%C3%B5%C3%A3%7D%C3%AA%7F%C2%90%C3%9D%C2%A4%C2%85q%C2%95%C2%8D_%C2%95%C3%90vM%11%C3%B4%5C%C3%ACqQ%C3%86%C3%BE%C3%A7%C2%A0w%C3%A9D%1Ej%C2%A7kp%C3%9A%C3%BBg%C2%91%01%C2%B5%C3%80_%C2%AC%C3%AD%C3%A3%C3%80%3C%C3%A0%C2%8Fx%C2%B1%C2%BD%1F)%C2%AB%C2%AC%C3%B8%C2%B5%C2%8D%C2%8B%C3%AEI%C2%80SB4%C2%B3%C3%A2w6%C3%A65E%C2%8C%C3%B9%16%C2%9E%C3%BFg%5Ce%3D%5E%C2%8B%3A%C3%B32%01%C3%99P%C3%A7F%C3%96%C2%84%C2%88%2CD%0E%C2%8As~%C2%AE%C2%8CLr%C2%AC1%C3%A5%C2%B6%C3%8At%60%0D%C2%92%C2%B4!F%C3%AB%1B%C2%80%C2%A3%C3%90V%1B4%26%C2%9B%C2%AC%C2%BE%1AI%C3%A911c%1E6%1E%C2%8Aq%C2%8Fg%C3%A0c%C2%97%3F%C2%85%1B%16X%C3%A5NF%C2%BE%C3%A0%13!f%C3%82%C2%A8%C3%81%C2%9BP'%C2%BA3%C2%81%3F%C2%84%C3%AA%3A%C2%91S%C3%A3%C2%B4t%2F%C3%B0%C3%85%04%C3%A6%3E%C2%877%C3%83%1D6%C3%96%C3%99%C3%BE%C3%80h%C2%B7%00%C2%AF%02~%C2%84%14c%40%C3%B1!%C3%AE%236nu%C2%B4%C3%A1%C3%AE%C3%90d%01J%22%24yp%2B%23%C3%BD%C2%9DK%C2%BC%03%C2%89%C3%B2%C2%80%C3%BD%7D%08%C3%B8%0E%C3%9E%C3%94%26a*p3%5E%C3%9F%0C%22%C3%87e%C2%87%C3%BD%C3%BDoF%C2%9B%C2%BD%C3%8D%C3%84KU%1C%1A%C2%81%C3%A7%C2%90%14%C2%8C%C3%9A%3A-!%C2%A6%2F%C3%8E%40%C3%AC!%C2%BC~p%2F%7F'%5E%C3%B4%1B%C2%91%C2%82z%5BF%C3%A6%C3%82x%C2%8B%C3%B1%C3%A0%02%C2%ACj%60%03%C3%BE%C2%A5%C3%97%20%C2%89%7B%C2%8C%C3%AC%C2%8B0%0E%C3%A5%03%02%C3%B4Ab%C3%A1%C3%84z%5D%0A%C2%B1y%C3%A8%2B%3D%C2%89%C3%B6%C3%A7%20Z%C2%84R%3D%C2%BF%2ChB%C3%9A%7B%00%2F%C2%99Md%5B%C2%84%06%C2%BCg%C3%B9(%23c%C2%8C%11%C2%98%C2%82%C3%B6%C3%AE%10%C2%85%C2%B38%13%C2%90)%0C%C2%80%25%C3%80G%C3%B11%40%C2%B9%C3%A1b%C2%8C%0F%C2%87%C3%AA%C2%92%16%C2%A1%C3%9Ex%C3%9C%C2%83%7F%C3%B9W%C2%A6M%C3%A2%7C%C3%A5M1m%C2%AF%00%C3%AE%C2%B3%C3%B6%C3%BBP.%60)%C2%85%C2%9D%C2%A9%C2%BCq%C2%B9%C3%8D%C2%B54R%1F%5E%C2%84.%60%0B%C3%B0w%C2%BCR%0D%C2%80%C3%AF%01%C2%93%C2%B3LR%C2%8B7%C2%8B%C2%ADVW%C2%83%C3%BC%C3%B6%5DV%C2%BF%0DI%0B(%18%09%C2%90%C2%8B%3B%C2%8Bl8%11%C3%B8%C2%84%C2%95%C2%ACcZ%C3%B0_2%C3%8E%C2%97hBV%2B%C2%AC%20%3B%C2%81%C3%9B%C3%91%C2%96-%0A%1F0%02%C3%BFB%0ERX%C3%B3nd%C3%B4J%3A%C2%AF%C2%AC%13)%C2%B0%24%2C%C3%83%2B%5B%C2%A7%C3%A9W%C2%A4%C2%8Ci%C3%85%C2%9B%C3%84%C2%9B%0B%C3%B49%0Ao%C3%A2%C3%8Egt%14X%14%C2%AA%C2%90%18%C2%85%C2%99%C2%BC%17x%7B%C2%81%C3%BE%C3%95%C3%80%C3%97%C2%AD%C3%AF%C2%96%04%C2%BA%C2%AD%C3%88y%C3%AAF%C2%B9%C2%82k%C2%81%C3%BDV%C2%97%C2%B4p%7F5%C3%9A%C3%9FD%C3%9A%3C%0E7%C3%A0%1D%C2%B7%C2%AA%04Z%C2%99%C3%91%C2%8C%C3%ACn%C2%80%1C%C2%8F%C2%B4%20%C2%A8%05%C3%AF%C2%B0%14%C3%82%0F%C2%AC%C3%8F%05%C2%A1%C2%BA%C3%85VwG%C3%828%C3%A7%C3%B6%C3%8E.%C3%90%C3%BE%1Ed%C2%95%3A%C2%88%C2%8Fib%C2%91%C3%B6B%C3%AD%C3%88%C2%86%C3%AF6%26oK%19%C3%A3%C2%B4o%7FB%1Fg%C3%97%C2%B7%C2%87%C3%AA%1E%C2%B7g%C2%92K%C3%9B%17%C2%99%23%C2%8Cf%C2%A4%C3%A0%40%C3%91%C3%AA%C3%AE%04%3A%23%10%C3%B6%C3%AF'%C2%A3%14Q%5C%C3%8C%7F-%C3%B2%C3%8F%5D(%C2%BC%0E%C3%85%C3%AF%7B%19%C2%99%C3%A9ub%17%C2%97%1Dvx%04x'%3A%3FXbu%C2%97%C3%99%C3%B3%C3%A1%C2%84q%C3%8E%C3%AEG%3F%C3%80%24%C3%A4%7C5%20%C3%AFs%C2%90%C3%82%C3%9B%14d%C3%9E%C2%B7%C2%A1mw%18%C2%9F%C2%B4%C2%8Ah%C2%92%22%C2%AD%0C%C2%A3%C2%80%C3%A22%C2%94%09r%16%C3%A2%C3%87%09%0CLFQX%60s%C2%BA%C2%83%C2%93%C3%9D%C3%88%C3%84%16%C3%82%0F%C3%B1%11%5C%1Bp52s.%C2%B0)%C2%A6%C3%B4%C2%A1%C2%A3%3B%C2%AA%C2%80%C3%B7%C2%A2%C2%84D%3F%C2%B2%C3%BB%C3%9D%09L8%C3%94%22q%3D%1De%C2%93%C3%83%C3%98%C2%8427%C2%83%09%C3%A3%C2%8FCV%C3%83%C3%A5%1C%C3%AFAV%60o%C3%8A%C2%9C%1B%18%7D%26%C2%B0%079e%1D)s%3ALA%C2%81_%C2%AD%C2%9B%C3%9Fi%C3%97R%C3%BCu%C2%90%0D_%C2%85rp%01%C3%8A%C3%AA%5CR%22%C2%AD%24%5Cb%C2%B4%03%C2%94%C3%87%5CEv%C3%BF!%C2%8A%C3%B9F%C3%A7%C3%8F%C2%A0%10%C3%B5%C3%99%1C%18%C2%ACGn%C2%AAKgo%C2%A0%C2%B43%C2%86(%26%22%0B%14%18%C3%AD%C3%AB%C2%89O%C2%8F%15%C2%8BN%C2%B4%C2%A0%3Ce%C2%84%C3%B3%3A*%3A%13%C3%AFE%C3%AE%40%C2%A7%C2%B3%C2%A5%C3%A2T%7C%18%C3%9C%0E%C2%BCq%C3%8C%C3%9C%09%C3%AE%C3%88%7C%17x%C3%9Fz'pZN%134%C3%A2s%0B%3D%C2%A4%1Fc%C3%85%C3%A1%C2%83x%3F%C3%BEn%C2%8A%3BYJ%C3%82i%C3%A8%C2%A48%C3%80%C2%923%C3%A3%C3%B0%1A%C2%B6%0F%C3%9D%C2%A6%C3%88%03U(8r%5B%C3%A2%16%C2%B2%C2%89n%C2%9D%C3%B5u%22%C3%BF%05r%C3%B2%C3%AA%C3%90%C2%BB%C2%B9%2C%C3%92%06%C3%A4%3A%1Ffv%05%3E%C3%BD%7D%3B%0Ay%C3%B3%C3%80%C3%99%C3%B8s%C2%80%C2%AD%24o%C2%B5%13%C3%B0I%C3%98%C3%A7%C2%91i%C3%8D%03%C3%91E%C2%BD%C2%9A%02%0E%C3%9D%C2%99x%1B%C2%BD%1Dej%C3%B3%C3%80t%7C%08%C2%BD%1F%C2%99%C3%9E(%C3%8E%03%C3%BE%C2%87w%C2%A5%C3%93%C3%B2%C3%BCY1%1B9%3E%012%C2%99g%C2%A5%0D%C2%98%C2%86O_w%C2%93%C3%9FM%C2%AFqh%C3%A5%C2%87%C2%91%02Z%C2%8BD%C2%B0%C2%A6%40%7D%1EX%C2%88r%03%01%C2%8A%25Fe%C2%AB%0A%C3%AD%C2%ADj%C2%94%C3%AA%C2%BE%C3%82~%C3%9F%C2%84%C2%BFh0V%C2%9C%C2%8B%C2%A2%C3%86Z%14%C2%B5%C2%81%C2%BE%C3%8AA%C3%A4%1EoN%18%7B%00%C2%9D%C3%A8%60%C3%A3%C2%A3NX%18%C3%8B%C3%91%C2%B6%3E%04%7C%19e%C2%AD%C2%87%C2%8Bev%C2%BEMX%C2%AC%C2%ABY%C2%AE2%C2%80%C3%9F%1A%7F%C3%8B%C3%90%7F%1F%C3%B1%C3%A7%C2%8D%C2%87Q%C2%93%C3%94%C2%88%C3%B6%C3%AD%22%C2%94%C2%96~%0E%C2%A5%C2%9C%C3%B2%C3%84%5B%C3%AD%C3%B9%C3%BB%C2%8C%C3%BDw%22%3D%01%C2%BA%C3%B2%C2%B2%C2%BF%40%C2%BF9(Q%C2%BB%08%1D%C2%9E%C2%8E%09%C3%B3%C3%B0f%23otY%C3%89%1B.%7D%C2%9E%C2%9A%06%C3%8B%C3%A3%C2%92%C3%94K%1A%2F%2F%40%C2%A5%19%C2%A84%5E%5E%C2%80J3PidY%C2%80%C2%A0%C3%AC%5CT%10Y%16%C3%A01%C3%A4%0F%C3%9CYf%5E*%C2%824G%08%14%3E%26zS%2Fed%C3%95%01'%C2%91%C3%BD%02%C3%82Xp%0C%C3%B01%C2%8AOy-%40%C2%91lY%C3%90%C2%82%02%C2%8A5e%C2%A0%1D%C3%B5%04%C2%AFA%3AgA%C2%A8%C3%AEdFF%C2%A4%C2%A7%C2%A0CZ%C2%87%3A%14Hm%0D%C3%95e%C3%B6%04%C2%B3l%C2%81%26%145%C3%86%5DR%C3%8A%1Bq%C3%BC%5C%C2%81%0Ej%C3%A7%C2%A1%00h-%0A%C3%99%7F%C2%83%C3%82%C3%B5*%0A%C2%9F%15%C2%964a%25q%2B%0AY%1F%08%C3%95%C2%ADA%C3%89%C2%92O%C2%85%C3%AAn%C3%84%C2%9F_%C3%B4%C2%A3%C2%BB%02%C2%BBJ%C2%99%C3%B0H%5B%C2%80%C2%A7%C3%91%17%0Fc%0BJd.%C3%81%1F%7F%C3%BD2%C3%92%C2%A7%C3%A0%7D%C2%9F4dY%00%C3%A7%07%C3%A4%C2%95%C2%98%2C%05%C3%AD%C2%8C%C2%BE%C2%8B%C2%98%04%C3%87k%C2%AA%0F%C2%93%C3%85%0A%C2%BC%60%C3%8F)%C2%89%C2%BD%C2%8E%2C%C2%B8%14z.%C2%A1v%1D%3A%3D%C3%AA%22%C2%BF%5C%C2%9DC9%C3%B2%01G%1B%C3%8D%1E2%C2%98%C3%AE%2C%120%C2%80n%C2%864%C2%90%C3%BDRr%25q1%C3%BEJ%5C%C2%96%C3%83%C3%92L%C2%98%C2%8B%C2%8E%C2%A1%7B%C2%817%C3%A7E%C2%94%C3%BC%25%C3%A0%2C%C3%84%C3%A3%10%C2%BA%C2%B8%C2%95%2BV%C3%A0%13%C2%93%C2%AB%C3%91%C2%A5%C3%A3%C2%B1%22%C2%AF%05%C2%98%C2%812%C2%BF%C3%AE%C3%A2%C3%95%C2%B2%C2%AC%03%C2%8B%C3%95%C3%AC%17!%C2%BB%C3%AC%C3%BE%C2%BD%C2%A5%C2%83l%C3%B7%09%0Aa%C2%A6%3D%C2%9F%19%03%C2%8D%C3%89%C3%B8%C2%AB5%7D%C3%A8C%C2%AD%1F%03%C2%BDT%1C%C2%8F%C2%8E%C2%A8%C2%B71%C3%B2%12b%C2%A5J%C2%8F%C3%B1r%1D%19n%C2%80F%C3%B1%7F%C3%A8e%16%C3%B2%03%C2%AC%22g%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var sortButton = row1Butts.add("iconbutton", undefined, File.decode(iconSortButt_imgString), {name: "sortButton", style: "toolbutton"}); 

var nullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0F%00%00%00%0F%08%06%00%00%00%3B%C3%96%C2%95J%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%00%C2%A0IDAT(%C2%91%C3%85%C2%92%C2%8B%0D%C3%820%0CD%C3%AFP%07%C3%A9%08%1D!l%C3%92Mh7%C3%A8%08%C2%8CB7%60%C2%84nr(%C2%90%20%C2%B7v%11R%C2%91%C2%B0%14%C3%A5sg%C3%AB%251%25%C2%81%C3%A4%00%1FWIK%3E%25%C3%99%02%C3%A8%C2%9D%23'%C3%A7)%18)kEO%C2%91%C2%A7%C3%99%C3%94%1A%C3%8Dz%C3%99%C2%AC%C2%ADvy%12%15l%15%0A%06%C3%B8.%C2%AA%C3%BF%C3%B4%C2%8Dy%2F*%C3%B6%1CT_%3D%C2%A2%24%C2%BB%C2%9F%C3%9F%C3%98%C2%9F%C3%90L%C2%B2%C2%BB%C3%92!%C3%AC%C3%A3w%26y%C3%83%0B-%19m%C3%9CK%C2%AA%C3%BE%C3%BF%7FU%C2%ADh%C2%BF%C3%83%C3%B6v%07%60r%C3%99%C2%BF%C3%A8%C3%AD%C3%A8qlo%C3%9F%01%C2%9CW*%C2%80%07%60%1C%5C%C2%B2%5C%C3%BEu%C3%9C%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var nullButton = row1Butts.add("iconbutton", undefined, File.decode(nullButton_imgString), {name: "nullButton", style: "toolbutton"}); 
    nullButton.text = "NLL"; 

var iconReverseButt_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%0F%08%06%00%00%00%C3%BE%C2%A4%0F%C3%9B%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C3%A8IDAT8%C2%8D%C2%9DT%C2%BFO%14A%14%C3%BEf%C2%98%C2%83aW%C3%A4%C3%A0D%C2%84%02%C2%92%C2%8B!%14%04P%C3%81%60%02%C2%91%C3%84%C3%86%C3%96%60ac%C3%89%19%C3%8E%C3%BF%00(h%C3%A0%1FPL%24%C2%81H%C2%81%C2%A5%C3%9A%40l%0C%24%C2%96(wb%C2%82%C2%B1%C3%B0%C2%BC%4041J%22x%C2%B3%C3%AC%C3%8F%1B%C2%B2%03%C2%BB%C3%BC%0C%C2%B8%C3%B7%25%C2%BB3%C2%B3%C3%AF%C3%9B%C3%B7%C2%BD7%C3%AF%C3%8D%10)%25%C2%8EC%C3%97%C3%B5N%C2%99%C3%A0%2FN%18%C3%BE%07%C2%8CN%19%C2%B9%C3%9F%C3%8F%02%C3%A6%C3%A9%02%C2%B5%17w%C3%9C%C3%BBW%C2%B9l%C2%AE%C2%8A%C3%AC%3F6%C3%B1%C3%81%1F%C2%AE%09!%C2%B2%C3%BE%C2%84%C3%B9%C2%AF%3A-%C2%99.%C3%82M%C2%85%2C%C3%A2q%C3%AFa%2B%C2%BC%C2%BE%C3%86R%05%C3%A2%C3%81%C2%9A%C3%B9%C3%9B%01%C2%82%C3%89%C3%AB%C3%8EpHZ%C2%89M%00%05%07%C2%B1%C3%B1%C3%A5%C3%88%02%C3%BB%C3%A8%05%C2%B0%C2%A4b%C3%954%C2%AD%1F%C3%80%C3%A2%C2%A0!B%C3%ABL%C3%BC2%C3%9C*%0EY%C3%9E%08T%C3%86%C3%8Fvu%0A%C3%88%C2%8FL%C2%91X%C2%85%01!%C3%84%1B%16%C2%98m%C2%B2%C2%85%C3%8F%C3%AC%C2%A9%C2%9A%C2%B7%18%0F%C3%B0%C3%85%C2%9E%C2%86%C2%9D%C2%9A%C2%83%C2%97%C3%AC%C2%8B%2C%C3%80%C2%A7%C3%AER%C2%92%7B%C3%9F%09%40%09%C3%A4%C3%8B%C3%80%C2%AD%C2%97%C3%B1%C2%9B%15VmM%181%C3%8D%C3%AD%C2%91%C3%A9%C3%8FU%10s%2BZ%06%3B%C2%8A%7F%05A%17%C2%A9%3A%00%19%2B%C3%B56%C2%8C%C2%B8r%C2%AC%01%C2%B4%C3%B9%0E%C3%A4%C3%97%C3%97%C2%913%08%C2%A0%C3%89%C3%BA%C3%87a%C2%9B%C3%AA%C2%BA.%7D%01%C3%89%C2%ABU%C3%84d%C3%B3%1B.%C2%BC%1AE%C2%9B%3D%C2%84%1B%C3%8EHd%C3%A7%1Fc%C3%A3Xc%C3%8F%3F%C2%855%00%C2%AB0%C3%99%C3%B2%13%5E%C2%96%C2%99%3F%60%C3%89%C3%AA%C2%92%C2%A3%0F%40%C3%83%C2%99k%C3%9D%C2%A2%C3%9F%C3%9FIg%C2%B8%0B%C2%86%18RO%C2%B1%C3%BD%C2%92*~)%08%C3%BE%3Br%C2%92%C2%B5%C2%A6D%C3%96%7D%C3%94%C3%96%C3%A1%C2%8Ct%C2%AB5%5D%C3%BD%03%C3%BD%C3%B6%02%3C%5BD%C2%96%C3%B0%1B%C3%87%C2%83%C3%99%C3%83%C3%8E%22%C3%B9%19%14%C2%B2%C3%B7%40%C3%97%C3%BF%C2%9D%C3%AB%C2%B0%3C%C2%BD%08%C2%92%C3%9B%C2%9E%05%C2%A0%C3%AE0%0Ff%5E%08%C2%91%3F%C2%9AA%C2%B2.M~%19%C2%93%C2%A5l%C2%89L%C3%B0%0D%C2%B2i%C2%B6%0B!%C3%BE%1E%C3%BE~%C3%A2%C2%B2%C3%9Bo%C3%99%C3%A8%C3%87%17%C3%88%1Ew%0E%00%C2%BB%C3%8B%C2%83%C2%B8W%06%C2%95Ec%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var iconReverseButt = row1Butts.add("iconbutton", undefined, File.decode(iconReverseButt_imgString), {name: "iconReverseButt", style: "toolbutton"}); 
    iconReverseButt.text = "RVRS"; 

// ROW2BUTTS
// =========
var row2Butts = panelAsSortment.add("group", undefined, {name: "row2Butts"}); 
    row2Butts.orientation = "row"; 
    row2Butts.alignChildren = ["center","center"]; 
    row2Butts.spacing = 0; 
    row2Butts.margins = 0; 

var iconBlankButt2_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%12%00%00%00%12%08%06%00%00%00V%C3%8E%C2%8EW%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03(iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%205.6-c145%2079.163499%2C%202018%2F08%2F13-16%3A40%3A22%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%20CC%202019%20(Macintosh)%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A600D85EF3FAA11E99731F012F5360853%22%20xmpMM%3ADocumentID%3D%22xmp.did%3A600D85F03FAA11E99731F012F5360853%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3A600D85ED3FAA11E99731F012F5360853%22%20stRef%3AdocumentID%3D%22xmp.did%3A600D85EE3FAA11E99731F012F5360853%22%2F%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%12ywY%00%00%020IDATx%C3%9A%C2%AC%C2%94%3DK%5BQ%18%C3%87%C2%9F%C2%9C%7B%C3%89%C2%92%C3%9CB%C3%A56q%09T%C3%A2%C2%90%C2%A5%16b%3ATc%C2%BF%C2%80%14Zp%C3%AF%C2%A4%0En%16%C3%AB7ht%C2%A8C%C3%9D%C2%9A%C2%A9T%C2%9C%3A%C2%94%167%1D4%C3%94%C2%B9%C2%B5%C2%A1%C2%93b0%26h%1A%C3%AC5%C2%86%C2%82!I%C3%BB%C3%BF_%C3%8E%09%C2%97%10%C2%87%C2%82%0F%C3%BC%C3%A0%C2%9C%C3%B3%C2%BC%C3%9C%C3%B3%C2%BC%C2%9C%1B%C2%9A%C2%9B%C2%9F%C2%97%01%C3%A2%C2%80%110%0A%C2%86%C3%B4%C3%99%058%04%C3%87%C3%A0%C2%AA%C3%9F%C3%81%C3%AE%C3%9B%C3%9F%01%0F%C3%814%C2%98%01%C3%89%3E%C3%BD%11%C3%B8%08%C2%B6%C3%80w%C3%90%18%14%C3%A8.x%0AVm%C3%9B%1E%C2%9E%C2%9C%C2%98%C2%90%07ccr%C3%8Fu%7D%C3%A5%C2%AFz%5D~%1C%1C%24%C2%BF%C3%AE%C3%AF%2F%C2%B7%C3%9B%C3%AD%178Z%06_%C3%80o%C3%AAC%3A5%C3%9E%C3%A4%19x%C2%9FH%24dnvVb%C2%B1%C3%98%C2%A0%C2%94%C2%A5V%C2%AB%C3%89%C2%BB%7C%5E%C3%8A%C3%A52%C2%B7%0C%C3%B8%C2%897SZ%C3%8FtV%19%C3%A4%C3%95%C3%92%C3%92%C2%8DA(%C3%94%C3%91%C2%86%C2%B6%C3%B4%C3%91%C2%BE%C2%A2ta%C2%A7%C2%99%0Eo%12%0E%C2%87%7B_%C2%AE%23%1D%23%5C%C2%9F%C3%A3%C2%8CB%1B%C3%9A%C3%92G%C3%97%C3%93Q%C2%BA%3B3%C2%AC%C2%89%C2%B9%09%C2%83%C2%BC%C3%8E%C3%A5%24%C2%B7%C2%B2%22%C3%95j%C3%95%C2%87%C3%AB%1C%C3%8EL0%C3%9A%C3%92G7e%C3%84%C3%96-N%C2%B2%C2%B0F%C2%94RbY%C2%964%C2%9BMy%C2%B3%C2%B6%C3%A6%C2%9Fq%1D%C2%8DF%C3%85R%C2%AAgG%C2%9F%C3%9D%C2%BD%3DvvT%C2%9991%C3%9D%C2%A1%C2%B8X%C2%BF%5C%5C%C3%B4%1D%11%C2%A0D%C2%B8%C3%A6%C2%99%1B%C2%B0%0B%C3%B8%0C)%C2%B9%25Qzb%C3%BD9%09%16%C2%96)%C3%A9t%C3%AE%13%C2%93f%C2%B0%01%01%C2%9F%0B%C2%A5%C3%87%C3%BE%08%C3%83%C3%963%C3%A8v%C2%BB%C3%92%C3%A9t%C3%84%C2%A4c%C3%92%C3%A4Y%07%3A%23%C3%9A%C2%87%C3%93~h%C2%8Dg2%7FX%C2%96J%C2%A5%C2%92%7D%C2%94%C3%89H%24%12%C3%B1I%C2%A7%C3%93%C3%B2djJ%C3%A2%C3%B1%C2%B88%C2%8E%23%C3%A3%C3%98Of%C2%B3%12%0Ft%C3%B6%C3%83%C3%86%06%3F%C2%9A%C3%87%C3%B6%C2%B3%C3%92%0Fp%0Bc%7F%C3%86%C2%89m%C2%B5Z%C2%BD%C3%B6%C2%BA%7D%0D0AhC%5B%C3%BA%C3%A8ww%C3%85%1BQ%C3%A7%C2%81%C3%93F%C2%A3%C3%B1%C2%BCX%2CJ*%C2%95%C3%B2ou%C3%93%13y%C2%BB%C2%BEn%C2%9E%C3%88%02%C3%98%05%C3%97%26%C3%9058%01%3F%11%C3%ACq%C2%A1P%C2%88%5Ez%C2%88%1D%0A%C3%89_%C3%94%C2%84%C2%85%3E.%C2%95dg%7B%C3%9BO%C3%87%C3%B3%C2%BC3%1D%C2%84%C2%8F%C3%B62%C3%B8ho%C3%B57%22ZQ%00%C3%9F%C3%80%C3%A6%C3%BF%C3%BC%C3%98%C3%BE%090%00%C2%B97%C3%B8g%1C%C3%9D%C2%B3%0F%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var iconBlankButt2 = row2Butts.add("iconbutton", undefined, File.decode(iconBlankButt2_imgString), {name: "iconBlankButt2", style: "toolbutton"}); 
    iconBlankButt2.text = "2"; 

var iconBlankButt3 = row2Butts.add("iconbutton", undefined, File.decode(iconBlankButt2_imgString), {name: "iconBlankButt3", style: "toolbutton"}); 
    iconBlankButt3.text = "3"; 

var iconBlankButt4 = row2Butts.add("iconbutton", undefined, File.decode(iconBlankButt2_imgString), {name: "iconBlankButt4", style: "toolbutton"}); 
    iconBlankButt4.text = "4"; 

var iconBlankButt5 = row2Butts.add("iconbutton", undefined, File.decode(iconBlankButt2_imgString), {name: "iconBlankButt5", style: "toolbutton"}); 
    iconBlankButt5.text = "5"; 

// ROW3BUTTS
// =========
var row3Butts = panelAsSortment.add("group", undefined, {name: "row3Butts"}); 
    row3Butts.orientation = "row"; 
    row3Butts.alignChildren = ["center","center"]; 
    row3Butts.spacing = 0; 
    row3Butts.margins = 0; 

var iconBlankButt6 = row3Butts.add("iconbutton", undefined, File.decode(iconBlankButt2_imgString), {name: "iconBlankButt6", style: "toolbutton"}); 
    iconBlankButt6.text = "6"; 

var iconBlankButt7 = row3Butts.add("iconbutton", undefined, File.decode(iconBlankButt2_imgString), {name: "iconBlankButt7", style: "toolbutton"}); 
    iconBlankButt7.text = "7"; 

var iconBlankButt8 = row3Butts.add("iconbutton", undefined, File.decode(iconBlankButt2_imgString), {name: "iconBlankButt8", style: "toolbutton"}); 
    iconBlankButt8.text = "8"; 

var iconBlankButt9 = row3Butts.add("iconbutton", undefined, File.decode(iconBlankButt2_imgString), {name: "iconBlankButt9", style: "toolbutton"}); 
    iconBlankButt9.text = "9"; 

// ROW4BUTTS
// =========
var row4Butts = panelAsSortment.add("group", undefined, {name: "row4Butts"}); 
    row4Butts.orientation = "row"; 
    row4Butts.alignChildren = ["center","center"]; 
    row4Butts.spacing = 0; 
    row4Butts.margins = 0; 

      // UI Group - Easement
      var panelTwo = panelTwoThree.add("panel", undefined, "Easement");
      panelTwo.orientation = "column";
      var sliderGroup = panelTwo.add("group");
      sliderGroup.orientation = "row";
      // Slider for Easing
      var slider = sliderGroup.add("slider", [10, 10, 150, 30], 0, 0, 100);
      slider.value = 70;
      slider.stepdelta = 1;
      slider.preferredSize.width = 100; // Set the preferred width for the slider
      // Decrease the space between the slider and the 'value' text by modifying the left position value
      var valueText = sliderGroup.add("edittext", undefined, slider.value.toFixed(0));
      valueText.bounds = [90, 10, 150, 30]; // [left edge, top edge, right edge, bottom edge]
      valueText.preferredSize.width = 30; // Set the preferred width for the value text
      slider.onChanging = function() {
        valueText.text = this.value.toFixed(0);
      };
      // Easing buttons
      var buttonsGroup = panelTwo.add("group");
      buttonsGroup.orientation = "row";
      /* So, if you have bounds = [10, 20, 50, 60], it means the UI element is positioned 10 units from the left and 20 units from the top of its parent container. The right edge of the UI element is 50 units from the left edge of its parent container, making the element 40 units wide (50-10). Similarly, the bottom edge of the UI element is 60 units from the top edge of its parent container, making the element 40 units tall (60-20). */
      var button1 = buttonsGroup.add("button", [10, 10, 35, 35], "<");
      button1.graphics.font = ScriptUI.newFont("Arial", "Bold", 14); // these new lines include font family, style, and size!
      var button2 = buttonsGroup.add("button", [50, 10, 75, 35], "<>");
      button2.graphics.font = ScriptUI.newFont("Arial", "Bold", 14);
      var button3 = buttonsGroup.add("button", [90, 10, 115, 35], ">");
      button3.graphics.font = ScriptUI.newFont("Arial", "Bold", 14);
      /********************************************
       * Event Handlers
       ********************************************/
    // 'nullButton' event handler
      nullButton.onClick = function() {
        createANull();
        app.activate();
      };

      // 'applyEasing' event handlers
      button1.onClick = function() {
        applyEasing(parseFloat(valueText.text), 'in');
        app.activate();
      };
      button2.onClick = function() {
        applyEasing(parseFloat(valueText.text), 'both');
        app.activate();
      };
      button3.onClick = function() {
        applyEasing(parseFloat(valueText.text), 'out');
        app.activate();
      };
      valueText.addEventListener('focus', function() {
        valueText.active = true;
        valueText.selectAll();
      });
      // 'sort' event handlers
      sortButton.onClick = function() {
        sortProjectItems();
        app.activate();
      };
      // 'kcp' panel event handlers
      pasteMultipleKeyframesButton.onClick = function() {
        var comp = app.project.activeItem;
        var selectedProps = comp.selectedProperties;
        pasteMultipleKeyframes(selectedProps);
        app.activate(); // Activate the main After Effects window
      };
      // 'CEV' panel event handlers (now for buttons 'c', 'e', and 'v')
      buttonC.onClick = function() {
        cevCopyKeyframes();
        // After copying the keyframes, update the static text
        if (selectedKeys.length > 99) {
          keyframeCountText.text = "you can't select above 99 keyframes :/";
          alert("you can't select above 99 keyframes :/");
        } else {
          keyframeCountText.text = selectedKeys.length.toString();
        }
        app.activate();
      };
      buttonE.onClick = function() {
        cevPasteKeyframesEasing();
        app.activate();
      };
      buttonV.onClick = function() {
        cevPasteKeyframesValues();
        app.activate();
      };
      /********************************************
       * Functions
       ********************************************/
      function sortProjectItems() {
        app.beginUndoGroup('Sort Project Items'); // Start the undo group
        var project = app.project;
        var items = project.items;
        var itemsArray = [];
        for (var i = 1; i <= items.length; i++) {
          itemsArray.push(items[i]);
        }
        var audioExtensions = ['wav', 'aac', 'm4a', 'aif', 'aiff', 'mp3', 'mpeg', 'mpg', 'mpa', 'mpe'];
        var videoExtensions = ['crm', 'mxf', 'mov', '3gp', '3g2', 'amc', 'swf', 'flv', 'f4v', 'gif', 'm2ts', 'dv', 'avi', 'm4v', 'mpg', 'mpe', 'mpa', 'mpv', 'mod', 'm2p', 'm2v', 'm2a', 'm2t', 'mp4', 'wmv', 'wma'];
        var imageExtensions = ['ai', 'eps', 'ps', 'pdf', 'psd', 'bmp', 'rle', 'dib', 'tif', 'crw', 'nef', 'raf', 'orf', 'mrw', 'dcr', 'mos', 'raw', 'pef', 'srf', 'dng', 'x3f', 'cr2', 'erf', 'cin', 'dpx', 'gif', 'rla', 'rpf', 'img', 'ei', 'iff', 'tdi', 'jpg', 'jpe', 'heif', 'heic', 'ma', 'exr', 'pcx', 'png', 'hdr', 'rgbe', 'xyze', 'sgi', 'bw', 'rgb', 'pic', 'tga', 'vda', 'icb', 'vst'];
        var aiAndPsdExtensions = ['ai', 'psd', 'psb'];
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
  
      function createANull() {
        var mainComp = app.project.activeItem;
        if ((!mainComp) || (!(mainComp instanceof CompItem))) {
          alert("Please select nothing--I should still work.");
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
  
      function pasteMultipleKeyframes(selectedProps) {
        var comp = app.project.activeItem;
        if (!(comp instanceof CompItem)) {
          alert("Please select a composition to paste keyframes.");
          return;
        }
        if (selectedProps.length === 0) {
          alert("Please select at least one property to paste keyframes.");
          return;
        }
        var pasteTime = comp.time;
        app.beginUndoGroup("Paste Multiple Keyframes");
        // calculate the time difference between the playhead and the first keyframe
        var firstKeyTime = selectedProps[0].keyTime(selectedProps[0].selectedKeys[0]);
        var timeDifference = pasteTime - firstKeyTime;
        for (var i = 0; i < selectedProps.length; i++) {
          var prop = selectedProps[i];
          var propKeys = prop.selectedKeys;
          if (propKeys.length === 0) continue;
          for (var j = 0; j < propKeys.length; j++) {
            var keyIndex = propKeys[j];
            var keyValue = prop.keyValue(keyIndex);
            var keyTime = prop.keyTime(keyIndex);
            // add the time difference to the original keyframe time
            var newKeyTime = keyTime + timeDifference;
            var pasteKeyIndex = prop.addKey(newKeyTime);
            prop.setValueAtKey(pasteKeyIndex, keyValue);
            // handle keyframe ease values
            if (prop.keyInTemporalEase(keyIndex).length > 0) {
              prop.setTemporalEaseAtKey(pasteKeyIndex, prop.keyInTemporalEase(keyIndex), prop.keyOutTemporalEase(keyIndex));
            }
          }
        }
        app.endUndoGroup();
      }
  
      var selectedKeys = [];
      var selectedKeysTypes = [];  // New array to store property types
      
      function cevCopyKeyframes() {
        selectedKeys = [];
        selectedKeysTypes = [];  // Clear the property types array
      
        var selectedLayers = app.project.activeItem.selectedLayers;
        for (var i = 0; i < selectedLayers.length; i++) {
          for (var j = 0; j < selectedLayers[i].selectedProperties.length; j++) {
            var property = selectedLayers[i].selectedProperties[j];
            if (property instanceof Property) {
              for (var k = 0; k < property.selectedKeys.length; k++) {
                var keyIndex = property.selectedKeys[k];
                var copiedKey = {
                  keyValue: property.keyValue(keyIndex),
                  keyInTemporalEase: property.keyInTemporalEase(keyIndex),
                  keyOutTemporalEase: property.keyOutTemporalEase(keyIndex)
                };
                selectedKeys.push(copiedKey);
                selectedKeysTypes.push(property.propertyValueType);  // Store the property type
              }
            }
          }
        }
      }
      
      function cevPasteKeyframesEasing() {
        app.beginUndoGroup("Paste Easing Only");
        if (selectedKeys.length === 0) {
          alert('No keyframes copied. Use the "Copy" button first.');
          return;
        }
        var selectedLayers = app.project.activeItem.selectedLayers;
        for (var i = 0; i < selectedLayers.length; i++) {
          for (var j = 0; j < selectedLayers[i].selectedProperties.length; j++) {
            var property = selectedLayers[i].selectedProperties[j];
            if (property instanceof Property) {
              for (var k = 0; k < property.selectedKeys.length; k++) {
                var keyIndex = property.selectedKeys[k];
                var copiedKey = selectedKeys[k % selectedKeys.length];
                var copiedKeyType = selectedKeysTypes[k % selectedKeysTypes.length];  // Get the corresponding property type
                
                // Check if property types match
                if (property.propertyValueType === copiedKeyType) {
                  property.setTemporalEaseAtKey(keyIndex, copiedKey.keyInTemporalEase, copiedKey.keyOutTemporalEase);
                }
              }
            }
          }
        }
        app.endUndoGroup("Paste Easing Only");
      }      
  
      function cevPasteKeyframesValues() {
        app.beginUndoGroup("Paste Values Only"); // Begin undo group
        if (selectedKeys.length === 0) {
          alert('No keyframes copied. Use the "Copy" button first.');
          return;
        }
        var selectedLayers = app.project.activeItem.selectedLayers;
        for (var i = 0; i < selectedLayers.length; i++) {
          for (var j = 0; j < selectedLayers[i].selectedProperties.length; j++) {
            var property = selectedLayers[i].selectedProperties[j];
            if (property instanceof Property) {
              for (var k = 0; k < property.selectedKeys.length; k++) {
                var keyIndex = property.selectedKeys[k];
                var copiedKey = selectedKeys[k % selectedKeys.length];
                property.setValueAtKey(keyIndex, copiedKey.keyValue);
              }
            }
          }
        }
        app.endUndoGroup("Paste Values Only"); // End undo group
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