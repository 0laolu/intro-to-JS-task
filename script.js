const bodyEl = document.querySelector('body')

const aboutMe = (name, height, country) => {
    let mainElement = document.createElement('main');
    mainElement.style.fontFamily = 'Cambria';
    mainElement.innerText = `Hi, my name is ${name}.\nI am ${height} tall.\nI am from ${country}. `;

    bodyEl.appendChild(mainElement);
}

aboutMe('Olaoluwa', '6\'0"', 'Nigeria');