<template>
  <div class="business-profile">
    <div class="business-header">
      <h1>Business Profile</h1>
    </div>

    <div class="business-info">
      <div class="info-section">
        <img class="info-section-logo" src="../assets/images/dev.jpg" />
        <h5>Import button here</h5>
        <h5>Company name</h5>
        <input class="input-class" v-model="message" label="Company Name" />
        <h5>Rating *****</h5>
        <h5>Current Password</h5>
        <input class="input-class" v-model="message" label="Current Password" />
      </div>
      <div class="info-section">
        <h5>First Name</h5>
        <input class="input-class" v-model="message" label="First Name" />
        <h5>Last Name</h5>
        <input class="input-class" v-model="message" label="Last Name" />
        <h5>Mobile Number</h5>
        <input class="input-class" v-model="message" label="Mobile Number" />
        <h5>Location</h5>
        <input class="input-class" v-model="message" label="Location" />
        <h5>Website</h5>
        <input class="input-class" v-model="message" label="Website" />
        <h5>New Password</h5>
        <input class="input-class" v-model="message" label="New Password" />
      </div>
      <div class="info-section">
        <h4>Company Image</h4>
        <img class="info-section-company" src="../assets/images/dev.jpg" />
        <h5>import image button</h5>
        <h5>Comfirm Password</h5>
        <input class="input-class" v-model="message" label="Comfirm Password" />
      </div>
    </div>
  </div>

  <div class="description">
    <h4>Write a short description of your company</h4>
    <input class="input-class-box" v-model="message" label="Max 1000 words" />
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
        <img src="../assets/images/dev.jpg" />
        <h5>upload button</h5>
      </div>

      <div class="upload-after">
        <h4>After Photo</h4>
        <img src="../assets/images/dev.jpg" />
        <h5>upload button</h5>
      </div>
    </div>
    <div class="testimonial">
      <h4>Testimonial</h4>
      <input class="input-class-box" v-model="message" label="Max 1000 words" />
      <h5>import button</h5>
    </div>
  </div>
</template>
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
  width: 100%;
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
<script setup></script>
