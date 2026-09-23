const passwordInput = document.getElementById("password");
const enterButton = document.getElementById("enter-button");

const passwordPage = document.getElementById("password-page");
const memoryPage = document.getElementById("memory-page");
const memoryBox = document.querySelector(".memory-box");

const universePage = document.getElementById("universe-page");

const correctPassword = "purple7";


// =========================
// PASSWORD
// =========================

enterButton.addEventListener("click", function () {

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {

        passwordPage.style.display = "none";
        memoryPage.style.display = "block";

    } else {

        alert("Hmm... that's not the password 👀");

    }

});


// =========================
// MEMORY BOX → UNIVERSE
// =========================

memoryBox.addEventListener("click", function () {

    memoryPage.style.display = "none";
    universePage.style.display = "block";

});


// =========================
// MEMORIES PAGE
// =========================

const memoriesCard =
    document.getElementById("memories-card");

const memoriesPage =
    document.getElementById("memories-page");

const backToUniverseButton =
    document.getElementById("back-to-universe");


memoriesCard.addEventListener("click", function () {

    universePage.style.display = "none";
    memoriesPage.style.display = "block";

});


backToUniverseButton.addEventListener("click", function () {

    memoriesPage.style.display = "none";
    universePage.style.display = "block";

});


// =========================
// SOUNDTRACK PAGE
// =========================

const soundtrackCard =
    document.getElementById("soundtrack-card");

const soundtrackPage =
    document.getElementById("soundtrack-page");

const backFromSoundtrack =
    document.getElementById("back-from-soundtrack");


soundtrackCard.addEventListener("click", function () {

    universePage.style.display = "none";
    soundtrackPage.style.display = "block";

});


backFromSoundtrack.addEventListener("click", function () {

    soundtrackPage.style.display = "none";
    universePage.style.display = "block";

});


// =========================
// LITTLE THINGS PAGE
// =========================

const littleThingsCard =
    document.getElementById("little-things-card");

const littleThingsPage =
    document.getElementById("little-things-page");

const backFromLittleThings =
    document.getElementById("back-from-little-things");


littleThingsCard.addEventListener("click", function () {

    universePage.style.display = "none";
    littleThingsPage.style.display = "block";

});


backFromLittleThings.addEventListener("click", function () {

    littleThingsPage.style.display = "none";
    universePage.style.display = "block";

});


// =========================
// ARMY CORNER PAGE
// =========================

const armyCard =
    document.getElementById("army-card");

const armyPage =
    document.getElementById("army-page");

const backFromArmy =
    document.getElementById("back-from-army");


armyCard.addEventListener("click", function () {

    universePage.style.display = "none";
    armyPage.style.display = "block";

});


backFromArmy.addEventListener("click", function () {

    armyPage.style.display = "none";
    universePage.style.display = "block";

});