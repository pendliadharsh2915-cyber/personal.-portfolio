function addPost() {

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if(title === "" || content === "") {
        alert("Fill all fields");
        return;
    }

    let post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>

        <input type="text" placeholder="Write a comment" class="commentInput">
        <button onclick="addComment(this)">Comment</button>

        <ul></ul>
    `;

    document.getElementById("posts").appendChild(post);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function addComment(button) {

    let commentInput =
        button.previousElementSibling;

    let comment = commentInput.value;

    if(comment === "") return;

    let li = document.createElement("li");
    li.innerText = comment;

    button.nextElementSibling.appendChild(li);

    commentInput.value = "";
}