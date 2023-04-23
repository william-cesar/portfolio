<template>
  <div class="phone-clock">
    <span class="current-time">{{ currentTime }}</span>
    <span class="current-date">{{ currenDate }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { DateFormatter } from '@/types/date-formatter';
import { WEEKDAY, MONTH } from '@/constants/date'

const date = (): DateFormatter => {
  const date: Date = new Date();

  const weekday: string = WEEKDAY[date.getDay()];
  const month: string = MONTH[date.getMonth()];
  const day: number = date.getDate();

  const hour: number = date.getHours();
  const rawMinutes: number = date.getMinutes();
  const minutes: string | number = rawMinutes < 10 ? `0${rawMinutes}` : rawMinutes;

  return {
    weekday, month, day, hour, minutes
  }
}

const formattedTime = (): string => {
  const { hour, minutes } = date();

  return `${hour}:${minutes}`
}

const formattedDate = (): string => {
  const { weekday, month, day } = date();

  return `${weekday}, ${month} ${day}`;
}

const currentTime: Ref<string> = ref(formattedTime());
const currenDate: Ref<string> = ref(formattedDate());

setInterval(() => {
  currentTime.value = formattedTime();
}, 1000);
</script>

<style lang="scss">
.phone-clock {
  @include centralize();
  flex-direction: column;
  z-index: 1;
  padding-top: $spacing-32;
  color: $primary-text-color-inverse;

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