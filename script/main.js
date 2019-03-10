var domaine1 = document.querySelector('.domaine1');
var liste1 = document.querySelectorAll('.liste1');
var domaine2 = document.querySelector('.domaine2');
var liste2 = document.querySelectorAll('.liste2');
var domaine3 = document.querySelector('.domaine3');
var liste3 = document.querySelectorAll('.liste3');
var domaine4 = document.querySelector('.domaine4');
var liste4 = document.querySelectorAll('.liste4');
var category = document.querySelectorAll('.category');
var category1 = document.querySelector('.category1');
var category2 = document.querySelector('.category2');
var category3 = document.querySelector('.category3');
var category4 = document.querySelector('.category4');
var details = document.querySelector('.details');
var elmt = document.querySelectorAll('.elmt');
var titreProjet = document.querySelector('.titreProjet');
var description = document.querySelector('.description');
var img = document.querySelector('.img');

var handledomaineScroll = function (domaine, liste) {
  var i = 0;
  // J'appelle l'événement 'wheel'
  domaine.addEventListener('wheel', function (e) {
    // prevention des défauts possible sur la variable de notre fonction
    e.preventDefault();
    // Récupérons i, ça peut toujours être utile
    console.log('i = ' + i);
    // Pour tous mes travaux réalisés une fonction est lancée
    // On récupère i, valeur du mouvement du scroll de la souris
    i += e.deltaY;
    // Bien sûr, il ne faut pas dépasser
    liste.forEach(function (w) {
      // Si i est descend en dessous de -2500 alors il prend cette même valeur
      if (i < -2100) i = -2100;
      // De même si il va au-delà de 300
      if (i > 400) i = 400;
      // Pour finir : les travaux vont bouger selon la valeur de i exprimée en px
      w.style.transform = 'translate(' + i + 'px)';
    });
  });
};
// En remplacant domaine1, ... par projects1, ... ça ne fonctionne pas
handledomaineScroll(domaine1, liste1);
handledomaineScroll(domaine2, liste2);
handledomaineScroll(domaine3, liste3);
handledomaineScroll(domaine4, liste4);

// Soit un choix en fonction des diff categories et domaines
var choix = function (categories, domaines) {
  // Pour chaque clique sur l'une des categories on appelle une autre fonction
  categories.addEventListener('click', function () {
    if (domaine1.classList.contains('domainevisibility')) {
      domaine1.classList.replace('domainevisibility', 'domaine');
      category1.classList.replace('categoryselected', 'category');
      console.log("j'ai changé tomate1");
    } else if (domaine2.classList.contains('domainevisibility')) {
      domaine2.classList.replace('domainevisibility', 'domaine');
      category2.classList.replace('categoryselected', 'category');
      console.log("j'ai changé tomate2");
    } else if (domaine3.classList.contains('domainevisibility')) {
      domaine3.classList.replace('domainevisibility', 'domaine');
      category3.classList.replace('categoryselected', 'category');
      console.log("j'ai changé tomate3");
    } else if (domaine4.classList.contains('domainevisibility')) {
      domaine4.classList.replace('domainevisibility', 'domaine');
      category4.classList.replace('categoryselected', 'category');
      console.log("j'ai changé tomate4");
    };
    // On remplace la classe de la domaine
    domaines.classList.replace('domaine', 'domainevisibility');
    // Et celle de la category cliquée
    categories.classList.replace('category', 'categoryselected');
    // Affiche-moi tomate si tu rentres dans la boucle, merci
    console.log('tomate');
  });
};

choix(category1, domaine1);
choix(category2, domaine2);
choix(category3, domaine3);
choix(category4, domaine4);

// Next code : IF click on a project then replace classList of details by .detailsView ET STOP THE WHEEL !!
// If click elsewhere than on details THEN replace classlist of details by .detailsHide
elmt.forEach(function (element) {
  element.addEventListener('click', function () {
    titreProjet.textContent = element.dataset.titre;
    description.textContent = element.dataset.description;
    img.src = element.dataset.img;
    details.style.display = 'flex';
  });
});

var close = document.querySelector('.outer');
close.addEventListener('click', function () {
  details.style.display = 'none';
});

// Gestion du scroll lors du click sur la fleche de la première page
var next = document.querySelector('#Flute');
var btn = document.querySelector('.index');
btn.addEventListener('click', function (e) {
  window.scroll({ top: next.offsetTop, left: 0, behavior: 'smooth' });
});
