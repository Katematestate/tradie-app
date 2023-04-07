<script setup>
import TradieCard from "../components/TradieCard.vue";
import TradieInfoDialog from "./dialogs/TradieInfoDialog.vue";
import ClientQuoteRequestDialog from "./dialogs/ClientQuoteRequestDialog.vue";

import Button from "../components/Button.vue";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Paginator from "primevue/paginator";
import DevImg from "../assets/images/dev.jpg";
import { ref } from "vue";

import { useDialog } from "primevue/usedialog";
</script>

<script>
export default {
  data() {
    return {
      businesses_list: [],
      region: ref(""),
      regions: ref(
        new Array(20).fill("test region").map((r, i) => `${r} ${i}`)
      ),

      tradiesPerPage: 6,
      tradiesOffset: 0,
      dialog: useDialog(),
      openDialog: null,
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
        throw ""; // Test throw to avoid waiting for fetch to resolve
        const response = await fetch("http://localhost:4000/businesses/");

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const received_data = await response.json();
        return received_data;
      } catch (error) {
        console.error("Error fetching businesses:", error);
        return [
          {
            id: 123,
            skills: ["plumber"],
            activeQuote: true,
            businessName: "dingus",
            businessDescription: "dingus dong",
            companyImage: DevImg,
            companyLogo: DevImg,
          },
          {
            id: 123,
            skills: ["plumber"],
            activeQuote: false,
            businessName: "dingus",
            businessDescription: "dingus dong",
            companyImage: DevImg,
            companyLogo: DevImg,
          },
          {
            id: 123,
            skills: ["plumber"],
            activeQuote: false,
            businessName: "dingus",
            businessDescription: "dingus dong",
            companyImage: DevImg,
            companyLogo: DevImg,
          },
          {
            id: 123,
            skills: ["plumber"],
            activeQuote: false,
            businessName: "dingus",
            businessDescription: "dingus dong",
            companyImage: DevImg,
            companyLogo: DevImg,
          },
          {
            id: 123,
            skills: ["plumber"],
            activeQuote: false,
            businessName: "dingus",
            businessDescription: "dingus dong",
            companyImage: DevImg,
            companyLogo: DevImg,
          },
          {
            id: 123,
            skills: ["plumber"],
            activeQuote: true,
            businessName: "dingus",
            businessDescription: "dingus dong",
            companyImage: DevImg,
            companyLogo: DevImg,
          },
        ];
      }
    },

    quote(id) {
      this.dialog.open(ClientQuoteRequestDialog, {
        props: { header: "Job Request Form", modal: true },
      });
    },

    viewMore(id) {
      this.openDialog = this.dialog.open(TradieInfoDialog, {
        props: { header: "Electro Lights LTD", modal: true },
        emits: {
          onQuote: (e) => {
            this.openDialog.close();
            this.quote(e);
          },
          onViewSite: () => {
            this.openDialog.close();
          },
        },
      });
    },
  },
  async created() {
    this.businesses_list = (await this.getAllBusinesses()) || [];
    console.log(this.businesses_list);
  },
};
</script>

<template>
  <section class="looking-for-tradie">
    <h1>Looking for a Tradie</h1>
    <form class="tradie-search">
      <div class="config">
        <InputText label="Company" />
        <Dropdown v-model="region" :options="regions" placeholder="Region" />
      </div>
      <span class="search-instruct"
        >Keywords that identify with what you're looking for</span
      >
      <div class="search-keywords">
        <div class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText label="Search" />
        </div>
        <Button label="Find a Tradie" />
      </div>
    </form>
  </section>

  <section class="qualified-tradies">
    <h1 class="text-center">All Qualified Tradies</h1>
    <div class="tradie-list">
      <TradieCard
        v-for="tradie in pagedTradiesSlice"
        v-bind="tradie"
        @quote="quote(tradie.id)"
        @viewMore="viewMore(tradie.id)"
      />
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
      <Button label="Client Signup" />
      <Button label="Tradie Signup" />
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
    max-width: 600px;
    gap: var(--spacing-small);

    .config {
      @media (max-width: 480px) {
        flex-direction: column;
      }
    }
  }

  .search-instruct {
    font-family: var(--font-secondary);
  }
}

.qualified-tradies {
  padding: 0 var(--spacing-standard);
}

.tradie-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-large) var(--spacing-standard);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
