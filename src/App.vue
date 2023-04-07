<template>
  <header>Header component</header>
  <div class="page">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style lang="scss">
@import './assets/scss/index.scss';
</style>
