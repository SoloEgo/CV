<template>
    <div class="form-block">
        <div class="form-container">
            <form class="f-card" @submit.prevent="submitHandler">
                <div class="f-card-content">
                    <span class="f-card-title">Sign in</span>
                    <div class="f-input-field">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="text" v-model.trim="email"
                            :class="{ invalid: (v$.email.$dirty && !v$.email.required) || (v$.email.$dirty && !v$.email.email), }" />
                        <small class="f-helper-text invalid" v-if="v$.email.$dirty && !v$.email.required">E-mail
                            could not be empty</small>
                        <small class="f-helper-text invalid" v-else-if="v$.email.$dirty && !v$.email.email">enter
                            correct E-mail</small>
                    </div>
                    <div class="f-input-field">
                        <label for="password" class="form-label">Password</label>
                        <input id="password" type="password" class="validate" v-model.trim="password" :class="{
                            invalid:
                                (v$.password.$dirty && !v$.password.required) ||
                                (v$.password.$dirty && !v$.password.minLength),
                        }" />
                        <small class="f-helper-text invalid" v-if="v$.password.$dirty && !v$.password.required">Enter
                            the password</small>
                        <small class="f-helper-text invalid"
                            v-if="v$.password.$dirty && !v$.password.minLength">Password must be greater then
                            {{ v$.password.$params.minLength.min }} signs</small>
                    </div>
                </div>
                <div class="card-action">
                    <div>
                        <button class="f-btn waves-effect waves-light auth-submit" type="submit">
                            Sign in
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
export default {
    name: "login",
    setup() {
        return { v$: useVuelidate() }
    },
    data: () => ({
        email: "",
        password: "",
    }),
    validations() {
        return {
            email: { email, required },
            password: { required, minLength: minLength(10) },
        }
    },
    mounted() {
    },
    methods: {
        async submitHandler() {
            if (this.v$.$invalid) {
                this.v$.$touch();
                return;
            }
            const formData = {
                email: this.email,
                password: this.password
            }
            try {
                await this.$store.dispatch('login', formData)
                this.$router.push("/");
                this.v$.$touch();
            } catch (e) {
                console.log(e)
            }
        },
    },
};
</script>

<style>
.form-container {
    width: 500px;
    margin: 0 auto;
}

.f-input-field label {
    display: block;
}

.f-input-field {
    margin: 15px 0;
}
</style>