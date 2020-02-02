# Lecția 2

**Durată:** 50 min

**Cuvinte cheie:** atribute, culori, imagini, liste

## Activitate 1 - Recapitulare

Durată: 5' \| Metodă: prelegere \| Materiale: -

1. Ce este web designul?
2. Ce este HTML? Enumerați caracteristicile acestuia.
3. Care este structura de baza a unei pagini HTML?
4. Dați exemple de etichete pereche învățate.
5. Dați exemple de etichete nepereche învățate și rolul acestora.
6. Ce se adaugă în head și ce se adaugă în body?

## Acti**vitate 2 - Atribute**

Durată: 5' \| Metodă: prelegere \| Materiale: videoproiector

Am discutat în prima lecție despre etichete, structura standard a acestora fiind: ****`<tag> content </tag>`

Pe lângă numele etichetei și conținutul acesteia, etichetele pot să mai aibă și atribute. Acestea ajută la formatarea conținutului într-un anumit fel sau la indicarea sursei conținutului. Pentru a adăuga atribute, acestea sunt menționate în interiorul etichetei, și anume:

```markup
<tag atribut_1="valoare" atribut_2="valoare"> continut </tag>
```

După numele etichetei, adăugăm spațiu, numele atributului, urmat de semnul `=` și, între ghilimele, valoarea atributului. Este important să vă asigurați că etichetele arată ca `""` și nu `“”`. Mai multe atribute pot fi adăugate în aceeași etichetă, fiind separate de spații. Ordinea lor nu contează și nu există un număr maxim de atribute ce poate fi adăugat.

### Exemplu

Eticheta `<hr>` adaugă un o linie despărțitoare, neagră. Cu ajutorul atributelor putem sa îi modificăm culoarea, astfel:

`<hr color="blue">` sau `<hr color="red">`.

### Exercițiu

Testează mai multe culori în body, unde ai adăugat eticheta &lt;hr&gt; între cele două paragrafe. Valorile atributelor pot fi culorile în limba engleză: yellow, orange, green etc.

## **Activitate 3 - Formarea culorilor**

Durată: 10' \| Metodă: prelegere \| Materiale: videoproiector

### Culori

Deși HTML înțelege specificarea culorilor în limba engleză, acestea au un format standard de reprezentare numit RGB \(red, green, blue\). Prin intermediul acestui format putem obține orice culoare, combinând în toate modurile posibile cele trei culori de bază.

Formatul are trei parametrii, câte unul pentru fiecare culoare. Dacă ne gândim la nuanțe ca la niște amestecuri de trei culori de bază - **roșu**, **verde** și **albastru**, atunci acești parametrii reprezintă cantitatea din fiecare culoare de bază pe care o adăugăm în amestec, cu scopul obținerii unei noi culori. Fiecare parametru poate să ia o valoare între 0 \(nul\) și 255 \(maximul din culoarea respectivă\).

#### Exemplu

Dacă scriem culoarea `rgb(0, 0, 0)`, specificăm lipsa totală a culorii roșu, verde și albastru, reprezentând astfel **negru**. Similar, `rgb(255, 255, 255)` reprezintă cantitatea maximă din toate culorile de bază, reprezentând astfel **alb**.

* `rgb(255, 0, 0)` = maxim din roșu, nimic din verde și albastru
* `rgb(0, 255, 0)` = maxim din verde, nimic din roșu și albastru
* `rgb(0, 0, 255)` = maxim din albastru, nimic din roșu și verde
* `rgb(255, 255, 0)` = maxim din roșu și verde, nimic din albastru
* `rgb(255, 0, 255)` = maxim din roșu și albastru, nimic din verde
* `rgb(0, 255, 255)` = maxim din verde și albastru, nimic din roșu

![](../.gitbook/assets/group-5.png)

Se pot forma astfel orice combinații de culori, dacă dăm valori de la 0 la 255 pentru cei trei parametrii - roșu, verde și albastru.

