<template>
  <div class="locale-change">
    <button
      class="locale-pt"
      @click="setLocale('pt')"
      :title="$t('navbar.pt')"
    >
    </button>
    <button
      class="locale-en"
      @click="setLocale('en')"
      :title="$t('navbar.en')"
    >
    </button>
  </div>
</template>

<script setup lang="ts">
import i18n from '@/plugins/i18n';

const setLocale = (locale: 'en' | 'pt'): void => {
  i18n.global.locale.value = locale;
}
</script>

<style lang="scss">
.locale-change {
  @include centralize();
  gap: $spacing-16;
  width: fit-content;

  & > .locale-pt {
    @include circle-element($size-24);
    padding: 0;
    background: url('@/assets/files/svg/brazil.svg') -4px -5px / 40px 32px no-repeat;
  }

  & > .locale-en {
    @include circle-element($size-24);
    padding: 0;
    background: url('@/assets/files/svg/usa.svg') -6px -5px / 46px 32px no-repeat;
  }
}
</style>