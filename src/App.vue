<template>
  <div id="app">
    <NavBar />
    <HeroSection />
    <InvestsSection />
    <StatsSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />


    <!-- Main Content Area -->
    <!-- <main class="flex-grow-1"> -->
    <!-- <router-view /> -->
    <!-- </main> -->

  </div>
</template>


<script setup>
import ar from "./locales/ar.json";

document.title = ar.site.label;
</script>

<style>
html {
  scroll-behavior: smooth;
}

body.dark-mode {
  background-color: #121212;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Tajawal', sans-serif;
}


main {
  flex-grow: 1;
}
</style>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from "./components/AboutSection.vue";
import FooterSection from './components/FooterSection.vue'
import InvestsSection from './components/InvestsSection.vue'
import ContactSection from './components/ContactSection.vue'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    FooterSection,
    ContactSection,
    InvestsSection
  }
}

</script>