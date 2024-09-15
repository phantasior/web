document.addEventListener("DOMContentLoaded", () => {
    const postsSection = document.querySelector(".posts");

    const preloader = document.createElement("div");
    preloader.className = "preloader";
    preloader.innerHTML = "<p>Loading...</p>";
    postsSection.appendChild(preloader);

    Promise.all([fetchRandomPost(postsSection), fetchRandomPost(postsSection)])
        .finally(() => preloader.style.display = "none");
});

function getRandomPostId() {
    return Math.floor(Math.random() * 100) + 1;
}

function fetchRandomPost(postsSection) {
    const randomPostId = getRandomPostId();

    return fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const article = document.createElement("article");
            article.className = "article";
            article.innerHTML = `
                <h2 class="article__title">${data.title}</h2>
                <p class="article__content">${data.body}</p>
            `;
            postsSection.appendChild(article);
        })
        .catch(error => {
            const errorMessage = document.createElement("p");
            errorMessage.className = "error";
            errorMessage.innerHTML = "Something went wrong";
            postsSection.appendChild(errorMessage);
            console.error("There was a problem with the fetch operation:", error);
        });
}
