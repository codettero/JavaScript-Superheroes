# Proiectul complet

## index.html

```markup
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1">

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&lang=en">
  <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">

  <link rel="stylesheet" href="stylesheet.css">
  <script type="text/javascript" src="script.js"></script>

  <title>My First Hero App</title>

  </head>

<body>
  <h1>My First Hero App</h1>
  <div class="hero jean" id="jean">

    <a class="hero--btn previous" href="#" onclick="previousHero()">&#60;</a>
    <div class="hero--left">
      <div class="hero--image-container">
        <img class="hero--image" src="img/Jean_Grey.jpg"/>
        <img class="hero--image-back" src="img/Jean_Grey_2.jpg"/>

      </div>
    </div>
    <div class="hero--right">
      <div class="hero--right-inner">
        <h2 class="hero--name">Jean Grey</h2>
        <h4 class="hero--power">Power level:
          <span>Omega-level mutant</span>
        </h4>
        <h4>Hero description:</h4>

        <p class="hero--description">She is an important figure in the lives of other Marvel Universe characters, mostly the X-Men, including her husband
          Cyclops, her mentor and father figure Charles Xavier, her unrequited love interest Wolverine, her best friend and sister-like figure Storm, and her genetic children Rachel Summers, Cable, Stryfe and X-Man.</p>

        <div class="hero--details">
          <h4>Abilities:
            <span class="badge badge-purple">Telepathy</span>
            <span class="badge badge-blue">Telekinesis</span>
            <span class="badge badge-pink">The Phoenix Force</span>
          </h4>
          <div class="hero--details-left">
            <h4>Allies:</h4>
            <ul class="hero--allies">
              <li>
                <h5>Cyclops</h5>
                <img src="img/small-cyclops.jpg" class="img-round" />
              </li>
              <li>
                <h5>Havok</h5>
                <img src="img/small-havok.jpg" class="img-round" />
              </li>
              <li>
                <h5>Corsair</h5>
                <img src="img/small-corsair.jpg" class="img-round" />
              </li>
              <li>
                <h5>Storm</h5>
                <img src="img/small-storm.jpg" class="img-round" />
              </li>
            </ul>
          </div>
          <div class="hero--details-right">
            <h4>Enemies:</h4>
            <ol class="hero--enemies">
              <li>Stryfe</li>
              <li>Genesis</li>
              <li>Emma Frost</li>
              <li>Apocalypse</li>
            </ol>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <a class="hero--btn next" href="#" onclick="nextHero()">&#62;</a>
  </div>

  <div class="hero jean" id="cyclops">
    <a class="hero--btn previous" href="#" onclick="previousHero()">&#60;</a>
    <div class="hero--left">
      <div class="hero--image-container">
        <img class="hero--image" src="img/Cyclops.jpg"/>
        <img class="hero--image-back" src="img/Cyclops_2.jpg"/>
      </div>
    </div>
    <div class="hero--right">
      <div class="hero--right-inner">
        <h2 class="hero--name">Cyclops</h2>
        <h4 class="hero--power">Power level:
          <span>Alpha-Level Mutant</span>
        </h4>
        <h4>Hero description:</h4>
        <p class="hero--description">Cyclops is a member of a the mutants, and typically considered the first of the X-Men, a team of mutant heroes
          who fight for peace and equality between mutants and humans, and one of the team's primary leaders. Cyclops can emit powerful beams of
          energy from his eyes that he cannot control without the aid of special eyewear which he must wear at all times.</p>
        <div class="hero--details">
          <h4>Abilities:
            <span class="badge badge-purple">Optic Blast</span>
            <span class="badge badge-blue">Spatial Awareness</span>
            <span class="badge badge-pink">Energy Resistance</span>

          </h4>
          <div class="hero--details-left">
            <h4>Allies:</h4>
            <ul class="hero--allies">
              <li>
                <h5>Jean Grey</h5>
                <img src="img/small-jeangrey.jpg" class="img-round" />
              </li>
              <li>
                <h5>Havok</h5>
                <img src="img/small-havok.jpg" class="img-round" />
              </li>
              <li>
                <h5>Corsair</h5>
                <img src="img/small-corsair.jpg" class="img-round" />
              </li>
              <li>
                <h5>Storm</h5>
                <img src="img/small-storm.jpg" class="img-round" />
              </li>

            </ul>
          </div>
          <div class="hero--details-right">
            <h4>Enemies:</h4>
            <ol class="hero--enemies">
              <li>Magneto</li>
              <li>Magik</li>
              <li>Emma Frost</li>
              <li>Apocalypse</li>
            </ol>

          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <a class="hero--btn next" href="#" onclick="nextHero()">&#62;</a>
  </div>

 
  <div class="hero jean" id="strange">
    <a class="hero--btn previous" href="#" onclick="previousHero()">&#60;</a>
    <div class="hero--left">
      <div class="hero--image-container">
        <img class="hero--image" src="img/Doctor_Strange.jpg"/>
        <img class="hero--image-back" src="img/Doctor_Strange_2.jpg"/>

      </div>
    </div>
    <div class="hero--right">
      <div class="hero--right-inner">
        <h2 class="hero--name">Doctor Strange</h2>
        <h4 class="hero--power">Power level:
          <span>Master of the Mystic Arts</span>
        </h4>

        <h4>Hero description:</h4>
        <p class="hero--description">Dr. Strange is the Sorcerer Supreme of Earth's Universe; he has unparalleled mastery of the mystic
          arts, which he uses to defend his reality from otherworldly threats; his primary magical patrons are a group of
          entities known as "the Vishanti." Dr. Strange can channel the virtually unlimited extra-dimensional energy of
          nigh-omnipotent mystical and non-mystical beings in multiple dimensions (known as Principalities) to empower his spells.</p>

        <div class="hero--details">
          <h4>Abilities:
            <span class="badge badge-purple">Hypokinesis</span>
            <span class="badge badge-blue">Time Manipulation</span>
            <span class="badge badge-pink">Summoning</span>
          </h4>

           
          <div class="hero--details-left">
            <h4>Allies:</h4>
            <ul class="hero--allies">
              <li>
                <h5>Valkyrie</h5>
                <img src="img/small-valkyrie.jpg" class="img-round" />
              </li>
              <li>
                <h5>Iron Man</h5>
                <img src="img/small-ironman.jpg" class="img-round" />
              </li>
              <li>
                <h5>Hulk</h5>
                <img src="img/small-hulk.jpg" class="img-round" />
              </li>
              <li>
                <h5>Scarlet Witch</h5>
                <img src="img/small-scarletwitch.jpg" class="img-round" />
              </li>
            </ul>
          </div>

          <div class="hero--details-right">
            <h4>Enemies:</h4>
            <ol class="hero--enemies">
              <li>Mordo</li>
              <li>Kaecilius</li>
              <li>Enchantress</li>
              <li>Dormammu</li>
            </ol>
          </div>
          
          <div class="clearfix"></div>
        </div>
      </div>

    </div>
    <div class="clearfix"></div>
    <a class="hero--btn next" href="#" onclick="nextHero()">&#62;</a>
  </div>

  <div class="flyingHero">
    <img src="img/myHero.svg">
  </div>

</body>
</html>
```

