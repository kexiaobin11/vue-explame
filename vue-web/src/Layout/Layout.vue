<template>
  <div class="container-fluid">
    <div class="row">
      <Header></Header>
    </div>
    <el-row>
      <el-col :span="4" class="lightgreen-box">
        <Menu></Menu>
      </el-col>
      <el-col :span="17" :offset="1">
        <div class="border">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script setup lang="ts">
import Header from "@/Layout/component/Header.vue";
import Menu from "@/Layout/component/Menu.vue";
</script>

<style scoped>
.border {
  margin-top: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgb(147, 137, 137);
  padding: 30px;
}
</style>
