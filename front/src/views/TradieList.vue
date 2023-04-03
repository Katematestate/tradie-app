<script setup>
import TradieCard from '../components/TradieCard.vue';
import DevImg from '../assets/images/dev.jpg';

import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
</script>

<template>
    <section class="looking-for-tradie">
        <h1>Looking for a Tradie</h1>
        <form class="tradie-search">
            <div class="config">
                <InputText placeholder="Company" />
                <Dropdown placeholder="Region" />
            </div>
            <div class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText placeholder="Search" />
            </div>
            <button>Find a Tradie</button>
        </form>
    </section>

    <section class="qualified-tradies">
        <h1 class="text-center">All Quailified Tradies</h1>
        <div class="tradie-list">
            <TradieCard :company-image="DevImg" :company-logo="DevImg" :keywords="['painter', 'joiner']"
                company-title="Builder Crack"
                company-blurb="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, ex!" />
            <TradieCard :company-image="DevImg" :company-logo="DevImg" :keywords="['painter', 'joiner']"
                :active-quote="true" company-title="Electro Lights"
                company-blurb="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, ex!" />
            <TradieCard :company-image="DevImg" :company-logo="DevImg" :keywords="['painter', 'joiner']"
                company-title="Figgins Fences"
                company-blurb="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos inventore, placeat quis reprehenderit tenetur. Quis, necessitatibus ut. Minima repellendus ut, aliquam in laboriosam atque. Porro nihil perferendis sapiente temporibus!" />
        </div>
    </section>
    <button class="load-more">Load More</button>

    <section class="become-member">
        <h1>Become a Member</h1>
        <div class="sign-up">
            <button>Client Signup</button>
            <button>Tradie Signup</button>
        </div>
    </section>
</template>

<style scoped lang="scss">
.looking-for-tradie {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-primary);
    color: var(--color-primary-text);
    padding: var(--spacing-large);
}

.tradie-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-standard);
}

.load-more {
    display: block;
    margin: var(--spacing-standard) auto;
}

.become-member {
    color: #fff;
    padding: var(--spacing-large);
    background-image: url("../assets/images/dev.jpg");
    background-position: center;
    background-repeat: no-repeat;

    .sign-up {
        display: flex;
        gap: var(--spacing-standard);
    }
}
</style>