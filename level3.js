function checkFlag() {
    let userFlag = document.getElementById("flagInput").value;
    let correctFlag = "babyfirstCTF{SOURCE_OF_THE_FLAG}";

    if (userFlag === correctFlag) {
        document.getElementById("flagResult").innerHTML = "Yippee! You got it! Head to level 4!";
        let nextLevelContainer = document.getElementById("nextLevelContainer");
        nextLevelContainer.innerHTML = '<button onclick="goToLevel4()" id="level4Button">Go to Level 4</button>';
    } else {
        document.getElementById("flagResult").innerHTML = "Not quite... try again!";
    }
}

function goToLevel4() {
    window.location.href = "level4.html";
}