<script setup>
import ContentItem from '../components/ContentItem.vue'
import SkillsItem from '../components/SkillsItem.vue'
</script>

<template>
  <main class="main-wrapper">
    <div class="content-holder">
      <ContentItem />
    </div>
    <div class="sidebar">
      <SkillsItem />
    </div>
  </main>
</template>

<style scoped>
main.main-wrapper {
  margin-top: 2rem;
  display: flex;
  overflow-y: scroll;
}

.content-holder {
  width: 65%;
}

.sidebar {
  width: 35%;
  box-sizing: border-box;
  padding: 0 2rem;
  position: sticky;
  top: 0px;
}

@media (max-width: 600px) {
  main.main-wrapper {
    flex-direction: column;
  }

  .content-holder {
    width: 100%;
  }

  .sidebar {
    width: 100%;
    position: relative;
  }
  main.main-wrapper{
    overflow: auto;
  }
}
</style>