// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha
// visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono
// stati ricordati.
$(document).ready(
  function() {
    var numbersPcArray = [];
    var numbersUserArray = [];
    var numeriSbagliati = [];
    var numeriRicordati = [];
    var time = 29;

    numbersPC();
    alert("I numeri da memorizare sono: " + numbersPcArray);

    $(".timer").text( "Timer: " + time );

    var timer = setInterval(timer, 1000);
    setTimeout(numbersUser, 30000);

    function numbersPC() {
      for (var i = 0; i < 5; i++) {
        var number = Math.floor(Math.random() * 100) + 1;
        var notPush = false;

        for (var y = 0; y < numbersPcArray.length; y++) {
          if (number == numbersPcArray[y]) {
            notPush = true;
          }
        }

        if (notPush == false) {
          numbersPcArray.push(number);
        } else {
          i--;
        }
      }

      return null;
    };

    function timer() {
      if (time == 0) {
        clearInterval( timer );
      } else {
        time--;
        var text = "Timer: " + time;
        $(".timer").text( text );
      }
    }

    function numbersUser() {
      for (var i = 0; i < 5; i++) {

        var iterazione = i + 1;
        var notPush = false;
        var number = parseInt(prompt("Inserisci un numero tra 1 e 100 (" + iterazione + ")"));

        for (var y = 0; y < numbersUserArray.length; y++) {
          if (number == numbersUserArray[y]) {
            notPush = true;
          }
        }

        if (notPush == false && number > 0 && number < 101) {
          numbersUserArray.push(number);
        } else {
          alert("Numero inserito non valido riprova!");
          i--;
        }
      }

      arraysCheck();

      return null;
    };

    function arraysCheck() {
      for (var i = 0; i < numbersPcArray.length; i++) {
        var isEqual = false;

        for (var y = 0; y < numbersUserArray.length; y++) {
          if(numbersUserArray[y] == numbersPcArray[i]) {
            isEqual = true;
          }
        }

        if (isEqual == false) {
          numeriSbagliati.push(numbersUserArray[i]);
        } else {
          numeriRicordati.push(numbersUserArray[i]);
        }
      }

      var msg1 = "Giusti: " + numeriRicordati.length + ". Numeri: " + numeriRicordati;
      var msg2 = "Sbagliati: " + numeriSbagliati.length + ". Numeri: " + numeriSbagliati;
      var msg3 = "Numeri che dovevi ricordare: " + numbersPcArray;

      $(".ricordati").text( msg1 );
      $(".sbagliati").text( msg2 );
      $(".pc").text( msg3 );

      return null;
    };
  }
);
