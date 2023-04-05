<script setup>
import { Icon } from "@iconify/vue";
import Badge from "primevue/badge";
import Menu from "primevue/menu";
import { ref } from "vue";

const settingsMenu = ref();
function toggleSettingsMenu(event) {
  settingsMenu.value.toggle(event);
}

function logout() {
  sessionStorage.removeItem("jwt");
  sessionStorage.removeItem("userType");
  sessionStorage.removeItem("userId");
  this.$router.push("/");
}
</script>

<template>
  <div class="flex justify-content-between nav-bar">
    <div class="logo flex gap-2">
      <img src="../assets/images/text-logo-icon.svg" alt="App name" />
    </div>

    <div class="actions flex align-self-center gap-1 icon-size-4">
      <div
        v-if="!this.userType || this.userType === 'not-logged-in'"
        class="log-in icon"
      >
        <Icon icon="mdi:account" />
      </div>
      <div v-if="this.userType === 'tradie'" class="job-tray icon relative">
        <Badge
          v-if="hasNotification"
          severity="danger"
          class="absolute right-0 top-0"
        />
        <Icon icon="ion:file-tray-full-sharp" />
      </div>
      <div v-if="this.userType === 'client'" class="quote-tray icon relative">
        <Badge
          v-if="hasNotification"
          severity="danger"
          class="absolute right-0 top-0"
        />
        <Icon icon="ri:chat-quote-fill" />
      </div>
      <div
        v-if="this.userType === 'tradie' || this.userType === 'client'"
        class="settings icon"
        aria-haspopup="true"
        aria-controls="settings-menu"
        @click="toggleSettingsMenu($event)"
      >
        <Icon icon="mdi:cog" />
        <Menu id="settings-menu" ref="settingsMenu" :popup="true">
          <template #end>
            <button
              class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"
              @click="logout()"
            >
              <i class="pi pi-sign-out" />
              <span class="ml-2">Log Out</span>
            </button>
          </template>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userTypeStored: sessionStorage.getItem("userType"),
      userId: sessionStorage.getItem("userId"),
      jwt: sessionStorage.getItem("jwt"),
    };
  },
  computed: {
    userType() {
      if (this.jwt && this.userTypeStored) return this.userTypeStored;
      return "not-logged-in";
    },
  },
  methods: {
    async fetchUserOrBusinessAlerts(userOrBusinessId) {
      try {
        if (this.userType === "not-logged-in") {
          console.log("not logged in, can't fetch alerts");
          return;
        }
        const endpoint = this.userType === "client" ? "user" : "business";
        const response = await fetch(`/alerts/${endpoint}/${userOrBusinessId}`);

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const alerts = await response.json();
        // Use the fetched alerts, e.g., assign them to a data property
        this.userAlerts = alerts;
      } catch (error) {
        console.log("Error fetching alerts for user:", error);
      }
    },
  },
  async created() {
    await this.fetchUserOrBusinessAlerts();
  },
};
</script>

<style scoped lang="scss">
.nav-bar {
  background-color: var(--color-brand);
  color: var(--color-brand-text);
  height: 60px;
  padding: var(--spacing-small);

  .logo img {
    height: 100%;
  }

  .actions {
    > .icon {
      display: flex;
    }
  }
}
</style>
