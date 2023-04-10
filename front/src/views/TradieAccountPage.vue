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

<template>
  <div class="info-section">
    <h1>Business Profile</h1>
    <div class="info-flex">
      <div class="info-image-flex">
        <img :src="businessData.companyImage" />
        <h4>{{ businessData.businessName }}</h4>
        <p>Overal Rating</p>
      </div>

      <div class="info-text">
        <img :src="businessData.companyLogo" />
        <h4>Phone: {{ businessData.businessPhoneNumber }}</h4>
        <h4>Location: {{ businessData.businessLocation }}</h4>
        <h4>Website: {{ businessData.businessWebsite }}</h4>
        <p>
          {{ businessData.businessDescription }}
        </p>
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
            label="Comfirm Password"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="review-section">
    <h2>Reviews</h2>
    <router-view></router-view>

    <Carousel :value="carouselItems" :num-visible="2" :num-scroll="1">
      <div v-for="pastWork in businessData.pastWorks">
        <div class="job-review">
          <!-- <div>{{ slotProps.data.job }}</div> -->

          <div class="review-photos">
            <div class="review-photo">
              <span>Before Photo</span>
              <img :src="pastWork.beforePhoto" />
            </div>

            <div class="review-photo">
              <span>After Photo</span>
              <img :src="pastWork.afterPhoto" />
            </div>
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
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: sessionStorage.getItem("userId"),
      businessData: null,
    };
  },
  methods: {
    async fetchMyBusiness() {
      try {
        const jwt = sessionStorage.getItem("jwt");
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}businesses/${this.userId}`,
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const business = await response.json();

        this.businessData = business;
      } catch (error) {
        console.log("Error fetching business:", error);
      }
    },
  },
  async mounted() {
    try {
      const jwt = sessionStorage.getItem("jwt");
      if (!jwt) {
        throw new Error("No JWT found");
      }
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}businesses`,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      this.data = await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  async created() {
    await this.fetchMyBusiness();
  },
};
</script>

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
