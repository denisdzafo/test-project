<template>
    <div class="main" >

            <b-row>
                <b-col cols="6" class="images" :style="{ backgroundImage: 'url(' + require('@/assets/images/experience-1.png') + ')' }">
                    <div class="section-title">
                        MAKE EVERY CUP AN EXPERIENCE.
                    </div>

                    <div class="text-space">
                        <div class="main-text">
                            Have your French pressed coffee anywhere with ESPRO’s Travel Press. A double micro-filter eliminates grit for your smoothest cup on the go, and the mug fits right in a car cup holder or bike’s water bottle cage.
                        </div>

                    </div>

                    <div class="text-center mb-3">
                        <b-button pill variant="outline-secondary" class="main-button" >SHOP TRAVEL PRESS</b-button>
                    </div>
                </b-col>

                <b-col cols="6" class="image-section" >
                    <div class="image-container">
                        <img :src="require(`../assets/images/group-1.png`)" />
                        <img :src="require(`../assets/images/group-2.png`)" />
                        <img :src="require(`../assets/images/group-3.png`)" />
                        <br>
                        <div class="press-text">
                            PRESS. SIP. ENJOY.
                        </div>
                    </div>
                </b-col>
            </b-row>

    </div>
</template>

<script>
    export default {
        name: 'ExperienceSection',
        data() {
            return {

            };
        },
    }
</script>

<style lang="scss" scoped >
    .main{
        margin-top:37px;

        .section-title{
            margin-top: 137px;
            text-align: center;
            font: normal normal bold 48px/48px Barlow Condensed;
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
            opacity: 1;

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

        .text-space{
            margin-top: 8px;
            .main-text{
                text-align: center;
                font: normal normal normal 16px/25px Nunito;
                letter-spacing: 0px;
                color: #FFFFFF;
                opacity: 1;
                width: 551px;
                margin-left: auto;
                margin-right: auto;
            }

        }
        .images{
            height: 700px;
        }

        .image-section{
            background: #8DB9CA 0% 0% no-repeat padding-box;
            opacity: 1;

            .image-container {
                margin-top:140px;
                img {
                    position: absolute;
                    left: 60%;
                    animation-name: multiple-image-crossfade;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                    animation-duration: 6s;
                    &:nth-of-type(1) {
                        animation-delay: 4s;
                    }
                    &:nth-of-type(2) {
                        animation-delay: 2s;
                    }
                    &:nth-of-type(3) {
                        animation-delay: 0s;
                    }
                }
            }

            @keyframes multiple-image-crossfade {
                0% {
                    opacity:1;
                }
                17% {
                    opacity:1;
                }
                25% {
                    opacity:0;
                }
                92% {
                    opacity:0;
                }
                100% {
                    opacity:1;
                }
            }

            .press-text{
                text-align: center;
                font: normal normal bold 64px/101px Barlow Condensed;
                letter-spacing: 2.1px;
                color: #AACBD8;
                text-transform: uppercase;
                opacity: 1;
                margin-top:430px;
            }
        }
    }


</style>