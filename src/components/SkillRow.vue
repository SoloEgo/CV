<template>
    <div class="sk-row shadow-sm">
        <div class="sk-name">
            <slot name="skillName"></slot>
        </div>
        <div class="sk-value-holder">
            <div class="sk-value" :style="style"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value-skill'],
    created() {
    },
    computed: {
      style () {
        let stl = `width: ${this.valueSkill}%;`;
        return stl
      }
    }
}
</script>