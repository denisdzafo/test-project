<template>
    <div class="main" >
        <b-container >
            <b-row >
                <b-col cols="12" class="text-center product-text">EXPLORE OUR PRODUCTS</b-col>
            </b-row>

            <b-row>
                <b-col cols="4" class="image-1 images" :style="{ backgroundImage: 'url(' + require('@/assets//images/product-1-1.png') + ')' }">
                    FRENCH PRESS
                </b-col>

                <b-col cols="4" class="image-2 images" :style="{ backgroundImage: 'url(' + require('@/assets//images/product-2-1.png') + ')' }">
                    POUR OVER
                </b-col>

                <b-col cols="4" class="image-3 images" :style="{ backgroundImage: 'url(' + require('@/assets//images/product-3-1.png') + ')' }">
                    COLD BREW
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12" class="text-center">
                    <b-button pill variant="outline-secondary" class="main-button" >SHOP ALL PRODUCTS</b-button>
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script>
    export default {
        name: 'ProductSection',
        data() {
            return {

            };
        },
    }
</script>

<style lang="scss" scoped >
    .main{
        margin-top:37px;

        .product-text{
            text-align: center;
            font: normal normal bold 40px/43px Barlow Condensed;
            letter-spacing: 0.8px;
            color: #221F20;
            text-transform: uppercase;
            opacity: 1;
        }

        .images{
            width: 30%;
            height: 515px;
            text-align: left;
            font: normal normal bold 22px/50px Josefin Sans;
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
            opacity: 1;
            margin-right:20px;
            margin-top: 30px;
        }

        .main-button{
            margin-top: 30px;
            margin-bottom: 30px ;
            border: 1px solid #221F20;
            border-radius: 26px;
            opacity: 1;
            width: 202px;
            height: 50px;
        }
    }


</style>