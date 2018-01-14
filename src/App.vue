<template>
<el-container>
  <el-header>
    <h1>Vue Spa Base Project by Anexsoft</h1>
  </el-header>
  <el-container>
    <el-aside style="width:240px;">
      <navegationmenu></navegationmenu>
    </el-aside>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>© <a target="_blank" href="http://anexsoft.com/p/186/proyecto-base-spa-con-vue-vuex-vuerouter-axios-y-element-ui">{{ 'Desarrollo por Anexsoft ' + new Date().getFullYear() }}</a></el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import navegationmenu from "@/components/shared/NavegationMenu";

export default {
  components: {
    navegationmenu
  },
  props: {
    source: String
  }
};
</script>