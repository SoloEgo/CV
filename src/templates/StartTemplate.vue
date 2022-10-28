<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadingName from '../components/lightComponent/HeadingName.vue'
import { ref } from 'vue';
import '@/assets/styles/startTemplate.css'
let isOpen = ref(false)
const openMenu = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <header>
        <div class="menu-btn" @click="openMenu"><i class="bi bi-list"></i></div>
        <div class="header-nav" :class="isOpen ? 'active' : ''">
            <div class="close-btn" @click="openMenu"><i class="bi bi-x"></i></div>
            <nav>
                <RouterLink to="/" @click="openMenu"><i class="bi bi-house"></i> Home</RouterLink>
                <RouterLink to="/portfolio" @click="openMenu"><i class="bi bi-gear"></i> Portfolio</RouterLink>
            </nav>
            <div class="usefull_links">
                <a href="https://github.com/SoloEgo?tab=repositories" target="_blank"><i class="bi bi-github"></i>My
                    GitHub</a>
                <a href="Egor-Soloviev-CV.pdf" download class="download_link"><i
                        class="bi bi-file-earmark-pdf"></i>Download
                    CV</a>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#changeThemeModal">
                    <i class="bi bi-palette"></i> Change theme
                </button>
            </div>
        </div>
        <div class="header-content">
            <div class="logo-img"><img alt="Profile photo" class="logo" src="@/assets/solovev_ea.jpg" /></div>
            <div class="wrapper">
                <HeadingName msg="Soloviev Egor Andreevich" />
            </div>
        </div>
    </header>
    <RouterView />
</template>

<style scoped src="@/assets/styles/startTemplate.css">

</style>