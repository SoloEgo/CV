<script setup>
import SkillRow from '@/components/lightComponent/SkillRow.vue'
</script>


<template>
    <div class="skills-block">
        <div class="skills-header">
            <h4>Skills:</h4>
        </div>
        <div class="skills-holder">
            <SkillRow value-skill="70">
                <template #skillName>JavaScript</template>
            </SkillRow>
            <SkillRow value-skill="80">
                <template #skillName>HTML / CSS</template>
            </SkillRow>
            <SkillRow value-skill="70">
                <template #skillName>JQuery</template>
            </SkillRow>
            <SkillRow value-skill="50">
                <template #skillName>Node.js</template>
            </SkillRow>
            <SkillRow value-skill="60">
                <template #skillName>Vue.js</template>
            </SkillRow>
            <SkillRow value-skill="40">
                <template #skillName>SQL</template>
            </SkillRow>
            <SkillRow value-skill="80">
                <template #skillName>OBIEE</template>
            </SkillRow>
            <SkillRow value-skill="40">
                <template #skillName>Power BI</template>
            </SkillRow>
            <SkillRow value-skill="30">
                <template #skillName>Swift</template>
            </SkillRow>
        </div>
    </div>
</template>

<style>
.skills-block {
    background: var(--bs-gray-100);
    padding: 1rem;
    border-radius: 10px;
}

.sk-row {
    background: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    margin-bottom: 0.7rem;
}

.sk-value-holder {
    height: 10px;
    width: 100%;
    border: 1px solid #d3d3d3;
    border-radius: 100px;
    overflow: hidden;
}

.sk-value {
    height: 100%;
    background: var(--bs-blue);
    transition: all 0.5s;
    width: 0%;
}
</style>