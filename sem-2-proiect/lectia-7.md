---
description: 'Durată: 50'' | Cuvinte cheie: framework, Angular, React, Vue'
---

# Lecția 7

## Activitate 1 - Prezentarea proiectelor

Durată: 30' \| Metodă: - \| Materiale: -

## Activitate 2 - Framework-uri

Durată: 20' \| Metodă: prelegere \| Materiale: -

### O scurta istorie

* Tim Berners-Lee a inventat **World Wide Web** la **CERN** în Martie 1989
* Primul **browser** public a fost lansat în August 1991
* CERN a anunțat că World Wide Web va fi **gratis tuturor, pentru totdeauna**, în Aprilie 1993
* Berners-Lee a creat în cadrul MIT **World Wide Web Consortium** \(W3C\), o organizație pentru standardele web, în 1994
* **JavaScript** a fost creat sub numele de Mocha în 1995
* **Internet Explorer** a fost lansat în 1995
* IE reprezenta 95% din traficul generat de browsere, în 2002
* **Safari** a fost lansat în 2003
* **Mozilla Firefox** a fost lansat în 2004
* **jQuery**, una dintre cele mai folosite biblioteci JavaScript, a fost lansată în August 2006
* Primul **iPhone** a fost anunțat în 2007
* **Google Chrome** a fost lansat în 2008
* Google a lansat **AngularJS**, primul JavaScript framework popular, în Octombrie 2010
* Twitter a lansat **frameworkul CSS** numit **Bootstrap** ca un proiect open-source în 2011
* Chrome a devenit cel mai popular browser în 2012
* **React** \(lansat de Facebook\), **Vue** și **Angular** \(lansat de Google\) au apărut în perioada 2013-2016
* **ES6**, prima specificație modernă de JavaScript, a apărut în 2015

{% hint style="info" %}
Care este diferența dintre o bibliotecă \(**library**\) și un **framework**? Probabil sunteți familiar cu bibliotecile din C/C++, pe care le includeți în proiectele voastre pentru a obține funcționalitate implementată eficient și standard de alți developeri, fiind de asemenea gratis pentru includerea în proiectele comerciale. Din toate aceste puncte de vedere, un framework este la fel ca o bibliotecă, dar există o diferență majoră: pe când o bibliotecă este o mică parte a unui proiect potențial mai mare scris de voi, care vă oferă funcționalitate izolată, un framework inversează această paradigmă și include codul vostru ca parte a funcționalității lui. Astfel, un framework poate reprezenta de unul singur o aplicație funcțională, iar voi doar customizați posibilitățile oferite de el.
{% endhint %}

### Evoluția web-ului din perspectiva developerilor

Odată cu evoluția tehnologiilor și aplicațiilor care ne permit să interacționăm cu Web-ul în ultimii 30 de ani, și modalitățiile de a dezvolta site-uri web au evoluat de la site-uri în sine, simple și izolate, la aplicații web complexe, cu sute \(dacă nu mii\) de micro-funcționalități. Acest lucru a însemnat de multe ori adoptarea unor noi paradigme, unor noi moduri de gândire asupra cum un astfel de sistem trebuie să fie dezvoltat, rezultatul curent fiind **zeci de limbaje** care pot crea site-uri web în modalități cu totul diferite. Din perspectiva **tehnologiilor native** \(HTML, CSS, JS\), rezultatul la momentul actual sunt trei frameworkuri web open-source, având cel mai mare grad de popularitate pentru developeri: Angular, React și Vue. În timp ce primele două sunt lansate și susținute de doi giganți în tehnologie \(Google, respectiv Facebook\), Vue este un proiect cu totul **independent**.

Până acum, noi v-am învățat să stăpâniți limbajele native web, iar acum vă vom învăța să construiți o aplicație web într-un framework \(Angular\) pentru a avea experiență cu cele mai noi modalități din industrie. Însă, până să începem, trebuie să vă explicăm de ce un framework este util.

### De ce web frameworks?

În mod clasic, dezvoltarea unui site include scrierea de markup, stilizare și funcționalitate, care poate fi împărțită în mod clar în HTML, CSS și JS. În schimb, când lucrurile nu merg perfect \(când există greșeli - **bugs**\), nu suntem întotdeauna siguri unde este greșeala, și deseori trebuie să verificăm **toate aceste trei fișiere** pentru a găsi ceea ce trebuie rezolvat. Mai mult, pentru aplicații complexe, ajungem să parcurgem **sute de linii** de CSS sau JS pentru a găsi bucata specifică de cod care influențeaza, de exemplu, un buton care funcționează defectuos.

Frameworkurile web susțin împreună că aceste inconveniente pot fi rezolvate prin două caracteristici \(lucru acceptat indiferent de ce framework folosești\):

* **izolare**, adică proprietatea de a izola întreaga funcționalitate a unui părți mici din proiect \(un buton, de exemplu\) într-o componentă. Acest lucru ne permite să verificăm un subset mic de linii de cod în încercarea rezolvării bugurilor\)
* **reutilizarea** **componentelor**, adică folosirea componentelor ca template-uri pentru \(nu trebuie să repeți tot codul pentru fiecare "erou" din proiectul tău - este suficient să îl scrii o singură dată\).

Imaginea de mai jos expune mai expresiv schimbarea de paradigmă.

![](../.gitbook/assets/copy-of-logo-techtor-05.png)



