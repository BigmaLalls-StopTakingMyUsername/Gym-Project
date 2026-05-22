document.addEventListener("DOMContentLoaded", function() {

    const regForm = document.getElementById("registrationForm");
    if (regForm) {
        regForm.addEventListener("submit", function(e) {

            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();

            e.preventDefault();
            
            alert(`Thank you for signing up for this gym.`);
            regForm.reset();
        });

        document.getElementById("clearBtn").addEventListener("click", function() {
            regForm.reset();
        });
    }
});