
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