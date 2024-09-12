document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('postForm');
    const postContainer = document.getElementById('postContainer');
    const postText = document.getElementById('postText');

    // Load existing posts from localStorage when the page loads
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Function to create a new post element
    function createPostElement(content) {
        const article = document.createElement('article');
        article.classList.add('article');
        const paragraph = document.createElement('p');
        paragraph.classList.add('article__content');
        paragraph.textContent = content;
        article.appendChild(paragraph);
        return article;
    }

    // Render all posts on page load
    posts.forEach(post => {
        const postElement = createPostElement(post);
        postContainer.appendChild(postElement);
    });

    // Handle form submission
    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get post content from the textarea
        const postContent = postText.value.trim();

        if (postContent !== '') {
            // Create new post element and add it to the container
            const newPost = createPostElement(postContent);
            postContainer.appendChild(newPost);

            // Save the post to localStorage
            posts.push(postContent);
            localStorage.setItem('posts', JSON.stringify(posts));

            // Clear the textarea
            postText.value = '';
        }
    });
});
