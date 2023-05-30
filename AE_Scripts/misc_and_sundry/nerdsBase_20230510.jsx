(function createDockablePanel(thisObj) {
    function buildUI(thisObj) {
      var windowNERDS = (thisObj instanceof Panel) ? thisObj : new Window("palette", "NERDS_redux", undefined, {
        resizeable: true
      });
      windowNERDS.orientation = "column"; 
      windowNERDS.alignChildren = ["center","top"]; 
      windowNERDS.spacing = 0; 
      windowNERDS.margins = 5;

// GRPTOP
// ======
var grpTop = windowNERDS.add("group", undefined, {name: "grpTop"}); 
    grpTop.orientation = "row"; 
    grpTop.alignChildren = ["center","fill"]; 
    grpTop.spacing = 10; 
    grpTop.margins = 10; 

// PANELMISC
// =========
var panelMISC = grpTop.add("panel", undefined, undefined, {name: "panelMISC"}); 
    panelMISC.text = "MISC"; 
    panelMISC.orientation = "column"; 
    panelMISC.alignChildren = ["center","center"]; 
    panelMISC.spacing = 0; 
    panelMISC.margins = 0; 

var iconSortButt_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C3%96IDAT8%C2%8DuT1%C2%8E%C3%9B%40%0C%1C%06v%17%C3%80%C3%82%C3%95%01NOp%C3%BA%14%C3%B7%04%3FAO0%C3%AE%05z%C2%82_p%C2%B8'%C2%A8%C2%B9*%C2%8D%C3%B2%03%3Da%C2%AFw%C3%A1%26%C2%95%0B%06%23%0F%15zO%16%40%C3%98%C2%A2%C3%88Y%C3%8E%C2%90%5Csw%C2%AC%3Df%C3%96%02%C2%A0%5D%C3%9C%7D%C3%82%C3%8D%C3%97%00%C3%98g_%C3%BD%7C%01T%C3%92%00%20~%C3%B7%02%C3%A6%C3%BF%0E%00%C2%81F%C3%B9%26w%7F%C2%BF%03%20%606%00%0C8V%3E%02%15%C2%82%24%C3%9F%5C)%C2%80%C2%97%C2%BB%C3%98%14%C3%80%C2%8Az%26%C3%96%C2%87%C3%A8%C3%BB%C2%B8%C3%A2%3B%C2%A8%C3%A2%C3%83%1A%C3%A0%24%C3%A3%C3%89%2F%C2%B9%C2%9A5%40%C3%85%C2%841%C2%AF_%00EiH%C2%94%C2%A9%C2%97g%3A%19P1.-%2F%C3%92%C2%93%C2%924%C3%9F%24%25%1D'3%0B%C3%8A%C2%A4%C3%B2G%12%C3%94MkE%C3%B5%C2%A7%C2%BBGu%C3%81p%01%C2%BC%C2%88jI%C2%B9%C3%87%C3%95y%C2%BAi%3D%C2%A5%C2%B1a%01%C3%91%C2%B0%C2%92)%2C%1DS%C3%92%7B%C3%A8%C2%B2B%C2%99%60%5Dz%3FI%C2%82C%C3%90uU4*%C2%98'%C2%9E%14%C3%9C%C3%AA%C2%800%C2%BE%C3%BF%02%C3%B0%C2%A1%C2%B8%22%402%1C7%0A%C2%82h%C2%9C%C2%92V%C3%85%C3%8C%265%C2%AC%C3%91a3%C3%A0v%C2%BB%C3%9D%5C%C2%AF%C3%97%1FbT%C3%92B%60C-%C3%8C%C3%AC%C2%93%C3%B4%C3%8ClL%02%3F%07%05%C3%89%C3%91hD%C3%8An%C2%B7%C3%BB~%3E%C2%9F%19%C3%93%C2%9A%C3%99%C2%A0%C3%AF%C2%B4i%5E%3Du%C2%B7S%C3%821%C2%AD%C3%96%3E%C2%81%C3%BD%06%C3%B0W%C2%BE%60%C3%B5%06%C3%A0I1s%C3%8E%26u%C2%AFW%23H%7Dx%C3%90ahF%C3%B3%08%C2%BD%0A%C3%AC%C2%B6%C3%B7%12%C2%BE%C2%8F%C2%AE%05-%C2%82W%C2%9B%C2%91%3B%C3%9E%07%40%C3%95%C3%B9%16%C2%A9%C2%93%25Q%C3%AC%C2%A2%C3%8B%0F%C3%86%26%C2%A6b%C2%90%C3%8E%5D%7C%C2%AFw%C2%B3(8%C2%B6a%C3%BFh%C3%B5RN%C2%AC%60s%07%C2%98%C2%82%09Z__q%C3%B7%C3%95%C2%B1%C2%A4%C2%BEHA%C3%8BM%C2%89%C2%87%C2%95%0DfF%C3%AA%C3%B3%C3%82%C3%87%1AjDbVY%1Dc%C3%B9%C3%BB%C3%BFyp%C3%B7%C2%B1%22%C2%9EN*%04%C2%98%C2%AF2%25%C3%87m%C2%B4%C2%AC%C3%9Eb%C3%AE%C3%B8%07%1F%C3%9B%C3%91%C3%9C%C2%A21%C2%95%C3%AB%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var iconSortButt = panelMISC.add("iconbutton", undefined, File.decode(iconSortButt_imgString), {name: "iconSortButt", style: "toolbutton"}); 
    iconSortButt.text = "miscA"; 

var iconSortButt1 = panelMISC.add("iconbutton", undefined, File.decode(iconSortButt_imgString), {name: "iconSortButt1", style: "toolbutton"}); 
    iconSortButt1.text = "miscB"; 

var iconSortButt2 = panelMISC.add("iconbutton", undefined, File.decode(iconSortButt_imgString), {name: "iconSortButt2", style: "toolbutton"}); 
    iconSortButt2.text = "miscC"; 

// GRPDIV1
// =======
var grpDiv1 = grpTop.add("group", undefined, {name: "grpDiv1"}); 
    grpDiv1.orientation = "row"; 
    grpDiv1.alignChildren = ["left","top"]; 
    grpDiv1.spacing = 0; 
    grpDiv1.margins = 0; 

var divider1 = grpDiv1.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.enabled = false; 
    divider1.alignment = "fill"; 

// PANELREPO
// =========
var panelREPO = grpTop.add("panel", undefined, {name: "panelREPO"}); 
    panelREPO.text = "REPO"; 
    panelREPO.orientation = "column"; 
    panelREPO.alignChildren = ["center","center"]; 
    panelREPO.spacing = 5; 
    panelREPO.margins = 5; 

// Custom symbols for REPO
var buttonSize = [15, 15];
var buttonSymbols = [
    ["■", "■", "■"],
    ["■", "■", "■"],
    ["■", "■", "■"]
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
        app.activate(); // Activate the After Effects main window
        };
    }
    }

