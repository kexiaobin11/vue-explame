import {defineStore} from 'pinia'
import {ref} from "vue";
import ProjectService from "@/api/projectUservice";

export const useProjectStore = defineStore('project', () => {
    const projectList = ref([]);

    const getAll = async () => {
        const res = await ProjectService.getAll();
        projectList.value = res.data;
    }
    return {
        projectList, getAll,
    }
})
