<template>
  <div class="wrapper">
    <div class="product-list">
      <van-panel title="商品列表">
        <div class="list-item">
          <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL"
          />
        </div>
      </van-panel>
    </div>
    <div class="address">
      <van-panel title="收货地址">
        <van-cell title="18301006281 卢旭霆 收" size="large" label="北京市大兴区亦庄经济开发区亦庄金茂悦南区16号楼2单元902">
          <van-icon slot="right-icon" name="edit" class="custom-icon" />
        </van-cell>
      </van-panel>
    </div>
    <div class="order-deail">
      <van-panel>
        <div slot="header" class="order-header">
          <span class="title">订单金额</span>
          <span class="price">37.6</span>
        </div>
        <van-cell-group>
          <van-cell title="商品总价" value="37.6" value-class="value-class"></van-cell>
          <van-cell title="运费" value="0" value-class="value-class"></van-cell>
        </van-cell-group>
      </van-panel>
    </div>
    <div class="comfirm-payment">
      <van-button type="danger" size="large">确认支付</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      imageURL: 'https://shoppingmall-1253669590.cos.ap-chengdu.myqcloud.com/product/product-details/product-tag.jpg'
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
  background-color: #efefef;
  .address{
    margin-top:12px;
  }
  .order-deail{
    margin-top:12px;
    padding-bottom: 120px; 
  }
  .title{
    margin-left: 14px;
    font-size: 16px;
    color:#333
  }
  .order-header{
      width: 100vw;
      height: 44px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  .price{
    margin: auto 14px auto auto;
    font-size: 16px;
    color:#f44;
  }
  .comfirm-payment{
    position: fixed;
    bottom: 0;
    width: 100vw
  }
}
</style>