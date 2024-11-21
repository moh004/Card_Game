
    const suits = ['♣', '♦', '♥', '♠'];
    const val = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    let deckOfCards = [];

    suits.forEach(suit => {
    val.forEach(val => {
        deckOfCards.push({ suit, val });
    });
   });
 export default deckOfCards