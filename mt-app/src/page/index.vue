<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <recommends :nav="like" />
        <container :nav="iStyle" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import MMenu from '@/components/index/menu.vue'
  import MLife from '@/components/index/life.vue'
  import Container from '@/components/index/container.vue'
  import Recommends from '@/components/index/recommends.vue'
  export default {
    created() {

    },
    data() {
      return {
        iStyle: {
          bg: "istyle",
          title: "有格调",
          list: [{
              text: "全部",
              tab: "all",
            }, {
              text: "约会聚餐",
              tab: "food"
            },
            {
              text: "丽人spa",
              tab: "spa"
            },
            {
              text: "电影演出",
              tab: "movie"
            },
            {
              text: "品质出游",
              tab: "travel"
            }
          ]
        },
        like: {
          bg: "like",
          title: "猜你喜欢",
          list: [{
            text: "为你甄选最合适的",
            tab: "all"
          }]
        }
      }
    },
    components: {
      MMenu,
      MLife,
      Container,
      Recommends,
    }
  }
</script>
<style lang="scss">
  @import '@/assets/css/index/index.scss';
</style>