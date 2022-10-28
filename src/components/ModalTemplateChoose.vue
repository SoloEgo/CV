<template>
    <div class="modal fade" id="changeThemeModal" tabindex="-1" aria-labelledby="changeThemeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="changeThemeModalLabel">Change theme</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body mb-theme d-flex justify-content-center">
                    <div class="card w-25 p-2 m-5" :class="{ active: isLightTheme }" @click="changeThemeLight">
                        <div class="themeColorBlock lcb-light w-100 mb-1"></div>
                        <div class="themename">light</div>
                    </div>
                    <div class="card w-25 p-2 m-5" :class="{ active: !isLightTheme }" @click="changeThemeDark">
                        <div class="themeColorBlock lcb-dark w-100 mb-1"></div>
                        <div class="themename">dark</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            isLightTheme: false
        }
    },
    methods: {
        changeThemeLight() {
            this.$cookies.set("isLightTheme", "true", "1d");
            this.isLightTheme = true
            this.$store.state.isLightTheme = true
            this.$router.push('/')
            location.reload();
        },
        changeThemeDark() {
            this.$cookies.set("isLightTheme", "false", "1d");
            this.isLightTheme = false
            this.$store.state.isLightTheme = false
            this.$router.push('/')
            location.reload();
        }
    },
    mounted() {
        let cookTheme = (this.$cookies.get("isLightTheme") ?? "false") == 'false' ? false : true;
        this.isLightTheme = cookTheme
    }
}
</script>

<style scoped>
.themeColorBlock {
    aspect-ratio: 1/1;
    border-radius: 10px;
}

.themeColorBlock.lcb-light {
    background: #f5f5f5;
}

.themeColorBlock.lcb-dark {
    background: #222222;
}

.themename {
    text-align: center;
}

.themeColorBlock:before {
    content: '';
    position: absolute;
    aspect-ratio: 1/1;
    width: 50%;
    border-radius: 100px;
    left: 50%;
    margin-left: -25%;
    top: 50%;
    margin-top: -25%;
}

.themeColorBlock.lcb-light:before {
    background: var(--bs-blue);
}

.themeColorBlock.lcb-dark:before {
    background: #19e519;
}

.modal-body.mb-theme {
    cursor: pointer;
}

.modal-body.mb-theme .card.active {
    outline: 2px solid #0d6efd;
}

.modal-body.mb-theme .card:hover {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}
</style>