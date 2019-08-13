# In good hands
## O projekcie
Projekt __In Good Hands__ jest aplikacją internetową pozwalającą oddać nieużywane rzeczy osobom potrzebującym. W założeniu ma pomagać w organizacji zbiórek, organizacji pakowania i odbiory niechcianych rzeczy oraz przekazywać informacje o fundacjach czy organizacjach potrzebujących wsparcia.
Projekt zakłada posiadanie bazy danych fundacji i organizacji poza rządowych potrzebujących wsparcia. 
W założeniach projektu określone są również kategorie produktów jakie można przeznaczyć do przekazania. 

## Wykorzystane technologie
- React.js - stworzenie aplikacji i jej komponentów;
- SCSS - stylizowanie komponentów;
- React Router - poruszanie się pomiędzy sekcjami;
- React Scroll - poruszanie się po Landing Page;
- JSON Server - baza danych dla aplikacji m.in. baza fundacji, baza organizacji, ustawienia standardowe aplikacji, informacja o użytkownikach tj. zorganizowana ilość zbiórek, ilość oddanych worków.

## W celu uruchomienia instalacji wymagane jest powiadanie zainstalowanych
1. Gitbash
2. NPM
3. JSON-SERVER

## Instalacja

Otwieramy terminal i wpisujemy polecenie
`git clone https://github.com/rubeus77/InGoodHands.git`

Następnie 
`cd InGoodHands`
`npm install`

Kolejnym krokiem jest otwarcie nowego terminala i przejście do katalogu:
`cd src\json-files` i uruchomienie komendy `json-server -p 3001 -w db.json`

W pierwszym terminalu uruchamiamy polecenie:
`npm start`

