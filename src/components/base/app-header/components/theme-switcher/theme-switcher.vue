<template>
  <div
    class="theme-switcher"
    :title="$t(toggleMessage)"
  >
    <light-mode-icon
      v-if="isDark"
      @click="changeColorMode()"
    />
    <label class="toggle">
      <input
        type="checkbox"
        :checked="isDark"
        @change="changeColorMode()"
      />
      <span class="slider round" />
    </label>
    <dark-mode-icon
      v-if="!isDark"
      @click="changeColorMode()"
    />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import type { ComputedRef, WritableComputedRef } from 'vue';
import DarkModeIcon from '@/components/_icons/dark-mode-icon.vue';
import LightModeIcon from '@/components/_icons/light-mode-icon.vue';
import { computed } from 'vue';

const isDark: WritableComputedRef<boolean> = useDark();
const changeColorMode = useToggle(isDark);
const toggleMessage: ComputedRef<string> = computed(() => {
  return isDark.value ? 'navbar.switch.light' : 'navbar.switch.dark';
});
</script>

<style lang="scss">
$slider-color: $purple-500;
$slider-background: $white-200;

.theme-switcher {
  display: flex;
  gap: $spacing-8;
  position: relative;
}

.theme-switcher > .toggle {
  position: relative;
  display: flex;
  width: $size-32;
  height: $size-16;

  & > input {
    @include square-element($size-0);
    opacity: 0;
  }

  & > .slider {
    position: absolute;
    cursor: pointer;
    inset: $spacing-0;
    background-color: $slider-background;
    -webkit-transition: $animation-speed-slow;
    transition: $animation-speed-slow;
    box-shadow: $size-0 $size-0 $size-2 $slider-background;
  }

  & > .slider:before {
    @include square-element($size-16);
    position: absolute;
    content: '';
    left: $spacing-0;
    bottom: $spacing-0;
    background-color: $slider-color;
    -webkit-transition: $animation-speed-slow;
    transition: $animation-speed-slow;
  }

  & > .slider.round {
    border-radius: $size-8;
  }

  & > .slider.round:before {
    border-radius: 50%;
  }

  & > input:checked + .slider {
    background-color: $slider-background;
  }

  & > input:checked + .slider:before {
    background-color: $slider-color;
    transform: translateX($spacing-16);
  }
}
</style>
