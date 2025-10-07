/* Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Tools:
-for
-if/ else if/ else
- % per verificare i multipli == 0
- log
*/

//Add for da 1 a 100
for (let i = 1; i <= 100; i++) {
    //Add IF for i%3 === 0 && i%5 === 0 (FizzBuzz)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');

    } else if (i % 5 === 0) {
        //Add Else IF for 5 (Buzz)
        console.log('Buzz');

    } else if (i % 3 === 0) {
        //Add  Else IF for 3 (Fizz)
        console.log('Fizz');

    } else {
        //Add Else i for all number
        console.log(i);

    }
}

