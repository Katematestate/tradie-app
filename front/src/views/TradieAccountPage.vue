<template>
  <div class="info-section">
    <h1>Business Profile</h1>

    <div class="business-info">
      <div class="info-section">
        <img class="info-section-logo" src="../assets/images/dev.jpg" />

        <div class="view-button">
          <Button label="Update Logo" type="button.cta" />
        </div>

        <h5>Company name</h5>
        <input
          class="input-class"
          v-model="message"
          placeholder="Company Name"
        />
        <h5>Rating *****</h5>
        <h5>Current Password</h5>
        <input
          class="input-class"
          v-model="message"
          placeholder="Current Password"
        />
      </div>
      <div class="info-section">
        <h5>First Name</h5>
        <input class="input-class" v-model="message" placeholder="First Name" />
        <h5>Last Name</h5>
        <input class="input-class" v-model="message" placeholder="Last Name" />
        <h5>Mobile Number</h5>
        <input
          class="input-class"
          v-model="message"
          placeholder="Mobile Number"
        />
        <h5>Location</h5>
        <input class="input-class" v-model="message" placeholder="Location" />
        <h5>Website</h5>
        <input class="input-class" v-model="message" placeholder="Website" />
        <h5>New Password</h5>
        <input
          class="input-class"
          v-model="message"
          placeholder="New Password"
        />
      </div>
      <div class="info-section">
        <h4>Company Image</h4>
        <img
          class="info-section-company"
          src="../assets/images/Victoria-Mitchell-11 1.png"
        />
        <h5>import image button</h5>
        <h5>Comfirm Password</h5>
        <input
          class="input-class"
          v-model="message"
          placeholder="Comfirm Password"
        />
      </div>
    </div>
  </div>

  <div class="review-section">
    <h2>Reviews</h2>
    <router-view></router-view>

    <Carousel :value="carouselItems" :num-visible="2" :num-scroll="1">
      <template #item="slotProps">
        <div class="job-review">
          <div>{{ slotProps.data.job }}</div>

          <div class="review-photos">
            <div class="review-photo">
              <span>Before Photo</span>
              <img src="../assets/images/dev.jpg" />
              <div>{{ slotProps.data.beforeImage }}</div>
            </div>

            <div class="review-photo">
              <span>After Photo</span>
              <img src="../assets/images/dev.jpg" />
              <div>{{ slotProps.data.afterImage }}</div>
            </div>
          </div>

          <div class="review-info">
            <div>
              Job Rated:
              <i v-for="_ in slotProps.data.rating" class="pi pi-star-fill"></i>
            </div>

            <div>By: {{ slotProps.data.author }}</div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
.info-image-flex img {
  height: 20em;
  width: 30em;
  border-radius: 5%;
}

.info-text img {
  height: 5em;
  width: 15em;
  border-radius: 5%;
}

.info-flex {
  display: flex;
  flex-direction: row;
  gap: 5%;
  padding: 3%;
}
.info-text h4 {
  margin: 0%;
  padding: 1%;
}
.job-review {
  display: flex;
  flex-flow: nowrap column;
  align-items: stretch;
}
.review-photo img {
  width: 15em;
  height: 20em;
}
.review-photos {
  display: flex;
  flex-direction: row;
}
</style>

<script setup>
import Carousel from "primevue/carousel";

const carouselItems = [
  {
    job: "Wall Renovation",
    beforeImage: "stairs",
    afterImage: "better stairs",
    rating: 4,
    author: "Guy Gregs",
  },
  {
    job: "Broken Door",
    beforeImage: "stairs",
    afterImage: "better stairs",
    rating: 2,
    author: "Guy Gregs",
  },

  {
    job: "Broken Fence",
    beforeImage: "stairs",
    afterImage: "better stairs",
    rating: 4,
    author: "Guy Gregs",
  },

  {
    job: "Kitchen Renovation",
    beforeImage: "stairs",
    afterImage: "better stairs",
    rating: 4,
    author: "Guy Gregs",
  },
];
</script>
