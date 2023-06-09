import navigation from "./navigation.js";
// import PhotoSwipeLightbox from "./photoswipe/photoswipe-lightbox.esm.js";

async function init() {
    const contentElement = document.querySelector('#content')
    const headerElement = navigation();
    contentElement.append(headerElement)

    const queryParams = location.search;
    const urlParams = new URLSearchParams(queryParams);
    const id = urlParams.get('album_id');

    console.log(id)

    if (!id) {
        contentElement.innerHTML = `<h1>Something went wrong...</h1>
                                    <p>Search for more albums <a href="./albums.html">here</a>.</p>`
        return;
      }

    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}?_expand=user&_embed=photos`)
    const albumData = await res.json()

    const albumWrapperElement = createAlbum(albumData)

    contentElement.append(albumWrapperElement)
}

init();

function createAlbum(albumData) {
    const albumWrapper = document.createElement('div')
    albumWrapper.classList.add('album-wrapper')

    const albumContent = document.createElement('div')
    albumContent.classList.add('album-content')

    const albumTitle = document.createElement('h1')
    albumTitle.textContent = albumData.title
    
    const albumAuthor = document.createElement('a')
    albumAuthor.href = `./users.html?user_id=` + albumData.user.id
    albumAuthor.textContent = albumData.user.name

    albumContent.append(albumTitle, albumAuthor)

    const albumPhotoList = document.createElement('div')
    albumPhotoList.classList.add('album-photo-list')

    albumData.photos.forEach(photo => {
        const photoList = document.createElement('img')
        photoList.src = photo.thumbnailUrl

        albumPhotoList.append(photoList)

    });

    albumWrapper.append(albumContent, albumPhotoList)
    return albumWrapper;
}

