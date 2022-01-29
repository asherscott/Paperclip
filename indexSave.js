// List of Buttons
const btnMakeClip = document.getElementById("btnMakeClip");
const btnAutoClick = document.getElementById("btnAutoClick");

// List of HTML elements to be incremented
const makeClipNumEle = document.getElementById("makeClipNum");
const autoClickNumEle = document.getElementById("autoClickNum");
const autoClickPriceEle = document.getElementById("autoClickPrice");

let makeClipNum = 0;
let autoClickNum = 0;
autoClickPriceEle.innerHTML = autoClickPriceFormula();

let delay;
let oldDelay;

document.addEventListener("click", function(e) {
    // Listens for click, if click target is a button, increment counter element.
    switch(e.target) {
        case btnMakeClip:
            updateEle(makeClipNumEle, makeClipNum += 1);
            break;
        case btnAutoClick:
            updateEle(autoClickNumEle, autoClickNum += 1);
            // Changes delay based on number of AutoClickers
            delay = (1000 / autoClickNum);

            // Removes current setInterval() and starts a new one with new delay
            clearInterval(oldDelay);
            startInterval(delay);

            // Removes cost of AutoClickers
            makeClipNum = makeClipNum - getInt(autoClickPriceEle);
            updateEle(makeClipNumEle, makeClipNum);

            // Sets the Price of the AutoClicker at y = 0.5x^e + 5, x = number of AutoClickers.
            updateEle(autoClickPriceEle, autoClickPriceFormula());
            break;
    }
});

function updateEle(ele, num) {
    // Updates an HTML element, with a new value, and checks if buttons should be enabled.
    switch(ele) {
        case makeClipNumEle:
            ele.innerHTML = num;
            break;
        case autoClickNumEle:
            ele.innerHTML = num;
            break;
        case autoClickPriceEle:
            ele.innerHTML = num;
            break;
    }
    btnEnable();
}

function startInterval(delay) {
    // Lets AutoClickers make Paperclips.
    oldDelay = setInterval(function() {
        if(autoClickNumEle.innerHTML > 0) {
            updateEle(makeClipNumEle, makeClipNum += 1);
        }
    }, delay);
}
function btnEnable() {
    // Enables AutoClicker purchace button if player has enough money.
    if(makeClipNum >= getInt(autoClickPriceEle)) {
        btnAutoClick.disabled = false;
    } else {
        btnAutoClick.disabled = true;
    }
}

function autoClickPriceFormula() {
    // Sets the price of AutoClickers at y = 0.5x^e + 5, x = number of AutoClickers.
    newPrice =  1 * autoClickNum ** 2.1 + 5;
    
    return Math.round(newPrice * 100 ) / 100;
}

function getInt(element) {
    // Recieves an HTML element, grabs the innerHTML, and turns it into an Integer.
    return parseInt(element.innerHTML, 10);
}