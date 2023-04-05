
<template>

    <div class="process-header">
        <h3>Pending</h3>
    </div>
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
</script>
