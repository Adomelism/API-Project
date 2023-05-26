import navigation from "./navigation.js";
import { getUrlParams, fetchData } from "./functions.js";

async function init() {
    const searchContentElement = document.querySelector('#content')
    const headerElement = navigation();
    searchContentElement.append(headerElement);

    const searchPhrase = getUrlParams('search');
    console.log(searchPhrase);


    const searchPosts = await fetchData(`https://jsonplaceholder.typicode.com/posts?q=${searchPhrase}`)
    const searchAlbums = await fetchData(`https://jsonplaceholder.typicode.com/albums?q=${searchPhrase}`)
    const searchUsers = await fetchData(`https://jsonplaceholder.typicode.com/users?q=${searchPhrase}`)
    console.log(searchPosts)
    
   if (searchPosts.length === 0 && searchAlbums.length === 0 && searchUsers.length === 0) {
    const noResultsFound = document.createElement('h1')
    noResultsFound.textContent = `No results found`
    searchContentElement.append(noResultsFound);
    return;
   }

   searchContentElement.append(postsFound(searchPosts))
   searchContentElement.append(albumsFound(searchAlbums))
   searchContentElement.append(usersFound(searchUsers))

}
init();


function postsFound(searchPosts) {
    const postsResult = document.createElement('div')
    searchPosts.forEach(post => {
        const postsUlElement = document.createElement('ul')
        postsResult.append(postsUlElement)
        const postsLiElement = document.createElement('li')
        postsUlElement.append(postsLiElement)
        const singlePost = document.createElement('a')
        postsLiElement.append(singlePost)
        singlePost.href = `./post.html?post_id=` + post.id
        singlePost.textContent = `Post: ${post.title}`

    });
    return postsResult;
  }

  function albumsFound(searchAlbums) {
    const albumsResult = document.createElement('div')
    searchAlbums.forEach(album => {
        const albumUlElement = document.createElement('ul')
        albumsResult.append(albumUlElement)
        const albumLiElement = document.createElement('li')
        albumUlElement.append(albumLiElement)
        const singleAlbum = document.createElement('a')
        albumLiElement.append(singleAlbum)
        singleAlbum.href = `./album.html?album_id=` + album.id
        singleAlbum.textContent = `Album: ${album.title}`
    });
    return albumsResult;
  }

  function usersFound(searchUsers) {
    const usersResult = document.createElement('div')
    searchUsers.forEach(user => {
        const userUlElement = document.createElement('ul')
        usersResult.append(userUlElement)
        const userLiElement = document.createElement('li')
        userUlElement.append(userLiElement)
        const singleuser = document.createElement('a')
        userLiElement.append(singleuser)
        singleuser.href = `./user.html?user_id=` + user.id
        singleuser.textContent = `User: ${user.name}`
    });
    return usersResult;
  }