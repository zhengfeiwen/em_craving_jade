// nav menu Type

import { VNode } from 'vue'

export type MenuOptionItem = {
  label: string,
  key: string,
  path: string,
  icon?: String|VNode
}