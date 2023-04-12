<script setup>
import Textarea from "primevue/textarea";
import Button from "primevue/button";
</script>
<template>
  <div class="business-profile">
    <div class="business-header">
      <h1>Business Profile</h1>
    </div>

    <div class="business-info">
      <div class="info-section">
        <img class="info-section-logo" :src="businessData.companyLogo" />
        <h5>Import button here</h5>
        <h5>{{ businessData.businessName }}</h5>
        <input
          class="input-class"
          v-model="businessName"
          :placeholder="businessData.businessName"
        />
        <h5>Rating *****</h5>
        <h5>Current Password</h5>
        <input
          class="input-class"
          v-model="currentPassword"
          type="password"
          label="Current Password"
          placeholder="Current Password"
        />
      </div>
      <div class="info-section">
        <!-- <h5>First Name</h5>
        <input class="input-class" v-model="message" placeholder="First Name" />
        <h5>Last Name</h5>
        <input class="input-class" v-model="message" placeholder="Last Name" /> -->
        <h5>Mobile Number</h5>
        <input
          class="input-class"
          v-model="phone"
          placeholder="Business Phone Number"
        />
        <h5>Location</h5>
        <input
          class="input-class"
          v-model="location"
          placeholder="Business Location"
        />
        <h5>Website</h5>
        <input
          class="input-class"
          v-model="businessWebsite"
          placeholder="Business Website"
        />
        <h5>New Password</h5>
        <input
          class="input-class"
          v-model="newPassword"
          type="password"
          label="New Password"
          placeholder="New Password"
        />
      </div>
      <div class="info-section">
        <h4>Company Image</h4>
        <img class="info-section-company" :src="businessData.companyImage" />
        <h5>import image button</h5>
        <h5>Comfirm Password</h5>
        <input
          class="input-class"
          v-model="newConfirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
    </div>
  </div>

  <div class="description">
    <h4>Write a short description of your company</h4>
    <input
      class="input-class-box"
      v-model="businessDescription"
      label="Max 1000 words"
    />
    <div class="button-flex">
      <h5>edit button here</h5>
      <h5>save button here</h5>
    </div>
  </div>

  <div class="add-past-work">
    <h2>ADD PAST WORK</h2>
    <h4>
      Here is where you display your before and after photos for your client to
      see
    </h4>
    <div class="upload-section">
      <div class="upload-before">
        <h4>Before Photo</h4>
        <img :src="beforeImage" />
        <Textarea v-model="beforeImage" placeholder="before image link" />
      </div>

      <div class="upload-after">
        <h4>After Photo</h4>
        <img :src="afterImage" />
        <Textarea v-model="afterImage" placeholder="after image link" />
      </div>
    </div>
    <div class="testimonial">
      <h4>Testimonial</h4>
      <input
        class="input-class-box"
        v-model="testimonial"
        label="Max 1000 words"
      />
      <Button label="add past work" @click="addPastWork" />
    </div>
  </div>
</template>

<script>
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
      },
      businessName: "",
      businessDescription: "",
      businessWebsite: "",
      phone: "",
      location: "",
      currentPassword: "",
      newPassword: "",
      newConfirmPassword: "",
      testimonial: "",
      beforeImage: "",
      afterImage: "",
    };
  },
  methods: {
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
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}businesses/${this.userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(this.businessData),
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
      let beforeImage = this.beforeImage;
      let afterImage = this.afterImage;
      let testimonial = this.testimonial;
      let jwt = sessionStorage.getItem("jwt");
      if (!jwt) return console.log("No JWT found");
      if (beforeImage && afterImage && testimonial) {
        const newPastwork = {
          beforePhoto: beforeImage,
          afterPhoto: afterImage,
          testimonial,
        };

        let updatedBusiness = this.businessData;
        updatedBusiness.pastWorks.push(newPastwork);
        delete updatedBusiness.password;

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}businesses/${businessId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(this.businessData),
          }
        );

        const data = await response.json();

        // Clear the form fields
        this.beforeImage = "";
        this.afterImage = "";
        this.testimonial = "";
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
  },
};
</script>

<style scoped lang="scss">
.business-profile {
  display: flex;
  flex-direction: column;
  padding: 5%;
}
.button-flex {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.business-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);
}
.business-info h5 {
  margin: 0%;
}
.info-section {
  background-color: white;
  padding: 10%;
}
.business-header h1 {
  text-align: center;
}
.picture-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
  background-color: antiquewhite;
}
.input-class {
  border-radius: 5px;
  border: none;
  padding: 5%;
  background-color: #eeeeee;
  width: 100%;
}
.input-class-box {
  border-radius: 5px;
  border: none;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 5%;
  padding-bottom: 10%;
  background-color: #eeeeee;
  width: 100%;
}
.business-profile h4 {
  margin: 0%;
  padding: 1%;
}

.info-section-logo {
  height: 15em;
  width: 15em;
  border-radius: 5%;
}
.info-section-company {
  width: 100%;
  height: 20em;
  border-radius: 5%;
}
.info-section h5 {
  padding-top: 5%;
}
.description {
  margin-right: 3%;
  margin-left: 3%;
}
.job-review {
  display: flex;
  flex-flow: nowrap column;
  align-items: stretch;
  background-color: #eeeeee;
}
.review-photos {
  display: flex;
  flex-direction: row;
}
.review-photo img {
  width: 30%;
  height: 20em;
  border-radius: 5%;
}
.upload-section img {
  height: 20em;
  width: 30em;
  border-radius: 5%;
}
.upload-section {
  display: flex;
  flex-direction: row;
  gap: 5%;
  background-color: #eeeeee;
  justify-content: center;
}
.add-past-work {
  padding: 3%;
}
</style>
