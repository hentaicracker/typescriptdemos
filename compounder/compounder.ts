(function () {

    var totalButton:HTMLButtonElement = <HTMLButtonElement>$('totalButton');
    var amount:HTMLInputElement = <HTMLButtonElement>$('amount');
    var rate:HTMLInputElement = <HTMLButtonElement>$('rate');
    var years:HTMLInputElement = <HTMLButtonElement>$('years');
    var result = $('result');

    var $ = (id: any) => document.getElementById(id);

    var compound = function (amount: number, rate: number, years: number): number {
        var months = years * 12;
        var yrRate: number = (rate / 12) / 100;
        return amount * Math.pow(1 + yrRate, months);
    }

    function displayResult(msg: string) {
        result.innerHTML = msg;
    }

    totalButton.addEventListener('click', (e) => {
        var amountValue = parseFloat(amount.value);
        var rateValue = parseFloat(rate.value);
        var yearsValue = parseFloat(years.value);

        displayResult('$' + compound(amountValue, rateValue, yearsValue));
    });

}());