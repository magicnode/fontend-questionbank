<template>
    <div class="index">
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link to="/">主页</router-link>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">试卷</template>
                <el-menu-item index="2-1">
                    <router-link to="/paper/create">手动创建试卷</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <router-link to="/paper/auto">自动创建试卷</router-link>
                </el-menu-item>
                <el-menu-item index="2-3">
                <router-link to="/paper/show">查看试卷</router-link>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">试题</template>
                <el-menu-item index="2-1">
                    <router-link to="/topic/create">创建试题</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <router-link to="/topic/show">查看试题</router-link>
                </el-menu-item>
            </el-submenu>
        </el-menu>
        <div class="line"></div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'index',
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
};
</script>
<style>

</style>
