import {defineStore} from 'pinia'
import {ref} from "vue";
import TechnologyService from "@/api/technoloygService";


export const useTechnologyStore = defineStore('technology', () => {
    const technologyList = ref([]);
    const categoryList = ref([]);
    const technology = ref();

    const getAllCategory = async () => {
        const res = await TechnologyService.getAllCategory();
        categoryList.value = res.data;
    }

    const getAll = async () => {
        const res = await TechnologyService.getAll();
        technologyList.value = res.data;
    }

    const getByName = async (name: string) => {
        const res = await TechnologyService.getByName(name);
        technology.value = res.data;
    }

    return {
        technologyList,
        getAll,
        getAllCategory,
        categoryList,
        technology,
        getByName,
    }
})
