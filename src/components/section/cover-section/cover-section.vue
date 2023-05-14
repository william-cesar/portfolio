<template>
  <section class="cover-section">
    <div class="cover-info">
      <h1 class="intro">
        {{ $t('presentation.intro.p1') }}
        <span class="ideas">{{ $t('presentation.intro.p2') }}</span>
        {{ $t('presentation.intro.p3') }}
        <span class="real-life">{{ $t('presentation.intro.p4') }}</span>
        {{ $t('presentation.intro.p5') }}
      </h1>
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
$purple: #8333eb 35%;
$blue: #048af8 65%;
$max-info-width: 600px;
$section-height: calc(100dvh - $size-96);

.cover-section {
  @include centralize-vertically();
  justify-content: space-around;
  height: $section-height;
  width: 100%;
  gap: $spacing-40;
  margin-block: 0 $spacing-40;

  & > .cover-info {
    max-width: $max-info-width;
    display: inherit;
    flex-direction: column;
    gap: $spacing-16;
  }

  & > .cover-info > .intro,
  & > .cover-info > .intro > * {
    font-size: $size-48;
    word-break: keep-all;
    font-weight: $font-weight-bold;
    word-spacing: $spacing-2;
  }

  & > .cover-info > .intro > .ideas {
    color: $primary-background-color;
    -webkit-text-stroke: $size-1 $primary-text-color;
  }

  & > .cover-info > .intro > .real-life {
    background: linear-gradient(45deg, $black-300, $purple, $blue, $black-300);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > .cover-info > .description {
    line-height: $line-height-medium;
  }
}

.dark .cover-section {
  & > .cover-info > .intro > .real-life {
    background: linear-gradient(45deg, $white-300, $purple, $blue, $white-300);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

@include media-query('screen-medium') {
  .cover-section {
    flex-direction: column;
    height: 100%;
    margin-block: $spacing-40;
  }

  .cover-section > .cover-info {
    min-width: 100%;
  }
}
</style>