// GRPDIV2
// =======
var grpDiv2 = windowNERDS.add("group", undefined, {name: "grpDiv2"}); 
    grpDiv2.preferredSize.width = 211; 
    grpDiv2.preferredSize.height = 17; 
    grpDiv2.orientation = "column"; 
    grpDiv2.alignChildren = ["left","center"]; 
    grpDiv2.spacing = 0; 
    grpDiv2.margins = 0; 

var divider2 = grpDiv2.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.enabled = false; 
    divider2.alignment = "fill"; 

// GRPMAINBUTTS
// ============
var grpMainButts = windowNERDS.add("group", undefined, {name: "grpMainButts"}); 
    grpMainButts.orientation = "row"; 
    grpMainButts.alignChildren = ["left","center"]; 
    grpMainButts.spacing = 0; 
    grpMainButts.margins = [4,5,4,4]; 
    grpMainButts.alignment = ["fill","top"]; 

// COL1BUTTS
// =========
var col1Butts = grpMainButts.add("group", undefined, {name: "col1Butts"}); 
    col1Butts.orientation = "column"; 
    col1Butts.alignChildren = ["left","center"]; 
    col1Butts.spacing = 0; 
    col1Butts.margins = [0,0,64,0]; 

var iconButtA_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%02%40IDATH%C2%89%C2%B5V%C3%9Bm%C2%850%0C%C2%B5%C2%AB%C3%BE%C3%9F%3B%02%230%02%23%C2%B0A%19%C2%81%09*%C3%BA%C3%9D%C2%8F%C2%B2A%19%C3%A1nPF%60%04FH'p%C3%A5%C3%B4%C3%B8%C3%96%40%10%C2%A4U%23E%04%13%C3%87%C2%8F%1C%1FC%22%C2%925%C2%89%C2%A8%20%C2%A26W%2F%C3%AAf%1A*%C2%89(%10%C3%91LDC%C2%AE%C2%B1%07%C3%8A%1B%1AU%0F%C2%A353%179%C3%9A%C2%8F%C2%99%C3%86%26%C2%8D%08%C3%91%05%11%C2%99%C3%BFd%C2%8C%C2%99%C2%AFz'z%C2%B0%C2%88%C3%9C%20%C2%AB%5D%0A%2FD%C2%A4%7BFfnt-%22%C2%BD%C3%93%C3%AF%C3%A0H%7Fh%0C%C3%9E%C2%AB%C2%91%C2%8E%C2%99g%C2%A4%C2%AD%C2%80%C3%8C%C3%92%C3%96%C3%A2%C2%A9F'f%C2%AE%C2%B0%C2%AEl%C2%8F%C2%A6XD%C3%9A%C3%85%C3%89%09%10%08%C2%9E%1D%22%C2%99%C3%A0%C2%BD%7D%C2%AF!%2F%C2%9CL%C2%8D%08f%C2%859%1E%C2%A2%11%C2%91%08%10%17%C2%95W%C3%9F%C3%93%07-%C3%B5%C3%A6%C2%B5%C3%9E.%C3%B4%01%C2%82%09%C3%A9%1A%C2%91%C3%822e%C2%8C%C2%88%1A%C3%ACi%C2%B1%C3%96%C2%A8%C3%AB%1C%C3%A8%3F!%C2%8Do%C2%B8%C2%8B%00%C2%83k0%C2%A9%C3%A1wDRbvH%C3%B51%1A%C3%9DP%C2%85O%11)q%C2%B0%24%C3%B6T%C3%98%C3%93%00%C2%99%16%C3%A5u%C3%97%18%C2%8ASA0%01%C3%BAvP%C2%87%C3%B7xhB_%23%0A%C3%983B%C3%96%C3%A1%0A%7C%C3%B4ZF%C2%9A%C2%9D%08UKSp%C3%80%08%0Ea%3A%1B%C2%8FH%C2%B7%1E%C2%8D%C2%BE%1C8%04%06%0D%C3%8D%23%C3%B6%C3%BE%5C%C2%B8%03%C2%84%20%15%0DdE%C3%AA%C3%82W%C3%A5%60wee0%C2%B8%C2%BA%C2%B3%C2%92XDf%1E%19%C2%84%03%0CZ%C3%94%C3%8F.R%7D%7F%C2%B5%C2%A8%1D%C3%B4%C3%87Dd%C3%83%1D%C3%BA0h%5E%5C%C2%B1%C3%B9%C2%86%C2%B9%C2%86%C2%B98g%C2%AE%C2%AE%1B%C2%98%C3%B7%C3%A1~%C3%B8%C2%B7%C3%BC%5Eo%7Bi%11%C2%A4oqW%C3%8E%C2%B1M%1D%C2%B9%C2%88%22%C3%95%C3%A5%C2%B6%C2%98%C2%9B%C2%880%C3%90%16%40%C2%B0%1E%C3%B2%C2%91%C2%B4U%0E%0Em%C2%B1%7F%C2%BF%C3%AD%1C0%C3%88%00O%7B%C3%87%C2%99k%06%C3%B1%C3%A9%C2%B3%7BO2%C3%88%19n%C3%AC%C2%90%C3%BB~%C3%87X%C2%87%C3%A7%1AX%C3%9BT%1F%C2%B0%C3%BE%C3%ACY%1F%C3%A0%C2%B1n%C3%A0e%C2%83%C2%AB%C3%91%5D%C3%96O%C3%91%C3%95'3%C3%B7P%C2%B0%C2%A693%C3%B3%C2%84%C3%B5%05l%C2%A22%C2%AB%25r%C3%9Ch%3DlZ%1F%C3%8CV%C3%99%C2%8E%5EJ%18%C3%B1%C2%9D%C2%BAt%7C%C3%B7AD%2F%00%C3%82%60%07%1B%1D1s%C2%8B%C3%B4l%3A%C3%B5o%C3%BF%C2%AE%C3%8C%C2%99%7F%C3%BD%C2%BB%C2%AA%01%C2%A0%C3%88%C3%AC%C2%8E%C2%B4O%C2%8D%5Cc%C2%9A%C3%96%18%15%00%10Swvl%C3%AE%C3%ACh%20%1A%C3%AD%C3%9A%C3%96R%C3%8E%0D%22%C3%BA%02%11T%1E%7C%C3%9E)%C3%9A~%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var iconButtA = col1Butts.add("iconbutton", undefined, File.decode(iconButtA_imgString), {name: "iconButtA", style: "toolbutton"}); 
    iconButtA.text = "SORT"; 

