<template>
    <DarkBackgroundBlock />
    <div class="content_dark">
        <DarkConsoleBlock />
        <div class="main_block">
            <div class="content_block">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script>
import DarkBackgroundBlock from '../components/darkComponent/DarkBackgroundBlock.vue'
import DarkConsoleBlock from '../components/darkComponent/DarkConsoleBlock.vue'
import DarkCards from '../components/darkComponent/DarkCards.vue'
import DarkPills from '../components/darkComponent/DarkPills.vue'
import DarkWorkExperience from '../components/darkComponent/DarkWorkExperience.vue'
import DarkAchievments from '../components/darkComponent/DarkAchievments.vue'
import LoginForm from '@/components/LoginForm.vue'
import LoginPage from '@/views/LoginPage.vue'

export default {
    components: {
        DarkBackgroundBlock,
        DarkConsoleBlock,
        DarkCards,
        DarkPills,
        DarkWorkExperience,
        DarkAchievments,
        LoginForm,
        LoginPage
    },
    mounted() {
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

div#application {
    width: 100%;
    height: 100%;
}

div#app-dark {
    width: 100%;
    height: 100%;
    background: #000;
}

.main_block {
    max-width: 1024px;
    margin: 0 auto;
}

.content_block {
    background: #1F1F1F;
    color: #fff;
    border-radius: 1rem 1rem 0 0;
    padding: 1rem;
}

body {
    font-family: 'IBM PLEX MONO' !important;
}

.content_header {
    margin: 2rem 0;
    text-align: center;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content_header img {
    margin: 0 1rem;
}

.content_dark {
    min-height: 100vh;
}

#app-dark .card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    border-top: 1px solid #707070;
    box-shadow: 0px 2px 1px 1px #2c2c2c !important;
}
</style>