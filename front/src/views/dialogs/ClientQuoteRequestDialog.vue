<script setup>
import { computed } from "@vue/reactivity";
import InputText from "primevue/inputtext";
import TextArea from "primevue/textarea";
import { ref } from "vue";
import Button from "../../components/Button.vue";
import ImageUpload from "../../components/ImageUpload.vue";

const companyName = computed(() => {
  // Fetch company data for companyID
  return "Electro Lights LTD";
});
</script>

<template>
  <section class="job-request-form">
    <h4 class="text-center">{{ business.businessName }}</h4>
    <section class="job-info flex gap-3">
      <div class="client-info flex flex-column gap-2">
        <div class="input-group">
          <label for="">Name</label>
          <InputText v-model="name" />
        </div>
        <div class="input-group">
          <label for="">Location</label>
          <InputText v-model="location" />
        </div>
        <div class="input-group">
          <label for="">Phone</label>
          <InputText v-model="phone" />
        </div>
        <div class="input-group">
          <label for="">Email</label>
          <InputText v-model="email" />
        </div>
        <div class="input-group">
          <label for="">Job Title</label>
          <InputText v-model="jobTitle" />
        </div>
      </div>
      <div class="image-upload">
        <div class="input-group">
          <label>Add an image of what needs to be done.</label>
          <TextArea v-model="imageURL" placeholder="image url" />
        </div>
      </div>
    </section>
    <section class="job-blurb">
      <div class="input-group">
        <label for="">Description of Job</label>
        <TextArea v-model="jobDescription" placeholder="Max 1000 words" />
      </div>
    </section>
  </section>

  <div class="button-footer flex justify-content-between">
    <Button @click="clearForm" label="Clear Information" type="secondary" />
    <Button @click="sendJobRequest" label="Send Job Request" />
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    location: "",
    phone: "",
    email: "",
    jobTitle: "",
    jobDescription: "",
    imageURL: "",
    business: {},
    user: {},
  }),

  methods: {
    clearForm() {
      this.name = "";
      this.location = "";
      this.phone = "";
      this.email = "";
      this.jobTitle = "";
      this.jobDescription = "";
      this.imageURL = "";
    },
    async sendJobRequest() {
      // Send job request to business
      if (
        this.name &&
        this.location &&
        this.phone &&
        this.email &&
        this.jobTitle &&
        this.jobDescription &&
        this.imageURL
      ) {
        // create http request to send job request to business
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}jobs`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: this.user._id,
              businessId: this.business._id,
              client: {
                name: this.name,
                email: this.email,
                phoneNumber: this.phone,
              },
              jobTitle: this.jobTitle,
              jobDescription: this.jobDescription,
              jobImage: this.imageURL,
              jobLocation: this.location,
            }),
          });

          window.alert("Job request sent!");
          // this.clearForm();

          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
        }
      } else {
        window.alert("please fill out all fields");
      }
      // this.dialogRef.close();
    },
  },

  inject: ["dialogRef"],
  mounted() {
    this.business = this.dialogRef.data.business;
    this.user = this.dialogRef.data.user;
  },
};
</script>

<style scoped>
.job-request-form {
  margin-top: var(--spacing-standard);
}
.input-group {
  display: flex;
  flex-flow: nowrap column;
}

.button-footer {
  margin-top: var(--spacing-standard);
}
</style>
