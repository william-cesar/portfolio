<template>
  <header class="app-header">
    <header-title />
    <section class="right-float">
      <page-links />
      <theme-switcher />
    </section>
  </header>
</template>

<script setup>
import ThemeSwitcher from './components/theme-switcher/theme-switcher.vue';
import PageLinks from './components/pages-links/pages-links.vue';
import HeaderTitle from './components/header-title/header-title.vue';
</script>

<style lang="scss">
.app-header {
  @include header-padding();
  @include centralize-vertically();

  background-color: $secondary-background-color;
  height: $size-60;
  justify-content: space-between;

  & > .right-float {
    @include centralize-vertically();
    gap: $spacing-40;
  }
}

.dark .app-header {
  background-color: $secondary-background-color-inverse;
}
</style>