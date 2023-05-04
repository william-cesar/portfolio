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
  color: $white-200;
  -webkit-text-stroke: $size-1 $black-400;
}
</style>
