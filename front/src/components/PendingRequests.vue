<script setup>
import { Icon } from "@iconify/vue";
import JobCard from "./JobCard.vue";

function bar() {
  window.alert("dong from pending requests");
}
defineProps({ jobs: Array, required: true });
</script>

<template>
  <div class="heading-wrapper">
    <div class="icon">
      <Icon icon="solar:menu-dots-circle-bold" color="#222030" />
    </div>
    <div class="blue-div">
      <h3>Pending</h3>
    </div>
  </div>
  <section v-for="job in jobs" class="content">
    <JobCard
      :clientName="job.client.name"
      :client-location="job.location"
      :clientEmail="job.client.email"
      :clientPhone="job.client.phoneNumber"
      :jobDescription="job.jobDescription"
      :jobType="job.jobTitle"
      :jobState="job.status"
      @primary-action="sendQuote(job)"
      @secondary-action="bar()"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      userId: sessionStorage.getItem("userId"),
    };
  },
  methods: {
    async sendQuote(job) {
      const businessId = this.userId;
      let jwt = sessionStorage.getItem("jwt");
      if (!jwt) return console.log("No JWT found");
      if (!businessId) return console.log("No businessId found");
      let updatedJob = { job, status: "pending" };
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
        this.$emit("update-jobs");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.heading-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
.blue-div {
  background-color: var(--color-primary);
  color: var(--color-brand-text);
  border-radius: 5px;
  padding: 0px;
  margin: 0 5px;
  flex: 1;
}
.blue-div h3 {
  margin: 10px;
}

.icon {
  width: 4em;
  height: 4em;
  margin: 5px;
}
.icon svg {
  width: 100%;
  height: 100%;
}
.content {
  background-color: var(--color-shade);
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
}
</style>
