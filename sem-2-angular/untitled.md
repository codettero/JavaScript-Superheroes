---
description: >-
  Durată: 50' | Cuvinte cheie: programare orientată pe obiecte, clase, instanță,
  metode, proprietăți, constructor, abstractizare, încapsulare
---

# Lecția 8

## Activitate 1 - Ce este OOP?

Durată: 5' \| Metodă: prelegere \| Materiale: -

OOP \(**object-oriented programming** în engleză sau **programare orientată pe obiecte** în română\) reprezintă o paradigmă de programare. Până acum ați studiat programare procedurală în cadrul orelor de informatică, în care lucrați cu o serie de proceduri \(funcții, subrutine\) ce execută linie cu linie instrucțiunile din interiorul lor. Programarea orientată pe obiecte este un concept \(un mod de gândire/organizare a codului\) și nu este specifică unui singur limbaj, aceasta fiind suportată de multe limbaje de programare \(C++, Java, Python, JavaScript, Go etc\).

OOP presupune lucrul cu clase și obiecte, adică cu șabloane \(un mod de a abstractiza lucrurile din viața reală\) și cu instanțe ale acestora. De exemplu, putem să ne gândim la fiecare casă ca la o clasă: o bucătărie, o sufragerie, x dormitoare, curte etc, toate casele \(instanțele clasei\) urmează același tipar.

