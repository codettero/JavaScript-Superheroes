---
description: 'Durată: 50'' | Cuvinte cheie: imagini, liste ordonate, liste neordonate'
---

# Lecția 3

## **Activitate 1 - Recapitulare**

Durată: 5' \| Metodă: dezbatere, conversație \| Materiale: -

1. Menționați cele două etichete nepereche studiate anterior și rolul lor într-o pagină web.
2. Care este valoarea în hexazecimal a culorii roșu pur? Dar verde pur?
3. Care este culoarea în format RGB a culorii albastru? Dar a lui negru și a lui alb?
4. Care dintre următoarele linii descrie corect scrierea unei etichete nepereche cu două atribute?

   a. &lt;tag atribut1&lt;="valoarea1" atribut2&lt;="valoarea2"&gt;

   b. &lt;tag atribut1="valoarea1" atribut2="valoarea2"&gt;

   c. &lt;tag atribut1=valoarea1 atribut2=valoarea2&gt;

   d. &lt;tag atribut1="valoarea1, valoarea2"&gt;

   e. &lt;tag atribut1="valoarea1", atribut2="valoarea2"&gt;

## **Activitate 2 - Adăugare de imagini**

Durată: 15' \| Metodă: demonstrație, conversație, exercițiu, dezbatere \| Materiale: videoproiector

Conținutul unei pagini web nu este alcătuit doar din text, ci putem adăuga o mulțime de alte elemente, cum ar fi imagini. Eticheta pentru imagini este `<img>`. Aceasta nu se închide. Tag-ul `<img>` are un atribut obligatoriu, `src` \(de la source\), care specifică denumirea și calea spre imagine, pentru a ști browserul ce imagine să încarce.

```markup
<img src="nume.jpg">
```

Cu ajutorul codului de mai sus adăugăm o imagine salvată sub denumirea de **nume.jpg**. Și extensia trebuie inclusă în sursă.

Un aspect important este acela că în src trebuie specificată întreaga cale a imaginii pentru a o găsi. Dacă aceasta se află în același folder cu fișierul html în care este adăugată, atunci calea coincide cu numele complet al imaginii. Dacă se află în altă parte, trebuie menționată calea completă \(de exemplu: `User/Desktop/MyFiles/Photos/img.png`\) sau calea relativă a pozei față de fișierul html \(începând de la primul director diferit\).

De regulă, se creează un folder pentru întregul proiect, care conține fișierele **html**, **css** și **js** și un alt folder în care se află resursele. Dacă structura ar fi următoarea:

```markup
project/
	index.html
	style.css
	script.js 
		resurse/
			img/
				cat.png
				dog.jpg
			video/
```

Pentru a adăuga poza cat.png în fișierul **index.html**, calea relativă a pozei la fișierul html este `./resurse/img/cat.png`, deci eticheta va fi `<img src="resurse/img/cat.png">`.

Iar pentru o structură de forma:

```markup
project/
		index.html
		style.css
		script.js 
		cat.png
```

Pentru a adăuga poza cat.png în fișierul **index.html**, calea relativă a pozei la fișierul html este `./cat.png` \(poza și fișierul html se află în același folder\), deci eticheta va arăta `<img src="cat.png">`.

{% hint style="info" %}
./cat.jpg este același lucru cu cat.jpg, ambele arătând că se află în fișierul curent, care este denumit de simbolul punctului.
{% endhint %}

{% hint style="info" %}
Dacă poza pe care dotiți să o introduceți nu apare, atunci trebuie să verificați următoarele lucruri:

* numele pozei să fie scris corect \(atât denumirea, cât și extensia\); `cat.jpg` este diferit față de `cat.png`
* calea către poză să fie scrisă corect \(fără typo-uri în adresa la care se află poza\)
* poza să existe la calea menționată

Dacă nu sunt respectate acestea, poza nu va fi găsită.
{% endhint %}

### Atributele imaginilor

Cel mai important atribut, fără de care nu există imaginea, este `src`, cel despre care am discutat mai devreme. Pe lângă acesta, mai există câteva atribute utile pentru imagini:

* **width** - setează lățimea imaginii în pixeli
* **height** - setează înălțimea imaginii în pixeli
* **border** - adaugă bordură imaginii; valoarea este măsurată în pixeli și determină cât de groasă este bordura
* **title** - adaugă un titlu imaginii, care apare atunci când cursorul mouse-ului este poziționat pe imagine
* **alt** - adaugă un mesaj care apare atunci când imaginea nu este disponibilă

{% hint style="info" %}
Atributele pot fi adăugate în orice ordine, despărțite prin spații. Nu este obligatoriu ca primul atribut să fie src, însă pentru lizibilitate, este recomandat.

