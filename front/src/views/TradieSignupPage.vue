<script setup>
import InputText from "primevue/inputtext";
import Button from "../components/Button.vue";
import Chip from "primevue/chip";
import ImageUpload from "../components/ImageUpload.vue";
import Checkbox from "primevue/checkbox";
import TextArea from "primevue/textarea";
import AboutGrid from "../components/AboutGrid.vue";
import { ref } from "vue";

const aboutItems = ref([
  {
    heading: "You List Your Business",
    icon: "material-symbols:patient-list-rounded",
    instruction:
      "Following the steps below, you’ll set up a business page which will be public for clients to browse.",
  },
  {
    heading: "A Client Reaches Out",
    icon: "clarity:talk-bubbles-solid-badged",
    instruction:
      "A Client finds your business, check’s your reviews and proceeds to fill out a job request which we send to you.",
  },
  {
    heading: "Send a Quote",
    icon: "fa6-solid:handshake-simple",
    instruction:
      "You check out the job request and give a Quote for how much everything will cost. This gets sent to the client for them to Accept or Decline.",
  },
]);
</script>

<template>
  <div class="content-wrapper">
    <!-- Heading Container -->
    <section class="flex-col align-items-center">
      <h1 class="text-center">
        How <span class="text-brand">Find A Tradie</span> Works
      </h1>
      <AboutGrid :items="aboutItems" />
    </section>

    <!-- Start Of Sign Up -->
    <section class="sign-up">
      <h1 class="text-center">Sign Up</h1>

      <div class="grid-work">
        <div class="flex flex-column gap-3">
          <div class="input-group flex flex-column">
            <label for="input-company-logo">Company Logo</label>
            <InputText
              id="input-company-logo"
              v-model="companyLogo"
              class="input-class-box"
              placeholder="Logo Image URL"
              type="url"
            />
            <img
              width="250"
              v-if="companyLogo"
              :src="companyLogo"
              class="align-self-center"
            />
          </div>

          <div class="input-group">
            <label for="input-email">Email</label>
            <InputText
              id="input-email"
              v-model="email"
              class="input-class-box"
              placeholder="Email"
              type="email"
            />
          </div>

          <div class="input-group">
            <label for="input-password">Password</label>
            <InputText
              id="input-password"
              v-model="password"
              class="input-class-box"
              placeholder="Password"
              type="password"
            />
          </div>

          <div class="input-group">
            <label for="input-password-confirm">Confirm Password</label>
            <InputText
              id="input-password-confirm"
              class="input-class-box"
              placeholder="Confirm Password"
              v-model="confirmPassword"
              type="password"
            />
          </div>
          <div class="input-group">
            <label for="input-business-location">Business Location</label>
            <InputText
              id="input-business-location"
              class="input-class-box"
              placeholder="Business Location"
              v-model="businessLocation"
            />
          </div>
        </div>

        <div class="flex flex-column gap-3">
          <div class="input-group flex flex-column">
            <label for="input-company-image">Company Image</label>
            <InputText
              id="input-company-image"
              v-model="companyImage"
              class="input-class-box"
              placeholder="Company Image URL"
            />
            <img
              width="250"
              v-if="companyImage"
              :src="companyImage"
              class="align-self-center"
            />
          </div>

          <div class="input-group">
            <label for="input-business-name">Business Name</label>
            <InputText
              id="input-business-name"
              v-model="business_name"
              class="input-class-box"
              placeholder="Business Name"
            />
          </div>

          <div class="input-group">
            <label for="input-business-phone">Business Phone Number</label>
            <InputText
              id="input-business-phone"
              v-model="business_phone_number"
              class="input-class-box"
              placeholder="Business Phone Number"
              type="tel"
            />
          </div>

          <div class="input-group">
            <label for="input-business-website">Business Website</label>
            <InputText
              id="input-business-website"
              v-model="business_website"
              class="input-class-box"
              placeholder="Business Website"
              type="url"
            />
          </div>
          <div class="input-group">
            <label for="input-business-description">
              Write A Short Description Of Your Business
            </label>
            <TextArea
              id="input-business-description"
              v-model="business_bio"
              class="input-class-box bio-box"
              placeholder="Max 1000 Words"
            />
          </div>
        </div>
      </div>

      <!-- Traide Key Words -->
      <h1 class="text-center">What Trades Does Your Business Offer</h1>
      <div class="tradie-key-words grid-work">
        <div class="input-group">
          <label for="input-cert-number">Certification Number</label>
          <InputText
            id="input-cert-number"
            v-model="trade_certification"
            class="input-class-box"
            placeholder="1234 XXXX XXXX 5678"
            type="number"
          />
        </div>
        <div class="input-group">
          <label for="input-trade-title">Trade Title</label>
          <div class="flex gap-2">
            <InputText
              id="input-trade-title"
              v-model="trade_type"
              class="input-class-box"
              placeholder="Example: Carpenter"
            />
            <Button
              label="Add"
              class="button-container"
              @click="add_trade_type"
            />
          </div>
        </div>
      </div>

      <div class="chip-container flex gap-2 flex-wrap">
        <Chip
          :label="certs.trade_type"
          @click="removeThisChip(index)"
          v-for="(certs, index) in trade_certification_array"
          :key="index"
        />
      </div>

      <section class="terms-and-conditions flex flex-column gap-2">
        <div class="input-group checkbox">
          <Checkbox
            inputId="input-accept-tradie-terms"
            v-model="tos_consent"
            :binary="true"
          />
          <label for="input-accept-tradie-terms">
            Do you accept the Find A Tradie Terms of Service?
          </label>
        </div>
        <div class="input-group checkbox">
          <Checkbox
            inputId="input-accept-emails"
            v-model="email_consent"
            :binary="true"
          />
          <label for="input-accept-emails">
            Do you agree to receive emails from Find A Tradie?
          </label>
        </div>
      </section>

      <div class="flex justify-content-center">
        <Button @click="createNewBusiness" label="Create" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trade_certification_array: [],
      trade_certification: "",
      trade_type: "",
      business_bio: "",
      business_website: "",
      business_phone_number: "",
      business_name: "",
      password: "",
      confirmPassword: "",
      email: "",
      companyLogo: "",
      companyImage: "",
      businessLocation: "",
      // Fname: "",
      // Lname: "",
      tos_consent: false,
      email_consent: false,
    };
  },
  methods: {
    add_trade_type() {
      if (this.trade_certification === "" || this.trade_type === "")
        return alert("Please fill out all fields");
      this.trade_certification_array.push({
        trade_certification: this.trade_certification,
        trade_type: this.trade_type + " ✕",
      });
      this.trade_certification = "";
      this.trade_type = "";
    },
    removeThisChip(index) {
      this.trade_certification_array.splice(index, 1);
    },
    async createNewBusiness() {
      if (
        this.tos_consent &&
        this.email_consent &&
        this.business_bio &&
        this.business_website &&
        this.business_phone_number &&
        this.business_name &&
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.password === this.confirmPassword &&
        this.companyImage &&
        this.companyImage &&
        this.businessLocation &&
        this.trade_certification_array.length
      ) {
        const skills = this.trade_certification_array.map((skill) => {
          return skill.trade_type.slice(0, -2);
        });

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}businesses`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              companyLogo: this.companyLogo,
              companyImage: this.companyImage,
              businessLocation: this.businessLocation,
              email: this.email,
              password: this.password,
              businessName: this.business_name,
              businessPhoneNumber: this.business_phone_number,
              businessWebsite: this.business_website,
              businessDescription: this.business_bio,
              skills,
            }),
          }
        );
        const data = await response.json();
        console.log(data);

        if (data.token && data.businessId) {
          sessionStorage.setItem("jwt", data.token);
          sessionStorage.setItem("userId", data.businessId);
          sessionStorage.setItem("userType", "tradie");
          const event = new Event("sessionStorageUpdated");
          window.dispatchEvent(event);
          this.$router.push({ name: "TradieAccountPage" });
        }
      } else {
        console.log("incorrect inputs try again");
      }
    },
  },
  components: { ImageUpload, AboutGrid },
};
</script>

<style scoped lang="scss">
.content-wrapper {
  padding: var(--spacing-large);
  max-width: 1440px;
  margin: 0 auto;
}
.grid-work {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-standard);

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
}
.chip-container {
  margin-top: var(--spacing-small);
}

.terms-and-conditions {
  margin: var(--spacing-standard) 0;
}
</style>
