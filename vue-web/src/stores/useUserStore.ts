import {defineStore} from 'pinia'
import {ref} from "vue";
import UserService from "@/api/userService";

export const useUserStore = defineStore('user', () => {
    const userList = ref([]);


    const getAll = async () => {
        const res = await UserService.getAll();
        userList.value = res.data;
        console.log(userList.value);
    }
    return {
        userList, getAll,
    }
})
