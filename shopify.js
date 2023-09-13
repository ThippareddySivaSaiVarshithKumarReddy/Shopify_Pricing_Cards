let payMonthButton = document.getElementById("payMonth");
let payYearButton = document.getElementById("payYear");
let payMonthButtonsm = document.getElementById("payMonthsm");
let payYearButtonsm = document.getElementById("payYearsm");
let basicMonth = document.getElementById("basicMonth");
let basicYear = document.getElementById('basicYear');
let shopifyMonth = document.getElementById("shopifyMonth");
let shopifyYear = document.getElementById("shopifyYear");
let advancedMonth = document.getElementById("advancedMonth");
let advancedYear = document.getElementById("advancedYear");
let basicMonthsm = document.getElementById("basicMonthsm");
let basicYearsm = document.getElementById('basicYearsm');
let shopifyMonthsm = document.getElementById("shopifyMonthsm");
let shopifyYearsm = document.getElementById("shopifyYearsm");
let advancedMonthsm = document.getElementById("advancedMonthsm");
let advancedYearsm = document.getElementById("advancedYearsm");
let BasicSm = document.getElementById("BasicSm");
let ShopifySm = document.getElementById("ShopifySm");
let AdvancedSm = document.getElementById("AdvancedSm");
let is_pay_button_clicked = true;

function basic() {
    basicMonth.classList.add("d-md-block");
    shopifyMonth.classList.add("d-md-block");
    advancedMonth.classList.add("d-md-block");
}


payMonthButton.onclick = function() {
    payMonthButton.classList.add("pay-active-button");
    payMonthButton.classList.remove("pay-inactive-button");
    payYearButton.classList.remove("pay-active-button");
    basicMonth.classList.remove("d-none");
    shopifyMonth.classList.remove("d-none");
    advancedMonth.classList.remove("d-none");
    basicYear.classList.add("d-none");
    shopifyYear.classList.add("d-none");
    advancedYear.classList.add("d-none");
};
payYearButton.onclick = function() {
    payYearButton.classList.add("pay-active-button");
    payMonthButton.classList.remove("pay-active-button");
    payYearButton.classList.remove("pay-inactive-button");
    basicMonth.classList.add("d-none");
    shopifyMonth.classList.add("d-none");
    advancedMonth.classList.add("d-none");
    basicYear.classList.remove("d-none");
    shopifyYear.classList.remove("d-none");
    advancedYear.classList.remove("d-none");
    basicMonth.classList.remove("d-md-block");
    shopifyMonth.classList.remove("d-md-block");
    advancedMonth.classList.remove("d-md-block");
};
basic();

function YearBasic() {
    basicYearsm.classList.remove("d-none");
    shopifyYearsm.classList.add("d-none");
    advancedYearsm.classList.add("d-none");
    basicMonthsm.classList.add("d-none");
    shopifyMonthsm.classList.add("d-none");
    advancedMonthsm.classList.add("d-none");
    BasicSm.classList.add("active-button");
    ShopifySm.classList.remove("active-button");
    AdvancedSm.classList.remove("active-button");
}

function Basic() {
    if (is_pay_button_clicked === true) {
        basicMonthsm.classList.remove("d-none");
        shopifyMonthsm.classList.add("d-none");
        advancedMonthsm.classList.add("d-none");
        basicYearsm.classList.add("d-none");
        shopifyYearsm.classList.add("d-none");
        advancedYearsm.classList.add("d-none");
        BasicSm.classList.add("active-button");
        ShopifySm.classList.remove("active-button");
        AdvancedSm.classList.remove("active-button");
    } else {
        YearBasic()
    }

}
payMonthButtonsm.onclick = function() {
    payMonthButtonsm.classList.add("pay-active-button");
    payMonthButtonsm.classList.remove("pay-inactive-button");
    payYearButtonsm.classList.remove("pay-active-button");
    is_pay_button_clicked = true;
    Basic()
};
payYearButtonsm.onclick = function() {
    payYearButtonsm.classList.add("pay-active-button");
    payMonthButtonsm.classList.remove("pay-active-button");
    payYearButtonsm.classList.remove("pay-inactive-button");
    YearBasic()
    is_pay_button_clicked = false;
};




function Advanced() {
    if (is_pay_button_clicked === true) {
        basicMonthsm.classList.add("d-none");
        shopifyMonthsm.classList.add("d-none");
        advancedMonthsm.classList.remove("d-none");
        basicYearsm.classList.add("d-none");
        shopifyYearsm.classList.add("d-none");
        advancedYearsm.classList.add("d-none");
        BasicSm.classList.remove("active-button");
        ShopifySm.classList.remove("active-button");
        AdvancedSm.classList.add("active-button");
    } else {
        basicMonthsm.classList.add("d-none");
        shopifyMonthsm.classList.add("d-none");
        advancedMonthsm.classList.add("d-none");
        basicYearsm.classList.add("d-none");
        shopifyYearsm.classList.add("d-none");
        advancedYearsm.classList.remove("d-none");
        BasicSm.classList.remove("active-button");
        ShopifySm.classList.remove("active-button");
        AdvancedSm.classList.add("active-button");
    }
}

function Shopify() {
    if (is_pay_button_clicked === true) {
        basicMonthsm.classList.add("d-none");
        shopifyMonthsm.classList.remove("d-none");
        advancedMonthsm.classList.add("d-none");
        basicYearsm.classList.add("d-none");
        shopifyYearsm.classList.add("d-none");
        advancedYearsm.classList.add("d-none");
        BasicSm.classList.remove("active-button");
        ShopifySm.classList.add("active-button");
        AdvancedSm.classList.remove("active-button");
    } else {
        basicMonthsm.classList.add("d-none");
        shopifyMonthsm.classList.add("d-none");
        advancedMonthsm.classList.add("d-none");
        basicYearsm.classList.add("d-none");
        shopifyYearsm.classList.remove("d-none");
        advancedYearsm.classList.remove("d-none");
        BasicSm.classList.remove("active-button");
        ShopifySm.classList.add("active-button");
        AdvancedSm.classList.remove("active-button");
    }
}
Basic()