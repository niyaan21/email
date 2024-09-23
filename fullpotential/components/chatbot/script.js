// FAQ Search Functionality
function filterFAQs() {
    const searchInput = document.getElementById('faq-search').value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('h3').textContent.toLowerCase();
        const answer = item.querySelector('p').textContent.toLowerCase();

        if (question.includes(searchInput) || answer.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Chatbot Logic
function sendMessage(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chat-input').value.trim();
        if (input) {
            displayMessage('User', input);
            getBotResponse(input);
            document.getElementById('chat-input').value = ''; // Clear input
        }
    }
}

function displayMessage(sender, message) {
    const chatOutput = document.getElementById('chat-output');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${sender}: ${message}`;
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto scroll to the bottom
}

function getBotResponse(userMessage) {
    let response = 'Sorry, I don\'t understand that question.';

    // Simple FAQ matching
    if (userMessage.toLowerCase().includes('services')) {
        response = 'We summarize emails, create a new interface, and categorize your emails from most to least important.';
    } else if (userMessage.toLowerCase().includes('devices')) {
        response = 'You can use Fosffiliate on any tablet, phone, or laptop that has access to the Play Store or App Store.';
    } else if (userMessage.toLowerCase().includes('free')) {
        response = 'No, but we have a demo on our website to try out the user interface.';
    } else if (userMessage.toLowerCase().includes('privacy')) {
        response = 'Please refer to our Privacy Policy at the link above.';
    }

    displayMessage('Bot', response);
}
