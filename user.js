const usersListSection = document.querySelector('#content')


async function userData() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users/1?_embed=posts&_embed=albums')
    const userInfo = await res.json()

    const name = userInfo.name
    const nick = userInfo.username
    const email = userInfo.email
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
    
    
    usersListSection.prepend(userName, nickName, userEmail, userAddress, userPhone, userWebsite, userCompany);
}
userData();

async function userPosts() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users/1?_embed=posts&_embed=albums')
    const userInfo = await res.json()

    const postitle = document.createElement('h2')
    postitle.textContent = `Posts:`

    userInfo.posts.forEach(post => {
        console.log(post.title)
        const postList = document.createElement('p')
        const postLink = document.createElement('a')
        postLink.href = `./post.html`
        postLink.textContent = post.title

        usersListSection.append(postitle, postList, postLink)
    });

}
userPosts();

async function userAlbums() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users/1?_embed=posts&_embed=albums')
    const userInfo = await res.json()

    const albumTitle = document.createElement('h2')
    albumTitle.textContent = `Albums:`

    userInfo.albums.forEach(album => {
        const albumList = document.createElement('p')
        const albumLink = document.createElement('a')
        albumLink.href = `./album.html`
        albumLink.textContent = album.title

        usersListSection.append(albumTitle, albumList, albumLink)

    });

    
}
userAlbums();