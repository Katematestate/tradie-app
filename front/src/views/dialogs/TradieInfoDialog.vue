<script setup>
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
  companyId: 123,
  rating: 4.5,
  companyBio:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nulla distinctio placeat, libero accusantium eius odio magnam impedit, fugit dolores aperiam blanditiis! Voluptates sapiente neque unde! Sed rem quas architecto.",
  companyImage: Tradie1Img,
};

// Reviews would be fetched from the server via some sort of company id
const reviews = [
  {
    body: "some body text for the review",
    companyName: "Electro Lights",
    rating: 3.5,
  },
];

// Examples of work would be fetched from the server via some sort of company id
const examples = [
  {
    afterImage: Tradie1Img,
    beforeImage: Tradie2Img,
  },
];
</script>

<template>
  <div class="company-dialog flex gap-5">
    <section class="company-info">
      <div class="company-img">
        <img :src="details.companyImage" alt="" />
      </div>
      <span class="h5">
        Average Rated {{ details.rating }}
        <i class="pi pi-star-fill text-brand"></i>
      </span>
      <p>{{ details.companyBio }}</p>
    </section>
    <section class="company-examples">
      <div class="customer-reviews flex flex-column gap-5">
        <Carousel :value="reviews">
          <template #item="slotProps">
            <ReviewCard v-bind="slotProps.data" />
          </template>
        </Carousel>
        <Carousel :value="examples">
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
