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
         项目管理
        </span>
        <el-tag>project</el-tag>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-input
            v-model="input1"
            style="width: 240px; margin-bottom: 10px"
            size="large"
            placeholder="名称"
        />
          <el-button style="margin-left: 4px" class="mb-2" size="large" type="primary" :icon="Plus" @click="add()">添加</el-button>
      </div>
    </template>
  </el-page-header>

  <el-table :data="projects" v-loading="loading" style="width: 100%; margin-top: 10px">
    <el-table-column prop="name" label="名称" width="180"/>
    <el-table-column prop="repositoryUrl" label="项目地址"/>
    <el-table-column prop="platform" label="所有" width="180"/>
    <el-table-column prop="platform" label="平台" width="180"/>
    <el-table-column prop="createdAt" label="创建时间" width="180"/>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="{row}">
        <el-button link type="primary" size="small" @click="onDetail(row)">
          详细
        </el-button
        >
        <el-button link type="danger" size="small" @click="handleDelete(row.name)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <ProjectDetail ref="dialog" @addProject="addProject"></ProjectDetail>

    <div class="demo-pagination-block mt-3">
        <el-pagination
                v-model:current-page="pagination.currentPage"
                v-model:page-size="pagination.pageSize"
                :page-sizes="[5, 10, 20, 30]"
                :small="small"
                :disabled="disabled"
                :background="background"
                layout="sizes, prev, pager, next"
                :total="pagination.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
        />
    </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from "vue";
import {useProjectStore} from "@/stores/useProjectStore";
import {ElButton, ElMessage} from "element-plus";
import ProjectDetail from "@/views/project/ProjectDetail.vue";
const store = useProjectStore();

const input1 = ref('');
const projectList = ref([]);
const loading = ref(false);

const pagination = ref({
    currentPage: 1,
    pageSize: 5,
    total: 0
})

const addProject = (project) => {
    const newProject = {
        name: project.name,
        createdAt: project.createdAt,
        repositoryUrl: project.repositoryUrl,
        platform: project.platform,
        status: project.status
    }

    store.projectList.unshift(newProject);
    projects.value.unshift(newProject)
}

const add = () => {
    dialog.value.add();
}

const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const dialog = ref();

const handleSizeChange = (val: number) => {
    pagination.value.pageSize = val;
}
const handleCurrentChange = (val: number) => {
    pagination.value.currentPage = val;
}

const projects = computed(() => {
    const projectNameInclude = projectList.value.filter(v => v.name.includes(input1.value));
    pagination.value.total = projectNameInclude.length;
    return projectNameInclude.slice((pagination.value.currentPage - 1) * pagination.value.pageSize, pagination.value.pageSize * pagination.value.currentPage)
})

function handleDelete(name) {
  projectList.value = projectList.value.filter(v => !v.name.includes(name));
  ElMessage({
    message: '删除' + name + '成功',
    type: 'success',
  })
}

function onDetail(row) {
    dialog.value.open(row);
}

onMounted(async () => {
  loading.value = true
  await store.getAll();
  projectList.value = store.projectList;
  pagination.value.total = projectList.value.length;
  loading.value = false;
})

</script>
