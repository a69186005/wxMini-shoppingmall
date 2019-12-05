<template>
  <div class="wrapper">
    <PersonalInfo></PersonalInfo>
    <PersonalGrids></PersonalGrids>
  </div>
</template>

<script>
import PersonalInfo from '../../components/personal/PersonalInfo'
import PersonalGrids from '../../components/personal/personalGrids'
export default {
  components: {
    PersonalInfo,
    PersonalGrids
  },
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