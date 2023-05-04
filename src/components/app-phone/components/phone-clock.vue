<template>
  <div class="phone-clock">
    <span class="current-time">{{ formatTimePeriod($d(currentDateTime, 'hour')) }}</span>
    <span class="current-date">{{ capitalize($d(currentDateTime, 'date')) }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const currentDateTime: Ref<Date> = ref(new Date());

setInterval(() => {
  currentDateTime.value = new Date();
}, 1000);

const capitalize = (value: string): string => {
  const capitalizeFirstLetter = value.charAt(0).toUpperCase();
  return `${capitalizeFirstLetter}${value.substring(1)}`;
};

const formatTimePeriod = (value: string): string => {
  const split = value.split(' ');
  return split[0];
};
</script>

<style lang="scss">
.phone-clock {
  @include centralize();
  flex-direction: column;
  z-index: 1;
  padding-top: $spacing-32;
  color: $white-200;

  & > .current-time {
    font-size: $size-56;
    letter-spacing: $size-4;
    font-weight: 100;
  }

  & > .current-date {
    font-size: $size-16;
    letter-spacing: $size-1;
    font-weight: 300;
  }
}
</style>
