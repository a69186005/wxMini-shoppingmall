<template>
  <div class="wrapper">
    <div class="cart-title">
      <div class="cart-title-left">
        <span class="cart-name">购物车</span>
        <span class="cart-num">共1件宝贝</span>
      </div>
    </div>
    <div class="product-list">
      <van-checkbox-group :value="result" bind:change="onChange">
        <van-checkbox name="a" icon-position-class="iconclass">
          <div class="product-item">
            <van-card 
              class="card"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/product-details/product-tag.jpg"
              >
              <view slot="bottom" class="stepper-control">
                <van-stepper :value= "1" bind:change="onChange" class="stepper"/>
              </view>
              <view slot="footer" class="delete-frame">
                <van-button size="mini" color="#f44" class="delete">删除</van-button>
              </view>
            </van-card>
          </div>
        </van-checkbox>

        <van-checkbox name="b" icon-position-class="iconclass">
          <div class="product-item">
            <van-card 
              class="card"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/product-details/product-tag.jpg"
              >
              <view slot="bottom" class="stepper-control">
                <van-stepper :value= "1" bind:change="onChange" class="stepper"/>
              </view>
              <view slot="footer" class="delete-frame">
                <van-button size="mini" color="#f44" class="delete">删除</van-button>
              </view>
            </van-card>
          </div>
        </van-checkbox>
        <van-checkbox name="c" icon-position-class="iconclass">
          <div class="product-item">
            <van-card 
              class="card"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/product-details/product-tag.jpg"
              >
              <view slot="bottom" class="stepper-control">
                <van-stepper :value= "1" bind:change="onChange" class="stepper"/>
              </view>
              <view slot="footer" class="delete-frame">
                <van-button size="mini" color="#f44" class="delete">删除</van-button>
              </view>
            </van-card>
          </div>
        </van-checkbox>
      </van-checkbox-group>


    </div>
    <div class="submit">
      <van-submit-bar
        :price="val"
        button-text="提交订单"
        bind:submit="onClickButton" 
        :safe-area-inset-bottom="false" 
        > 
        <van-checkbox :value="checked" checked-color="#f44" bind:change="onChange" class="all-check">
          全选
        </van-checkbox>
      </van-submit-bar>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      val: 2035,
      checked: true,
      result: ['a', 'b']
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
.iconclass{
  margin: 40px 0 0 10px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #efefef;
  .cart-title{
    width: 100vw;
    background-color: #ffffff;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    .cart-title-left{
      margin-left: 14px;
      margin-top: 20px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      .cart-name{
        font-size: 21px;
      }
      .cart-num{
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
  .product-list{
    padding-bottom: 60px;
    padding-top: 8px;
    background-color: #ffffff;
    margin-top: 8px;
    width: 100vw;
    border-radius: 8px;
    .product-item{
      background-color: #ffffff;
      width: 90vw;
    }
  }
  .card{
    margin-top: 14px;
  }
  .all-check {
    margin-left: 20px
  }
  .stepper-control{
    position: relative;
    .stepper{
      position: absolute;
      right: 10px;
    }
  }
  .delete-frame {
    position: relative;
    height: 30px;
    .delete {
      position: absolute;
      top: 5px;
      right: 10px;
    }
  }
}
</style>