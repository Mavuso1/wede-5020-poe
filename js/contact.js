const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("contactEmail").value;
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("userMessage").value;

        const subject = encodeURIComponent(messageType);

        const body = encodeURIComponent(
            "Name: " + fullName + "\n\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        );

        window.location.href =
            "mailto:info@amanigaminghub.co.za" +
            "?subject=" + subject +
            "&body=" + body;

    });

}