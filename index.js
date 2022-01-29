const btnMakeProd           = document.getElementById("btnMakeProd");
const btnAutoClick          = document.getElementById("btnAutoClick");
const btnMaterials          = document.getElementById("btnMaterials");

const ProdNumEle            = document.getElementById("prodNum");
const autoClickNumEle       = document.getElementById("autoClickNum");
const autoClickPriceEle     = document.getElementById("autoClickPrice");
const materialNumEle        = document.getElementById("materialNum");
const fundsEle              = document.getElementById("funds");

let clickNum = 0;
let autoClickNum = 0;
let autoClickPrice = 5;
let materialNum = 1000;
let materialPrice = 15;
let materialShipment = 1000;
let funds = 0;

//setInterval(makeProd(autoClickNum), 1000);

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
    clickNum = clickNum + number;
    ProdNumEle.innerHTML = clickNum;

    materialNum = materialNum - number;
    materialNumEle.innerHTML = materialNum;

    funds = funds + 0.25 * number;
    fundsEle.innerHTML = funds.toFixed(2);

    btnEnable();
}

function makeAutoClicker() {
    autoClickNum++;
    autoClickNumEle.innerHTML = autoClickNum;

    funds = funds - autoClickPrice;
    fundsEle.innerHTML = funds.toFixed(2);

    autoClickPrice = 1.1 ** autoClickNum + 5;
    autoClickPriceEle.innerHTML = autoClickPrice.toFixed(2);

    btnEnable();
}

function addMaterials() {
    materialNum = materialNum + materialShipment;
    materialNumEle.innerHTML = materialNum;

    funds = funds - materialPrice;
    fundsEle.innerHTML = funds.toFixed(2);

    btnEnable();
}

console.log("Hello There");