<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-11-10 14:45:30
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-11 11:16:22
 * @FilePath: \em_craving_jade\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home-container">
    <Nav
      v-model:activeKey="activeKey" :menu="myMenuOptions" @set-active-key="setActiveKey"
      @nav-handle="onNavClick"
    >
      <template #footer="footer">
        <div>{{ footer.name }}</div>
      </template>
    </Nav>
    <Content />
    <Aside />
  </div>
</template>

<script setup lang="tsx" name="home">
import { ref } from 'vue'
import Nav from './components/nav/index'
import Content from './components/content/index'
import Aside from './components/aside/index'
import { MenuOptionItem } from '@/type/index'
import { GithubFilled } from '@ant-design/icons-vue'

let activeKey = ref('following')
const myMenuOptions = ref<MenuOptionItem[]>([
  { label: '关注', key: 'following', path: '/following', icon: <GithubFilled /> },
  { label: '综合', key: 'recommended', path: '/recommended', icon: <GithubFilled /> },
  { label: '项目1', key: 'project1', path: '/project1', icon: <GithubFilled /> },
  { label: '项目2', key: 'project2', path: '/project2', icon: <GithubFilled /> },
  { label: 'Vue', key: 'vue', path: '/vue', icon: <GithubFilled /> },
  { label: 'PHP', key: 'php', path: '/php', icon: <GithubFilled /> },
  { label: 'MySQL', key: 'mysql', path: '/mysql', icon: <GithubFilled /> },
  { label: '排行榜', key: 'hot', path: '/hot', icon: <GithubFilled /> }
])

const setActiveKey = function(key: string) {
  activeKey.value = key
}

const onNavClick = function() {

}

</script>

<style>
  @import './index.scss';
</style>@/components/nav/nav