<template>
  <div class="wrapper">
    <img src="https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/product-bg.png" class="bg-img">
    <div class="up-frame">
      <div class="title-frame">
        <span class="title title-font">精选美食</span>
        <span class="recommend-title recommend-title-font">无添加 手工 辣酱</span>
        <span class="recommend-content recommend-contet-font">手工去籽枫叶椒、千禾零添加酱油、
          金龙鱼非转基因纯香菜籽油、柴火大灶、古法工艺</span>
      </div>
      <div class="details-frame">
        <div class="details-item">
          <span class="item-title">品牌</span>
          <span class="item-content title-font">田园梦</span>
        </div>
        <div class="details-item">
          <span class="item-title">类别</span>
          <span class="item-content title-font">佐餐</span>
        </div>
        <div class="details-item">
          <span class="item-title">味型</span>
          <span class="item-content title-font">微辣</span>
        </div>
      </div>
    </div>
    <div class="product-detail">
      <div class="price-frame">
        <img src="/static/icons/Path.png" class="price-path" alt="">
        <div class="price-item">
          <span class="price-symbol">￥</span>
          <span class="price-number">37.6</span>
        </div>
      </div>
      <img class="product-img" src="https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/cr.png">
      <button class="order-bottom">立即购买</button>
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
  .title-font{
    color: #b9b9b9;
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .recommend-title-font{
    color: #ffffff;
    font-size: 28px;
    font-weight: 400;
    line-height: 46px;
    text-align: center;
  }
  .recommend-contet-font{
    color: #ffffff;
    font-family: "Avenir-Light";
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
  }
  .wrapper{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-blend-mode:darken;
    background-image: radial-gradient(circle, #535353, #0E0E0E);
    .bg-img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
    .up-frame{
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;      
      width: 100vw;
      .title-frame{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 99;
        .title{
          margin-top: 30px;
        }
        .recommend-title{
          margin-top: 20px
        }
        .recommend-content{
          margin-top: 10px;
          width: 338px;
        }
      }
      .details-frame{
        position: relative;
        display:flex;
        flex-direction: row;
        align-items: center;
        width: 302px;
        height: 44px;
        border: 0.5px solid #b9b9b9;
        margin-top: 30px;
        .details-item{
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100px;
          height: 44px;
          .item-title{
            position: absolute;
            background-color: #0E0E0E;
            background-blend-mode:darken;
            padding: 0 4px;
            color: #b9b9b9;
            font-size: 10px;
            font-weight: 400;
            line-height: 13px;
            letter-spacing: 2px;
            text-align: center;
            text-transform: uppercase;
            z-index: 99;
            top:-6px;
            left: 33px;
          }
          .item-content{
            margin: auto;
          }
        }
      }
    }
    .product-detail{
      width: 100vw;
      position: absolute;
      bottom: 0;
      .price-frame{
        position: absolute;
        width: 326.4px;
        margin-top: 40px;
        bottom: 220px;
        left: 24px;
        .price-path{
          width: 326.4px;
          height: 47.47px;
        }
        .price-item{
          position: absolute;
          display: flex;
          flex-direction: row;
          top: -12px;
          left: 39%;
          .price-symbol{
            color: #ffffff;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            text-align: center;
            text-transform: uppercase;
          }
          .price-number{
            color: #ffffff;
            font-size: 28px;
            font-weight: 400;
            line-height: 30px;
            text-align: center;
            text-transform: uppercase;
          }
        }
      }
      .product-img{
      width: 100vw;
      }
      .order-bottom{
        position: absolute;
        bottom: 30px;
        left: 100px;
        width: 190px;
        height: 50px;
        border-radius: 25px;
        background-color: #ffffff;
        box-shadow: 0px 0px  15px rgba(0,0,0,0.5);
        z-index: 999;
        color: #c22700;
        font-size: 16px;
        font-weight: 400;
        line-height: 50px;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
</style>
