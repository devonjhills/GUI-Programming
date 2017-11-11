$(document).ready(function () {
    $("#showForm").click(function() {

        var mpg1 = $("#mpg1").val();

        $("#result1-1").val( ($("#price1").val() / mpg1 ).toFixed(2) );
        $("#result2-1").val( ($("#price2").val() / mpg1 ).toFixed(2) );
        $("#result3-1").val( ($("#price3").val() / mpg1 ).toFixed(2) );
        $("#result4-1").val( ($("#price4").val() / mpg1 ).toFixed(2) );
        $("#result5-1").val( ($("#price5").val() / mpg1 ).toFixed(2) );

        $("#resultTable").show();
    });
});