<template>
  <header class="app-header">
    <div class="header-area">
      <header-title />
      <pages-links-tray />
      <div class="right-float">
        <locale-change />
        <theme-switcher />
        <pages-links />
      </div>
    </div>
  </header>
</template>

<script setup>
import LocaleChange from './components/locale-change/locale-change.vue';
import ThemeSwitcher from './components/theme-switcher/theme-switcher.vue';
import PagesLinks from './components/pages-links/pages-links.vue';
import HeaderTitle from './components/header-title/header-title.vue';
import PagesLinksTray from './components/pages-links-tray/pages-links-tray.vue';
</script>

<style lang="scss">
.app-header {
  position: fixed;
  width: 100%;
  z-index: 1;

  & > .header-area {
    @include centralize-vertically();
    padding: $spacing-16 $spacing-32;
    background-color: $purple-200;
    height: $header-height;
    justify-content: space-between;
    position: relative;
  }

  & > .header-area > .pages-links-tray {
    display: none;
  }

  & > .header-area > .right-float {
    @include centralize-vertically();
    gap: $spacing-40;
  }
}

@include media-query('screen-medium') {
  .app-header {
    & > .header-area {
      padding-inline: $spacing-16;
    }

    & > .header-area > .pages-links-tray {
      display: flex;
    }

    & > .header-area > .right-float {
      gap: $spacing-24;
    }

    & > .header-area > .right-float > .pages-links {
      display: none;
    }
  }
}
</style>
