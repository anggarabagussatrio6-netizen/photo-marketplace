
async function registerUser() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Semua data harus diisi.");
        return;
    }

    if (password.length < 6) {
        alert("Password minimal 6 karakter.");
        return;
    }

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                name: name
            }
        }
    });

    if (error) {
        alert("Pendaftaran gagal: " + error.message);
        return;
    }

    if (data.session) {
        alert("Pendaftaran berhasil!");
        window.location.href = "dashboard.html";
    } else {
        alert("Pendaftaran berhasil! Silakan cek email untuk verifikasi akun.");
        window.location.href = "login.html";
    }
}


async function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Email dan password harus diisi.");
        return;
    }

    const { error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert("Login gagal: " + error.message);
        return;
    }

    window.location.href = "dashboard.html";
}


async function logoutUser() {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        alert("Logout gagal: " + error.message);
        return;
    }

    window.location.href = "index.html";
}


async function checkLogin() {
    const { data, error } = await supabaseClient.auth.getUser();

    if (error || !data.user) {
        window.location.href = "login.html";
    }
}
