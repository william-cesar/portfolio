<template>
  <section class="home">
    <div class="home-info">
      <h1 class="name"> Hi, I'm William! 👋</h1>
      <h2 class="intro"> Turning <span class="ideas">ideas</span> into <span class="real-life">real life
        </span> products is my thing.</h2>
      <p class="description tertiary-text"> I am a developer (and occasionally a content creator) based in Lavras, Brazil,
        with experience in building applications for the web.</p>
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
$spacing-minus-96: calc(-1 * $size-96);
$purple: #8333eb 35%;
$blue: #048af8 65%;

.home {
  @include centralize-vertically();
  justify-content: space-around;
  height: 100%;

  & > .phone-section {
    @include centralize-horizontally();
  }

  & > .home-info {
    width: 50%;
    display: inherit;
    flex-direction: column;
    position: relative;
    gap: $spacing-16;
    padding-inline: $spacing-32;
  }

  & > .home-info > .name {
    position: absolute;
    top: $spacing-minus-96;
    font-family: $font-family-2;
    transform: rotate(-15deg);
  }

  & > .home-info > .intro,
  & > .home-info > .intro > * {
    font-size: $size-48;
    word-break: keep-all;
    font-weight: $font-weight-bold;
    word-spacing: $spacing-2;
  }

  & > .home-info > .intro > .ideas {
    color: $primary-background-color;
    -webkit-text-stroke: $size-2 $primary-text-color;
  }

  & > .home-info > .intro > .real-life {
    background: linear-gradient(45deg, $black-300, $purple, $blue, $black-300);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > .home-info > .description {
    line-height: $line-height-medium;
  }
}

@include media-query('screen-medium') {
  .home {
    flex-direction: column;
    gap: $spacing-48;
  }

  .home > .home-info {
    width: 100%;
  }

  .home > .home-info > .name {
    position: relative;
    top: 0;
    transform: rotate(0deg);
  }
}

.dark .home {
  & > .home-info > .intro > .ideas {
    color: $primary-background-color-inverse;
    -webkit-text-stroke: $size-1 $primary-text-color-inverse;
  }

  & > .home-info > .intro > .real-life {
    background: linear-gradient(45deg, $white-300, $purple, $blue, $white-300);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>