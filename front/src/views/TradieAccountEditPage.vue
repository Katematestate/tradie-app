<script setup>
import TextArea from "primevue/textarea";
import InputText from "primevue/inputtext";
import Button from "../components/Button.vue";
</script>
<template>
  <div class="content-wrapper">
    <section class="business-profile">
      <h1 class="text-center">Business Profile</h1>
      <div class="business-info">
        <div class="info-section">
          <div class="flex flex-column">
            <span class="h4 text-center">Company Logo</span>
            <img class="info-section-logo" :src="businessData.companyLogo" />
            <InputText v-model="logoURL" placeholder="logo URL" />
            <Button
              @click="updateLogoURL"
              class="button-small"
              label="Update Logo"
            />
          </div>
        </div>
        <div class="info-section">
          <div class="input-group">
            <label for="input-business-name">Company Name</label>
            <InputText
              id="input-business-name"
              v-model="businessName"
              placeholder="Business Name"
            />
          </div>
          <div class="input-group">
            <label for="input-phone-number">Phone Number</label>
            <InputText
              id="input-phone-number"
              v-model="phone"
              placeholder="Business Phone Number"
              type="tel"
            />
          </div>
          <div class="input-group">
            <label for="input-location">Location</label>
            <InputText
              id="input-location"
              v-model="location"
              placeholder="Business Location"
            />
          </div>
          <div class="input-group">
            <label for="input-website">Website</label>
            <InputText
              id="input-website"
              v-model="businessWebsite"
              placeholder="Business Website"
              type="url"
            />
          </div>
          <div class="input-group">
            <label>Write a short description of your company</label>
            <TextArea
              v-model="businessDescription"
              placeholder="Max 1000 words"
            />
          </div>
        </div>
        <div class="info-section">
          <div class="flex flex-column">
            <span class="h4 text-center">Company Image</span>
            <img
              class="info-section-company"
              :src="businessData.companyImage"
            />
            <InputText
              v-model="companyImageURL"
              placeholder="company image URL"
            />
            <Button
              @click="updateImageURL"
              class="button-small"
              label="Update Image"
            />
          </div>
        </div>
      </div>
    </section>
    <h2 class="text-center">Change Password</h2>
    <section class="change-password">
      <div class="input-group">
        <label for="input-new-password">New Password</label>
        <InputText
          id="input-new-password"
          v-model="newPassword"
          label="New Password"
          placeholder="New Password"
          type="password"
        />
      </div>
      <div class="input-group">
        <label for="input-new-password-confirm">Confirm Password</label>
        <InputText
          id="input-new-password-confirm"
          v-model="newConfirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <Button
        class="button-small"
        id="save-password-button"
        label="Update Password"
        @click="updatePassword"
      />
    </section>

    <h2 class="text-center">ADD PAST WORK</h2>
    <section class="add-past-work">
      <p>
        Add one or more example of work you have done in the past, this is
        viewable by potential clients as they browse the site.
      </p>
      <div class="upload-section">
        <Button
          id="add-past-work-button"
          label="Add Examples of Work"
          @click="addNewPastWork()"
        />
        <div
          class="flex gap-3 align-items-start"
          v-for="(work, index) in pastWorks"
        >
          <div class="input-group upload-before flex-1">
            <label :for="'input-before-photo' + index">Before Photo</label>
            <InputText
              :id="'input-before-photo' + index"
              v-model="work.beforePhoto"
              placeholder="before image link"
              type="url"
            />
            <img class="align-self-center" :src="work.beforePhoto" />
          </div>
          <div class="input-group upload-after flex-1">
            <label :for="'input-after-image' + index">After Photo</label>
            <InputText
              :id="'input-after-image' + index"
              v-model="work.afterPhoto"
              placeholder="after image link"
              type="url"
            />
            <img class="align-self-center" :src="work.afterPhoto" />
          </div>
          <Button
            style="margin-top: 17px"
            label="Remove Example"
            type="secondary"
            @click="removePastWork($event, index)"
          />
        </div>
      </div>
    </section>

    <Button
      id="save-profile-button"
      class="button-small"
      label="Save Profile"
      @click="updateProfile"
    />
  </div>
</template>

