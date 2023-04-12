<script setup>
import { computed } from "vue";
import Button from "./Button.vue";

const props = defineProps({
  jobImage: String,
  jobDescription: String,
  jobType: String,
  jobState: String,
  clientName: String,
  clientLocation: String,
  clientEmail: String,
  clientPhone: String,
});

const emits = defineEmits(["primaryAction", "secondaryAction"]);

const canDecline = computed(() => {
  switch (props.jobState) {
    case "quote-sent":
    case "pending":
      return true;
    default:
      return false;
  }
});

const primaryActionText = computed(() => {
  switch (props.jobState) {
    case "pending":
      return "Send Quote";
    case "quote-sent":
      return "Accept";
    case "in-progress":
      return "Complete";
    case "cancelled":
      return "Remove";
    default:
      return "";
  }
});
</script>

<template>
  <div class="job-card flex gap-3">
    <div class="img-wrapper">
      <img src="../assets/images/dev.jpg" alt="" />
    </div>

    <div class="name-location-info">
      <div>
        <span class="h4">
          {{ clientName }} <span class="variation">{{ clientLocation }}</span>
        </span>
      </div>

      <div class="flex flex-column gap-1">
        <span class="h5">Email: {{ clientEmail }}</span>
        <span class="h5">Phone: {{ clientPhone }}</span>
      </div>

      <div class="description">
        <p>
          {{ jobDescription }}
        </p>
      </div>
    </div>

    <div class="job-title flex flex-column align-items-end gap-3">
      <span class="h4">{{ jobType }}</span>

      <div class="button-group flex flex-column gap-3">
        <Button
          v-if="canDecline"
          label="Decline"
          type="secondary"
          @click="emits('secondaryAction')"
        />
        <Button :label="primaryActionText" @click="emits('primaryAction')" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.job-card {
  border: 2px black solid;
  background-color: var(--color-page);
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.variation {
  font-weight: 300;
}
.img-wrapper {
  flex: 1 0 auto;
  max-width: 300px;
  border-radius: var(--border-radius-standard);
  overflow: hidden;

  img {
    width: 100%;
  }
}
.job-title {
  white-space: nowrap;

  @media (max-width: 768px) and (min-width: 426px) {
    display: flex;
    flex-direction: row !important;
    align-items: flex-start !important;
    justify-content: space-between;
    align-self: stretch;
  }

  .button-group {
    margin-top: auto;
    width: 150px;
  }
}
</style>
