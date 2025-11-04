document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("search_button");

    button.addEventListener("click", function() {
        // Code that utilizes fetch function to Make AJAX request
        fetch("superheroes.php")


            .then(response => response.text()) // PHP outputs HTML


            .then(data => {

                const temp = document.createElement("div");
                temp.innerHTML = data;


                const hero_names = Array.from(temp.querySelectorAll("li"))
                    .map(li => li.textContent);

                //alert box with .join("\n") for spacing
                alert(hero_names.join("\n"));
            })

    });
});
