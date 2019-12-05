<template>
  <div class="wrapper">
    <van-tabs :active="active">
      <van-tab title="全部">
        <div class="list-item">
          <van-card class="card" price="2.00" desc="描述信息" title="商品标题"
            thumb="https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/product-details/product-tag.jpg"
            >
            <view slot="footer" class="delete-frame">
              <van-button size="mini" color="#f44" class="delete">再次购买</van-button>
            </view>
          </van-card>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <div class="list-item">
          <van-card class="card" price="2.00" desc="描述信息" title="商品标题"
            thumb="https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/product-details/product-tag.jpg"
            >
            <view slot="footer" class="delete-frame">
              <van-button size="mini" color="#f44" class="delete">付款</van-button>
            </view>
          </van-card>
        </div>
      </van-tab>
      <van-tab title="待收货">
        <div class="list-item">
          <van-card class="card" price="2.00" desc="描述信息" title="商品标题"
            thumb="https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/product-details/product-tag.jpg"
            >
            <view slot="footer" class="delete-frame">
              <van-button size="mini" color="#f44" class="delete">查看物流</van-button>
            </view>
          </van-card>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <div class="list-item">
          <van-card class="card" price="2.00" desc="描述信息" title="商品标题"
            thumb="https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/product-details/product-tag.jpg"
            >
            <view slot="footer" class="delete-frame">
              <van-button size="mini" color="#f44" class="delete">再次购买</van-button>
            </view>
          </van-card>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      active: 1
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
    .list-item{
      margin-top: 8px;
      padding: 8px 0;
      border-radius: 8px;
      background-color: #ffffff;
    }
  }
</style>