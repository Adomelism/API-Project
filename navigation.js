// 4. Sukurti navigacijos elementą, kuris nukreips į puslapius:
//   4.1. Home / pagrindinis puslapis.
//   4.2. Users / vartotojų puslapis.
//   4.3. Albums / albumų puslapis.
//   4.4. Posts / pranešimų puslapis.
//   4.5. Pakeisti aktyvaus puslapio nuorodos stilių.

const navigationElement = document.createElement('nav');
  navigationElement.textContent = 'Labas';

  document.body.prepend(navigationElement);