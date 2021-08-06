// Data for "Speakers" Section
const filmsData = [
  {
    img: './img/posters/fight_club_poster.jpg',
    title: 'Fight Club',
    author: 'David Fincher - 1999',
    'film sinopsis': '"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more." — Imdb',
  },
  {
    img: './img/posters/old_boy_poster.jpg',
    title: 'Old Boy',
    author: 'Park Chan-Wook - 2003',
    'film sinopsis': '"After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days." — Imdb',
  },
  {
    img: './img/posters/eternal_sunshine_poster.jpg',
    title: 'Eternal Sunshine of the Spotless Mind',
    author: 'Michel Gondry - 2004',
    'film sinopsis': '"When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories." — Sarah McAuley',
  },
  {
    img: './img/posters/truman_show.jpg',
    title: 'The Truman Show',
    author: 'Peter Weir - 1998',
    'film sinopsis': '"An insurance salesman discovers his whole life is actually a reality TV show." — BCDavis',
  },
  {
    img: './img/posters/arrival_poster.jpg',
    title: 'Arrival',
    author: 'Denis Villeneuve - 2016',
    'film sinopsis': '"A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world." — Noah Orent',
  },
  {
    img: './img/posters/prometheus_poster.jpg',
    title: 'Prometheus',
    author: 'Ridley Scott - 2012',
    'film sinopsis': '"Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone." - Imdb',
  },
  {
    img: './img/posters/the_lobster.jpg',
    title: 'The Lobster',
    author: 'Yorgos Lanthimos - 2015',
    'film sinopsis': '"In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods. —Wikipedia and Brian McInnis',
  },
];

const mainSection = document.getElementById('main-section');

function generateFilms(filmContainer) {
  for (let i = 1; i <= filmsData.length; i += 1) {
    if (i < 3) {
      filmContainer.innerHTML += `<div id="film-container-${i})" class="film-container d-flex mb-2">
      <img
        id="poster-${i}"
        class="poster"
        src="${filmsData[i - 1].img}"
        alt=""
      />
      <div
        id="film-txt-container-${i}"
        class="film-text-container d-flex d-column d-justify-between"
      >
        <h3 class="film-title default-family fc-darkgrey fs-18 mb-1">
          ${filmsData[i - 1].title}
        </h3>
        <h4 class="film-author default-family fc-orange fs-14 mb-1">
          ${filmsData[i - 1].author}
        </h4>
        <span class="secundary-bdb mb-1"></span>
        <h4 class="film-p default-family fc-darkgrey fs-12 fw-300 mb-1">
          ${filmsData[i - 1]['film sinopsis']}
        </h4>
      </div>
    </div>`;
    } else {
      filmContainer.innerHTML += `<div id="film-container-${i}" class="film-container d-flex mb-2 d-none">
      <img
        id="poster-${i}"
        class="poster"
        src="${filmsData[i - 1].img}"
        alt=""
      />
      <div
        id="film-txt-container-${i}"
        class="film-text-container d-flex d-column d-justify-between"
      >
        <h3 class="film-title default-family fc-darkgrey fs-18 mb-1">
          ${filmsData[i - 1].title}
        </h3>
        <h4 class="film-author default-family fc-orange fs-14 mb-1">
          ${filmsData[i - 1].author}
        </h4>
        <span class="secundary-bdb mb-1"></span>
        <h4 class="film-p default-family fc-darkgrey fs-12 fw-300 mb-1">
          ${filmsData[i - 1]['film sinopsis']}
        </h4>
      </div>
    </div>`;
    }
  }
}

