const usersListSection = document.querySelector('#content')

async function getAlbums() {
    const albumsList = document.createElement('div');
    albumsList.classList.add('albums-list');
    usersListSection.prepend(albumsList);

    const albumsListData = await fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos')
    const albumsData = await albumsListData.json()
    albumsData.forEach(album => {
        const title = album.title;
        const author = album.user.name;
        const photosCount = album.photos.length;
        const randomIndex = Math.floor(Math.random() * photosCount);
        const randomImage = album.photos[randomIndex];
        const randomImageUrl = randomImage.url;
        const randomImageTitle = randomImage.title;

        const albumItem = document.createElement('div');
        albumItem.classList.add('album-item');

        const albumLink = document.createElement('a');
        albumLink.href = './album.html';

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
}

getAlbums();