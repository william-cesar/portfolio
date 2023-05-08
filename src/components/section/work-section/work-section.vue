<template>
  <section class="work-section">
    <h2 class="professional-xp">{{ $t('professional_xp') }}</h2>
    <app-jobs />
  </section>
</template>

<script setup lang="ts">
import { AppJobs } from '@/components/index';
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