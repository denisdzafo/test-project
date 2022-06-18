<template>
  <div id="app">

      <div>
          <top-bar></top-bar>
      </div>

        <div>
            <navigation-menu></navigation-menu>
        </div>

      <div>
          <main-slider
            @go="goTo">
          </main-slider>
      </div>


      <div ref="coffee">
          <coffee-section></coffee-section>
      </div>

      <div>
          <product-section></product-section>
      </div>

      <div>
          <experience-section></experience-section>
      </div>

      <div>
          <press-section></press-section>
      </div>

      <div>
          <fresh-grounds></fresh-grounds>
      </div>

      <div>
          <custom-footer></custom-footer>
      </div>

  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import NavigationMenu from "./components/NavigationMenu";
import MainSlider from "./components/MainSlider";
import CoffeeSection from "./components/CoffeeSection";
import ProductSection from "./components/ProductSection";
import ExperienceSection from "./components/ExperienceSection";
import PressSection from "./components/PressSection";
import CustomFooter from "./components/CustomFooter";
import FreshGrounds from   "./components/FreshGrounds";
export default {
  name: 'App',
  components: {
      TopBar,
      NavigationMenu,
      MainSlider,
      CoffeeSection,
      ProductSection,
      ExperienceSection,
      PressSection,
      CustomFooter,
      FreshGrounds,
  },

    methods: {
        goTo(){
            var element = this.$refs['coffee'];
            var top = element.offsetTop;

            window.scrollTo(0, top);
        }
    }
}
</script>

<style>
#app {

}
</style>
