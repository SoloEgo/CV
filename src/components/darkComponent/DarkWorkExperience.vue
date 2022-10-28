<template>
    <div class="work_experience_holder">
        <div class="work_experience_block mb-5" v-for="item in data" :key="item.id">
            <div class="work_experience_block_header">
                <div class="work_experience_block_name">{{item.position}}</div>
                <div class="work_experience_block_time">{{item.start_date}} to {{item.end_date}}</div>
            </div>
            <div class="work_experience_block_company"><a :href="item.link" target="_blank">{{item.company}}</a></div>
            <div class="work_experience_block_description" v-html="item.description"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Admin",
    data(){
        return {
            data: []
        }        
    },
    async mounted() {
        this.data = await this.$store.dispatch("fetchWorkExperience")
    },
    methods: {
    },
};
</script>

<style>
.work_experience_block {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 1rem;
    margin: 0 1rem;
    padding: 1.5rem 2rem;
}

.work_experience_block_header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.work_experience_block_name {
    font-size: 20px;
}

.work_experience_block_company {
    margin: 1rem 0;
    font-size: 16px;
}

.work_experience_block_description {
    font-size: 14px;
}

.work_experience_block_company a {
    color: lime;
    font-size: 25px;
    font-weight: bold;
}
</style>