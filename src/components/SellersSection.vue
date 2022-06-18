<template>
    <div class="main" >
        <b-container >
            <b-row >
                <b-col cols="12" class="text-center pour-text">POUR YOUR BEST CUP WITH</b-col>
                <b-col cols="12" class="text-center sellers-text">OUR BEST SELLERS</b-col>
            </b-row>

            <b-row>
                <b-col cols="3" class="product-slider">
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script>
    export default {
        name: 'SellersSection',
        data() {
            return {

            };
        },
    }
</script>

<style lang="scss" scoped >
    .main{
        margin-top:37px;

        .pour-text{
            text-align: center;
            font: normal normal bold 12px/25px Josefin Sans;
            letter-spacing: 1.2px;
            color: #221F20;
            text-transform: uppercase;
            opacity: 1;
        }

        .sellers-text{
            text-align: center;
            font: normal normal bold 40px/50px Barlow Condensed;
            letter-spacing: 0px;
            color: #221F20;
            text-transform: uppercase;
            opacity: 1;
        }

        .product-slider{
            background: #F6F6F6 0% 0% no-repeat padding-box;
            opacity: 1;
        }
    }


</style>