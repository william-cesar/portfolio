<template>
  <nav class="pages-links">
    <RouterLink
      class="links"
      to="/about"
      @click="pageSelected"
    >
      {{ $t('pages.about') }}
    </RouterLink>
    <RouterLink
      class="links"
      to="/projects"
      @click="pageSelected"
    >
      {{ $t('pages.projects') }}
    </RouterLink>
    <RouterLink
      class="links"
      to="/blog"
      @click="pageSelected"
    >
      {{ $t('pages.blog') }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits(['page-selected']);
const pageSelected = (): void => emit('page-selected');
</script>

<style lang="scss">
.pages-links {
  display: flex;
  gap: $spacing-32;
  height: $size-24;

  & > .links {
    font-family: $font-family-2;
    font-size: $font-size-16;
    color: $black-300;
    white-space: nowrap;
    letter-spacing: $size-1;

    &:hover {
      color: $primary-text-color;
      transform: scale(1.1);
      transition: transform $animation-speed-slow;
    }

    &.router-link-active {
      border-bottom: $size-1 solid $black-300;
    }
  }
}
</style>
