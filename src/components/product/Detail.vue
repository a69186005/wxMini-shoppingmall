<template>
  <div class="wrapper">
    <div class="content">
      <div>轮播图</div>
      <div class="product-details">
        <van-panel title="田园梦无添加手工辣椒酱" desc="手工去籽枫叶椒、千禾零添加酱油、金龙鱼非转基因纯香菜籽油、柴火大灶、古法工艺">
          <div>
            <div>37.8元</div>
            <van-grid>
              <van-grid-item icon="coupon-o" text="佐餐" />
              <van-grid-item icon="fire-o" text="微辣" />
              <van-grid-item icon="add-o" text="无添加" />
              <van-grid-item icon="free-postage" text="包邮" />
            </van-grid>
          </div>
        </van-panel>
        <van-panel title="产品详情">
          <div>
            产品详情图片
          </div>
        </van-panel>
      </div>
    </div>
    <div class="foot">
      <van-goods-action>
        <van-goods-action-icon icon="cart-o" text="购物车"/>
        <van-goods-action-button text="加入购物车" type="warning"/>
        <van-goods-action-button text="立即购买"/>
      </van-goods-action>
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

</style>