Nu putem ști pe dinafară toate combinațiile și ce culori o să iasă. Astfel, există site-uri care ne ajută să testăm parametrii aleși și să vedem ce culoare se obține. Unul dintre acestea este [Colors RGB](https://www.w3schools.com/colors/colors_rgb.asp) sau orice color picker găsit pe internet.

### Format hexazecimal

Culorile pot fi reprezentate și în format **hexazecimal**, adică alcătuite din restul împărțirii la 16 \(cifrele 0-9 și literele a-b\). Restul 10 este reprezentat de litera ‘`a`’, restul 11 de ‘`b`’, …, restul 15 de ‘`f`’. Culorile în hexazecimal încep cu semnul `#` urmat de 6 caractere, primele două pentru roșu, următoarele două pentru verde și ultimele două pentru albastru. 

Am menționat anterior că aceste trei culori sunt folosite pentru a format orice alte culori și sunt combinate, folosind valori de la 0 la 255. Transformat în format hexazecimal, 0 este 00, iar 255 este ff. Numerele pot fi transformate în format hexazecimal prin împărțirea la 16 și salvarea restului, întocmai ca la conversia binară.

#### Exemplu: **rgb\(90, 111, 7\) devine \#5a6f07 după următorul algoritm:**

* roșu are parametrul 90, verde 111 și albastru 7
* Transformăm 90 din decimal în hexazecimal, prin împărțiri la 16:
* 90 : 16 = 5 rest 10, luăm restul 10, care este ‘a’
* 5 : 16 = 0 rest 5, luăm restul 5
* Astfel, se formează 5a, deci 90 în baza 10 este echivalent cu 5a în baza 16
* Transformăm 111 din decimal în hexazecimal, prin împărțiri la 16:
* 111 : 16 = 6 rest 15, luăm restul 15, care este ‘f’
* 6 :  16 = 0 rest 6, luăm restul 6
* Astfel, se formează 6f, deci 111 în baza 10 este echivalent cu 6f în baza 16
* Transformăm 7 din decimal în hexazecimal, prin împărțiri la 16:
* 7 : 16 = 0 rest 7, luăm restul 7 Astfel, se formează 07, deci 7 în baza 10 este echivalent cu 7 în baza 16 \(se adaugă 0 în față pentru că fiecare parametru transformat are exact 2 caractere\)

{% hint style="info" %}
Nu trebuie să faceți aceste calcule de fiecare dată când formați o culoare, pentru că există o multitudine de site-uri care vă ajută la formarea culorilor și calculeaza automat codul pentru culoarea respectivă \([Colors picker](https://www.w3schools.com/colors/colors_picker.asp)\).
{% endhint %}

## **Activitate 4 - Adăugare de imagini**

Durată: 10' \| Metodă: prelegere \| Materiale: videoproiector

Conținutul unei pagini web nu este alcătuit doar din text, ci putem adăuga o mulțime de alte elemente, cum ar fi imagini. Eticheta pentru imagini este `<img>`. Aceasta nu se închide. Tag-ul `<img>` are un atribut obligatoriu, `src` \(de la source\), care specifică denumirea și calea spre imagine, pentru a ști browserul ce imagine să încarce.

```markup
<img src="nume.jpg">
```

Cu ajutorul codului de mai sus adăugăm o imagine salvată sub denumirea de **nume.jpg**. Și extensia trebuie inclusă în sursă. 

Un aspect important este acela că în src trebuie specificată întreaga cale a imaginii, pentru a o găsi. Dacă aceasta se află în același folder cu fișierul html în care este adăugată, atunci calea coincide cu numele complet al imaginii. Dacă se află în altă parte, trebuie menționată calea completă \(de exemplu: `User/Desktop/MyFiles/Photos/img.png`\) sau calea relativă a pozei față de fișierul html \(începând de la primul director diferit\).

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

Pentru a adăuga poza cat.png în fișierul **index.html**, calea pozei relativă la fișierul html este `./resurse/img/cat.png`, deci eticheta va arăta `<img src="resurse/img/cat.png">`.

Iar pentru o structură de forma:

```markup
project/
		index.html
		style.css
		script.js 
		cat.png
```

Pentru a adăuga poza cat.png în fișierul **index.html**, calea pozei relativă la fișierul html este `./cat.png` \(poza și fișierul html se află în același folder\), deci eticheta va arăta `<img src="cat.png">`.

{% hint style="info" %}
./cat.jpg este acelasi lucru cu cat.jpg, ambele denotand ca se afla in fisierul curent \(notat cu punct\)
{% endhint %}

{% hint style="info" %}
Dacă poza nu apare, asigurați-vă că ați scris calea corect și numele pozei, cu tot cu extensie, sunt corecte.
{% endhint %}

### Atributele imaginilor

Cel mai important atribut, fără de care nu există imaginea, este `src`, cel despre care am discutat mai devreme. Pe lângă acesta, mai există câteva atribute utile pentru imagini:

* **width** - setează lățimea imaginii în pixeli
* **height** - setează înălțimea imaginii în pixeli
* **border** - adaugă bordură imaginii; valoarea este măsurată în pixeli, care determină cât de groasă este bordura
* **title** - adaugă un titlu imaginii, care apare atunci când cursorul mouse-ului e poziționat pe imagine
* **alt** - adaugă un mesaj care apare atunci când imaginea nu e disponibilă

{% hint style="info" %}
Atributele pot fi adăugate în orice ordine, despărțite prin spații. Nu este obligatoriu ca primul atribut să fie src, însă pentru lizibilitate, e recomandat.

```markup
<img src="cat.jpg" alt="indisponibil" width="300px" height="500px" title="Cat" border="2">
```
{% endhint %}

#### Exerciții

1. Salvați o imagine de pe internet în același folder cu pagina html în care ați lucrat până acum. Adăugați această imagine în conținutul paginii web. Trebuie adăugată în head sau în body? Cum ați adăuga imaginea?
2. Setați un titlu imaginii cu atributul title și observați cum apare atunci când cursorul mouse-ului este poziționat pe imagine.
3. Modificați lățimea și înălțimea imaginii cu ajutorul atributelor. Încercați diverse valori pentru a vedea cum se deformează, imaginea nefiind scalată.
4. Adăugați bordură imaginii și testați diverse valori pentru grosimea acesteia.

## Liste ordonate

Durată: 10' \| Metodă: prelegere \| Materiale: videoproiector

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

Nu am specificat niciun marcator, deci se observă că marcatorii default sunt numerele arabe. Putem folosi un anumit tip de marcatori cu ajutorul atributelor. În exemplul următor vom adăuga un marcator pentru toată lista.

```markup
<h3> Pentru a crea pagini web, învățăm: </h3>
<ol type="A">
    <li> HTML </li>
    <li> CSS </li>
    <li> JavaScript </li>
</ol>
```

Acum elementele listei sunt marcate cu A, B, C… Pentru litere mici am fi specificat `<ol type="a">`, pentru numere romane `<ol type="I">`, iar pentru numere arabe `<ol type="1">`.

## Liste neordonate

Durată: 10' \| Metodă: prelegere \| Materiale: videoproiector

Listele neordonate sunt similare cu cele ordonate, doar că de data aceasta **marcatorii nu păstrează o anumită ordine a elementelor**. În loc sa fie numere sau litere, marcatorii pentru listele ordonate sunt **cerc, disc, pătrat sau inexistent**. 

Eticheta pentru listă neordonată este `<ul>` \(de la unordered list\) și este o etichetă pereche, care se închide cu `</ul>`. Elementele se adaugă tot cu `<li> </li>`

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

1. 1. Adăugați în conținut o listă ordonată cu minim 5 elemente cu materiile pe care le studiați la școală. Adăugați și un titlu listei, folosind heading-ul h5. Testați toate tipurile de marcatori pentru lista ordonată.
   2. Schimbați lista adăugată din ordonată în neordonată. Testați toate tipurile de marcatori pentru lista neordonată. Adăugați 2 elemente în plus.

  
  


  


  
  


  


  




  
  


  
  


