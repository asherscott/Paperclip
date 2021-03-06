const btnMakeProd           = document.getElementById("btnMakeProd");
const btnAutoClick          = document.getElementById("btnAutoClick");
const btnMaterials          = document.getElementById("btnMaterials");

const ProdNumEle            = document.getElementById("prodNum");
const autoClickNumEle       = document.getElementById("autoClickNum");
const autoClickPriceEle     = document.getElementById("autoClickPrice");
const materialNumEle        = document.getElementById("materialNum");
const fundsEle              = document.getElementById("funds");
const cpsEle                = document.getElementById("cps");

let clickNum = 0;
let autoClickNum = 0;
let autoClickPrice = 5;
let materialNum = 1000;
let materialPrice = 15;
let materialShipment = 1000;
let funds = 0;
let cpsBig = 0;
let cpsSmall = 0;

GameStart();

function btnEnable() {
    materialNum >= 1 
        ? btnMakeProd.disabled = false
        : btnMakeProd.disabled = true;

    funds >= materialPrice 
        ? btnMaterials.disabled = false
        : btnMaterials.disabled = true;

    funds >= autoClickPrice
        ? btnAutoClick.disabled = false
        : btnAutoClick.disabled = true;
}

function makeProd(number) {
    if(materialNum > 0) {
        clickNum = clickNum + number;
        ProdNumEle.innerHTML = `Products: ${clickNum.toFixed(0)}`;

        materialNum = materialNum - number;
        materialNumEle.innerHTML = `${Math.ceil(materialNum)} units`;

        funds = funds + 0.25 * number;
        fundsEle.innerHTML = `Available Funds: $ ${funds.toFixed(2)}`;

        btnEnable();
    }
    
}

function makeAutoClicker() {
    autoClickNum++;
    autoClickNumEle.innerHTML = autoClickNum;

    funds = funds - autoClickPrice;
    fundsEle.innerHTML = funds.toFixed(2);

    autoClickPrice = (1.2 ** autoClickNum) + 5;
    autoClickPriceEle.innerHTML = `Cost: $ ${autoClickPrice.toFixed(2)}`;
    
    btnEnable();
}

function addMaterials() {
    materialNum = materialNum + materialShipment;
    materialNumEle.innerHTML = materialNum;

    funds = funds - materialPrice;
    fundsEle.innerHTML = funds.toFixed(2);

    btnEnable();
}

function startInterval() {
    setInterval(function() {
        if(autoClickNum > 0) {
            makeProd(autoClickNum / 100);
        }
    }, 10);
}

function cps() {
    setInterval(function() {
        cpsBig = clickNum;
        
        setTimeout(function() {
            cpsSmall = clickNum;
        }, 500);

        let cps = 2 * (cpsBig - cpsSmall);
        cpsEle.innerHTML = `Products per second: ${cps.toFixed(0)}`;
    }, 1000);
}

function GameStart() {
    startInterval();
    cps();
}

console.log("Hello There");