
// lista de obiecte a prietenilor sugerati
let suggestedFriends = [{
  name: 'Aishah Ahmad',
  img: 'photo1.jpg',
  mutualFriends: 3,
}, {
  name: 'Catalin Pop',
  img: 'photo2.jpg',
  mutualFriends: 6,
}, {
  name: 'Andrei Ionescu',
  img: 'photo3.jpg',
  mutualFriends: 9,
}, {
  name: 'Ella Gardner',
  img: 'photo4.jpg',
  mutualFriends: 2,
}, {
  name: 'Nancy Bernard',
  img: 'photo5.jpg',
  mutualFriends: 11,
}, {
  name: 'Madalena Silva',
  img: 'photo6.jpg',
  mutualFriends: 2,
}, {
  name: 'Dennis Butler',
  img: 'photo7.jpg',
  mutualFriends: 25,
}, {
  name: 'Ioana Anton',
  img: 'photo8.jpg',
  mutualFriends: 35,
}, {
  name: 'Shena Morris',
  img: 'photo9.jpg',
  mutualFriends: 1,
}];

// lista de obiecte a prietenilor actuali
let friends = [{
  name: 'Adelina Banu',
  img: '',
  mutualFriends: 4,
}, {
  name: 'Cristian Tolan',
  img: '',
  mutualFriends: 13,
}, {
  name: 'Lucian Mercea',
  img: '',
  mutualFriends: 27,
}]


// creeaza un container pentru lista de prieteni sugerati
let suggestion = $(`<article class="carousel"></article>`);
$(suggestion).css({
  'width': '540px',
  'padding': '10px 5px'
});
// il introduce dupa primul element article
$(suggestion).insertAfter('main > article:first-child');

// declar o functie care creeaza cate un item pentru fiecare prieten sugerat
// luand datele din lista de obiecte si adauga in containerul creat mai sus
function suggestionItem() {
  for (let i = 0; i < suggestedFriends.length; i++) {
    $(suggestion).append(`<div class="suggestion-item">
                         <img src="img/${suggestedFriends[i].img}" class="small-img">
                         <p class="name">${suggestedFriends[i].name}</p>
                         <p class="mutual">${suggestedFriends[i].mutualFriends} prieteni comuni</p>
                         <button class="addFr">Adauga</button>
                       </div>`);
  }
}

suggestionItem(); // apeleaza functia de mai sus

// putin CSS pentru o stilizare minima
$('.suggestion-item').css({
  'margin': '0 5px'
});
$('img.small-img').css({
  'border-radius': '10px'
});
$('.name').css({
  'font-size': '12px',
  'font-weight': 'bold'
});
$('.mutual').css({
  'font-size': '12px'
});
$('.addFr').css({
  'background-color': '#ff6b6b',
  'color': '#fff',
  'padding': '5px',
  'border-radius': '10px',
})

// carouselul
$(document).ready(function() {

  $('.carousel').slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  // setam width la 100% pe imaginile din slide-uri
  $('.slick-slide img').css({
    'width': '100%'
  });

});

//variabila care contorizeaza li-urile necitite si afiseaza numarul lor in badge
let count = 0;

// creeaza un span cu clasa 'badge' si il insereaza in li-ul corespunzator
// rubricii Friends din ul-ul cu clasa account
let spanBadge = $(`<span class="badge">${count}</span>`);
$('ul.account > li:nth-child(3)').append(spanBadge);
spanBadge.hide(); // pentru inceput il ascundem

// adaugam o clasa 'comment' li-ului care reprezinta rubrica 'Friends' din meniu
// pentru a prelua stilizarea deja existenta
$('ul.account > li:nth-child(3)').addClass('comments');

// creeaza un ul caruia ii vom atasa ulterior clasa 'dropdown' si va primi
// proprietatile css deja definite
let ulDropdown = $('<ul></ul>');
$('ul.account > li:nth-child(3)').append(ulDropdown);

// adauga un event handler la fiecare buton al fiecarui item
$(suggestion).on('click', '.addFr', function() {

  // ataseaza clasa 'dropdown' elementului ul creat mai sus, acum primeste cel
  // putin un element li in interior si poate fi vizibil la hover
  $(ulDropdown).addClass('dropdown');

  // sterge din DOM elementul parinte (item) in care se afla butonul clickuit:
  $(this).parent().remove();

  // parcurge lista de obiecte a prietenilor sugerati, cauta obiectul a carui
  // proprietate 'name' are valoarea identica cu cea din textul unui element
  // frate (avand clasa .name) cu butonul clickuit, apoi ia si celelalte
  // proprietati din acel obiect si adauga obiectul in lista de prieteni;
  // la final sterge obiectul din lista prietenilor sugerati
  for (let i = 0; i < suggestedFriends.length; i++) {
    if (suggestedFriends[i].name == $(this).siblings('.name').text()) {
      friends.push({
        name: suggestedFriends[i].name,
        img: `img/${suggestedFriends[i].img}`,
        mutualFriends: suggestedFriends[i].mutualFriends
      });

      // creeaza cate un li in dropdown pentru fiecare prieten adaugat
      let friendsLi = $(`<li><a href="#"><img src="img/${suggestedFriends[i].img}" class="small-round"><span><b>${suggestedFriends[i].name}</b> este in lista ta de prieteni acum!<span></a></li>`);
      $(ulDropdown).prepend(friendsLi);

      // stilizare dropdown, li si imaginea din li
      $(ulDropdown).css({
        'padding': '0'
      });

      $(friendsLi).css({
        'background-color': '#028179',
        'padding': '5px 10px'
      });

      $('.small-round').css({
        'width': '40px',
        'height': '40px',
        'margin-right': '10px',
        'border-radius': '50%'
      });

      spanBadge.show(); // afiseaza span-ul cu clasa 'badge' creat mai sus
      // apeleaza functia care actualizeaza numarul din badge:
      spanBadgeTextNr(++count);

      // adauga un event handler, la click pe un li schimba culoarea de background
      // ca si cum ar fi citit si in acelasi timp scade numarul din badge iar daca
      // ajunge la zero ascunde acel badge
      $(friendsLi).one('click', function() {
        $(this).css({
          'background-color': '#4ECDC5'
        });
        spanBadgeTextNr(--count);
        if (count == 0) {
          spanBadge.hide();
        }
      });

      // sterge obiectul din lista de prieteni sugerati
      suggestedFriends.splice(i, 1);


    }
  }

  // daca e gol ascunde elementul articol care continea acei itemi
  // cu prieteni sugerati
  if ($('.suggestion-item').length == 0) {
    $(suggestion).hide();
  }

});

// definim functia pentru actualizeaza numarul din badge
function spanBadgeTextNr(count) {
  $('ul.account > li:nth-child(3) > span.badge').html(count);
}

// afiseaza in consola lista de obiecte a prietenilor sugerati
console.log(suggestedFriends);

// afiseaza in consola lista de obiecte a prietenilor actuali
console.log(friends);