## stylesheet.css

```css
/* Pasul 2 */
body {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #212529;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  overflow-x: hidden;
  position: relative;
}

.clearfix {
  overflow: auto;
}

/* Pasul 4 */
.hero--left {
  width: 40%;
  position: relative;
}

.hero--image {
  width: 100%;
  height: auto;
  position: absolute;
  backface-visibility: hidden;
}

.hero--image-back {
  width: 100%;
  height: auto;
  position: absolute;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  backface-visibility: hidden;
}

.hero--image-container {
  min-height: 660px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .6s cubic-bezier(.55,.09,.68,.53) .05s;
  -webkit-transform-style: preserve-3d;
  -webkit-transition: -webkit-transform .6s cubic-bezier(.55,.09,.68,.53) .05s;
}

.hero--left:hover .hero--image-container {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
}

/* Pasul 5 */
.hero {
  width: 70%;
  min-width: 900px;
  position: absolute;
  left: 15%;
  top: 115px; /* TODO: 2 linii aici */
}

.hero--right {
  width: 60%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 40%;
}

.hero--details-left {
  width: 70%;
  float: left;
}

.hero--details-right {
  width: 30%;
  float: right;
}

/* Pasul 6 */
.hero--allies {
  padding: 0;
  margin: 0;
}

.hero--allies li {
  display: inline-block;
  margin-right: 18px;
}

.hero--allies li h5 {
  margin-top: 0;
}

.hero--right-inner {
  padding-left: 50px;
}

.hero--right-inner h4 {
  margin-bottom: 0;
}

.hero--right-inner p {
  margin-top: 0;
  color: #808488;
}

h1 {
  text-align: center;
  margin-bottom: 70px;
  font-family: 'Oswald', sans-serif;
}

h2 {
  font-family: 'Oswald', sans-serif;
}

/* Pasul 7 */ 
.img-round {
  width: 50px;
  border-radius: 50%;
}

/* Pasul 8 */
.badge {
  text-shadow: none;
  font-size: 12px;
  padding: 1px 15px;
  font-weight: normal;
  line-height: 15px;
  border-radius: 20px;
  color: #fff;
}

.badge-purple {
  background-color: #9585bf;
}

.badge-blue {
  background-color: #305ecc;
}

.badge-pink {
  background-color: #ff4ca5;
}

.hero--power span{
  border-bottom: 5px solid #ff4ca5;
  color: #808488;
}

/*#cyclops {
  left: 15% !important;
  top: 100vh;
}
#strange {
  left: 15% !important;
  top: 180vh;
}*/

/* Animatie */
.flyingHero {
  position: fixed;
  left: -500px;
  top: 50%;
  animation: fly 6s 3;
}

.flyingHero img {
  position: relative;
  height: 400px;
  transform: rotate(45deg);
}

@keyframes fly {
  0% {
    left: -560px;
    top: calc(50vh - 280px);
  }
  30% {
    left: calc(100vw - 450px);
    top: calc(100vh - 400px);
  }
  60% {
    left: calc(100vw - 450px);
    top: 0;
  }
  100% {
    left: -560px;
    top: calc(50vh - 280px);
  }
}

/* Butoanele de inainte si dupa */
.hero--btn {
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  background: rgb(249, 243, 243);
  color: #000;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  line-height: 2.5;
  -webkit-box-shadow: 4px 4px 5px 2px rgba(133,133,133,1);
  -moz-box-shadow: 4px 4px 5px 2px rgba(133,133,133,1);
  box-shadow: 4px 4px 5px 2px rgba(133,133,133,1);
}

.hero--btn:hover {
  background: #9585bf;
  color: #fff;
  -webkit-transform: scale(1.2); /* Ch <36, Saf 5.1+, iOS < 9.2, An =<4.4.4 */
      -ms-transform: scale(1.2); /* IE 9 */
          transform: scale(1.2); /* IE 10, Fx 16+, Op 12.1+ */
}

.previous {
  margin-left: -62px;
}

.next {
  right: 0;
  margin-right: -62px;
}

/* Navigarea intre supereroi */
#jean.jean {
  left: 15%;
}

#cyclops.jean {
  left: 115%;
}

#strange.jean {
  left: 215%;
}

#jean.cyclops {
  left: -85%;
}

#cyclops.cyclops {
  left: 15%;
}

#strange.cyclops {
  left: 115%;
}

#jean.strange {
  left: -185%;
}

#cyclops.strange {
  left: -85%;
}

#strange.strange {
  left: 15%;
}


```

