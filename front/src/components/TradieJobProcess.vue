<template>
  <h1 class="job-request-header">how your job request works</h1>
  <div class="job-process">
    <div class="process">
        <h4>1.Pending</h4>
        <div class="icon">
        <Icon icon="solar:menu-dots-circle-bold" />
        </div>
        <p>In your pending is a client requesting a job from you. It is up to you if you would like to send a quote for the job, or decline the job.</p>
    </div>

    <div class="vl"></div>

    <div class="process">
        <h4>2.Quote Sent</h4>
        <div class="icon">

        </div>
        <p>Quote sent box is where the job moves to after a quote has been sent, once you have arranged for a quote and the client has accepted or declined, this is where you update the job status.</p>
    </div>

    <div class="vl"></div>

    <div class="process">
        <h4>3.In Progress</h4>
        <div class="icon">

        </div>
        <p>Once the quote has been accepted, it moves into the progress where the job is currently underway.</p>
    </div>

    <div class="vl"></div>

    <div class="process">
        <h4>4.Cancelled</h4>
        <div class="icon">

        </div>
        <p>If for any reason the job is incomplete, you can move your job into cancelled by pressing decline. </p>
    </div>
  </div>
</template>
 
<style scoped>
.job-request-header{
    text-align: center;
}
.job-process{
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.process{
  flex: 1;
  max-width: 15%;
  margin: 10px 32px 0;
  text-align: center;
}
.vl{
  border-left: 2px solid #000;
}
</style>

<script setup>
import { Icon } from '@iconify/vue';
</script>