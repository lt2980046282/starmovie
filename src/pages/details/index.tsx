import React, { Component, } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'
import NavTop from '../../components/TopNav'
import MovieList from '../../components/MovieList'
import Taro from '@tarojs/taro'
interface IProps{
    id:Number
}

class MovieDetails extends Component<IProps>{
    state ={
        obj:{}
    }
    goToVideo(){
        Taro.navigateTo({
            url:'/pages/video/index'
        })
    }
    constructor(props){
        super(props);
        Taro.request({
            url: `http://120.71.148.82:7070/demo/byId?id=${this.props.id}`,
            success: (res) => {
                this.setState({obj:res.data})
            }
        })
        
       
    }
    render() {
        
        return (
            <View className="details">
                <View className="details-left"><Image className="details-image" src={this.state['obj']['img_url']}></Image></View>
                <View className="details-right">
                    <View className="movie-name">{this.state['obj']['name']}</View>
                    <View>类型</View>
                    <View>地区</View>
                    <View>主演</View>
                    <View className="movie-play" onClick={this.goToVideo} >立即播放</View>
                </View>
            </View>
        )
    }
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

function PlayNav() {
    return <View className="play-nav">
        <View className="play-nav-item">
            <View className="play-nav-item-name">播放源 1</View>
        </View>
    </View>
}

export default class Index extends Component {
    state = ({id:0})
    componentWillMount() {
        Taro.getStorage({
            key: 'movie_id',
            success: (res) => {
                this.setState({id:res.data})
            }
        })
    }
    render() {
        return <View>
            <NavTop />
            <MovieDetails id={this.state['id']} />
            <PlayNav />
            <Type title="热门电影" />
            <MovieList />
        </View>
    }
}