<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mt-3">
                <Header></Header>
            </div>
        </div>
        <div class="row menu">
        <div class="col-2">
            <Menu></Menu>
        </div>
            <div class="col-10 mt-5">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from "@/layout/components/Menu.vue";
import Header from "@/layout/components/Header.vue";
</script>

<style scoped>
.menu {
    height: 1000px
}
#app > div > div.row.menu > div.col-4 > ul {
    height: 100%;
}
</style>