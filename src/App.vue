<template>
  <app-header />
  <div class="page">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { AppHeader } from '@/components/index';
</script>

<style lang="scss">
@import './assets/scss/index.scss';
</style>
