/**
 * Name: Devon Hills, devon_hills@student.uml.edu
 * Affiliation: Computer Science Student, UMass Lowell
 * Course: Comp.4610, GUI Programming I
 * Updated: 12/1/2017
 * Description: Javascript for HW6 - single page web app to dynamically create a comparison table - with added
 * jQuery validation and jQuery UI sliders and tabs
 */


/**
 * Add validation functionality
 */
$(document).ready(function () {

    /**
     * start form validation
     */
    $("#start_form").validate({
        rules: {
            numfields: {
                required: true,
                number: true,
                min: 1,
                max: 5
            }
        },
        messages: {
            numfields: {
                required: "Please fill out this field! :)",
                min: "Please enter a number between 1 and 5 :)",
                max: "Please enter a number between 1 and 5 :)",
                number: "Please enter a valid number :)"
            }
        },

        errorClass: 'label label-danger',

        errorPlacement: function (error, element) {

            error.insertAfter(element.parent());
            error.addClass("help-block");

        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-success").removeClass("has-error");
        }

    });

    /**
     * prices form validation
     */
    $("#inputs_form").validate({
        ignore: ":hidden",
        rules: {
            price1: {
                required: true,
                number: true,
                min: 1
            },
            mpg1: {
                required: true,
                number: true,
                min: 1
            }
        },
        messages: {
            price1: {
                required: "Please fill out this field! :)",
                number: "Please enter a valid number :)",
                min: "Please enter a positive number! :)"
            },
            mpg1: {
                required: "Please fill out this field! :)",
                number: "Please enter a valid number :)",
                min: "Please enter a positive number! :)"
            }
        },

        errorPlacement: function (error, element) {

            error.insertAfter(element.parent());

            error.addClass("help-block");

            error.addClass("label label-danger")

        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".input-group").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".input-group").addClass("has-success").removeClass("has-error");
        }
    });

    // override to add rules to all dynamically added elements
    $.validator.addMethod("mRequired", $.validator.methods.required, "Please fill out this field! :)");
    $.validator.addMethod("mMin", $.validator.methods.min, "Please enter a positive number! :)");
    $.validator.addMethod("mNumber", $.validator.methods.number, "Please enter a valid number! :)");

    $.validator.addClassRules({
        test: {
            mRequired: true,
            mMin: 1,
            mNumber: true
        }
    });

});


/**
 * load number of input forms based on value entered
 * @returns {boolean}
 */
function createFields() {

    if ($("#start_form").valid()) {

        var val = parseFloat(document.getElementById("numfields").value);

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
    } else {
        return false;
    }
}


/**
 * check for valid input and output into lists
 * @returns {boolean}
 */
function validateInput() {

    if ($("#inputs_form").valid()) {

        var val = parseFloat(document.getElementById("numfields").value);

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

        document.getElementById("x1").innerHTML = "$" + x1.toFixed(2).toString();
        document.getElementById("x2").innerHTML = "$" + x2.toFixed(2).toString();
        document.getElementById("x3").innerHTML = "$" + x3.toFixed(2).toString();
        document.getElementById("x4").innerHTML = "$" + x4.toFixed(2).toString();
        document.getElementById("x5").innerHTML = "$" + x5.toFixed(2).toString();

        document.getElementById("y1").innerHTML = y1.toString() + " MPG";
        document.getElementById("y2").innerHTML = y2.toString() + " MPG";
        document.getElementById("y3").innerHTML = y3.toString() + " MPG";
        document.getElementById("y4").innerHTML = y4.toString() + " MPG";
        document.getElementById("y5").innerHTML = y5.toString() + " MPG";


        $("#price_form").hide();
        $("#mpg_form").hide();
        $("#start_form").hide();
        $("#valid-div-btn").hide();

        $("#valid1").show();
        $("#valid2").show();
        $("#back_btn").show();
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
    } else {
        return false;
    }

}


/**
 * tab scripts
 */
$("#tabs").tabs();

$(function () {
    $("#tabs").tabs({
        active: 0
    });
});

/**
 * dynamically create table
 */
