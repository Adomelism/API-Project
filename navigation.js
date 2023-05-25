// 9. Sukurti paieškos funkcionalumą navigacijos elemente:
// 9.1. Navigacijos elemente sukurti formą, kuri turi text tipo input elementą (nepamiršti pridėti name atributą).
// 9.2. Formos submit metu, naudojant action atributą, nukreipti į naują puslapį (search.html).
// 9.3. Šiame puslapyje atvaizduoti paieškos rezultatą.
// 9.3.1. Jeigu nėra tinkamų rezultatų, tai parašyti jog rezultatų pagal užklausą nerasta.


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