document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-form");

  // Implementarea mecanismului de search
  // adaugare de eveniment pe submit
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    displayPosts();
  });

  // afisam toate postarile la load-ul paginii
  displayPosts();
});

// === Declararea functiilor ===
/*
 * Functia cu care afisam postarile
 */
function displayPosts() {
  const main = document.querySelector("main");
  let html = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    // daca foundInSearch cu argumentul 'post' returneaza false atunci sare peste iteratia curenta.
    if (!foundInSearch(post)) {
      continue;
    }

    // concatenam fiecare post la variabila html
    html =
      html +
      `<article>
        <header>
            <img src="${post.profileImg}" alt="Nume Prenume">
            <div>
                <span>${post.name}</span>
                <span>${post.jobTitle}</span>
            </div>
        </header>
        <div class="content">
            ${getPostContent(post.content)}
        </div>
        <footer>
            ${getPostActions()}
            <form>
                <textarea placeholder="Say something..."></textarea>
            </form>
            <div class="comments">
                ${getPostComments(post.comments)}
            </div>
        </footer>
    </article>`;
  }

  // rescriem html-ul pentru postari.
  main.innerHTML = html;
}

// Functia getPostContent primeste un obiect ca parametru -> continutul unui post (post.content) si returneaza un html cu text/imagine/video daca exista
function getPostContent(content) {
  let html = "";

  if (content.text) {
    html = html + `<p>${content.text}</p>`;
  }

  if (content.pictures) {
    for (let i = 0; i < content.pictures.length; i++) {
      const picture = content.pictures[i];

      html = html + `<img src="${picture}" alt="">`;
    }
  }

  if (content.video) {
    html =
      html +
      `<video controls="" autoplay="" muted=""><source src="${content.video}" type="video/mp4"></video>`;
  }

  return html;
}

// Functia aceasta returneaza iconitele pentru postare (html harcodat)
function getPostActions() {
  return `<ul class="actions">
            <li>
                <a href="#">
                    <i class="far fa-heart" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-comment-medical" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-retweet" aria-hidden="true"></i>
                </a>
            </li>
        </ul>`;
}

// Functia getPostComments primeste un array de obiecte ca parametru, il itereaza si returneaza un html pentru fiecare comment.
function getPostComments(comments) {
  let html = "";

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];

    html =
      html +
      `<div class="single-comment">
          <img src="${comment.profileImg}" alt="Nume Prenume">
          <p>${comment.comment}</p>
       </div>`;
  }

  return html;
}

// functia foundInSearch primeste un obiect (post) ca parametru
// Verifica daca valoare introdusa in campul de Search se regaseste in proprietatea 'name' a obiectului
// Returneaza true daca se regaseste si false daca nu.
// [Metoda indexOf () returnează primul index la care un element dat poate fi găsit în array, sau -1 dacă nu este prezent.]
function foundInSearch(post) {
  const searchInput = document.querySelector('input[type="search"]');
  const searchValue = searchInput.value.toLowerCase();
  const name = post.name.toLowerCase();

  return name.indexOf(searchValue) > -1;
}