function insertContent(content) {
    var activeTab = $("#tabs").tabs('option', 'active');
    activeTab += 1;
    $("#tab-" + activeTab).append(content);
}

function makeTable() {

    var num_tabs = $('#tabs ul li.tab').length + 1;
    $('#tabs .tablist').append('<li class="tab"><a href="#tab-' + num_tabs + '">Table ' + num_tabs + '</a></li>');

    $("#tabs").append('<div id="tab-' + num_tabs + '"></div>');
    $('#tabs').tabs("refresh");
    $('#tabs').tabs("option", "active", -1); //makes the new tab active WORKS

    insertContent("test content" + num_tabs);


    var val = parseFloat(document.getElementById("numfields").value);

    //add header row
    //from https://www.w3schools.com/jsref/dom_obj_tablehead.asp
    for (var i = 1; i <= val; i++) {
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
        for (var j = 0; j <= val; j++) {

            var cell;

            if (j === 0) {
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
    $("#back_btn").show();
    $("#reset_btn").show();


}

/**
 * compute costs
 * @param x
 * @param y
 * @returns {string}
 */
function calcCost(x, y) {
    return (x / y).toFixed(2);
}

/**
 * back function to edit values
 */
function goBack() {
    $("#start_form").show();
    $("#price_form").show();
    $("#mpg_form").show();
    $("#valid-div-btn").show();

    $("#valid1").hide();
    $("#valid2").hide();
    $("#table-div-btn").hide();
    $("#resultTable").hide();
    $("#back_btn").hide();
    $("#reset_btn").hide();

    //clear table for new values
    $('th:contains("$")').remove();
    $('tr:contains("$")').remove();
    $('tr:contains("MPG")').remove();
}

/**
 * start app over
 */
function startOver() {
    location.reload();
}


/**
 * numfields slider
 */
$(function () {
    $("#slider").slider({
        min: 1, max: 5, step: 1, value: 3,
        slide: function (event, ui) {
            $("#numfields").val(ui.value);
        }
    });
    var initialValue = $("#slider").slider("option", "value");
    $("#numfields").val(initialValue);
    $("#numfields").change(function () {
        var oldVal = $("#slider").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1 || newVal > 5) {
            $("#numfields").val(oldVal);
        } else {
            $("#slider").slider("option", "value", newVal);
        }
    });
});


/**
 * price sliders
 */

//price 1
$(function () {
    $("#sliderp1").slider({
        min: 1.00, max: 10.00, step: 0.01, value: 3.00,
        slide: function (event, ui) {
            $("#price1").val(ui.value);
        }
    });
    var initialValue = $("#sliderp1").slider("option", "value");
    $("#price1").val(initialValue);
    $("#price1").change(function () {
        var oldVal = $("#sliderp1").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1.00 || newVal > 10.00) {
            $("#price1").val(oldVal);
        } else {
            $("#sliderp1").slider("option", "value", newVal);
        }
    });
});

//price 2
$(function () {
    $("#sliderp2").slider({
        min: 1.00, max: 10.00, step: 0.01, value: 3.00,
        slide: function (event, ui) {
            $("#price2").val(ui.value);
        }
    });
    var initialValue = $("#sliderp2").slider("option", "value");
    $("#price2").val(initialValue);
    $("#price2").change(function () {
        var oldVal = $("#sliderp2").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1.00 || newVal > 10.00) {
            $("#price2").val(oldVal);
        } else {
            $("#sliderp2").slider("option", "value", newVal);
        }
    });
});


//price 3
$(function () {
    $("#sliderp3").slider({
        min: 1.00, max: 10.00, step: 0.01, value: 3.00,
        slide: function (event, ui) {
            $("#price3").val(ui.value);
        }
    });
    var initialValue = $("#sliderp3").slider("option", "value");
    $("#price3").val(initialValue);
    $("#price3").change(function () {
        var oldVal = $("#sliderp3").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1.00 || newVal > 10.00) {
            $("#price3").val(oldVal);
        } else {
            $("#sliderp3").slider("option", "value", newVal);
        }
    });
});

