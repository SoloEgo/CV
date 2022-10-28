<template>
    <div class="content_header">
        <img src="../assets/images/GetUserPhoto.png" alt="user photo">
        <span>Egor Soloviev</span>
    </div>
    <DarkCards />
    <div class="content_header">
        My achievements
    </div>
    <DarkAchievments />
    <div class="content_header">
        My skills
    </div>
    <DarkPills />
    <div class="content_header">
        Work Experience
    </div>
    <DarkWorkExperience />
</template>

<script>
import DarkCards from '../components/darkComponent/DarkCards.vue'
import DarkPills from '../components/darkComponent/DarkPills.vue'
import DarkWorkExperience from '../components/darkComponent/DarkWorkExperience.vue'
import DarkAchievments from '../components/darkComponent/DarkAchievments.vue'

export default {
    data(){
        return {
            
        }
    },
    components:{
        DarkCards,
        DarkPills,
        DarkWorkExperience,
        DarkAchievments
    },
    mounted(){
    }
}

</script>