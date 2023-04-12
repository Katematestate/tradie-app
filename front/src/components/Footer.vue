<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="footer-grid">
    <div class="logo flex justify-content-center align-items-center line-after">
      <img src="../assets/images/tradie-logo-footer.svg" alt="App name" />
    </div>

    <div class="info line">
      <div class="info-flex">
        <div class="info-left">
          <h5>FAQ'S</h5>
          <h5>Health and Safety</h5>
          <h5>Internet Safety</h5>
        </div>

        <div class="info-right">
          <h5>Customer Review</h5>
          <h5>Contact Details</h5>
          <h5>About</h5>
        </div>
      </div>

      <div class="copyright">
        <h5>@FindATradieLTD2023</h5>
      </div>
    </div>

    <div
      class="social flex justify-content-center align-items-center gap-1 line-right"
    >
      <Icon class="social-icon" icon="ri:facebook-box-fill" />
      <Icon class="social-icon" icon="ph:instagram-logo-fill" />
      <Icon class="social-icon" icon="mdi:linkedin" />
      <Icon class="social-icon" icon="ant-design:twitter-square-filled" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-grid {
  background-color: var(--color-primary);
  color: white;
}
.line {
  border-left: 2px solid white;

  @media (max-width: 425px) {
    border-left: 0;
    border-bottom: 2px solid white;
  }
}
.line-right {
  border-left: 2px solid white;

  @media (max-width: 425px) {
    border-left: 0;
  }
}

.line-after {
  @media (max-width: 425px) {
    border-bottom: 2px solid white;
  }
}
.info-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
}
.footer-grid {
  padding: 3%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
}
.footer-grid h5 {
  margin: 1em;
}
.social-icon {
  color: white;
  height: 40px;
  width: 40px;
}
.info {
  justify-content: center;
}
.copyright {
  text-align: center;
}
</style>
