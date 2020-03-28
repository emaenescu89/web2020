let d = new Date(); 
//Array cu toate evenimentele 
let events = [
{
	image: 'timotion.jpg',
	dateEvent: '2020-03-21',
	name: 'Alergăm pentru copiii singuri în spital la Timotion 2020 ',
	description: 'Timișoara Piața Libertății'
},
{
	image:'timfloralis.jpg',
	dateEvent:'2020-04-21',
	name: 'Timfloralis 2020',
	description:'Timfloralis Timișoara'
},
{	
	image:'carnival.png',
	dateEvent:'2020-05-21',
	name: 'The Carnival- Timișoara',
	description:'Muzeul Satului Bănățean Timișoara'
},
{
	image:'criminalistica.jpg',
	dateEvent:'2020-06-21',
	name: 'Conferința Națională de Criminalistică',
	description:'Facultatea de Drept și Științe Administrative'

},
{
	image:'cariere.jpg',
	dateEvent:'2020-07-21',
	name: 'Tîrg Internațional de Cariere în Domeniul Medical',
	description:'Hotel Timișoara'

}
];


let divToInsert = document.getElementsByClassName('events')[0];//alegem elementul din DOM unde vom insera

for (i = 0;i < events.length; i++) {
	let dEvents = new Date(events[i].dateEvent);

	//verificam datele evenimentelor, sa fie in viitor
	if (dEvents.getTime() >= d.getTime() ) {
		let ulEl = document.createElement('ul');//creem liste cu fiecare event
		ulEl.className = 'event';
		ulEl.innerHTML = '<li>' + `<a href="#" target="_blank">
		<img src="img/${events[i].image}"></a>` + '</li>';
		ulEl.innerHTML += '<li>' + `<a href="#" target="_blank"><p class="dateEvent">${events[i].dateEvent}</p></a>` + '</li>';
		ulEl.innerHTML += '<li>' + `<a href="#" target="_blank"><p class="nameEvent">${events[i].name}</p></a>` + '</li>';
		ulEl.innerHTML += '<li>' + `<a href="#" target="_blank"><p class="aboutEvent">${events[i].description}</p></a>` + '</li>';

		divToInsert.appendChild(ulEl);
	}
}

//Buttons INTERESTED & share - varianta scurta
$('.event').append('<ul class="actions"><li><a href="#"><i class="far fa-heart"></i></a></li><li><a href="#"><i class="fas fa-share"></i></a></li>');
//icon calendar
let iconCalendar = $('.events h4').prepend('<i class="fas fa-calendar-alt"></i>');

//click on button - schimbare icon interested
$('.event .far').click(() => {
	$('.event .far').addClass('fas fa-heart');
});





