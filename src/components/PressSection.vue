<template>
    <div class="main" >
        <b-container >
            <b-row >
                <b-col cols="12" class="text-center main-text">IN THE PRESS</b-col>
            </b-row>

            <b-row>
                <b-col cols="12" class="description-row mb-5">
                    <div class="description" v-if="quote === 1">
                        “The result is a richly flavored, super aromatic cup of coffee without the usual silt in the bottom. The press isn’t just for coffee, either—there’s also a tea filter available that isolates tea leaves to prevent oversteeping.”
                    </div>

                    <div class="description" v-else-if="quote === 2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>

                    <div class="description" v-else-if="quote === 3">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>

                    <div class="description" v-else-if="quote === 4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>

                    <div class="description" v-else-if="quote === 5">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="1">

                </b-col>

                <b-col cols="2" >
                    <img @click="selectQuote(1)" class="image-section-3" :src="require(`../assets/images/logo-1.png`)">
                </b-col>

                <b-col cols="2" >
                    <img @click="selectQuote(2)" class="image-section-3" :src="require(`../assets/images/logo-2.png`)">
                </b-col>

                <b-col cols="2" >
                    <img @click="selectQuote(3)" class="image-section-3" :src="require(`../assets/images/logo-3.png`)">
                </b-col>

                <b-col cols="2" >
                    <img @click="selectQuote(4)" class="image-section-3" :src="require(`../assets/images/logo-4.png`)">
                </b-col>

                <b-col cols="2" >
                    <img @click="selectQuote(5)" class="image-section-3" :src="require(`../assets/images/logo-5.png`)">
                </b-col>

                <b-col cols="1">

                </b-col>
            </b-row>

        </b-container>

    </div>
</template>

<script>
    export default {
        name: 'PressSection',
        data() {
            return {
                quote: 1
            };
        },

        methods: {
            selectQuote(number){
                this.quote = number
            }
        }
    }
</script>

<style lang="scss" scoped >
    .main{
        margin-top:37px;

        .main-text{
            text-align: center;
            font: normal normal bold 12px/25px Josefin Sans;
            letter-spacing: 1.2px;
            color: #221F20;
            text-transform: uppercase;
            opacity: 1;
        }
        .description-row{
            .description{
                text-align: center;
                font: normal normal normal 22px/38px Nunito;
                letter-spacing: 0px;
                color: #221F20;
                opacity: 1;
                width: 850px;
                margin-left: auto;
                margin-right: auto;
            }
        }

        .logo-section{
            height: 67px;
            background-size: 100% auto;
            margin-left: 20px;
        }
    }


</style>