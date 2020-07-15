import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'
import {View} from '@tarojs/components'

export default class Top extends Component {
    goToSearch(){
      Taro.switchTab({
        url:'/pages/search/index'
      })
    }
    goToHome(){
      Taro.switchTab({
        url:'/pages/index/index'
      })
    }
    goToMovie(){
      Taro.switchTab({
        url:'/pages/movie/index'
      })
    }
    goToTV(){
      Taro.switchTab({
        url:'/pages/movie/index'
      })
    }
    render() {
      return (
        <View id="fixd">
          <View id="top">
            <View onClick={this.goToHome}>首页</View>
            <View onClick={this.goToMovie}>电影</View>
            <View onClick={this.goToMovie}>连续剧</View>
            <View onClick={this.goToSearch}>搜片</View>
          </View>
        </View>
      )
  
    }
  
  }