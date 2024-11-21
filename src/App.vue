<script setup>
import HomePage from './components/HomePage.vue';
import { RouterView } from 'vue-router';
import CardGame from '@/components/CardGame.vue';

</script>

<template>
  <div class="bg-gray-100">
      <HomePage />
      <CardGame />
      <RouterView />
  </div>
</template>

