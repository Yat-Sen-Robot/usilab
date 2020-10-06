<template>
  <Layout>
    <div class="about">
      <h2>Download LaSOT Benchmark</h2>
      <p class="lead">For each video in LaSOT, we provide bounding box annotation, full occlusion and out-of-view flags
        and lingual description. The format of a bounding box is as <code> [x, y, width, height] </code>. You can
        download
        LaSOT in three ways.</p>
    </div>
    <div class="sequences">
      <ul style="list-style:none">
        <hr style="height: 2px; border: none; background-color: #282828">
        <li>
          <b style="color:#FF0000" class="font">Download videos of conference version (70 categories with 1,400
            videos, ~227G)</b>
        </li>
        <hr>
        <li>
          <dl>
            <dt>
              <div class="font">Sequences of all categories:</div>
            </dt>
            <dd>
              <!-- <a href="https://drive.google.com/file/d/1O2DLxPP8M4Pn4-XCttCJUW3A29tDIeNa/view?usp=sharing">GoogleDrive</a>,  -->
              <a href="https://bit.ly/LaSOTAll">
                <div class="font">GoogleDrive </div>
              </a>|
              <a href="https://pan.baidu.com/s/1UbcQIU-Fpps7Jqq4WHRRkA">
                <div class="font">Baidu Pan </div>
              </a>|
              local  <!--http://vision.cs.stonybrook.edu/~lasot/data/LaSOTBenchmark.zip-->
              <div class="font">(MD5: 2f9fb392c6e2ce0192bba0d531703e2d)</div>
              <br>
              <div class="font"><b>NOTE</b>: if it is difficult to download the whole benchmark due to large size
                (~227G),
                we recommend downloading by category with each around 1G to 5G (see just below).
              </div>
            </dd>
          </dl>
        </li>
        <hr>
        <li>
          <dl>
            <dt>
              <div class="font">Sequences of each category:</div>
            </dt>
            <dd>
              <!-- <a href="https://drive.google.com/drive/folders/1v09JELSXM_v7u3dF7akuqqkVG8T1EK2_?usp=sharing">GoogleDrive</a>, -->
              <a href="https://bit.ly/LaSOTEach">
                <div class="font">GoogleDrive</div>
              </a> |
              <a href="https://pan.baidu.com/s/1xFANiqkBHytE7stMOLUpLQ">
                <div class="font">Baidu Pan</div>
              </a>
              <div class="font">(<a href="data/md5.txt">MD5</a>)</div>
              <br>
              <div class="font">Or please refer at the links below in front of each category (you may need to have
                access to google drive). Click on images below for video preview and detail information.
              </div>
            </dd>
          </dl>
        </li>
        <hr>
        <li>
          <dl>
            <dt>
              <div class="font">Sequences of Testing set only:</div>
            </dt>
            <dd>
              <!-- <a href="https://drive.google.com/drive/folders/1v09JELSXM_v7u3dF7akuqqkVG8T1EK2_?usp=sharing">GoogleDrive</a>, -->
              <a href="https://bit.ly/LaSOTTest">
                <div class="font">GoogleDrive</div>
              </a>
              <div class="font"> | </div>
              <a href="https://pan.baidu.com/s/1KBlrWGOFH9Fe85pCWN5ZkA&amp;shfl=sharepset">
                <div class="font">Baidu
                  Pan
                </div>
              </a> | <a href="http://vision.cs.stonybrook.edu/~lasot/data/LaSOTTesting.zip">local</a>
              <div
                class="font">(MD5: a9038384fd94d30e7ad6a1b7cf32ec73)
              </div>
              <!-- (<a href="data/md5.txt">MD5</a>) -->
              <!-- <br>Or please refer at the links below in front of each category. Click on images below for video preview and detail information. -->
            </dd>
          </dl>
        </li>
        <hr style="height: 2px; border: none; background-color: #282828">
      </ul>
    </div>
    <p class="lead"> LaSOT can be freely used for personal, academic, or educational purposes.</p>
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
  export default class Benchmark extends Vue {
  }
</script>

<style scoped lang="scss">
  .font {
    font-size: large;
    display: inline;
  }

  a {
    color: #007bff;
  }

  a:hover {
    text-decoration: underline;
    color: #0056b3;
    cursor: pointer;
  }

  h2 {
    font-size: 1.9rem;
  }

  .lead {
    font-size: 1.15rem;
    font-weight: 300;

  .about {

      code {
        font-size: 87.5%;
        color: #e83e8c;
        word-break: break-word;
      }
    }
  }

  .sequences {
    padding-left: 4vw;
  }

</style>