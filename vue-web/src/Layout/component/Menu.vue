<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-menu-item index="2"  @click="router.push({path: '/project'})">
      <el-icon>
        <location/>
      </el-icon>
      <span>项目管理</span>
    </el-menu-item>

    <el-menu-item index="3" @click="router.push({path: '/technology'})">
      <el-icon>
        <location/>
      </el-icon>
      <span >技术栈</span>
    </el-menu-item>
    <el-menu-item index="4" @click="router.push({path: '/user'})">
      <el-icon>
        <setting/>
      </el-icon>
      <span >用户管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Location,
  Setting,
} from '@element-plus/icons-vue'

import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
</style>

