<template>
    <div class="edit_panel mb-4 d-flex justify-content-between">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editRecordModal" @click="addRecord">
            <i class="bi bi-plus-square-dotted" @click="addRecordClick"></i>
        </button>
        <button class="btn btn-primary" @click="logoutEvent">
            Log out <i class="bi bi-box-arrow-right"></i>
        </button>
    </div>
    <div class="work_experience_holder">
        <div class="work_experience_block mb-5" v-for="item in work_data" :key="item.id">
            <div class="edit_button d-flex justify-content-end mb-4">
                <button class="btn btn-primary" :data-id="item.id" data-bs-toggle="modal"
                    data-bs-target="#editRecordModal" @click="editRecordClick">
                    <i class="bi bi-pencil-square" :data-id="item.id"></i>
                </button>
            </div>
            <div class="work_experience_block_header">
                <div class="work_experience_block_name">{{ item.position }}</div>
                <div class="work_experience_block_time">{{ item.start_date }} to {{ item.end_date }}</div>
            </div>
            <div class="work_experience_block_company"><a :href="item.link" target="_blank">{{ item.company }}</a></div>
            <div class="work_experience_block_description" v-html="item.description"></div>
        </div>
    </div>
    <div class="modal fade edit_record_modal" id="editRecordModal" tabindex="-1" aria-labelledby="changeThemeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body mb-theme d-flex justify-content-center">
                    <form @submit.prevent="submitHandler" class="edit_record_form">
                        <div class="mb-3">
                            <label for="position" class="form-label">Position</label>
                            <input type="text" class="form-control" id="position" v-model="position">
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label for="position" class="form-label">Date start</label>
                                    <input type="text" class="form-control" id="strat_date" v-model="start_date">
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <label for="position" class="form-label">Date end</label>
                                    <input type="text" class="form-control" id="end_date" v-model="end_date">
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="company" class="form-label">Company</label>
                            <input type="text" class="form-control" id="company" v-model="company">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="20" v-model="description"></textarea>
                        </div>
                        <div class="card-action">
                            <div class="d-flex justify-content-between">
                                <button class="btn btn-primary me-5" @click="addRecord">
                                    Add record
                                </button>
                                <button class="btn btn-primary me-5" @click="editRecord">
                                    Edit record
                                </button>
                                <button class="btn btn-danger" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Admin",
    data: () => ({
        work_data: [],
        editItem: {},
        position: '',
        start_date: '',
        end_date: '',
        link: '',
        company: '',
        description: ''
    }),
    async mounted() {
        let work_data_raw = await this.$store.dispatch("fetchWorkExperience")
        let work_data = JSON.parse(JSON.stringify(work_data_raw));
        this.work_data = work_data
    },
    methods: {
        async logoutEvent() {
            await this.$store.dispatch("logoutUser");
            this.$router.push("/");
        },
        editRecordClick(event) {
            const id = event.target.dataset.id
            const editItemRaw = this.work_data.filter(item => item.id == id)
            const editItem = JSON.parse(JSON.stringify(editItemRaw))[0];
            this.position = editItem.position
            this.start_date = editItem.start_date
            this.end_date = editItem.end_date
            this.link = editItem.link
            this.company = editItem.company
            this.description = editItem.description
        },
        addRecordClick() {
            this.position = ''
            this.start_date = ''
            this.end_date = ''
            this.link = ''
            this.company = ''
            this.description = ''
        },
        async addRecord() {
            let formData = {
                position: this.position,
                start_date: this.start_date,
                end_date: this.end_date,
                link: this.link,
                company: this.company,
                description: this.description
            }
            console.log('formDataFrom', formData)
            let res = await this.$store.dispatch("addNewRecord", formData)
            console.log(res)
        }
    },
    components: {
    }
};
</script>

<style>
.modal-content {
    background: #2a2a2a;
}
</style>