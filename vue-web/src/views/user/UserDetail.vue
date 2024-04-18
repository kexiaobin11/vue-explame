<template>
    <el-dialog title="用户信息" v-model="visible" :show-close="false" width="500">
        <el-form :model="form">
            <el-form-item label="名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"/>
            </el-form-item>
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.username" autocomplete="off"/>
            </el-form-item>
            <el-form-item label="手机号" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"/>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="visible = false">关闭</el-button>
                <el-button v-if="showConfirm" type="primary" @click="$emit('addUser', form), visible=false">
                确认
                    </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import {ElButton, ElDialog} from "element-plus";
import {ref} from "vue";
const formLabelWidth = '140px'

defineEmits(['addUser']);

const form = ref({
    name: '',
    username: '',
    phone: ''
})

const visible = ref(false);
const showConfirm = ref(false);

const open = (row) => {
    visible.value = true;
    form.value = row
}

const add = (confirm) => {
    showConfirm.value = confirm;
    visible.value = true;
}

defineExpose({
    open,
    add
})

</script>

<style scoped>

</style>