import React, { Component } from 'react'
import { View, Input, Button,Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import TopNav from '../../components/TopNav'
var element = '';


class Search extends Component {
  state = {
    list:[],
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
  changeValue(e) {
    this.setState({ keyword: e.detail.value })
    Taro.request({
      url: `http://120.71.148.82:7070/demo/search?movieName=${this.state['keyword']}`,
      method: "GET",
      success: (res) => {
        element = res.data.map((i) => <View onClick={()=>this.goToDetails(i.id)} key={i.name} className="movie-item">
          <View><Image className="movie-image" src={i.img_url}></Image></View>
          <View>{i.name}</View>
        </View>)
        this.setState({
          list:element,
        })
      }
    })
  }
  render() {
    return (
      <View>
        <View className="search">
          <Input onInput={e => this.changeValue(e)} value={this.state['keyword']} className="search-input" type='text' placeholder='将会获取焦点' focus />
          <Button size="mini" className="search-button">搜索</Button>
        </View>
        <View className="movie">{this.state.list}</View>
      </View>
    )
  }
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
        <Search />

      </View>
    )
  }
}
