const myHeroes = [{
  "image": "img/Jean_Grey.jpg",
  "name": "Jean Grey",
  "power": "Omega-level mutant",
  "description": `She is an important figure in the lives of other Marvel Universe characters, mostly the X-Men, including her husband
    Cyclops, her mentor and father figure Charles Xavier, her unrequited love interest Wolverine, her best friend and
    sister-like figure Storm, and her genetic children Rachel Summers, Cable, Stryfe and X-Man.`,
  "abilities": ["Telepathy", "Telekinesis", "The Phoenix Force"],
  "allies": [
    {
      "name": "Cyclops",
      "image": "img/small-cyclops.jpg"
    }, {
      "name": "Havok",
      "image": "img/small-havok.jpg"
    }, {
      "name": "Corsair",
      "image": "img/small-corsair.jpg"
    }, {
      "name": "Storm",
      "image": "img/small-storm.jpg"
    }
  ],
  "enemies": ["Stryfe", "Genesis", "Emma Frost", "Apocalypse"]
}, {
  "image": "img/Cyclops.jpg",
  "name": "Cyclops",
  "power": "Alpha-Level Mutant",
  "description": `Cyclops is a member of a the mutants, and typically considered the first of the X-Men, a team of mutant heroes
    who fight for peace and equality between mutants and humans, and one of the team's primary leaders. Cyclops can emit powerful beams of
    energy from his eyes that he cannot control without the aid of special eyewear which he must wear at all times.`,
  "abilities": ["Optic Blast", "Spatial Awareness", "Energy Resistance"],
  "allies": [
    {
      "name": "Jean Grey",
      "image": "img/small-jeangrey.jpg"
    }, {
      "name": "Havok",
      "image": "img/small-havok.jpg"
    }, {
      "name": "Corsair",
      "image": "img/small-corsair.jpg"
    }, {
      "name": "Storm",
      "image": "img/small-storm.jpg"
    }
  ],
  "enemies": ["Magneto", "Magik", "Emma Frost", "Apocalypse"]
}, {
  "name": "Doctor Strange",
  "power": "Master of the Mystic Arts",
  "description": `Dr. Strange is the Sorcerer Supreme of Earth's Universe; he has unparalleled mastery of the mystic
    arts, which he uses to defend his reality from otherworldly threats; his primary magical patrons are a group of
    entities known as "the Vishanti." Dr. Strange can channel the virtually unlimited extra-dimensional energy of
    nigh-omnipotent mystical and non-mystical beings in multiple dimensions (known as Principalities) to empower his spells.`,
  "abilities": ["Hypokinesis", "Banish", "Summoning", "Telekinesis", "Time Manipulation"],
  "allies": [
    {
      "name": "Valkyre",
      "image": "img/valkyre.jpg"
    }, {
      "name": "Iron Man",
      "image": "img/ironman.jpg"
    }, {
      "name": "Hulk",
      "image": "img/hulk.jpg"
    }, {
      "name": "Scarlet Witch",
      "image": "img/scarletwitch.jpg"
    }
  ],
  "enemies": ["Mordo", "Kaecilius", "Enchantress", "Dormammu"]
}, {
  "image": "",
  "name": "",
  "power": "",
  "description": ``,
  "abilities": [],
  "allies": [
    {
      "name": "",
      "image": ""
    }
  ],
  "enemies": []
}];

let currentHero;

let loadHero = function(heroNumber) {
  document.getElementById("heroName").innerHTML = myHeroes[heroNumber].name;
  document.getElementById("power").innerHTML = myHeroes[heroNumber].power;
  document.getElementById("description").innerHTML = myHeroes[heroNumber].description;

  document.getElementById("ability-1").innerHTML = myHeroes[heroNumber].abilities[0];
  document.getElementById("ability-2").innerHTML = myHeroes[heroNumber].abilities[1];
  document.getElementById("ability-3").innerHTML = myHeroes[heroNumber].abilities[2];

  document.getElementById("enemy-1").innerHTML = myHeroes[heroNumber].enemies[0];
  document.getElementById("enemy-2").innerHTML = myHeroes[heroNumber].enemies[1];
  document.getElementById("enemy-3").innerHTML = myHeroes[heroNumber].enemies[2];
  document.getElementById("enemy-4").innerHTML = myHeroes[heroNumber].enemies[3];

  document.getElementById("image").src = myHeroes[heroNumber].image;

  document.getElementById("ally-1").getElementsByTagName("h5")[0].innerHTML = myHeroes[heroNumber].allies[0].name;
  document.getElementById("ally-1").getElementsByTagName("img")[0].src = myHeroes[heroNumber].allies[0].image;
  document.getElementById("ally-2").getElementsByTagName("h5")[0].innerHTML = myHeroes[heroNumber].allies[1].name;
  document.getElementById("ally-2").getElementsByTagName("img")[0].src = myHeroes[heroNumber].allies[1].image;
  document.getElementById("ally-3").getElementsByTagName("h5")[0].innerHTML = myHeroes[heroNumber].allies[2].name;
  document.getElementById("ally-3").getElementsByTagName("img")[0].src = myHeroes[heroNumber].allies[2].image;
  document.getElementById("ally-4").getElementsByTagName("h5")[0].innerHTML = myHeroes[heroNumber].allies[3].name;
  document.getElementById("ally-4").getElementsByTagName("img")[0].src = myHeroes[heroNumber].allies[3].image;
};

let previousHero = function() {
  if (currentHero === 0) {
    currentHero = myHeroes.length - 1;
  } else {
    currentHero--;
  }
  loadHero(currentHero);
};

let nextHero = function() {
  if (currentHero === (myHeroes.length - 1)) {
    currentHero = 0;
  } else {
    currentHero++;
  }
  loadHero(currentHero);
};

window.onload = function() {
  currentHero = 0;
  loadHero(currentHero);
}
