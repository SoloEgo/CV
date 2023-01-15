<template>
    <div class="console_row">
        <div class="console_wrapper">
            <div class="console_window">
                <div class="console_window_header">
                    <div class="console_window_header_buttons">
                        <div class="console_window_header_button cswhb_close"></div>
                        <div class="console_window_header_button cswhb_minimze"></div>
                        <div class="console_window_header_button cswhb_fullsize"></div>
                    </div>
                </div>
                <div class="console_window_body">
                    <div class="console_window_content">
                        <div class="console_window_row" :class="{ active: isFirstRowActive }">
                            <div class="console_col_name">admin></div>
                            <div class="console_col_line">  Hi! Welcome to my CV page!</div>
                        </div>
                        <div class="console_window_row" :class="{ active: isSecondRowActive }">
                            <div class="console_col_name">admin></div>
                            <div class="console_col_line">  Choose action:
                                <div class="console_action" :class="{ active: isThirdRowActive }">
                                    <RouterLink to="/" @click="openMenu"><i class="bi bi-house"></i></RouterLink>
                                    <RouterLink to="/portfolio" @click="openMenu">Portfolio
                                    </RouterLink>
                                    <a href="https://github.com/SoloEgo?tab=repositories" target="_blank"><i
                                            class="bi bi-github me-2"></i>My GitHub</a>
                                    <a href="Egor-Soloviev-CV.pdf" download>Download CV</a>
                                    <a href="mailto:egorsoloviev.web@gmail.com">Contact me</a>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#changeThemeModal">Change
                                        theme</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Console",
    data() {
        return {
            data: [],
            isFirstRowActive: false,
            isSecondRowActive: false,
            isThirdRowActive: false
        }
    },
    async mounted() {
        setTimeout(() => {
            this.isFirstRowActive = true
        }, 1000);
        setTimeout(() => {
            this.isSecondRowActive = true
        }, 1500);
        setTimeout(() => {
            this.isThirdRowActive = true
        }, 2000);
    },
    methods: {
    },
};
</script>

<style>
.console_row {
    padding: 3rem 0;
}

.console_wrapper {
    max-width: 1024px;
    width: 900px;
    margin: 0 auto;
    background: #1F1F1F;
    min-height: 210px;
    border-radius: 1rem;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.console_window_header {
    height: 2.5rem;
    background: #000;
    flex: 0 0 auto;
}

.console_window_header_button {
    width: 15px;
    aspect-ratio: 1/1;
    border-radius: 100px;
    margin: 0 10px;
    cursor: pointer;
}

.console_window_header_buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    padding: 0 1rem;
}

.console_window_header_button.cswhb_close {
    background: red;
}

.console_window_header_button.cswhb_minimze {
    background: yellow;
}

.console_window_header_button.cswhb_fullsize {
    background: #4caf50;
}

.console_window_body {
    box-sizing: border-box;
    padding: 1rem;
    flex: 1 1 auto;
}

.console_window_row {
    display: flex;
}

.console_window_content {
    color: #00FF00;
}

.console_window {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
}

.console_action a,
.console_action a:hover,
.console_action a:active {
    color: #00FF00;
    text-decoration: none;
    border: 1px solid;
    border-radius: 10rem;
    padding: 4px 10px;
    margin: 0 10px;
}

.console_action {
    margin: 20px 0;
}

.console_window_row {
    display: none;
}

.console_window_row.active {
    display: flex;
}

.console_action.active {
    display: FLEX;
}

.console_action {
    display: none;
}


@media (max-width: 600px) {
    .console_wrapper {
        width: 100%;
        flex-wrap: wrap;
    }

    .console_window {
        flex-wrap: wrap;
    }

    .console_action.active {
        flex-wrap: wrap;
    }

    .pills_skills_holder {
        grid-template-columns: 1fr 1fr;
    }

    .console_action a,
    .console_action a:hover,
    .console_action a:active {
        margin: 10px;
    }
}
</style>