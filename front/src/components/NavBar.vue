<script setup>
import { Icon } from "@iconify/vue";
import Badge from "primevue/badge";
import Menu from "primevue/menu";
import { ref } from "vue";

// These two pieces of application state need to be managed at the app level, possibly with a store or injectable
const userType = "client"; // tradie | client | not-logged-in
const hasNotification = true;

const settingsMenu = ref();
function toggleSettingsMenu(event) {
  settingsMenu.value.toggle(event);
}

function logout() {
  //TODO STUB (Merlin?)
  settingsMenu.value.toggle();
  window.alert("TODO User logged out!");
}
</script>

<template>
  <div class="flex justify-content-between nav-bar">
    <div class="logo flex gap-2">
      <img src="../assets/images/text-logo-icon.svg" alt="App name" />
    </div>

    <div class="actions flex align-self-center gap-1 icon-size-4">
      <div v-if="!userType || userType === 'not-logged-in'" class="log-in icon">
        <Icon icon="mdi:account" />
      </div>
      <div v-if="userType === 'tradie'" class="job-tray icon relative">
        <Badge
          v-if="hasNotification"
          severity="danger"
          class="absolute right-0 top-0"
        />
        <Icon icon="ion:file-tray-full-sharp" />
      </div>
      <div v-if="userType === 'client'" class="quote-tray icon relative">
        <Badge
          v-if="hasNotification"
          severity="danger"
          class="absolute right-0 top-0"
        />
        <Icon icon="ri:chat-quote-fill" />
      </div>
      <div
        v-if="userType === 'tradie' || userType === 'client'"
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
