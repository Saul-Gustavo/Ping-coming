const submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const mensaje = document.querySelector('.mensaje');
    const emailInput = document.querySelector('.input-email');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
        mensaje.style.display = "block"
        mensaje.textContent = "Please provide a valid email address";
        emailInput.style.border = "1px solid red";
    } else {
        mensaje.style.display = "none"
        mensaje.textContent = ""
        emailInput.style.border = "1px solid hsl(0, 0%, 59%)";
    }
})







