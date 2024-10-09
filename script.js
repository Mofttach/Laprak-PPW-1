
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
}


function displayCurrentDate() {
    const currentDate = new Date();
    const dateString = currentDate.toDateString(); 
    document.getElementById('current-date').textContent = `Today's date: ${dateString}`;
}


window.onload = function() {
    displayCurrentDate();
};