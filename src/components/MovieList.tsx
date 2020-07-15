import React, { Component } from 'react';
import { Image,View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {
  state = {
    element:[],
  }
  constructor(props) {
    super(props);
  }
  goToDetails(index) {
    Taro.navigateTo({
      url: '/pages/details/index?id='+index,
      
    })
    Taro.setStorage({
      key: 'movie_id',
      data: index,
    })

  }
  async componentDidMount  () {
     await Taro.request({
      url: `http://120.71.148.82:7070/demo/all`,
      method: "GET",
      success: (res) => {
        const element = res.data.map((i) =>{return <View onClick={() => this.goToDetails(i['id'])} key={i['id']} className="movie-item">
          <View><Image lazyLoad={true} className="movie-image" src={i['img_url']}></Image></View>
          <View>{i['name']}</View>
        </View>})
        this.setState({
          element:element,
        })
      }
    
    })
  }
  render() {
    return <View className="movie">{this.state.element}</View>
  }
}