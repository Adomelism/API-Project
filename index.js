import navigation from "./navigation.js";

async function init() {

    const usersListSection = document.querySelector('#content')
    const headerElement = navigation();
    const homePage = document.createElement('div')
    homePage.classList.add('home-page')
    usersListSection.append(headerElement, homePage) 

    
    const homePageTitle = document.createElement('h1')
    homePageTitle.textContent = `API Project`
    
    const homePageLogo = document.createElement('img')
    homePageLogo.classList.add('home-page-logo')
    homePageLogo.src = `https://static.vecteezy.com/system/resources/previews/004/908/013/original/coding-logo-design-template-free-vector.jpg`
    
    const homePageParagraph = document.createElement('p')
    homePageParagraph.textContent = `This is a project by Mantas Adomelis for CodeAcademy FrontEnd (Serverless) course.`

    homePage.append(homePageTitle, homePageLogo, homePageParagraph)
}
init();