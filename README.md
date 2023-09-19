# js-campominato-dom
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba, fare visulaizzare tutte le bombe in gliglia e congelare la griglia.

1. creare un ciclo da 1 al numero di bombe che vogliamo inserire (16 in questo caso) con all interno un mathrandom da 1 a il numero di celle presenti in griglia in modo tale da generare le bombe
2. le bombe metterle dentro a un array bombs
3. ogni volta che cliccheremo su una cella fare un controllo per vedere se quella cella e una bomba o meno e un secondo controllo per vedere se si è raggiunto il massimo numero di non bombe cliccate
4. se non e una bomba incrementare di 1 il counter del punteggio creato precedentemente
5. se è una bomba dare a tutte le celle che rientrano nell array bombs la classe bomb creata precendentemente nel css
6. dopodiche freezzare la griglia e stampare il messaggio del risultato con il counter e il numero massimo del punteggio.