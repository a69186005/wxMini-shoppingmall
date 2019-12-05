<template>
  <div class="wrapper">
    <div class="">
      <van-cell-group>
        <van-field :value="userName" placeholder="请填写收货人姓名" label="收货人"/>
        <van-field :value="mobile" placeholder="请填写收货人手机" label="手机号码"/>
        <van-cell title="所在地区"/>
        <van-field :value="userDetailAddress" label="详细地址" type="textarea"
          placeholder="街道、楼牌号等" autosize />
        <van-cell class="switch" title="默认地址" size="large" label="提醒：每次下单会默认推荐使用该地址" >
          <van-switch :checked="checked" />
        </van-cell>
      </van-cell-group>
      <div class="confirm-button">
        <van-button size="large" type="danger">保存地址</van-button>
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
    .switch{
      margin: auto 0;
    }
    .confirm-button{
      width: 100vw;
      position: fixed;
      bottom: 0;
    }
  }
</style>