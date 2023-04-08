<template>
  <header class="app-header">
    <header-title />
    <pages-links-tray />
    <section class="right-float">
      <theme-switcher />
      <pages-links />
    </section>
  </header>
</template>

<script setup>
import ThemeSwitcher from './components/theme-switcher/theme-switcher.vue';
import PagesLinks from './components/pages-links/pages-links.vue';
import HeaderTitle from './components/header-title/header-title.vue';
import PagesLinksTray from './components/pages-links-tray/pages-links-tray.vue';
</script>

<style lang="scss">
.app-header {
  @include header-padding();
  @include centralize-vertically();

  background-color: $secondary-background-color;
  height: $size-60;
  justify-content: space-between;
  position: relative;

  & > .right-float {
    @include centralize-vertically();
    gap: $spacing-40;
  }
}

.dark .app-header {
  background-color: $secondary-background-color-inverse;
}
</style>