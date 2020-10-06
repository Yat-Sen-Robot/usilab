<template>
  <div>
    <div class="layout-wrapper">
      <Nav/>
      <div class="content">
        <slot/>
      </div>
    </div>
    <footer>
      <div class="container">
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Nav from '@/components/Nav.vue';

  @Component({
    components: {Nav}
  })
  export default class Layout extends Vue {

  }
</script>

<style scoped lang="scss">
  .layout-wrapper {
    padding: 5vh;
    width: 100vw;
    display: flex;
    justify-content: center;

    .content {
      padding-left: 1vw;
      width: 1050px;
      margin-top: 58px;
      text-align: left;
    }
  }

  footer {
    background: #343a40;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

</style>