Mai multe explicații [aici.](https://dev.to/charanrajgolla/beginners-guide---object-oriented-programming)

## Activitate 2 - Clasă

Durată: 20' \| Metodă: prelegere \| Materiale: -

Clasele reprezintă tipuri de date definite de utilizator și pot fi asemănate cu structurile în C, doar că în plus clasele mai au și funcții în interiorul lor, nu doar variabile. Folosirea claselor ne permite să creem și să utilizăm tipuri de date definite de noi, după nevoile programului, care să abstractizeze lucruri din viața reală.

O clasă este definită prin cuvântul cheie class urmat de numele clasei, scris cu literă mare prin convenție. Corpul acesteia se află între acolade { }.

```javascript
/* o clasă cu numele car */
class Car { 
}
```

O clasă are:

* **constructor**: funcția care este apelată atunci când se crează un obiect de tipul clasei \(numit **instanță**; procesul se numește **instanțiere**\)
* **proprietăți/atribute**: variabilele din interiorul clasei; acestea sunt scrise ca parametru în constructor și primesc valori la instanțiere
* **metode**: funcțiile din interiorul clasei; acestea pot fi apelate pe un obiect al clasei

#### Ce proprietăți și metode poate avea o masină?

Pentru clasa Car definită mai sus, ce proprietăți îi putem adăuga? Proprietățile se referă la caracteristicile obiectului abstractizat \(mașina\): culoare, viteza, model, anul de fabricație, kilometri parcurși, preț și multe altele. 

Dar metode? Metodele se referă la acțiunile din viața reală, caracteristice obiectului abstractizat de clasă \(în cazul nostru, mașina este obiectul abstractizat\). Ca metode, putem avea: accelerare, frânare, parcare și claxonare.

Vom adăuga câteva proprietăți în constructor și metode în clasă.

```javascript
class Car { 
    constructor(color, year, km) {
        this.color = color;
        this.year = year;
        this.km = km;
    }
    
    details() {
        console.log("The car is " + this.color);
    }
    
    accelerate() {
        console.log("The car speeds up.");
    }
    
    park() {
        console.log("The car is parked.");
    }
}

const car = new Car("red", 2013, 20000); /* instantierea unui obiect de tip Car */
car.accelerate(); // printeaza "The car speeds up."
car.park(); // printeaza "The car is parked."
car.details(); // printeaza "The car is red"
```

Constructorul definit la linia 2 primește 3 parametri, adică 3 proprietăți ale clasei Car. Acestea sunt obligatorii și se scriu odată cu instanțierea clasei \(linia 21\). Instanțierea clasei se face prin sintaxa `new numeleClasei(valorile dorite pentru proprietăți)`

Acest apel la constructor întoarce un obiect de tipul clasei, reținut în constanta `car`.

Clasa definită mai sus are 3 proprietăți și 3 metode. Proprietățile sunt atribuite în constructor în variabile interne clasei \(`color, year, și km` nu sunt variabile vizibile în afara constructorului, însă `this.color, this.year și this.km` sunt. Cuvântul `this` face referire la obiectul curent și este utilizat pentru a face diferența între parametrii externi și proprietăți din interiorul clasei.

Pe liniile 22, 23 și 24 au loc apeluri la funcțiile disponibile în clasă. Apelul se realizează prin intermediul unei instanțe a clasei, prin sintaxa **obiect.metodă\(\)** \(`car.park()`\). Dacă apelăm doar park\(\), vom obține eroare, deoarece funcția nu a fost definită \(ea este în interiorul clasei Car\).

În plus, metodele pot avea efecte diferite în funcție de obiectul pe care sunt apelate. Dacă am instanția o nouă mașină, car2, cu o altă culoare, atunci mesajul afișat de funcția details\(\) ar fi diferit.

```javascript
const car2 = new Car("black", 2013, 20000); /* instantierea unui obiect de tip Car */
car2.details(); // printeaza "The car is black"
```

## Activitate 3 - Gettere și settere

Durată: 10' \| Metodă: prelegere \| Materiale: -

Încapsularea este un concept fundamental din programarea orientată pe obiecte. Se referă la faptul că implementarea internă a unui obiect este ascunsă de exterior. Cu alte cuvinte, nu putem accesa în mod direct din exterior proprietățile unui obiect, să le modificăm. Acest lucru protejează instanța respectivă pentru că altfel oricine ar fi putut să modifice valorile.

Astfel, a apărut conceptul de setter și getter. Setterele sunt metode care ne permit să setăm valorile propriteților în mod indirect, iar getterele sunt metode care ne permit să obținem aceste valori. Accesarea metodelor se face prin settere și gettere și nu prin proprietăți propriu-zis De exemplu, nu vom scrie `car.color`, ci `car.getColor()` și pentru a schimba culoarea nu scriem `car.color = "green"` ci folosim o metodă specială pentru acest lucru.

{% hint style="warning" %}
La prima vedere pare că aceste metode nu sunt așa sigure pe cum ne-am dori. Adică oricine poate apela `car.setColor` și să modifice culoarea obiectului respectiv. Ideea de încapsulare ne permite însă să adăugăm parametrii setterelor și getterelor, parametrii care pot fi chei de acces și numai cineva cu cheia respectivă poate modifica atunci valorile. Dacă am folosi direct `car.color`, atunci nu am putea restricționa deloc accesul la proprietatea color.
{% endhint %}

{% hint style="info" %}
În exemplul următor lucrăm cu setterele și getterele libere, fără chei de acces, pentru ușurință.
{% endhint %}

```javascript
class Parrot {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    
    getName() {
        return this.name;
    }
    
    getColor() {
        return this.color;
    }
    
    setName(newName) {
        this.name = newName;
    }
}

const p = new Parrot("Paco", "red");
console.log(p.getName()); // Paco
console.log(p.getColor()); // red
p.setName("Mango");
console.log(p.getName()); // Mango
```

## Activitate 4 - Exemplu

Durată: 5' \| Metodă: prelegere \| Materiale: -

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  calcArea() {
    return this.height * this.width;
  }
  
  isEqual(otherRectangle) {
    if (this.calcArea() == otherRectangle.calcArea()) {
      return true;
    }
    return false;
  }
  
}

const square = new Rectangle(10, 10);
const rectangle = new Rectangle(25, 4);
console.log(rectangle.isEqual(square)); // true
console.log(square.isEqual(rectangle)); // true

const square2 = new Rectangle(10, 10);
console.log(square == square2); // false
console.log(square.isEqual(square2)); // true
```

În exemplul de mai sus putem observa apelul la o funcție din clasă chiar în interiorul clasei \(nu putem apela pe un obiect instanțiat în cazul acesta, așa că apelul are loc cu `this.numeMetodă()`.\)

În plus, cele două dreptunghiuri au fost comparate în cadrul funcției isEqual\(\), care primește ca parametru un obiect tot de tipul Rectangle.

**Ce se întâmplă dacă comparăm două obiecte de același tip?** În exemplul de mai sus, pe linia 25 instanțiem un nou obiect de tipul Rectangle, cu lungime și lățimea egale cu 10. Acesta are aceleași proprietăți ca primul square de pe linia 20. Deși square și square2 au aceeași arie \(conform formulei de calculare a ariei unui dreptunghi\), verificarea de pe linia 26 dă fals, deoarece cele două obiecte nu sunt unul și același. În memorie, fiecare obiect este reținut separat și are propria lui adresă de memorie, iar verificarea de pe linia 26 compară adresele de memorie ale celor două obiecte, care sunt diferite. Pe linia 27, în schimb, comparăm ariile celor două dreptunghiuri, care sunt egale.

## Activitate 5 - Exercițiu

Durată: 10' \| Metodă: prelegere \| Materiale: -

Conform exemplului de mai sus, instanțiați o clasă pentru numere complexe. Clasa are numele **ComplexNumber** și primește prin constructor două proprietăți, **real și imaginar**. Implementați o metodă care adună două numere complexe și una care le înmulțește și testați codul în consolă, linkându-l la o pagină HTML.

![](../.gitbook/assets/logos-02.svg)

