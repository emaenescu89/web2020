//Friend List

//Show friends list on the right side of the page.

const friendsList = document.querySelector(".friends-list");

// am creeat o variabila friendsHtml care va contine elementele de tip <li>
let friendsHtml = "";

// cu ajutorul for-ului vom itera fiecare element din array-ul de obiecte friends
for (let i = 0; i < friends.length; i++) {
  let statusClass = "";

  // daca propietatea isActive este true atunci stocam string-ul ' active' in variabila statusClass
  if (friends[i].isActive === true) {
    statusClass = " active";
  }

  // se adauga la fiecare iteratie cate un element html
  friendsHtml += `<li>
                    <img src="${friends[i].profileImg}" alt="">
                    <span class="friend-name">${friends[i].name}</span>
                    <span class="friend-status${statusClass}"></span>
                  </li>`;
}
// se rescrie Html-ul din friendsList cu html-ul din variabila friendsHtml.
friendsList.innerHTML = friendsHtml;
