let totalPrice =0; 
let discount = 10;
let minimumAmountPrice= 25;

function calculateDiscount (totalPrice, discount) {
   if (totalPrice<minimumAmountPrice) {
      return (totalPrice); 
   }
   if (totalPrice>minimumAmountPrice) {
       totalPrice=totalPrice-discount;
       return(totalPrice);
   }

}


console.log(totalPrice);



















/*

discount = totalamount>25;

function calculateDiscount (totalamount, discount){

    console.log  (totalamount -  discount);
}

calculateDiscount();



// Defineer een constante minumum  bedrag
let minimumBedragVoorKorting = 25;
// Defineer variabeles van totale prijs

//Maak een functie die de prijs na korting berekend
//en geef dit bedrag terug.


//controleer of minumbedrag 25 euro is.

//print totaal bedrag uit wat de prijs
*/