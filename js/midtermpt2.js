/**
 * Name: Devon Hills, devon_hills@student.uml.edu
 * Affiliation: Computer Science Student, UMass Lowell
 * Course: Comp.4610, GUI Programming I
 * Updated: 11/5/2017
 * Description: Javascript for Midterm part 2 car financing sheet. Contains 3 functions to handle calculations
 * of each individual option based on the conditions given in the assignment.
 */

/**
 * onClick functions called when user clicks buttons to calculate each price
 */
function calcPrices1() {
    option1();
}

function calcPrices2() {
    option2();
}

function calcPrices3() {
    option3();
}

/**
 * finance option 1 logic: get numbers from HTML input fields -> calculate costs -> place results in output fields
 * @returns {boolean}
 */
function option1() {
    var msrp = parseFloat(document.getElementById("msrp").value);
    var monthly = parseFloat(document.getElementById("monthly").value);
    var mpy = parseFloat(document.getElementById("mpy").value);

    var disc = parseFloat(document.getElementById("disc1").value);
    var rebate = parseFloat(document.getElementById("rebate1").value);

    var newMsrp = msrp - disc - rebate;

    var dp = parseFloat(document.getElementById("down1").value);

    var dpTotal = newMsrp * (dp / 100);

    var total = newMsrp - dpTotal;

    var interest = parseFloat(document.getElementById("interest1").value);

    //check for empty fields
    if (!msrp || !monthly || !mpy || !disc || !rebate || !dp || !interest) {
        alert("Please fill out all FINANCE OPTION 1 fields");
        return false;
    }

    var interestPerYear = total * (interest / 100);
    var totalInterest = interestPerYear * (monthly / 12);

    var grandTotal = newMsrp + totalInterest;

    var costPerMile = (total + totalInterest) / mpy;
    var costPerMonth = (total + totalInterest) / monthly;

    var result1 = document.getElementById('total1');
    var result2 = document.getElementById('monthresult1');
    var result3 = document.getElementById('mileresult1');

    var d = document.getElementById('divtotal1');
    var d2 = document.getElementById('divmonth1');
    var d3 = document.getElementById('divmiles1');

    d.className += " has-success";
    d2.className += " has-success";
    d3.className += " has-success";

    result1.value = grandTotal.toFixed(2).toString();
    result2.value = costPerMonth.toFixed(2).toString();
    result3.value = costPerMile.toFixed(2).toString();
}

/**
 * finance option 2 logic: get numbers from HTML input fields -> calculate costs -> place results in output fields
 * @returns {boolean}
 */
function option2() {
    var msrp = parseFloat(document.getElementById("msrp").value);
    var monthly = parseFloat(document.getElementById("monthly").value);
    var mpy = parseFloat(document.getElementById("mpy").value);

    var dp = parseFloat(document.getElementById("down2").value);

    //check for empty fields
    if (!msrp || !monthly || !mpy || !dp) {
        alert("Please fill out all FINANCE OPTION 2 fields");
        return false;
    }

    var dpTotal = msrp * (dp / 100);
    var total = msrp - dpTotal;

    var costPerMile = total / mpy;
    var costPerMonth = total / monthly;

    var result1 = document.getElementById('total2');
    var result2 = document.getElementById('monthresult2');
    var result3 = document.getElementById('mileresult2');

    var d = document.getElementById('divtotal2');
    var d2 = document.getElementById('divmonth2');
    var d3 = document.getElementById('divmiles2');

    d.className += " has-success";
    d2.className += " has-success";
    d3.className += " has-success";

    result1.value = msrp.toFixed(2).toString();
    result2.value = costPerMonth.toFixed(2).toString();
    result3.value = costPerMile.toFixed(2).toString();
}

/**
 * lease option logic: get numbers from HTML input fields -> calculate costs -> place results in output fields
 * @returns {boolean}
 */
function option3() {
    var msrp = parseFloat(document.getElementById("msrp").value);
    var monthly = parseFloat(document.getElementById("monthly").value);
    var mpy = parseFloat(document.getElementById("mpy").value);

    var dp = parseFloat(document.getElementById("down3").value);

    var monthlyPay = parseFloat(document.getElementById("monthly3").value);
    var mpyAllowed = parseFloat(document.getElementById("mpy3").value);
    var milesCost = parseFloat(document.getElementById("milescost").value);

    //check for empty fields
    if (!msrp || !monthly || !mpy || !dp || !monthlyPay || !mpyAllowed || !milesCost) {
        alert("Please fill out all LEASE OPTION fields");
        return false;
    }

    var dpTotal = msrp * (dp / 100);
    var leaseBaseCost = monthlyPay * monthly;
    var extraMilesCost = ((mpy - mpyAllowed) * milesCost) * (monthly / 12);

    var grandTotal = leaseBaseCost + extraMilesCost + dpTotal;
    var total = leaseBaseCost + extraMilesCost;

    var costPerMile = total / mpy;
    var costPerMonth = total / monthly;

    var result1 = document.getElementById('total3');
    var result2 = document.getElementById('monthresult3');
    var result3 = document.getElementById('mileresult3');

    var d = document.getElementById('divtotal3');
    var d2 = document.getElementById('divmonth3');
    var d3 = document.getElementById('divmiles3');

    d.className += " has-success";
    d2.className += " has-success";
    d3.className += " has-success";

    result1.value = grandTotal.toFixed(2).toString();
    result2.value = costPerMonth.toFixed(2).toString();
    result3.value = costPerMile.toFixed(2).toString();
}