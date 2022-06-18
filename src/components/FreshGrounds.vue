<template>
    <div class="main" >
        <b-row>
            <b-col cols="12" class="main-text">
                <div class="ticker-wrap">
                    <div class="ticker">
                        <div class="ticker__item">FRESH GROUNDS. 01 </div>
                        <div class="ticker__item">FRESH GROUNDS. 02 </div>
                        <div class="ticker__item">FRESH GROUNDS. 03 </div>
                        <div class="ticker__item">FRESH GROUNDS. 04 </div>
                        <div class="ticker__item">FRESH GROUNDS. 05 </div>
                    </div>
                </div>

            </b-col>

       </b-row>
        <b-container>
            <b-row>
                <b-col cols="12" class="background" :style="{ backgroundImage: 'url(' + require('@/assets/images/fresh.png') + ')' }">
                    <div class="episode mb-3">
                        EPISODE 01: THE GREAT MIGRATION
                    </div>

                    <div class="text-space text-center mb-3">
                        <div class="fresh">
                            FRESH GROUNDS
                        </div>

                    </div>

                    <div class="lorem mb-3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
                    </div>

                    <div class="text-center mb-3">
                        <b-button variant="outline-info" class="watch">WATCH FILM</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>


    </div>
</template>

<script>
    export default {
        name: 'FreshGrounds',
        data() {
            return {
            };
        },
    }
</script>

<style lang="scss" scoped >
    .main{
        background: #EFF5F7 0% 0% no-repeat padding-box;
        opacity: 1;
        margin-top:37px;
        .main-text{
            text-align: center;
            font: normal normal bold 65px/126px Barlow Condensed;
            letter-spacing: 1.2px;
            color: #D8E6EB;
            text-transform: uppercase;
            opacity: 1;

            .ticker-wrap {
                width: 100%;
                overflow: hidden;
                box-sizing: content-box;

                .ticker {

                    display: inline-block;
                    height: 4rem;
                    line-height: 4rem;
                    white-space: nowrap;
                    padding-right: 100%;
                    box-sizing: content-box;

                    -webkit-animation-iteration-count: infinite;
                    animation-iteration-count: infinite;
                    -webkit-animation-timing-function: linear;
                    animation-timing-function: linear;
                    -webkit-animation-name: ticker;
                    animation-name: ticker;
                    -webkit-animation-duration: 60s;
                    animation-duration: 60s;

                    &__item {
                        display: inline-block;
                        padding: 0 2rem;
                        font-size: 2rem;
                    }

                }

            }

            @-webkit-keyframes ticker {
                0% {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                    visibility: visible;
                }

                100% {
                    -webkit-transform: translate3d(-100%, 0, 0);
                    transform: translate3d(-100%, 0, 0);
                }
            }

            @keyframes ticker {
                0% {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                    visibility: visible;
                }

                100% {
                    -webkit-transform: translate3d(-100%, 0, 0);
                    transform: translate3d(-100%, 0, 0);
                }
            }

        }

        .background{
            margin: 0;
            height: 680px;

            .episode{
                margin-top: 15%;
                text-align: center;
                letter-spacing: 1.2px;
                color: #FFFFFF;
                text-transform: uppercase;
                opacity: 1;
            }

            .text-space{
                margin-top: 8px;
                .fresh{
                    text-align: center;
                    font: normal normal bold 48px/52px Barlow Condensed;
                    letter-spacing: 1.2px;
                    color: #FFFFFF;
                    text-transform: uppercase;
                    opacity: 1;
                }
            }
            .lorem{
                text-align: center;
                font: normal normal normal 15px/25px Nunito;
                letter-spacing: 0px;
                color: #FFFFFF;
                opacity: 1;
            }

            .watch{
                border: 1px solid #FFFFFF;
                border-radius: 26px;
                opacity: 1;
                text-align: center;
                font: normal normal bold 12px/14px Josefin Sans;
                letter-spacing: 1.8px;
                color: #FFFFFF;
                text-transform: uppercase;
               }

        }

    }


</style>