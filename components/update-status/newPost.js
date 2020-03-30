//New Post

// Declarare variabile
let comment =[];// creare array
let countStatus = 0;

//arrow function
let render = data =>{
    //creare in js a codului ce urmeaza a fi introdus dinamic in html
    let html =
    `<header>
    <img src='img/profile.jpg' alt='profile image'>
    <div class='divModal'>
    <span class='nameModal'>Dave Chappelle</span>
    <span class='dateNow'>${data.date}</span>
    </div>
    </header>
    <div class='dateStatus'>
    <p>${data.body}</p>
    </div>
    <footer>
    <div class='iconsStatus'>
    <div class='emptyHeart'>
    <i class='far fa-heart'></i>
    <span id='count'></span>
    </div>
    <div class='commentStatus'>
    <i class='fas fa-comment-medical'></i>
    </div>
    <div class='share'>
    <i class='fas fa-retweet'></i>
    </div>
    </div>
    <form class='formStatus'>
    <textarea placeholder='Say Something...'></textarea>
    </form>
    </footer>`
    $('#containerStatus').prepend(html); // atasarea codului creat la containerul din html
};
// arrow function
let updateStatus = () => {
    let dateNow = moment().format('HH:mm:ss');// luam ora/min/sec curente 
        let addObj ={ // creare obiect array 
            'body': $('#bodyModal').val(),// obiectul primeste valoarea inserata in <textarea>
            'date': dateNow,// seteaza ora/min/sec cand a fost postat 
        }
        comment.push(addObj);// noul obiect este inserat la sfarsitul obiectului comment
        render(addObj);// apelam fct render cu argument obiectul creat mai sus
        $('#bodyModal').val("");// dupa postare stergem valoarea <textarea> pt a fi goala  
    };

$(document).ready(() => { // functia care face ca si codul din interior sa se execute dupa incarcarea doc

    $('#addModal').click(() => { // atasare pe buton event de click
        if ( $('#bodyModal').val() !== ''){ // daca val din <textarea> NU este goala atunci facem functia
            updateStatus(); 
            $('.bg-modal').hide();// am ascuns elementul cu  clasa
            $('#bodyText').show(); // am aratat elementul cu  id
        }
    });
    
// Modal Section 

$('#bodyText').on("click",() => { // am pus click event pe id
    $('.bg-modal').show();// aratam elementul cu clasa
    $('#bodyText').hide();// am scuns elementul cu id
});

$('.close').on("click",() => { // am pus click event pe el cu clasa
    $('.bg-modal').hide();// am ascuns elementul cu  clasa
    $('#bodyText').show(); // am aratat elementul cu  id
});
// Event Delegation! event click pe icon ca sa apara casuta de comment.
$('#containerStatus').on('click','.commentStatus',() => {// atasam click pe id
    $('.formStatus').show();// scoatem display: none care este default setat
})

// Event Delegation! Atunci cand introducem continut dinamic in html.
$('#containerStatus').on('click','.emptyHeart',() => { 
    $('.emptyHeart i').removeClass('far').addClass('fas');
    countStatus++;
    $('#count').html(+countStatus);
})

});// inchidere document.ready







