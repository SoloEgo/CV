<template>
  <div id="app" v-if="isLightTheme">
    <StartTemplate></StartTemplate>
  </div>
  <div id="app-dark" v-else>
    <BlackTemplate></BlackTemplate>
  </div>
  <ModalTemplateChoose />
</template>

<script>
import StartTemplate from './templates/StartTemplate.vue';
import BlackTemplate from './templates/BlackTemplate.vue';
import ModalTemplateChoose from './components/ModalTemplateChoose.vue'
import { db } from '@/plugins/db'

export default {
  data() {
    return {
      isLightTheme: (this.$cookies.get("isLightTheme") ?? "false") == 'false' ? false : true
    }
  },
  components: {
    StartTemplate,
    BlackTemplate,
    ModalTemplateChoose
  },
  async mounted() {
    let cookTheme = (this.$cookies.get("isLightTheme") ?? "false") == 'false' ? false : true
    this.isLightTheme = cookTheme
    this.$store.state.isLightTheme = cookTheme
  },
}
</script>