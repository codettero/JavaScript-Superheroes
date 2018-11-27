# JavaScript Superheroes

Inainte de a incepe lucrul, asigurati-va ca ati parcurs [tutorialul de intro in Github](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) si ca ati experimentat cu un repository propriu.

## Modul de lucru cu Github

1. Pentru fiecare feature nou va fi creat un branch separat cu un nume descriptiv:

Ne mutam pe `master`:
`git checkout master`

Descarcam ultimele modificari:
`git pull origin master`

Cream un branch nou din `master`:
`git checkout -b nume-branch`

2. Dupa terminarea implementarii pe branch-ul respectiv si git push (`git push origin nume-branch`), [se va deschide un Pull Request](https://help.github.com/articles/creating-a-pull-request/) catre branch-ul `master`.

In cadrul Pull Request, se vor adauga si persoanele care fac review:

- Andrei Antal - pentru AngularJS
- Alexandra Anghel - pentru HTML, CSS, vanilla JavaScript

!!! Branch-ul `master` este protejat, deci nu veti putea face push direct pe master.

3. Dupa review si implementarea modificarilor cerute pe PR, branch-ul este inclus in `master` (merged) si sters. Pentru stergerea branch-urilor locale:

Ne mutam pe `master`:
`git checkout master`

Stergem branch-ul local:
`git branch -d nume-branch`

Branch-ul va trebui sters si din versiunea remote, de la sectiunea [Branches](https://github.com/codettero/JavaScript-Superheroes/branches).
