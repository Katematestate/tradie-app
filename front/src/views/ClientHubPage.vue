<script setup>
import { Icon } from "@iconify/vue";
import Carousel from "primevue/carousel";
import Button from "primevue/button";
import { ref, computed } from "vue";

import ReviewCard from "../components/ReviewCard.vue";
import BackToLink from "../components/BackToLink.vue";

// Reviews probably need a job id to link them to the job they are reviewing
const reviews = ref([
  { id: "1", body: "abc", companyName: "title", rating: 4.8 },
  {
    id: "2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore dicta fuga veniam consequatur sequi consectetur hic animi porro at?",
    companyName: "title",
    rating: 2,
  },
  { id: "3", body: "abc3", companyName: "title", rating: 3.5 },
]);

const jobs = ref([
  { id: "1", companyName: "title", type: "plumber", status: "pending" },
  { id: "2", companyName: "title", type: "plumber", status: "in-progress" },
  { id: "3", companyName: "title", type: "plumber", status: "pending" }, //Status would be pending | in-progress | complete
]);

const pendingJobs = computed(() => {
  return jobs.value.filter((job) => job.status === "pending");
});

const inProgressJobs = computed(() => {
  return jobs.value.filter((job) => job.status === "in-progress");
});

function editReview(id) {
  window.alert(id);
}
</script>

<template>
  <BackToLink to="/tradielist" label="Back to Tradie List" class="back-link" />
  <header class="flex justify-content-center">
    <h1>
      <Icon style="vertical-align: text-bottom" icon="ri:chat-quote-fill" />
      Client Hub
    </h1>
  </header>
  <div class="page-content flex flex-column align-items-stretch">
    <section class="pending-quote">
      <h5>Pending</h5>
      <div class="quote-list flex flex-column gap-2 shade">
        <div v-for="job in pendingJobs" class="job">
          <div
            class="job-info panel flex justify-content-between align-items-center"
          >
            <strong class="company-name">{{ job.companyName }}</strong>
            <span class="job-type">{{ job.type }}</span>
          </div>
          <Button size="small" label="Accept" />
          <Button outlined severity="secondary" size="small" label="Decline" />
        </div>
      </div>
    </section>
    <section class="in-progress-quote">
      <h5>In Progress</h5>
      <div class="quote-list flex flex-column gap-2 shade">
        <div v-for="job in inProgressJobs" class="job">
          <div
            class="job-info panel flex justify-content-between align-items-center"
          >
            <strong class="company-name">{{ job.companyName }}</strong>
            <span class="job-type">{{ job.type }}</span>
          </div>
          <Button size="small" label="Complete" />
          <Button outlined severity="secondary" size="small" label="Review" />
        </div>
      </div>
    </section>
    <section class="reviews">
      <h5>Your Reviews</h5>
      <Carousel class="shade reviews-carousel" :value="reviews" :numVisible="1">
        <template #item="slotProps">
          <ReviewCard
            class="clickable"
            v-bind="slotProps.data"
            @click="editReview(slotProps.data.id)"
          />
        </template>
      </Carousel>
    </section>
  </div>
</template>

<style scoped lang="scss">
.reviews-carousel {
  padding: var(--spacing-standard) 0 0;
}

h5 {
  margin: 0;
  line-height: 1.5;
}

.page-content {
  margin: 0 auto;
  max-width: 800px;
}

section {
  margin: 0 var(--spacing-standard);

  + section {
    margin-top: var(--spacing-standard);
  }
}

.job {
  display: grid;
  grid-template-columns: 65% auto auto;
  gap: var(--spacing-small);
  font-family: var(--font-secondary);
}

.quote-list {
  padding: var(--spacing-standard);
}

.shade {
  border-radius: var(--border-radius-standard);
}

.back-link {
  margin: var(--spacing-standard) 0 0 var(--spacing-standard);
}
</style>
