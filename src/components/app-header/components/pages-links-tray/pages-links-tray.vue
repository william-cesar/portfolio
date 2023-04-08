<template>
  <div class="pages-links-tray">
    <button
      class="toggle-tray-button"
      @click="toggleTray"
    >
      <chevron-down :class="trayState" />
    </button>
  </div>
</template>

<script setup lang="ts">
import ChevronDown from '@/components/_icons/chevron-down.vue';
import { computed, type ComputedRef } from 'vue';
import { ref, type Ref } from 'vue';

const isOpen: Ref<boolean> = ref(false);
const toggleTray = (): boolean => isOpen.value = !isOpen.value;
const trayState: ComputedRef<string> = computed(() => isOpen.value ? 'tray-open' : 'tray-closed')

</script>

<style lang="scss">
.pages-links-tray {
  position: absolute;
  bottom: calc(-1 * $size-16);
  right: calc(50% - $size-16);

  & > .toggle-tray-button {
    @include circle-element($size-32);
    @include centralize();
    padding: 0;
    background-color: transparent;
    animation: bounce $animation-speed-xslow $animation-delay-long 3 forwards;
  }

  & > .toggle-tray-button > .tray-closed {
    transform: rotate(180deg);
    animation:
      rotateUp $animation-speed-medium $animation-delay-normal forwards;
  }

  & > .toggle-tray-button > .tray-open {
    animation:
      rotateDown $animation-speed-medium $animation-delay-normal forwards;
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

@keyframes rotateUp {
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotateDown {
  to {
    transform: rotate(180deg);
  }
}
</style>