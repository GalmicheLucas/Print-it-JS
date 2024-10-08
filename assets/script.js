const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const bannerImg = document.querySelector('.banner-img');
const arrow_right = document.querySelector('.arrow_right');
const arrow_left = document.querySelector('.arrow_left');
const dots = document.querySelector('.dots');

let currentIndex = 0;

//dots
function affichagedots(){
for(let i = 0; i < slides.length; i ++){
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dots.appendChild(dot);
	
	// Ajoute un écouteur d'événements pour chaque dot
	dot.addEventListener('click', function() {
		currentIndex = i;
		updateCarousel(currentIndex);
		updateDots(currentIndex);
	});
}
}
affichagedots()
	;

function updateDots(index) {
	const allDots = document.querySelectorAll('.dot');
	allDots.forEach((dot, i)=> {
        if (i === index) {
            dot.classList.add('dot_selected'); 
        } else {
            dot.classList.remove('dot_selected'); 
        }
    });
    
}

//mise a jours du carrousel
function updateCarousel(index, direction) {
	if (currentIndex === -1 && direction === 'left') {
	  currentIndex = slides.length - 1;
	  console.log(currentIndex)
  } else if (currentIndex === slides.length && direction === 'right') {
	  currentIndex = 0;
  }

// mise à jour de l'image
const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
bannerImg.src = imagePath;
bannerImg.alt = `Slide ${currentIndex + 1}`;


//texte 
const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

console.log(`Clic sur la flèche ${direction}`);
}

arrow_left.addEventListener('click', function () {
	currentIndex = (currentIndex - 1)
	updateCarousel(currentIndex, 'left');
	updateDots(currentIndex);
});

arrow_right.addEventListener('click', function (){
	currentIndex = (currentIndex + 1);
	updateCarousel(currentIndex, 'right');
    updateDots(currentIndex);
});

