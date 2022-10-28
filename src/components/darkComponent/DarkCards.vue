<template>
    <div class="content_card_holder">
        <div class="black_card">
            <div class="black_card_image">
                <img src="@/assets/images/setting2.png" alt="">
            </div>
            <div class="black_card_title">Development</div>
            <div class="black_card_description">
                High-performance software development in various fields. <br />
                Web / desktop / mobile
            </div>
        </div>
        <div class="black_card">
            <div class="black_card_image">
                <img src="@/assets/images/brush2.png" alt="">
            </div>
            <div class="black_card_title">Design</div>
            <div class="black_card_description">
                Strong understanding of design principles, style and individual approach <br>

            </div>
        </div>
        <div class="black_card">
            <div class="black_card_image">
                <img src="@/assets/images/ui8.png" alt="">
            </div>
            <div class="black_card_title">UI / UX</div>
            <div class="black_card_description">
                Extensive experience in user interface development. Each element will be in its place
            </div>
        </div>
    </div>
</template>
<style>
.content_card_holder {
    display: flex;
    align-items: stretch;
    justify-content: space-around;
}

.black_card {
    max-width: 250px;
    box-sizing: border-box;
    padding: 1rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    border-top: 1px solid #707070;
    box-shadow: 0px 2px 1px 1px #2c2c2c;
    z-index: 2;
}

.black_card_image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 30px 0;
}

.black_card_title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
}

.black_card_description {
    font-size: 14px;
}

.black_card_button {
    margin: 30px auto;
    width: 100px;
    text-align: center;
    font-size: 20px;
    background: linear-gradient(180deg, #00FF00 0%, rgba(0, 255, 0, 0.83) 100%);
    padding: 5px;
    border-radius: 100px;
}

.content_card_holder:before {
    content: '10110100 1000101 1100010 0100010 0011111 0010101 0101101 ';
    position: absolute;
    font-size: 29px;
    color: rgba(255, 255, 255, 0.2);
    top: 60px;
    left: 7px;
}

.content_card_holder:after {
    content: '10110100 1000101 1100010 0100010 0011111 0010101 0101101 ';
    position: absolute;
    font-size: 29px;
    color: rgba(255, 255, 255, 0.2);
    bottom: 60px;
    left: 7px;
    z-index: 0;
}

.black_card:hover {
    box-shadow: 0px 2px 10px 3px #2c2c2c;
}

.black_card_button:hover {
    cursor: pointer;
    background: red;
}

@media (max-width: 600px) {
    .content_card_holder {
        flex-wrap: wrap;
    }

    .black_card {
        margin: 15px 0;
        z-index: 10;
    }
}
</style>