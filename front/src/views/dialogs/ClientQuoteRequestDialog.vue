<script setup>
import { computed } from "@vue/reactivity";
import InputText from "primevue/inputtext";
import TextArea from "primevue/textarea";
import { ref } from "vue";
import Button from "../../components/Button.vue";
import ImageUpload from "../../components/ImageUpload.vue";

const companyID = ref(123);

const companyName = computed(() => {
  // Fetch company data for companyID
  return "Electro Lights LTD";
});
</script>

<template>
  <section class="job-request-form">
    <h4 class="text-center">{{ companyName }}</h4>
    <section class="job-info flex gap-3">
      <div class="client-info flex flex-column gap-2">
        <div class="input-group">
          <label for="">Name</label>
          <InputText />
        </div>
        <div class="input-group">
          <label for="">Location</label>
          <InputText />
        </div>
        <div class="input-group">
          <label for="">Phone</label>
          <InputText />
        </div>
        <div class="input-group">
          <label for="">Email</label>
          <InputText />
        </div>
        <div class="input-group">
          <label for="">Job Title</label>
          <InputText />
        </div>
      </div>
      <div class="image-upload">
        <div class="input-group">
          <label>Add an image of what needs to be done.</label>
          <ImageUpload />
        </div>
      </div>
    </section>
    <section class="job-blurb">
      <div class="input-group">
        <label for="">Description of Job</label>
        <TextArea placeholder="Max 1000 words" />
      </div>
    </section>
  </section>

  <div class="button-footer flex justify-content-between">
    <Button label="Clear Information" type="secondary" />
    <Button label="Send Job Request" />
  </div>
</template>

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
