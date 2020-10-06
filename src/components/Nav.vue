<template>
  <nav>
    <div class="container">
      <img src="@/assets/4.png">
      <div class="title">
        <router-link to="/">
          <h4>SYSU USILAB</h4>
        </router-link>
      </div>
      <div class="menu">
        <router-link to="/about" class="a" active-class="selected">
          About
        </router-link>
        <router-link to="/benchmark" class="a" active-class="selected">
          Benchmark
        </router-link>
        <router-link to="/evaluation" class="a" active-class="selected">
          Evaluation
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Nav extends Vue {
  }
</script>

<style scoped lang="scss">
  nav {
    padding: 0.5vw;
    background: #343a40;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    .container {
      display: flex;
      align-items: center;

      img {
        height: 46px;
        margin-right: 8vw;
        margin-left: 3vw;
      }

      .title {
        color: #ffffff;
        font-size: 1.5rem;
      }

      .menu {
        color: grey;
        padding-top: 1vw;
        margin-left: 45vw;
        height: 46px;
        font-size: 0.9em;

        .a {
          padding: 0.4vw;
        }

        .a:hover {
          color: #cccecf;
        }

        .a.selected {
          color: #ffffff;
        }
      }
    }

  }
</style>