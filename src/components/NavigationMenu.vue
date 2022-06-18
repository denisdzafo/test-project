<template>
    <div class="navigation">
        <b-navbar toggleable="lg"  class="menu-links">

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="logo-menu">
                    <b-nav-item href="#">SHOP </b-nav-item>
                    <b-nav-item href="#"> OUR STORY</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="logo-menu">
                    <b-navbar-brand href="#">
                        <img :src=" require('@/assets/images/logo.svg')" class="d-inline-block align-top ml-auto" alt="Logo">
                    </b-navbar-brand>
                </b-navbar-nav>

                <b-navbar-nav class="logo-menu">
                    <b-navbar-nav >
                        <b-nav-item href="#" class="ml-auto">BREW GUIDES</b-nav-item>
                        <b-nav-item href="#" class="ml-auto">BLOG</b-nav-item>
                        <b-nav-item href="#" >
                            <img :src=" require('@/assets/images/search-icon.svg')" class="d-inline-block align-top icons " alt="Logo">
                            <img :src=" require('@/assets/images/account-icon.svg')" class="d-inline-block align-top icons" alt="Logo">
                            <img :src=" require('@/assets/images/shop-icon.svg')" class="d-inline-block align-top icons" alt="Logo">
                            <a class="notification" href="#"><span>0</span></a>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'NavigationMenu',
    }
</script>


<style lang="scss" scoped >
    .navigation{
        top: 37px;
        left: 0px;
        width: 100%;
        height: 66px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;

        .menu-links{
            padding-top: 17px;
            padding-left: 240px;

            .logo-menu {
                margin-right: auto;
            }

            a{
                font: normal normal bold 13px/16px Josefin Sans;
                letter-spacing: 1.95px;
                color: #221F20;
                text-transform: uppercase;
                opacity: 1;
                text-decoration: none;
            }

            .logo{
                width: 121px;
                height: 28px;
                opacity: 1;
                display: inline-block;
            }

            .icons{
                width: 19px;
                height: 19px;
                opacity: 1;
                background: transparent 0% 0% no-repeat padding-box;
                display: inline-block;
            }

            .notification{
                width: 19px;
                height: 19px;
                background: #659AB1 0% 0% no-repeat padding-box;
                opacity: 0.3;
                display: inline-block;
                border-radius: 25px;
                position: relative;

                span{
                    text-align: left;
                    font: normal normal 600 13px/16px Barlow Condensed;
                    letter-spacing: 0px;
                    color: #221F20;
                    opacity: 1;
                }
            }
        }
    }
</style>