var iconButtB_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0F%00%00%00%0F%08%06%00%00%00%3B%C3%96%C2%95J%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%00%C2%A0IDAT(%C2%91%C3%85%C2%92%C2%8B%0D%C3%820%0CD%C3%AFP%07%C3%A9%08%1D!l%C3%92Mh7%C3%A8%08%C2%8CB7%60%C2%84nr(%C2%90%20%C2%B7v%11R%C2%91%C2%B0%14%C3%A5sg%C3%AB%251%25%C2%81%C3%A4%00%1FWIK%3E%25%C3%99%02%C3%A8%C2%9D%23'%C3%A7)%18)kEO%C2%91%C2%A7%C3%99%C3%94%1A%C3%8Dz%C3%99%C2%AC%C2%ADvy%12%15l%15%0A%06%C3%B8.%C2%AA%C3%BF%C3%B4%C2%8Dy%2F*%C3%B6%1CT_%3D%C2%A2%24%C2%BB%C2%9F%C3%9F%C3%98%C2%9F%C3%90L%C2%B2%C2%BB%C3%92!%C3%AC%C3%A3w%26y%C3%83%0B-%19m%C3%9CK%C2%AA%C3%BE%C3%BF%7FU%C2%ADh%C2%BF%C3%83%C3%B6v%07%60r%C3%99%C2%BF%C3%A8%C3%AD%C3%A8qlo%C3%9F%01%C2%9CW*%C2%80%07%60%1C%5C%C2%B2%5C%C3%BEu%C3%9C%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var iconButtB = col1Butts.add("iconbutton", undefined, File.decode(iconButtB_imgString), {name: "iconButtB", style: "toolbutton"}); 
    iconButtB.text = "NULL"; 

var iconButtC_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%17%00%00%00%16%08%06%00%00%00%2Bv%07%05%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01%C3%88IDAT8%C2%8D%C3%8D%C2%93%3FH%1BQ%1C%C3%87%3F11%C2%B6%1A%C3%BF%C3%95%C2%B3R%C2%8B%C2%87%22*%C3%98%C2%82%C2%8AE%11l%1C%C3%92Bu%11%1CB%5C%1C%C2%BDA%04%C2%B7v%C3%B2%14%C2%97%C2%8E%0Em!N%0E%C2%82%C2%AE%C3%9D%0A%C3%A2r%C2%8B%22J%17%C2%BBX%C2%8Ai%C2%8Ek%2B%1C4GD%C3%B3O%C3%A3p%254%5E4'%5E%C3%80%C3%AF%C3%B8~%C3%AF%C3%BB%C3%A1%C3%BB%C3%9E%C3%BB%3E%17%C2%90%C2%A57%C2%88%C2%A3%C2%8A%C2%A9%10%C3%99%C3%86%03%C3%80%C2%9BEg%C3%A1_7%20%C2%B2M%C2%99%C2%B3%C3%94%7C%C3%9D%2F%C3%B8%C3%B4%40%1D%C3%AB%C2%A1%C3%A6%C3%92%C3%80%C2%9FT%7B%08%C3%B5%C3%94p0%C3%97F%C2%A7%C3%A0%C2%BDq%C2%AF%C3%A7%C2%BA%C3%81hW%15K%C2%AF%1By%C3%ACs%C3%A7%C2%AD%7B%C3%9D.%00%C2%9E5U%C2%A0H%22%C3%B3%C2%9B%3A%2B%C2%BB1%C3%BB%C3%B0%C3%B5P3%C2%A1%C2%9E%1A%00b%C2%89s%C3%A2%C3%89%C2%8Bk%C3%93%C2%A9F%C3%9A~%C3%B2%C3%91%C2%AE*%C3%86%C2%BB%C2%AB%01%C3%B8v%C2%9C%C3%A4%C3%B9%C3%B2Q%C3%9E%5C%0E%08%2C%C2%BC%12%C3%98%C3%97%12%C2%BC%C3%B8%10A%C2%91D%C2%A6%C3%BAj%C2%99%C3%9C%C3%B8U%1C%3E%3B%C3%B4%C2%88%C2%87%C3%A5%C3%A6%C3%91'%C3%964%C2%8B%C3%A1w%3C%C3%83%C2%A7%C2%9D%C2%BF%C3%8C%7C%3EF%C2%91D%5E%C2%B6Vr%C2%96%C3%8E%C3%9AK%C3%AE%C2%AB0%C3%81%C2%AA%C2%91%C3%A6POY%0C%C3%BF%C3%9F%C2%AFfd%00ra%C2%AE%C3%8A%C3%92%C2%96%C2%93%C2%A4%C2%99%C2%A2%C2%A5%C2%B6%1C%C2%80N%C3%81%C2%8B%22%C2%89%05%C3%8D%1D%C3%BF%C3%9Ab%3B%C3%B9%C3%98%C2%AA%C2%8A%22%C2%89hF%069%20%C3%B0v%C2%A4%01%C3%BD4c1%C3%8A%01%C2%81%C3%BE%C2%A7%0F%00%C3%98%C3%93%C3%8E%C3%AC%C3%81%01%C3%BC%C3%A1(%C2%8A%24%C3%A6%1A%23Tz%C2%88%C2%BEk%C3%8F%C3%8D%C2%BDn%17M%3E%C3%93%C2%AA%1Ai%C3%BC%C3%A1%C2%A8%7Dx1%C2%A5%C3%8E%C2%B3%C3%ACk%09%C2%BE%C3%AB%C2%A9%C2%82-)%0A%C3%B7%C2%87%C2%A3%C3%88%01%C2%81%C2%B9%C3%A1z%C3%A2%C3%89%0B%C3%84%C3%B7%3Fn%1D%C3%A2%C3%86%C3%AF%C2%BF%C2%B8%C2%A53%C3%B8%C3%B1'%07%7F%C2%AC%C2%AD%C2%B93%1C%C3%A0PO1%C2%B6%C2%AA%C2%96%06~%17%C2%95%14n%3E%C3%A8%17%C3%99Yj%C3%8C%C2%BCFW0%18%2C%C3%BC%C2%BD%1C%C3%90%25%C2%93%C2%BC%C2%89%C2%AA%C3%930%C3%830%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var iconButtC = col1Butts.add("iconbutton", undefined, File.decode(iconButtC_imgString), {name: "iconButtC", style: "toolbutton"}); 
    iconButtC.text = "LOOP"; 

var iconButtD = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%0F%08%06%00%00%00%C3%BE%C2%A4%0F%C3%9B%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C3%A8IDAT8%C2%8D%C2%9DT%C2%BFO%14A%14%C3%BEf%C2%98%C2%83aW%C3%A4%C3%A0D%C2%84%02%C2%92%C2%8B!%14%04P%C3%81%60%02%C2%91%C3%84%C3%86%C3%96%60ac%C3%89%19%C3%8E%C3%BF%00(h%C3%A0%1FPL%24%C2%81H%C2%81%C2%A5%C3%9A%40l%0C%24%C2%96(wb%C2%82%C2%B1%C3%B0%C2%BC%4041J%22x%C2%B3%C3%AC%C3%8F%1B%C2%B2%03%C2%BB%C3%BC%0C%C2%B8%C3%B7%25%C2%BB3%C2%B3%C3%AF%C3%9B%C3%B7%C2%BD7%C3%AF%C3%8D%10)%25%C2%8EC%C3%97%C3%B5N%C2%99%C3%A0%2FN%18%C3%BE%07%C2%8CN%19%C2%B9%C3%9F%C3%8F%02%C3%A6%C3%A9%02%C2%B5%17w%C3%9C%C3%BBW%C2%B9l%C2%AE%C2%8A%C3%AC%3F6%C3%B1%C3%81%1F%C2%AE%09!%C2%B2%C3%BE%C2%84%C3%B9%C2%AF%3A-%C2%99.%C3%82M%C2%85%2C%C3%A2q%C3%AFa%2B%C2%BC%C2%BE%C3%86R%05%C3%A2%C3%81%C2%9A%C3%B9%C3%9B%01%C2%82%C3%89%C3%AB%C3%8EpHZ%C2%89M%00%05%07%C2%B1%C3%B1%C3%A5%C3%88%02%C3%BB%C3%A8%05%C2%B0%C2%A4b%C3%954%C2%AD%1F%C3%80%C3%A2%C2%A0!B%C3%ABL%C3%BC2%C3%9C*%0EY%C3%9E%08T%C3%86%C3%8Fvu%0A%C3%88%C2%8FL%C2%91X%C2%85%01!%C3%84%1B%16%C2%98m%C2%B2%C2%85%C3%8F%C3%AC%C2%A9%C2%9A%C2%B7%18%0F%C3%B0%C3%85%C2%9E%C2%86%C2%9D%C2%9A%C2%83%C2%97%C3%AC%C2%8B%2C%C3%80%C2%A7%C3%AER%C2%92%7B%C3%9F%09%40%09%C3%A4%C3%8B%C3%80%C2%AD%C2%97%C3%B1%C2%9B%15VmM%181%C3%8D%C3%AD%C2%91%C3%A9%C3%8FU%10s%2BZ%06%3B%C2%8A%7F%05A%17%C2%A9%3A%00%19%2B%C3%B56%C2%8C%C2%B8r%C2%AC%01%C2%B4%C3%B9%0E%C3%A4%C3%97%C3%97%C2%913%08%C2%A0%C3%89%C3%BA%C3%87a%C2%9B%C3%AA%C2%BA.%7D%01%C3%89%C2%ABU%C3%84d%C3%B3%1B.%C2%BC%1AE%C2%9B%3D%C2%84%1B%C3%8EHd%C3%A7%1Fc%C3%A3Xc%C3%8F%3F%C2%855%00%C2%AB0%C3%99%C3%B2%13%5E%C2%96%C2%99%3F%60%C3%89%C3%AA%C2%92%C2%A3%0F%40%C3%83%C2%99k%C3%9D%C2%A2%C3%9F%C3%9FIg%C2%B8%0B%C2%86%18RO%C2%B1%C3%BD%C2%92*~)%08%C3%BE%3Br%C2%92%C2%B5%C2%A6D%C3%96%7D%C3%94%C3%96%C3%A1%C2%8Ct%C2%AB5%5D%C3%BD%03%C3%BD%C3%B6%02%3C%5BD%C2%96%C3%B0%1B%C3%87%C2%83%C3%99%C3%83%C3%8E%22%C3%B9%19%14%C2%B2%C3%B7%40%C3%97%C3%BF%C2%9D%C3%AB%C2%B0%3C%C2%BD%08%C2%92%C3%9B%C2%9E%05%C2%A0%C3%AE0%0Ff%5E%08%C2%91%3F%C2%9AA%C2%B2.M~%19%C2%93%C2%A5l%C2%89L%C3%B0%0D%C2%B2i%C2%B6%0B!%C3%BE%1E%C3%BE~%C3%A2%C2%B2%C3%9Bo%C3%99%C3%A8%C3%87%17%C3%88%1Ew%0E%00%C2%BB%C3%8B%C2%83%C2%B8W%06%C2%95Ec%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var iconButtD = col1Butts.add("iconbutton", undefined, File.decode(iconButtC_imgString), {name: "iconButtD", style: "toolbutton"}); 
    iconButtD.text = "REVERSE"; 

var iconButtE = col1Butts.add("iconbutton", undefined, File.decode(iconButtB_imgString), {name: "iconButtE", style: "toolbutton"}); 
    iconButtE.text = "COLOR";

// GRPDIV3
// =======
var grpDiv3 = grpMainButts.add("group", undefined, {name: "grpDiv3"}); 
    grpDiv3.orientation = "column"; 
    grpDiv3.alignChildren = ["center","center"]; 
    grpDiv3.spacing = 0; 
    grpDiv3.margins = [1,129,1,1]; 

var divider3 = grpDiv3.add("panel", undefined, undefined, {name: "divider3"}); 
    divider3.enabled = false; 
    divider3.alignment = "fill"; 

// COL2BUTTS
// =========
var col2Butts = grpMainButts.add("group", undefined, {name: "col2Butts"}); 
    col2Butts.orientation = "column"; 
    col2Butts.alignChildren = ["left","center"]; 
    col2Butts.spacing = 0; 
    col2Butts.margins = [0,0,42,0]; 

var iconButtF = col2Butts.add("iconbutton", undefined, File.decode(iconSortButt_imgString), {name: "iconButtF", style: "toolbutton"}); 
    iconButtF.text = "BLINK"; 

var iconButtG = col2Butts.add("iconbutton", undefined, File.decode(iconSortButt_imgString), {name: "iconButtG", style: "toolbutton"}); 
    iconButtG.text = "UNBLINK"; 
    iconButtG.preferredSize.width = 50; 

var iconButtH = col2Butts.add("iconbutton", undefined, File.decode(iconButtC_imgString), {name: "iconButtH", style: "toolbutton"}); 
    iconButtH.text = "UNPRECOMPOSE"; 

var iconButtI = col2Butts.add("iconbutton", undefined, File.decode(iconButtC_imgString), {name: "iconButtI", style: "toolbutton"}); 
    iconButtI.text = "BLANK"; 

var iconButtJ = col2Butts.add("iconbutton", undefined, File.decode(iconButtC_imgString), {name: "iconButtJ", style: "toolbutton"}); 
    iconButtJ.text = "BLANK"; 

// GRPDIV4
// =======
var grpDiv4 = windowNERDS.add("group", undefined, {name: "grpDiv4"}); 
    grpDiv4.preferredSize.width = 211; 
    grpDiv4.orientation = "row"; 
    grpDiv4.alignChildren = ["left","center"]; 
    grpDiv4.spacing = 10; 
    grpDiv4.margins = 0; 

var divider4 = grpDiv4.add("panel", undefined, undefined, {name: "divider4"}); 
    divider4.enabled = false; 
    divider4.alignment = "fill"; 

// GRPEASEMENT
// ===========
var grpEasement = windowNERDS.add("group", undefined, {name: "grpEasement"}); 
    grpEasement.orientation = "row"; 
    grpEasement.alignChildren = ["left","center"]; 
    grpEasement.spacing = 10; 
    grpEasement.margins = 0; 

// PANEL_EASEMENT
// ==============
var SliderNText = grpEasement.add("group", undefined, "SliderNText");
SliderNText.orientation = "column";
var sliderGroup = grpEasement.add("group");
sliderGroup.orientation = "row";
// Slider for Easing
var slider = sliderGroup.add("slider", [10, 10, 150, 30], 0, 0, 100);
slider.value = 70;
slider.stepdelta = 1;
slider.preferredSize.width = 100;
// Decrease the space between the slider and the 'value' text by modifying the left position value
var valueText = sliderGroup.add("edittext", undefined, slider.value.toFixed(0));
valueText.bounds = [90, 10, 150, 30]; // [left edge, top edge, right edge, bottom edge]
valueText.preferredSize.width = 30; // Set the preferred width for the value text
slider.onChanging = function() {
valueText.text = this.value.toFixed(0);
};
// Easing buttons
var buttonsGroup = grpEasement.add("group");
buttonsGroup.orientation = "row";
var button1 = buttonsGroup.add("button", [10, 10, 35, 35], "<");
var button2 = buttonsGroup.add("button", [50, 10, 75, 35], "<>");
var button3 = buttonsGroup.add("button", [90, 10, 115, 35], ">");

/********************************************
* Event Listeners
********************************************/
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

    // iconButtA = sortProjectItems
    iconButtA.onClick = function() {
        sortProjectItems();
        app.activate();
    };
    // iconButtB = createANull
        iconButtB.onClick = function() {
            createANull();
            app.activate();
        };
        // iconButtC = loopAtPlayhead
        iconButtC.onClick = function() {
            loopAtPlayhead(direction, method);
            app.activate();
            };
            // iconButtD = reverseSelectedLayers
            iconButtD.onClick = function() {
                reverseSelectedLayers();
            };
        
            // iconButtE = colorpicker
            iconButtE.onClick = function() {
              colorPicker();
              app.activate();
            };
            
        // iconButtF = blinkSelectedLayers
        iconButtF.onClick = function() {
          blinkSelectedLayers();
          app.activate();
        };
        
        // iconButtG = unblinkSelectedLayers
        iconButtG.onClick = function() {
          unblinkSelectedLayers();
          app.activate();
        };
        
        // iconButtH = unprecomposeLayers
        iconButtH.onClick = function() {
          unprecomposeLayers();
          app.activate();
        }

        // iconButtI = empty
       // iconButtI.onClick = function() {
           // insertFunctionHere();
      //      app.activate();
        //  }

                // iconButtJ = empty
       // iconButtJ.onClick = function() {
           // insertFunctionHere();
      //      app.activate();
        //  }

        /********************************************
* Functions
********************************************/
// ======================
// Un-PreCompose Function
// ======================

function unprecomposeLayers() {
    app.beginUndoGroup("Un-precompose Layers");
  
    // Get the active composition
    var activeComp = app.project.activeItem;
    if (!activeComp || !(activeComp instanceof CompItem)) {
        alert("Please select a composition with pre-comps.");
        app.endUndoGroup();
        return;
    }
  
    // Get the selected layers in the active composition
    var selectedLayers = activeComp.selectedLayers;
    if (selectedLayers.length == 0) {
        alert("Please select a pre-comp layer.");
        app.endUndoGroup();
        return;
    }
  
    // Process each selected layer
    for (var i = 0; i < selectedLayers.length; i++) {
        var selectedLayer = selectedLayers[i];
  
        // Check if the selected layer is a pre-comp
        if (selectedLayer.source instanceof CompItem) {
            var preComp = selectedLayer.source;
  
            // Calculate the index of the pre-comp in the active composition
            var preCompIndex = selectedLayer.index;
  
            // Copy layers from the pre-comp and paste them in the active comp
            for (var j = preComp.layers.length; j > 0; j--) {
                var layerToCopy = preComp.layers[j];
  
                // Save the original start time
                var startTime = layerToCopy.startTime;
  
                // Duplicate the layer into the active comp
                var duplicatedLayer = layerToCopy.duplicate();
                duplicatedLayer.moveToEnd(activeComp);
  
                // Set the start time of the duplicated layer
                duplicatedLayer.startTime = startTime + selectedLayer.startTime;
  
                // Move the duplicated layer to the correct position
                activeComp.layer(duplicatedLayer.index).moveBefore(activeComp.layer(preCompIndex));
            }
  
            // Remove the original pre-comp layer from the active comp
            selectedLayer.remove();
        }
    }
  
    app.endUndoGroup();
  }
  
  // ===================================
  // Blink/Unblink Function
  // ===================================
  
  var ORIGINAL_OPACITY_EXPRESSIONS = {};
  
  function blinkSelectedLayers() {
    var BLINK_CONTROLLER_NAME = "Blink Controller";
    var BLINK_EFFECT_NAME = "Blink";
    var invertBlink = ScriptUI.environment.keyboardState.shiftKey;
  
    /**
     * Gets or creates a blink controller in a given comp
     *
     * @param {CompItem} comp Comp to add controller to
     * @returns {Layer}       Control layer
     */
    function getOrCreateBlinkController(comp) {
      // Get existing layer, if present
      for (var ii = 1, il = comp.numLayers; ii <= il; ii++) {
        var layer = comp.layer(ii);
        if (layer.name === BLINK_CONTROLLER_NAME) {
          return layer;
        }
      }
  
      // It doesn't exist, so create the null & add effect
      var blinkController = comp.layers.addNull();
      blinkController.name = BLINK_CONTROLLER_NAME;
  
      var effects = blinkController.effect;
      var blinkEffect = effects.addProperty("ADBE Checkbox Control");
      blinkEffect.name = BLINK_EFFECT_NAME;
  
      return blinkController;
    }
  
    var comp = app.project.activeItem;
  
    if (!(comp && comp instanceof CompItem)) {
      alert("Please select a composition!");
      return;
    }
  
    var layers = comp.selectedLayers;
  
    if (layers.length === 0) {
      alert("Please select some layers!");
      return;
    }
  
    app.beginUndoGroup("Blink Selected Layers");
  
    getOrCreateBlinkController(comp);
  
    for (var ii = 0, il = layers.length; ii < il; ii++) {
      var layer = layers[ii];
  
      var opacity = layer.opacity;
  
      // Store original expression
      if (!ORIGINAL_OPACITY_EXPRESSIONS.hasOwnProperty(layer.index)) {
        ORIGINAL_OPACITY_EXPRESSIONS[layer.index] = opacity.expression;
      }
  
      // Add blink expression
      opacity.expression = [
        ORIGINAL_OPACITY_EXPRESSIONS[layer.index],
        'var blink = thisComp.layer("' + BLINK_CONTROLLER_NAME + '").effect("' + BLINK_EFFECT_NAME + '")("Checkbox");',
        invertBlink ? "blink == 0 ? 100 : 0" : "blink == 1 ? 100 : 0"
      ].join("\n");
    }
  
    app.endUndoGroup();
  };
  
  function unblinkSelectedLayers() {
    var comp = app.project.activeItem;
  
    if (!(comp && comp instanceof CompItem)) {
      alert("Please select a composition!");
      return;
    }
  
    var layers = comp.selectedLayers;
  
    if (layers.length === 0) {
      alert("Please select some layers!");
      return;
    }
  
    app.beginUndoGroup("Unblink Selected Layers");
  
    for (var ii = 0, il = layers.length; ii < il; ii++) {
      var layer = layers[ii];
  
      // Restore original expression
      if (ORIGINAL_OPACITY_EXPRESSIONS.hasOwnProperty(layer.index)) {
        layer.opacity.expression = ORIGINAL_OPACITY_EXPRESSIONS[layer.index];
        delete ORIGINAL_OPACITY_EXPRESSIONS[layer.index];
      }
    }
  
    var blinkController = getOrCreateBlinkController(comp);
    blinkController.remove();
  
    app.endUndoGroup();
  }
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
          app.activate();
          app.endUndoGroup(); // End the undo group
        }
  
  //====================================
  // Reposition Anchor Point Function(s)
  //====================================
  
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
  
  //====================================
  // Apply Easing (Easement) Function(s)
  //====================================
    
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
  
  //=================
  // Null Function(s)
  //=================
    
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
  
  //==================================
  // Paste Multiple Keyframes Function
  //==================================
  
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
  
  //=============================   
  // Reverse Layer Order Function
  //=============================
  
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
          selectedLayers.sort(function (a, b) {
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
  
  // Add your event listener as you did in your script
  iconButtD.onClick = function() {
  reverseSelectedLayers();
  };
  
  //======================
  // Color Picker Function
  //======================
  
  function colorPicker(startValue){
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