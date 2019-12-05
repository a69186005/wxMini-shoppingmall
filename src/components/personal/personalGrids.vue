<template>
  <div class="wrapper">
    <van-divider contentPosition="left">我的订单</van-divider>
    <div class="grid-frame">
      <van-grid clickable column-num="4" :border="false">
        <van-grid-item icon="paid" link-type="navigateTo" url="/pages/dashboard/index" 
        text="待付款"/>
        <van-grid-item icon="logistics" link-type="reLaunch" url="/pages/dashboard/index" 
        text="待发货"/>
        <van-grid-item icon="send-gift-o" link-type="reLaunch" url="/pages/dashboard/index" 
        text="已完成"/>
        <van-grid-item icon="balance-list-o" link-type="reLaunch" url="/pages/dashboard/index" 
        text="全部订单"/>
      </van-grid>
    </div>
    <div class="cell-frame">
      <van-cell title="免费试吃" is-link icon="gift-o" />
      <van-cell title="管理地址" is-link icon="location-o" />
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