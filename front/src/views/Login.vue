<script setup>
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
</script>

<template>
  <h1>THIS IS HEADER</h1>

  <div class="client-login">
    <div class="margin1 flex">
      <div class="links-div">
        <router-link :to="{ name: 'Home' }" class="spacing-large link"
          >Go to Home</router-link
        >
      </div>
    </div>

    <div class="flex">
      <div class="flex-col">
        <div class="heading-container">
          <div class="spacing-large align-items-center">
            <h1>Login</h1>
          </div>
        </div>

        <form class="text-box-container" @submit.prevent="loginUser">
          <div class="spacing-standard">
            <p>Email</p>
            <InputText
              v-model="email"
              class="input-class-box"
              placeholder="Email"
              :required="true"
            />
          </div>

          <div class="spacing-standard">
            <p>Password</p>
            <InputText
              v-model="password"
              type="password"
              class="input-class-box"
              placeholder="Password"
              :required="true"
            />
          </div>

          <div class="spacing-standard">
            <button v-if="!isLoading" type="submit">
              Login (merlin fake button delete when import kelsie)
            </button>
            <p v-else>Loading...</p>
          </div>
        </form>
      </div>
    </div>
  </div>

  <h1>CLIENT LOGIN FOOTER AREA</h1>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      error: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      this.error = "";
      if (!this.email || !this.password) {
        this.error = "Please enter all required fields";
        console.error("Please enter all required fields");
        return;
      }

      let response;
      this.isLoading = true;
      try {
        response = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });
      } catch (error) {
        this.error = error;
        console.error(error);
        return;
      } finally {
        this.isLoading = false;
      }

      const data = await response.json();
      console.log(data);

      if (data.token && data.id) {
        sessionStorage.setItem("jwt", data.token);
        sessionStorage.setItem("userId", data.id);
        sessionStorage.setItem("userType", "user");

        const event = new Event("sessionStorageUpdated");
        window.dispatchEvent(event);

        this.$router.push({ name: "TradieList" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
p {
  margin: 0;
  font-family: var(--font-secondary);
}
h1 {
  font-family: var(--font-main);
}
.heading-container {
  max-width: 800px;
  margin: 0 auto;
}
.text-box-container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
.checkbox-container {
  max-width: 500px;
  margin: 0 auto;
}
// .align-items-center{
//     align-items: center;
// }
.link {
  color: black;
}

.input-class-box {
  border-radius: 5px;
  border: none;
  // padding-top: 3%;
  // padding-left: 3% ;
  // padding-right: 5%;
  // padding-bottom: 10%;
  background-color: #eeeeee;
  width: 100%;
}
.flex-row {
  display: flex;
  flex-direction: row;
  flex: 1;
}
.flex-col {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.flex {
  display: flex;
  flex: 1;
  border: 3px solid cyan;
}
.spacing-small {
  padding-bottom: var(--spacing-small);
}
.spacing-standard {
  padding-bottom: var(--spacing-standard);
}
.spacing-large {
  margin: var(--spacing-large);
}
</style>
