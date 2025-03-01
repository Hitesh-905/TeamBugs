function checkAnswer(answer) {
    const correctAnswer = 'C'; // Correct answer is C: Paris
    const feedback = document.getElementById('feedback');
    
    if (answer === correctAnswer) {
        feedback.textContent = "Correct! 🎉";
        feedback.style.color = 'green';
    } else {
        feedback.textContent = "Incorrect! Try again. 😞";
        feedback.style.color = 'red';
    }
}
