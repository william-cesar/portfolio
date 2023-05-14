<template>
  <div class="home-view">
    <cover-section />
    <about-section />
    <work-section />
    <projects-section />
  </div>
</template>

<script setup lang="ts">
import { AboutSection, CoverSection, ProjectsSection, WorkSection } from '@/components';
</script>

<style lang="scss">
$max-home-width: calc(1400px - $size-64);

.home-view {
  @include centralize();
  flex-direction: column;
  max-width: $max-home-width;
  margin-inline: auto;
  gap: $spacing-60;
}
</style>
