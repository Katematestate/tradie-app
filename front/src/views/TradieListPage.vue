<script setup>
import TradieCard from "../components/TradieCard.vue";
import DevImg from "../assets/images/dev.jpg";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Paginator from "primevue/paginator";
import { ref } from "vue";
</script>

<template>
  <section class="looking-for-tradie">
    <h1>Looking for a Tradie</h1>
    <form class="tradie-search" @submit.prevent="getAllBusinesses">
      <div class="config">
        <InputText placeholder="Company" v-model="company" />
        <Dropdown v-model="region" :options="regions" placeholder="Region" />
      </div>
      <span class="search-instruct"
        >Keywords that identify with what you're looking for</span
      >
      <div class="search-keywords">
        <div class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText placeholder="Search" v-model="search" />
        </div>
        <Button type="submit">Find a Tradie</Button>
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
    :totalRecords="this.businesses_list.length"
  ></Paginator>

  <section class="become-member">
    <h1>Become a Member</h1>
    <div class="sign-up">
      <button>Client Signup</button>
      <button>Tradie Signup</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      businesses_list: [],
      company: "",
      region: "",
      regions: ref(
        new Array(20).fill("test region").map((r, i) => `${r} ${i}`)
      ),

      tradiesPerPage: 6,
      tradiesOffset: 0,

      search: "",
    };
  },
  computed: {
    pagedTradiesSlice() {
      return this.businesses_list.slice(
        this.tradiesOffset,
        this.tradiesOffset + this.tradiesPerPage
      );
    },
  },
  methods: {
    async getAllBusinesses() {
      try {
        const response = await fetch(
          `http://localhost:4000/businesses?businessName=${this.company}&businessLocation=${this.region}&skills=${this.search}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        this.businesses_list = await response.json();

        console.log(this.businesses_list);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    },
  },
  async created() {
    await this.getAllBusinesses();
    console.log(this.businesses_list);
  },
};
</script>

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
