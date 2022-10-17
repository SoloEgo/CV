<template>
  <div class="item">
    <div class="i">
      <slot name="icon"></slot>
      <div class="duration">
        <slot name="duration"></slot>
      </div>
    </div>
    <div class="details">
      <h6>
        <slot name="heading"></slot>
      </h6>
      <p>
        <slot name="subheading"></slot>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

.i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
}

.details h6 {
  margin-bottom: 0.2rem;
}

.duration {
  position: absolute;
  font-size: 0.7rem;
  top: 70px;
  z-index: 1;
  background: var(--bs-gray-100);
  left: 0px;
  padding: 5px;
  border-radius: 10px;
}

.item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .i {
    top: calc(0% + 10px);
    left: 0px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 25px;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 25px;
    top: 60px;
    height: calc(100% - 60px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }

@media (max-width: 600px) {
  h5 {
    font-size: 1rem;
  }
}
</style>
