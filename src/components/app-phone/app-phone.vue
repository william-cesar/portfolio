<template>
  <div class="app-phone">
    <div class="phone-body">
      <div class="phone-antenna antenna-top"></div>
      <div class="phone-antenna antenna-bottom"></div>
      <div class="phone-screen">
        <div class="screen-view">
          <div class="phone-info">
            <phone-clock />
            <phone-notification />
          </div>
        </div>
        <div class="phone-notch">
          <div class="notch-speaker"></div>
          <div class="notch-camera"></div>
        </div>
      </div>
    </div>
    <div class="phone-btn right-btn"></div>
    <div class="phone-btn left-btn top-left-btn"></div>
    <div class="phone-btn left-btn middle-left-btn"></div>
    <div class="phone-btn left-btn bottom-left-btn"></div>
  </div>
</template>

<script setup lang="ts">
import PhoneNotification from './components/phone-notification.vue';
import PhoneClock from './components/phone-clock.vue';
import { onMounted } from 'vue';

onMounted(() => {
  // eslint-disable-next-line no-undef
  const phoneScreen: NodeListOf<Element> = document.querySelectorAll('.phone-screen')!;

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) entry.target.classList.add('phone-screen-visible');
      });
    }, { threshold: 1.0 });

  phoneScreen.forEach((el: Element) => observer.observe(el));
});
</script>

<style lang="scss">
$phone-background: #292c2d;
$antenna-background: #515455;
$screen-background: #191b1c;
$screen-border: #121415;
$notch-speaker-background: #070808;
$notch-camera-background: #272727;

.app-phone {
  width: min(20rem, 100%);
  height: min(40rem, 100svh);
  display: flex;
  position: relative;
  transition: all cubic-bezier(0.36, 0.41, 0.38, 1) $animation-delay-normal;
  isolation: isolate;

  // buttons

  & > .phone-btn {
    width: $size-16;
    height: $size-96;
    position: absolute;
    background-color: $phone-background;
    border-radius: $size-5;
    z-index: -1;
  }

  & > .phone-btn.right-btn {
    right: 0;
    top: 30%;
    height: $size-96;
  }

  & > .phone-btn.left-btn {
    left: 0
  }

  & > .phone-btn.left-btn.top-left-btn {
    left: 0;
    top: 15%;
    height: $size-48;
  }

  & > .phone-btn.left-btn.middle-left-btn {
    left: 0;
    top: 25%;
    height: $size-80;
  }

  & > .phone-btn.left-btn.bottom-left-btn {
    left: 0;
    top: 40%;
    height: $size-80;
  }

  // body 

  & > .phone-body {
    flex: 1;
    background-color: $phone-background;
    border-radius: $size-48;
    margin: $size-4;
    overflow: hidden;
    position: relative;
    isolation: isolate;
  }

  // antenna

  & > .phone-body > .phone-antenna {
    background-color: $antenna-background;
    position: absolute;
    width: 100%;
    height: $size-8;
  }

  & > .phone-body > .phone-antenna.antenna-top {
    top: 10%;
  }

  & > .phone-body > .phone-antenna.antenna-bottom {
    top: 90%
  }

  // screen

  & > .phone-body > .phone-screen {
    flex: 1;
    background-color: $screen-background;
    margin: $size-8;
    border-radius: $size-40;
    border: solid $size-4 $screen-border;
    position: absolute;
    inset: 0;
  }

  & > .phone-body > .phone-screen > .screen-view {
    height: 100%;
    margin: $size-1;
    border-radius: $size-32;
    overflow: hidden;
    position: relative;
  }

  & > .phone-body > .phone-screen > .screen-view > .phone-info {
    @include centralize-vertically();
    flex-direction: column;
    gap: $spacing-24;
    padding: $spacing-32 $spacing-8;
    position: relative;
    z-index: 1;
    transform: translateY(120%);
    transition: $animation-speed-xslow $animation-delay-short;
  }

  & > .phone-body > .phone-screen > .screen-view:after,
  & > .phone-body > .phone-screen > .screen-view:before {
    content: "";
    position: absolute;
    @include square-element(150%);
    background: linear-gradient(140deg, $purple-500, $purple-200, $purple-500);
    bottom: 0;
  }

  & > .phone-body > .phone-screen > .screen-view:after {
    transform: translateY(100%) scaleX(1.4);
    opacity: 0.25;
    transition: $animation-speed-xslow $animation-delay-short;
  }

  & > .phone-body > .phone-screen > .screen-view:before {
    transform: translateY(100%) scaleX(1.4);
    opacity: 1;
    transition: $animation-speed-xslow;
  }

  // notch

  & > .phone-body > .phone-screen > .phone-notch {
    @include centralize();
    position: absolute;
    width: 50%;
    background-color: $screen-background;
    height: $size-32;
    border-radius: $size-0 $size-0 $size-14 $size-14;
    right: 25%;
    top: 0;
  }

  & > .phone-body > .phone-screen > .phone-notch::after,
  & > .phone-body > .phone-screen > .phone-notch::before {
    content: "";
    width: 10%;
    height: 50%;
    position: absolute;
    top: calc(-1 * $size-4);
    border: solid $size-5 $screen-background;
    border-bottom: 0;
  }

  & > .phone-body > .phone-screen > .phone-notch::after {
    left: $size-5;
    transform: translateX(-100%);
    border-left: 0;
    border-radius: 0 $size-12 0 0;
  }

  & > .phone-body > .phone-screen > .phone-notch::before {
    right: $size-5;
    transform: translateX(100%);
    border-right: 0;
    border-radius: $size-12 0 0 0;
  }

  & > .phone-body > .phone-screen > .phone-notch > .notch-speaker {
    background: $notch-speaker-background;
    border-radius: $size-4;
    height: $size-5;
    width: 28%;
  }

  & > .phone-body > .phone-screen > .phone-notch > .notch-camera {
    @include circle-element($size-5);
    background: $notch-camera-background;
    margin-left: $size-8;
    margin-right: calc(-1 * $size-12);
  }

  // animations

  &:hover {
    transform: scale(0.95);
  }

  & > .phone-body > .phone-screen.phone-screen-visible > .screen-view:after {
    transform: translateY(10%) scaleX(1.4);
    transition: $animation-speed-xslow;
  }

  & > .phone-body > .phone-screen.phone-screen-visible > .screen-view:before {
    transform: translateY(10%) scaleX(1.4);
    transition: $animation-speed-xslow $animation-delay-short;
  }

  & > .phone-body > .phone-screen.phone-screen-visible > .screen-view > .phone-info {
    transform: translateY(0%);
    transition: $animation-speed-xslow $animation-delay-normal;
  }
}

.dark .app-phone > .phone-body {
  background-color: $white-300;
}
</style>