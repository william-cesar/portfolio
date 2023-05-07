<template>
  <div
    class="app-tag"
    :style="{ backgroundColor: color + '77', borderColor: color }"
  >
    <span class="tag-label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, default: 'Tag' },
  color: { type: String, default: '#8e8e8e' }
})
</script>

<style lang="scss">
.app-tag {
  @include centralize();
  width: fit-content;
  padding: $spacing-2 $spacing-8;
  border-radius: $size-8;
  border-width: $size-2;
  border-style: solid;
  user-select: none;

  & > .tag-label {
    font-size: $size-12;
    letter-spacing: $size-1;
    color: $primary-text-color;
    white-space: nowrap;
  }
}
</style>