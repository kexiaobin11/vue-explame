<template>
  <div class="book">
    <el-card v-loading="loading" class="book_card">
      <el-divider content-position="left">{{technology?.name}}</el-divider>
      <el-row>
        <el-col :span="5">
          <img :src="technology?.cover" alt="图片加载出错" class="cover">
        </el-col>
        <el-col :span="19">
          <div class="information">类型：{{technology?.type}}</div>
          <div class="information">作者：{{technology?.author}}</div>
        </el-col>
      </el-row>
      <el-card class="description_box">
        <div class="title">
          内容简介
        </div>
        <div class="description">
          {{technology?.description}}
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useTechnologyStore} from "@/stores/useTechnology";
import {useRoute} from  "vue-router";
const route =  useRoute();
const store = useTechnologyStore();
const technology = ref();
const loading = ref(false);
const name = route.params.name as string;

onMounted(async () => {
  loading.value = true
  await store.getByName(name);
  technology.value = store.technology;
  loading.value = false
})
</script>

<style scoped>
.book {
  background-color: #eee;
  display: flex;
  justify-content: center;
}

.book_card {
  margin: 30px 0px;
  width: 900px;
}

.el-divider__text {
  font-size: 20px;
  font-weight: 600;
}

.cover {
  width: 100%;
}

.information {
  font-size: 16px;
  padding: 16px 0px;
  padding-left: 25px;
}

.description_box {
  margin-top: 30px;
}

.description {
  margin-top: 20px;
  font-size: 15px;
  line-height: 30px;
}

.title {
  font-size: 20px;
  color: #27ae60;
}

.shoppingCart {
  margin: 25px 0px;
  float: right;
}
</style>
