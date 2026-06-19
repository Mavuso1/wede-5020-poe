const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const product = document.getElementById("product").value;
        const response = document.getElementById("enquiryResponse");

        let message = "";

        switch (product) {

            case "Xbox Series S":
                message = "The Xbox Series S is available for R5 999.";
                break;

            case "PlayStation 4 Slim":
                message = "The PlayStation 4 Slim is available for R4 999.";
                break;

            case "Controller":
                message = "Controllers are available from R799.";
                break;

            case "Racing Wheel":
                message = "Racing wheels are available from R2 999.";
                break;

            default:
                message = "Please select a product.";
        }

        response.textContent = message;

    });

}