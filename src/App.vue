<template>
  <app-header />
  <div class="page">
    <RouterView />
  </div>
  <div class="not-optmized">
    <img
      src="@/assets/files/png/alert.png"
      alt="alert icon"
      height="50"
      width="50"
    >
    {{ $t('errors.not_optmized') }}
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { AppHeader } from '@/components';
</script>

<style lang="scss">
@import './assets/scss/index.scss';

#app > .not-optmized {
  display: none;
}

@media (max-width: 319px) {
  #app {

    & > .app-header,
    & > .page {
      display: none;
    }

    & > .not-optmized {
      @include centralize();
      flex-direction: column;
      gap: $spacing-16;
      height: 100dvh;
      background-color: $primary-background-color;
      padding: $spacing-32;
      text-align: center;
    }
  }
}
</style>
