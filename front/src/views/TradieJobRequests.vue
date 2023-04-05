
<template>
    <TradieJobProcess/>
    <div class="card">
        <DataView :value="products" paginator :rows="5">
            <template #list="slotProps">
                div.
            </template>
        </DataView>
    </div>
</template>

<script setup>
import DataView from 'primevue/dataview';
import TradieJobProcess from '../components/TradieJobProcess.vue';
</script>
