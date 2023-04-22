<template>
  <div
    class="pdf-previewer"
    v-if="displayComponent"
  >
    <vue-pdf-embed
      width="256"
      :source="Resume"
      disableTextLayer
      @rendered="renderFinish"
      @loading-failed="loadingFailed"
    />
    <button
      class="download-cv-btn"
      @click="downloadResume"
    ><download-file-icon />
      <span>Download CV</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';
import notifier from '@/plugins/notifier';
import DownloadFileIcon from '@/components/_icons/download-file-icon.vue';
import Resume from '@/assets/files/Resume.pdf';

const displayComponent: Ref<boolean> = ref(true);

const loadingFailed = () => {
  notifier.error('Error while rendering the file. Please try again later.');
  displayComponent.value = false;
}

const renderFinish = () => {
  notifier.clearAll();
  displayComponent.value = true;
}

const downloadResume = (): void => {
  try {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = "William_Cesar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch {
    notifier.error('The file could not be downloaded. Please try again later.');
  }
}
</script>

<style lang="scss">
.pdf-previewer {
  position: relative;
  width: fit-content;
  isolation: isolate;

  & > .download-cv-btn {
    @include centralize();
    flex-direction: column;
    gap: $spacing-8;
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: $primary-color;
    opacity: 0;
    border-radius: $size-0;
    color: $tertiary-color;
  }

  & > .download-cv-btn:hover {
    opacity: 0.8;
    transition: opacity $animation-speed-slow;
  }
}
</style>