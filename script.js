$(document).ready(function(){
    // Close modal when clicking on close button
    $(".close").click(function(){
        $("#resultModal").hide();
    });

    // Validate form on submission
    $("#taxForm").submit(function(e){
        e.preventDefault();
        var grossIncome = parseFloat($("#gross-income").val());
        var extraIncome = parseFloat($("#extra-income").val());
        var deductions = parseFloat($("#deductions").val());
        var age = $("#age").val();

        // Check if any field is empty
        if(isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions)) {
            $(".error-icon").show();
            return;
        }

        // Hide error icons
        $(".error-icon").hide();

        // Calculate tax
        var overallIncome = grossIncome + extraIncome - deductions;
        var tax = 0;
        if(overallIncome > 800000) {
            if(age === "<40") {
                tax = 0.3 * (overallIncome - 800000);
            } else if(age === ">=40&<60") {
                tax = 0.4 * (overallIncome - 800000);
            } else if(age === ">=60") {
                tax = 0.1 * (overallIncome - 800000);
            }
        }

        // Show result in modal
        var resultText = "Overall Income: " + overallIncome.toFixed(2) + "<br>";
        resultText += "Tax: " + tax.toFixed(2);
        $("#result").html(resultText);
        $("#resultModal").show();
    });
});
