<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark theme-navbar-primary fixed-top">
        <div class="container">
            <router-link class="navbar-brand fw-bold" to="/">{{ $t("site.label") }}</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a href="#hero" class="nav-link" to="/">{{ $t('navbar.links.home') }}</a>
                    </li>
                    <li class="nav-item">
                        <a href="#investments" class="nav-link" to="/projects">{{ $t('navbar.links.investments') }}</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link" to="/about">{{ $t('navbar.links.about') }}</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link" to="/contact">{{ $t('navbar.links.contact') }}</a>
                    </li>
                    <li class="nav-item d-none">
                        <button :class="buttonClass" @click="toggleTheme">
                            <font-awesome-icon :icon="icon" />
                            {{ isDarkMode ? '' : '' }}
                        </button>
                    </li>
                    <li class="nav-item d-none">
                        <button @click="toggleLanguage" class="btn btn-icon btn-warning mx-1">
                            <font-awesome-icon icon="language" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar-brand {
    font-family: "Cairo";
    font-weight: bolder !important;
    color: rgba(169, 247, 227, 0.795) !important;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
}
</style>

<script setup>
import { ref, computed } from 'vue';

const isDarkMode = ref(localStorage.getItem('theme') === 'dark');

// Toggle dark mode and update local storage
const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.setAttribute('data-bs-theme', isDarkMode.value ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
};

// Compute button class dynamically
const buttonClass = computed(() => isDarkMode.value ? 'btn btn-icon' : 'btn btn-icon');

// Compute icon dynamically
const icon = computed(() => isDarkMode.value ? 'sun' : 'moon');

document.documentElement.setAttribute('data-bs-theme', isDarkMode.value ? 'dark' : 'light');


import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'ar' : 'en';

    // if (locale === "ar") {
    //     document.documentElement.setAttribute("lang", "ar");
    //     document.documentElement.setAttribute("dir", "rtl");
    // } else {
    //     document.documentElement.setAttribute("lang", "en");
    //     document.documentElement.setAttribute("dir", "ltr");
    // }


};
</script>
