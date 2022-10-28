<template>
    <div class="pills_skills_holder">
        <div class="pill_skill" v-for="item in data" :key="item.id">
            <div class="pill_skill_name">{{item.name}}</div>
            <div class="pill_skill_value">
                <span v-for="index in item.value" :key="index">|</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Admin",
    data() {
        return {
            data: []
        }
    },
    async mounted() {
        this.data = await this.$store.dispatch("fetchAllSkills")
    },
    methods: {
    },
};
</script>

<style>
.pills_skills_holder {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.pill_skill {
    margin: 10px;
    width: 90%;
    box-sizing: border-box;
    background: #000;
    padding: 5px 25px;
    border-radius: 100px;
}

.pill_skill_name {
    font-size: 14px;
}

.pill_skill_value {
    display: flex;
    margin: 0.3rem 0;
}

.pill_skill_value span {
    border: 1px solid #00FF00;
    background: #00FF00;
    margin-right: 10px;
    font-size: 0;
    height: 15px;
    width: 5px;
    display: block;
}

@media (max-width: 600px) {
    .pills_skills_holder {
        grid-template-columns: 1fr 1fr;
    }
}
</style>