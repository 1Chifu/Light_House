
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); //

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email.endsWith("@lighthouse.pe")) {
        alert("El correo debe ser corporativo (@lighthouse.pe)");
        return;
    }

    if (password.trim() === "") {
        alert("La contraseña no puede estar vacía.");
        return;
    }

    window.location.href = "usuario.html";
});
