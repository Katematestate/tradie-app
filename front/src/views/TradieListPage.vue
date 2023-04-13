<script setup>
import TradieCard from "../components/TradieCard.vue";
import LoginModal from "../components/LoginModal.vue";
import Button from "../components/Button.vue";
import ClientQuoteRequestDialog from "./dialogs/ClientQuoteRequestDialog.vue";
import TradieInfoDialog from "./dialogs/TradieInfoDialog.vue";

import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Paginator from "primevue/paginator";
import { useDialog } from "primevue/usedialog";
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
        <Button
          @click="getAllBusinesses"
          type="submit"
          label="Find a Tradie"
        ></Button>
      </div>
    </form>
  </section>

  <section class="qualified-tradies">
    <h1 class="text-center">All Qualified Tradies</h1>
    <div class="tradie-list">
      <TradieCard
        v-for="tradie in pagedTradiesSlice"
        v-bind="tradie"
        @quote="quote(tradie._id)"
        @viewMore="viewMore(tradie._id)"
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
      <router-link to="/client/signup">
        <Button label="Client Signup" />
      </router-link>
      <router-link to="/tradie/signup">
        <Button label="Tradie Signup" />
      </router-link>
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
      regions: ref([
        "",
        "Northland",
        "Auckland",
        "Waikato",
        "Bay of Plenty",
        "Gisborne",
        "Hawke's Bay",
        "Taranaki",
        "Manawatu-Wanganui",
        "Wellington",
        "Tasman",
        "Nelson",
        "Marlborough",
        "West Coast",
        "Canterbury",
        "Otago",
        "Southland",
      ]),

      tradiesPerPage: 6,
      tradiesOffset: 0,
      dialog: useDialog(),
      search: "",

      userType: "",
      userId: "",
      jwt: "",

      user: {},
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
    loadLoginModal() {
      this.dialog.open(LoginModal, {
        props: {
          header: "LOG IN",
          modal: true,
          closeOnEscape: true,
          dismissableMask: true,
        },
      });
    },
    async getAllBusinesses() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}businesses?businessName=${
            this.company
          }&businessLocation=${this.region}&skills=${this.search.toLowerCase()}`
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

    quote(id) {
      this.getSessionStorageData();
      if (this.userId && this.userType && this.jwt && this.user) {
        const business = this.businesses_list.find((item) => item._id === id);

        this.dialog.open(ClientQuoteRequestDialog, {
          props: { header: "Job Request Form", modal: true },
          data: {
            business,
            user: this.user,
          },
        });
      } else {
        console.log("not logged in. login first");
        this.loadLoginModal();
      }
    },

    async viewMore(id) {
      const business = this.businesses_list.find((item) => item._id === id);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}reviews/business/${id}`
      );
      let reviews = await response.json();
      if (!reviews || reviews.message === "No reviews found") reviews = [];
      this.openDialog = this.dialog.open(TradieInfoDialog, {
        data: {
          business,
          reviews,
        },
        props: {
          header: business.businessName,
          modal: true,
        },
        emits: {
          onQuote: (e) => {
            this.openDialog.close();
            this.quote(e);
          },
          onViewSite: () => {
            this.openDialog.close();
            window.open(business.businessWebsite, "_blank", "noreferrer");
          },
        },
      });
    },
    async getClientData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}users/${this.userId}`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${this.jwt}` },
          }
        );
        const user = await response.json();
        this.user = user;
        return user;
      } catch (error) {
        console.error(error);
      }
    },
    async getSessionStorageData() {
      this.userId = sessionStorage.getItem("userId");
      this.userType = sessionStorage.getItem("userType");
      this.jwt = sessionStorage.getItem("jwt");

      if (
        this.userId &&
        this.userType &&
        this.jwt &&
        this.userType === "user"
      ) {
        await this.getClientData();
      }
    },
  },
  async created() {
    await this.getAllBusinesses();
    this.getSessionStorageData();
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
