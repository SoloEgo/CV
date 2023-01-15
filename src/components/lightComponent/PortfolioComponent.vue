<script setup>
import PortfolioItem from '@/components/lightComponent/PortfolioItem.vue'
import json from "@/assets/portfolio.json";
</script>

<template>
    <PortfolioItem v-for="project in projects" :key="project.title">
        <template #image><img :src="project.image"></template>
        <template #title >{{ project.title }}</template>
        <template #summary>{{ project.summary }}</template>
        <template #moreButton><a class="btn btn-primary white-color" @click="showDescription(project.title)" data-bs-toggle="modal" data-bs-target="#staticBackdrop">More</a></template>
    </PortfolioItem>
    <div class="modal fade modal-lg" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">{{cpTitle}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-html="cpDescription">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Portfolio",
    data: function () {
        return {
            projects: json.projects,
            cpTitle: '',
            cpDescription: '',
            modalState: false
        };
    },
    methods: {
        showDescription(selectedItem) {
            this.modalState = !this.modalState
            let choosenItem = this.projects.filter(i => i.title == selectedItem)[0]
            this.cpTitle = choosenItem.title
            this.cpDescription = choosenItem.description
        }
    }
};
</script>

<style>
.portfolio .active {
    display: flex;
}

.portfolio .hidden {
    display: none;
}

a.white-color{
    color: #ffffff;
}

</style>