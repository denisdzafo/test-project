<template>
    <b-col class="main-section">
        <b-container >

            <b-row>
                <b-col cols="3">
                    <img v-rellax="{speed: 2}" class="image-section-1" :src="require(`../assets/images/coffe-1.png`)">
                </b-col>

                <b-col cols="5">
                    <b-row >
                        <b-col cols="12" class="text-center designed-text">
                            DESIGNED FOR REAL LIFE
                        </b-col>

                        <b-col cols="12" class="text-center">
                            <div class=" coffee-text" >
                                <p class="line__1">COFFEE MADE FOR YOUR</p>
                                <p class="line__2">LIFE ON THE GO.</p>
                            </div>

                        </b-col>

                        <b-col cols="12" >
                            <div class="description-text">
                                We understand coffee is a big part of your busy, active life. That’s why we create and develop products that allow you to bring your passion for coffee-when you want it- and wherever life takes you.
                            </div>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col cols="2">
                    <img v-rellax="{speed: 2}" class="image-section-3" :src="require(`../assets/images/coffe-3.png`)">
                </b-col>

                <b-col cols="2">
                    <img v-rellax="{speed: 2}" class="image-section-2" :src="require(`../assets/images/coffe-2.png`)">
                </b-col>
            </b-row>


            <b-row>
                <b-col cols="4">
                    <img v-rellax="{speed: 1}" class="image-section-5" :src="require(`../assets/images/coffe-5.png`)">
                </b-col>

                <b-col cols="4">
                    <img v-rellax="{speed: 1}" class="image-section-4" :src="require(`../assets/images/coffe-4.png`)">
                </b-col>

                <b-col cols="4">
                    <img v-rellax="{speed: 1}" class="image-section-6" :src="require(`../assets/images/coffe-6.png`)">
                </b-col>

            </b-row>



        </b-container>

    </b-col>
</template>

<script>
    export default {
        name: 'CoffeeSection',
        data() {
            return {
                image1: '@'

            };
        },
    }
</script>

<style lang="scss" scoped >
    .main-section{
        padding-bottom: 50px;
        background: #F3F7F9 0% 0% no-repeat padding-box;
        opacity: 1;

        .designed-text{
            text-align: center;
            font: normal normal bold 12px/25px Josefin Sans;
            letter-spacing: 1.2px;
            color: #221F20;
            text-transform: uppercase;
            opacity: 1;
            margin-top:68px;
        }

        .coffee-text{
            text-align: center;
            font: normal normal bold 30px/52px Barlow Condensed;
            letter-spacing: 0px;
            color: #221F20;
            text-transform: uppercase;
            opacity: 1;
            margin-left: auto;
            margin-right: auto;
        }

        .description-text{
            text-align: center;
            font: normal normal normal 16px/25px Nunito;
            letter-spacing: 0px;
            color: #221F20;
            margin-left: auto;
            margin-right: auto;
        }

        .image-section-1{
            top: 178px;
            width: 246px;
            height: 326px;
            position: relative;
        }

        .image-section-1:hover{
            width: 266px;
            height: 346px;
        }

        .image-section-2{
            top: 138px;
            width: 119px;
            height: 158px;
            position: relative;
        }

        .image-section-2:hover{
            width: 139px;
            height: 178px;
        }

        .image-section-3{
            top: 200px;
            width: 231px;
            height: 304px;
            position: relative;
            z-index: 1000;
        }

        .image-section-3:hover{
            width: 251px;
            height: 324px;
        }

        .image-section-4{
            top: 60px;
            width: 264px;
            height: 264px;
            right: 200px;
            position: relative;
        }

        .image-section-4:hover{
            width: 284px;
            height: 284px;
        }

        .image-section-5{
            margin-top: 150px;
            width: 420px;
            height: 302px;
        }

        .image-section-5:hover{
            width: 440px;
            height: 322px;
        }

        .image-section-6{
            top: 75px;
            right: 135px;
            width: 520px;
            height: 364px;
            position: relative;
        }

        .image-section-6:hover{
            width: 540px;
            height: 384px;
        }

        .line__1,
        .line__2 {
            white-space: nowrap; /* keep text in one line */
            overflow: hidden; /* hide text behind the cursor */
            margin: 0.5rem auto;
        }

        .line__1 {
            border-right: 2px solid rgba(17, 17, 17, 0.9);

            /* define animation types for text + cursor */
            animation: animated-text__1 6s steps(30, end) 1s 1 normal both,
            animated-cursor__1 900ms steps(30, end) 8;
        }

        .line__2 {
            border-right: 2px solid rgba(17, 17, 17, 0.9);

            /* define animation types for text + cursor */
            animation: animated-text__2 5s steps(30, end) 1s 1 normal both,
            animated-cursor__2 900ms steps(30, end) infinite;
            -webkit-animation-delay: 7s;
            animation-delay: 7s;
        }

        @keyframes animated-cursor__1 {
            from {
                border-right-color: rgba(17, 17, 17, 0.9);
            }
            to {
                border-right-color: rgba(255, 255, 255, 0.8);
            }
        }

        @keyframes animated-cursor__2 {
            from {
                border-right-color: rgba(17, 17, 17, 0.9);
            }
            to {
                border-right-color: rgba(255, 255, 255, 0.8);
            }
        }

        @keyframes animated-text__1 {
            from {
                width: 0;
            }
            to {
                width: 100%;
            }
        }

        @keyframes animated-text__2 {
            from {
                width: 0;
            }
            to {
                width: 100%;
            }
        }

    }

</style>