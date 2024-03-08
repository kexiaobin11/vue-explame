<template>
    <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="Date" prop="date" />
        <el-table-column label="Name" prop="name" />
        <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
                >
                <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
                >
            </template>
        </el-table-column>
    </el-table>

    <div class="demo-pagination-block mt-3">
        <el-pagination
            v-model:current-page="currentPage2"
            v-model:page-size="pageSize2"
            :page-sizes="[100, 200, 300, 400]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="sizes, prev, pager, next"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import User from "@/views/User/User.vue";

const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: User) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
    console.log(index, row)
}

const currentPage2 = ref(5);
const pageSize2 = ref(100);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}

const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}
const tableData =[
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    }
] as User[]

</script>
