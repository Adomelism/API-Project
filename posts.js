const usersListSection = document.querySelector('#content')

async function getPosts() {
    const postsUlElement = document.createElement('ul');
    usersListSection.prepend(postsUlElement);
    const postsList = await fetch(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user`)
    const postsData = await postsList.json();
    postsData.forEach(post => {
        // console.log(post.title)
        // console.log(post.user.name)
        const postLiElement = document.createElement('li');
        postsUlElement.prepend(postLiElement);

        const postLink = document.createElement('a');
        const authorLink = document.createElement('a');

        postLink.href = `./post.html?post_id=` + post.id;
        authorLink.href = `./user.html?user_id=` + post.userId;

        
        postLiElement.append(postLink, ` (${post.comments.length})`, ` - `, authorLink);

        postLink.textContent = post.title;
        authorLink.textContent = post.user.name;

        // console.log(post.comments.length)
    })
}

getPosts();