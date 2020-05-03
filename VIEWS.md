# Dashboard

- `/`
    - statystyki dzisiejszych zamówień (zamówienia zdalne i lokalne)
    - lista rezerwacji i eventw zaplanowanych na dzisiaj

# Logowanie

- `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# widok dostępności stolików

- `/tables`
    - wybór daty i godziny 
    - tabela z listą rezerwacji oraz wydarzeń
        - każda kolumna = 1 stolik
        - każdy wiersz = 30 minut
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
        - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
- `/tables/booking/:id`
    - zawiera wszystkie informacje dotyczące rezerwacji 
    - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
    - analogicznie do powyższej, bez informacji
- `/tables/events/:id`
    - analogicznie do powyższej, dla eventów
- `/tables/events/new`
    - analogicznie do powyższej, dla eventów, bez początkowych informacji

# widok kelnera

- `/waiter`
    - tabela
        - w wierszach stoliki
        - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
        - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i cena)
    - kwota zamówienia
- `/waiter/order/:id`
    - jak powyższa

# widok kuchni

- `/kitchen`
    - wyświetla listę zamówień w kolejności ich złożenia
    - lista musi zawierać:
        - numer stolika (lub zamówienia zdalnego)
        - pełne informacje dot. zamówionych dań
    - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane