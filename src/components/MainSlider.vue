<template>
    <div class="main-slider" :style="{ backgroundImage: 'url(' + require('@/assets//images/2132C2_6.png') + ')' }">
        <b-container >
            <b-row >
                <b-col cols="12" class="text-center main-text">
                    BREW ANYWHERE. BE ANYWHERE.
                </b-col>

                <b-col cols="12" class="text-center">
                    <p class="description-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
                    </p>

                </b-col>

                <b-col cols="12" class="text-center">
                    <b-button pill variant="outline-secondary" class="main-button" @click="goTO()">POUR ON THE GO</b-button>
                </b-col>

            </b-row>
        </b-container>

    </div>
</template>

<script>
    export default {
        name: 'MainSlider',
        data() {
            return {

            };
        },

        methods: {
            goTO(){
                this.$emit('go');
            }
        }
    }
</script>

<style lang="scss" scoped >
    .main-slider{
        top: 37px;
        left: 0px;
        height: 729px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .main-text{
            font: normal normal bold 70px/84px Barlow Condensed;
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
            opacity: 1;
            padding-top: 293px;
        }


        .description-text{
            text-align: center;
            font: normal normal normal 17px/25px Nunito;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
            width: 770px;
            margin-left: auto;
            margin-right: auto;
        }

        .main-button{
            text-align: center;
            font: normal normal bold 12px/14px Josefin Sans;
            letter-spacing: 1.8px;
            color: #221F20;
            text-transform: uppercase;
            opacity: 1;
            width: 208px;
            height: 50px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border-radius: 27px;
        }

        .main-button:hover{
            width: 222px;
            height: 54px;
        }
    }
</style>