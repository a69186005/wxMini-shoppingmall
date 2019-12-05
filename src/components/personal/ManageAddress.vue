<template>
  <div class="wrapper">
    <div class="list">
      <div class="list-item">
        <div class="item-left">
          <div class="item-line-1">
            <span class="item-name">卢旭霆</span>
            <span class="item-mobile">18301006281</span>
          </div>
          <div class="item-line-2">
            <span class="item-address">北京市大兴区亦庄经济开发区四海路18号院亦庄金茂悦南区16号楼2单元902</span>
          </div>
        </div>
        <van-icon class="delete-icon" size="20px" name="edit"/>
      </div>
    </div>
    <div class="foot">
      <van-button type="primary" size="large" color="#f44">保存地址</van-button>
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
  .list{
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding-bottom: 100px;
    .list-item{
      margin: auto 0 auto auto;
      display: flex;
      flex-direction: row;
      width: 96vw;
      height: 80px;
      border-bottom: 1px solid #efefef;
      .item-left{
        display: flex;
        flex-direction: column;
        width: 80vw;
        margin: auto;
        .item-line-1{
          display: flex;
          flex-direction: row;
          .item-name{
            font-size: 14px;
            font-weight: bold;
          }
          .item-mobile{
            margin-left: 20px;
            font-size: 14px;
            font-weight: bold; 
          }
        }
        .item-line-2{
          .item-address{
            font-size: 12px;
            font-weight: lighter; 
          }
        }
      }
      .delete-icon{
        margin: auto;
      }
    }
  }
  .foot{
    width: 100vw;
    position: fixed;
    bottom: 0
  }
}
</style>