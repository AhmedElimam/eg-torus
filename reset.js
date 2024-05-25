// const baseUrl = "http://localhost:4000/api/user/";
const baseUrl = "https://finish-api.onrender.com/api/user/";

document.getElementById('continueButton').addEventListener('click', async () => {
    const email = document.getElementById('email').value;

    try {
        const response = await fetch(baseUrl + 'forgetPassword', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                email: email
            })
        });

        if (response.ok) {
            window.location.href = 'newpass.html';
            localStorage.setItem('temp-email', email);
            // cache email for 10 minutes
            setTimeout(() => {
                localStorage.removeItem('email');
            }, 600000);
        } else {
            const responseData = await response.json();
            console.error('Failed to reset password:', responseData);
            // alert('Failed to reset password. Please try again later.');
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        // alert('An error occurred while resetting password. Please try again later.');
    }
});
