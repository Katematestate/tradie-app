<script setup>
import Button from "primevue/button";
import Chip from "primevue/chip";
import { Icon } from '@iconify/vue';

defineProps({ keywords: Array, activeQuote: Boolean, companyTitle: String, companyBlurb: String, companyImage: String, companyLogo: String });

function truncateCompanyBlurb(blurb) {
    const charLimit = 320;
    if (blurb.length >= charLimit) {
        return blurb.slice(0, charLimit) + '...';
    }
    return blurb;
}
</script>

<template>
    <div class="tradie-card" :class="activeQuote ? 'active-quote' : ''">
        <div class="quote-icon" v-if="activeQuote">
            <Icon icon="ri:chat-quote-fill" />
        </div>
        <img class="company-image" :src="companyImage" alt="company image">
        <div class="card-header">
            <img class="company-logo" :src="companyLogo" alt="company logo">
            <span class="company-title">{{ companyTitle }}</span>
        </div>
        <p class="company-blurb">{{ truncateCompanyBlurb(companyBlurb) }}</p>
        <div class="tradie-keywords">
            <Chip :label="keyword" v-for="keyword in keywords" />
        </div>
        <div class="card-footer">
            <Button>Quote</Button>
            <Button>View more</Button>
        </div>
    </div>
</template>

<style scoped lang="scss">
p {
    margin: 0;
}

.tradie-card {
    display: flex;
    flex-direction: column;
    border: 2px solid var(--color-primary);
    padding: var(--spacing-standard);
    position: relative;
    border-radius: var(--border-radius-standard);
    gap: var(--spacing-small);

    &.active-quote {
        border: 2px solid var(--color-brand);
    }
}

.quote-icon {
    color: var(--color-brand);
    position: absolute;
    top: -33px;
    right: -5px;
    font-size: 40px;
}

.company-image {
    width: 100%;
    border-radius: var(--border-radius-standard);
}

.card-header {
    display: flex;
    gap: var(--spacing-small);

    .company-logo {
        flex: 0 0 auto;
        width: 30%;
    }

    .company-title {
        font-size: 1.5rem;
        font-family: var(--font-secondary);
        font-weight: 600;
    }
}

.tradie-keywords {
    display: flex;
    gap: var(--spacing-small);
    margin-top: auto;
}

.card-footer {
    display: flex;
    justify-content: space-between;
}
</style>
