<template>
  <nav class="pages-links">
    <RouterLink
      class="links"
      to="/about"
      title="About page"
    >
      About
    </RouterLink>
    <RouterLink
      class="links"
      to="/projects"
      title="Projects page"
    >
      Projects
    </RouterLink>
    <RouterLink
      class="links"
      to="/contact"
      title="Contact page"
    >
      Contact
    </RouterLink>
  </nav>
</template>

<style lang="scss">
.pages-links {
  display: flex;
  gap: $spacing-32;

  & > .links {
    font-family: $font-family-2;
    font-size: $font-size-16;

    &.router-link-active,
    &.router-link-active:hover {
      border-bottom: $size-1 solid $secondary-color;
      color: $secondary-color;
    }
  }
}

.dark .pages-links {
  & > .links {
    color: $primary-color-inverse;

    &.router-link-active,
    &.router-link-active:hover {
      border-bottom-color: $primary-text-color-inverse;
      color: $primary-text-color-inverse;
    }
  }

  & > .links:hover {
    color: $primary-color-hover-inverse;
  }
}
</style>