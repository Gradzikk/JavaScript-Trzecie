var tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];

// Wyświetl zawartość 5 komórki tablicy
console.log("Zawartość 5 komórki: " + tab1[4]);

// Zmień zawartość 7 komórki na 12
tab1[6] = 12;

// Utwórz tablicę tab2 i przepisz zawartość tab1
var tab2 = tab1.slice();

// Utwórz tablicę tab3 z sumą komórek tab1 i tab2
var tab3 = [];
for (var i = 0; i < tab1.length; i++) {
  tab3.push(tab1[i] + tab2[i]);
}

// Przepisz zawartość tab1 do tab2 w odwrotnej kolejności
tab2 = tab1.slice().reverse();


// Utwórz pustą tablicę
var tablicaUzytkownika = [];

// Wypełnij tablicę wartościami podanymi przez użytkownika (przykład dla 10 wartości)
for (var i = 0; i < 10; i++) {
  var wartosc = prompt("Podaj wartość do tablicy:");
  tablicaUzytkownika.push(Number(wartosc));
}

// Znajdź najmniejszy i największy element w tablicy
var najmniejszy = Math.min(...tablicaUzytkownika);
var najwiekszy = Math.max(...tablicaUzytkownika);

// Oblicz średnią wartość elementów tablicy
var suma = tablicaUzytkownika.reduce((a, b) => a + b, 0);
var srednia = suma / tablicaUzytkownika.length;

// Wylicz ilość wystąpień cyfry 3 w tablicy
var iloscTrojek = tablicaUzytkownika.filter(x => x === 3).length;

// Posortuj elementy tablicy rosnąco
tablicaUzytkownika.sort((a, b) => a - b);

// Znajdź medianę elementów tablicy
var srodkowyIndeks = Math.floor(tablicaUzytkownika.length / 2);
var mediana = tablicaUzytkownika[srodkowyIndeks];

// Wypisz 3 najmniejsze i 3 największe elementy tablicy
var trzyNajmniejsze = tablicaUzytkownika.slice(0, 3);
var trzyNajwieksze = tablicaUzytkownika.slice(-3);

// Podnieś każdy element do kwadratu
tablicaUzytkownika = tablicaUzytkownika.map(x => x * x);

// Zlicz liczb parzystych i nieparzystych
var parzyste = tablicaUzytkownika.filter(x => x % 2 === 0).length;
var nieparzyste = tablicaUzytkownika.length - parzyste;

// Zlicz liczby podzielne przez 3
var podzielnePrzez3 = tablicaUzytkownika.filter(x => x % 3 === 0).length;

// Utwórz pustą tablicę na litery
var tablicaLiter = [];

// Wypełnij tablicę literami podanymi przez użytkownika (przykład dla 10 liter)
for (var i = 0; i < 10; i++) {
  var litera = prompt("Podaj literę do tablicy:");
  tablicaLiter.push(litera);
}

// Wypełnij tablicę 10-literowym wyrazem podanym przez użytkownika
var wyraz = prompt("Podaj 10-literowy wyraz:");
tablicaLiter = wyraz.split("");

// Zamień wielkie litery na małe i odwrotnie
tablicaLiter = tablicaLiter.map(function(litera) {
  if (litera === litera.toLowerCase()) {
    return litera.toUpperCase();
  } else {
    return litera.toLowerCase();
  }
});

// Wypisz zawartość tablicy w losowej kolejności
function tasowanie(tablica) {
  for (var i = tablica.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [tablica[i], tablica[j]] = [tablica[j], tablica[i]];
  }
}

tasowanie(tablicaLiter);

// Utwórz 100-elementową tablicę liczb losowych
var tablicaLosowa = [];
for (var i = 0; i < 100; i++) {
  var losowaLiczba = Math.floor(Math.random() * 100); // Losowa liczba od 0 do 99
  tablicaLosowa.push(losowaLiczba);
}

// Znajdź największą liczbę i ile razy się powtarza
var najwieksza = Math.max(...tablicaLosowa);
var iloscNajwiekszych = tablicaLosowa.filter(x => x === najwieksza).length;

// Wyświetl liczby nieparzyste
var liczbyNieparzyste = tablicaLosowa.filter(x => x % 2 !== 0);

// Wyświetl liczby w komórkach o nieparzystych indeksach
var liczbyIndeksNieparzysty = tablicaLosowa.filter((x, index) => index % 2 !== 0);

// Wyświetl liczby w przedziale <5, 15)
var liczbyWPrzedziale = tablicaLosowa.filter(x => x >= 5 && x < 15);

// Znajdź element najbliższy liczbie "a"
var a = 42; // Wartość do porównania
var najblizszy = tablicaLosowa.reduce(function(prev, curr) {
  return Math.abs(curr - a) < Math.abs(prev - a) ? curr : prev;
});

// Znajdź poprzednika i następnika najmniejszej wartości
var najmniejsza = Math.min(...tablicaLosowa);
var indeksNajmniejszej = tablicaLosowa.indexOf(najmniejsza);
var poprzednik = tablicaLosowa[indeksNajmniejszej - 1];
var nastepnik = tablicaLosowa[indeksNajmniejszej + 1];

// Przepisz elementy > 10 do nowej tablicy
var nowaTablica = tablicaLosowa.filter(x => x > 10);

// Utwórz nową tablicę B z sumą elementów tablicy A
var nowaTablicaB = [];
var suma = 0;
for (var i = 0; i < tablicaLosowa.length; i++) {
  suma += tablicaLosowa[i];
  nowaTablicaB.push(suma);
}

// Sortuj tablicę malejąco
tablicaLosowa.sort((a, b) => b - a);

// Wyświetl elementy, które występują przynajmniej 3 razy
var licznik = {};
var elementyWiecejNiz3 = tablicaLosowa.filter(function(element) {
  licznik[element] = (licznik[element] || 0) + 1;
  return licznik[element] >= 3;
});

// Tablica z ciągiem liczb: 3, 6, 9, 12, ...
var tablicaCiąg1 = Array.from({ length: 100 }, (_, index) => (index + 1) * 3);

// Tablica z ciągiem potęg liczby 2: 2, 4, 8, 16, 32, ...
var tablicaCiąg2 = Array.from({ length: 100 }, (_, index) => Math.pow(2, index));

// Funkcja do generowania liczb ciągu Fibonacciego
function fib(n) {
    var fibSeq = [];
    for (var i = 0; i < n; i++) {
      if (i <= 1) {
        fibSeq.push(i);
      } else {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
      }
    }
    return fibSeq;
  }
  
  // Utworzenie tablicy z kolejnymi liczbami ciągu Fibonacciego
  var fibonaccis = fib(100);
  
  // Funkcja do generowania kolejnych potęg liczby 2
  function powersOfTwo(n) {
    var powers = [];
    for (var i = 0; i < n; i++) {
      powers.push(Math.pow(2, i));
    }
    return powers;
  }
  
  // Utworzenie tablicy z kolejnymi potęgami liczby 2
  var powersOf2 = powersOfTwo(100);