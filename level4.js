function checkAnswers() {
    const answers = {
        q1: "10-11-2024",
        q2: "Nikon",
        q3: "Yes",
        q4: "4.3",
        q5: "13.6"
    };
    let correct = 0;
    for (let key in answers) {
        let userAnswer = document.getElementById(key).value.trim();
        if (userAnswer == answers[key]) {
            correct++;
        }
        }
        let resultText = `You got ${correct} out of ${Object.keys(answers).length} correct!`;
        document.getElementById("result").innerText = resultText;

        if (correct == Object.keys(answers).length) {
            const nextButton = document.getElementById("nextLevelButton"); 
            nextButton.style.display = "block"; 
            nextButton.onclick = function() {
                window.location.href = "level5.html"; 
            };
        } else {
            document.getElementById("nextLevelButton").style.display = "none";
        }
        
}