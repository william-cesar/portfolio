<template>
  <section class="work-section">
    <h2 class="professional-xp">{{ $t('work_section.title') }}</h2>
    <app-jobs />
  </section>
</template>

<script setup lang="ts">
import { AppJobs } from '@/components';
</script>

<style lang="scss">
.work-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-40;
  width: 100%;
  margin: $spacing-40 auto;
}
</style>