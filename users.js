
const usersListSection = document.querySelector('#content')

async function getUsers() {
    const userUlElement = document.createElement('ul');
    usersListSection.prepend(userUlElement);

    const usersList = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts');
    const usersData = await usersList.json();
    usersData.forEach(userData => {
        const user = userData.name

        const userLiElement = document.createElement('li');
        const userLink = document.createElement('a');
        userUlElement.append(userLiElement);
        userLiElement.prepend(userLink);
        
        // userLiElement.textContent = user;
        userLink.textContent = `${user} (${userData.posts.length})`;
        userLink.href = './user.html';
        console.log(userLink)
        

    })
}

getUsers();

