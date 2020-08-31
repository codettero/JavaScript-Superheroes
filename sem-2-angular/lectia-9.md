---
description: >-
  Durată: 50' | Cuvinte cheie: Github, Gitpod, sistem de versionare, Angular,
  ng, terminal, commit, branch, repository
---

# Lecția 9

## Pasul 0 - Set-up

[GitHub](https://github.com) este o platformă online de versionare a proiectelor. În următoarele lecții, aveți nevoie de un cont de GitHub. Nu vom lucra foarte mult cu git, dar pentru cei curioși, puteți citi mai multe [aici](https://guides.github.com/activities/hello-world/).

Vom folosi și [Gitpod](https://www.gitpod.io) pentru a utiliza un editor online care funcționează în cloud și permite instalarea ușoară a dependințelor necesare.

1.Creați cont pe GitHub, dacă nu aveți deja, accesați pagina [Gitpod](https://www.gitpod.io), dați click pe _**Try now -&gt; Start workspace**_ și în continuare vă va autentifica cu contul de GitHub.

2. Dupa aceasta, puteți închide tab-ul Gitpod și accesați următorul [link](https://gitpod.io#https://github.com/codettero/angular-starter). Va deschide un proiect deja creat în Gitpod.

{% hint style="success" %}
[https://gitpod.io\#https://github.com/codettero/angular-starter](https://gitpod.io#https://github.com/codettero/angular-starter)
{% endhint %}

3. Se va deschide un editor online cu proiectul `angular-starter`, ca în imaginea următoare.

![](../.gitbook/assets/screenshot-2020-03-19-at-17.08.47.png)

4. Observați notificarea din colțul din dreapta jos. Selectați **Setup Project** de acolo.

5. Va apărea un meniu în partea dreaptă, unde ne interesează al 4-lea buton **Test Drive Configuration**, de unde selectați **Push to branch & Start Workspace**.

![](../.gitbook/assets/screenshot-2020-03-19-at-16.19.45.png)

6. În partea de sus a ecranului, va apărea un alt meniu cu 2 opțiuni. Selectați-o pe prima **Fork to my account**.

![](../.gitbook/assets/screenshot-2020-03-19-at-16.20.14.png)

{% hint style="warning" %}
În caz că nu există această opțiune în meniu, ca în imaginea de mai sus, dați click pe iconul vostru din colțul din dreapta sus, unde va apărea un drop-down cu niște opțiuni. Selectați **Open Access Control**, ca în imaginea de mai jos, și apoi se va deschide un nou tab unde bifați **read/write private repos**.
{% endhint %}

![](../.gitbook/assets/screenshot-2020-03-19-at-16.28.22.png)

![](../.gitbook/assets/screenshot-2020-03-19-at-16.28.57.png)

#### Rezultat

Ca semn că totul a mers bine, veți observa în partea din stânga jos a paginii, în meniul albastru \(status bar\) faptul că acum apare numele vostru de pe GitHub/angular-starter.

![](../.gitbook/assets/screenshot-2020-03-19-at-16.20.39.png)

În plus, dacă deschideți GitHub, mergeți pe profilul vostru și dați click pe **Repositories**, veți vedea proiectul `angular-starter` adăugat.

![](../.gitbook/assets/screenshot-2020-03-19-at-16.21.04.png)

7. Tot în status bar \(zona albastră\), dați click pe a doua opțiune \(nume/gitpod-setup\).

![](../.gitbook/assets/group-1.png)

Va apărea în partea de sus meniul din poza următoare. Selectați **origin/master**.

![](../.gitbook/assets/screenshot-2020-03-19-at-17.27.37.png)

8. Vom activa setarea de salvare automată prin a folosi shortcutul **Ctrl + Shift + P,** vom scrie în meniul apărut "**autosave**" și vom selecta singura opțiune, la fel ca în poza de mai jos.

![](../.gitbook/assets/screenshot-2020-03-19-at-17.50.27.png)

## Pasul 1 - Instalarea dependințelor

Vom lucra cu terminalul, care este un loc unde putem adăuga comenzi care vor executa programe fără interfață grafică. O să ne ajute în a scrie cod mai rapid. În poza de mai jos se observă terminalul, în partea de jos a ecranului. Terminalul e identificat de un **prompt**, unde scrie **gitpod** și locația unde vă aflați în filesystem \(**/workspace/angular-starter**\) și se termină cu semnul **$**.

![](../.gitbook/assets/screenshot-2020-03-19-at-17.26.14.png)

{% hint style="info" %}
Dacă nu aveți deschis terminalul, mergeți în menul din partea de sus, dați click pe **Terminal &gt; New Terminal**.
{% endhint %}

![](../.gitbook/assets/screenshot-2020-03-19-at-17.25.38.png)

În terminal adăugați următoarea comandă și dați enter. Această comandă va instala un program din partea Angular care ajută crearea aplicației, pe care îl veți utiliza in terminal folosind cuvântul cheie `ng`.

```text
npm install -g @angular/cli
```

{% hint style="info" %}
La un moment dat, se va opri pentru a întreba dacă doriți să împărtășiți date de utilizare. Puteți răspunde cu nu prin a tasta **n** în terminal și a da enter.
{% endhint %}

Rezultatul este ca în poza de mai jos \(nu neapărat identic, atâta timp cât nu sunt erori, e în regulă\).

![](../.gitbook/assets/screenshot-2020-03-19-at-17.13.25.png)

Scrieți în terminal următoarea comandă și dați enter. Această comandă instalează dependințele aplicației web la care vom lucra. În urma comenzii, va apărea folderul **node\_modules** în directorul în care lucrați.

```text
npm install --dev
```

{% hint style="danger" %}
Prima comandă va trebui dată de fiecare dată când deschideți proiectul. Gitpod lucrează cu containere în spate și nu rămâne Angular CLI instalat. Dacă întâmpinați eroarea că ng nu este găsit \(`bash: ng: command not found`\), atunci înseamnă că trebuie să rulați prima comandă \(`npm install -g @angular/cli`\)
{% endhint %}

## Pasul 2 - Salvarea modificărilor

Pentru a sincroniza modificările pe care le faceți în Gitpod cu proiectul de pe GitHub, avem de dat un **save** mai complicat. Deschideți README.md și adăugați o line cu numele vostru. Veți vedea că în editor linia modificată va fi marcată cu o culoare, la fel ca în poză.

![](../.gitbook/assets/screenshot-2020-03-19-at-17.56.11.png)

În continuare vom scrie trei comenzi în terminal pe care le veți folosi frecvent pentru a updata proiectul pe GitHub.

![](../.gitbook/assets/screenshot-2020-03-19-at-20.08.09.png)

Comenzile sunt:

```bash
git add .
git commit -m "MESAJUL DESCRIPTIV AL MODIFICARILOR"
git push
```

**git add .** adaugă toate modificările din folderul curent în care vă aflați când dați comanda

**git commit** salvează modificările făcute \(crează un checkpoint\). Parametrii `-m` se referă la "message" \(mesajul commit-ului\).

**git push** updatează proiectul de pe GitHub cu modificările adăugate în commit

{% hint style="success" %}
Vom folosi aceste comenzi la finalul fiecărei lecții pentru a salva modificările aduse și pentru a fi vizibile și ulterior. Nu uitați să faceți acest lucru după ce terminați de lucru la fiecare lecție.
{% endhint %}

## Pasul 3 - Vizualizarea proiectului

Pentru a vedea cum arată pagina web, în timp real, vom rula comanda de mai jos în terminal.

```bash
ng serve
```

Puteți lăsa comanda să ruleze în mod continuu, însă, când vom avea nevoie să scriem o nouă comandă în terminal, va trebui să oprim comanda de mai sus folosind shortcutul `Ctrl + C`. La rulare, va apărea o notificare, la fel ca în poză. Recomandăm să deschideți pagina într-o nouă fereastră, selectând "**Open in Browser**".

![](../.gitbook/assets/screenshot-2020-03-19-at-18.03.52.png)

Site-ul arată acum astfel. De unde vine acest text? Deschideți `src/app/app.component.html` și veți vedea.

![](../.gitbook/assets/screenshot-2020-03-19-at-18.07.22.png)

Felicitări! Acum putem începe dezvoltarea aplicației folosind Angular.

![](../.gitbook/assets/logos-02.svg)

