<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.bg">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item,index) in nav.list" :key="index" :class="{active: kind == item.tab}" :data-type=item.tab>
        {{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.imgUrl" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.areaName}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.avgPrice}}</span>
              </span>
              <!-- <span class="sold bottom-right-info">{{item.areaName}}</span> -->
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
  import api from '@/api/index.js'
  export default {
    data() {
      return {
        kind: "all",
        resultsData: {},
        // list: [{
        //   image: "",
        //   title: "",
        //   sub_title: "",
        //   price_info: {
        //     current_price: 18,
        //     old_price: 36,
        //   },
        //   address: ""
        // }]
      }
    },
    props: [
      'nav'
    ],
    created() {
      this.$axios.get('/static/mock/menuList.json').then(res => {
        console.log(res);
      })
      this.$axios.get('/static/mock/recommends.json').then(res => {
        this.resultsData =  res.data;
        console.log(this.resultsData);
      })

    },
    methods: {
      over(e) {
        const dom = e.target;
        const tagName = dom.tagName.toLowerCase();
        if (tagName != 'dd') {
          return false;
        }
        this.kind = dom.getAttribute('data-type');

      }
    }
  }
</script>
<style lang="scss">
  @import '@/assets/css/index/artistic.scss';
</style>