<script setup>
import TradieCard from "../components/TradieCard.vue";
import DevImg from "../assets/images/dev.jpg";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Paginator from "primevue/paginator";
import { computed, ref } from "vue";

const region = ref("");
const regions = ref(
  new Array(20).fill("test region").map((r, i) => `${r} ${i}`)
);

const tradiesPerPage = 6;
const tradiesOffset = ref(0);

const tradies = ref([
  {
    companyImage: DevImg,
    companyLogo: DevImg,
    keywords: ["painter", "joiner"],
    activeQuote: false,
    companyTitle: "Electro Lights",
    companyBlurb:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, ex!",
  },
  ...new Array(18).fill(0).map((v, i) => ({
    companyImage: DevImg,
    companyLogo: DevImg,
    keywords: ["painter", "joiner"],
    activeQuote: false,
    companyTitle: "Test Company " + i,
    companyBlurb:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, ex!",
  })),
]);

/**
 * We need a slice of the tradies array based on which 'page' we are on.
 * 
 * The paginator component gives us the starting index whenever the page changes, we store this in `tradiesOffset`
 * e.g. 0 -> 6 -> 12 -> 18 (assuming that tradiesPerPage is 6)
 * 
 * We can use the starting offset to calculate the start and end of the array slice that we want.
 * 
 * Using the computed() function so that whenever the 'page' changes this slice of tradies also changes.
 */
const pagedTradiesSlice = computed(() => {
  return tradies.value.slice(
    tradiesOffset.value,
    tradiesOffset.value + tradiesPerPage
  );
});
</script>

<template>
  <section class="looking-for-tradie">
    <h1>Looking for a Tradie</h1>
    <form class="tradie-search">
      <div class="config">
        <InputText placeholder="Company" />
        <Dropdown v-model="region" :options="regions" placeholder="Region" />
      </div>
      <span class="search-instruct"
        >Keywords that identify with what you're looking for</span
      >
      <div class="search-keywords">
        <div class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText placeholder="Search" />
        </div>
        <Button>Find a Tradie</Button>
      </div>
    </form>
  </section>

  <section class="qualified-tradies">
    <h1 class="text-center">All Qualified Tradies</h1>
    <div class="tradie-list">
      <TradieCard v-for="tradie in pagedTradiesSlice" v-bind="tradie" />
    </div>
  </section>
  <Paginator
    v-model:first="tradiesOffset"
    :rows="tradiesPerPage"
    :totalRecords="tradies.length"
  ></Paginator>

  <section class="become-member">
    <h1>Become a Member</h1>
    <div class="sign-up">
      <button>Client Signup</button>
      <button>Tradie Signup</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.looking-for-tradie {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-primary);
  color: var(--color-primary-text);
  padding: var(--spacing-large);

  .config,
  .search-keywords {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-small);

    .p-inputtext,
    .p-input-icon-left,
    .p-dropdown {
      flex: 1;
    }
  }

  .p-input-icon-left {
    .p-inputtext {
      width: 100%;
    }
  }

  .tradie-search {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 600px;
    gap: var(--spacing-small);
  }
  .search-instruct {
    font-family: var(--font-secondary);
  }
}

.tradie-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);
  margin: 0 200px;
}

.load-more {
  display: block;
  margin: var(--spacing-standard) auto;
}

.become-member {
  color: #fff;
  padding: var(--spacing-large);
  background-image: url("http://cdn.shopify.com/s/files/1/0438/5642/9219/articles/types-of-tools_1024x1024.jpg?v=1676629248");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .sign-up {
    display: flex;
    gap: var(--spacing-standard);
  }
}
</style>
