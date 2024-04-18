<template>

  <el-page-header :icon="null">
    <template #content>
      <div class="flex items-center">
        <el-avatar
            :size="32"
            class="mr-3"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-large font-600 mr-3"> </span>
        <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
         技术栈
        </span>
        <el-tag>technology</el-tag>
      </div>
    </template>
  </el-page-header>

  <div class="category_list mt-3">
                <span @click="categoryChange(index,$event)" v-for="(category,index) in categoryList" :key="index"
                      :class="{'active':activeIndex == index}" class="category">
                   {{ category }} </span>
  </div>
  <el-row v-loading="loading">
    <el-col :span="6" class="book_col" v-for="(technology,index) in technologies" :key="index">
      <div class="item">
        <img :src="technology?.cover" @click="detail(technology)" width="180" height="200"/>
        <div class="information">
          <span>{{ technology?.name }}</span>
          <span>{{ technology?.author }}</span>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from "vue";
import {useTechnologyStore} from "@/stores/useTechnology";
import {useRoute, useRouter} from "vue-router";

const store = useTechnologyStore();
const router = useRouter();
const activeIndex = ref(0);

const input1 = ref('');
const technologyList = ref([]);
const loading = ref(false);
const categoryList = ref([]);
let type = ref('');

function detail(technology: any) {
  router.push('/technology/detail/' + technology.name);
}

function categoryChange(index, $event) {
  activeIndex.value = index;
  type.value = event.target.innerHTML;
}


const technologies = computed(() => {
  return type.value === '全部分类' || type.value === '' ? technologyList.value : technologyList.value.filter(value => value?.type === type.value)
})


onMounted(async () => {
  loading.value = true
  await store.getAllCategory();
  await store.getAll();
  technologyList.value = store.technologyList;
  categoryList.value = store.categoryList;
  loading.value = false
})
</script>

<style scoped>

.book_box {
  width: 1150px;
}

.book_col {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
}

.category {
  font-size: 16px;
  padding: 10px 30px;
  line-height: 50px;
}

.category:hover {
  color: #54a2ed;
  border-bottom: 2px solid #54a2ed;
  cursor: pointer;
}


.item {
  padding: 10px 15px;
  border: 2px #eeeeee solid;
  width: 250px;
}

.information {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding-top: 20px;
}

.cover {
  width: 200px;
  height: 200px;
}
</style>
