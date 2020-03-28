
// Stabilim cate reclame sa vedem odata
const nrOfCommercialToShow = 3;
// Indexul de la care incepe sa ascunda
let activeIndex = 0;
// Indexul de la care incepe sa afiseze
let nextIndex = activeIndex + nrOfCommercialToShow;
let news = [
	{
		image:'periuta.jpg',
		name: 'Philips Sonicare DiamondClean',
		description:'Periuţă de dinţi sonică electrică Philips Sonicare DiamondClean,  elimină de până la 7 ori mai multă placă bacteriană decât o periuţă de dinţi manuală'

	},
	{
		image: 'suncare.jpg',
		name: 'APIVITA SUNCARE',
		description: 'Tinerețea pielii este perfect protejată cu noua gamă APIVITA SUNCARE'
	},
	{	
		image:'apivita.jpg',
		name: 'PURE JASMINE by APIVITA',
		description:'Natural effective holistic products'
	},

	{
		image:'jack.jpg',
		name: 'Jack\'s Bistro Bar & Grill',
		description:'Food and ambience.American, International, Grill, Vegetarian Friendly, Vegan Options'
	},

	{
		image:'crescina.jpg',
		name: 'CRESCINA HFSC 100% | Labo Suisse',
		description:'Tratament complet de creștere și combatere a căderii părului Crescina HFSC 1300 Man, 10+10 fiole, Labo'

	},
	{
		image:'local.jpg',
		name: 'Top Restaurante Timisoara',
		description:'Comandă acum online orice poftești pe eucemănânc.ro . Livrăm acasă pentru tine!!'
	}
];
//creem div-ul
let divEl = document.createElement('div');
divEl.className = 'comercials';

//creem 4 liste cu cele 4 elemente/reclame din array
//le si adaugam cu append child in div-ul creat
for (let i = 0 ; i < news.length ; i++) {
	let ulEl = document.createElement('ul');
	if (i >= nrOfCommercialToShow) {
		ulEl.style.display = 'none';
	}

	ulEl.className = 'comercial';
	ulEl.style.paddingBottom = '5px';
	ulEl.innerHTML = '<li>' + `<a href="#" target="_blank">
	<img src="img/${news[i].image}"></a>` + '</li>';
	ulEl.innerHTML += '<li>' + `<p class="titleCommercial">${news[i].name}</p>` + '</li>';
	ulEl.innerHTML += '<li>' + `<p class="aboutCommercial">${news[i].description}</p>` + '</li>';
	divEl.append(ulEl);   
}


let spaceEL = document.getElementsByClassName('rightside')[0];//localizare DOM unde inseram
spaceEL.append(divEl);//inseram div-ul final in DOM


let timerInterval = window.setInterval(() => {
	let uls = document.getElementsByClassName('comercial');

	for (let i = 0; i < nrOfCommercialToShow; i++) {
		// Ascunde reclamele afisate cu un pas inainte
		if (uls[activeIndex + 1]) {
			uls[activeIndex].style.display = 'none';
			activeIndex++;
		} else {
			uls[activeIndex].style.display = 'none';
			activeIndex = 0;
		}
		// Afisam urmatoarele 3 reclame
		if (uls[nextIndex + 1]) {
			uls[nextIndex].style.display = 'block';
			nextIndex++;
		} else {
			uls[nextIndex].style.display = 'block';
			nextIndex = 0;
		}

	}
},5000);//sa fie afisate doar 3 reclame si sa apara urmatoarele 3 si tot asa...















