<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3>通用后台管理</h3>

        <el-menu-item v-for="(item, index) in noChildren" :key="item.name" :index="item.name" @click="clickMenu(item)">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="(item, index) in 
            hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="(subitem, index) in item.children" :key="subitem.path">
                <el-menu-item :index="subitem.path" @click="clickMenu(subitem)">{{ subitem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
            menuData: [
                {
                    path: '/main',
                    name: 'main',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        // 点击
        clickMenu(item) {
            if (this.$route.path !== item.path) {
                this.$router.push(item.path)
            }

        }
    },
    computed: {
        // 没有子菜单
        noChildren() {
            return this.menuData.filter(i => !i.children)
        },
        // 有子菜单
        hasChildren() {
            return this.menuData.filter(i => i.children)
        }
    },
    filters: {},
    watch: {}
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100vh;

    h3 {
        color: #fff;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
    }
}
</style>