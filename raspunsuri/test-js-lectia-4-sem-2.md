# Test JS \(Lecția 4, sem 2\)

#### Partea I

1. b
2. c
3. d
4. c
5. b, c, e, f
6. a, b, e, f
7. d
8. d
9. c
10. a
11. c

#### Partea II

1. După linia 2, a = \[1, 3, 10, 10\]. După for, a = \[1, 3, 10, 10, 0, 2, 4, 6, 8\]. După linia 8, se elimină ultimul element, deci a = \[1, 3, 10, 10, 0, 2, 4, 6\] și are 8 elemente, numerotate de la 0 la 7. După linia 9, se adaugă un element nou pe poziția 10, și a ajunge să aibă 11 elemente, astfel: a = \[1, 3, 10, 10, 0, 2, 4, 6, undefined, undefined, -7\]. În final, se elimină ultimul element, -7 adăugat, și rezultatul este a = \[1, 3, 10, 10, 0, 2, 4, 6, undefined, undefined\].
2.   | if\(\) | Rezultat |
   | :--- | :--- |
   | 1 + 2 == "12" | false |
   | "abc" === "abc" | true |
   | "Java" + "Script" === "JavaScript" | true |
   | "1" + 2 == 12 | true |
   | true === 1 | false |
   | false == 0 | true |
   | 3 === 3 | true |
   | "Hero" == "hero" | false |
   | 77 == "77" | true |
   | 77 == 77 | true |
   | false === false | true |
   | 77 === 77 | true |
   | 77 === "77" | false |
   | false == "" | true |
   | 0 == "" | true |

3. 

```javascript
function getNumberOfDays(month) {
    // Februarie
    if (month == 2) {
        return 28;
    }
    
    // August
    if (month == 8) {
        return 31;
    }
    
    // lunile cu index impare
    if (month % 2 == 1) {
        return 31;
    }
    
    // lunile cu index par
    return 30;
}
```

4. 

```javascript
const getNumberOfDays = function(month) {
    // Februarie
    if (month == 2) {
        return 28;
    }
    
    // August
    if (month == 8) {
        return 31;
    }
    
    // lunile cu index impare
    if (month % 2 == 1) {
        return 31;
    }
    
    // lunile cu index par
    return 30;
}
```

5.

```javascript
const getNumberOfDays = (month) => {
    // Februarie
    if (month == 2) {
        return 28;
    }
    
    // August
    if (month == 8) {
        return 31;
    }
    
    // lunile cu index impare
    if (month % 2 == 1) {
        return 31;
    }
    
    // lunile cu index par
    return 30;
}
```

{% hint style="info" %}
Pentru că avem un singur parametru, parantezele rotunde sunt opționale. Linia 1 putea fi scrisă și ca 

```javascript
const getNumberOfDays = month => {
```
{% endhint %}

![](../.gitbook/assets/copy-of-logo-techtor-05.png)

