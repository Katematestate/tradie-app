<script setup>
import { inject, onMounted } from "vue";
import Carousel from "primevue/carousel";
import ReviewCard from "../../components/ReviewCard.vue";
import Button from "../../components/Button.vue";
import BeforeAfterSlider from "../../components/BeforeAfterSlider.vue";
import Tradie1Img from "../../assets/images/test-img-1.jpg";
import Tradie2Img from "../../assets/images/test-img-2.jpg";

const emit = defineEmits(["quote", "viewSite"]);

function getQuote(id) {
  emit("quote", id);
}
function viewSite(id) {
  emit("viewSite", id);
}

// This data would be fetched from the server via some sort of company id
const details = {
  // todo - add rating avg
  rating: 4.5,
};

// Reviews would be fetched from the server via some sort of company id
const reviews = [
  {
    body: "some body text for the review",
    companyName: "Electro Lights",
    rating: 3.5,
  },
];
</script>

<template>
  <div class="company-dialog flex gap-5">
    <section class="company-info">
      <div class="company-img">
        <img :src="business.companyImage" alt="" />
      </div>
      <span class="h5">
        Average Rated {{ details.rating }}
        <i class="pi pi-star-fill text-brand"></i>
      </span>
      <p>{{ business.businessDescription }}</p>
    </section>
    <section class="company-examples">
      <div class="customer-reviews flex flex-column gap-5">
        <Carousel :value="reviews">
          <template #item="slotProps">
            <ReviewCard v-bind="slotProps.data" />
          </template>
        </Carousel>
        <Carousel :value="business.pastWorks">
          <template #item="slotProps">
            <BeforeAfterSlider v-bind="slotProps.data" />
          </template>
        </Carousel>
      </div>
      <div class="button-footer flex gap-3 justify-content-center">
        <Button label="View Site" type="secondary" @click="viewSite()" />
        <Button label="Get Quote" @click="getQuote()" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    business: {},
  }),
  inject: ["dialogRef"],
  mounted() {
    this.business = this.dialogRef.data.business;
  },
};
</script>

<style scoped lang="scss">
.company-dialog {
  margin-top: var(--spacing-standard);

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.company-info,
.company-examples {
  max-width: 500px;
}
.company-img {
  img {
    width: 100%;
    border-radius: var(--border-radius-standard);
  }
}
</style>
