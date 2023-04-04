<template>
  <div class="landing">
    <div class="landing-flex">
      <h2>Looking for a tradie?</h2>
      <div class="button-flex">
        <h5>import button here</h5>
        <h5>import button here</h5>
      </div>
    </div>
    <div class="landing-flex">
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
          <h5>import icon</h5>
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
          <h5>import icon</h5>
          <p>
            View the list of qualified tradies who suite the job you need done.
          </p>
        </div>
        <div class="vl"></div>
      </div>

      <div class="rated-line-flex">
        <div class="works-info">
          <h4>3. Send a job request</h4>
          <h5>import icon</h5>
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
          <img src="../assets/images/dev.jpg" />
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
          <img src="../assets/images/dev.jpg" />
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
        <img src="../assets/images/dev.jpg" />
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

    <h5 class="view-button">import button here</h5>
  </div>
</template>

<style scoped lang="scss">
.landing-flex {
  display: flex;
  flex-direction: column;
}
.button-flex {
  display: flex;
  flex-direction: row;
}
.landing {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5%;
}
.works-info {
  display: flex;
  flex-direction: column;
}
.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);
  padding: 5%;
}
.how-it-works {
  padding: 3%;
}
.how-it-works h2 {
  text-align: center;
}
.rated-grid img {
  height: 20em;
  width: 15em;
}
.rated-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-standard);
  padding: 5%;
}
.top-rated-section {
  padding: 3%;
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
</style>

<script></script>
