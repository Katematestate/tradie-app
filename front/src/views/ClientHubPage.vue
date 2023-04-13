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

// Reviews probably need a job id to link them to the job they are reviewing  TODO REVIEW SECTION
// const reviews = ref([
//   { id: "1", body: "abc", companyName: "title", rating: 4.8 },
//   {
//     id: "2",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore dicta fuga veniam consequatur sequi consectetur hic animi porro at?",
//     companyName: "title",
//     rating: 2,
//   },
//   { id: "3", body: "abc3", companyName: "title", rating: 3.5 },
// ]);

function editReview(job) {
  dialog.open(ClientReview, {
    props: { modal: true, header: "Leave a review" },
    data: {
      businessName: job.businessName,
      businessId: job.business,
      clientName: job.client.name,
    },
  });
}
</script>

<template>
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
            <strong class="company-name">{{ job.businessName }}</strong>
            <span class="job-type">{{ job.jobTitle }}</span>
          </div>
          <Button @click="moveToInProgress(job)" size="small" label="Accept" />
          <Button
            @click="moveToCancelled(job)"
            outlined
            severity="secondary"
            size="small"
            label="Decline"
          />
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
            <strong class="company-name">{{ job.businessName }}</strong>
            <span class="job-type">{{ job.jobTitle }}</span>
          </div>
          <Button @click="moveToCompleted(job)" size="small" label="Complete" />
          <Button
            @click="editReview(job)"
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
            @click="
              editReview({
                businessName: slotProps.data.businessName,
                businessId: slotProps.data.businessId,
                client: { name: slotProps.data.clientName },
              })
            "
          />
        </template>
      </Carousel>
    </section>
  </div>
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
    async moveToInProgress(job) {
      const userId = this.userId;
      let jwt = sessionStorage.getItem("jwt");
      if (!jwt) return console.log("No JWT found");
      if (!userId) return console.log("No userId found");
      let updatedJob = { job, status: "in progress" };
      delete updatedJob.password;
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}jobs/${job._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(updatedJob),
          }
        );
        const data = await response.json();
        console.log(data);
        await this.getAllMyJobs();
      } catch (error) {
        console.log(error);
      }
    },

    async moveToCompleted(job) {
      const userId = this.userId;
      let jwt = sessionStorage.getItem("jwt");
      if (!jwt) return console.log("No JWT found");
      if (!userId) return console.log("No userId found");
      let updatedJob = { job, status: "completed" };
      delete updatedJob.password;
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}jobs/${job._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(updatedJob),
          }
        );
        const data = await response.json();
        console.log(data);
        // update the job status in the jobs array
        await this.getAllMyJobs();
      } catch (error) {
        console.log(error);
      }
    },

    async moveToCancelled(job) {
      const userId = this.userId;
      let jwt = sessionStorage.getItem("jwt");
      if (!jwt) return console.log("No JWT found");
      if (!userId) return console.log("No userId found");
      let updatedJob = { job, status: "cancelled" };
      delete updatedJob.password;
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}jobs/${job._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(updatedJob),
          }
        );
        const data = await response.json();
        console.log(data);
        // update the job status in the jobs array
        await this.getAllMyJobs();
      } catch (error) {
        console.log(error);
      }
    },

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
          this.jobs = jobs;
          this.pendingJobs = this.jobs.filter(
            (job) => job.status === "pending"
          );
          this.inProgressJobs = this.jobs.filter(
            (job) => job.status === "in progress"
          );
        } catch (error) {
          console.log(error);
        }
      }
      return [];
    },
    async getAllMyReviews() {
      // get userid from session storage
      if (this.userId) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}reviews/user/${this.userId}`,
            {
              headers: {
                Authorization: `Bearer ${this.jwt}`,
              },
            }
          );
          const reviews = await response.json();
          this.reviews = reviews;
          console.log(this.reviews);
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  async created() {
    await this.getAllMyReviews();
    if (!this.reviews.length) {
      this.reviews = [
        { id: "1", jobTitle: "abc", businessName: "title", rating: 4.8 },
      ];
    }
    await this.getAllMyJobs();
    console.log(this.inProgressJobs);
    console.log(this.pendingJobs);
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
  margin: 0 auto var(--spacing-large) auto;
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
