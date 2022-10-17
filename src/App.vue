<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadingName from './components/HeadingName.vue'

import { ref } from 'vue';

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
        <RouterLink to="/about" @click="openMenu"><i class="bi bi-info-square"></i> About</RouterLink>
        <RouterLink to="/portfolio" @click="openMenu"><i class="bi bi-gear"></i> Portfolio</RouterLink>
      </nav>
      <a href="./public/Egor-Soloviev-CV.pdf" download class="download_link"><i class="bi bi-file-earmark-pdf"></i> Download
        CV</a>
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

<script>
</script>

<style scoped>
.menu-btn {
  display: none;
}

header {
  line-height: 1.2;
  display: flex;
  flex-direction: column;
}

.header-nav {
  background: var(--bs-blue);
  border-radius: 10px;
  margin-top: 10px;
}

.header-content {
  display: flex;
  margin-top: 15px;
}

.logo {
  margin: 0 1rem 0 0;
  flex: 0 auto;
  border-radius: 10px;
  aspect-ratio: 1/1;
  width: 170px
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0rem;
  padding: 1rem;
}

nav a.router-link-exact-active,
nav a {
  color: var(--vt-c-text-light);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-right: 1rem;
}

nav a.router-link-exact-active:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0px;
  left: 0px;
  background: #fff;
}

nav a:hover {
  background-color: #ffffff30;
}

header .wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 auto;
  align-items: end;
}

nav {
  text-align: left;
  font-size: 1rem;
}

.close-btn {
  display: none;
}

.header-nav a.download_link {
  color: var(--vt-c-text-light);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-right: 1rem;
  white-space: nowrap;
}

.header-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/*@media (min-width: 1024px) {
  header {}

  .logo {}
}*/

@media (max-width: 600px) {
  .menu-btn {
    background: var(--bs-blue);
    color: #fff;
    display: flex;
    width: fit-content;
    aspect-ratio: 1/1;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    padding: 0.2rem;
    margin: 0.5rem 0rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .logo {
    width: 100px;
  }

  .header-content {
    flex-direction: column;
  }

  .logo-img {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .header-nav {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0px;
    left: 0px;
    margin: 0px;
    border-radius: 0;
  }

  .header-nav.active {
    display: block;
  }

  .header-nav nav {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  .close-btn {
    display: block;
    color: #fff;
    position: absolute;
    font-size: 2rem;
    border: 2px solid #fff;
    aspect-ratio: 1/1;
    padding: 0rem 0.2rem;
    border-radius: 100px;
    right: 10px;
    top: 10px;
    z-index: 100;
  }
}
</style>
