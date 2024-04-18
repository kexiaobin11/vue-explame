<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
    >
        <el-menu-item index="0">
            <el-menu-item index="1">
                 <h2>项目管理</h2>
            </el-menu-item>
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">详细信息</el-menu-item>
        <el-sub-menu index="2">
            <template #title>张三</template>
            <el-menu-item index="2-1" @click="dialogShow = true">退出登录</el-menu-item>
        </el-sub-menu>
    </el-menu>

    <el-dialog
        v-model="dialogShow"
        title="请确认"
        width="500"
        destroy-on-close
        center
    >
    <span>
    </span>
        <div>
            <strong>请确认是否退出登录？</strong>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogShow = false">取消</el-button>
                <el-button type="danger" @click="logout()">
                    退出登录
                </el-button>
            </div>
        </template>
    </el-dialog>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";
const router =  useRouter();
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const dialogShow = ref(false);

const open1 = () => {
    ElNotification({
        title: '成功',
        message: '退出成功',
        type: 'success',
    })
}
function logout() {
    dialogShow.value = false;
    sessionStorage.clear();
    open1();
    router.push('/login');
}
</script>

<style>
.flex-grow {
    flex-grow: 1;
}
</style>
