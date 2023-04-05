<template>
  <div class="landing">
    <div class="client-landing">
      <h2>Looking for a tradie?</h2>
      <div class="button-flex">
        <h5>import button here</h5>
        <h5>import button here</h5>
      </div>
    </div>
    <div class="tradie-landing">
      <h2>Are you a tradie?</h2>
      <div class="button-flex">
        <h5>import button here</h5>
        <h5>import button here</h5>
      </div>
    </div>
  </div>

  <div class="how-it-works">
    <h2>How find a tradie works</h2>
    <div class="works-grid">
      <div class="rated-line-flex">
        <div class="works-info">
          <h4>1. Tell us what you need</h4>
          <div class="icons">
            <Icon icon="mdi:account-help" />
          </div>
          <p>
            Click the suggestions given for what tradie you need for the job or
            go straight to view all of the tradies on the app.
          </p>
        </div>
        <div class="vl"></div>
      </div>

      <div class="rated-line-flex">
        <div class="works-info">
          <h4>2.View tradies</h4>
          <div class="icons">
            <Icon icon="fa6-solid:person-digging" />
          </div>
          <p>
            View the list of qualified tradies who suite the job you need done.
          </p>
        </div>
        <div class="vl"></div>
      </div>

      <div class="rated-line-flex">
        <div class="works-info">
          <h4>3. Send a job request</h4>
          <div class="icons">
            <Icon icon="mdi:paper-edit" />
          </div>
          <p>Send information to the tradie about the job you need done.</p>
        </div>
      </div>
    </div>
    <div class="vl"></div>
  </div>

  <div class="top-rated-section">
    <div class="top-rated-header">
      <h2>Top rated tradies</h2>
      <h4>Discover more weekly</h4>
    </div>
    <div class="rated-grid">
      <div class="rated-line-flex">
        <div class="rated-info">
          <img src="../assets/images/tradie-1.png" />

          <h4>Bob's Fencer</h4>
          <p>
            ptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
            rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
            convallis convallis diam sit amet lacinia. Aliquam in elementum
            tellus.
          </p>
          <br />
          <h5>- Larry</h5>
        </div>
        <div class="vl"></div>
      </div>
      <div class="rated-line-flex">
        <div class="rated-info">
          <img src="../assets/images/tradie-2.png" />
          <h4>Builders Crack</h4>
          <p>
            ptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
            rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
            convallis convallis diam sit amet lacinia. Aliquam in elementum
            tellus.
          </p>
          <br />
          <h5>- Barry</h5>
        </div>
        <div class="vl"></div>
      </div>

      <div class="rated-info">
        <img src="../assets/images/tradie-3.png" />
        <h4>Electro Lights</h4>
        <p>
          ptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
          scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus
          nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
          convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        <br />
        <h5>- Harry</h5>
      </div>
    </div>

    <div class="view-button">
      <Button label="View button" type="button.cta" />
    </div>
  </div>

  <!-- <div class="member">
    <h2>Become a member</h2>
    <div class="member-button">
      <Button label="Client Signup" type="button.cta" />
      <Button label="Tradie  Signup" type="button.cta" />
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.landing {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30em;
}
.client-landing {
  background-image: url("../assets/images/tradie-landing.png");
  width: 100%;
}
.tradie-landing {
  background-color: var(--color-primary);
  width: 100%;
}
.button-flex {
  display: flex;
  flex-direction: row;
}
.landing {
  display: flex;
  flex-direction: row;
  padding-right: 5%;
  padding-left: 5%;
}
.works-info {
  display: flex;
  flex-direction: column;
}

// needs media query for grid
.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);
  padding-right: 5%;
  padding-left: 5%;
}
.works-info {
  padding: 2%;
}
.how-it-works {
  padding: 3%;
}
.how-it-works h2 {
  text-align: center;
}
.rated-grid img {
  border-radius: 5%;
  height: auto;
  width: 100%;
}
.rated-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);
  padding-right: 5%;
  padding-left: 5%;
}
.top-rated-section {
  padding: 3%;
  background-color: var(--color-shade);
}
.top-rated-header {
  text-align: center;
}
.rated-info h5 {
  text-align: right;
}
.rated-info {
  padding: 5%;
}
.vl {
  border-left: 2px solid black;
  height: 100%;
}
.rated-line-flex {
  display: flex;
  flex-direction: row;
}
.view-button {
  padding-left: 80%;
}
.icons svg {
  width: 6em;
  height: 6em;
}
.works-info {
  text-align: center;
}
.works-info p {
  text-align: left;
}
// .member-button {
//   display: flex;
//   flex-direction: row;
//   gap: 5%;
// }
// .member {
//   padding: 5%;
//   background-image: url(../assets/images/member-background.png);
//   color: var(--color-brand-text);
//   height: 15em;
// }
</style>

<script setup>
import { Icon } from "@iconify/vue";
import Button from "../components/Button.vue";
</script>
