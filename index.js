function getRecipes() {
    const ingredients = document.getElementById('ingredients').value;

    fetch("https://your-app.onrender.com/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("recipeResult").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById("recipeResult").innerText = error;
    });
}

function getYoutube() {
    const subject = document.getElementById("youtubeSubject").value;
    fetch(`https://your-app.onrender.com/youtube?subject=${encodeURIComponent(subject)}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("youtubeResult").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById("youtubeResult").innerText = error;
    });
}