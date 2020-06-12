---
description: 'Durată: 50'' | Cuvinte cheie: menu, formular'
---

# Lecția 6

## Activitatea 1 - meniu

Durată: 10' \| Metodă: demonstrație, conversație, exercițiu \| Materiale: videoproiector

În lecția trecută am discutat despre butoane și legături externe. Acum haideți să creăm un meniu pentru pagina noastră web. Vom adăuga mai  multe butoane pentru a accesa diverse platforme.

```markup
<!DOCTYPE html>
<html>
<head>
<title> Menu </title>
</head>
<body>


<a href="https://google.com" target="_blank"><button>Go to Google</button></a>
<a href="https://reddit.com" target="_blank"><button>Go to Reddit</button></a>
<a href="https://twitter.com" target="_blank"><button>Go to Twitter</button></a>

</body>
</html>
```

Codul de mai sus a creat 3 butoane unul lângă celălalt, fiecare ducând la câte o pagină separată. Funcționalitatea este corectă, însă momentan aspectul lasă de dorit. Vom îmbunătăți acest lucru în lecțiile următoare, când învățăm CSS.

## Activitate 2 - formular

Durată: 20' \| Metodă: demonstrație, conversație, exercițiu \| Materiale: videoproiector

Pentru a adăuga formulare, există etichete speciale care desemnează tipurile de input și scopul lor.

Eticheta pentru formular este una pereche, `<form> </form>`. În cadrul acesteia vom include etichetele pentru input.

**Input-urile** sunt definite de eticheta `<input> </input>` și sunt de mai multe tipuri, în funcție de tipul informației cerute. **Label-urile** sunt definite de eticheta `<label> </label>` și sunt textele care apar deasupra input-urilor și care desemnează scopul unui input field.

În exemplul de mai jos, am creat un formular în care un user poate completa numele și prenumele său. Acest tip de input se numește _text_.

```markup
<form>

  <label for="first_name">First name:</label> <br>
  <input type="text" id="first_name" name="first_name" value="John" /><br>
  
  <label for="last_name">Last name:</label> <br>
  <input type="text" id="last_name" name="last_name" value="Doe" />

</form>
```

Atributele folosite pentru `input`:

* type: arată tipul câmpului; poate avea, printre altele, valorile text, password, number, color
* id și name: nu influențează aspectul elementului în pagina web, dar au rolul de identificatori și pot fi utili în CSS sau JavaScript
* value: specifică valoarea inițială a câmpului, înainte ca utilizatorul să tasteze ceva

Să vedem și alte tipuri de input:

**Input pentru parole**: atributul type este setat la valoarea "password". Acest tip de input face ca mesajul introdus să fie tipărit cu caractere ascunse. Putem seta lungimea minimă și maximă a parolei, cu ajutorul atributelor minlength și maxlength.

```markup
<label for="password">Alege o parola:</label><br>
  <input type="password" id="pass" name="pass" minlength="6" maxlength="10"> <br> <br>
```

**Input pentru text pe mai multe linii:** eticheta pentru acest element se numește `<textarea>` și se închide cu `</textarea>`. Va apărea pe ecran un input box de dimensiune variabilă, care poate fi mărit de utilizator dacă trage de colțul din dreapta jos. Putem seta dimensiunea default a acestui box prin atributele `rows` și `cols` care primesc ca valori numere întregi.

```markup
<label for="address">Adresa</label> <br>
<textarea rows="4" cols="20"> </textarea>
```

**Drop-down list:** cu ajutorul etichetei `<select> <select>` putem avea o listă drop-down cu mai multe elemente. Opțiunile sunt introduse prin etichetele `<option> </option>`. Utilizatorul poate alege orice element din această listă. În plus, putem selecta o valoare default să fie deja selectată, prin adăugarea atributului fără valoare `selected` __în cadrul etichetei `option`.

```markup
<label for="city">Din ce oras esti?</label><br>
  <select id="city">
  	<option> Bucuresti </option>
    <option> Cluj-Napoca </option>
    <option selected> Timisoara </option>
    <option> Constanta </option>
    <option> Brasov </option>
  </select>
```

**Checkbox:** cu ajutorul inputului de tip _checkbox_ putem selecta mai multe elemente din cadrul unui răspuns. Textul fiecărui răspuns va fi precedat de o căsuță care poate fi bifată. În cadrul acestui răspuns, oricâte căsuțe pot fi bifate.

