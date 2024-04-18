<script lang="ts" setup>
import {ref, onMounted, computed} from 'vue';
import {useUserStore} from "@/stores/useUserStore";
import {ElMessage} from "element-plus";
import {ElButton} from 'element-plus'
import UserDetail from "@/views/user/UserDetail.vue";

const dialog = ref(null);
const addAndEdit = ref(null);

const store = useUserStore();

const pagination = ref({
    currentPage: 1,
    pageSize: 5,
    total: 0
});

function onDetail(row) {
    dialog.value.open(row);
}

function add() {
    dialog.value.add(true);
}

const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
    pagination.value.pageSize = val;
}
const handleCurrentChange = (val: number) => {
    pagination.value.currentPage = val;
}

const users = computed(() => {
    const userNameInclude = userList.value.filter(v => v.name.includes(input1.value));
    pagination.value.total = userNameInclude.length;
    return userNameInclude.slice((pagination.value.currentPage - 1) * pagination.value.pageSize, pagination.value.pageSize * pagination.value.currentPage)
})

const input1 = ref('');
const userList = ref([]);
const loading = ref(false);

function handleDelete(name) {
    userList.value = userList.value.filter(v => !v.name.includes(name));
    ElMessage({
        message: '删除' + name + '成功',
        type: 'success',
    })
}

onMounted(async () => {
    loading.value = true
    await store.getAll();
    userList.value = store.userList;
    pagination.value.total = userList.value.length;
    loading.value = false
})

function addUsers(user) {
    const newUser = {
        name: user.name,
        username: user.username,
        password: "yunzhi.club",
        phone: user.phone,
    }
    users.value.unshift(newUser);
    store.userList.unshift(newUser);
}
</script>

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
         用户管理
        </span>
                <el-tag>user</el-tag>
            </div>
        </template>
        <template #extra>
            <div class="flex items-center">
                <el-input class="mr-3"
                        v-model="input1"
                        style="width: 240px; margin-bottom: 10px"
                        size="large"
                        placeholder="名称"
                />
                <el-button style="margin-left: 4px" class="mb-2" size="large" type="primary" :icon="Plus" @click="add()">添加</el-button>
            </div>
        </template>
    </el-page-header>

    <el-table :data="users" v-loading="loading" style="width: 100%; margin-top: 10px">
        <el-table-column prop="name" label="名称" width="180"/>
        <el-table-column prop="username" label="用户名" width="180"/>
        <el-table-column prop="password" label="密码"/>
        <el-table-column prop="phone" label="手机号" width="180"/>
        <el-table-column fixed="right" label="Operations" width="120">
            <template #default="{row}">
                <el-button link type="primary" @click="onDetail(row)">
                    详细
                </el-button>
                <el-button link type="danger" size="small" @click="handleDelete(row.name)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <UserDetail ref="dialog" @addUser="addUsers"></UserDetail>

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


