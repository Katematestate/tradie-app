<template>
  <div class="info-section">
    <h1>Business Profile</h1>

    <div class="info-flex">
      <div class="info-image-flex">
        <img src="../assets/images/dev.jpg" />
        <h4>Canterbury Builders</h4>
        <p>Overal Rating</p>
      </div>

      <div class="info-text">
        <img src="../assets/images/dev.jpg" />
        <h4>John Campbell</h4>
        <h4>Phone:021 675 873</h4>
        <h4>Location: Christchurch</h4>
        <h4>Website: www.johncampbells.com</h4>
        <p>
          Brent Lucas Builders Ltd is a locally owned and operated building and
          joinery company located in Dunedin. We are a trusted company that has
          been delivering the highest standard of workmanship in Otago for over
          20 years.
        </p>
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
