
type ArticleType = {
  id: number,
  title: string
}

type AuthorType = {
  id: number,
  avatar: string,
  nickName: string,
  description: string
}

type TopicType = {
  id: number,
  title: string,
  recommend?: boolean,
  hot: number|string
}

import { ContainerFilled, PlusOutlined } from '@ant-design/icons-vue'
import CardList from './components/cardList/index'
import { Statistic } from 'ant-design-vue' 
import './index.scss'

export default defineComponent({
  name: 'Aside',
  components: { CardList, 'a-statistic': Statistic },
  setup() {
    const recommendSrc = 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/rec.476fe07.png'
    const articleList = ref<ArticleType[]>([
      { id: 1, title: '被裁员半年了，谈谈感想' },
      { id: 2, title: '25k大专前端外包从深圳回武汉能拿多少？' },
      { id: 3, title: '1.4秒到0.4秒-2行代码让JS加载耗时减少67%' },
      { id: 4, title: '一次线上事故，我顿悟了Redis缓存的精髓' },
      { id: 5, title: '作为一名应届生，同时维护两个开源项目是一种什么样的体验🚀🚀🚀' }
    ])
    const authorList = ref<AuthorType[]>([
      { id: 1, avatar: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00138-792.jpg', nickName: '铁齿铜牙纪晓岚', description: '铁齿铜牙纪晓岚铁齿铜牙纪晓岚铁齿铜牙纪晓岚铁齿铜牙纪晓岚' },
      { id: 2, avatar: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00138-792.jpg', nickName: '事故人情和珅', description: '事故人情和珅事故人情和珅' },
      { id: 3, avatar: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00138-792.jpg', nickName: '蟋蟀天子朱瞻基', description: '蟋蟀天子朱瞻基蟋蟀天子朱瞻基' },
      { id: 4, avatar: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00138-792.jpg', nickName: '铁面无私包拯', description: '铁面无私包拯铁面无私包拯' },
      { id: 5, avatar: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00138-792.jpg', nickName: '一身是胆赵子龙', description: '一身是胆赵子龙一身是胆赵子龙' }
    ])
    const topicList = ref<TopicType[]>([
      { id: 1, title: '代码情诗', recommend: !0, hot: 10100 },
      { id: 2, title: '每日快讯', recommend: !0, hot: '34w' },
      { id: 3, title: '聊聊工程化Docker', recommend: !1, hot: '10w' },
      { id: 4, title: '挑战每日一条沸点', recommend: !1, hot: '34w' },
      { id: 5, title: '新人报道', recommend: !0, hot: '3w' }
    ])

    const copyrightList = [
      { title: '用户协议', link: '' },
      { title: '营业执照', link: '' },
      { title: '隐私政策', link: '' },
      { title: '关于我们', link: '' },
      { title: '公司地图', link: '' },
      { title: '使用指南', link: '' },
      { title: '友情链接', link: '' },
      { title: '更多文章', link: '' },
      { title: '举报邮箱：xxx@xx.com', link: '' },
      { title: '座机电话：xxx-xxxxxxx', link: '' },
      { title: '京ICP备xxxxxx号-1', link: '' },
      { title: '©2023 攻玉', link: '' }
    ]

    return () => (
      <div class="aside-body">
        <div class="aside-article">
          <CardList title='文章榜' icon={<ContainerFilled />}>
            {{
              list: () => {
                return articleList.value.map((v, index) => {
                  return <div class="line">
                    <span class='order'>{index + 1}</span>
                    <div class='article-title'>{ v.title }</div>
                  </div>
                })
              }
            }}
          </CardList>
        </div>
        <div class="aside-author">
          <CardList title='作者榜'>
            {{
              list: () => {
                return authorList.value.map(v => {
                  return <div class="line">
                    <img class='avatar' src={v.avatar} alt="" />
                    <a class='info'>
                      <span class='title'>{ v.nickName }</span>
                      <span class='description'>{ v.description }</span>
                    </a>
                    <a href="#"><PlusOutlined />关注</a>
                  </div>
                })
              }
            }}
          </CardList>
        </div>
        <div class="aside-topic">
          <CardList title='话题榜'>
            {{
              list: () => {
                return topicList.value.map(v => {
                  return <div class="line">
                    { v.recommend
                      ? <img class='recommend' src={recommendSrc} alt="" />
                      : '' }
                    <a class='topic-title'>#{ v.title }#</a>
                    <span class="hot">{ isNaN(v.hot as any)
                      ? v.hot + '+'
                      : <a-statistic valueStyle={{ fontSize: '15px' }} value={v.hot}></a-statistic> }</span>
                  </div>
                })
              }
            }}
          </CardList>
        </div>
        <div class="copyright">
          { copyrightList.map(v => {
            return <a href={v.link} class="link">{ v.title }</a>
          }) }
        </div>
      </div>
    )
  }
})