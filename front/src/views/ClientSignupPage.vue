<script setup>
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import BackToLink from "../components/BackToLink.vue";
</script>

<template>
  <section class="client-signup flex flex-column">
    <div class="heading-container flex flex-column align-items-center">
      <h1>Sign Up</h1>

      <div class="text-box-container flex flex-column">
        <div class="input-group spacing-small">
          <label>First Name</label>
          <InputText
            v-model="Fname"
            class="input-class-box"
            placeholder="First Name"
          />
        </div>

        <div class="input-group spacing-small">
          <label>Last Name</label>
          <InputText
            v-model="Lname"
            class="input-class-box"
            placeholder="Last Name"
          />
        </div>

        <div class="input-group spacing-small">
          <label>Email</label>
          <InputText
            v-model="email"
            class="input-class-box"
            placeholder="Email"
          />
        </div>

        <div class="input-group spacing-small">
          <label>Password</label>
          <InputText
            v-model="password"
            type="password"
            class="input-class-box"
            placeholder="Password"
          />
        </div>

        <div class="input-group spacing-small">
          <label>Confirm Password</label>
          <InputText
            v-model="confirmPassword"
            type="password"
            class="input-class-box"
            placeholder="Confirm Password"
          />
        </div>
      </div>

      <div class="checkbox-container flex flex-column align-items-start gap-2">
        <div class="input-group checkbox">
          <Checkbox class="" v-model="tos_consent" :binary="true" />
          <label>Do You Consent To The Terms Of Service</label>
        </div>
        <div class="input-group checkbox">
          <Checkbox class="" v-model="email_consent" :binary="true" />
          <label>Do You Concent To Receiving Emails From Find A Tradie</label>
        </div>
      </div>

      <div class="spacing-small create-user">
        <Button @click="createNewUser"> Create New User </Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Fname: "",
      Lname: "",
      // location: "",
      email: "",
      password: "",
      confirmPassword: "",
      tos_consent: false,
      email_consent: false,
    };
  },
  methods: {
    async createNewUser() {
      if (
        this.tos_consent &&
        this.email_consent &&
        (this.Fname || this.Lname) &&
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.password === this.confirmPassword
      ) {
        let name = this.Fname + " " + this.Fname;

        const response = await fetch(`${import.meta.env.VITE_API_URL}users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email: this.email,
            password: this.password,
          }),
        });
        const data = await response.json();
        console.log(data);

        if (data.token && data.userId) {
          sessionStorage.setItem("jwt", data.token);
          sessionStorage.setItem("userId", data.userId);
          sessionStorage.setItem("userType", "user");
          const event = new Event("sessionStorageUpdated");
          window.dispatchEvent(event);
          this.$router.push({ name: "TradieList" });
        }
      } else {
        console.log("incorrect inputs try again");
      }
    },
  },
};
</script>

<style scoped lang="scss">
h5,
p {
  margin: 0;
}
.text-box-container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  gap: var(--spacing-standard);

  @media (max-width: 425px) {
    padding: 0 var(--spacing-standard);
  }
}
.checkbox-container {
  max-width: 500px;
  margin: 0 auto;
  padding: var(--spacing-standard);
}

.create-user {
  margin-bottom: var(--spacing-large);
}
</style>
