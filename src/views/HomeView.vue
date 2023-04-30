<template>
  <section class="home">
    <div class="home-info">
      <h2 class="name">Hi, I'm William! 👋</h2>
      <h3 class="presentation">I have <span class="fun">fun</span> turning ideas into <span class="real-life">real life
        </span> products</h3>
    </div>
    <div class="phone-section">
      <app-phone />
    </div>
  </section>
</template>
<script setup lang="ts">
import { AppPhone } from '@/components';
</script>
<style lang="scss">
$spacing-minus-60: calc(-1 * $spacing-60);
$purple: #8333eb 35%;
$blue: #048af8 65%;

.home {
  @include centralize-vertically();
  justify-content: space-around;

  & > .phone-section {
    width: 100%;
    @include centralize();
  }

  & > .home-info {
    width: 100%;
    display: inherit;
    flex-direction: column;
    position: relative;
  }

  & > .home-info > .name {
    position: absolute;
    top: $spacing-minus-60;
    font-family: $font-family-2;
    transform: rotate(-15deg);
  }

  & > .home-info > .presentation,
  & > .home-info > .presentation > * {
    font-size: $size-48;
    word-break: keep-all;
    font-weight: $font-weight-bold;
  }

  & > .home-info > .presentation > .fun {
    color: $primary-background-color;
    -webkit-text-stroke: $size-2 $primary-text-color;
  }

  & > .home-info > .presentation > .real-life {
    background: linear-gradient(45deg, $black-300, $purple, $blue, $black-300);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

@include media-query('screen-medium') {
  .home {
    flex-direction: column;
  }

  .home > .home-info > .name {
    position: relative;
    top: 0;
    transform: rotate(0deg);
  }
}

.dark .home {
  & > .home-info > .presentation > .fun {
    color: $primary-background-color-inverse;
    -webkit-text-stroke: $size-1 $primary-text-color-inverse;
  }

  & > .home-info > .presentation > .real-life {
    background: linear-gradient(45deg, $white-300, $purple, $blue, $white-300);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>