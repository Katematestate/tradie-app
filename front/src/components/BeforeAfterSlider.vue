<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "@vue/reactivity";
import { ref } from "vue";

defineProps({ beforePhoto: String, afterPhoto: String, height: String });

const slider = ref(80);
const clipPath = computed(() => {
  return `clip-path: polygon(0% 0%, ${slider.value}% 0%, ${slider.value}% 100%, 0% 100%)`;
});
const barPos = computed(() => {
  return `left: ${slider.value}%`;
});
</script>

<template>
  <!-- :style="height ? `height: ${height}` : 'height: auto'" -->
  <div class="before-after">
    <img class="before-img" :style="clipPath" :src="beforePhoto" />
    <img class="after-img" :src="afterPhoto" />
    <div class="slide-bar" :style="barPos">
      <span
        class="slide-thumb flex align-items-center justify-content-center icon-size-3"
      >
        <Icon icon="carbon:drag-horizontal" />
      </span>
    </div>
    <input id="swiper" type="range" min="0" max="100" v-model="slider" />
  </div>
</template>

<style scoped lang="scss">
// added this img class to make the images not be different height
// im not sure of the best approach here - merlin
img {
  height: 300px;
}
.before-after {
  display: flex;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  isolation: isolate;
  border-radius: var(--border-radius-standard);
}
.before-after > :first-child {
  width: 100%;
}
.before-after > :nth-child(2) {
  position: absolute;
  inset: 0;
  width: 100%;
  z-index: -1;
}

.before-after .slide-bar {
  position: absolute;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--color-primary);
  transform: translateX(-50%);
}
.before-after .slide-bar .slide-thumb {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: calc(var(--spacing-small) / 2);
  transform: translate(-50%, -50%);
  border-radius: 50%;

  background-color: var(--color-brand);
  color: var(--color-brand-text);
}

.before-after input {
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  bottom: 0;
  grid-column: 1;
  grid-row: 2;
  height: 20px;
  left: -5px;
  right: -5px;
  z-index: 20;
}
.before-after input::-webkit-slider-thumb {
  /* background-color: rgba(100, 20, 20, 0.2); */
  height: 20000px;
  width: 20px;
  appearance: none;
  -webkit-appearance: none;
}
</style>