```markup
<label for="reason">De ce vrei sa inveti dezvoltare web?</label><br>
<input type="checkbox" id="1" name="reason"> Sa creez pagini web </input> <br>
<input type="checkbox" id="2" name="reason"> Sa am un skill in plus </input> <br>
<input type="checkbox" id="3" name="reason"> De amuzament </input> <br>
```

**Radio button:** în cadrul acestui input, numai unul dintre răspunsuri poate fi selectat. La selectarea unui alt răspuns, primul va fi automat debifat. Atributul `name` plasează răspunsurile în aceeași categorie, acceptând doar un singur răspuns din tipul name. 

{% hint style="warning" %}
Modificați pentru una dintre linii valoarea "grade" în alt text și veți observa ca poate fi bifată chiar dacă una dintre celelalte două valori grade sunt deja bifate.
{% endhint %}

```markup
<label for="grade">In ce clasa esti?</label><br>
<input type="radio" id="1-4" name="grade"> Clasele primare </input> <br>
<input type="radio" id="5-8" name="grade"> Gimnaziu </input> <br>
<input type="radio" id="9-12" name="grade"> Liceu </input> <br>
```

**Adăugare de fișiere:** cu ajutorul tipului "file", utilizatorul poate încărca fișiere locale într-un formular. Acest tip se adaugă pe eticheta `<input>`.

```markup
<label for="file">Selectati un fisier:</label> <br>
<input type="file" id="file" name="file">
```

**Submit:** un input de tip submit arată ca un buton, însă este de fapt un input care declanșează evenimentul de trimitere a unui formular.

```markup
<input type="submit" value="Trimite">
```

**Reset:** un input de tip submit arată ca un buton, însă este de fapt un input care declanșează evenimentul de a șterge toate datele adăugate în formular și de a reveni la valorile default.

```markup
<input type="reset" value="Reseteaza">
```

#### Exercițiu:

Adăugați toate elementele menționate mai sus într-un formulat în body-ul unei pagini HTML și testați-le.

### Trimiterea unui formular

Formularele sunt elemente web destinate obținerii datelor de la utilizator și salvării lor pe un server dedicat, cu diferite scopuri. Pentru a efectua un astfel de mecanism, putem adăuga un atribut etichetei form numit `action`, cu valoarea URL-ului de pe server care ne va procesa formularul. De asemenea, trimiterea datelor necesită deseori atributul `method`, care menționează tipul felului în care trimitem \(valorile `GET` sau `POST`\). Un exemplu de folosire poate fi vizibil mai jos:

```markup
<form action="/action_page.php" method="post">
    <label for="name">Numele tau:</label>
    <input type="text" name="name"/>
    <input type="submit" value="Trimite"/>
</form>
```

La activarea butonului de submit, se vor trimite datele din interiorul formularului prin metoda POST la pagina action\_page.php de pe serverul unde este găzduit site-ul vostru.

{% hint style="danger" %}
Atenție, voi nu puteți rula un server pe mașina locală la fel ca și cum scrieți o pagină HTML. Există tutoriale extensive despre cum să scrii și să rulezi un server pe Internet. Mai multe detalii veți afla în cadrul semestrului 2.
{% endhint %}

{% hint style="info" %}
Câmpurile input cărora le lipsește atributul **name** nu vor fi trimise cu formularul. 
{% endhint %}

## Activitate 3 - miniproiect

Durată: 20' \| Metodă: evaluare formativă, practică, investigație \| Materiale: -

Creați o pagină web completă cu cât mai multe dintre elementele HTML învățate până acum. Alegeți o tematică pentru a expune informații cu scop. Pagina trebuie să conțină minim:

1. Trei fișiere HTML diferite:

   a. index.html, care este pagina principală cu informații despre subiectul ales

   b. contact.html, care este o pagină cu un formular de contact

   c. galerie.html, pagină cu poze

2. Un meniu cu 3 butoane pentru a naviga între cele 3 pagini HTML.
3. Cel puțin un tabel, o listă ordonată și o listă neordonată
4. Fiecare pagină trebuie să aibă etichete de heading și paragrafe.

Proiectul este la liberă alegere și poate fi terminat acasă și prezentat lecția următoare.

![](../.gitbook/assets/logos-02.svg)

