function viewHint() {
    document.getElementById("hint").classList.remove("hidden");
}
function hideHint() {
    document.getElementById("hint").classList.add("hidden");
}

function checkAnswer() {
    const answer = document.getElementById("userInput").value;
    if (answer == "Solve this challenge!") {
        document.getElementById("result").innerText = "Correct! It's time you move up to level 2.";
        nextLevelButton();

    } else {
        document.getElementById("result").innerText = "Incorrect, try this one again!";
    }
}

const hashToPlaintext = {
    "cc8b1415557f58abf2e2fa83c2ea6c91": "challenge",
};

function checkHash() {
    const userInput = document.getElementById("userInput").value;
    const correctAnswer = hashToPlaintext["cc8b1415557f58abf2e2fa83c2ea6c91"];
    if (userInput == correctAnswer) {
        document.getElementById("result").innerText = "Great job! Lets go to Level 3.";
        level3Button();
    } else {
        document.getElementById("result").innerText = "Sorry, that's wrong. Try again!";
    }
}

function level3Button() {
    const level3Button = document.createElement("button");
    level3Button.textContent = "Move to Level 3!";
    level3Button.onclick = function() {
        window.location.href = "level3.html";
    };
    document.getElementById("nextLevel3").appendChild(level3Button);
}

function nextLevelButton() {
    const nextLevelButton = document.createElement("button");
    nextLevelButton.textContent = "Move to Level 2!";
    nextLevelButton.onclick = function() {
        window.location.href = "level2.html";
    };
    document.getElementById("nextLevel").appendChild(nextLevelButton);
}

function checkFlag() {
    const flag = document.getElementById("userFlagInput").value;
    const correctFlag = "babyfirstCTF{SOURCE_OF_THE_FLAG}";
    if (flag == correctFlag) {
        document.getElementById("flagResult").innerText = "Yippee! You got it! Head to Level 4.";
        const nextLevelButton = document.createElement("button");
        nextLevelButton.textContent = "Go to Level 4";
        nextLevelButton.onclick = function() {
            window.location.href = "level4.html";
        };
        document.body.appendChild(nextLevelButton);
    } else {
        document.getElementById("flagResult").innerText = "Hmm... not quite! Try again";
    }
}


function getFinalFlag(event) {
    event.preventDefault(); //Prevent the form from submitting (refreshing the page)

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "adminpassword") {
        let flag = "babyfirstCTF{FLAG_LOCKED_LOGIN}";
        document.getElementById("flag").textContent = flag;
        document.getElementById("flagMessage").style.display = "block";
    } else {
        alert("Wrong username or password");
    }
}

//event listener to login button
document.getElementById('loginButton').addEventListener('click', getFinalFlag);

function checkFinalFlag() {
    const flag = document.getElementById("userFinalInput").value;
    const FINAL_FLAG = "babyfirstCTF{FLAG_LOCKED_LOGIN}";
    if (flag == FINAL_FLAG) {
        document.getElementById("finalResult").innerText = "YAY! You have finished Baby's First CTF!"
    } else {
        document.getElementById("finalResult").innerText = "Sorry, that's not the correct flag."
    }
}


