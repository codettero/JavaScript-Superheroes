# Exercițiu \(Lecția 13, sem 2\)

Rezolvarea exercițiului din lecția 13 este următoarea:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongebob'
})
export class SpongebobPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let stringArray = Array.from(value.toString());
    let newArray = [];

    stringArray.forEach(letter => {
      let newletter = (Math.random() > 0.5) ? letter.toLowerCase() : letter.toUpperCase();
      newArray.push(newletter);
    })

    return newArray.join("");
  }

}

```

![](../.gitbook/assets/copy-of-logo-techtor-05.png)

