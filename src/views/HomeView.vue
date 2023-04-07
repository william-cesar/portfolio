<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import type { WritableComputedRef } from 'vue';

const isDark: WritableComputedRef<boolean> = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <p class="primary-text">Paragraph primary-text</p>
  <p class="secondary-text">Paragraph secondary-text</p>
  <p class="tertiary-text">Paragraph tertiary-text</p>
  <span class="info-text">Span info-text</span>
  <span class="muted-text">Span muted-text</span>
  <h1>This is h1</h1>
  <h2>This is h2</h2>
  <h3>This is h3</h3>
  <RouterLink to="/">HOME</RouterLink>
  <a class="external-link" href="sasa">This is a link</a>
  <button class="btn-primary" @click="toggleDark()">Toggle Color Mode</button>
</template>
