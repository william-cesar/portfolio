<template>
  <h1>{{ $t('pages.about') }}</h1>
  <hr>
  <RouterLink to="/">Return to the home page</RouterLink>
  <pdf-previewer />
</template>

<script setup lang="ts">
import { PdfPreviewer } from '@/components/index';
</script>
