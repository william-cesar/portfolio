<template>
  <section class="about-section">
    <h2 class="about-me-title">{{ $t('me.title') }}</h2>
    <div class="about-wrapper">
      <div class="about-me-section">
        <p class="about-section-1 tertiary-text">{{ $t('me.sec_1') }}</p>
        <p class="about-section-2 tertiary-text">{{ $t('me.sec_2') }}&nbsp;
          <span class="info-text">{{ $t('work_section.azion.company') }}</span>.
        </p>
        <p class="about-section-3 tertiary-text">{{ $t('me.sec_3') }}</p>
        <ul class="techs">
          <li
            v-for="(tech, idx) in techs"
            :key="idx"
            class="tech"
          >{{ tech }}
          </li>
        </ul>
      </div>
      <picture class="my-picture">
        <img
          class="image"
          src="@/assets/files/png/picture.png"
          alt="picture of a man with purple background"
        />
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
import enUS from '@/plugins/i18n/languages/en-US';

const { techs } = enUS.me;
</script>

<style lang="scss">
$image-size: 14rem;

.about-section {
  display: flex;
  flex-direction: column;
  gap: $size-40;
  margin-block: $size-40;
  width: 100%;

  & > .about-wrapper {
    display: flex;
    gap: $size-60;

    & > .about-me-section {
      display: flex;
      flex-direction: column;
      gap: $size-16;
      word-spacing: $size-1;

      & > .about-section-2 > .info-text {
        font-size: $font-size-16;
      }

      & > .techs {
        list-style: none;
        display: flex;
        gap: $spacing-48;
      }

      & > .techs > .tech {
        position: relative;
        padding-left: $spacing-16;
        color: $tertiary-text-color;
        white-space: nowrap;
      }

      & > .techs > .tech:before {
        content: '\25B8';
        position: absolute;
        left: 0;
        color: $purple-500;
      }
    }

    & > .my-picture {
      @include centralize();
      position: relative;
      margin: $spacing-12;
      width: calc($image-size);
    }

    & > .my-picture::before {
      position: absolute;
      content: '';
      inset: calc(-1 * $size-12);
      border-radius: 50%;
      border: $size-4 solid $purple-200;
    }

    & > .my-picture > .image {
      @include circle-element($image-size)
    }

    @include media-query('screen-large') {
      & {
        flex-direction: column;
      }

      & > .my-picture {
        margin-inline: auto;
      }
    }

    @include media-query('screen-medium') {
      & > .about-me-section > .techs {
        flex-wrap: wrap;
        gap: $spacing-16 $spacing-32;
      }
    }

    @include media-query('screen-small') {
      & > .about-me-section > .techs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @include media-query('screen-xsmall') {
      & > .about-me-section > .techs {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
</style>