<script setup>
import Carousel from "primevue/carousel";
import Rating from "primevue/rating";
import TestCompanyImage from "../assets/images/Victoria-Mitchell-11 1.png";
import TestCompanyLogo from "../assets/images/tradie-landing.png";
</script>

<template>
  <div class="info-section">
    <h1 class="text-center">Business Profile</h1>
    <div class="flex gap-4 justify-content-center">
      <div class="info-image-flex">
        <img class="companyImg" :src="businessData.companyImage" />
        <h4>{{ businessData.businessName }}</h4>
        <p class="flex gap-5">
          Overall Rating :
          <Rating :model-value="businessData.rating" :cancel="false" />
        </p>
      </div>

      <div class="info-text flex flex-column gap-1">
        <img height="80" :src="businessData.companyLogo" />
        <strong class="user-name h4">{{ businessData.businessName }}</strong>
        <strong>Phone: {{ businessData.businessPhoneNumber }}</strong>
        <strong>Location: {{ businessData.businessLocation }}</strong>
        <strong>Website: {{ businessData.businessWebsite }}</strong>
        <p>
          {{ businessData.businessDescription }}
        </p>
      </div>
    </div>
  </div>
  <div class="review-section">
    <h2 class="text-center">Reviews</h2>

    <Carousel :value="businessData.pastWorks" :num-visible="2" :num-scroll="1">
      <template #item="sp">
        <div class="job-review">
          <!-- <div>{{ slotProps.data.job }}</div> -->
          <div class="review-card">
            <div class="review-photos flex gap-5">
              <div class="review-photo">
                <span class="h5">Before</span>
                <img :src="sp.data.beforePhoto" />
              </div>

              <div class="review-photo">
                <span class="h5">After</span>
                <img :src="sp.data.afterPhoto" />
              </div>
            </div>

            <div class="review-info flex align-items-center gap-5">
              <div class="flex gap-2">
                <strong>Job Rated:</strong>
                <Rating :model-value="sp.data.rating" :cancel="false" />
              </div>

              <div>By: {{ sp.data.author }}</div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: sessionStorage.getItem("userId"),
      businessData: {
        companyImage: TestCompanyImage,
        businessName: "Test Business",
        companyLogo: TestCompanyLogo,
        businessPhoneNumber: 1234,
        businessLocation: "Somewhere",
        businessWebsite: "www.somewhere.com",
        businessDescription: "A business",
        rating: 4,
        pastWorks: [
          {
            beforePhoto: TestCompanyImage,
            afterPhoto: TestCompanyImage,
            rating: 4,
            author: "Dingus",
          },
          {
            beforePhoto: TestCompanyImage,
            afterPhoto: TestCompanyImage,
            rating: 4,
            author: "Dingus",
          },
          {
            beforePhoto: TestCompanyImage,
            afterPhoto: TestCompanyImage,
            rating: 4,
            author: "Dingus",
          },
          {
            beforePhoto: TestCompanyImage,
            afterPhoto: TestCompanyImage,
            rating: 4,
            author: "Dingus",
          },
          {
            beforePhoto: TestCompanyImage,
            afterPhoto: TestCompanyImage,
            rating: 4,
            author: "Dingus",
          },
          {
            beforePhoto: TestCompanyImage,
            afterPhoto: TestCompanyImage,
            rating: 4,
            author: "Dingus",
          },
        ],
      },
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
    async getSessionStorageData() {
      this.userId = sessionStorage.getItem("userId");
      this.userType = sessionStorage.getItem("userType");
      this.jwt = sessionStorage.getItem("jwt");
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
    this.getSessionStorageData();
  },
};
</script>

<style scoped lang="scss">
// kinda ugly approach for image sizing but before it was taking the whole screen for the image (below)
.companyImg {
  max-height: 400px;
  max-width: 800px;
}
.job-review {
  display: flex;
  flex-flow: nowrap column;
  align-items: stretch;
  background-color: #eeeeee;
}
.review-photos {
  display: flex;
  flex-direction: row;
}
.review-photo img {
  width: 100%;
  border-radius: var(--border-radius-standard);
}
.info-section {
  padding: var(--spacing-large);
}
.info-text {
  font-family: var(--font-secondary);
}

.review-card {
  padding: var(--spacing-standard);
  border-radius: var(--border-radius-standard);
  background-color: var(--color-shade);
}
</style>
