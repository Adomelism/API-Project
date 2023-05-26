import navigation from "./navigation.js";

async function init() {
    const usersListSection = document.querySelector('#content')
    const headerElement = navigation();
    usersListSection.append(headerElement)

    const postsList = await fetch(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user`)
    const postsData = await postsList.json();

    usersListSection.append(getPosts(postsData));

}
init();

function getPosts(postsData) {
    const postsUlElement = document.createElement('ul');
    
    postsData.forEach(post => {

        const postLiElement = document.createElement('li');
        postsUlElement.prepend(postLiElement);

        const postLink = document.createElement('a');
        const authorLink = document.createElement('a');

        postLink.href = `./post.html?post_id=` + post.id;
        authorLink.href = `./user.html?user_id=` + post.userId;
        
        postLink.textContent = post.title;
        authorLink.textContent = post.user.name;

        postLiElement.append(postLink, ` (${post.comments.length})`, ` - `, authorLink);
    })
    return postsUlElement;
}
