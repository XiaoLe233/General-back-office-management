<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <CommonAside />
      </el-aside>
      <el-container>
        <el-header>
          <ComHead />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '../components/compoAside.vue'
import ComHead from '@/components/comHead.vue';
export default {
  data() {
    return {};
  },
  components: { CommonAside, ComHead },
  methods: {},
  computed: {},
  filters: {},
  watch: {},

};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
</style>