//price 4
$(function () {
    $("#sliderp4").slider({
        min: 1.00, max: 10.00, step: 0.01, value: 3.00,
        slide: function (event, ui) {
            $("#price4").val(ui.value);
        }
    });
    var initialValue = $("#sliderp4").slider("option", "value");
    $("#price4").val(initialValue);
    $("#price4").change(function () {
        var oldVal = $("#sliderp4").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1.00 || newVal > 10.00) {
            $("#price4").val(oldVal);
        } else {
            $("#sliderp4").slider("option", "value", newVal);
        }
    });
});

//price 5
$(function () {
    $("#sliderp5").slider({
        min: 1.00, max: 10.00, step: 0.01, value: 3.00,
        slide: function (event, ui) {
            $("#price5").val(ui.value);
        }
    });
    var initialValue = $("#sliderp5").slider("option", "value");
    $("#price5").val(initialValue);
    $("#price5").change(function () {
        var oldVal = $("#sliderp5").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1.00 || newVal > 10.00) {
            $("#price5").val(oldVal);
        } else {
            $("#sliderp5").slider("option", "value", newVal);
        }
    });
});

/**
 * mpg sliders
 */

//mpg 1
$(function () {
    $("#sliderm1").slider({
        min: 1, max: 100, step: 1, value: 50,
        slide: function (event, ui) {
            $("#mpg1").val(ui.value);
        }
    });
    var initialValue = $("#sliderm1").slider("option", "value");
    $("#mpg1").val(initialValue);
    $("#mpg1").change(function () {
        var oldVal = $("#sliderm1").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1 || newVal > 100) {
            $("#mpg1").val(oldVal);
        } else {
            $("#sliderm1").slider("option", "value", newVal);
        }
    });
});

//mpg 2
$(function () {
    $("#sliderm2").slider({
        min: 1, max: 100, step: 1, value: 50,
        slide: function (event, ui) {
            $("#mpg2").val(ui.value);
        }
    });
    var initialValue = $("#sliderm2").slider("option", "value");
    $("#mpg2").val(initialValue);
    $("#mpg2").change(function () {
        var oldVal = $("#sliderm2").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1 || newVal > 100) {
            $("#mpg2").val(oldVal);
        } else {
            $("#sliderm2").slider("option", "value", newVal);
        }
    });
});

//mpg 3
$(function () {
    $("#sliderm3").slider({
        min: 1, max: 100, step: 1, value: 50,
        slide: function (event, ui) {
            $("#mpg3").val(ui.value);
        }
    });
    var initialValue = $("#sliderm3").slider("option", "value");
    $("#mpg3").val(initialValue);
    $("#mpg3").change(function () {
        var oldVal = $("#sliderm3").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1 || newVal > 100) {
            $("#mpg3").val(oldVal);
        } else {
            $("#sliderm3").slider("option", "value", newVal);
        }
    });
});

//mpg 4
$(function () {
    $("#sliderm4").slider({
        min: 1, max: 100, step: 1, value: 50,
        slide: function (event, ui) {
            $("#mpg4").val(ui.value);
        }
    });
    var initialValue = $("#sliderm4").slider("option", "value");
    $("#mpg4").val(initialValue);
    $("#mpg4").change(function () {
        var oldVal = $("#sliderm4").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1 || newVal > 100) {
            $("#mpg4").val(oldVal);
        } else {
            $("#sliderm4").slider("option", "value", newVal);
        }
    });
});

//mpg 5
$(function () {
    $("#sliderm5").slider({
        min: 1, max: 100, step: 1, value: 50,
        slide: function (event, ui) {
            $("#mpg5").val(ui.value);
        }
    });
    var initialValue = $("#sliderm5").slider("option", "value");
    $("#mpg5").val(initialValue);
    $("#mpg5").change(function () {
        var oldVal = $("#sliderm5").slider("option", "value");
        var newVal = $(this).val();
        if (isNaN(newVal) || newVal < 1 || newVal > 100) {
            $("#mpg5").val(oldVal);
        } else {
            $("#sliderm5").slider("option", "value", newVal);
        }
    });
});