```markup
<img src="cat.jpg" alt="indisponibil" width="300px" height="500px" title="Cat" border="2">
```
{% endhint %}

#### Exerciții

1. Salvați o imagine de pe internet în același folder cu pagina html în care ați lucrat până acum. Adăugați această imagine în conținutul paginii web. Trebuie adăugată în head sau în body? Cum ați adăuga imaginea?
2. Setați un titlu imaginii cu atributul title și observați cum apare atunci când cursorul mouse-ului este poziționat pe imagine.
3. Modificați lățimea și înălțimea imaginii cu ajutorul atributelor. Încercați diverse valori pentru a vedea cum se deformează, imaginea nefiind scalată.
4. Adăugați bordură imaginii și testați diverse valori pentru grosimea acesteia.

## Activitatea 3 - Liste ordonate

Durată: 15' \| Metodă: demonstrație, conversație, exercițiu \| Materiale: videoproiector

Putem organiza conținutul paginii web și sub forma unei liste. Listele au proprietatea ca elementele lor sunt diferențiate de **marcatori**. Pentru listele ordonate, marcatorii păstrează ordinea și pot fi reprezentați de **cifre arabe, cifre romane, litere mari sau mici**. 

Eticheta pentru listă ordonată este `<ol>` \(de la ordered list\) și este o etichetă pereche, închizându-se cu `</ol>`. Un element al listei este adăugat cu ajutorul etichetei `<li>` \(list item\) care se închide cu `</li>`.

#### Exemplu

```markup
<h3> Pentru a crea pagini web, învățăm: </h3>
<ol>
    <li> HTML </li>
    <li> CSS </li>
    <li> JavaScript </li>
</ol>
```

Nu am specificat niciun marcator, deci se observă că marcatorii default sunt numerele arabe. Putem specifica tipul de marcatori cu ajutorul atributelor. În exemplul următor vom adăuga un marcator pentru toată lista.

```markup
<h3> Pentru a crea pagini web, învățăm: </h3>
<ol type="A">
    <li> HTML </li>
    <li> CSS </li>
    <li> JavaScript </li>
</ol>
```

Acum elementele listei sunt marcate cu A, B, C… Pentru litere mici am fi specificat `<ol type="a">`, pentru numere romane `<ol type="I">`, iar pentru numere arabe `<ol type="1">`.

## Activitatea 4 - Liste neordonate

Durată: 15' \| Metodă: demonstrație, conversație, exercițiu, dezbatere \| Materiale: videoproiector

Listele neordonate sunt similare cu cele ordonate, doar că de data aceasta **marcatorii nu păstrează o anumită ordine a elementelor**. În loc sa fie numere sau litere, marcatorii pentru listele ordonate sunt **cerc, disc, pătrat sau inexistent**.

Eticheta pentru lista neordonată este `<ul>` \(de la unordered list\) și este o etichetă pereche, care se închide cu `</ul>`. Elementele se adaugă tot cu `<li> </li>`

#### Exemplu

```markup
<h3> Lista de supereroi: </h3>
<ul>
    <li> Superman </li>
    <li> Wonderwoman </li>
    <li> Deadpool </li>
</ul>
```

Nu am specificat niciun marcator, deci se observă că marcatorii default sunt disc-urile \(bullet points\). Putem folosi un anumit tip de marcatori cu ajutorul atributelor. În exemplul următor vom adăuga un marcator pentru toată lista.

```markup
<h3> Lista de supereroi: </h3>
<ul type="square">
    <li> Superman </li>
    <li> Wonderwoman </li>
    <li> Deadpool </li>
</ul>
```

Acum elementele listei sunt marcate pătrate. Pentru cercuri am fi specificat `<ul type="circle">`, pentru disc-uri `<ul type ="disc">`, iar pentru lipsa marcatorilor `<ul type="none">`.

{% hint style="info" %}
Tipul liste poate fi poziționat, după cum am văzut până acum, pe întreaga lista, ca atribut al etichetei `ul` sau `ol`. Însă fiecare element al listei poate avea un marcator separat, menționat în cadrul etichetei `li`.
{% endhint %}

#### Exerciții

1. Adăugați în conținut o listă ordonată cu minim 5 elemente cu materiile pe care le studiați la școală. Adăugați și un titlu listei, folosind heading-ul h5. Testați toate tipurile de marcatori pentru lista ordonată.
2. Schimbați lista adăugată din ordonată în neordonată. Testați toate tipurile de marcatori pentru lista neordonată. Adăugați 2 elemente în plus.

![](../.gitbook/assets/logos-02%20%281%29.svg)

