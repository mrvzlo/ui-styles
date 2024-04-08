<style lang="scss">
@import './scss/main.scss';
</style>

<template>
   <div :class="'style-' + selected">
      <div class="menu">
         <button :class="'button primary ' + (selected === 0 ? 'active' : 'inactive')" v-on:click="selected = 0">Flat Bootstrap</button>
         <button title="Gumroad + Balenciaga" :class="'button primary ' + (selected === 1 ? 'active' : 'inactive')" v-on:click="selected = 1">
            Neobrutalism
         </button>
         <button disabled :class="'button primary ' + (selected === 2 ? 'active' : 'inactive')" v-on:click="selected = 2">Bauhaus</button>
         <button disabled :class="'button primary ' + (selected === 3 ? 'active' : 'inactive')" v-on:click="selected = 3">Neumorphism</button>
         <button :class="'button primary ' + (selected === 4 ? 'active' : 'inactive')" v-on:click="selected = 4">Retro future</button>
         <button disabled :class="'button primary ' + (selected === 5 ? 'active' : 'inactive')" v-on:click="selected = 5">Glassmorphism</button>
         <button disabled :class="'button primary ' + (selected === 6 ? 'active' : 'inactive')" v-on:click="selected = 6">Hardcore minimalism</button>
      </div>

      <MainContent />
   </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainContent from './components/MainContent.vue';
import Wrapper from './wrapper';

@Options({ components: { MainContent } })
export default class App extends Vue {
   selected = 4;
   wrapper = new Wrapper();

   created() {
      this.wrapper.delegate = (x) => (this.selected = x);
   }
}
</script>
