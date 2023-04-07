<script setup>
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Button_Main from "../components/Button.vue";
</script>

<template>
  <!-- Heading Container -->
  <section class="flex-col align-items-center">
    <div class="flex-row">
      <h1>How</h1>
      <h1 class="orange-text">Find A Tradie</h1>
      <h1>Works</h1>
    </div>
    <p>Paste Katie's Component Here.....</p>
  </section>

  <!-- Start Of Sign Up -->
  <section class="sign-up">
    <div class="sign-up-heading">
      <h1>Sign Up</h1>
    </div>

    <!-- Image Drop -->

    <div class="image-drop grid-work">
      <div class="flex-col align-items-center">
        <h1>Image Drop 1</h1>
        <Button_Main label="Upload Logo" />
      </div>
      <div class="flex-col align-items-center">
        <h1>Image Drop 2</h1>
        <Button_Main label="Upload Logo" />
      </div>
    </div>

    <!-- Input Fields -->

    <div class="input grid-work">
      <div class="input-field-1">
        <h1>Input Field 1</h1>
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
      </div>
      <div class="input-field-2">
        <h1>Input Field 2</h1>

        <div class="text-box-container">
          <div class="spacing-standard">
            <p>Business Name</p>
            <InputText
              v-model="business_name"
              class="input-class-box"
              placeholder="Business Name"
            />
          </div>

          <div class="spacing-standard">
            <p>Business Phone Number</p>
            <InputText
              v-model="business_phone_number"
              class="input-class-box"
              placeholder="Business Phone Number"
            />
          </div>

          <div class="spacing-standard">
            <p>Business Website</p>
            <InputText
              v-model="business_website"
              class="input-class-box"
              placeholder="Business Website"
            />
          </div>

          <div class="spacing-standard">
            <p>Write A Short Description Of Your Business</p>
            <InputText
              v-model="business_bio"
              class="input-class-box"
              placeholder="Max 1000 Words"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Traide Key Words -->

    <div class="tradie-key-words flex-row">
      <div>
        <p>Certification Number</p>
        <InputText class="input-class-box" />
      </div>
      <div>
        <p>Trade Title</p>
        <InputText class="input-class-box" />
      </div>
      <div>
        <p></p>
        <Button_Main label="Add" class="disabled" />
      </div>
    </div>
  </section>

  <!-- Must Delete Below -->

  <p>Idek why but this is showing up red</p>
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
.orange-text {
  color: var(--color-brand);
  margin: auto 0;
}
.grid-work {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-standard);
  border: 3px solid magenta;
}
.sign-up-heading {
  display: flex;
  justify-content: center;
}

p {
  margin: 0;
  font-family: var(--font-secondary);
}
h1 {
  font-family: var(--font-main);
}

.text-box-container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
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
