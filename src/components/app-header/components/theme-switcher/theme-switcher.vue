<template>
  <div
    class="theme-switcher"
    :title="toggleMessage"
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
      >
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
  return isDark.value ? 'Switch to light mode' : 'Switch to dark mode';
})
</script>

<style lang="scss">
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
    opacity: 0;
    width: $size-0;
    height: $size-0;
  }

  & > .slider {
    position: absolute;
    cursor: pointer;
    inset: $spacing-0;
    background-color: $primary-color-inverse;
    -webkit-transition: $animation-speed-slow;
    transition: $animation-speed-slow;
    box-shadow: $size-0 $size-0 $size-2 $secondary-color;
  }

  & > .slider:before {
    position: absolute;
    content: "";
    height: $size-16;
    width: $size-16;
    left: $spacing-0;
    bottom: $spacing-0;
    background-color: $secondary-color-inverse;
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
    background-color: $primary-color-inverse;
  }

  & > input:checked + .slider:before {
    background-color: $primary-color;
    -webkit-transform: translateX($spacing-16);
    -ms-transform: translateX($spacing-16);
    transform: translateX($spacing-16);
  }
}

.dark .theme-switcher {
  & > .toggle > .slider {
    box-shadow: $size-0 $size-0 $size-2 $primary-color-inverse;
  }
}
</style>