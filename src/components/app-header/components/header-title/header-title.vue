<template>
  <RouterLink
    class="header-title"
    to="/"
    :title="$t('pages.home')"
  >William.dev</RouterLink>
</template>

<style lang="scss">
.header-title {
  font-family: $font-family-2;
  font-weight: $font-weight-bold;
  letter-spacing: $spacing-2;
  font-size: $font-size-24;
  color: $secondary-text-color;
  text-shadow: $size-1 $size-2 $size-2 $primary-text-color;
}

.dark .header-title,
.dark .header-title:hover:not(:disabled) {
  color: $primary-text-color;
  text-shadow: $size-1 $size-2 $size-2 $primary-text-color-inverse;
}
</style>
