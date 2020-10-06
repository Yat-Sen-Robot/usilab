<template>
  <div class="main">
    <div class="head">
      <h5>Attribute</h5>
      <h5>Precision</h5>
      <h5>Normalized precision</h5>
      <h5>Success</h5>
    </div>
    <div class="left">
      <h5>Overall</h5>
      <h5>SV</h5>
      <h5>POC</h5>
      <h5>FOC</h5>
      <h5>IV</h5>
      <h5>LR</h5>
      <h5>DEF</h5>
      <h5>FM</h5>
      <h5>OV</h5>
      <h5>ROT</h5>
      <h5>MB</h5>
      <h5>CM</h5>
      <h5>ARC</h5>
      <h5>BC</h5>
      <h5>VC</h5>
    </div>
    <slot/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Protocols extends Vue {
  }
</script>

<style scoped lang="scss">
  .main {
    :after {
      content: '';
      display: block;
      clear: both;
    }

    .head {
      display: grid;
      grid-template-columns: 10% 25% 38% 25%;
      padding-left: 1vw;

      h5 {
        text-align: center;
      }
    }

    .left {
      float: left;
      text-align: center;
      margin-left: 2.5vw;

      h5 {
        padding-top: 25vh;
        padding-bottom: 20vh;

      }
    }

  }

  .h5, h5 {
    font-size: 1.15rem;
  }
</style>