function createFilmSection() {
  const newFilmSection = document.createElement('section');
  newFilmSection.setAttribute('class', 'main-films');
  newFilmSection.id = 'main-films';

  const filmsContainer = document.createElement('div');
  filmsContainer.setAttribute('class', 'films-container d-flex d-column d-align-center desk-w');
  filmsContainer.id = 'films-container';
  const h2Tag = document.createElement('h2');
  h2Tag.setAttribute('class', 'default-family fc-darkgrey fw-900 fs-24');
  h2Tag.innerText = 'Featured Films';
  const spanTag = document.createElement('span');
  spanTag.setAttribute('class', 'primary-bdb mt-1 mb-2');
  const newfilmsContainer = document.createElement('div');
  newfilmsContainer.setAttribute('class', 'film-div-container d-wrap d-flex d-column d-align-center');
  newfilmsContainer.id = 'film-container';

  generateFilms(newfilmsContainer);

  filmsContainer.appendChild(h2Tag);
  filmsContainer.appendChild(spanTag);
  filmsContainer.appendChild(newfilmsContainer);

  newFilmSection.appendChild(filmsContainer);

  mainSection.appendChild(newFilmSection);
}

createFilmSection();

// Main Program
const allPrograms = document.querySelectorAll("[id*='program-']");
const allFilms = document.querySelectorAll("[id*='film-container-']");

// open-close menu popup;
const mobileMenuOpenBtn = document.getElementById('bars-menu');
const mobileMenuCloseBtn = document.getElementById('close-menu-btn');
const navSection = document.getElementById('nav-section');
const menuPopupSection = document.getElementById('menu-popup');
const allPopupItems = document.querySelectorAll('.popup-li-item');

// see more mob
const seeMoreDiv = document.getElementById('see-more-mob');
const seeMoreHeader = document.getElementById('see-more-txt');
const partnersSection = document.getElementById('partners-section');
const footerSection = document.getElementById('footer-section');

// see more desk
const seeMoreDeskHeader = document.getElementById('see-more-desk');

function mediaResize() {
  if (window.innerWidth >= 992) {
    for (let i = 5; i < allPrograms.length; i += 1) {
      if (!allPrograms[i].className.includes('d-none')) {
        allPrograms[i].classList.toggle('d-none');
      }
    }
    for (let i = 2; i < allFilms.length; i += 1) {
      if (allFilms[i].className.includes('d-none')) {
        allFilms[i].classList.toggle('d-none');
      }
    }
  } else {
    for (let i = 5; i < allPrograms.length; i += 1) {
      if (allPrograms[i].className.includes('d-none')) {
        allPrograms[i].classList.toggle('d-none');
      }
    }
    for (let i = 2; i < allFilms.length; i += 1) {
      if (!allFilms[i].className.includes('d-none')) {
        allFilms[i].classList.toggle('d-none');
      }
    }
  }
}

mediaResize();

// window Resize
window.addEventListener('resize', () => {
  mediaResize();
});

mobileMenuOpenBtn.addEventListener('click', () => {
  menuPopupSection.classList.toggle('d-none');
  navSection.classList.toggle('d-none');
});

mobileMenuCloseBtn.addEventListener('click', () => {
  menuPopupSection.classList.toggle('d-none');
  navSection.classList.toggle('d-none');
});

allPopupItems.forEach((element) => {
  element.addEventListener('click', () => {
    menuPopupSection.classList.toggle('d-none');
    navSection.classList.toggle('d-none');
  });
});

seeMoreDiv.addEventListener('click', () => {
  document.getElementById('chevron-up').classList.toggle('d-none');
  document.getElementById('chevron-down').classList.toggle('d-none');

  if (seeMoreHeader.innerText === 'See More') {
    seeMoreHeader.innerText = 'See Less';
  } else {
    seeMoreHeader.innerText = 'See More';
  }

  for (let i = 2; i < allFilms.length; i += 1) {
    allFilms[i].classList.toggle('d-none');
  }

  partnersSection.classList.toggle('d-none');
  footerSection.classList.toggle('d-none');
});

seeMoreDeskHeader.addEventListener('click', () => {
  for (let i = 5; i < allPrograms.length; i += 1) {
    allPrograms[i].classList.toggle('d-none');
  }

  if (seeMoreDeskHeader.innerText === 'See Less') {
    seeMoreDeskHeader.innerText = 'See The Whole Program';
  } else {
    seeMoreDeskHeader.innerText = 'See Less';
  }
});
