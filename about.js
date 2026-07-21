// ===============================
// Blood Group Information
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const bloodData = {

        "O-": {
            donate: "All Blood Groups",
            receive: "O-",
            info: "O- is called the Universal Donor."
        },

        "O+": {
            donate: "O+, A+, B+, AB+",
            receive: "O+, O-",
            info: "O+ is the most common blood group."
        },

        "A-": {
            donate: "A-, A+, AB-, AB+",
            receive: "A-, O-",
            info: "A- is one of the rare blood groups."
        },

        "A+": {
            donate: "A+, AB+",
            receive: "A+, A-, O+, O-",
            info: "A+ is the second most common blood type."
        },

        "B-": {
            donate: "B-, B+, AB-, AB+",
            receive: "B-, O-",
            info: "B- is a rare blood group."
        },

        "B+": {
            donate: "B+, AB+",
            receive: "B+, B-, O+, O-",
            info: "B+ blood can help both B+ and AB+ patients."
        },

        "AB-": {
            donate: "AB-, AB+",
            receive: "AB-, A-, B-, O-",
            info: "AB- is one of the rarest blood groups."
        },

        "AB+": {
            donate: "AB+",
            receive: "All Blood Groups",
            info: "AB+ is called the Universal Recipient."
        }

    };

    function searchBlood() {

        const bloodInput = document.getElementById("bloodGroup");
        const result = document.getElementById("result");

        if (!bloodInput || !result) {
            return;
        }

        let group = bloodInput.value.trim().toUpperCase();

        if (group === "") {

            result.innerHTML = "<h3>Please enter a blood group.</h3>";
            return;

        }

        if (bloodData[group]) {

            result.innerHTML = `
                <h2>${group}</h2>
                <hr><br>

                <p><strong>Donate To:</strong><br>
                ${bloodData[group].donate}</p>

                <br>

                <p><strong>Receive From:</strong><br>
                ${bloodData[group].receive}</p>

                <br>

                <p><strong>Information:</strong><br>
                ${bloodData[group].info}</p>
            `;

        } else {

            result.innerHTML = `
                <h2 style="color:red;">Invalid Blood Group!</h2>

                <p>
                Please enter one of these blood groups:
                <br><br>

                O+, O-, A+, A-, B+, B-, AB+, AB-
                </p>
            `;

        }

    }

    // Make search function available for onclick
    window.searchBlood = searchBlood;

    // Search when Enter key is pressed
    const bloodInput = document.getElementById("bloodGroup");

    if (bloodInput) {

        bloodInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();
                searchBlood();

            }

        });

    }

    console.log("BloodCare Website Loaded Successfully.");

});