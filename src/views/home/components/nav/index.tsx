import { defineComponent, onMounted } from 'vue'
import { MenuOptionItem } from '@/type/index'
import { SlotsType } from 'vue'
import './index.scss'

Object as SlotsType<{
  default: { foo: string; bar: number }
  item: { data: number }
}>

export default defineComponent({
  name: 'Navigator',
  props: {
    activeKey: { type: String, default: 'flowing' },
    menu: { type: Array<MenuOptionItem>, default: [] }
  },
  slots: Object as SlotsType<{
    default: { foo: string; bar: number }
    footer: { name: string }
  }>,
  emits: ['set-active-key'],
  setup(props, { emit }) {
    const { activeKey, menu } = toRefs(props)
    const onChange = (key: string) => {
      emit('set-active-key', key)
    }
    return () => (
      <div class='nav-body'>
        {menu.value.map((v: MenuOptionItem) => {
          return <div class={'nav-item ' + (v.key === activeKey.value
            ? 'active'
            : '') } onClick={() => onChange(v.key)}>
            {v.icon}
            <div class="label">{ v.label }</div>
          </div>
        })}
      </div>
    )
  }
})
