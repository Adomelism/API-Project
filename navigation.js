// 4. Sukurti navigacijos elementą, kuris nukreips į puslapius:
//   4.1. Home / pagrindinis puslapis.
//   4.2. Users / vartotojų puslapis.
//   4.3. Albums / albumų puslapis.
//   4.4. Posts / pranešimų puslapis.
//   4.5. Pakeisti aktyvaus puslapio nuorodos stilių.

function navigation() {
    const headerElement = document.createElement('header');
    const navigationElement = document.createElement('nav');
    navigationElement.classList.add('main-navigation');
    headerElement.append(navigationElement);

    const menuList = document.createElement('ul');
    menuList.classList.add('menu', 'main-menu');
    navigationElement.append(menuList);


    const menuItems = [
    {
        title: 'Home',
        path: 'home.html',
    },
    {
        title: 'Users',
        path: 'users.html',
    },
    {
        title: 'Albums',
        path: 'albums.html',
    },
    {
        title: 'Posts',
        path: 'posts.html',
    }
    ];

    menuItems.forEach(item => {
        let {title, path} = item;

        const menuItem = document.createElement('li');
        menuList.append(menuItem)

        const menuLink = document.createElement('a');

        if (location.pathname === '/' + path) {
            menuLink.classList.add('active');
        }

    

        menuItem.append(menuLink);
        menuLink.href = path;
        menuLink.textContent = title;


    })

    document.body.prepend(headerElement);

}

navigation();