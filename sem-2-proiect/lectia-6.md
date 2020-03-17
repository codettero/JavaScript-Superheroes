# Lecția 6

În continuare, vom adăuga funcționalitate butoanelor pentru a naviga de la un supererou la celalalt. Vom scrie codul în fișierul script.js.

## Pasul 1 - aranjarea eroilor

Începem prin a comenta codul de mai jos din fișierul CSS. Era folosit pentru a vedea toți supereroii pe pagină în același timp, fără să se suprapună. De îndată ce implementăm funcțiile aferente butoanelor, vom putea nagiva între supereroi și aceștia nu vor mai fi afisați unul peste celălalt, ci câte unul pe ecran la un moment dat.

```css
#cyclops {
  left: 15% !important;
  top: 100vh;
}

#strange {
  left: 15% !important;
  top: 180vh;
}
```

Vom adăuga, în schimb, următorul cod CSS, pentru a poziționa ultimii 2 eroi în afara ecranului, în partea dreaptă.

```css
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



