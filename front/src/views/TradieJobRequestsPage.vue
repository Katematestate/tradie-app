<template>
  <div class="content-wrapper flex flex-column gap-5">
    <TradieJobProcess />
    <PendingRequests @update-jobs="getAllMyJobs" :jobs="preQuotedJobs" />
    <QuoteSent @update-jobs="getAllMyJobs" :jobs="quoteSentJobs" />
    <InProgress @update-jobs="getAllMyJobs" :jobs="inProgressJobs" />
    <CancelledJobs @update-jobs="getAllMyJobs" :jobs="declinedJobs" />
  </div>
</template>

<script setup>
import TradieJobProcess from "../components/TradieJobProcess.vue";
import PendingRequests from "../components/PendingRequests.vue";
import QuoteSent from "../components/QuoteSent.vue";
import InProgress from "../components/InProgress.vue";
import CancelledJobs from "../components/CancelledJobs.vue";
</script>

<script>
// data and methods vue
export default {
  // add update-jobs event to the component

  data() {
    return {
      reviews: [],
      jobs: [],
      preQuotedJobs: [],
      quoteSentJobs: [],
      inProgressJobs: [],
      completedJobs: [],
      declinedJobs: [],
      businessId: sessionStorage.getItem("userId"),
      jwt: sessionStorage.getItem("jwt"),
    };
  },
  methods: {
    async getAllMyJobs() {
      // get userid from session storage
      if (this.businessId) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}jobs/user?businessId=${
              this.businessId
            }`,
            {
              headers: {
                Authorization: `Bearer ${this.jwt}`,
              },
            }
          );
          const jobs = await response.json();
          console.log(jobs);
          this.jobs = jobs;
          this.preQuotedJobs = this.jobs.filter(
            (job) => job.status === "pre quoted"
          );
          this.quoteSentJobs = this.jobs.filter(
            (job) => job.status === "pending"
          );
          this.inProgressJobs = this.jobs.filter(
            (job) => job.status === "in progress"
          );
          this.completedJobs = this.jobs.filter(
            (job) => job.status === "completed"
          );
          this.declinedJobs = this.jobs.filter(
            (job) => job.status === "cancelled"
          );
        } catch (error) {
          console.log(error);
          return [];
        }
      }
      return [];
    },
  },
  async created() {
    await this.getAllMyJobs();
  },
};
</script>

<style scoped lang="scss">
.content-wrapper {
  padding: var(--spacing-large);
}
</style>
