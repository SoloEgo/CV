<script setup>
import PortfolioComponent from '../components/lightComponent/PortfolioComponent.vue'
</script>

<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <div class="card-view">
      <PortfolioComponent />
    </div>
  </div>
</template>
  
<style>
.portfolio {
  margin-top: 1rem;
}

.portfolio h1 {
  text-align: center;
}

.card-view {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.card-view .card img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  left: 50%;
  margin-left: -50%;
}

.card-view .card {
  overflow: hidden;
}

p.card-text {
  flex: 1 1;
}

.card-view .card-body {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-view .car-image-crop {
  width: 100%;
  aspect-ratio: 1/0.7;
  overflow: hidden;
}

.modal-img img {
    width: 35%;
}

.modal-img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
}

@media (max-width: 600px) {
  .card-view {
    grid-template-columns: 1fr;
  }
}
</style>
  