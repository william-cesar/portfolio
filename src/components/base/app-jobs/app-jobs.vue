<template>
  <div class="app-jobs">
    <div class="jobs-btns">
      <button
        class="job-name-btn"
        ref="jobButton"
        :class="{ 'job-active': job.id === selectedJob.id }"
        v-for="(job, idx) in JobsList"
        :key="job.id"
        @click="selectJob(job, idx)"
      >
        {{ $t(job.name) }}
      </button>
    </div>
    <div class="jobs-info">
      <div
        class="card job-card"
        ref="jobCard"
      >
        <div class="content">
          <h4 class="job-name card-title">{{ $t(selectedJob.position) }} @
            <a
              :href="selectedJob.companyLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ $t(selectedJob.name) }}
            </a>
          </h4>
          <span class="job-period muted-text">{{ $t(selectedJob.period) }}</span>
          <ul
            class="job-description card-content"
            v-for="(activity, idx) in selectedJob.info"
            :key="idx"
          >
            <li class="activity">
              {{ $t(activity) }}
            </li>
          </ul>
          <span class="muted-text">{{ $t('work_section.main_techs') }}</span>
          <div class="techs">
            <template
              v-for="(tech, idx) in selectedJob.mainTechs"
              :key="idx"
            >
              <app-tag
                :label="tech.label"
                :color="tech.color"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type Job from '@/types/job';
import JobsList from '@/helpers/jobs-list';
import { AppTag } from '@/components';

const jobCard: Ref<{}> = ref({});
const jobButton: Ref<{}> = ref({});
const selectedJob: Ref<Job> = ref(JobsList[0]);

const selectJob = (job: Job, buttonIndex: number): void => {
  if (selectedJob.value.id !== job.id) {
    selectedJob.value = job;

    (jobCard.value as HTMLDivElement).classList.add('flip-card');

    // eslint-disable-next-line no-undef
    const buttons = (jobButton.value as NodeListOf<HTMLButtonElement>);
    buttons.forEach((button) => button.disabled = true);

    buttons[buttonIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    setTimeout(() => {
      (jobCard.value as HTMLDivElement).classList.remove('flip-card');
      buttons.forEach((button) => button.disabled = false);
    }, (500));
  };
};
</script>

<style lang="scss">
$active-background: #9f5def52;
$btn-border: #9f5def6f;

.app-jobs {
  display: flex;
  gap: $spacing-32;

  & > .jobs-btns {
    display: inherit;
    flex-direction: column;
    padding-block: $spacing-8;
  }

  & > .jobs-btns > .job-name-btn {
    background-color: transparent;
    text-align: left;
    color: $tertiary-text-color;
    padding-block: $spacing-16;
    border: $size-0;
    border-left: $size-2 solid $btn-border;
    border-radius: $size-0 $size-2 $size-2 $size-0;
    transition: all $animation-speed-medium $animation-delay-short;
  }

  & > .jobs-btns > .job-name-btn:disabled {
    cursor: pointer;
  }

  & > .jobs-btns > .job-name-btn.job-active {
    background-color: $active-background;
    color: $primary-text-color;
    border-left: $size-2 solid $secondary-color-hover;
  }

  & > .jobs-info {
    flex: 1;
  }

  & > .jobs-info > .job-card > .content {
    @include centralize-horizontally();
    flex-direction: column;
    gap: $spacing-16;
  }

  & > .jobs-info > .job-card > .content > .job-description {
    list-style: none;
  }

  & > .jobs-info > .job-card > .content > .job-description > .activity {
    position: relative;
    padding-left: $spacing-16;
  }

  & > .jobs-info > .job-card > .content > .job-description > .activity::before {
    content: '\25B8';
    position: absolute;
    left: 0;
    color: $purple-500;
  }

  & > .jobs-info > .job-card > .content > .muted-text {
    margin-top: $spacing-8;
  }

  & > .jobs-info > .job-card > .content > .techs {
    @include centralize-vertically();
    gap: $spacing-8;
    flex-wrap: wrap;
  }

  // animations

  & > .jobs-info > .job-card.flip-card > .content {
    animation: fade-content $animation-speed-xslow;
  }

  @keyframes fade-content {

    0%,
    55% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

@include media-query('screen-small') {
  .app-jobs {
    display: flex;
    flex-direction: column;

    & > .jobs-btns {
      flex-direction: row;
      overflow-x: auto;
      scrollbar-width: none;
    }

    & > .jobs-btns::-webkit-scrollbar {
      display: none;
    }

    & > .jobs-btns > .job-name-btn {
      min-width: fit-content;
      text-align: left;
      padding: $spacing-8 $spacing-16;
      border-left: none;
      border-bottom: $size-2 solid $btn-border;
      border-radius: $size-2 $size-2 $size-0 $size-0;
    }

    & > .jobs-btns > .job-name-btn.job-active {
      border-left: none;
      border-bottom: $size-2 solid $secondary-color-hover;
    }
  }
}
</style>