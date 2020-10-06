<template>
  <Layout class="main">
    <div class="aboutLaSOT">
      <h2>About LaSOT</h2>
      <p class="lead"><b>La</b>rge-scale <b>S</b>ingle <b>O</b>bject <b>T</b>racking (<b>LaSOT</b>) aims to provide a
        dedicated platform for training data-hungry deep trackers as well as assessing long-term tracking performance.
        <b>LaSOT</b>
        is featured in</p>
      <ul>
        <li><b>Large-scale:</b> 1,550 sequences with more 3.87 millions frames</li>
        <li><b>High-quality:</b> Manual annotation with careful inspection in each frame</li>
        <li><b>Category balance:</b> 85 categories with each containing twenty (70 classes) or
          ten (15 classes) sequences
        </li>
        <li><b>Long-term tracking:</b> An average video length of around 2,500 frames (i.e.,
          83
          seconds)
        </li>
        <li><b>Comprehensive labeling:</b> Providing both visual and lingual annotation for
          each
          sequence
        </li>
        <li><b>Flexible Evaluation Protocol:</b> Evaluation under three different protocols:
          no
          constraint, full-overlap and one-shot
        </li>
      </ul>
      <p class="lead">Please check out the benchmark details and <strong>download</strong> links at
        <router-link to="/benchmark" class="a">
          <b>LaSOT Benchmark</b>
        </router-link>
        page, evaluation <strong>toolkit</strong>
        and sample results at
        <router-link to="/evaluation" class="a">
          <b>Evaluation and Result</b>
        </router-link>
      </p>
    </div>
    <div class="update">
      <div class="container">
        <h2 style="color:#FF0000">Update</h2>
        <ul>
          <li><b>2020-09:</b> Our LaSOT has been accepted to International
            Journal of Computer Vision.
          </li>
          <li><b>2020-09:</b> A new subset with 15 new categories
            consisting of 150 challenging videos released. Check the
            <router-link to="/benchmark" class="a">
              <b>dataset</b>
            </router-link>
            and <a
              href="https://arxiv.org/abs/2009.03465" target="_blank"><b>paper</b></a>.
          </li>
        </ul>
      </div>
    </div>
    <div class="reference">
      <div class="container">
        <h2>Reference</h2>
        <p class="lead"> Please consider citing the following papers if you use LaSOT for your research :)</p>
        <p class="lead"><a href="https://arxiv.org/abs/2009.03465" target="_blank">LaSOT: A High-quality Large-scale
          Single Object Tracking Benchmark</a> <br>
          H. Fan*, H. Bai*, L. Lin, F. Yang, P. Chu, G. Deng, S. Yu, Harshit, M. Huang, J Liu, Y. Xu, C. Liao, L Yuan,
          and H. Ling <br>
          <i>International Journal of Computer Vision (<b>IJCV</b>)</i>, 2020. (accepted)</p>

        <p class="lead"><a href="https://arxiv.org/abs/1809.07845" target="_blank">LaSOT: A High-quality Benchmark for
          Large-scale Single Object Tracking</a> <br>
          H. Fan*, L. Lin*, F. Yang*, P. Chu*, G. Deng, S. Yu, H. Bai, Y. Xu, C. Liao, and H. Ling <br>
          <i>IEEE Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>)</i>, 2019.</p>
      </div>
    </div>
    <div class="contact">
      <div class="container">
        <h2>Contact</h2>
        <p class="lead">We appreciate questions and suggestions to Heng Fan at <a href="mailto:hefan@cs.stonybrook.edu">
          hefan@cs.stonybrook.edu</a> or Haibin Ling at at <a href="mailto:hling@cs.stonybrook.edu">
          hling@cs.stonybrook.edu</a>.</p>
      </div>
    </div>

  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Nav from '@/components/Nav.vue';
  import Layout from '@/components/Layout.vue';

  @Component({
    components: {Layout, Nav}
  })
  export default class About extends Vue {
  }
</script>

<style scoped lang="scss">
  a {
    color: #007bff;
  }

  a:hover {
    text-decoration: underline;
    color: #0056b3;
    cursor: pointer;
  }

  .a {
    color: #007bff;
  }

  .a:hover {
    text-decoration: underline;
    color: #0056b3;
    cursor: pointer;
  }

  ul {
    padding-left: 3vw;
    padding-top: .9vw;

    li {
      line-height: 200%;
    }
  }

  h2 {
    font-size: 1.9rem;
  }

  .lead {
    font-size: 1.15rem;
    font-weight: 300;
  }

  .main {

    .aboutLaSOT {
      margin-bottom: 7vh;
    }

    .update {
      margin-bottom: 7vh;
    }

    .reference {
      margin-bottom: 7vh;
    }

    .contact {
      margin-bottom: 10vh;
    }

  }

</style>