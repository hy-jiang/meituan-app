<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://hengyangxian.meituan.com/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{name:'goodsList',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item.query}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import api from '@/api/index.js'
  export default {
    data() {
      return {
        searchWord: '',
        isFocus: false,
        hotPlaceList: [],
        searchList: ['1天连锁酒店', '2天连锁酒店', '3天连锁酒店'],
        suggestList: []
      }
    },
    created() {
      api.searchHotWords().then(res => {
        this.hotPlaceList = res.data.data;
        this.suggestList = res.data.data;
      })
    },
    computed: {
      isHotPlace: function () {
        return this.isFocus && !this.searchWord;
      },
      isSearchList: function () {
        return this.isFocus && this.searchWord;
      }
    },
    methods: {
      focus() {

        this.isFocus = true;
      },
      blur() {
        const self = this;
        console.log(1);
        setTimeout(function () {
          self.isFocus = false;
        }, 300)
      },
      input() {
        let val = this.searchWord;
        this.$axios.get('/meituan/suggest', {
          params: {
            keyword: val
          }
        }).then(res=>{
          this.searchList = res.data.data.suggestItems;
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "@/assets/css/public/header/index.scss";
  @import "@/assets/css/public/header/search.scss";

  .com-footer .footer-content .footer-copyright .footer-copyright-cert .bus-license img {
    float: left;
    width: 38px;
    height: 38px;
  }

  .com-footer .footer-content .footer-copyright .footer-copyright-cert .bus-license p {
    float: left;
    line-height: 38px;
    padding: 0 5px;
  }

  //   .com-footer .footer-content .footer-copyright .footer-copyright-cert a.sp-ft {
  //     display: inline-block;
  //     overflow: hidden;
  //     text-indent: -1000px;
  //     height: 38px;
  //     background-image: url(../img/sprites/footer.png);
  //     background-repeat: no-repeat;
  //     margin-right: 2px;
  //   }
</style>