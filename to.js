
function validateCode(event) {
    event.preventDefault();
    const code = document.getElementById('code').value;
    const validCode = "TSH2007";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'contet.html';
    } else {
        alert('كود غير صحيح');
    }
    return false;
}

