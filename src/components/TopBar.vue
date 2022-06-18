<template>
    <div class="top-bar">
        <div class="main-text text-center">
            FREE SHIPPING ON ALL U.S. ORDERS $49+
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopBar',
    }
</script>


<style lang="scss" scoped >
    .top-bar{
        top: 0px;
        left: 0px;
        width: 100%;
        height: 37px;
        background: #8DB9CA 0% 0% no-repeat padding-box;
        opacity: 1;

        .main-text{
            font: normal normal bold 11px/13px Josefin Sans;
            letter-spacing: 1.65px;
            color: #FFFFFF;
            text-transform: uppercase;
            opacity: 1;
            padding-top: 14px;
        }
    }
</style>