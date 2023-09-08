
import { RightOutlined, SyncOutlined } from '@ant-design/icons-vue'
import { vNodeType } from 'ant-design-vue/es/_util/type'
import { Empty } from 'ant-design-vue'
import './index.scss'

export default defineComponent({
  name: 'Aside',
  components: { 'a-empty': Empty },
  props: {
    icon: { type: vNodeType, default: '' },
    title: { type: String, default: '' }
  },
  setup(props, { slots }) {
    const { icon, title } = toRefs(props)
    const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE
    return () => (
      <div class="card-list-body">
        <div class="card-header">
          <span class='title'>{icon}{ title.value }</span>
          <span class='change'><SyncOutlined />换一批</span>
        </div>
        <div class="card-list">
          {
            slots.list
              ? slots.list()
              : <a-empty image={simpleImage} />
          }
        </div>
        <div class="card-more">
          查看更多<RightOutlined />
        </div>
      </div>
    )
  }
})