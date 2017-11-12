/**
 * Name: Devon Hills, devon_hills@student.uml.edu
 * Affiliation: Computer Science Student, UMass Lowell
 * Course: Comp.4610, GUI Programming I
 * Updated: 11/11/2017
 * Description: Javascript for HW4 - single page web app to dynamically create a comparison table
 */


/**
 * load number of input forms based on value entered
 * @returns {boolean}
 */
function createFields() {

    var val = parseFloat(document.getElementById("num-fields").value);

    if (val <= 0 || val > 5) {
        alert("Enter a number between 1 and 5");
        return false;
    }

    $("#price_form").show();
    $("#mpg_form").show();

    var i;

    for (i = 1; i <= val; i++) {
        var id_string = "#p" + i.toString();
        var id_string2 = "#m" + i.toString();

        $(id_string).show();
        $(id_string2).show();
    }

    var j = val + 1;

    for (i = j; i <= 5; i++) {
        var id_string_a = "#p" + i.toString();
        var id_string_a2 = "#m" + i.toString();

        $(id_string_a).hide();
        $(id_string_a2).hide();
    }

    $("#valid-div-btn").show();

    $("#valid1").hide();
    $("#valid2").hide();
    $("#table-div-btn").hide();
    $("#resultTable").hide();
}


/**
 * check for valid input and output into lists
 * @returns {boolean}
 */
function validateInput() {

    var val = parseFloat(document.getElementById("num-fields").value);


    for (var i = 0; i <= 5; i++) {

        var check = "#price" + i.toString();
        var check2 = "#mpg" + i.toString();

        if ((($(check).is(":visible")) && ($(check).val() === "")) ||
            (($(check2).is(":visible")) && ($(check2).val() === ""))) {

            alert("Please fill out all fields");
            return false;
        }

        if ((($(check).is(":visible")) && ($(check).val() < 1)) ||
            (($(check2).is(":visible")) && ($(check2).val() < 1))) {

            alert("Please enter positive values");
            return false;
        }
    }

    var x1 = parseFloat(document.getElementById("price1").value);
    var x2 = parseFloat(document.getElementById("price2").value);
    var x3 = parseFloat(document.getElementById("price3").value);
    var x4 = parseFloat(document.getElementById("price4").value);
    var x5 = parseFloat(document.getElementById("price5").value);

    var y1 = parseFloat(document.getElementById("mpg1").value);
    var y2 = parseFloat(document.getElementById("mpg2").value);
    var y3 = parseFloat(document.getElementById("mpg3").value);
    var y4 = parseFloat(document.getElementById("mpg4").value);
    var y5 = parseFloat(document.getElementById("mpg5").value);

    document.getElementById("x1").innerHTML = x1.toString();
    document.getElementById("x2").innerHTML = x2.toString();
    document.getElementById("x3").innerHTML = x3.toString();
    document.getElementById("x4").innerHTML = x4.toString();
    document.getElementById("x5").innerHTML = x5.toString();

    document.getElementById("y1").innerHTML = y1.toString();
    document.getElementById("y2").innerHTML = y2.toString();
    document.getElementById("y3").innerHTML = y3.toString();
    document.getElementById("y4").innerHTML = y4.toString();
    document.getElementById("y5").innerHTML = y5.toString();


    $("#valid1").show();
    $("#valid2").show();
    $("#table-div-btn").show();


    var k;

    for (k = 1; k <= val; k++) {
        var id_string = "#x" + k.toString();
        var id_string2 = "#y" + k.toString();

        $(id_string).show();
        $(id_string2).show();
    }

    var j = val + 1;

    for (k = j; k <= 5; k++) {
        var id_string_a = "#x" + k.toString();
        var id_string_a2 = "#y" + k.toString();

        $(id_string_a).hide();
        $(id_string_a2).hide();
    }

}

/**
 * dynamically create table
 */
function makeTable() {

    var val = parseFloat(document.getElementById("num-fields").value);

    //add header row
    //from https://www.w3schools.com/jsref/dom_obj_tablehead.asp
    for(var i = 1; i <= val; i++)
    {
        var th = document.createElement("TH");

        var table = document.getElementById("resultTable");

        var check = "#price" + i.toString();
        var check2 = "#mpg" + i.toString();

        var header_text = "$" + $(check).val() + "/gallon";

        var t = document.createTextNode(header_text);

        th.appendChild(t);
        document.getElementById("table_row_header").appendChild(th);

        /*add rows of data*/
        var row = table.insertRow(i);
        for(var j = 0; j <= val; j++) {

            var cell;

            if(j === 0) {
                cell = row.insertCell(j);
                cell.innerHTML = $(check2).val() + " MPG";
            } else {

                var check2_1 = "#price" + j.toString();
                var check2_2 = "#mpg" + i.toString();

                var perMile = calcCost($(check2_1).val(), $(check2_2).val());

                cell = row.insertCell(j);

                cell.innerHTML = "$" + perMile + "/mile";
            }
        }
    }


    /*hide/show elements*/
    $("#valid1").hide();
    $("#valid2").hide();
    $("#price_form").hide();
    $("#mpg_form").hide();
    $("#start_form").hide();
    $("#valid-div-btn").hide();
    $("#table-div-btn").hide();

    $("#resultTable").show();
    $("#reset_btn").show();

    /*reset forms*/
    document.getElementById("validated_inputs").reset();
    document.getElementById("price_mpg_form").reset();

}

function calcCost(x, y) {
    return (x / y).toFixed(2);
}

/**
 * start app over
 */
function startOver() {
    location.reload();
}
