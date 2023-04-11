<script setup>
import InputText from "primevue/inputtext";
import Button_Main from "../components/Button.vue";
import Chip from "primevue/chip";
import ImageUpload from "../components/ImageUpload.vue";
import Checkbox from "primevue/checkbox";
</script>

<template>
  <div>
    <!-- Heading Container -->
    <section class="flex-col align-items-center">
      <div class="flex-row">
        <h1>How</h1>
        <h1 class="orange-text">Find A Tradie</h1>
        <h1>Works</h1>
      </div>
    </section>

    <!-- Start Of Sign Up -->
    <section class="sign-up">
      <div class="sign-up-heading">
        <h1>Sign Up</h1>
      </div>

      <!-- Image Drop -->

      <div class="image-drop grid-work">
        <div class="flex-col align-items-center spacing-large">
          <ImageUpload />
          <Button_Main label="Upload Logo" />
        </div>

        <div class="flex-col align-items-center spacing-large">
          <ImageUpload />
          <Button_Main label="Upload Image" />
        </div>
      </div>

      <!-- Input Fields -->

      <!-- Start of Input Field 1 -->

      <div class="input grid-work">
        <div class="input-field-1">
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
              <InputText
                class="input-class-box"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </div>

        <!-- End of Input Field 1 -->

        <!-- Start Of Input Field 2 -->

        <div class="input-field-2">
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
                class="input-class-box bio-box"
                placeholder="Max 1000 Words"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- End of Input Field 2 -->

      <!-- Traide Key Words -->
      <div class="spacing-large">
        <div class="flex-col align-items-center">
          <h1>What Trades Does Your Business Offer</h1>
        </div>
        <div class="tradie-key-words grid-work">
          <div class="flex-col text-box-container">
            <p>Certification Number</p>
            <InputText
              v-model="trade_certification"
              class="input-class-box"
              placeholder="1234 XXXX XXXX 5678"
            />
          </div>
          <div class="flex-col text-box-container">
            <p>Trade Title</p>
            <div class="flex-row text-box-container">
              <InputText
                v-model="trade_type"
                class="input-class-box"
                placeholder="Example: Carpenter"
              />
              <Button_Main
                label="Add"
                class="button-container"
                @click="add_trade_type"
              />
            </div>
          </div>
        </div>
        <div class="flex-row chip-spacing chip-container flex-wrap">
          <div
            v-for="(sweaty_ball_sack, index) in trade_certification_array"
            :key="index"
            class="chip-spacing"
          >
            <Chip :label="sweaty_ball_sack.trade_type" removable="" />
          </div>
        </div>
      </div>
      <div class="flex-row checkbox-container spacing-small">
        <Checkbox v-model="TermsOfService" />
        <p class="checkbox-spacing">
          Do You Accept The Find A Tradie Terms Of Service
        </p>
      </div>
      <div class="flex-row checkbox-container">
        <Checkbox />
        <p class="checkbox-spacing spacing-small">
          Do You Accept To Revice Emails From Find A Tradie
        </p>
      </div>
      <div class="flex-row checkbox-container spacing-large">
        <Button_Main label="Create" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    // data itself starts
    return {
      trade_certification_array: [],
      trade_certification: "",
      trade_type: "",
      business_bio: "",
      business_website: "",
      business_phone_number: "",
      business_name: "",
      password: "",
      email: "",
      Fname: "",
      Lname: "",
      // data variables starts
    }; // data variables end
  },
  methods: {
    // methods starts
    add_trade_type() {
      this.trade_certification_array.push({
        trade_certification: this.trade_certification,
        trade_type: this.trade_type,
      });
      this.trade_certification = "";
      this.trade_type = "";
    },
  },
  components: { ImageUpload },
};
</script>

<style scoped lang="scss">
.button-container {
  margin: 0 auto;
}
.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.orange-text {
  color: var(--color-brand);
  margin: auto 0;
}
.grid-work {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-standard);
}
.grid-work-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);
}
.sign-up-heading {
  display: flex;
  justify-content: center;
}
.bio-box {
  padding-bottom: 19%;
}

p {
  margin: 0;
  font-family: var(--font-secondary);
}
h1 {
  font-family: var(--font-main);
}
.disabled {
  color: lightgrey;
  background-color: grey;
  border-color: grey;
  margin-left: var(--spacing-standard);
}
.disabled:hover {
  background-color: grey;
  border-color: grey;
  color: lightgray;
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
.flex-wrap {
  flex-wrap: wrap;
}
.flex-col {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.chip-spacing {
  margin: var(--spacing-standard);
}
.checkbox-spacing {
  margin: 0 var(--spacing-standard);
}
.chip-container {
  margin: 0 8%;
}
.spacing-small {
  padding-bottom: var(--spacing-small);
}
.spacing-standard {
  padding-bottom: var(--spacing-standard);
}
.spacing-large {
  padding: var(--spacing-large);
}
</style>
