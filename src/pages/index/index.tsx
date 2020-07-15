import React, { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import TopNav from '../../components/TopNav'
import MovieList from '../../components/MovieList'
const imgs = ["https://wxt.sinaimg.cn/mw690/006hrwDrgy1gfl8scqz9ej30mw08stk3.jpg", "https://wxt.sinaimg.cn/mw690/006hrwDrgy1gfvosg4zx1j30mw08sqcr.jpg", "https://wxt.sinaimg.cn/mw690/006hrwDrgy1ggl3aw7wbxj30mw08sk2z.jpg", "https://tvax1.sinaimg.cn/mw690/006hrwDrgy1g83qhaxejpj30mw08stnu.jpg", "https://wxt.sinaimg.cn/mw690/006hrwDrgy1gdmpi7u99sj30mw08sds5.jpg"]
var navObjs = [{
  title: '电影',
  icon: 'https://xdg999-1256062680.file.myqcloud.com/xdg123/images/09c0-40b8-4293-bafa-95b431577b5355.png',
}, {
  title: '电视',
  icon: 'https://xdg999-1256062680.file.myqcloud.com/xdg123/images/92e7-b0b8-4c01-8dab-d2480e19340244.png',
}, {
  title: '动漫',
  icon: 'https://xdg999-1256062680.file.myqcloud.com/xdg123/images/b462-8f9c-4c3b-816e-d3ec851a037714.png',
}, {
  title: '理论',
  icon: 'https://xdg999-1256062680.file.myqcloud.com/xdg123/images/b429-9dc7-4d49-b1dd-14a4d5db1c5808.png',
}, {
  title: '韩漫',
  icon: 'https://xdg999-1256062680.file.myqcloud.com/xdg123/images/2836-831f-4c96-91be-a5e69ac2e5cb80.png',
},
{
  title: '综艺',
  icon: 'https://xdg999-1256062680.file.myqcloud.com/xdg123/images/3f10-87e4-4200-9e58-9658959a9de467.png',
}]

function Banner() {
  const images = imgs.map((img) => <SwiperItem key={img} className="banner-swiper-item"><View><Image className="banner-swiper-image" src={img} /></View></SwiperItem>)

  return (<View className="banner">
    <Swiper indicatorDots autoplay indicatorColor="#FFF" indicatorActiveColor="#FF8c00" className="banner-swiper">
      {images}
    </Swiper>
  </View>);


}
function Nav() {
  const navs = navObjs.map((i) => <View key={i.title} className="nav-item"><View><Image className="nav-item-icon" src={i.icon} /></View><View>{i.title}</View></View>)
  return <View className="nav">{navs}</View>
}



function Type(props) {
  return <View className="type-nav">
    <View>
      <span className="type-border"></span>
      <span className="type-title">{props.title}</span>
    </View>
    <View>
      <span>更多热门》》</span>
    </View>
  </View>
}

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <TopNav />
        <Banner />
        <Nav />
        <Type title="电影" />
        <MovieList />
      </View>
    )
  }
}
