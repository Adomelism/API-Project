import navigation from "./navigation.js";

async function init() {

    const albumsListData = await fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos')
    const albumsData = await albumsListData.json()

    const usersListSection = document.querySelector('#content')
    const headerElement = navigation();
    usersListSection.append(headerElement) 
    usersListSection.append(getAlbums(albumsData)) 

}
init();
   
function getAlbums(albumsData) {

    const albumsList = document.createElement('div');
    albumsList.classList.add('albums-list');

    
    albumsData.forEach(album => {
        const title = album.title;
        const author = album.user.name;
        const photosCount = album.photos.length;
        const randomIndex = Math.floor(Math.random() * photosCount);
        const randomImage = album.photos[randomIndex];
        const randomImageUrl = randomImage.thumbnailUrl;
        const randomImageTitle = randomImage.title;

        const albumItem = document.createElement('div');
        albumItem.classList.add('album-item');

        const albumLink = document.createElement('a');
        albumLink.href = './album.html?album_id=' + album.id;

        albumItem.append(albumLink);

        const albumTitle = document.createElement('h2');
        albumTitle.textContent = title;

        const albumAuthor = document.createElement('div');
        albumAuthor.textContent = `Author: ${author}`;

        const albumImage = document.createElement('img');
        albumImage.src = randomImageUrl;
        albumImage.alt = randomImageTitle;

        albumLink.append(albumTitle, albumAuthor, albumImage);
        
        albumsList.append(albumItem);
    })
    return albumsList;
}

