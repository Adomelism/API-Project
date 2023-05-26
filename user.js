import navigation from "./navigation.js";

async function init() {
    const usersListSection = document.querySelector('#content')
    const headerElement = navigation()
    usersListSection.append(headerElement) 
    const queryParams = location.search;
    const urlParams = new URLSearchParams(queryParams);
    const id = urlParams.get('user_id');

    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts&_embed=albums`)
    const userInfo = await res.json()

    const userDataElement = userData(userInfo);
    const userPostsElement = userPosts(userInfo);
    const userAlbumsElement = userAlbums(userInfo);

    usersListSection.append(userDataElement, userPostsElement, userAlbumsElement);

}
init();


function userData(userInfo) {    
    const userDataList = document.createElement('div')
    userDataList.classList.add('user-data-list')

    const name = userInfo.name
    const nick = userInfo.username
    const email = userInfo.email
    // console.log(userInfo)
    const address = `${userInfo.address.street}, ${userInfo.address.suite}, ${userInfo.address.city}, ${userInfo.address.zipcode}`
    const phone = userInfo.phone
    const website = userInfo.website
    const company = userInfo.company.name
    
    const userName = document.createElement('h2')
    userName.textContent = name;

    const nickName = document.createElement('h3')
    nickName.textContent = `(Nickname: ${nick})`
    
    const userEmail = document.createElement('h4')
    const emailLink = document.createElement('a');
    userEmail.append(emailLink);
    emailLink.href = `mailto: ${email}`
    emailLink.textContent = `Email: ${email}`;

    const userAddress = document.createElement('h4')
    const addressLink = document.createElement('a')
    addressLink.href = `https://www.google.com/maps/search/?api=1&query=${userInfo.address.geo.lat},${userInfo.address.geo.lng}`
    addressLink.textContent = `Address: ${address}`;
    userAddress.append(addressLink)
    
    const userPhone = document.createElement('h4')
    const phoneLink = document.createElement('a');
    userPhone.append(phoneLink);
    phoneLink.href = `tel:${phone}`;
    phoneLink.textContent = `Phone: ${phone}`;

    const userWebsite = document.createElement('h4')
    const websiteLink = document.createElement('a')
    userWebsite.append(websiteLink)
    websiteLink.href = `https://www.${website}`
    websiteLink.textContent = `Website: ${website}`;

    const userCompany = document.createElement('h4')
    userCompany.textContent = `Company: ${company}`;
    
    userDataList.append(userName, nickName, userEmail, userAddress, userPhone, userWebsite, userCompany)


    return userDataList
}

function userPosts(userInfo) {
    const postsList = document.createElement('div')
    postsList.classList.add('posts-lists')

    const postitle = document.createElement('h2')
    const postsUlElement = document.createElement('ul')
    postsList.append(postitle, postsUlElement)
    postitle.textContent = `Posts:`

    userInfo.posts.forEach(post => {
        const postLiElement = document.createElement('li')
        postsUlElement.append(postLiElement)
        console.log(post.id)

        const postLink = document.createElement('a')
        postLink.href = `./post.html?post_id=` + post.id
        postLink.textContent = post.title
        postLiElement.append(postLink);

    });
    return postsList
}

function userAlbums(userInfo) {

    const albumsList = document.createElement('div')
    albumsList.classList.add('albums-list')

    const albumTitle = document.createElement('h2')
    const albumUlElement = document.createElement('ul')
    albumsList.append(albumTitle, albumUlElement)
    albumTitle.textContent = `Albums:`

    userInfo.albums.forEach(album => {
        const albumLiElement = document.createElement('li')
        albumUlElement.append(albumLiElement)

        const albumLink = document.createElement('a')
        albumLink.href = `./album.html?album_id=` + album.id
        albumLink.textContent = album.title
        albumLiElement.append(albumLink)
    });
    return albumsList
}
