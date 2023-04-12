<script setup>
import { Icon } from "@iconify/vue";
import JobCard from "./JobCard.vue";

function foo() {
  window.alert("ding from pending requests");
}
function bar() {
  window.alert("dong from pending requests");
}
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
  <section class="content">
    <JobCard
      client-name="Linda B"
      client-location="Christchurch"
      client-email="linda&john@gmail.com"
      client-phone="027273274"
      job-description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste numquam distinctio possimus in voluptates, placeat impedit voluptate veniam cumque accusantium?"
      job-type="Kitchen Renovation"
      job-state="pending"
      @primary-action="foo()"
      @secondary-action="bar()"
    />
  </section>
</template>

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
