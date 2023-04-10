<script setup></script>

<template>
  <div class="footer-grid">
    <div class="logo">
      <h1>Tradie logo</h1>
    </div>

    <div class="info">
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
  </div>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
}
.info-flex {
  display: flex;
  flex-direction: row;
}
.copyright {
  align-items: center;
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
}
</style>
