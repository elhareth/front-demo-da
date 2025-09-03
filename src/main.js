import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/custom.scss'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap'
// import 'bootstrap-rtl'
import 'animate.css'
// import animate from 'animate.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import i18n from "./i18n"


AOS.init();

// app.use(router)
createApp(App).use(i18n).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

