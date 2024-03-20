document.getElementById('sendMessageButton').addEventListener('click', function() {
    // Get all input elements
    var inputs = document.querySelectorAll('#contactForm input[type="text"], #contactForm textarea');
    var allFilled = true;

    // Check if all inputs are filled
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            allFilled = false;
            break;
        }
    }

    // If all inputs are filled, redirect to the specified page
    if (allFilled) {
        window.location.href = 'http://www.example.com'; // Replace with your desired URL
    } else {
        alert('Please fill all the fields.');
    }
});
function redirectPage() {
    // Replace 'http://www.example.com' with the URL you want to redirect to
    window.location.href = 'http://www.outlook.com';
}
