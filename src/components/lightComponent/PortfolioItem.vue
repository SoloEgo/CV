
<template>
    <div class="card m-3 shadow-sm">
        <div class="car-image-crop"><slot name="image"></slot></div>
        <div class="card-body">
            <h5 class="card-title">
                <slot name="title"></slot>
            </h5>
            <p class="card-text">
                <slot name="summary"></slot>
            </p>
            <div class="card-button-row">
                <slot name="moreButton"></slot>
            </div>
        </div>
    </div>
</template>