<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="header-heading">
    <h1>{{ msg }}</h1>
    <h3>
      Full Stack web developer / BI specialist
    </h3>
    <p>Male, 31 years, born on 24 July 1991</p>
    <div class="contact-info">
      <a href="tel:+79207626003" class="shadow-sm conatct-item"><i class="bi bi-telephone"></i> +7 (920) 762-60-03</a>
      <a href="mailto:egorsoloviev.web@gmail.com" class="shadow-sm conatct-item"><i
          class="bi bi-envelope"></i>egorsoloviev.web@gmail.com</a>
    </div>
  </div>
  <div class="shadow-sm header-sub-info">
    <div class="hsi-tem"><i class="bi bi-geo-alt"></i> Reside in: Moscow</div>
    <div class="hsi-tem"><i class="bi bi-file"></i> Citizenship: Russia</div>
    <div class="hsi-tem"><i class="bi bi-file"></i> Work permit at: Russia</div>
    <div class="hsi-tem"><i class="bi bi-sign-turn-right"></i> Ready to relocate</div>
  </div>
</template>

<style scoped>
.header-heading h1,
.header-heading h3 {
  text-align: left;
}

.contact-info {
  display: flex;
}

.conatct-item {
  margin: 0 1rem 0 0;
  background: var(--bs-gray-100);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  text-decoration: none;
  color: var(--bs-black);
  display: flex;
  align-items: center;
  justify-content: center;
}

a.conatct-item i {
  margin-right: 0.5rem;
}

.header-sub-info {
  padding: 0.5rem;
  font-size: 14px;
  background: var(--bs-gray-100);
  border-radius: 10px;
}

.hsi-tem {
  margin: 0.5rem 0;
}

@media (max-width: 600px) {
  .contact-info {
    flex-direction: column;
    align-items: baseline;
  }

  .contact-info>a {
    margin-bottom: 10px;
    display: block;
  }

  .shadow-sm.header-sub-info {
    flex-flow: wrap;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-size: calc(1.3rem - 0.1vh);
  }
}
</style>
