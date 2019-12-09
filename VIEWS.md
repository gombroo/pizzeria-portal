# Dashboard / Homepage

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - tabela ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów

- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - musi umożliwiać edycję i zapisanie zmian

- `/tables/booking/new`
  - analogicznie do powyższej, bez początkowych informacji

- `/tables/events/:id`
  - analogicznie do powyższej, bez początkowych informacji

- `/tables/events/new`
  - analogicznie do powyższej, bez początkowych informacji


# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach będzie wyświetlała stoliki
    - w kolumnach różne informacje (status stolika, czas od ostatniej aktyności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika

- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia

- `/waiter/order/:id`
  - jak powyższa

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - nr stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia jako zrealizowanego
