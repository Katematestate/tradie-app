<template>
  <h1 class="text-center">how job requests work</h1>
  <AboutGrid
    :items="[
      {
        heading: 'Pending',
        icon: 'solar:menu-dots-circle-bold',
        instruction:
          'Pending is where a client is requesting a job from you. It is up to you to send a quote for the job or decline the job.',
      },
      {
        heading: 'Quote Sent',
        icon: 'mdi:invoice-clock-outline',
        instruction:
          'Quote Sent is where the job filters to after a quote has been sent. The client has either accepted or declined your quote and this is where you update the job status.',
      },
      {
        heading: 'In Progress',
        icon: 'fa6-solid:handshake-simple',
        instruction:
          'If the quote has been accepted it filters into \'In Progress\', this indicates that the job is currently underway.',
      },
      {
        heading: 'Cancelled',
        icon: 'ic:round-cancel',
        instruction:
          'You can move your job into \'Cancelled\' by pressing decline.',
      },
    ]"
  />
</template>

<style scoped></style>

<script setup>
import AboutGrid from "./AboutGrid.vue";
</script>
