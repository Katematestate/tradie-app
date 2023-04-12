<script setup>
import { Icon } from "@iconify/vue";
import Button from "../components/Button.vue";
</script>

<template>
  <div class="landing">
    <img class="back-splash" src="../assets/images/tradie-landing.png" />
    <div class="solid-background"></div>
    <div class="client-landing">
      <h1>Looking for a tradie?</h1>
      <div class="button-flex gap-4">
        <router-link to="/client/signup">
          <Button label="Client Signup" />
        </router-link>
        <router-link to="/tradie/list">
          <Button label="View Tradie List" type="secondary" />
        </router-link>
      </div>
    </div>
    <div class="tradie-landing flex flex-column">
      <h1>Are you a tradie?</h1>
      <div>
        <router-link to="/tradie/signup">
          <Button label="Tradie Signup" />
        </router-link>
      </div>
    </div>
  </div>

  <div class="how-it-works flex flex-column">
    <h1>How find a tradie works</h1>
    <div class="works-grid">
      <div class="rated-line flex">
        <div class="works-info line-after">
          <h4>1. Tell us what you need</h4>
          <div class="icons">
            <Icon icon="mdi:account-help" />
          </div>
          <p>
            Click the suggestions given for what tradie you need for the job or
            go straight to view all of the tradies on the app.
          </p>
        </div>
      </div>

      <div class="rated-line flex">
        <div class="works-info line">
          <h4>2.View tradies</h4>
          <div class="icons">
            <Icon icon="fa6-solid:person-digging" />
          </div>
          <p>
            View the list of qualified tradies who suite the job you need done.
          </p>
        </div>
      </div>

      <div class="rated-line flex">
        <div class="works-info line">
          <h4>3. Send a job request</h4>
          <div class="icons">
            <Icon icon="mdi:paper-edit" />
          </div>
          <p>Send information to the tradie about the job you need done.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="top-rated-section">
    <div class="top-rated-header">
      <h1>Top rated tradies</h1>
      <h4>Discover more weekly</h4>
    </div>
    <div class="rated-grid">
      <div class="rated-line flex">
        <div class="rated-info line-after">
          <img src="../assets/images/tradie-1.png" />

          <h4>Bob's Fencer</h4>
          <p>
            Great service. This is the second time I have contacted this company
            for jobs and both times have been hassle free with excellent
            tradespeople.
          </p>
          <br />
          <h5>- Larry</h5>
        </div>
      </div>
      <div class="rated-line flex">
        <div class="rated-info line">
          <img src="../assets/images/tradie-2.png" />
          <h4>Builders Crack</h4>
          <p>
            It took months, the weather was appalling but the outcome was
            pleasing. We're both happy with Builders Crack. The Tradie was very
            professional and personable, we're happy with the job, we would
            definitely recommend this company.
          </p>
          <br />
          <h5>- Barry</h5>
        </div>
      </div>

      <div class="rated-info line">
        <img src="../assets/images/tradie-3.png" />
        <h4>Electro Lights</h4>
        <p>
          Electro Lights is amazing, they are so professional. We had to get a
          new lighting system in a hurry . . . nothing was too much trouble and
          very good prices. Heather and her team are such lovely people and made
          a stressful time so much easier. Thank you very much Electro Lights
          will definitely be using you again.
        </p>
        <br />
        <h5>- Harry</h5>
      </div>
    </div>

    <div class="view-button flex justify-content-end">
      <router-link to="/tradie/list">
        <Button label="View Tradies" />
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
h1 {
  margin: 0 0 var(--spacing-large);
}
.landing {
  display: grid;
  grid-template-columns: 1fr 1fr;
  isolation: isolate;
  position: relative;
  width: 100%;
  height: 30em;
  overflow: hidden;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
.back-splash {
  position: absolute;
  height: 65%;
  z-index: -2;
  bottom: 0;

  @media (max-width: 600px) {
    display: none;
  }
}
.solid-background {
  $offset: 50vw;
  position: absolute;
  inset: 0;
  background-color: var(--color-primary);
  background: linear-gradient(
    50deg,
    transparent $offset,
    var(--color-primary) calc($offset + 1px)
  );
  z-index: -1;

  @media (max-width: 1460px) {
    $offset: 60vw;
    background: linear-gradient(
      70deg,
      transparent $offset,
      var(--color-primary) calc($offset + 1px)
    );
  }

  @media (max-width: 600px) {
    background: var(--color-primary);
  }
}
.client-landing {
  align-items: flex-end;
  width: 100%;
  padding: 32px 64px;

  @media (max-width: 1090px) {
    padding: 32px;
  }
  @media (max-width: 600px) {
    text-align: center;
    color: var(--color-primary-text);
    padding: var(--spacing-standard);
  }
}
.tradie-landing {
  align-items: flex-end;
  color: var(--color-primary-text);
  width: 100%;
  padding: 32px 64px;

  @media (max-width: 1090px) {
    padding: 32px;
  }
  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    padding: var(--spacing-standard);
  }
}
.button-flex {
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.how-it-works {
  text-align: center;
  padding-top: var(--spacing-large);

  h1 {
    margin: 0;
  }
}
.works-info {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-small);

  h4 {
    text-align: center;
  }
}
.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);
  padding-right: var(--spacing-standard);
  padding-left: var(--spacing-standard);
  margin: var(--spacing-large);

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
}

.line {
  border-left: 2px solid black;

  @media (max-width: 425px) {
    border-left: 0;
    border-bottom: 2px solid black;
  }
}

.line-after {
  @media (max-width: 425px) {
    border-bottom: 2px solid black;
  }
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

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    height: 0%;
  }
}
.top-rated-section {
  padding: 3%;
  background-color: var(--color-shade);
}
.top-rated-header {
  text-align: center;
}

h4 {
  margin: 0 0 var(--spacing-large);
}
.rated-info h5 {
  text-align: right;
  margin: 0;
}
.rated-info {
  padding: 5%;
  margin-bottom: var(--spacing-standard);
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
</style>
