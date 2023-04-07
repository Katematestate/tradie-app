<script setup>
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
</script>

<template>
  <section class="help heading-container">
    <h1>How Find A Tradie Works</h1>
    <p>Paste Katie's Component Here.....</p>
  </section>
  <section class="sign-up">
    <div class="sign-up-heading">
      <h1>Sign Up</h1>
    </div>

    <div class="image-drop grid-work">
      <h1>Image Drop</h1>
    </div>

    <div class="input grid-work">
      <inputText />
    </div>

    <div class="tradie-key-words">
      <h1>kys</h1>
    </div>
  </section>

  <div class="client-signup">
    <div class="margin1 flex">
      <div class="links-div">
        <router-link to="/" class="spacing-large link">Go to Home</router-link>
      </div>
    </div>

    <div class="flex">
      <div class="flex-col">
        <div class="heading-container">
          <div class="spacing-large align-items-center">
            <h1>Sign Up</h1>
          </div>
        </div>

        <div class="text-box-container">
          <div class="spacing-standard">
            <p>First Name</p>
            <InputText
              v-model="Fname"
              class="input-class-box"
              placeholder="First Name"
            />
          </div>

          <div class="spacing-standard">
            <p>Last Name</p>
            <InputText
              v-model="Lname"
              class="input-class-box"
              placeholder="Last Name"
            />
          </div>

          <div class="spacing-standard">
            <p>Location</p>
            <InputText
              v-model="location"
              class="input-class-box align-items-center"
              placeholder="Location"
            />
          </div>

          <div class="spacing-standard">
            <p>Email</p>
            <InputText
              v-model="email"
              class="input-class-box"
              placeholder="Email"
            />
          </div>

          <div class="spacing-standard">
            <p>Password</p>
            <InputText
              v-model="password"
              class="input-class-box"
              placeholder="Password"
            />
          </div>

          <div class="spacing-standard">
            <p>Confirm Password</p>
            <InputText class="input-class-box" placeholder="Confirm Password" />
          </div>
        </div>

        <div class="checkbox-container">
          <div class="spacing-standard flex-row">
            <Checkbox class="" v-model="tos_concent" />
            <p>Do You Consent To The Terms Of Service</p>
          </div>
        </div>

        <div class="checkbox-container">
          <div class="spacing-standard flex-row">
            <Checkbox class="" v-model="email_concent" />
            <p>Do You Concent To Recieving Emails From Find A Tradie</p>
          </div>
        </div>

        <div class="checkbox-container">
          <div class="spacing-standard">
            <p>Insert Kelsie's Button Here</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1>CLIENT SIGN UP FOOTER AREA</h1>
</template>

<script>
export default {
  data() {
    // data itself starts
    return {
      // data variables starts
    }; // data variables end
  }, // data itself ends
  methods: {},
};
</script>

<style scoped lang="scss">
.grid-work {
  display: grid;
  grid-template-columns: (4, 1fr);
  gap: var(--spacing-standard);
}

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
