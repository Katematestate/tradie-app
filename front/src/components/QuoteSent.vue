<script setup>
import { Icon } from '@iconify/vue';
import QuoteSentBoxes from './QuoteSentBoxes.vue';
</script>

<template>
    <div class="heading-wrapper">
     <div class="icon">
        <Icon icon="mdi:invoice-clock-outline" color="#222030" />
    </div>
        <div class="blue-div">
            <h3>Quote Sent</h3>
        </div>
    </div>
    <section class="content">
        <QuoteSentBoxes/>
    </section>
</template>

<style scoped lang="scss">
.heading-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
}
.blue-div{
    background-color:var(--color-primary);
    color: var(--color-brand-text);
    border-radius: 5px;
    padding: 0px;
    margin: 0 5px;
    flex: 1;
}
.blue-div h3{
    margin: 10px;
}

.icon{
    width: 4em;
    height: 4em;
    margin: 5px;
}
.icon svg{
    width: 100%;
    height: 100%;
}
.content{
    background-color: var(--color-shade);
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
}
</style>