<template>
  <div class="wrapper">
    <div class="info-frame">
      <div class="headimg-frame">
        <img src="/static/icons/headimg.png" class="headimg">
        <span class="nickname">游客</span>
      </div>
      <div class="bottom-frame">
        <span class="bottom-text">感谢您的支持</span>
        <div class="botton">分享</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
  .wrapper{
    width: 100vw;
    height: 180px;
    .info-frame{
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 180px;
      background-color: #606673;
      .headimg-frame{
        margin-left: 24px;
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .headimg{
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .nickname{
          margin-left: 14px;
          height: 22px;
          color: #ffffff;
          font-size: 17px;
          font-weight: 400;
          line-height: 22px;
        }
      }
      .bottom-frame{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: auto auto 0 auto;
        width: 343px;
        height: 59px;
        background: #1b1b19;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        .bottom-text{
          margin: auto auto auto 14px;
          color: #c8b17e;
          font-size: 13px;
          font-weight: 400;
          line-height: 17px;
          text-align: center;
        }
        .botton{
          margin: auto 14px auto auto;
          width: 81px;
          height: 29px;
          background: #c8b17e;
          border-radius: 14.5px;
          font-size: 13px;
          font-weight: 400;
          line-height: 29px;
          text-align: center;
        }
      }
    }
    
  }
</style>