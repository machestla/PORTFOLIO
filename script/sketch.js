//variables du tableau global qui contiendra toutes les particules
var particles = [];
var bg;

//Commencer la création du canvas
function setup() {
    createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    for (var i = 0; i < 170; i++) {
        particles.push(new Particle(createVector(random(width), random(height))));
    }
}


//Actualiser l'affichage pour les particules
function draw() {
    clear();
    background(0, 0);
    var p;
    for (var i = particles.length - 1; i >= 0; i--) {
      p = particles[i];
      p.run();
  }
}

//////////////////////CREATION DES PARTICULES///////////////////


//Coder la particule
var Particle = function (position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.position = position.copy();
};

//Compléter la particule
Particle.prototype.run = function () {
    this.update();
    this.display();
    this.intersects();
};
//
//Actualiser la particule
Particle.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    //Déplacements de la particule
    this.acceleration.mult(-0.1);
    if (this.position.x < 0) this.position.x = width;
    if (this.position.x > width) this.position.x = 0;
    //Terminer la mise à jour
    if (this.position.y < 0) this.position.y = height;
    if (this.position.y > height) this.position.y = 0;
};

// Détecter les collisions
Particle.prototype.intersects = function () {
    for (var i = 0; i < particles.length; i++) {
        var other = particles[i];
        //A quelle distance se trouve les autres particules (lignes de proximité)
        if (other != this) {
            var dir = p5.Vector.sub(this.position, other.position);
            if (dir.mag() < 12) {
                dir.setMag(0.1);
                this.applyForce(dir);
            }
            //Dessiner les lignes de proximité
            if (dir.mag() < 100) {
                stroke(255, 50);
                strokeWeight(0.5);
                line(this.position.x, this.position.y, other.position.x, other.position.y);
            }
        }
    }
};
//Appliquer de la force
Particle.prototype.applyForce = function (f) {
    this.acceleration.add(f);
};

//Actualiser l'affichage
Particle.prototype.display = function () {
    noStroke();
    fill(255, 170); //couleur
    ellipse(this.position.x, this.position.y, 4, 4);
    var mPos = createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(this.position, mPos);
    // Lignes de proximités avec la souris
    if (dir.mag() < 160) { //160 correspond au rayon ou diamètre de la souris
        stroke(255, 100); //couleur du trait
        strokeWeight(0.5); //épaisseur des traits reliés à la souris
        line(this.position.x, this.position.y, mouseX, mouseY);
    }
};
