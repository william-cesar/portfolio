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
      />
      <section class="notification-info">
        <span class="notification-title">{{ $t('phone.social.linkedin.label') }}</span>
        <p class="notification-description">
          {{ $t('phone.social.linkedin.description') }}
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
      />
      <section class="notification-info">
        <span class="notification-title">{{ $t('phone.social.github.label') }}</span>
        <p class="notification-description">
          {{ $t('phone.social.github.description') }}
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
      />
      <section class="notification-info">
        <span class="notification-title">{{ $t('phone.social.mail.label') }}</span>
        <p class="notification-description">
          {{ $t('phone.social.mail.description') }}
        </p>
      </section>
    </a>
    <a
      class="notification-link"
      :href="resume"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        class="notification-icon"
        src="@/assets/files/png/resume.png"
        alt="resume-icon"
      />
      <section class="notification-info">
        <span class="notification-title">{{ $t('phone.resume.label') }}</span>
        <p class="notification-description">
          {{ $t('phone.resume.description') }}
        </p>
      </section>
    </a>
  </div>
</template>

<script setup lang="ts">
import resume from '@/assets/files/pdf/resume.pdf';
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
    color: $black-300;
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
