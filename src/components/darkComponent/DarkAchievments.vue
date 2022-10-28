<template>
    <div class="achievments_holder">
        <a href="https://egor-super-crm.netlify.app/" target="_blank" class="achievment_block">
            <div class="achievment_icon"><i class="bi bi-star-fill"></i></div>
            <div class="achievment_name">CRM system</div>
        </a>
        <a href="#" class="achievment_block">
            <div class="achievment_icon"><i class="bi bi-star-fill"></i></div>
            <div class="achievment_name">Oracle BI system</div>
        </a>
        <a href="#" class="achievment_block">
            <div class="achievment_icon"><i class="bi bi-star-fill"></i></div>
            <div class="achievment_name">Desktop apllication for Oracle BI system</div>
        </a>
        <a href="https://apps.apple.com/ru/app/imh-bi/id1435571474" target="_blank" class="achievment_block">
            <div class="achievment_icon"><i class="bi bi-star-fill"></i></div>
            <div class="achievment_name">iOS application for iPads</div>
        </a>
        <a href="#" target="_blank" class="achievment_block">
            <div class="achievment_icon"><i class="bi bi-star-fill"></i></div>
            <div class="achievment_name">Aplle tv application</div>
        </a>
    </div>
</template>

<style>
.black_card:hover {
    box-shadow: 0px 2px 10px 3px #2c2c2c;
}

.black_card_button:hover {
    cursor: pointer;
    background: red;
}

.achievments_holder {
    display: flex;
    flex-wrap: wrap;
}

a.achievment_block {
    color: #00FF00;
    text-decoration: none;
    display: flex;
    border-radius: 300px;
    padding: 5px 20px;
    margin: 1rem;
    align-items: center;
    justify-content: center;
    border: 1px solid;
}

a.achievment_block i {
    margin-right: 10px;
}

a.achievment_block:hover {
    background: #00FF00;
    color: #000000;
}
</style>