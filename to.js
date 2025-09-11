
function validateCode(event) {
    event.preventDefault();
    const code = document.getElementById('code').value;
    const validCode = "1234";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'https://egypt-academy.github.io/uc/basics-course.html';
    } else {
        alert('كود غير صحيح');
    }
    return false;
}
