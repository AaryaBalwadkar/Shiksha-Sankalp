document.addEventListener('DOMContentLoaded', function () {
    const emojis = document.querySelectorAll('.emoji div');
    const textarea = document.querySelector('.textarea');
    const btn = document.querySelector('.btn');
    const inputs = document.querySelectorAll('.input');
    let selectedRating = 0;

    // Add click event listeners to each emoji
    emojis.forEach((emoji) => {
        emoji.addEventListener('click', function () {
            selectedRating = emoji.getAttribute('data-value');
            activateFeedback();
        });
    });

    function activateFeedback() {
        // Activate the textarea and the send button when an emoji is selected
        textarea.classList.add('textarea--active');
        btn.classList.add('btn--active');
    }

    // Handle the submit action for the feedback form
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        const feedback = textarea.value;
        const name = inputs[0].value;
        const contact = inputs[1].value;
        const email = inputs[2].value;

        if (!feedback || selectedRating == 0 || !name || !contact || !email) {
            alert("Please fill in all fields and select a rating.");
        } else {
            // Handle the form submission (e.g., send to server)
            console.log({
                rating: selectedRating,
                feedback: feedback,
                name: name,
                contact: contact,
                email: email
            });

            alert("Feedback submitted successfully!");
            resetFeedbackForm();
        }
    });

    function resetFeedbackForm() {
        // Reset the form after submission
        textarea.classList.remove('textarea--active');
        textarea.value = '';
        btn.classList.remove('btn--active');
        selectedRating = 0;
        inputs.forEach(input => input.value = ''); // Clear all input fields
    }
});
document.getElementById('essayForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const essay = document.getElementById('essay').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${name} (${email}): ${essay}`;
    
    // Append the new essay to the list
    document.getElementById('essaysList').appendChild(li);

    // Clear the form fields
    document.getElementById('essayForm').reset();
});
