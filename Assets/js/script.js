// Objects. 
const objkat = {
    kat1: { picture: '/assets/images/kat1.jpg', description: 'Susanne, 2 måneder' },
    kat2: { picture: '/assets/images/kat2.jpg', description: 'Cille, 1 år gammel' },
    kat3: { picture: '/assets/images/kat3.jpg', description: 'Mia, 1 måned' },
    kat4: { picture: '/assets/images/kat4.jpg', description: 'Steffen, 4 år gammel' },
    kat5: { picture: '/assets/images/kat5.jpg', description: 'Simon, 3 år og 4 måneder' },
    kat6: { picture: '/assets/images/kat6.jpg', description: 'Sussie, 6 år gammel og gravid' }
};

const myGallery = document.getElementById('gallery');

buildGallery()

function buildGallery() {
    for (let myIndex in objkat) {
        let myUrl = objkat[myIndex].picture;
        let description = objkat[myIndex].description;

        buildCard(myUrl, description)
    }
}

function buildCard(myUrl, description, clearParent){ 
    if(clearParent) {
        myGallery.innerHTML = ' ';
    }

    const myCard = document.createElement('figure');
    const cardImage = document.createElement('img');
    const cardDescription = document.createElement('p');

    cardImage.src = myUrl;
    cardDescription.innerText = description;

    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);

    myGallery.appendChild(myCard);


}
