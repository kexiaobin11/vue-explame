<template>
<el-dialog title="项目信息" v-model="visible" :show-close="false" width="500">
<el-form :model="form">
    <el-form-item label="项目名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"/>
    </el-form-item>
    <el-form-item label=创建时间 :label-width="formLabelWidth">
        <el-input v-model="form.createdAt" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="仓库地址" :label-width="formLabelWidth">
        <el-input v-model="form.repositoryUrl" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="状态" :label-width="formLabelWidth">
        <el-input v-model="form.status" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="平台" :label-width="formLabelWidth">
        <el-input v-model="form.platform" autocomplete="off"/>
    </el-form-item>
</el-form>

<template #footer>
    <div class="dialog-footer">
        <el-button @click="visible = false">关闭</el-button>
        <el-button v-if="showConfirm" type="primary" @click="$emit('addProject', form), visible=false">
            确认
        </el-button>
    </div>
</template>
</el-dialog>
</template>

<script setup>
import {ElButton, ElDialog} from "element-plus";
import {reactive, ref} from "vue";
const formLabelWidth = '140px'
const showConfirm = ref(false);
const visible = ref(false);

defineEmits(['addProject']);

const form = ref({
    name: "",
    createdAt: "",
    repositoryUrl: "",
    platform: "",
    status: ""
});

const open = (row) => {
    form.value.name = row.name;
    form.value.createdAt = row.createdAt;
    form.value.platform = row.platform;
    form.value.status = row.status;
    form.value.repositoryUrl = row.repositoryUrl;
    visible.value = true;
}

const add = () => {
    visible.value = true;
    showConfirm.value = confirm;
}

defineExpose({
    open,
    add
})

</script>

<style scoped>
</style>