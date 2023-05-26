// 9.3. Šiame puslapyje atvaizduoti paieškos rezultatą.
// 9.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.

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
    // console.log(searchAlbums)
    // console.log(searchUsers)
    
   if (searchPosts.length === 0 && searchAlbums.length === 0 && searchUsers.length === 0) {
    const noResultsFound = document.createElement('h1')
    noResultsFound.textContent = `No results found`
    searchContentElement.append(noResultsFound);
    return;
   }

   searchContentElement.append(postsFound())

  function postsFound() {
    const result = document.createElement('div')
    searchPosts.forEach(post => {
        const posts = document.createElement('ul')
        result.append(posts)
        const singlePost = document.createElement('a')
        singlePost.href = `./post.html?post_id=` + post.id
        singlePost.textContent = post.title
        result.append(singlePost)
    });
    return result;
  }
  
   
}
init()