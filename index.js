"use strict";

window.onload = function () {

document.getElementById('submitBtn').onclick = onSubmitBtnClicked;

document.getElementById('coneOption').onchange = onConeOptionChange;

document.getElementById('cupOption').onchange = onCupOptionChange;
}

function onSubmitBtnClicked() {
    console.log('hello');

    const numOfScoops = +document.getElementById('numOfScoops').value;
    const numOfExtraScoops = numOfScoops - 1
    const extraScoopCost = 1.25
    const scoopPrice = 2.25

    const baseCost = numOfExtraScoops * extraScoopCost + scoopPrice 

    let extraToppingCost = 0;
    if (document.getElementById('cupOption').checked) {
        if (document.getElementById('sprinkles').checked) {
            extraToppingCost += 0.50;
        } 
        if (document.getElementById('hotFudge').checked) {
            extraToppingCost += 1.25;
        }
        if (document.getElementById('whippedCream').checked) {
            extraToppingCost += 0.25;
        }
        if (document.getElementById('cherry').checked) {
            extraToppingCost += 0.25;
        }
    }

    const taxAmount = 0.4 * baseCost;

    const totalDue = baseCost + extraToppingCost + taxAmount

    document.getElementById('baseCost').innerHTML = baseCost.toFixed(2);
    document.getElementById('taxCost').innerHTML = taxAmount.toFixed(2);

    document.getElementById('toppingsCost').innerHTML = extraToppingCost.toFixed(2);

    document.getElementById('totalDue').innerHTML = totalDue.toFixed(2);

}

function onConeOptionChange() {
    const fieldset = document.getElementById('toppingsFieldset');
    if (document.getElementById('coneOption').checked) {
        fieldset.style.display = 'none'
    }
}

function onCupOptionChange() {
    const fieldset = document.getElementById('toppingsFieldset');
    if (document.getElementById('cupOption').checked) {
        fieldset.style.display = 'block'
    }
}