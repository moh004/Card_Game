<script setup>
    import { ref } from 'vue';
    import back_of_the_card from "@/assets/img/back_of_the_card_2.jpg"
    import deckOfCards from '@/cardDeck.js';

    let gameOver = ref(false)
    let player_1 = ref([])
    let player_2 = ref([])
    let click = ref(0)
    let score_p1 = ref(0);
    let score_p2 = ref(0);
    let gameStarted = ref(false)
    let hasBeenClicked = ref(false)
    const val = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']


function getCardColorClass(card) {
  return card.suit === '♦' || card.suit === '♥' ? 'text-red-500' : 'text-black';
}


function shuffle (){
    let temp;
    for(let i = deckOfCards.length - 1; i >= 0; i--){
       const r = Math.floor(Math.random() * i ) // i used "i" because when we change position we move forward and our index should decrease
      temp = deckOfCards[r]
      deckOfCards[r] = deckOfCards[i]
      deckOfCards[i] = temp

    }  
}

function halfing() {
  shuffle ()  
 // reset the each player's card's
  player_1.value = []
  player_2.value = []
   // for now we have two player
  // deviding the deckOfCards of card's between players
  for(let i = 0 ; i < deckOfCards.length ;i++){
    //halfing
    if (i > Math.floor((deckOfCards.length - 1) / 2)){
        player_2.value.push(deckOfCards[i])
    }
    else{
      player_1.value.push(deckOfCards[i])
    }
  }
}



function compare(value1, value2) {
  // i'm using indexOf method because, i have put the values in good order
// and if index is higher the value is higher
  const index1 = val.indexOf(value1);
  const index2 = val.indexOf(value2);

  if (index1 > index2) {
    
    score_p1.value += 1;
  } else if (index1 < index2) {
   
    score_p2.value += 1;
  } else {
   
    score_p1.value += 1;
    score_p2.value += 1;
  }
}

function resualt () {
  if(score_p1.value > score_p2.value){
    return "You WON!"
  }
  else if(score_p2.value > score_p1.value){
    return "You Lost!"
  }
  else{
    return  "DRAW"
  }
}

function nextCard () {
  // if any card's left 
  if(click.value >= player_1.value.length - 1){  // dependance on how many player we got 
    hasBeenClicked.value = false
    gameOver.value = true
   
  }
  else{
    hasBeenClicked.value = true
    
    compare(player_1.value[click.value].val , player_2.value[click.value].val)

    click.value += 1
  }
}

function restartGame(){
       player_1.value = []
       player_2.value = []
       click.value = 0      
       score_p1.value = 0
       score_p2.value = 0 
       gameOver.value = false 
       halfing()
       hasBeenClicked.value = false
}

  

function startTheGame(){
        halfing()
        gameStarted.value = !gameStarted.value
    }

    
</script>

<template>
  <div class="flex ml-24 flex-col justify-center items-center h-screen  font-sans">
    <!-- Start Button -->
    <button v-if="!gameStarted"
      @click="startTheGame"
      class="md:p-12 md:px-20 p-7 mx-auto bg-green-500 text-gray-900 text-5xl font-semibold rounded-lg mb-8 hover:bg-green-400"
    >
      START
    </button>

    <!-- Game Area -->
    <div v-if="gameStarted && !gameOver" class=" wrap-div flex flex-col items-center">
      <!-- Player Score -->
      <h2 class="text-2xl font-bold text-green-600">
        Your Score: <span >{{ score_p1 }}</span>
      </h2>


      <div class="flex items-center">
      <!-- Player Deck -->
          <div @click="nextCard" class=" mx-5 ">
            <!-- back of the card -->
            <div v-if="hasBeenClicked === false" class="card back">
              <img  :src="back_of_the_card" class="w-24 h-36 rounded-lg border border-black">
            </div>
            <!-- front of the card -->
            <div v-if="hasBeenClicked === true" class="deck mt-6" :class="getCardColorClass(player_1[click])">
            <div class="card-container w-24 h-36 relative perspective">
              <div class="card club front w-full h-full absolute rounded-lg shadow-lg flex items-center justify-center">
                <!-- Top Left Corner -->
                <div class="corner top-left absolute flex flex-col items-center text-sm left-1 top-1">
                  <div class="value text-lg font-bold"> {{ player_1[click].val }}</div>
                  <div class="symbol small-symbol text-xl">{{ player_1[click].suit }}</div>
                </div>

                <!-- Main Symbol -->
                <div class="symbol main-symbol text-4xl ">{{ player_1[click].suit }}</div>

                <!-- Bottom Right Corner -->
                <div class="corner bottom-right absolute flex flex-col items-center text-sm right-1 bottom-1 transform rotate-180">
                  <div class="value text-lg font-bold">{{ player_1[click].val }}</div>
                  <div class="symbol small-symbol text-xl">{{ player_1[click].suit }}</div>
                </div>
              </div>
            </div>
          </div>
          </div>


          <div class=" text-red-800  text-7xl  mx-4">/  VS  /</div>
          <!-- Computer Deck -->
            <!-- back of the card -->
            <div v-if="hasBeenClicked === false" class="card back">
              <img  :src="back_of_the_card" class="w-24 h-36 rounded-lg border border-black">
            </div>
          <div v-if="hasBeenClicked === true" :class="getCardColorClass(player_2[click])" class="mx-5 mt-6">
            <div class="card-container w-24 h-36 relative perspective">
              <div class="card club front w-full h-full absolute rounded-lg shadow-lg flex items-center justify-center">
                <!-- Top Left Corner -->
                <div class="corner top-left absolute flex flex-col items-center text-sm left-1 top-1">
                  <div class="value text-lg font-bold"> {{ player_2[click].val }} </div>
                  <div class="symbol small-symbol text-xl">{{ player_2[click].suit }}</div>
                </div>

                <!-- Main Symbol -->
                <div class="symbol main-symbol text-4xl ">{{ player_2[click].suit }}</div>

                <!-- Bottom Right Corner -->
                <div class="corner bottom-right absolute flex flex-col items-center text-sm right-1 bottom-1 transform rotate-180">
                  <div class="value text-lg font-bold">{{ player_2[click].val }}</div>
                  <div class="symbol small-symbol text-xl">{{ player_2[click].suit }}</div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <!-- Computer Score -->
      <h2 class="text-2xl font-bold mt-8 text-red-500">
        Computer Score: <span>{{ score_p2 }}</span>
      </h2>

      <!-- Restart Button -->
      <button 
        @click="restartGame"
        class="mt-4 py-2 px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400"
      >
        Restart
      </button>
    </div>

      <div v-if="gameOver"> 
        <!-- Player Score -->
      <h2 class="text-2xl font-bold mb-5 text-green-600">
        Your Score: <span >{{ score_p1 }}</span>
      </h2>

        <div @click="restartGame" :class="{
                'bg-green-600 , hover:bg-green-400': resualt() === 'You WON!',
                'bg-red-600 , hover:bg-red-400': resualt() === 'You Lost!',
                'bg-gray-600 , hover:bg-gray-400': resualt() === 'DRAW'
              }"
        class="md:p-12 md:px-20 p-7 mx-auto  text-gray-100 text-5xl font-semibold rounded-lg mb-8  ">{{ resualt() }}</div>

         <!-- Computer Score -->
        <h2 class="text-2xl font-bold mt-8 text-red-500">
        Computer Score: <span>{{ score_p2 }}</span>
      </h2>
    </div>    
  </div>
</template>


