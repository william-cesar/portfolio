<template>
  <div class="pages-links-tray">
    <button
      class="toggle-tray-button"
      @click="toggleTray"
    >
      <chevron-down-icon :class="trayState" />
    </button>
    <div :class="['tray', trayState, isTouched && 'tray-touched']">
      <pages-links @page-selected="isOpen = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChevronDownIcon from '@/components/_icons/chevron-down-icon.vue';
import PagesLinks from '../pages-links/pages-links.vue';
import { computed, type ComputedRef } from 'vue';
import { ref, type Ref } from 'vue';

const isOpen: Ref<boolean> = ref(false);
const isTouched: Ref<boolean> = ref(false);

const toggleTray = (): void => {
  isOpen.value = !isOpen.value;
  isTouched.value = true;
}
const trayState: ComputedRef<string> = computed(() => isOpen.value ? 'tray-open' : 'tray-closed')
</script>

<style lang="scss">
.pages-links-tray {
  position: absolute;
  bottom: calc(-1 * $size-16);
  right: calc(50% - $size-16);
  @include centralize();
  flex-direction: column;

  & > .tray {
    position: absolute;
    background-color: $secondary-background-color;
    box-shadow: $size-0 $size-0 $size-2 $tertiary-color;
    border-top: $size-1 solid $primary-color-inverse;
    border-radius: $size-0 $size-0 $size-5 $size-5;
    top: calc(-1 * $spacing-40);
    padding: $spacing-16 $spacing-40;
    z-index: -1;
    isolation: isolate;
  }

  & > .tray.tray-open {
    transform: translateY($size-56);
    transition: transform $animation-speed-xslow $animation-delay-normal;
  }

  & > .tray.tray-closed.tray-touched {
    transform: translateY($size-0);
    transition: transform $animation-speed-xslow $animation-delay-normal;
  }

  & > .toggle-tray-button {
    @include circle-element($size-32);
    @include centralize();
    padding: $spacing-0;
    background-color: transparent;
    animation: bounce $animation-speed-xslow $animation-delay-long 3 forwards;
  }

  & > .toggle-tray-button > .tray-closed {
    transform: rotate(0deg);
    transition: transform $animation-speed-medium $animation-delay-normal;
  }

  & > .toggle-tray-button > .tray-open {
    transform: rotate(180deg);
    transition: transform $animation-speed-medium $animation-delay-normal;
  }
}

.dark .pages-links-tray {
  & > .tray {
    background-color: $secondary-background-color-inverse;
    box-shadow: $size-0 $size-0 $size-2 $primary-color-inverse;
    border-top: $size-1 solid $secondary-color-inverse;
  }
}

@keyframes bounce {
  0% {
    transform: translateY($animation-bounce-begin);
  }

  25% {
    transform: translateY($animation-bounce-middle);
  }

  50% {
    transform: translateY($animation-bounce-end);
  }

  75% {
    transform: translateY($animation-bounce-middle);
  }

  100% {
    transform: translateY($animation-bounce-begin);
  }
}
</style>