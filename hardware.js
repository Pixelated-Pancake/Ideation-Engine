let ideas = [
    "Weather Station",
    "Scrabble Scorekeeper",
    "Random Password Generator",
    "Personal Portfolio"
];

function generateIdea() {
    let randomIndex = Math.floor(Math.random() * ideas.length);
    let selectedIdea = ideas[randomIndex];
    document.getElementById("idea").textContent = selectedIdea;
}

