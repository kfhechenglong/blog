<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <!-- 最近更新 -->
    <div class="content-list">
      <template v-for="item in currentPageData">
        <el-card class="box-card" v-if="item.title">
          <div class="list-item">
            <div class="item-img">
              <img v-if="item.frontmatter && item.frontmatter.img" :src="item.frontmatter.img" alt="">
              
            </div>
            <div class="item-des">
              <div class="item-title">
                <template v-if="item.frontmatter && item.frontmatter.title">
                  <a :href="`/blog${item.path}`">{{ item.frontmatter.title }}</a>
                </template>
                <a v-else :href="`/blog${item.path}`">{{ item.title }}</a>
              </div>
              <div class="item-tags">
                <template  v-if="item.frontmatter && item.frontmatter.categories">
                <el-tag size="small" class="item-tag" v-for="categoriesText in item.frontmatter.categories">{{ categoriesText }}</el-tag>
                </template>
                <template  v-if="item.frontmatter && item.frontmatter.tags">
                  <el-tag type="warning" class="item-tag" size="small" v-for="tagsText in item.frontmatter.tags">{{ tagsText }}</el-tag>
                </template>
              </div>
              <div>
                <template v-if="item.frontmatter && item.frontmatter.date">
                  <i class="el-icon-time"></i>
                  {{ item.frontmatter.date }}
                </template>
                <template v-else>
                  <i class="el-icon-edit"></i>
                  {{ item.lastUpdated }}
                </template>
              </div>
            </div>
          </div>
        </el-card>
      </template>
      <el-pagination
        class="pagination"
        background
        :page-size="pageSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
    <div class="right">
      <img src="./../../../imgs/公众号二维码.jpg" alt="公众号二维码">
      <div class="img-name">我的公众号</div>
    </div>
    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>

    <Content
      v-else
      slot-key="footer"
      class="footer"
    />
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Vue from 'vue'
export default {
  name: 'Home',

  components: { NavLink },
  data() {
    return {
      currentPage: 1,
      pageSize: 10
    }
  },
  computed: {
    data () {
      // console.log(this)
      // console.log(Vue.version)
      return this.$page.frontmatter
    },
    pagesList () {
      // 文章列表
      return (this.$site.pages || []).filter(item => {
        return item.title !== 'Home'
      }).sort(function(a, b) {
        return b.lastUpdatedTimestamp - a.lastUpdatedTimestamp
      })
    },
    currentPageData () {
      const data = this.pagesList.slice((this.currentPage - 1) * this.pageSize , this.currentPage * this.pageSize)
      // console.log(data)
      return data
    },
    total () {
      return this.pagesList.length
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  },
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 50%
  margin 0px auto
  display block
  .content-list
    .box-card
      margin: 20px 0;
    .pagination
      text-align center
      margin-bottom 20px
    .list-item 
      display flex
    .item-des
      margin-left 20px
      display flex
      flex-wrap wrap
      flex-direction: column
      justify-content space-between
    .item-title
      line-height 20px
    img
      width: 90px;
      height: 90px;
      border-radius: 4px;
    .item-tags
      font-size: 14px;
      height: 30px;
      line-height: 30px;
    .item-tag
      margin-right 10px
  .right
    position fixed;
    right 10px
    top: 200px
    img
      width 200px
    .img-name
      text-align center
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
