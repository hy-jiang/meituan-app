<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.icon"></i>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if='curDetail' class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.children">
        <h4 :key='index'>
          {{item.title}}
        </h4>
        <span v-for="(v,i) in item.children" :key="v+'_'+i">
          {{v}}
        </span>
      </template>
    </div>
  </div>
</template>
<script>
  // import api from '@/api/index.js'
  import Axios from 'axios'
  export default {
    data() {
      return {
        curDetail: null,
        menuList: [],
      }
    },
    created() {
      this.$axios.get('/static/mock/menuList.json').then(res=>{
        this.menuList=res.data;
        // console.log(this.menuList);
      })
      // api.getMenuList().then(res => {
      //   // console.log(res);
      //   this.menuList = res.data.data;
      // })
    },
    methods: {
      menuEnter(item) {
        this.curDetail = item;
      },
      menuLeave() {
        const self = this;
        this.timer = setTimeout(function () {
          self.curDetail = null;
        }, 200);
      },
      detailEnter() {
        clearTimeout(this.timer);
      },
      detailLeave() {
        this.curDetail = null;
      }
    }
  }
</script>