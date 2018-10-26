let currentHero = 0;

let previousHero = function() {
  if (currentHero === 1) {
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("leftScreen");
      document.getElementById(hero).classList.remove("mainScreen");
    });
    currentHero = 0;
  } else if (currentHero === 2) {
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("mainScreen");
      document.getElementById(hero).classList.remove("rightScreen");
    });
    currentHero = 1;
  }
};

let nextHero = function() {
  if (currentHero === 0) {
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("mainScreen");
      document.getElementById(hero).classList.remove("leftScreen");
    });
    currentHero = 1;
  } else if (currentHero === 1) {
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("rightScreen");
      document.getElementById(hero).classList.remove("mainScreen");
    });
    currentHero = 2;
  }
};

window.onkeydown = function(event) {
    if (event.keyCode == '37') { // left arrow
       previousHero();
    } else if (event.keyCode == '39') { // right arrow
       nextHero();
    }

}
