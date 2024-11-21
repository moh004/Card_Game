<script setup>
       import { RouterLink } from 'vue-router';
</script>

<template>
   <div class="fixed flex flex-col h-screen w-24  text-gray-50 bg-sky-900 ">
      
        <RouterLink to="/" class=" text-center bg-sky-700 hover:rounded-2xl rounded-full p-3 fa-solid fa-house text-4xl m-auto  justify-center align-middle"></RouterLink>

        <RouterLink to="/game" class="bg-sky-700  hover:rounded-2xl rounded-full  p-3 fa-solid fa-gamepad text-4xl text-center m-auto justify-center align-middle"></RouterLink>

        <i class="bg-sky-700 hover:rounded-2xl rounded-full  p-3 fa-solid fa-ranking-star text-4xl text-center m-auto justify-center align-middle"></i>

        <i class="bg-sky-700 hover:rounded-2xl rounded-full  p-3 fa-solid fa-address-card text-4xl text-center m-auto justify-center align-middle"></i>
       
    </div>

</template>