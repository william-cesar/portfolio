<template>
  <svg
    class="chevron-down-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="#888888"
      d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M6 10l6 6l6-6l-1.4-1.4l-4.6 4.6l-4.6-4.6L6 10Z"
    ></path>
  </svg>
</template>

<style lang="scss">
.chevron-down-icon {
  @include circle-element($size-32);

  & > path {
    fill: $purple-500;
  }
}
</style>
