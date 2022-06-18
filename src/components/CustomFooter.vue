<template>
    <div class="main" >
        <b-container >
            <b-row >
                <b-col cols="12" class=" main-text mt-5">NEVER MISS A DROP.</b-col>
            </b-row>

            <b-row >
                <b-col cols="4" class="sign-up-text">
                    Sign up to be the first to know about exclusive new deals, product launches and more.
                </b-col>

                <b-col>
                    <b-input-group  class="mt-3">
                        <b-form-input placeholder="Enter your email address"></b-form-input>
                        <b-input-group-append>
                              <b-button variant="info">SignUp</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-row>

            <b-row class="dots mb-5 mt-5">

            </b-row>
            <b-row >
                <b-col cols="3">
                    <b-row>
                        <img  class="white-logo" :src="require(`../assets/images/white-logo.png`)">
                    </b-row>
                    <b-row>
                        <b-col cols="8" class="footer-links">
                            We’re here to help. service@espro.com 1.844.377.7622
                        </b-col>

                    </b-row>

                </b-col>

                <b-col cols="2">
                    <b-row>
                        <b-col class="footer-main">
                            LEARN
                        </b-col>

                    </b-row>
                    <b-row>
                        <b-col cols="3" class="footer-links">
                            Blog Our Story BrewGuides Retailers
                        </b-col>

                    </b-row>
                </b-col>

                <b-col cols="2">
                    <b-row>
                        <b-col class="footer-main">
                            SUPPORT
                        </b-col>

                    </b-row>
                    <b-row>
                        <b-col cols="3" class="footer-links">
                            FAQ Shipping&Returns OurGuarantee
                        </b-col>

                    </b-row>
                </b-col>

                <b-col cols="2">
                    <b-row>
                        <b-col class="footer-main">
                            COMPANY
                        </b-col>

                    </b-row>
                    <b-row>
                        <b-col cols="3" class="footer-links">
                            Contact JoinUs Press
                        </b-col>

                    </b-row>
                </b-col>

                <b-col cols="3">
                    <b-row>
                        <b-col class="footer-main">
                            CONNECT WITH US
                        </b-col>

                    </b-row>
                    <b-row>
                        <b-col >
                            <img  class="icons" :src="require(`../assets/images/facebook.png`)">
                            <img  class="icons" :src="require(`../assets/images/instagram.png`)">
                            <img  class="icons" :src="require(`../assets/images/twitter.png`)">
                        </b-col>

                    </b-row>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4" class="footer-links">
                    Copyright © 2021 Espro Inc.
                </b-col>

                    <b-col cols="4" class="footer-links">

                </b-col>

                <b-col cols="2" class="footer-links">
                    Terms & Privacy
                </b-col>

                <b-col cols="2" class="footer-links">
                    Patents
                </b-col>

            </b-row>


        </b-container>

    </div>
</template>

<script>
    export default {
        name: 'CustomFooter',
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
        background: #659AB1 0% 0% no-repeat padding-box;
        opacity: 1;
        color: #EFF5F7;

        .main-text{
            text-align: left;
            font: normal normal bold 36px/43px Barlow Condensed;
            letter-spacing: 0.72px;
            color: #FFFFFF;
            text-transform: uppercase;
            opacity: 1;
        }

        .sign-up-text{
            text-align: left;
            font: normal normal normal 18px/28px Nunito;
            letter-spacing: 0px;
            color: #EFF5F7;
            opacity: 1;
        }

        .footer-main{
            text-align: left;
            font: normal normal bold 14px/25px Josefin Sans;
            letter-spacing: 0.7px;
            color: #FFFFFF;
            text-transform: uppercase;
            opacity: 1;

          }

        .icons{
            background: #84AEC1;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            text-align: center;
            line-height: 100px;
            vertical-align: middle;
            padding: 30px;
        }

        .footer-links{
            text-align: left;
            font: normal normal normal 14px/30px Nunito;
            letter-spacing: 0px;
            color: #EFF5F7;
            opacity: 1;
        }
        .dots{
            border: 3px dashed #FFFFFF;
            opacity: 1;
            height: 5px;
        }

        .white-logo{
            height: 62px;
        }
    }




</style>