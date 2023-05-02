<template>
  <section class="home">
    <div class="home-info">
      <h1 class="name">{{ $t('presentation.name') }}</h1>
      <h2 class="intro">
        {{ $t('presentation.intro.p1') }}
        <span class="ideas">{{ $t('presentation.intro.p2') }}</span>
        {{ $t('presentation.intro.p3') }}
        <span class="real-life">{{ $t('presentation.intro.p4') }}</span>
        {{ $t('presentation.intro.p5') }}
      </h2>
      <p class="description tertiary-text">{{ $t('presentation.description') }}</p>
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
$max-home-width: calc(1400px - $size-64);
$max-info-width: 600px;

.home {
  @include centralize-vertically();
  justify-content: space-around;
  height: 100%;
  max-width: $max-home-width;
  margin-inline: auto;
  gap: $spacing-32;

  & > .phone-section {
    @include centralize-horizontally();
  }

  & > .home-info {
    max-width: $max-info-width;
    display: inherit;
    flex-direction: column;
    position: relative;
    gap: $spacing-16;
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
