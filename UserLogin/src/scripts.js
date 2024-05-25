function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
        return false;
    }

    // Perform further validation if necessary

    return true;  // Submit form if validation passes
}
