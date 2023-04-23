<template>
  <div class="phone-notification">
    <a
      class="notification-link"
      href="https://www.linkedin.com/in/williamcesarmg/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        class="notification-icon"
        src="@/assets/files/png/linkedin.png"
        alt="linkedin-icon"
      >
      <section class="notification-info">
        <span class="notification-title">LinkedIn</span>
        <p class="notification-description">
          Visit my profile and see my professional acomplishments.
        </p>
      </section>
    </a>
    <a
      class="notification-link"
      href="https://github.com/william-cesar"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        class="notification-icon"
        src="@/assets/files/png/github.png"
        alt="github-icon"
      >
      <section class="notification-info">
        <span class="notification-title">GitHub</span>
        <p class="notification-description">
          Take a look at other projects and how I write my code.
        </p>
      </section>
    </a>
    <a
      class="notification-link"
      href="mailto:'william.cesar.mg@gmail.com'"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        class="notification-icon"
        src="@/assets/files/png/gmail.png"
        alt="gmail-icon"
      >
      <section class="notification-info">
        <span class="notification-title">Mail</span>
        <p class="notification-description">
          Send me a mail. Let's have a conversation.
        </p>
      </section>
    </a>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.phone-notification {
  @include centralize-horizontally();
  @include square-element(100%);
  flex-direction: column;
  gap: $spacing-20;

  & > .notification-link {
    @include centralize();
    background-color: rgba(255, 255, 255, 0.45);
    padding: $spacing-12;
    border-radius: $size-20;
    gap: $spacing-12;
  }

  & > .notification-link > .notification-icon {
    @include square-element($size-40);
    border-radius: $size-8;
    background-color: $white-100;
  }

  & > .notification-link > .notification-info {
    color: $primary-text-color;
    line-height: 115%;
  }

  & > .notification-link > .notification-info > .notification-title {
    font-weight: $font-weight-medium;
  }

  & > .notification-link > .notification-info > .notification-description {
    font-size: $font-size-14;
  }
}
</style>