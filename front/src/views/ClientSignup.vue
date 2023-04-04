<script setup>

import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';

</script>



<template>

<h1>THIS IS HEADER </h1>

<div class="client-signup">
    <div class="margin1 flex">
        <div class="links-div">
        <router-link to='/' class="spacing-large">Go to Home</router-link>
    </div>
    </div>


    <div class="flex">
        <div class="flex-col">


            <div class="">
                <h1>Sign Up</h1>
            </div>


            <div class="spacing-standard">
                <p>First Name</p>
                <InputText class="input-class-box" placeholder ="First Name"/>
            </div>


            <div class="spacing-standard">
                <p>Last Name</p>
                <InputText class="input-class-box" placeholder ="Last Name"/>
            </div>


            <div class="spacing-standard">
                <p>Location</p>
                <InputText class="input-class-box aic" placeholder ="Location"/>
            </div>


            <div class="spacing-standard">
                <p>Email</p>
                <InputText class="input-class-box" placeholder ="Email"/>
            </div>


            <div class="spacing-standard">
                <p>Password</p>
                <InputText class="input-class-box" placeholder ="Password"/>
            </div>


            <div class="spacing-standard">
                <p>Confirm Password</p>
                <InputText class="input-class-box" placeholder ="Confirm Password"/>
            </div>


            <div class="spacing-standard flex-row">
                <Checkbox class="p-checkbox p-checkbox-box p-checkbox-icon" v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
                <p>Do You Consent</p>
            </div>


            <div class="spacing-standard flex-row">
                <Checkbox class="p-checkbox p-checkbox-box p-checkbox-icon" v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
                <p>Do You Consent</p>
            </div>

            <div class="spacing-standard">
                <p>Insert Kelsie's Button Here</p>
            </div>

        </div>
    </div>

    <div class="margin2 flex">
        <!-- <h1> Here is Margin 2</h1> -->
    </div>

</div>

    <h1>CLIENT SIGN UP FOOTER AREA</h1>
</template>
    
<style scoped lang="scss">
p{
    margin: 0;
}
h1{
    font-family: var(--font-main);
}

.client-signup{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: var(--spacing-standard);
    border: 3px solid magenta;
}
.input-class-box{
    border-radius: 5px;
    border: none;
    padding-top: 3%;
    padding-left: 3% ;
    padding-right: 5%;
    padding-bottom: 10%;
    background-color: #eeeeee;
    width: 100%;
}
.flex-row{
    display: flex;
    flex-direction: row;
    flex: 1;
}
.flex-col{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

}

.p-checkbox{
    height: 20px;
    width: 20px;
    border: 2px solid black;
}
.flex{
    display: flex;
    flex: 1;
    border: 3px solid cyan;
}
.spacing-small{
padding-bottom: var(--spacing-small);
}
.spacing-standard{
padding-bottom: var(--spacing-standard);
}
.spacing-large{
padding: var(--spacing-large);
}
</style>