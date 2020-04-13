// "img/AmeliaCamelia.jpg"
// "img/EmmaEvelyn.jpg"
// "img/IsabelleOlivia.jpg"
// "img/NoraZoe.jpg"
// "img/LiamWilliam.jpg"
// "img/DanielJacob.jpg"
// "img/RyanLuke.jpg"
// "img/AndreeaMark.jpg"

// Am creat un array de obiecte pentru postari.
posts = [
  {
    profileImg: "img/profile.jpg",
    name: "Michelle Monaghan",
    jobTitle: "Web Developer",
    content: {
      pictures: ["img/img1.jpg"],
    },
    comments: [
      {
        profileImg: "img/AndreeaMark.jpg",
        comment: "Faina postarea.",
      },
      {
        profileImg: "img/profile.jpg",
        comment: "Multumesc frumos!",
      },
    ],
  },
  {
    profileImg: "img/AndreeaMark.jpg",
    name: "Andreea Mark",
    jobTitle: "Web Designer",
    content: {
      text: "Am fost in concediu",
      pictures: ["img/img11.jpg"],
    },
    comments: [
      {
        profileImg: "img/IsabelleOlivia.jpg",
        comment: "Si cum a fost? Ne poti lasa un link cu sejurul?",
      },
      {
        profileImg: "img/AmeliaCamelia.jpg",
        comment: "Uaaaaaa, ce apus frumos",
      },
    ],
  },
  {
    profileImg: "img/AmeliaCamelia.jpg",
    name: "Amelia Camelia",
    jobTitle: "QA",
    content: {
      text: "Am fost in concediu",
      video: "video/video.mp4",
    },
    comments: [
      {
        profileImg: "img/profile.jpg",
        comment: "A trecut iarna...",
      },
      {
        profileImg: "img/DanielJacob.jpg",
        comment: "E de anul trecut, in noiembrie.",
      },
    ],
  },
  {
    profileImg: "img/AndreeaMark.jpg",
    name: "Andreea Mark",
    jobTitle: "Web Designer",
    content: {
      text: "Urmatoarea calatorie...",
      pictures: ["img/img13.jpg"],
    },
    comments: [
      {
        profileImg: "img/profile.jpg",
        comment: "Eu vreau la Paris.",
      },
      {
        profileImg: "img/AndreeaMark.jpg",
        comment: "Rezerva-ti un loc si mergi, e superb!",
      },
    ],
  },
  {
    profileImg: "img/EmmaEvelyn.jpg",
    name: "Emma Evelyn",
    jobTitle: "Customer Support",
    content: {
      text: "Vine cineva la sala azi?",
      pictures: ["img/img6.jpg"],
    },
    comments: [
      {
        profileImg: "img/profile.jpg",
        comment: "Da, in 10 minute ajung.",
      },
      {
        profileImg: "img/EmmaEvelyn.jpg",
        comment: "Perfect!",
      },
      {
        profileImg: "img/NoraZoe.jpg",
        comment: "Poate maine...",
      },
      {
        profileImg: "img/LiamWilliam.jpg",
        comment: "Sigur, la clase sau bodybilding?",
      },
    ],
  },
  {
    profileImg: "img/LiamWilliam.jpg",
    name: "Liam William",
    jobTitle: "Manager",
    content: {
      text: "Ziua se incepe cu putina miscare",
      pictures: ["img/img2.jpg", "img/img9.jpg"],
    },
    comments: [
      {
        profileImg: "img/NoraZoe.jpg",
        comment: "O zi plina de motivatie. Spor sa ai!",
      },
      {
        profileImg: "img/LiamWilliam.jpg",
        comment: "Multam!",
      },
    ],
  },
  {
    profileImg: "img/AmeliaCamelia.jpg",
    name: "Amelia Camelia",
    jobTitle: "QA",
    content: {
      text: "Nu ma pot decide..",
      pictures: ["img/img12.jpg", "img/img4.jpg"],
    },
    comments: [
      {
        profileImg: "img/profile.jpg",
        comment: "1",
      },
      {
        profileImg: "img/profile.jpg",
        comment: "Sau poate 2..",
      },
      {
        profileImg: "img/IsabelleOlivia.jpg",
        comment: "Incearca pe alta culoare",
      },
    ],
  },
  {
    profileImg: "img/IsabelleOlivia.jpg",
    name: "Isabelle Olivia",
    jobTitle: "Web Developer",
    content: {
      text: "A nins.",
      video: "video/video.mp4",
    },
    comments: [
      {
        profileImg: "img/profile.jpg",
        comment: "Cred ca a mai postat cineva",
      },
      {
        profileImg: "img/IsabelleOlivia.jpg",
        comment: "Sigur ca nu!",
      },
    ],
  },
  {
    profileImg: "img/DanielJacob.jpg",
    name: "Daniel Jacob",
    jobTitle: "Director",
    content: {
      text: "Salut",
      pictures: ["img/img10.jpg"],
    },
    comments: [
      {
        profileImg: "img/IsabelleOlivia.jpg",
        comment: "Bye bye",
      },
    ],
  },
  {
    profileImg: "img/NoraZoe.jpg",
    name: "Nora Zoe",
    jobTitle: "Web Developer",
    content: {
      text: "Am fost in concediu",
      pictures: ["img/img5.jpg"],
    },
    comments: [
      {
        profileImg: "img/IsabelleOlivia.jpg",
        comment: "Suuuper",
      },
      {
        profileImg: "img/AndreeaMark.jpg",
        comment: "Artifici",
      },
      {
        profileImg: "img/profile.jpg",
        comment: "Yeeeeey",
      },
    ],
  },
  {
    profileImg: "img/EmmaEvelyn.jpg",
    name: "Emma Evelyn",
    jobTitle: "Customer Support",
    content: {
      text: "Am fost in concediu",
      video: "video/video.mp4",
    },
    comments: [
      {
        profileImg: "img/profile.jpg",
        comment: "Yeeeeey",
      },
      {
        profileImg: "img/EmmaEvelyn.jpg",
        comment: "Jur ca video-ul acesta a mai fost",
      },
    ],
  },
  {
    profileImg: "img/profile.jpg",
    name: "Michelle Monaghan",
    jobTitle: "Web Developer",
    content: {
      text: "Poze, amintiri",
      pictures: ["img/img8.jpg", "img/img7.jpg", "img/img3.jpg"],
    },
    comments: [
      {
        profileImg: "img/AmeliaCamelia.jpg",
        comment: "Nu imi place ideea",
      },
      {
        profileImg: "img/EmmaEvelyn.jpg",
        comment: "Superbeee",
      },
      {
        profileImg: "img/IsabelleOlivia.jpg",
        comment: "Yeeeeey",
      },
      {
        profileImg: "img/RyanLuke.jpg",
        comment: "Mie imi place!",
      },
    ],
  },
];
