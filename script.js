$(document).ready(function () {
        $(".text").hide().show(2500);
})

emailjs.init("Qql56KKayAZ7N5Eub")

document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
        };
        emailjs.send("service_437g02b", "template_mtom7s8", formData)
                .then(function (response) {
                        alert("Email sent successfully!");
                }, function (error) {
                        alert("Failed to send email. Please try again.");
                });
})
