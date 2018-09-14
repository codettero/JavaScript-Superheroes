let currentHero = 0;

let previousHero = function() {
  if (currentHero === 1) {
    ["hero0", "hero1", "hero2"].forEach(function(hero) {
      document.getElementById(hero).classList.add("firsthero");
      document.getElementById(hero).classList.remove("secondhero");
    });
    currentHero = 0;
  } else if (currentHero === 2) {
    ["hero0", "hero1", "hero2"].forEach(function(hero) {
      document.getElementById(hero).classList.add("secondhero");
      document.getElementById(hero).classList.remove("thirdhero");
    });
    currentHero = 1;
  }
};

let nextHero = function() {
  if (currentHero === 0) {
    ["hero0", "hero1", "hero2"].forEach(function(hero) {
      document.getElementById(hero).classList.add("secondhero");
      document.getElementById(hero).classList.remove("firsthero");
    });
    currentHero = 1;
  } else if (currentHero === 1) {
    ["hero0", "hero1", "hero2"].forEach(function(hero) {
      document.getElementById(hero).classList.add("thirdhero");
      document.getElementById(hero).classList.remove("secondhero");
    });
    currentHero = 2;
  }
};

window.onload = function() {
  currentHero = 0;
  loadHero(currentHero);
}
