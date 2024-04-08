<template>
   <div class="content">
      <div class="group">
         <div class="alert primary">Alert 1</div>
         <div class="alert secondary">Alert 2</div>
         <div class="alert tertiary">Alert 3</div>
      </div>

      <div class="group">
         <div class="card primary">
            <div class="head">Card 1 head</div>
            <div class="body">Card 1 body</div>
         </div>

         <div class="card secondary">
            <div class="head">Card 2 head</div>
            <div class="body">Card 2 body</div>
         </div>
         <div class="card tertiary">
            <div class="head">Card 3 head</div>
            <div class="body">Card 3 body</div>
         </div>
      </div>

      <div class="group">
         <div class="badge primary">Badge 1</div>
         <div class="badge secondary">Badge 2</div>
         <div class="badge tertiary">Badge 3</div>
      </div>

      <div class="group">
         <div class="button primary"><span>Button 1</span></div>
         <div class="button secondary"><span>Button 2</span></div>
         <div class="button tertiary"><span>Button 3</span></div>
      </div>

      <div class="group">
         <div class="link primary">Link 1</div>
         <div class="link secondary">Link 2</div>
         <div class="link tertiary">Link 3</div>
      </div>
   </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class MainContent extends Vue {}
</script>
