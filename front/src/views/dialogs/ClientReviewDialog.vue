<script setup>
import Textarea from "primevue/textarea";
import Rating from "primevue/rating";
import Button from "primevue/button";
import { ref } from "vue";
import { def } from "@vue/shared";
</script>

<template>
  <section class="experience flex flex-column">
    <h4>Experience</h4>
    <span>Write a short description of how the job went.</span>
    <Textarea v-model="value" rows="5" cols="30" label="Max 1000 words" />
  </section>

  <section class="star-rating flex flex-column gap-2">
    <h4>Star Rating</h4>
    <div class="panel flex justify-content-between align-items-center">
      <span class="text-bold">Communication</span>
      <Rating v-model="communicationRating" :cancel="false" />
    </div>
    <div class="panel flex justify-content-between align-items-center">
      <span class="text-bold">Efficiency</span>
      <Rating v-model="efficiencyRating" :cancel="false" />
    </div>
    <div class="panel flex justify-content-between align-items-center">
      <span class="text-bold">Skills</span>
      <Rating v-model="skillsRating" :cancel="false" />
    </div>
    <div class="panel flex justify-content-between align-items-center">
      <span class="text-bold">Value</span>
      <Rating v-model="valueRating" :cancel="false" />
    </div>
  </section>

  <div class="button-footer">
    <Button outlined severity="secondary" size="small" label="Update" />
    <Button @click="createReview" size="small" label="Post" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      businessName: "",
      businessId: "",
      clientName: "",
      communicationRating: 0,
      efficiencyRating: 0,
      skillsRating: 0,
      valueRating: 0,
      value: "",
    };
  },
  methods: {
    async createReview() {
      if (
        this.communicationRating &&
        this.efficiencyRating &&
        this.skillsRating &&
        this.valueRating
      ) {
        console.log("All ratings are filled out");
      } else {
        return console.log("Please fill out all ratings");
      }
      const userId = sessionStorage.getItem("userId");
      const jwt = sessionStorage.getItem("jwt");
      if (!jwt) return console.log("No JWT found");
      if (!userId) return console.log("No userId found");

      const averageRating =
        (this.communicationRating +
          this.efficiencyRating +
          this.skillsRating +
          this.valueRating) /
        4;

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify({
            reviewer: userId,
            rating: averageRating,
            businessName: this.businessName,
            businessUser: this.businessId,
            comment: this.value,
            clientName: this.clientName,
          }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  inject: ["dialogRef"],
  mounted() {
    this.businessName = this.dialogRef.data.businessName;
    this.businessId = this.dialogRef.data.businessId;
    this.clientName = this.dialogRef.data.clientName;
  },
};
</script>

<style scoped>
.header {
  background-color: var(--color-primary);
  color: var(--color-primary-text);
}

h4 {
  margin: 0;
  padding: var(--spacing-small) 0;
}

.button-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: var(--spacing-standard);
  gap: var(--spacing-small);
}
</style>