## script.js

```javascript
/*
  Hero 0 - Jean Grey
  Hero 1 - Cyclops
  Hero 2 - Doctor Strange
*/

let currentHero = 0;

let nextHero = function() {
  if (currentHero === 0) {
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("cyclops");
      document.getElementById(hero).classList.remove("jean");
    });
    currentHero = 1;
  } else if (currentHero === 1) {
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("strange");
      document.getElementById(hero).classList.remove("cyclops");
    });
    currentHero = 2;
  } else if (currentHero === 2) {
      ["jean", "cyclops", "strange"].forEach(function(hero) {
        document.getElementById(hero).classList.add("jean");
        document.getElementById(hero).classList.remove("strange");
      });
      currentHero = 0;
    }
};

let previousHero = function() {
  if (currentHero === 1) {
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("jean");
      document.getElementById(hero).classList.remove("cyclops");
    });
    currentHero = 0;
  } else if (currentHero === 2) {
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("cyclops");
      document.getElementById(hero).classList.remove("strange");
    });
    currentHero = 1;
  } else if (currentHero === 0) {
      ["jean", "cyclops", "strange"].forEach(function(hero) {
        document.getElementById(hero).classList.add("strange");
        document.getElementById(hero).classList.remove("jean");
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

```

![](../.gitbook/assets/copy-of-logo-techtor-05.png)

