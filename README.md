Ciao ragazzi,
Esercizio di oggi: *Griglia Campo Minato*
nome repo: *js-campominato-grid*
*Consegna*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riusciti ad implementare in codice qualcosa.
Numero di push: 15 circa
*Bonus* (farlo in una cartella bonus)
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*Consigli del giorno:*  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


- Creiamo nell'index un contenitore chiamato grid per andarci ad inserire successivamente i quadrati della nostra griglia
- Creiamo un bottone che permetta al click l'inizio del gioco
- Creiamo 2 costanti, una per il bottone ed una per la griglia.
- Creiamo una funzione per con una variabile per creare un DIV all'interno dell'index ed assegnargli la classe SQUARE per poi fare un return sulla variabile creata.
- Creiamo un evento al click del bottone
- Nell'evento mettiamo un FOR per far avanzare il contatore da 0 al contatore minore del numero di quadrati che vogliamo creare.
- Creiamo una variabile dove inseriamo la funzione di creazione fatta in precedenza
- Innestiamo nello SQUARE il contatore +1 per identificare il numero dello SQUARE a video
- Creiamo un altro evento click, questa volta su ogni SQUARE per andargli a dare un toggle per aggiungere o togliere una classe che permette il cambio di colore del backgroung ed un console log per visualizzare a console il numero dello SQUARE premuto
- Ogni SQUARE creato viene inserito dentro il contenitore GRID nell'index. 

BONUS

- Nell'index, invece del bottone mettiamo un dropdown che ci fara' scegliere la difficolta' di gioco che desideriamo
- Creiamo 3 costanti, ognuna per una difficolta'
- Modifichiamo la creazione delle classi appartenenti ai DIV per andare a fare le modifiche di grandezza specifiche per ogni difficolta'
- Nel click ogni elemento del toggle assegnano un diverso ciclo FOR con un contatore differente ognuno dall'altro ed un ciclo WHILDE che quando il bottone viene premuto pulisce il contenitore GRID da ogni child presente.