<template>
  <section class="projects-section">
    <h2 class="projects-title">{{ $t('projects.title') }}</h2>
    <div class="projects-wrapper">
      <primary-project />
      <primary-project />
      <primary-project />
      <primary-project />
    </div>
    <button
      type="button"
      class="btn-primary"
    >
      {{ $t('projects.see_more') }}
    </button>
  </section>
</template>

<script setup lang="ts">
import { PrimaryProject } from '@/components';
</script>

<style lang="scss">
.projects-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-40;
  width: 100%;
  margin: $spacing-40 auto;

  & > .projects-wrapper {
    @include centralize();
    flex-direction: column;
    gap: $size-60;
  }
}
</style>