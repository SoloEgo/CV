<template>
    <div class="form-wrapper">
        <LoginForm/>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import { db } from '@/plugins/db'

export default {
  data() {
  },
  components: {
    LoginForm
  },
  async mounted() {
  },
}
</script>