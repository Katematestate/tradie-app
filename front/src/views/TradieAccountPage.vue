<script setup>
// import CarouselAccountPage from '../components/CarouselAccountPage.vue';
</script>
<template>
<div class="business-profile">

 <div class="business-header">
             <h1> Business Profile</h1>
  </div>

    <div class="business-info">

            <div class="info-section">  
                <h5>Import image here</h5>
                <h5>Import button here</h5>
                <h5>Company name</h5>
                <input class="input-class" v-model="message" placeholder="Company Name" />
                <h5>Rating *****</h5>
                <h5>Current Password</h5>
              <input class="input-class" v-model="message" placeholder="Current Password" />
            </div>
            <div class="info-section">  
                <h5>First Name</h5>
                <input class="input-class" v-model="message" placeholder="First Name" />
                <h5>Last Name</h5>
                <input class="input-class" v-model="message" placeholder="Last Name" />
                <h5>Mobile Number</h5>
                <input class="input-class" v-model="message" placeholder="Mobile Number" />
                <h5>Location</h5>
                <input class="input-class" v-model="message" placeholder="Location" />
                <h5>Website</h5>
                <input class="input-class" v-model="message" placeholder="Website" />
                <h5>New Password</h5>
                <input class="input-class" v-model="message" placeholder="New Password" />
            </div>
            <div class="info-section">  
                <h4>Company Image</h4>
                <h5>import image here</h5>
                <h5>import image button</h5>
           </div>

    </div>

    <div class="description">
        <h2>Write a short description of your company</h2>
        <h5> place input box here</h5>
        <div class="button-flex">
        <h5> edit button here</h5>
        <h5> save button here</h5>
    </div>

    <div class="add-past-work">
        <h1>ADD PAST WORK</h1>
        <h4>Here is where you display your before and after photos for your client to see</h4>
        <div>
            <!-- <CarouselAccountPage/> -->
            </div>
        </div>
   
    </div>


</div>

</template>
<style scoped>
.business-profile {
    display: flex;
    flex-direction: column;
   padding: 5%;
}
.button-flex{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.business-info {
    display: flex;
    flex-direction: row;
    justify-content:space-evenly ;
    gap: 10px;
}
.business-info h5 {
    margin: 0%;
}
.info-section {
    background-color:  white;
    padding: 8%;
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
    background-color: #EEEEEE;
    width: 40px;
}


</style>
<script>

</script>