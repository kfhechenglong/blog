<template>
  <div class="footer-wrapper">
    <span>
      <reco-icon icon="reco-theme" />
      <a target="blank" href="https://holazero.cn/wx_code.jpg">零度杂谈</a>
    </span>
    <span v-if="$themeConfig.record">
      <reco-icon icon="reco-beian" />
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>
    <span>
      <reco-icon icon="reco-copyright" />
      <a>
        <span v-if="$themeConfig.author">{{ $themeConfig.author }}</span>
        &nbsp;&nbsp;
        <span v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())">{{ $themeConfig.startYear }} - </span>
        {{ new Date().getFullYear() }}
      </a>
    </span>
    <span>
      <reco-icon icon="reco-eye" />
      <span>{{ pv }}</span>
    </span>
    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
    <Comments :isShowComments="false"/>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { version } from '../package.json'
import { useInstance } from '@theme/helpers/composable'
import Vue from 'vue'

export default defineComponent({
  components: { RecoIcon },
  setup (props, ctx) {
    const instance = useInstance()
    
    let pv = 0
    if(!Vue.prototype.isServer && Vue.prototype.pv) {
      pv = Vue.prototype.pv['home']
    }
    return { version, pv }
  }
})
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    padding: 1.5rem 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-size 14px
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
