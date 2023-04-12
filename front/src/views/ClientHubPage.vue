<script setup>
import { Icon } from "@iconify/vue";
import Carousel from "primevue/carousel";
import Button from "primevue/button";
import { ref, computed } from "vue";

import ReviewCard from "../components/ReviewCard.vue";
import BackToLink from "../components/BackToLink.vue";
import ClientReview from "../views/dialogs/ClientReviewDialog.vue";

import { useDialog } from "primevue/usedialog";
const dialog = useDialog();

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

function editReview(id) {
  dialog.open(ClientReview, {
    props: { modal: true, header: "Leave a review" },
  });
}
</script>

<template>
  <BackToLink to="/tradie/list" label="Back to Tradie List" class="back-link" />
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
            <strong class="company-name"
              >add business name here so need to fetch business</strong
            >
            <span class="job-type">{{ job.jobTitle }}</span>
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
          <Button
            @click="editReview()"
            outlined
            severity="secondary"
            size="small"
            label="Review"
          />
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
  {{ jobs }}
</template>

<script>
// data and methods vue
export default {
  data() {
    return {
      reviews: [],
      jobs: [],
      pendingJobs: [],
      inProgressJobs: [],
      userId: sessionStorage.getItem("userId"),
      jwt: sessionStorage.getItem("jwt"),
    };
  },
  methods: {
    async getAllMyJobs() {
      // get userid from session storage
      if (this.userId) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}jobs/user?userId=${this.userId}`,
            {
              headers: {
                Authorization: `Bearer ${this.jwt}`,
              },
            }
          );
          const jobs = await response.json();
          return jobs;
        } catch (error) {
          console.log(error);
          return [];
        }
      }
      return [];
    },
  },
  async created() {
    this.jobs = await this.getAllMyJobs();
    this.pendingJobs = this.jobs.filter((job) => job.status === "pending");
    this.inProgressJobs = this.jobs.filter(
      (job) => job.status === "in progress"
    );
  },
};
</script>

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
