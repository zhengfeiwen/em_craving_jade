<template>
  <div class="header-body">
    <div class="header-left">
      <svg-icon name="vue" class="icon" />
      <a-button
        v-for="(leftButton, index) in leftButtons" :key="index" :type="isActive(leftButton.prop)"
        @click="onchangeNav(leftButton)"
      >
        {{ leftButton.label }}
      </a-button>
    </div>
    <div class="header-right">
      <a-input-search
        v-model:value="searchValue"
        placeholder="搜索"
        size="large"
        @search="onSearch"
      />
      <a-dropdown-button type="primary" class="creator-button" @click="handleButtonClick">
        创作者中心
        <template #overlay>
          <div class="creator-body">
            <div class="creator-action">
              <div class="item">
                <ContainerFilled />
                <span>写文章</span>
              </div>
              <div class="item">
                <ContainerFilled />
                <span>写代码</span>
              </div>
              <div class="item">
                <ContainerFilled />
                <span>写代码</span>
              </div>
            </div>
            <div class="creator-other">
              <p>创作灵感</p>
              <div class="line">
                博客搬家有好礼，邀新矿石拿不停｜掘金·日新计划日新计划日新计划日新计划
              </div>
              <div class="line">
                博客搬家有好礼，邀新矿石拿不停｜掘金·日新计划
              </div>
              <div class="line">
                博客搬家有好礼，邀新矿石拿不停｜掘金·日新计划
              </div>
            </div>
          </div>
        </template>
        <template #icon>
          <DownOutlined />
        </template>
      </a-dropdown-button>
      <a-badge count="5">
        <BellFilled style="font-size: 24px; color: #c6c6c6;" />
      </a-badge>
      <a-badge dot>
        <a-avatar size="large">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-badge>
    </div>
  </div>
</template>
<script lang="ts" setup name="layout-header">
import { ref } from 'vue'
import { ButtonType } from 'ant-design-vue/es/button'
import { useLayoutStore } from '@/store/layout'
import { storeToRefs } from 'pinia'

const store = useLayoutStore()
const { activeNav, searchValue } = storeToRefs(store)

// 菜单
type LeftButton = {
  prop: string,
  label: string,
  type: ButtonType
}
const isActive = (prop:string) => {
  return prop === activeNav.value
    ? 'link'
    : 'text'
}

const leftButtons = ref<LeftButton[]>([
  { prop: 'home', label: '首页', type: 'link' },
  { prop: 'hot', label: '热点', type: 'text' },
  { prop: 'course', label: '课程', type: 'text' },
  { prop: 'activity', label: '活动', type: 'text' },
  { prop: 'train', label: '培训', type: 'text' }
])

const onchangeNav = function (nav: LeftButton) {
  store.changeActiveNav(nav.prop)
}

// 搜索
const onSearch = function() {

}
// 写文章
const handleButtonClick = function() {

}
</script>

<style lang="scss" scoped>
.header-body{
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left{
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .icon{
      font-size: 30px;
    }
  }
  .header-right{
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .ant-input-search{
      width: 500px;
    }
    .ant-badge{
      margin-left: 30px;
      ::v-deep .ant-badge-dot{
        width: 8px;
        height: 8px;
        top: 6px;
        right: 6px;
      }
    }
  }
}
.creator-button{
  border-radius: 0;
  margin-left: 20px;
  ::v-deep .ant-btn{
    border-radius: 0;
  }
}
.creator-body{
  background-color: #fff;
  padding: 10px 17px;
  margin-top: 10px;
  border: 1px solid #e4e6eb;
  box-shadow: 0 0 24px rgba(81,87,103,.16);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .creator-action{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
    border-bottom: 1px solid #e4e6eb;
    .item{
      display: flex;
      flex-direction: column;
      .anticon{
        font-size: 40px;
        color: #1e80ff;
      }
    }
  }
  .creator-other{
    padding: 0 10px;
    > p {
      margin: 12px 0 4px 0;
      font-size: 16px;
      font-weight: 700;
      color: #bbb;
    }
    .line{
      font-size: 14px;
      line-height: 24px;
      width: 380px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>