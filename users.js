import navigation from "./navigation.js";

async function init() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts');
    const usersData = await res.json();

    const usersListSection = document.querySelector('#content')
    const headerElement = navigation()
    usersListSection.append(headerElement) 
    usersListSection.append(getUsers(usersData));
    
}
init();

function getUsers(usersData) {
    const usersList = document.createElement('ul');
    
    usersData.forEach(userData => {
        const user = userData.name
        const userId = userData.id
        
        const userLiElement = document.createElement('li');
        usersList.append(userLiElement)
        const userLink = document.createElement('a');
        userLiElement.append(userLink)
        userLink.textContent = `${user} (${userData.posts.length})`;
        userLink.href = './user.html?user_id=' + userId;        
    })
    return usersList;
}


