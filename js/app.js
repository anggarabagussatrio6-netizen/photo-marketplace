function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Semua data harus diisi.");
        return;
    }

    localStorage.setItem("demoUser", JSON.stringify({
        name: name,
        email: email
    }));

    alert("Pendaftaran berhasil!");

    window.location.href = "login.html";
}


function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("demoUser"));

    if (!user || user.email !== email || !password) {
        alert("Email atau password salah.");
        return;
    }

    localStorage.setItem("loggedIn", "true");

    window.location.href = "dashboard.html";
}


function logoutUser() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}


function checkLogin() {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        window.location.href = "login.html";
    }
}
