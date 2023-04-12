<template>
  <div class="content-wrapper flex flex-column gap-5">
    <TradieJobProcess />
    <PendingRequests />
    <QuoteSent />
    <InProgress />
    <CancelledJobs />
  </div>
</template>

<script setup>
import TradieJobProcess from "../components/TradieJobProcess.vue";
import PendingRequests from "../components/PendingRequests.vue";
import QuoteSent from "../components/QuoteSent.vue";
import InProgress from "../components/InProgress.vue";
import CancelledJobs from "../components/CancelledJobs.vue";
</script>

<style scoped lang="scss">
.content-wrapper {
  padding: var(--spacing-large);
}
</style>