<script>
import { useConfirm } from "primevue/useconfirm";
export default {
  data() {
    return {
      userId: sessionStorage.getItem("userId"),
      // placeholder images because otherwise stupid console error because hasn't fetched the images yet from profile otherwise.
      businessData: {
        companyImage:
          "https://cdn.intelligencebank.com/au/share/NOrD/1VN0z/4Xkw0/preset=pB6BA/T125AI117_chai_brewed_loose_leaf",
        companyLogo:
          "https://cdn.intelligencebank.com/au/share/NOrD/1VN0z/4Xkw0/preset=pB6BA/T125AI117_chai_brewed_loose_leaf",
        pastWorks: [],
      },
      businessName: "",
      businessDescription: "",
      businessWebsite: "",
      phone: "",
      location: "",
      newPassword: "",
      newConfirmPassword: "",
      testimonial: "",
      beforeImage: "",
      afterImage: "",
      logoURL: "",
      companyImageURL: "",
      pastWorks: [],
      confirm: useConfirm(),
    };
  },
  methods: {
    updateLogoURL() {
      this.companyLogo = this.logoURL;
      this.logoURL = "";
    },
    updateImageURL() {
      this.companyImage = this.companyImageURL;
      this.companyImageURL = "";
    },
    async updatePassword() {
      if (!this.newPassword.length) {
        return console.log("No password entered");
      }
      if (this.newPassword !== this.newConfirmPassword) {
        return console.log("Passwords do not match");
      }
      if (!this.userId) {
        return console.log("No userId found");
      }
      const jwt = sessionStorage.getItem("jwt");
      if (!jwt) {
        return console.log("No JWT found");
      }
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}passwords/${
            this.businessData.password
          }`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({ password: this.newPassword }),
          }
        );

        const data = await response.json();

        this.newPassword = "";
        this.newConfirmPassword = "";
        if (!data.message) window.alert("successfully changed password");
        console.log(data);
        // Handle successful password update
      } catch (error) {
        console.log(error);
        // Handle error updating password
      }
    },
    async updateProfile() {
      this.businessData.businessName = this.businessName;
      this.businessData.businessDescription = this.businessDescription;
      this.businessWebsite = this.businessWebsite;
      this.businessData.businessPhoneNumber = this.phone;
      this.businessData.businessLocation = this.location;
      this.businessData.companyImage = this.companyImage;
      this.businessData.companyLogo = this.companyLogo;
      this.businessData.pastWorks = this.pastWorks;

      await this.updateBusiness();
      this.$router.push({ name: "TradieAccountPage" });
    },
    addNewPastWork() {
      this.pastWorks.push({ beforePhoto: "", afterPhoto: "" });
    },
    removePastWork(event, index) {
      this.confirm.require({
        target: event.currentTarget,
        message: "Are you sure you want to remove this?",
        rejectClass: "p-button-secondary p-button-outlined",
        accept: () => {
          this.pastWorks.splice(index, 1);
        },
        reject: () => {},
      });
    },
    async fetchMyBusiness() {
      try {
        const jwt = sessionStorage.getItem("jwt");
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}businesses/${this.userId}`,
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const business = await response.json();

        this.businessData = business;
      } catch (error) {
        console.log("Error fetching business:", error);
      }
    },

    async updateBusiness() {
      try {
        const jwt = sessionStorage.getItem("jwt");
        let noPasswordBusinessData = this.businessData;
        delete noPasswordBusinessData.password;
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}businesses/${this.userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(noPasswordBusinessData),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const business = await response.json();

        this.businessData = business;
      } catch (error) {
        console.log("Error updating business:", error);
      }
    },
    async addPastWork() {
      const businessId = this.userId;

      let jwt = sessionStorage.getItem("jwt");
      if (!jwt) return console.log("No JWT found");

      if (this.pastWorks.length > 0) {
        const businessDataCopy = { ...this.businessData };
        businessDataCopy.pastWorks = [
          ...businessDataCopy.pastWorks,
          ...this.pastWorks,
        ]; // join two arrays

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}businesses/${businessId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(businessDataCopy),
          }
        );
        //   delete updatedBusiness.password; // password should never be stored on an object, this is a security risk. It can be seen by anyone in the app memory and network traffic. FYI
        this.pastWorks = []; // clear past works fields

        if (response.status === 200) {
          // All good, pop a toast? Notify the user something happened
        } else {
          // Something dead, error handle? Toast maybe?
        }
      }
    },
  },
  async mounted() {
    try {
      const jwt = sessionStorage.getItem("jwt");
      if (!jwt) {
        throw new Error("No JWT found");
      }
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}businesses`,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      this.data = await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  async created() {
    await this.fetchMyBusiness();
    this.businessName = this.businessData.businessName;
    this.businessDescription = this.businessData.businessDescription;
    this.businessWebsite = this.businessData.businessWebsite;
    this.phone = this.businessData.businessPhoneNumber;
    this.location = this.businessData.businessLocation;
    this.companyImage = this.businessData.companyImage;
    this.companyLogo = this.businessData.companyLogo;
    this.pastWorks = this.businessData.pastWorks;
  },
};
</script>

<style scoped lang="scss">
.content-wrapper {
  padding: var(--spacing-large);
}

h2 {
  margin: var(--spacing-large) auto;
}

img {
  border-radius: var(--border-radius-standard);
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}

.button-small {
  width: 250px;
  margin: 0 auto;
}

section {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}
section + section {
  margin-top: var(--spacing-large);
}

.business-info,
.change-password {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
.change-password {
  grid-template-columns: 1fr 1fr auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
.add-past-work {
  background-color: var(--color-shade);
  padding: var(--spacing-standard);

  input {
    background-color: var(--color-page);
  }

  @media (max-width: 768px) {
    .upload-section {
      display: flex;
      flex-flow: nowrap column;
      gap: var(--spacing-large);

      > button {
        margin: 0 auto;
        width: 250px;
      }

      > div {
        flex-direction: column;

        .input-group {
          width: 100%;
        }

        button {
          margin-top: 0 !important;
        }
      }
    }
  }
}
.info-section {
  display: flex;
  flex-flow: nowrap column;
  gap: var(--spacing-standard);
}

#save-password-button {
  margin-top: auto;
}
#add-past-work-button {
  margin-bottom: var(--spacing-standard);
}
#save-profile-button {
  display: block;
  margin: var(--spacing-large) auto;
}
</style>
