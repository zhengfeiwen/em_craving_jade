type ContentItem = {
  title: string,
  short: string,
  author: string,
  looked: number,
  good: number,
  img?: string,
  tags: Array<string>
}
import { EyeOutlined, LikeOutlined } from '@ant-design/icons-vue'
import { Empty, Tabs, TabPane, Tag } from 'ant-design-vue'
import './index.scss'
export default defineComponent({
  name: 'Content',
  components: { 'a-empty': Empty, 'a-tabs': Tabs, 'a-tab-pane': TabPane, 'a-tag': Tag },
  setup() {
    const contentList = ref<ContentItem[]>([])
    const activeKey = ref<string>('recommend')
    setTimeout(() => {
      contentList.value = [
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'], img: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00138-792.jpg' },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] },
        { title: '15分钟学会Pinia', short: 'Pinia 是一个状态管理工具，它和 Vuex 一样为 Vue 应用程序提供共享状态管理能力。', author: 'emperor', looked: 834, good: 20, tags: ['前端', 'Vue.js'] }
      ]
    }, 1000)
    const onChange = () => {
      console.log(activeKey.value)
    }
    return () => (
      <div class="home-content">
        {
          contentList.value.length === 0 ? 
            <a-empty description="暂无发布的文章" /> :
            <div class="content__scroll">
              <a-tabs v-model:activeKey={activeKey.value} onChange={onChange}>
                <a-tab-pane key="recommend" tab="推荐"></a-tab-pane>
                <a-tab-pane key="latest" tab="最新" force-render></a-tab-pane>
              </a-tabs>
              {contentList.value.map((v: ContentItem) => {
                return <div class='content-item'>
                  <div class="content-main">
                    <div class="content-main__title">{ v.title }</div>
                    <div class="content-main__short">{ v.short }</div>
                    <div class="content-main__footer">
                      <span>{ v.author }</span>
                      <span><EyeOutlined />{ v.looked }</span>
                      <span><LikeOutlined />{ v.good }</span>
                      <div class="tag-body">
                        {v.tags.map((tag: string) => {
                          return <a-tag bordered={false} color="#f2f3f5">{ tag }</a-tag>
                        })}
                      </div>
                    </div>
                  </div>
                  {v.img
                    ? <img src={v.img} alt="" />
                    : ''}
                </div>
              })}
            </div>
        }
      </div>
    )
  }
})