
// 6. Šiame puslapyje (user.html) turi būti atvaizduojama:
//   6.1. Visi vartotojo parašyti įrašai (posts). Kiekvienas post'as turi turėti nuorodą.
//   6.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės pavadinimą, kuris turi būti nuoroda.

const usersListSection = document.querySelector('#content')


async function userData() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users/1')
    const userInfo = await res.json()

    console.log(userInfo)

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
    userEmail.textContent = `Email: ${email}`;

    const userAddress = document.createElement('h4')
    const addressLink = document.createElement('a')
    addressLink.href = `https://www.google.com/maps/search/?api=1&query=${userInfo.address.geo.lat},${userInfo.address.geo.lng}`
    addressLink.textContent = `Address: ${address}`;
    userAddress.append(addressLink)
    
    const userPhone = document.createElement('h4')
    userPhone.textContent = `Phone: ${phone}`;

    const userWebsite = document.createElement('h4')
    userWebsite.textContent = `Website: ${website}`;

    const userCompany = document.createElement('h4')
    userCompany.textContent = `Company: ${company}`;
    
    
    usersListSection.append(userName, nickName, userEmail, userAddress, userPhone, userWebsite, userCompany);
}
userData();