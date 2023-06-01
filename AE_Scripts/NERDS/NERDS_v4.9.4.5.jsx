/*
NERDS_vW.X.Y.Z
Written with love for the students of VCT278 SPR 2023
No Copyright, Nic Hartmann™ 2023
Use Without Caution
*/

vers = "4.9.4.5"; // change version number here and it gets updated in the panel's name
(function createDockablePanel(thisObj) {
    function buildUI(thisObj) {
        var windowNERDS = (thisObj instanceof Panel) ? thisObj : new Window('palette', 'NERDS_v' + vers + '', undefined, {
            resizeable: true, independent: true
        });
        windowNERDS.orientation = "column";
        windowNERDS.alignChildren = ["center", "top"];
        windowNERDS.spacing = 0;
        windowNERDS.margins = 5;

//#region 'var strings'
    var strings = {
        helpTips: {
            loop: "Select a precomp, move timeline indicator to where you want the end of your loop, and press this button!",
            null0: "Select any number of layers (even if it's zero layers!), press this button, and it will make a null with all selected layers as children.",
            rename: "Opens a renaming dialog.",
            reverse: "Select at least two layers, press this button, all layers will reverse their layer order.",
            sort: "Sort all project items into folders by category.",
            explode: "Explodes all shapes within a shape layer into separate layers!",
            color: "Opens a color picker. Pick any color and then copy the hex code to use it elsewhere.",
            smartxy: "Separates the layer's X and Y positions, and attempts to retain their easing/velocity influence.",
            slider: "Drag me to set the easing amount, then press one of the three buttons below me (in/both/out ◁/◁▷/▷).",
            inButton: "Drag slider to desired amount, click me, I will set easing of IN values only.",
            bothButton: "Drag slider to desired amount, click me, I will set easing of IN+OUT values.",
            outButton: "Drag slider to desired amount, click me, I will set easing of OUT values only.",
            // housekeeping menu help ? button strings:
            HKsrt: "Sorts project items (yes this function lives in five different places lol).",
            HKrdc: "Reduces project to only files used by selected comp (the one you select in the project panel).",
            HKclct: "Collects all project files and prompts you to save them to a new project folder somewhere.",
            HKrctfn: "Renames active composition to file name, instead of leaving it 'Comp 1' or something silly.",
            HKcrq: "Clears render queue of all past/present/future renders. Handy when collecting files into fresh project.",
            HKpamdc: "Purges all memory and disk cache so you keeeeep on ram previewin'.",
            // utilities menu help ? button strings:
            Ucdkf: "Calculates the difference in values between two keyframes.",
            Ucd2l: "Calculate the distance (in position) between two layers.",
            Upi: "Select one or more layers, this will pre-compose each layer individually.",
            Urp: "Round position values so there are no subpixels.",
            Usac: "Selects all children of selected layer (handy for finding all children of a particular null).",
            Usaul: "Selects all unparented layers.",
            Usann: "Selects all non-null layers (kind of the opposite of the above one).",
            Ulan: "Locks only null layers in the comp.",
            Uun: "Unlocks all null layers in the comp.",
            Ulal: "Locks all layers in the comp.",
            Uual: "Unlocks all layers in the comp.",
            Uscc: "Scales the composition by changing the h/w, and automatically scales every layer inside the comp proportionally.",
            Useb: "Applies an adjustment layer with 'edge blur' effect.",
            Usp: "Applies an adjustment layer with a pixelation effect."
            },
        imgStrings: {
            loop:"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00S%00%00%00%19%08%06%00%00%00Mq%12%0A%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%05%C2%A8IDATh%C2%81%C3%ADY_LSW%18%3F%C3%B7%C3%9E%C3%9ER(%C2%A5%C2%B5%C2%A5%26%C2%94L%C2%A4%C2%A15%0Dn%C3%92uuKcV%1F%C3%84-qS%18%C2%A0fq%24%C3%8E%C3%88%C3%9E%C3%A6%C3%A2K%C3%8D4%C3%8C%C3%B84%C3%87%C3%8B%C3%B4E%C3%8A%C3%A6%C2%83%01%13%19%C3%81%07%C3%A6%13B%20%25%03Y%C2%B6%C3%B2'vd5-Ul%C2%ABbiQ%C3%9A%C3%9B%3F%C2%B7%3D%C3%8Ba%5Cw%C2%B9%C3%9CvM%C2%ADn%C2%A6%C3%BE%C2%92%C2%93%C2%9C%C3%B6%3B%C2%BF%C3%AF%C2%9C%C3%B3%C3%AB%C3%B9%C3%AE%C3%BD%C2%BES%0CB%08%0A%088%00%40%C2%90%C3%A7%C3%AD%C2%A6%00%004x%01%C2%8E_I8%1C%0Ep%C3%A5J%C2%B7.%10X%C2%94%C3%B2%C2%AD%1F%C3%87q%C2%BA%C2%A1%C2%A1%C3%81%C2%B1o%C3%9F%3E*%C3%93%C3%BE%0A%C3%BEdz%C2%BD%5E%C2%91%C3%99l%C3%AE%C2%B8%7F%C3%BF%C3%BE%C2%A7%C3%85%C3%85%C3%85%04%C2%86a%1BH4M%C3%83D%22%C3%A1%C2%B4Z%C2%AD%C2%9F%C2%B5%C2%B6%C2%B6%3A9%C3%A6g'%C2%B3%C3%A0%C3%85%3C%7F%C2%BE%C2%A3%C3%A9%C3%8C%C2%99%C2%AF%C2%BB%C3%AB%C3%AA%C3%AA%C3%A6%05%02%C3%81%0A%1F%09%C3%830%C3%82%C3%A5r%C2%A9%C2%95J%C3%A5%C3%88%C3%AD%C3%9B%C2%B7%C2%9B8%C3%A6%C3%97a%C3%8E%20%1C~%C2%AA%2B**%C2%8A%C2%91%24%C3%B9%18%C2%9DJ%C2%81%40%00%C2%85B!D%7D%C2%9A%C2%A6%C2%B1x%3C%C2%8E%C2%A5R)%20%16%C2%8B%17%C2%97%C2%96%C2%96%C3%B4%C2%99%7C1bZ%00%00%C3%9Frl%1B%C3%8F%C3%BB%3F%C3%A0%1B%C2%9F%0E%5C%3F%C2%B9rs%09%C2%A1L%7B%00%C3%A1p%18%C3%98%C3%ADv1%C2%86aP.%C2%97%C3%93%1A%C2%8D%06%C2%AF%C2%AA%C2%AA%C2%92%C2%89%C3%85%C3%A2%224_4%1A%C2%A5%7C%3E%C3%9Fc%C2%B7%C3%9B%0D%C2%97%C2%96%C2%96R%C2%8B%C2%8B%C2%8B%C2%A4%C3%83%C3%A1%C3%80kkkS%C2%BC%0E!%C2%84%16%08%C3%A1M%C2%B8%11%20MK7%3E%1D%C3%90%C3%B8%3D%C3%B0%C3%B9%C2%B9%C2%B9%C2%80%C3%8DG%0D%C2%87%10%0AQ%C2%8BD%22%C3%82%C2%A3G%C2%8F~%2C%12%C2%89%C2%9E455%C3%B9%C2%BB%C2%BB%C2%BB%C3%BD%13%13%13%C3%90%C3%A3%C3%B1%20%C3%A1%60(%14%C2%82~%C2%BF%1F%C3%8E%C3%8E%C3%8E%C3%82%C2%BE%C2%BE%C2%BE%C2%85%13'N%C3%9CR%C2%A9TQ%C2%B5Z%C3%BD%C2%A3%C3%87%C3%A3%C2%912~%20%C2%84%02%C3%86%7F%C2%A6E%C2%A6%133%C3%97M%C3%BD%17%5C%C3%B6%C3%9C%C3%AB%C3%84%C2%B4Z%C2%AD%C3%AF%C2%90%24%C3%B9%C3%A8%C3%88%C2%91%23%C3%BE%C2%81%C2%81%C2%81%C2%98%C3%97%C3%AB%C2%85%C3%A1p%C2%98%C2%B7!a%C3%87%C3%86%C3%86%C2%A2%C2%A7O%C2%9F%1EW(%14%C2%B1%C3%9D%C2%BBw%C2%B7%C3%B3%C2%89%C2%89%C3%A7%10%3A%C3%BF'%0C%C2%B1B%C3%B9%C3%94%C2%BF%C2%855%C2%83%C2%95%C2%95%15%C2%AC%C2%BD%C2%BD%C3%BD%3B%C2%BD%5EO677%C3%8B%C2%8CF%C2%A3P%26%C2%93%C2%B1%C2%A3%15%3Cx%C3%B0%C3%A0%C3%99g%C2%92%24A%5D%5D%5D%C3%91%C3%9E%C2%BD%7Bw%1C8p%60z%7C%7C%C3%9Cr%C3%AD%C3%9A5-%C3%97o%3E%C3%84%1CZ%C3%9B%08%C2%B7%C3%BF%C2%A2%C2%B9%C3%9C5%04%C2%B3%1D%C3%9C%C3%9B%C3%9Bk%5C%5E%5E~%C2%BF%C2%B1%C2%B11%C2%A6%C3%91hDeee%C3%AB%C3%ACH%C3%8C%C2%85%C2%85%C2%85u%C3%9F%C3%A18%0E%C2%B6o%C3%9F%5Eb2%C2%99J%C2%AB%C2%AB%C2%AB%C2%9Fvu%C3%BDp%C2%92%C3%AB7_b%C2%9E%C3%A7%C3%A9%C2%BFh.%1B%C3%B5%00%C2%80%C2%AEl%07%0F%0E%0E6%C2%ABT%C2%AA%C2%A0V%C2%ABUTVVf%3D%C2%89H%24%02%3A%C2%9DNS%5B%5B%7Bgr%C3%B2%C3%96%C2%9E%C2%9E%C2%9E%C2%9E-l%7B%3E%C3%83%1Cm%C2%A8%C3%AF%25s%C3%95k%C3%99%01%C3%82%1EV%3F-b%C2%B1%18677%C2%B7%C2%B3%C2%A6%C2%A6%26*%C2%95J%05(%C2%84%C2%B9%C3%80b%14P%C3%85ySN%C2%A0T*I%C2%BD%5E%1F%C3%91%C3%AB%C3%B5%C2%A5%16%C2%8B%C3%85%C3%8A%C2%B6%C3%A5CL%C3%B5%C3%9AF%C2%86X%C2%9Bz%19%5Cfn%26%C3%8D2d%C2%93rE%C2%A3%C3%91%C2%92h4*%2F--%C3%85%C3%85b1%C3%AF%18%C3%B8%C2%9B%0DT%C3%9C%C2%99%02%C2%80Nl%C2%B0%C2%95%C2%94%C2%94%00%C2%B9%5C%1E2%C2%9B%C3%8D%C2%97%7D%3E%C2%9F%C2%99%C3%BD%C2%9C%C3%8E%24%26%C3%A4%C2%B4t%C2%BFz%1B%00%C3%A0%C3%A6Z%C2%BF%C2%85%C3%95%C3%8F%06%C3%8F%C3%83%C3%A5%C2%AE5%C2%AB%C3%9CU(%14%C2%A6D%22Q*%1E%C2%8F'h%C2%9A%C3%9E%60%C2%A7(%0A%C2%B8%091%20v%7D%08%00%C2%B1%C2%B1%C2%A6I%24%12%60yy9i%C2%B3%C3%99%24%15%15%15%C3%AB%C3%94%C3%8Eg%05d%C3%89%C3%A1d%C3%A5%C2%83%C3%8B%C2%87!%C3%96i%C3%BF%C2%9Dm%2F..%C2%A6%C2%B6m%C3%9B%C3%B6%C3%90%C3%A1pl%09%C2%85B%C2%AB%2F%1B%C2%A6%1EGB%C2%A2K%C2%8F%C2%B7%C3%9F%C3%9B%05%20%C3%8E%7F%C3%8E%10gvvVl%C2%B7%C3%9B%1B%3B%3B%3B%C3%BB%C3%99%C3%85D%3E%C3%85%C3%8C%C2%B6%C2%AA%C3%897%C2%97%0F%19_f%C3%B5%C3%B5%1F%C3%BCr%C3%A3%C3%86%C2%8D%1D%5E%C2%AF%C3%B7Q%20%10%C3%98%5C%5E%5E%C2%BE%C3%BA%7D0%18%04%06%C2%83%01%C3%B0%5Dv%20%C2%A0%C2%B2%C3%92%C3%A5r%C3%B9%C2%A6%C2%A7%C2%A7%C2%95%3Bw%C2%BE%C3%AB9%7C%C3%B8%C3%B0Wl%C3%BB%C2%AB%C2%9Cg2y%25_%C3%8B%C2%98%15%1C%3A%C3%94%C3%92%2B%C2%95JK%C2%AF_%C2%BF%C3%BE%C3%90%C3%A5r%01%26%C3%9CU*UZ!%11%C3%AE%C3%9E%C2%BD%0Bl6%C3%9B%C2%94%C3%9B%C3%AD%C3%96%C2%B5%C2%B5%C2%B5%0D%C2%90%24%C3%B9%C2%84m%C3%8FE%C3%8CS%C2%AC%10z%C2%99%C3%9C%C2%BCA*%C2%95%C3%BE%C3%99%C3%9E%C3%BE%C3%8DO%23%23%23%5B%07%07%07%1D(%C2%B4%C2%93%C3%89dF%C3%B7~%C2%BF%1F%C2%8C%C2%8E%C2%8E%C3%BEz%C3%B5%C3%AA%C3%95J%C2%93%C3%89D%1F%3C%C3%98%C3%B2%3DwL.a%C3%8E%C3%BC%C3%AA%C2%B9%3C%C3%A3%C2%9E%C2%87%C2%9BW%1C%3B%C3%B6%C3%B9%C2%99%C2%A9)%C2%BB%C3%A1%C3%82%C2%85%0BR%C2%8A%C2%A2f(%C2%8AzS%C2%ADV%C3%A3%0A%C2%85%02%10%04%C2%B1%3A%15z%C2%9E%C2%A2%C3%8B%C2%90%7B%C3%B7%C3%AE%C2%A5%C2%86%C2%87%C2%87'%2F%5E%C2%BC%C2%98%C3%98%C2%B4i%C3%93%5B%C2%97.u~A%10D%C2%80%C2%BB%C2%9E%C2%82%C2%BE%C3%8F%C2%8CDb%C2%BA%C2%96%C2%96O~%C2%B6%C3%99l%C3%A4%C3%BE%C3%BD%C3%BB'%0D%06C%C2%B5V%C2%AB%C3%9D*%C2%93%C3%89%24(%C3%9C%C3%83%C3%A1%C3%B0S%C2%A7%C3%939%3F33%C3%B3%C3%87%C3%98%C3%98X%C2%95%C3%97%C3%AB5%C3%9A%C3%ADS'5%C2%9A%C2%9A%C3%8B%00%00%C3%A6(%C2%BF%C2%BE%C3%8F%04%C2%AB9c%C3%91%C2%9C%C3%91h%C3%AC%19%1E%1E%C3%BE%C3%92%C3%ADvo%C2%9E%C2%9F%C2%9F%7FL%C2%92%C2%A4%13%C3%9Do%221%13%C2%89%04%1E%C2%8F%C3%87e%C3%89d%C3%B2%C2%8DH%24R!%C2%97%C3%8B%03%1AMM%C3%9AJ%C2%AB%C3%A0%2F%C2%87%C3%AB%C3%AB%C3%AB%C2%9D%1D%1D%1D%22%C2%97%C3%8B%25%C2%93H%24%C2%A8%1C*%C3%A3%C2%8E%C2%A1i%C2%9A%C3%B0%C3%BB%C3%BD%C2%8A%C3%A3%C3%87%C2%8FOg%C3%B2U%C3%B0%7F%5B%C3%904-%C3%A9%C3%AF%C3%AF%C3%AF%3Aw%C3%AE%C3%9CG%C3%81%60%C2%90%C3%B7%C2%85%C2%8C.9%1A%1A%1A%7Cg%C3%8F%C2%9Em-%2F%2F%C2%9F%C3%A0%C2%98_%C3%BF%07%C3%84%01A%C3%93I%13%C2%86a%12~%1ALa%18f%C3%87q%C3%BC%11%C2%8F%C2%B1%60%C3%85dr%C3%92%7C%C3%A2%C3%AF%C2%B2%1B%00%C3%B0%17%40%C3%B9E%3BF%2B%C2%B5%C2%BA%00%00%00%00IEND%C2%AEB%60%C2%82",
            null0:"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00N%00%00%00%17%08%06%00%00%00%C2%A5%2By%22%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%01%C3%B7IDATX%C2%85%C3%AD%C2%99%C3%91q%C3%820%0C%C2%86E%C2%AF%0B%C2%B0BV%C3%88%0A%C3%8E%08%C2%AC%C3%90%15%C3%82%08%C3%AD%0AY!%23%C3%80%0AY!%2B0%C2%82%7B%C3%B4%C3%A4%3BUH%C2%8A%C2%AC%00%2F%C3%89w%C3%A7%23%C3%98%C3%B2O%C2%90%C2%85%C2%AD%C2%88C%C3%8E%19%18%17%C3%9E!%C3%909l%C3%AE%7C%03%40%C2%BB%60s%06%C2%80%C3%89%C2%A1%C3%B5%05%00%C2%A7%05%C2%9B%11%00%C2%86wh%7D%0A%7D%C3%89%C3%B1%C3%81%5EZ%C2%87%C3%9E%C3%91%C2%A9uth%5D%C3%9F%C2%A6u%C2%8F8l%C2%97%C3%BC%C2%9F%7B_%C3%82%C2%9E%C3%9E%C2%B0%C2%91Z%C2%9F%C3%ABI%C2%8AV%0Ah%C3%B5%C2%AF%C3%96%C3%BA%00%C2%80%06%C2%BD%C3%AF%5DyJb%3F%C3%85%C2%B2%C2%92%0D%C2%BE%C2%9Fp%C3%A5n%C3%84%C3%A6%C2%86%7D3%C3%93%C2%92%C2%A2%C2%93%C3%AA%C3%8F%C3%8A%3CIS%C3%BAN%C3%8F%C3%94%02%2B%3A%3C%11%C2%97%C2%B1O%C2%8B%C2%8E%24%C3%8C%2B%C3%B6%C3%96%C3%A7%C2%96%26%C2%AD%C2%BC4O%C3%93L%2F%C3%92%12%C3%B7%C2%B8BO%22%C2%A7DBc%C3%98K%C2%9Cp%C2%95%C3%A9%C2%BC%06%C2%B5k%C3%B7%C3%92%C3%84%5E)%C2%B5%C2%9A%C3%AB%C2%B5%C2%82%C3%BB%C2%91%C2%B4B%C3%91%3D%C2%84%C2%A3E%5C%04-%C3%A2%C3%96j%C3%BD%C3%ADq%C2%9C36%C2%89%C3%81%18%C2%B3%C3%AC%C2%A5%C2%BD%C3%A4j%C2%8CYD%C3%A7I%C2%84%C2%B5%24%C3%87%C3%BD%60%C2%93%18%C2%8D1%C3%8B%5Es%C2%9C6f%11%C2%9D'%11%C3%96%C2%92%1CW%C3%A8*%C2%A3kSX%C2%87%C2%837%C2%99%C3%9C%24V%C3%84e%3C%5D%0E%7B%C3%A4%3Db9%0E%C3%98%C2%A3%09Od7%C3%8D%C2%92%C3%A3Z%C3%B2%C3%90%C3%9F9%1F%C3%867%C2%81%C2%B5%C3%87QJ%C3%94%C2%8D%C2%95'PI%C2%80%C2%AF%C3%8A%C2%9E%C3%99%07%C2%92%C3%AA%C3%82H4%1B%C2%ACxD%C2%A9%C3%96%C2%AAq%5C%C3%82%C2%88%C2%ABq%5C%C2%B9%C2%81Np%5C%C2%8Fe%C2%A7(%C2%B4%C3%A4%C2%93V%3A%C2%AEZKr%5Co%C3%98%C2%9F%1C%C3%B55%C3%AF%C2%BCh%C3%B9J%7BLz%C2%AB%C2%96%C3%A48%2B%0A%C2%A2%C2%AB%C2%BA%26%1A8%C3%A9%C2%895%C3%83%C2%B0%16%3D%1C%C3%8E%C2%AC%C2%B2K%13%C3%A0%C2%81%1D%0E%C3%9DB%15%C2%98%C3%9BS%C3%AD%09%C2%AF%076%C2%A6%1D%3C%C3%9C%5E%C2%BA%17~%C2%9FZ%C3%A5%C3%B6iZ4%C3%A2%26%C2%B6%0F%C3%91%C3%AB%C2%99%C2%A5%23K%C3%891%C2%B7%C2%A7%C3%9A%C2%A5%C3%9E%C3%95%C2%B21-%C3%95%C3%A1%C3%B6%C3%96%C2%BD%C3%8C%C3%8C%C3%B6eZ%C3%92%7F%0E%3B%0E%C2%96%C3%B2%C2%B8%1D%C2%85%C3%9Dq%11%00%C3%A0%17%C2%A1%C2%90%C3%A6%3A%C3%B8%C2%B8%C2%B7%C2%94%00%00%00%00IEND%C2%AEB%60%C2%82",
            rename:"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00K%00%00%00%14%08%06%00%00%00%C3%85%C2%96%C3%80%C3%88%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%02%60IDATX%C2%85%C3%ADX%C3%8B%C2%8D%C3%9B0%10%7D%0E%7C%C2%B7%3A%C2%88%3B%C2%B0%C3%B7%C2%96%C2%9B%C3%A5%0E%C3%92%C2%81%C2%85M%01%C3%AB%06%02%C3%BB%C2%98%5B%C3%94A%C3%A4%0E%C2%B6%03%C3%8B%C2%B7%C2%BD%C2%AD%C3%9C%C3%80B%C3%99%0A%C3%94%C3%81%04%C3%84%C3%8E8%03%C2%86%1Fy-%0AX%20%0F%18%08%C2%94%C2%86C%C3%B2%C3%B1%C2%91%1CqBDH%C2%88%02%C3%80%1C%C3%80%5E5%C2%91%C2%B3U%00%C3%9A%C2%94%C2%8D%0F%C2%8DO%C2%89%C3%A3%2F%C2%9903%23%C2%AF%00%C2%9E%00%1C%C2%99%C2%ACl%C3%BC%C3%A1%C3%9E%C2%86%C3%94%C3%8A%02%2B%C3%AB%1E%C3%80w%00%2F%00%C2%BE%01%C2%A8S7%C2%9A%02%C2%86%C2%AC%C2%82g%C3%9F%C2%87%5C%C2%BD%C2%8F%C3%B9%0ArG%C3%99(%C3%AAd%7D3%C3%8A%2B%014%00%C2%B6%C2%8E8%C2%B5%C2%AAo%C2%A3%C3%A4%C3%BA%15%C2%9BF%C3%9F%C2%B8%C3%B2%C2%AD%C3%AC1%C2%A6%C3%AD%C2%94g~%15p%C2%AAUgc%C2%BE%C3%97%22%C2%8B%C3%84%C3%B3%7D%C2%93I%C2%9Bq%C2%9F%1A6A%C3%9F%C2%B8%C2%99U%0E!%C2%9B%C2%AA%C2%8F'%C3%87%C3%B2%C3%98q%20M%C2%98%C3%8Fw%2C%14%7C%60%C3%8C%C2%B8%C2%BD%C3%8F%C2%AC%C2%AC%C3%82%22%0CJaZ%5D%3E%15%C3%BDv(T%C2%A3%05%11%C3%AD%C3%A9%0D%C3%A6%09%C3%8B*%C3%BA%C2%8B%C2%98o%C3%88r%C2%AEW%5B%3E%C3%B2%C2%BE%23%C2%A2%C3%92Q_%20%C3%A5%C2%82%C2%88Z%15k%C2%AF%C3%8A%0D%11-%C2%AD%C2%B8v%C3%AC%C2%92%C3%8B%C2%82%3C%C3%90%C2%B7%7F%2Cv%1A%C2%86%C2%98%1E%12F%25%0FV%C2%8Aa%C3%83(%C3%BB%17%2B%C3%A9%C2%AC%14%C3%B6%C2%95%C3%BD%16%00%C2%9E%1D%C3%B5%246%C3%B1s%C3%A6o%22%C2%8C%18Y%C3%87%C2%91%C3%88%12%C3%AC%22%C2%84A%11%259%C2%9AYz%C3%AB%C2%80%C3%AF%C3%81zg%C2%97%7BC%C2%93%C2%B5c%C3%B6%C2%B5%09%C3%AC%C3%8E%C2%B8%7Co%C3%89A%C3%B4%C2%A0b%C2%84u%C2%8E%C2%BD%C3%89%C2%B7%7Fv%1CKb%1F%02%C2%B1W%C2%9E1%5D%C3%B6%C3%AA%3EI%C3%A9z%C2%84%C3%8D%5C%06u%C3%A6%C3%B2%C3%8E%C2%93.%C2%BC%07%C2%ADRa%7B%C3%8B_%C2%83%3E%0D%0F%7Cz%2CT%C3%B9%C3%91C%C3%94!%C3%81~%C3%96%C3%B2%C3%B2%C2%AA%C2%B8%0F%C2%BE-%60%C3%B5%0E%15W%3C%C2%8E%10QgONvQ%C2%B1%26K%3A%5Bs%C2%876%0E%C2%B9k%C3%9F%14jkx%C3%82%C3%AA%C2%81%C3%B3%C2%B9%3E%C2%8A%C3%AAbcr-C-%C3%BF%C2%9F%03.%C2%87k%10j%C3%93%C3%A4x%13%C2%87%25%C3%87%C3%94%C3%93%C3%80DI%C3%BD%C3%A8%C3%98%C2%B7%C3%A6%C2%91%01%0D%C2%A1%C2%BA%C3%89%C2%8D%C2%87%C3%86%C2%B5%C3%88%22cj%7Cd%C3%99%C2%9D5%C2%84%C3%A9%C3%99%C3%9B%C2%B0%C2%85%C3%AA~4%C2%84%C3%B6I%C2%83%C3%B5%C2%94%C3%97%C3%B2%C3%89%C2%B3%C2%A6%C3%AF%C2%AC%C3%9F%03%C3%B1%1D%0A%1D%C3%87%C3%B3%C3%AD%C2%8D%C2%BA%C2%AD%14%C2%BE%C2%9D%C2%A3%1D%1F%C2%BA1%C2%AEh%10%C2%B8u%C3%B8P%18%C3%A3%C3%B2%C3%AF%C2%87J3%C2%BE%C3%B0%05%C3%A0%C3%BF%C3%8B%3F%07%24%050K%C3%99%C2%90cnKM%C3%99%C3%98%18%C3%89%C3%AEp%00%C3%B0%07%C2%91%C2%B1%C2%A0%3D%C3%88%18%C3%B4(%00%00%00%00IEND%C2%AEB%60%C2%82",
            reverse:"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00R%00%00%00%11%08%06%00%00%00N%C3%A0%C3%BBY%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%02%C3%9DIDATX%C2%85%C3%ADX%C2%81%C2%8D%C3%9B0%0Cd%C2%8B_%40%2B%C3%B8GpGHGHG%C3%B0%C2%8F%C2%90%C2%8E%C2%90%C2%8C%C3%A0%C2%8C%C2%90%1F!%19!%1E%C3%81%1E!%19A%0F%3D%C2%8E%C3%AD%C2%81%20e%C3%87%08%C2%8A%C2%A2(%01%C3%A1%3F%12u%C2%A4%C2%A8%C2%A3(%C3%ABK%C3%8EY%20%C2%8D%C3%94%C3%A5%C2%8Ef%C2%A56o%22%C3%ACh%C2%BE%1DOh5%C2%99*c%3A%C3%97%C2%B3%C2%B5%04%C2%9B%C3%BD%C2%9C%C3%B3%5B%C3%B1%26)%C2%81%C3%8C9os%C3%8E%C2%B7%5C%C2%97%2B%C3%B4%C2%84%C3%9A~fN%C2%87V%C3%A4%C2%9Csn%C3%8C%7C%C2%A1%C3%B1%11%C2%BF%C3%8F3%C2%987%C3%98%C3%B5%C2%B0%C2%B6%C3%80%19%1D_K%C3%9B%C3%8D%C2%AC%C2%B3%C2%8C%C2%9Dr%C3%8E-%C3%B0%C3%95%C2%AF%C3%96%C3%81j1V%C2%A4Yj%C2%A4L%C3%A8i%C2%B1%C2%AA%3F%06%C3%BA%C2%99%16%C3%93Q%C3%9F%C3%9Eqh%24%C3%BD%C3%B2%3BUpu%C2%A1%23p%C3%AD%C3%82%C2%AE%C3%90%C2%B9%C3%A1%7F%2F%00%C3%A7%C3%8A%3A%C2%AF%18%C3%AF)%C2%909%20AO%C3%A3%C3%8D%0B%C3%91%C3%B4%00%0A%C2%B7%01%C2%85%3BJ%C2%A9%C2%BD%C2%88%C3%ACD%C3%A4%5DD.%01%C3%AD%C2%8F%222%00O%C3%BF%C3%AE%C2%80%C3%B5%C2%B3%C2%92.%C2%A5%C3%BF%1Blx~4%C3%8EqR%C2%B0%7B%C3%8CU%7F%1A%C3%B4%C2%BD%C3%81%C2%BE%C3%8Aw%C3%B8%C3%A1%1DI%C2%A5o%03%C3%9F%15k%C2%83%C3%96%C3%83%C3%AF%C3%81%C2%99'v%C2%B7%C2%A2fYc%7F%C3%8F%C2%B5%C3%96%C2%A4%C3%AC%C2%B9%C3%82%C3%88Zcv%2B%23%3B%C3%83%C3%A0%C3%8E%C3%A8E%C2%A9i%1B3%C2%B0%C3%8F%C2%BF%C3%BB%C3%B6%06%2By%C2%8C%C3%BC%1A%C2%B0%C3%A2%C3%992%607%C2%B9%C3%B8%3CC%C2%94u%C2%8Aw%00%C2%8B.%C2%86%C2%99%C3%97%C2%956'%C2%B0%C2%93%C2%B1%C3%9Cb%C3%B5%C3%A2%C3%B4m%1D%C3%A5Z%1A%C2%96%C2%94%C2%B7%7D%C3%AF%C2%8E%C3%AE%C2%80%C2%85*vG%C3%BA%C2%9Eh%C2%9A%C2%B14T%C3%99%C2%AD%C3%8D%236K%C3%A5%07R%C2%B8%0B%16o%C3%BDN%08%C2%9C%0D%C3%B8D%1B%24%C3%A4Sb_l%20%3B%C2%9CM%C3%96%C3%B0%05%C2%8E*%C2%A3%C2%8EtV%15F%C3%98E%25%C3%A8%C2%AC%C3%81V'%7B'%C2%90zn%C3%9D%C2%B11w%C2%9A%7Bpt%C3%B5%2Cn%C3%8C%C2%86%C3%A9%19oE%C3%8F%7C%3E%07%5B%C3%A8%C3%9B%C3%9A1%C2%90%2Fw%C2%8F%C2%91KD%C2%99u%0At70%C2%AC%C3%81%C2%8CX%C3%B17K%0A6%C3%9E%15%C2%BE%C2%90%C2%ABx%C2%A9%C3%9D!0e%C3%A7_%C2%A9%3FJ%3F%0D%C3%9C%1B%C3%BAz%C3%83%C2%9Ega%17F%C2%8C%C3%80%3E8%C2%AC%C3%9C%C3%91M%C3%A1%C3%95%C3%98%C3%B6R%C2%BB%C2%83%C2%8D%23%C2%B0F%C3%8A%02%7B%3B%C3%91j%C3%BE%C2%89%C3%AD1%C3%92%3B%C3%9F%C2%BC4%10%3A%C2%8Cm%60%C2%BC%5DL%C2%81%C3%BE%C2%B3%C2%B0%C2%A3%C3%ABL%C3%84(%C2%8B%C3%9DT%C2%AE%5CwG%C2%BFe%C3%AC%3FU%C2%B5%C3%BFy%C3%B1%C2%8A%C2%8Dw!%1F%C3%8C%C2%8E%C2%A7%60%C3%B7tl%C2%A0%C2%82%C3%90%12%C3%86%268%C2%B4-%C2%9B%22%C3%BCd0%C3%97Jt!%C2%BF%04%05.9E5%C2%AC%C3%9A%7C%C2%9EX%C2%99%60D%C2%8D%C2%9F%1C%C2%83lx%C2%A0%C2%AF%C2%80%C2%96%02%C2%BBq%C3%B0-v%C2%AA%C3%9C%C3%BB%C2%B8Z%C2%AF%C2%95%C2%B3MK%C2%92%C3%81Tl%C3%BE%C2%BA%C3%B1%C2%AE%5C%C3%83%C2%AF8%C2%AC%7C%C2%B4%C2%98%C3%BB%C3%86%C3%A6%2F%C2%89%06%C3%9F%C3%875%7C%C3%86~%C3%A4%C3%91%C3%A2%C2%A1%C2%87%C2%85%07%1F-%C3%B4Qfn%C2%AD%05S%C3%96%3E%C2%A3%C3%95%C2%9E%C2%A3%C2%BCg%C2%A7%C2%B9%C3%A7%C2%AB%C2%A5%C3%98*%5C%7D%C2%97%3Fu%3D%C3%BE%C2%8C%26%0B%C3%A2%C3%B2%C3%A9%C2%8Bw%C3%BD%C3%B9%2F%C2%8F%C2%8A%C2%88%7C%00%1BME%C3%BF%06%1AI%C2%AF%00%00%00%00IEND%C2%AEB%60%C2%82",
            sort:"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00O%00%00%00%16%08%06%00%00%00%C2%81%C2%B5%C3%81%C2%B9%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%043IDATX%C2%85%C3%A5%C2%99oh%1Be%1C%C3%87%3FMz%C3%B9%C3%97dM%16%C3%BF4%C2%B1%7F%C2%A4%05Y%C2%A1%C3%8E%C2%89%7D1(%C3%98!%1D%7B18%C2%AA%C2%A3%C2%BE%1C%C3%BA%C2%A6%1D%C3%AC%C2%85%C3%A0%C2%9B%0E%7C%C3%91%C2%A2%C2%B8%C3%997%C3%9A%17%0E%C2%BB%3A%C2%A5%C2%91%C3%A2%10%C3%87%C2%9C%C2%A9%C3%A8F6%C3%A9%26%C2%9527qN%C2%AB%2F%C3%9AT%C3%9D%2Cu4%C3%8B%C2%BA%C3%8D%C2%BB5K%1A%C2%B9%C3%B0%5C%C2%B9%C2%85%C2%A4I%C3%96%C2%B3%C2%83%C3%A6%0B%C3%87%5D%C3%AE%C2%9E%C3%A7w%C2%BF%C3%BB%3C%C2%BF%C3%A7%C3%B7%7B%C3%AER%C2%91N%C2%A7)g%C2%85%C3%83a%2F%C3%90%C2%A9m%C2%B2%2Cw%C2%86%C3%83%C3%A1%1D%C3%80%C2%93%C2%B2%2C%C2%8F%14%C3%82RY%C2%8E%C3%9C%C3%82%C3%A1%C3%B06%1D%C2%98%C2%AA%C2%AA%C3%8FD.D%C2%B0%3B%C3%AC%C3%9A%C2%A5NEQ%C3%9E%3A%C3%BF%C3%83%C3%B9%16EQ%C3%9Et%C2%B9%5C%1F%03%C2%83%C2%B2%2C%C3%9F%C3%8Ce%C2%A7l%22OD%C3%94%2B%C2%80%C2%B6o8z%C3%A2(%0E%C2%8B%C2%83%3D%C2%BB%C3%B60ye%C2%92%C3%ADOo%C3%87%C3%A9t%C2%9EVUu%C2%97%0E%C2%B3.XG%C3%80%1D%C3%80%C3%A7%C3%B3%C2%85%04%C3%84%C2%9F%C2%8C6%C3%8B%09%C3%9E%C3%A0%C3%A8%C3%89%C3%91%C3%97%C2%A6%7F%C2%9D%C2%A6%C3%BF%C2%8D~%C3%A6%C3%A6%C3%A6%08%06%C2%83%C3%8C%5E%C3%BB%C2%87%C3%98%C3%BCUZ%5B%5B%C2%B5fw%00%C2%B7%C3%9Egjz%C2%8A%C2%B1%C3%93ctuv%C3%A1s%C3%B94%C2%88%C3%A7%C2%80%11%7DJ%5B%1E%C3%A6%03%C2%AD%C2%B3N%C3%AEn%C3%9F%C2%8D%C3%BC%C2%B2%C2%9C%C2%B9%C2%AB%06NUUF%3E%3D%C3%8EWQ%07%C2%A1%C3%8F%C2%BED%07w%22%14%22%3C4%C2%84%C3%97%C3%A5%C2%A5w%7F%2F%C2%8DO4rj%C3%B2%14%C2%87%C3%9E%3D%C3%94.%C2%A27%C2%A3%C2%B2%C2%80%C3%97%C3%B6A%C3%94%3B%C3%B0w%C3%8B%C2%8E%C3%A42%C2%89%C2%B3%C2%91%C2%B3%C3%84%C3%A3%C3%B1%0C%C2%B8%C3%90%C2%B1%C3%A3%24%C2%9F%C3%AF'%C3%B9l7u%5B2%C2%91%C2%979%7F%7Df%C2%86%C2%BD%C2%B1%18%3F%0E%0Dq%C3%AC%C3%B0%C3%A1%C3%8C%C3%B9%1A%7F%0D%C3%BB%5E%C3%9D%C2%A7%1D%C2%AE%14%12%1D%5E%07%C2%90.b%C3%AB%C3%8D%C3%B2%C2%ABP%C2%9F%19C%5B%C3%AD%1E%17%C2%85%C2%8D%C2%8BE%C3%B4%C3%AD%10%C3%BD%1A%C2%8B%C3%B4-%C2%97%7F%C2%BA%C2%B4%07%C3%AE%C2%BBY%C3%95%60%5BR%C2%97%C2%98%C2%9D%C2%9D%C2%A5%C3%AF%C3%AD%3E%C3%BE%C2%BC%C3%BE%3B%C2%89%C2%89%C3%BDHS%1F%C3%91%C2%B6%C3%A5%C3%91L%C3%93%C3%B1%C2%B11%5E%C2%B4Zi%C2%B5%C3%99xA%C2%92%C2%90%C3%AC%C3%B6%0C%C3%90%C2%89%C3%AF%26%C2%B0%C3%9B%C3%ADW%C2%8DUX%C2%AF%C2%B6g%C2%80%1E%C3%A0H%C2%81A%7C%07%C2%88%03%C3%83%C3%A2wS%16%C2%A0li%0F%1E%01v%C2%8A%C3%B3%C2%97%C3%84%C3%BE%C2%B9%02%C3%B7A%C3%B4k%12%C3%BB%0A%C2%A0%C3%BB%01%C3%BCca%C2%B4bp%C2%B0%C2%AA%C2%B9%C3%AD%C3%9F%C3%B4%26%C3%AE%C2%A5%C2%B6%C3%B2%7Dc%1D%C3%98%40%C3%B2J%C3%8C%C3%AF%C2%9D%C3%87%C3%BD%C2%85%C2%9B%16%C3%8B%C3%8F(J%0D%C3%AF%7F%C3%B8%09%C3%8B%C2%8B%C2%B7%C3%B8%C2%B6%C3%A26%C3%AF-%C3%9D%22%C3%A5Hc%C3%B9%C3%A3%0E%C2%B5%C2%BF%5D%C3%86%1F%C3%B0%C3%A3w%C3%9C%C3%B8%C3%9Ax3%C2%AD%60%C2%94R14%C3%88%07%C2%84%C2%93%C2%97r%C2%8C%C3%B4%C3%A7%06%40%C3%9A5%C2%9F8%1E%16%C3%97%229lF%05%24r%00%C3%92%C3%A1%C3%B5%C3%A4%C3%A9%C2%9BK%3DY%C3%B0%C3%86%01-WQ%C3%A9%C3%9B%C2%8A%C2%B2%C3%B9%25b%C2%8B1R%C2%A9%14w%C2%A5%C2%BBxT%2B%C3%81%40%3D%C3%97%16b%2C%C2%B9jAr%C2%92%5E%C2%B8B%C3%8A%C2%93%C3%88%C3%B4%C2%AFJT%C2%91J%C2%A6%08%3C%16%C3%A0%11%C3%A7%C2%8D_%C2%AC%C2%95%C2%8E%C2%980%3D%C2%B2%C3%9A%3A%C2%AFI%3CX%3E%C3%A5%C2%9A%22g%0C%C2%8Ew%1B%C3%A0%C2%ADEZ2%C3%AA%12%C3%91%C3%97%2B%06.%1F%C3%BCU%C3%A5%C2%AC%C2%AE%C3%87%C3%AB%5D%22%C3%A8%C3%95%0Bj%C2%B5%C3%98%2B%C3%B8%3CN%40p%C3%99%C2%9C%C3%8Bm%05p%C2%B4%18N%C3%B4%C2%AFV0fJ%C3%88)k%C2%911%C2%A7%C3%A5%C2%9A%C2%96%C3%B7M%C3%83%C2%B5H%C3%B2%C3%94%C2%9B%C3%A7u%C3%B3%C3%81%C3%B1R%C3%9F0%C3%B4%C2%9C%C2%B2%1E%C3%9AY%20%C3%B2K%C2%92%C3%95V%C2%8D%C3%85Vm%C2%969m%C2%BD%C2%97%C2%A9%C2%B6E%C2%85%C3%BC%3A%C2%ABG%C2%A4%00%C3%93d%C3%B3%3Ee%C2%A6%C2%B9q%1D%5ET%C3%A4%C2%93%7C%C3%9B%C3%83%C3%90%11%C3%83R%C3%85%14I%C2%9E%06%C3%93%C3%A1U%C2%8A%C2%9C%C2%B3%C3%9Ar%C2%A3%14u%18%C2%8AD%C2%B1%C3%85B%C3%8Fi%C3%99%C3%B94RD%C3%91*Zf%C3%A7%3B%04%3C%C2%B3%C3%80!%C2%AAbW%C2%89%7D4x%03%02v%C2%B7%C2%89%C2%BE%C2%AC%C2%A8%C3%92%C3%B58%15V%C2%BBY%C3%A6%C3%8E%C3%A9%07%C2%A5%C2%BE%C2%9E%1D%10QRJ2%C3%97%17%C3%A0%C2%AB).%C3%9A%14j%C3%B7%40%C2%92%C3%9C%26F%C2%9D%C2%98%C2%B2%C2%94X0%C2%86E%C2%84%C3%A8*%C2%A6_%C3%94%C3%B0v%C2%91%0F%C2%A2%C3%91%C3%8E%C2%B0%18%20%C3%B2%0C%C3%90%40%C2%8EeKA%3F%C3%BE%C2%8F%7CG9%7C%C2%92%C3%92%C3%9E0%C3%BC%C3%9B%5Eo7m%C3%9A6%1F%5C)%C2%A2%1B%C3%BE%C2%AB%C2%8A%C3%A4%C2%AEu%C2%9B%05n9%C2%A9%5E6%C3%BE%C3%9E%C3%B8%C3%B065z%C3%8D%C2%B2%C2%B5%C2%9CX%C2%BC%C3%AFK%C3%B2%C2%86%C3%BF%0F%C3%83j%C2%AF%5EH*%C3%B3~3l%C3%9D%C2%BB%C3%BD%C3%977%2B%C3%80%C2%80%C3%BF%00%C2%88%C2%8Bu%C3%AF%C3%82%C3%88%C3%B3%C2%9A%00%00%00%00IEND%C2%AEB%60%C2%82",
            explode:"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00Q%00%00%00%0C%08%06%00%00%00%1A%C2%9FQ%1F%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%03%3FIDATH%C2%89%C3%9DWAh%13A%14%C3%BD%5DbC%C3%88B%C3%93.%25MhLN%1EDHzI%0F%C2%82i%C3%A9%C2%AD%17%3Dx%C2%95%C3%86C%2F%05%C3%81%C2%83w%13%C3%B0%22%C2%B6%C3%98%5E%3Dh*x%12%C2%8B%C2%97%1CD%C3%90m%C3%A3%C3%85zp%C2%8B%17%0B%3Dl%0A%C2%B9%C2%88%C2%AC%C2%95f%C2%91%C3%AC%C2%92%C2%8CL%C3%B8%03%C3%A38%C2%B3%19%C3%91%5E%7C0%C3%AC%C3%AC%C3%AC%C3%BF%7F%C3%9E%C3%BF%C3%B3%C3%BF%C2%9Fd%C2%8C%10%02%C3%BF%23%C2%92%C3%89d%C3%B5B%22i%7D%C3%BC%C3%BAe%C3%A3%C2%AC%C3%9D3%00%C2%A0%04%00Dc%C2%94P%C3%A76'K%C3%A7%0C)%00pp%C2%9D%3E%0B%C2%B8%C3%96%18a%C2%9B%C3%89%02%3E%1D%C3%A1%7BIN%5D%C2%8D%C2%AB%C3%B9%C2%99%C3%83%C3%B7%0B%C3%A7%C2%9F%3C%26%C3%A6%C3%BA%C3%B5%C2%99%C3%9Cs%09o%C3%99h%08%C2%BE%C2%8C%C3%A2%C3%8DtR%40%08%C2%B1%09!U%7CFa%C2%93f-~_%20%C2%84%C2%B88%C2%AF%C3%A2zC%C3%90%C2%AD%C2%A1%1C%C2%B3%1F%05*S%40%C2%9D%C2%9A%60%C3%8BF%C3%BB%C3%92%C2%91%C3%8Df%C3%AFd%C2%B3%C3%99O%C3%A9t%C3%9A%C3%8Dd2o%2C%C3%8BZ%C2%BB%C2%98%C3%8F%04%5E%7B%C2%97to%C3%8D%C2%91%C3%95T%C3%BAT%C3%81%5B%06%C3%A6%C2%8B.oj%C2%AB%14%C3%83%C3%88%C3%97%00%20%C3%8F%C2%9DD%5B8%19%26%C3%83%C3%90%C3%A0%C3%A47%01%C2%A0%0A%00%15Ej%C2%94P%C2%86G%1Du%C2%98%C2%8D%0A%C2%97%C2%8DU%C2%81%C2%8B%12%C2%B9%5C%C3%AE%C2%9Di%C2%9A%C3%A5%C3%B9%C3%B9%C3%B9s%C2%A6i%C2%82%C3%A7y%C3%B9%C2%A3%C2%A3%C2%A3%C3%85b%C2%B1%08O_%7C%C2%80%C3%BE%C3%A17x%16%C2%9Cn%3C%C2%92%C3%B3%C2%A6%C3%98%05%00%17%00V8_%00%C3%97d%C2%BC%C2%B7%C3%B1%1B%C2%83M%2B%C3%87%C3%80%17-%C3%92%C2%889%C3%A1%7DB%12%C3%80-.%C3%A8%138x%C3%94%042%3C%C2%B4%C2%B8LOOoNNN%5E%5EZZ%1A%06%C2%90bjj%0A%C3%8A%C3%A52%C3%84%C3%A3q%C2%B8%C3%BF%60%C3%A3%C3%87%C3%96%C3%A7%C3%81%15%C3%9F%C3%B7%C3%B9%C3%83%17m%C3%9Bxhu%C2%8Ek%C2%81%C2%9B%C2%8B%C2%BC%C2%A5%C2%88)%C3%96%C3%A9fw%C2%85%C2%B5%14%C3%B6%15%077%16O%C2%95a%5B%C3%A8%C2%95g%02%C3%830n%C3%90%C2%80%C2%A90%18%0C%C2%82v%C2%BB%C3%9D%C3%BA%C3%87%7B%C2%AF%08%C3%AF4%0E%C3%97%0C%C2%85%C2%B0%0C%7Cy%C3%93%2C%3AQ%C3%889%1A%C2%B6HD%C3%B9k!%1E%C2%8F%1B%C3%A3%C3%A3%C3%A3J%C3%91%C3%99%C3%99%C3%99%C2%89d2%C2%B9%C3%B07%7Bh%C2%80f%C2%B2%C2%AB%0A%22%C3%AD%15c%C3%82%60%C3%81)%60%40%C2%8B%0A%C3%9D%C2%87xB%C2%BA%C3%B8%0E%007%C2%91%C2%906%C3%820TU%C3%91%10%C2%BD%5E%2F%C2%888h%1E%C3%94%1F%C3%9D%60%2F%0A1%C2%A1~%C2%9E%C2%A8%C2%88%C2%94%24N%C2%B1%C2%8D%5EF%04%C2%90%C2%81o%C3%902%C3%94%C2%B95Wr%C2%89Eq%C2%A1%C2%B2%0D%C3%830%5C%C3%8F%C3%B3.%C3%91%3E(%22%08%02%C3%A8t%3A%C2%81%C3%AF%C3%BB%C2%A3%C2%AAbX%C2%8E%1A%C3%BE%C3%B0~%C3%B1%073%C3%A4%C2%A2%0A%C2%A2%C3%AC%C2%B2%C2%B01%C2%90%C3%A2%C2%86%07%C3%98%03%C3%9F%0A%C3%BA%C2%85%C2%88%20%C3%96%14%C3%AB%3A%5C%C3%A8%C3%9C%C2%8D%C3%85bk%7B%7B%7B%C2%AF%C2%96%C2%97%C2%97%13%7CY%C3%93%00%C2%B6Z%C2%AD0%C2%91H%C3%94%C2%A5%C3%96~E%C3%BE%0F%2FU%C3%91%C3%B7%0A%2Bg%C2%9D%1E%06%C2%9C%C3%9C%01%C2%B7F%C3%A7%2CS%C3%A6%C2%B04%01%C2%9F%C2%ACo%C2%B6%05%3B%C3%A2%3B%0F%C2%97%C2%B3%C2%A1%02%C3%95%3F%C2%A1%C2%97F%C2%BF%C3%9F_%C3%9D%C3%99%C3%99%C3%A9%C3%AE%C3%AF%C3%AF%C3%83%C3%B1%C3%B118%C2%8E%03%C3%8Df%C2%B3%1B%C2%86%C3%A1%C2%BDN%C2%A7%C2%B3.%C3%A8%1F%C2%8C%C2%B0%0B%C3%9C%C2%AF%0A%19o%19%C2%86%5C%C3%98%C3%9F%3E%C2%9D%C3%8C%602%05%C2%AE%C3%A7%C3%91t%C3%A6%C2%B3%C2%8D%C2%AE%C2%B3%0Cd%25J%C2%B3%C2%97%C3%AF94%C3%A0Q%C3%BD%C2%8F%C3%99P%C3%A17%7Dz%C2%81X%C2%96U%C3%AD%C3%B5z%C2%AF%C2%BB%C3%9Dn%C3%93%C3%B7%7DY%2F%C3%A4y%C2%8F%C3%B2Q%C3%86%5B%06%1B%00%C3%AC%C2%9F%02%26%1BKo%C2%A7)X%00%00%00%00IEND%C2%AEB%60%C2%82",
            color:"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00O%00%00%00%15%08%06%00%00%00%07!%C2%B3%17%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%01%C3%A1IDATX%C2%85%C3%AD%C2%98%C3%ADm%C3%820%10%C2%86_W%5D%C2%80%C2%8E%C2%80%C2%94%09%C3%92%0D%08%23t%C2%85%C3%8A%C2%99%00F%C2%80%09%1C%C2%B1BG%C3%80%19!%13D%C3%AA%080%C2%82%2B%1B%C2%BB%C2%98%C3%86%06%7F%04%C2%A9%3F%C3%BCH%C2%88%C2%90%C3%9C%C3%B9%C2%927w%3E%1B%22%C2%84%40!%C2%8D%C2%97%C2%A2%5B%3AE%C2%BC%0C%5E%C2%9D%C2%AE%2B%C2%B2%01%C2%B0%0B%18v%C2%8B%5E%C3%ACo%C3%8E%C3%90%20_%C2%8EN%C2%AC%C3%AD%13'L%C3%BC%C3%B8%1Bnm%0Clj%C3%AB%C2%8D%C3%93Zc%10%C2%8C%C2%B1s%C3%94V%C2%A0%C3%9A%C3%BB.N3%C3%AF%22%5C%138x%C2%A3%C3%AD%2F%C3%90%60%C3%9F%C2%A5%C2%B2%C2%A5d%C2%89%C2%ABpA1Y%C2%84%C2%AD%C2%8C%23%C3%AD%19.q%12h%08%C3%86%C2%8D%C3%8Fm%C3%9A0V%24%C2%BE%C2%83%C3%B4%C2%82%C2%A8o%1A%C3%AD%C2%BBF'%C3%B8%09N%3Fg%C3%A61%C2%B7%C3%AD%C3%838-%04%C3%B7d%C3%9E%19%C3%80%C2%A0_%C3%88%C2%B7%C3%BE%5D%C3%9B%06%02%15q%0DZ%C3%A6%3C%60%10%C2%A8%C3%8CK%3A%C2%A8%C2%A9(%C2%90g%C2%8Bgn%C3%A4%C2%A0%C2%B2%C3%ACy1%C3%AC%C2%87O%C2%8D%23%C3%BD%C2%BEb%1C%C3%9C%0Dc%C2%8AI%C3%ADX%06%C3%95%1C%C3%A4w'8%C2%A83%C3%BBs%19dI2%10n%1D%C3%87%0C%C2%B9%20%18%1B%C2%81J%C2%96%C3%B5%C3%B2o%C3%89%C3%8E!%C3%9E%C2%80%C3%9E%C3%9D%C3%B9%1E%C3%92%25%C3%BAE%C3%92z%3As%00R%C2%AC%C2%A3j%C3%86%C3%80G%60%17W%C2%84%C2%8A%C2%97%C2%8A%C2%BC%C2%91wP%C3%B2%C2%A9o%2C%C3%AA%C2%A1N%20G%C3%BB%C2%84g%C3%A9%C2%B2c%20g)%1ECR%1C%05%C3%81xT%C2%AB%C2%80%08B%C3%85%5B%60E%C3%BC%C3%8B%C2%83%5Ep%C3%8F%C2%95%1AT%C3%B9%C3%95%11%C3%8B%C2%8Bk%C3%8C0%1FUf%0C%C3%89q%0C%C3%86%2Fx%C2%8A%0A%15%C3%8F%C2%A4%C2%B6%C2%8F%7B%C2%93%C3%8C%3D%C2%BF9%C2%99%2B%C2%8E%C3%9D%7D%C3%AF%C3%B2%C3%AC%C2%B2%C3%BD%C3%AF%C2%98%C3%95%C2%80%3D%C3%8F%C3%95%C2%BA%C2%84%7F%C3%B1%C2%89%C2%99%2B%1E%C3%97%1F%C3%83V%C2%A7%7Fj%C3%A9%C2%840g%C2%8CA%2F%C2%8C%0DM%C3%8C%C3%98%C2%B9%C3%AB%3C~%C2%B3%C2%B7%C3%AD%C3%94%C2%B1o%C3%BE%C2%9B%C2%85%16%C3%B3%C3%86%10%C2%A8%C2%BE%C3%A5%C3%BEU%C3%AFa%C2%A3%C3%86-%C3%BF%C3%A7eP%C2%B6g%19%14%C3%B12(%C3%A2eP%C3%84K%05%C3%80%0F~%C3%A2%C2%92%06%C3%AFU!H%00%00%00%00IEND%C2%AEB%60%C2%82",
            smartxy:"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00Q%00%00%00%1A%08%06%00%00%00%C3%8F%10%C2%B0%C2%99%00%00%00%09pHYs%00%00%17%11%00%00%17%11%01%C3%8A%26%C3%B3%3F%00%00%02AIDATh%C2%81%C3%AD%C2%99%C3%91m%C2%830%10%C2%86%2FQ%16%C3%B0%0At%04%3A%02%C2%8C%406h%3A%02%3C%C3%B4%C2%B1%0F%C3%89%08%C3%A9%08%C3%89%08%C3%89%08a%C2%85%C2%A8%1B0%C2%82%2BK%C2%BF%C2%AB%C3%AB%C3%95%C2%80%0Dn%C3%94(%C3%BE%C2%A4%C2%93%C3%80%C3%98%C3%A6%C3%B8%C2%B9%3B%C2%9Bd%C2%A1%C2%B5%C2%A6%C3%84%3C%C2%96I%C2%BF%C3%B9%24%11%23%C2%90D%C2%8C%40%121%02%C2%8F.%C2%A2%22%C2%A2l%C3%AE%24%C2%8F.bAD%5B%C2%88i1%C2%A2V0%2F%1E%5DD%C2%82X%7B%C2%88%C2%97%C3%A1%C3%B8%40D%C2%B9%C3%B7%0CZ%C3%ABB%C3%BBs2%C3%BBJ%C3%B4.p%C3%9Cg5%C3%BA%0D%C3%B5%C3%A1V%C2%B0y%C3%AB%00%C2%9F%C3%AA%C2%89%C3%8F%60Li%C2%AD%0Fh%C2%BF%C3%80%C3%AC%C2%9C%C2%BE~%C3%93j%C3%A6%1B4o%C3%AE%C3%83qm%C2%83T%C3%B1%C2%A5%08I%C2%9F%C2%88tD%C2%B4%26%C2%A2%0B%C2%8B%C2%BC%1D%C3%8C%1B)%C3%A2%15%C3%96G%2B%C2%842%C3%A7%C2%A6%C3%BF%19m%0A%C3%8El%02%C3%92%C3%81%0A%C2%B8am%1D%C2%9B%C3%93%C2%85%12%C3%B3%C3%8B%C3%BE%C3%BC%C2%BA%7C%C2%A6V%C3%8CW%C2%89%C2%9A%C2%98%238%C2%86t%C3%B8%C2%89H%05%C3%9F0%C2%96%C3%98vWZ%C2%85%C3%8E5V%26%7C%7C%C3%B6%7D%C2%A6%0C%C3%A9%C2%AD%C2%91%C3%96%07v%C3%8C%C3%BBU%C2%B0%C3%8C'%C2%9D%C3%87%C3%92%C3%90%C2%BC%C3%85%C3%86%C3%91~b%11%C3%A0K%C2%8E%C2%95%C3%91%C3%85f%24%C2%BDC%C3%AE3%C2%84%5D%40%1AQ%C2%96lt%C2%9A%08%C2%AF%C3%A1%C3%A7%19%7D~E%C2%A8%141%C2%9B%C2%B8o%0A%C2%A9%7F%C3%84%C3%92%C2%BDo%C2%9C%C2%9A0%C3%A7%14J%C2%8C%C3%A9%C3%98%C3%985Vh%2B%60%C2%8D%C3%A0y%C3%ADK%C3%B19%0B%C3%8B%1C%C2%AA%1B%C2%894F%C3%97s%C2%BDa%11h%04%7C%1F%C2%AA%C2%91K%C2%84%C3%A9b%C3%84%C3%BA%C2%B0c-%C3%B6%7ChQ%C3%90B%C3%80EO%C2%89%C2%B0%C2%94%C2%8E%C3%AB%C3%9C%C3%A7%C2%A0%C2%95%C3%94%C2%93%3DK%C3%A1%17%22z%13%19%C2%AA%C3%98%C2%86%5C%C2%ADFj%C2%93%2F%C2%AE%C2%B4%C2%90%C3%88%3A%C3%97W_%5D%1C%C3%91%C3%9F%C3%96%C3%9E%1C%C3%87%C2%A5%C3%A7%C3%B8%10j%C3%B8yE%0D%C3%BC%C3%84%C3%BD%C3%B68%3F%C3%A2%C2%B8%C2%B2~%C2%AD%22%C3%95%C2%9F%C2%A1%C3%88%238%C3%81k%60%C2%8B1c%C3%A3%2CW%C2%B6%C2%95%C3%8A%C2%99%C3%8F%C2%85%C3%87%C2%B6%2C%04%5E%03%1B%C3%A6_%C2%83%40%C3%8Bp%3D%C2%87%C2%80%C2%A6Nv%C2%B7%C3%BA%C3%AC%C3%9B%C2%8A%7D%60%13%10%C2%85%C2%9CR%C3%AC%C3%B3N%C2%917%C3%A9%C2%A64%3C%11%C3%91%C2%B3x%C3%81%3B%C3%A6o%C2%8E%C2%88%5C%7Fg%5E%C3%88%C3%A7%C3%8D%3F%C2%B2)%7B%C3%9B%18%C2%B6%C3%85%3D%15%C2%9F%C3%AB%5E%7F%C2%80h%C3%BF%C2%A8%1EN%C3%A2%5EE%C3%ACXM%1DZ%C3%8CnB%C3%BA%C2%B7%2F%1C%25_%5C%121%02%C3%A9G%C3%99%08%24%11%C3%A7BD_L%C3%93%C2%904%20wS%C2%B8%00%00%00%00IEND%C2%AEB%60%C2%82"
            }
        };

//#endregion 'var strings'

//#region UI stuff
        /*
        000000000000000000000000000000
        0000000000 UI Code 00000000000
        000000000000000000000000000000
        */

        // GRPTOP
        // ======
        var grpTop = windowNERDS.add("group", undefined, {name: "grpTop"});
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

        // PANELSORECO
        var panelSoreco = grpTop.add("panel", undefined, {name: "panelSoreco"});
        panelSoreco.text = "SoReCo";
        panelSoreco.orientation = "column";
        panelSoreco.orientation = "column";
        panelSoreco.alignChildren = ["left", "center"];
        panelSoreco.spacing = 0;
        panelSoreco.margins = 10;
        var sortMini = panelSoreco.add("button", undefined, "sort");
        var reduceMini = panelSoreco.add("button", undefined, "reduce");
        var collectMini = panelSoreco.add("button", undefined, "collect");
        sortMini.onClick = function() {
        sortProjectItems();
        app.activeViewer.setActive();
        };
        reduceMini.onClick = function() {
        doReduceProject();
        app.activeViewer.setActive();
        };
        collectMini.onClick = function() {
        doCollectFiles();
        app.activeViewer.setActive();
        };

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

        var iconButtNull_imgString = strings.imgStrings.null0;
        var iconButtNull = col1Butts.add("iconbutton", undefined, File.decode(iconButtNull_imgString), {name: "iconButtNull", style: "toolbutton"});
            iconButtNull.helpTip = strings.helpTips.null0;
            // iconButtNull = createANull
            iconButtNull.onClick = function() {
            createANull();
            app.Activate
        };

        var iconButtReverse_imgString = strings.imgStrings.reverse;
        var iconButtReverse = col1Butts.add("iconbutton", undefined, File.decode(iconButtReverse_imgString), {name: "iconButtReverse", style: "toolbutton"});
            iconButtReverse.helpTip = strings.helpTips.reverse;
            // iconButtReverse's onclick is below it's function

        var iconButtLoop_imgString = strings.imgStrings.loop;
        var iconButtLoop = col1Butts.add("iconbutton", undefined, File.decode(iconButtLoop_imgString), {name: "iconButtLoop", style: "toolbutton"});
        iconButtLoop.helpTip = strings.helpTips.loop;
        iconButtLoop.onClick = function() {
            loopAtPlayhead();
            app.activeViewer.setActive();
        };

        var iconButtColor_imgString = strings.imgStrings.color;
                var iconButtColor = col1Butts.add("iconbutton", undefined, File.decode(iconButtColor_imgString), {name: "iconButtColor", style: "toolbutton"});
                    iconButtColor.helpTip = strings.helpTips.color;
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

        var iconButtRename_imgString = strings.imgStrings.rename;
                var iconButtRename = col2Butts.add("iconbutton", undefined, File.decode(iconButtRename_imgString), {name: "iconButtRename", style: "toolbutton"});
                    iconButtRename.helpTip = strings.helpTips.rename;
                    iconButtRename.onClick = function() {
                    var win = new Window('palette', 'Layer Rename', [300, 100, 645, 396]);
                    var w = buildrenameUI(win);
                    if (w != null) {
                    w.show();
                    }
                    app.activeViewer.setActive();
                }
        var iconButtSmartXY_imgString = strings.imgStrings.smartxy;
        var iconButtSmartXY = col2Butts.add("iconbutton", undefined, File.decode(iconButtSmartXY_imgString), {name: "iconButtSmartXY", style: "toolbutton"});
            iconButtSmartXY.helpTip = strings.helpTips.smartxy;
            iconButtSmartXY.onClick = function() {
            separateDimensionsPreserveEasing();
            app.activeViewer.setActive();
        }

    /*      var iconButtSort_imgString = strings.imgStrings.sort;
            var iconButtSort = col2Butts.add("iconbutton", undefined, File.decode(iconButtSort_imgString), {name: "iconButtSort", style: "toolbutton"});
                iconButtSort.helpTip = strings.helpTips.sort;
                iconButtSort.onClick = function() {
                sortProjectItems();
                app.activeViewer.setActive();
            } */

        var iconButtExplode_imgString = strings.imgStrings.explode;
        var iconButtExplode = col2Butts.add("iconbutton", undefined, File.decode(iconButtExplode_imgString), {name: "iconButtExplode", style: "toolbutton"});
            iconButtExplode.helpTip = strings.helpTips.explode;
            iconButtExplode.onClick = function() {
            explodeShapeLayers();
            app.activeViewer.setActive();
        }

        // GRP_EaseDrop
        var grpEaseDrop = windowNERDS.add("group", undefined, {
            name: "grpEaseDrop"
        });
        grpEaseDrop.orientation = "column";
        grpEaseDrop.alignChildren = ["left", "left"];
        grpEaseDrop.spacing = 0;
        grpEaseDrop.margins = [4, 5, 4, 4];
        grpEaseDrop.alignment = ["center", "center"];

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
                slider.helpTip = strings.helpTips.slider;
                slider.value = 50;
                slider.stepdelta = 1;

            // EaseButts Group
            var grpEaseButts = panelEasement.add("group", undefined, {name: "grpEaseButts"});
                grpEaseButts.orientation = "row";
                grpEaseButts.alignChildren = ["center","center"];
                grpEaseButts.spacing = 10;
                grpEaseButts.margins = 0;
            var inButton = grpEaseButts.add("button", [10, 10, 35, 35], "◁");
                inButton.helpTip = strings.helpTips.inButton;
            var bothButton = grpEaseButts.add("button", [50, 10, 75, 35], "◁▷");
                bothButton.helpTip = strings.helpTips.bothButton;
            var outButton = grpEaseButts.add("button", [90, 10, 115, 35], "▷");
                outButton.helpTip = strings.helpTips.outButton;
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

        // GRP_DROPDOWN
        // ============
        var grpDropdown = grpEaseDrop.add("group", undefined, {
            name: "grpDropdown"});
            grpDropdown.orientation = "column";
            grpDropdown.alignChildren = ["center", "center"];
            grpDropdown.spacing = 0;
            grpDropdown.margins = [4, 5, 4, 4];
            grpDropdown.alignment = ["center", "center"];
//#endregion UI stuff

//#region Dropdowns
        // DROPDOWNS
        var grpHkPlusQuestionMark = grpDropdown.add("group", undefined, {name: "grpHkPlusQuestionMark"});
            grpHkPlusQuestionMark.orientation = "row";
            grpHkPlusQuestionMark.alignChildren = ["center","center"];
            grpHkPlusQuestionMark.spacing = 0;
            grpHkPlusQuestionMark.margins = 0;
        var hk_array = ["Housekeeping", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Sort", "Reduce Project", "Collect Files...", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Rename Comp to File Name", "Clear Render Queue", "Purge All Memory & Disk Cache"];
        var hkDropdown = grpHkPlusQuestionMark.add("dropdownlist", undefined, undefined, {
            name: "hkDropdown",
            items: hk_array});
            hkDropdown.alignment = ["center", "center"];
            hkDropdown.selection = 0;
            hkDropdown.onChange = function() {
                switch (this.selection.text) {
                    case "Sort":
                        sortProjectItems();
                        app.activeViewer.setActive();
                        break;
                    case "Reduce Project":
                        doReduceProject();
                        app.activeViewer.setActive();
                        break;
                    case "Collect Files...":
                        doCollectFiles();
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
        var hkHelpStaticText = grpHkPlusQuestionMark.add("statictext", undefined, undefined, {name: "?"});
            hkHelpStaticText.text = "?";
            hkHelpStaticText.helpTip = ("Housekeeping Menu Options: \n" +
                    "_____________________________________________" + "\n\n" +
                    "Sort: " + strings.helpTips.HKsrt + "\n\n" +
                    "Reduce Project: " + strings.helpTips.HKrdc + "\n\n" +
                    "Collect Files...: " + strings.helpTips.HKclct + "\n\n" +
                    "Rename Comp to File Name: " + strings.helpTips.HKrctfn + "\n\n" +
                    "Clear Render Queue: " + strings.helpTips.HKcrq + "\n\n" +
                    "Purge All Memory & Disk Cache: " + strings.helpTips.HKpamdc
                );
        var grpUPlusQuestionMark = grpDropdown.add("group", undefined, {name: "grpUPlusQuestionMark"});
            grpUPlusQuestionMark.orientation = "row";
            grpUPlusQuestionMark.alignChildren = ["center","center"];
            grpUPlusQuestionMark.spacing = 0;
            grpUPlusQuestionMark.margins = 0;
        var u_array = ["Utilities", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Calc Distance (2 Layers)", "Calc Difference (2 Keyframes)", "Precompose Individually", "Round Position", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Select All Children", "Select All Unparented Layers", "Select All Non-Nulls", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Lock All Nulls", "Unlock All Nulls", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Lock All Layers", "Unlock All Layers", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Scale Composition", "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", "Style: Edge Blur", "Style: Pixelation"];
        var uDropdown = grpUPlusQuestionMark.add("dropdownlist", undefined, undefined, {
                name: "uDropdown",
                items: u_array});
                uDropdown.alignment = ["center", "center"];
                uDropdown.selection = 0;
            uDropdown.onChange = function() {
            switch (this.selection.text) {
                case "Calc Distance (2 Layers)":
                    calcDistBtwnLayers();
                    app.activeViewer.setActive();
                    break;
                case "Calc Difference (2 Keyframes)":
                    calcDiffInKFValues();
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
                case "Select All Unparented Layers":
                    doSelectAllUnparentedLayers();
                    app.activeViewer.setActive();
                    break;
                case "Scale Composition":
                    doScaleComposition();
                    app.activeViewer.setActive();
                    break;
                case "Style: Pixelation":
                    doPixelation();
                    app.activeViewer.setActive();
                    break;
            // warning: do NOT delete the following curly brace!
            }
            this.selection = 0; // Reset menu selection to "Utilities"
        };
        var uHelpStaticText = grpUPlusQuestionMark.add("statictext", undefined, undefined, {name: "?"});
            uHelpStaticText.text = "?";
            uHelpStaticText.helpTip = ("Utilities Menu Options: \n" +
                    "_____________________________________________" + "\n\n" +
                    "Calc Difference (2 Keyframes): " + strings.helpTips.Ucdkf + "\n\n" +
                    "Calc Distance (2 layers): " + strings.helpTips.Ucd2l + "\n\n" +
                    "Precompose Individually: " + strings.helpTips.Upi + "\n\n" +
                    "Round Position: " + strings.helpTips.Urp + "\n\n" +
                    "Select All Children: " + strings.helpTips.Usac + "\n\n" +
                    "Select All Unparented Layers: " + strings.helpTips.Usaul + "\n\n" +
                    "Select All Non-Nulls: " + strings.helpTips.Usann + "\n\n" +
                    "Lock All Nulls: " + strings.helpTips.Ulan + "\n\n" +
                    "Unlock All Nulls: " + strings.helpTips.Uun + "\n\n" +
                    "Lock All Layers: " + strings.helpTips.Ulal + "\n\n" +
                    "Unlock All Layers: " + strings.helpTips.Uual + "\n\n" +
                    "Scale Composition: " + strings.helpTips.Uscc + "\n\n" +
                    "Style: Edge Blur: " + strings.helpTips.Useb + "\n\n" +
                    "Style: Pixelation: " + strings.helpTips.Usp);
//#endregion dropdowns

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
            // iconButtReverse = reverseSelectedLayers
            iconButtReverse.onClick = function() {
                reverseSelectedLayers();
                app.activeViewer.setActive();
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
                var duplicate = comp.layer(layer.index - 1);
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
                var duplicate = comp.layer(layer.index - 1);
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

        //// "Calc Diff in KF Values" /////
        function calcDiffInKFValues() {
            try {
                // Check if variable is an array
                function isArray(obj) {
                    return Object.prototype.toString.call(obj) === '[object Array]';
                }

                var comp = app.project.activeItem;
                if (!comp || comp.typeName != "Composition") {
                    alert("No composition selected. Please select a composition and try again.");
                    return;
                }
                var selectedProperties = comp.selectedProperties;
                var numSelectedProperties = selectedProperties.length;
                if (numSelectedProperties === 0) {
                    alert("No properties selected. Please select properties with keyframes and try again.");
                    return;
                }
                for (var p = 0; p < numSelectedProperties; p++) {
                    var selectedProperty = selectedProperties[p];
                    var selectedKeys = selectedProperty.selectedKeys;
                    var numSelectedKeys = selectedKeys.length;
                    if (numSelectedKeys != 2) {
                        alert("Property " + selectedProperty.name + " does not have exactly two keyframes selected. Please select exactly two keyframes and try again.");
                        continue;
                    }
                    var selectedPropertyName = selectedProperty.name;
                    var keyframeIndexOne = selectedKeys[0];
                    var keyframeIndexTwo = selectedKeys[1];
                    var keyValueOne = selectedProperty.keyValue(keyframeIndexOne);
                    var keyValueTwo = selectedProperty.keyValue(keyframeIndexTwo);

                    if (isArray(keyValueOne) && isArray(keyValueTwo)) {
                        var differences = [];
                        for (var i = 0; i < keyValueOne.length; i++) {
                            differences.push(Math.abs(keyValueTwo[i] - keyValueOne[i]).toFixed(2));
                        }
                        var message = [
                            selectedPropertyName,
                            "[" + keyframeIndexTwo + "]" + keyValueTwo.toString() + " -",
                            "[" + keyframeIndexOne + "]" + keyValueOne.toString() + " =",
                            differences.toString()
                        ];
                        alert(message.join("\n"));
                        continue;
                    }

                    var difference = Math.abs(keyValueTwo - keyValueOne).toFixed(2);
                    var message = [
                        selectedPropertyName,
                        "[" + keyframeIndexTwo + "]" + keyValueTwo + " -",
                        "[" + keyframeIndexOne + "]" + keyValueOne + " =",
                        difference
                    ];
                    alert(message.join("\n"));
                }
            } catch (error) {
                alert("An error occurred: " + error.message);
            }
        }

        ///// 'Calc Dist Between Layers' /////
        var calcDistBtwnLayers = function() {
            function getPosition(layer, type) {
                var matchName = (type === "world") ? "ADBE Point3D Control" : "ADBE Point Control";
                var methodName = (type === "world") ? "toWorld" : "toComp";
                var pointControl = layer.property("ADBE Effect Parade").addProperty(matchName);
                var expression = [
                    "thisComp.layer(\"" + layer.name + "\")",
                    "." + methodName + "(thisComp.layer(\"" + layer.name + "\").transform.anchorPoint);"
                ];
                var pointProperty = pointControl.property(1);
                pointProperty.expression = expression.join("");
                var position = pointProperty.value;
                position.push(0);
                pointControl.remove();
                return position;
            }
            app.beginUndoGroup("Calculate Distance Between Layers");
            var altKey = ScriptUI.environment.keyboardState.altKey;
            var comp = app.project.activeItem;
            var layers = comp.selectedLayers;
            var numLayers = layers.length;
            var layerA = layers[0];
            var layerB = layers[1];
            if (altKey === false) {
                var a = getPosition(layerA, "world");
                var b = getPosition(layerB, "world");
            } else {
                var a = getPosition(layerA, "composition");
                var b = getPosition(layerB, "composition");
            }
            var x = Math.pow(b[0] - a[0], 2);
            var y = Math.pow(b[1] - a[1], 2);
            var z = Math.pow(b[2] - a[2], 2);
            var distance = Math.sqrt(x + y + z);
            var layerAMsg = "[" + layerA.index + "] " + layerA.name;
            var layerBMsg = "[" + layerB.index + "] " + layerB.name;
            alert(distance.toFixed(2) + "px\n" + layerAMsg + "\n" + layerBMsg);
            app.endUndoGroup();
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

        ///// 'Select All Unparented Layers' /////
        var doSelectAllUnparentedLayers = function() {
            try {
                app.beginUndoGroup("Select All Unparented Layers");
                var comp = app.project.activeItem;
                var layers = comp.layers;
                var numLayers = layers.length;
                for (var l = 1; l <= numLayers; l++) {
                    var layer = layers[l];
                    if (layer.parent === null) {
                        layer.selected = true;
                    }
                }
            } catch (err) {
            alert('Please deselect all layers in comp :D');
            } finally {
                app.endUndoGroup();
            }
        }


        ///// Purge All Memory & Disk Cache /////
        var purgeAllMemDiskCache = function() {
        app.executeCommand(app.findMenuCommandId("All Memory & Disk Cache..."));
        }

        ///// 'Collect Files...' /////
        var doCollectFiles = function() {
        app.executeCommand(app.findMenuCommandId("Collect Files..."));
        }

        ///// 'Reduce Project' /////
        var doReduceProject = function() {
        app.executeCommand(app.findMenuCommandId("Reduce Project"));
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

        // Add Pixelation
        function doPixelation() {
            function PixelateAdjustmentLayer() {
                app.beginUndoGroup("pixelate"); // Begin undo group
                var comp = app.project.activeItem; // Get active composition
                var pixelate = comp.layers.addSolid([0,0,0], "Pixelate", comp.width, comp.height, comp.pixelAspect, comp.duration); // Make a solid layer
                pixelate.adjustmentLayer = 1; // Set to adjustment layer
                var slider = pixelate.Effects.addProperty("ADBE Slider Control"); // Add 'Slider Control' effect
                var mosaic = pixelate.Effects.addProperty("ADBE Mosaic"); // Add 'Mosaic' effect
                var posterize = pixelate.Effects.addProperty("ADBE Posterize"); // Add 'Posterize' effect
                // Set stuff...
                pixelate.property("ADBE Effect Parade").property("ADBE Slider Control").name = "Pixel Size";
                pixelate.property("ADBE Effect Parade").property("ADBE Slider Control").property("ADBE Slider Control-0001").setValue(10);
                pixelate.property("ADBE Effect Parade").property("ADBE Mosaic").property("ADBE Mosaic-0001").expression = "thisComp.width/effect('Pixel Size')('Slider')";
                pixelate.property("ADBE Effect Parade").property("ADBE Mosaic").property("ADBE Mosaic-0002").expression = "thisComp.height/effect('Pixel Size')('Slider')";
                pixelate.property("ADBE Effect Parade").property("ADBE Mosaic").property("ADBE Mosaic-0003").setValue(1);
                pixelate.property("ADBE Effect Parade").property("ADBE Posterize").property("ADBE Posterize-0001").setValue(32);
                app.endUndoGroup(); // End undo group
            }
            PixelateAdjustmentLayer();
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