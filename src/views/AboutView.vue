<template>
  <h1>{{ $t('pages.about') }}</h1>
  <hr />
  <RouterLink to="/">Return to the home page</RouterLink>
  <!-- <pdf-previewer /> -->
  <work-section />
</template>

<script setup lang="ts">
import { PdfPreviewer, WorkSection } from '@/components/index';
</script>
