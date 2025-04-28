document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("miFormulario");
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const carreraSelect = document.getElementById("carrera");
    const checkboxes = document.querySelectorAll('input[name="conferencias"]');

    const maxFullNameLength = 50;
    const maxEmailLength = 50;


    fullNameInput.addEventListener("input", () => {
        if (fullNameInput.value.length > maxFullNameLength) {
            fullNameInput.value = fullNameInput.value.slice(0, maxFullNameLength);
            alert(`El nombre completo no puede exceder los ${maxFullNameLength} caracteres.`);
        }
    });

    emailInput.addEventListener("input", () => {
        if (emailInput.value.length > maxEmailLength) {
            emailInput.value = emailInput.value.slice(0, maxEmailLength);
            alert(`El correo electrónico no puede exceder los ${maxEmailLength} caracteres.`);
        }
    });


    emailInput.addEventListener("input", () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@uamv\.edu\.ni$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.setCustomValidity("El correo debe tener el formato ...@uamv.edu.ni");
        } else {
            emailInput.setCustomValidity("");
        }
        emailInput.reportValidity();
    });


});
