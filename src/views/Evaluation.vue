<template>
  <Layout>
    <div class="about">
      <h2>Evaluation Metrics and Toolkit</h2>
      <p class="lead">In LaSOT, we conduct one-pass evaluation (OPE) to assess the performance of each tracker. In
        detail, we utilize three types of
        metrics, <strong><em>Precision</em></strong>, <strong><em>Normalized Precision</em></strong> and <strong><em>Success</em></strong>,
        to measure different tracking algorithms. The definitions of the three
        metrics can be seen in the <a href="https://arxiv.org/abs/1809.07845">paper</a> or <a
          href="https://arxiv.org/abs/2009.03465">paper</a>. </p>
      <p class="lead">The evaluation toolkit (<span style='color:red'><b>note: conference version</b></span>) can be
        found <a
          href="http://vision.cs.stonybrook.edu/~lasot/toolkit/LaSOT_Evaluation_Toolkit.zip">here</a> or on <a
          href="https://github.com/HengLan/LaSOT_Evaluation_Toolkit">Github</a>.</p>
      <p class="lead">A new version of evaluation toolkit (<span style='color:red'><b>support both conference and journal
        versions</b></span>) with complete tracking results can be
        downloaded <a href="http://vision.cs.stonybrook.edu/~lasot/toolkit/LaSOT_Evaluation_Toolkit_V2.zip">here
          (local)</a>, <a href="https://drive.google.com/file/d/1etbwhewuKyt21FoAJHsz5B8pWmbPmKl_/view?usp=sharing">here
          (GoogleDrive)</a> or <a href="https://pan.baidu.com/s/1GVoRTS7zdYYOhjVWO01kSg">here (Baidu Pan, pwd: 2020)</a>.
      </p>
    </div>
    <div class="protocols">
      <h2>Evaluation Protocol</h2>
      <p class="lead">We define three protocols for evaluating trackers on LaSOT as follows </p>
      <ul style="list-style: none; ">
        <hr style="background-color:gray;">
        <li>
          <span style="font-size:large"><b>Protocol I (no constraint)</b>: All <span
            style="color:red"><b>1,400</b></span> sequences in
            LaSOT (<span style="color: red;"><b>note: conference version</b></span>) are employed for evaluation.
            Researchers are allowed to leverage any videos except for those in LaSOT for training their
            trackers.</span>
        </li>
        <hr style="background-color:gray;">
        <li>
          <span style="font-size: large;"><b>Protocol II (full-overlap)</b>: Only <span
            style="color:red;"><b>280</b></span> sequences in
            the testing subset (<span style="color:red"><b>note: conference version</b></span>) of LaSOT are utilized
            for evaluation. Research are allowed to leverage 1,120 sequences in the training set of LaSOT to
            develop their trackers. (<strong><em>Training</em></strong>/<strong><em>Testing</em></strong> split:
            <a href="lasot/training_set.txt">Training Subset</a> | <a href="lasot/testing_set.txt">Testing
              Subset</a>)</span>
        </li>
        <hr style="background-color:gray;">
      </ul>
    </div>
    <div class="trackers">
      <div class="text">
        <h2>Evaluated Trackers</h2>
        <p class="lead">We assess 48 popular tracking algorithms on LaSOT under Protocol I, II and III (see their
          definitions above). These trackers include deep learning based ones, correlation filter based ones with
          hand-crafted or deep features, sparse representation based ones and other representatives. Table 1 shows these
          trackers.</p>
      </div>
      <div class="mx">
        <h5>Table 1. Description of each tracking algorithm in detail.</h5>
      </div>
      <table class="table table-striped">
        <thead class="thead-dark tracker_table">
        <tr>
          <th scope="col">Tracker</th>
          <th scope="col">Paper</th>
          <th scope="col">Where</th>
          <th scope="col">When</th>
          <th scope="col">Speed</th>
          <th scope="col">Code</th>
        </tr>
        </thead>
        <tbody id="visual_trackers" class="tracker_table">
        <tr>
          <td>IVT</td>
          <td>Incremental Learning for Robust Visual Tracking</td>
          <td>IJCV</td>
          <td>2008</td>
          <td>25 fps</td>
          <td><a href="code/IVT.zip">Code</a></td>
        </tr>
        <tr>
          <td>MIL</td>
          <td>Visual Tracking with Online MultipleInstance Learning</td>
          <td>CVPR</td>
          <td>2009</td>
          <td>10 fps</td>
          <td><a href="code/MIL.zip">Code</a></td>
        </tr>
        <tr>
          <td>Struck</td>
          <td>Struck: Structured Output Tracking with Kernels</td>
          <td>ICCV</td>
          <td>2011</td>
          <td>11 fps</td>
          <td><a href="code/Struck.zip">Code</a></td>
        </tr>
        <tr>
          <td>ASLA</td>
          <td>Visual Tracking via Adaptive Structural Local Sparse Appearance Model</td>
          <td>CVPR</td>
          <td>2012</td>
          <td>3 fps</td>
          <td><a href="code/ASLA.zip">Code</a></td>
        </tr>
        <tr>
          <td>CSK</td>
          <td>Exploiting the Circulant Structure of Tracking-by-detection with Kernels</td>
          <td>ECCV</td>
          <td>2012</td>
          <td>151 fps</td>
          <td><a href="code/CSK.zip">Code</a></td>
        </tr>
        </tbody>
      </table>
      <div class="text">
        <p><b>Note:</b> Each tracker is used as it is from authors' implementation, without any modification. </p>
      </div>
    </div>
    <div class="results">
      <div class="text">
        <h2>Evaluation Results</h2>
        <p class="lead">The following plots demonstrate the evaluation results of tracking algorithms under three
          protocols using three metrics. Click on each image to zoom-in for better view.</p>
      </div>
      <div class="protocol">
        <div class="mx">
          <h4 style="padding-bottom: 10px; color: #2497E7">Plots of Protocol I (i.e., evaluation on 1,400 videos in
            testing set)</h4>
        </div>
        <div class="imgTable">
          <Protocols>
            <div class="pic">
              <div v-for="(src,index) in srcList1" :key="index" :id="index">
                <img
                  :src="src.im" @click="newPage(index)">
              </div>
            </div>

          </Protocols>
        </div>
      </div>
      <div class="protocol">
        <div class="mx">
          <h4 style="padding-bottom: 10px; color: #2497E7">Plots of Protocol II (i.e., evaluation on 280 videos in
            testing set)</h4>
        </div>
        <div class="imgTable">
          <Protocols>
            <div class="pic">
              <div v-for="(src,index) in srcList2" :key="index" :id="index">
                <img
                  :src="src.im" @click="newPage(index)">
              </div>
            </div>
          </Protocols>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Nav from '@/components/Nav.vue';
  import Layout from '@/components/Layout.vue';
  import Protocols from '@/components/Protocols.vue';

  @Component({
    components: {Protocols, Layout, Nav}
  })
  export default class Evaluation extends Vue {
    newPage(index: number) {
      const ID: any = document.getElementById(`${index}`);
      const tag: any = ID.getElementsByTagName('img')[0];
      const source: string = tag.getAttribute('src');
      window.open(source);
    }

    get srcList1() {
      const result: {}[] = [];
      for (let i = 1; i < 46; i++) {
        const a: {} = {im: require(`../static/pic/protocol1/${i}.png`)};
        result.push(a);
      }
      return result;
    }

    get srcList2() {
      const result: {}[] = [];
      for (let i = 1; i < 46; i++) {
        const a: {} = {im: require(`../static/pic/protocol2/${i}.png`)};
        result.push(a);
      }
      return result;
    }
  }

