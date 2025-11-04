document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("search_button");
    const input = document.getElementById("search_input");
    const resultDiv = document.getElementById("result");

    button.addEventListener("click", function() {
        const query = encodeURIComponent(input.value.trim());
// utilize fetch to search for heroes
        fetch(`superheroes.php?query=${query}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data; // Display the returned HTML in the div
            })

    });
});

//Java script code for styling:
const logo = document.getElementById("avenger_logo");
const logos = ["shield.png", "Spidey.png","panther.png", "HULK.png"];
let current = 0;

setInterval(() => {


    logo.style.opacity = 0;

    setTimeout(() => {

        current = (current + 1) % logos.length;

        logo.src = logos[current];


        logo.style.opacity = 1;
    }, 1000);
}, 3000);