</script>

<style scoped lang="scss">
  .pic {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      padding-top: 12.5vh;
      padding-bottom: 3.5vh;
    }
  }

  img {
    height: 224px;
    width: 300px;
    cursor: pointer;
  }

  .mx {
    display: flex;
    justify-content: center;
    margin-bottom: 2vh;

  }

  a {
    color: #007bff;
  }

  a:hover {
    text-decoration: underline;
    color: #0056b3;
    cursor: pointer;
  }

  .lead {
    font-size: 1.15rem;
    font-weight: 300;
  }

  h2 {
    font-size: 1.9rem;
  }

  h4 {
    font-size: 1.35rem;
  }

  h5 {
    font-size: 1.15rem;
  }

  .protocols {
    padding-top: 30px;

    ul {
      padding-left: 4vw;
    }

  }

  .trackers {
    padding-top: 30px;

    .table {
      width: 100%;
      max-width: 100%;
      margin-bottom: 1rem;
      background-color: transparent;

      thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
      }

      .thead-dark th {
        color: #fff;
        background-color: #212529;
        border-color: #32383e;
      }

      .tracker_table td, .tracker_table th {
        padding-left: 6px;
        padding-right: 6px;
      }

      td, th {
        padding: .75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
      }

      th {
        text-align: inherit;
      }
    }

    .table-striped > tbody > tr:nth-child(even) > td, .table-striped > tbody > tr:nth-child(even) > th {
      background-color: #e9ecef;
    }

    table {
      border-collapse: collapse;
    }

  }

  .results {
    padding-top: 30px;

    .protocol {
      padding-top: 30px;
    }
  }
</style>