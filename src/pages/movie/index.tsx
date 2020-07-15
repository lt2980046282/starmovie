import React, { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import MovieList from '../../components/MovieList'
import './index.scss'
import TopNav from '../../components/TopNav'
const navs = ['最近更新', '最近热播']
const movie_types = ['电影', '动作片', '喜剧片', '爱情片', '科幻片', '恐怖片', '剧情片', '战争片', '灾难片']
const movie_areas = ['全部', '大陆', '香港', '台湾', '美国', '韩国', '日本', '泰国', '新加坡', '马来西亚', '印度', '英国', '法国', '加拿大']
const movie_time = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006]

interface IProps {
    types: Array<Number | string>,
}
class Nav extends Component {
    state = {
        currentIndex: 0
    }

    setNav = (i) => {
        this.setState({ currentIndex: i })
    }
    render() {

        return <View className="movie-nav">
            {navs.map((i, index) => <View onClick={() => this.setNav(index)} className={this.state['currentIndex'] == index ? 'movie-nav-item-active' : 'movie-nav-item'} key={i}>{i}</View>)}
        </View>
    }
}
class Menu extends Component<IProps>{
    constructor(props) {
        super(props);
        this.state = { currentIndex: 0 }
    }
    setNav = (index) => {
        this.setState({ currentIndex: index })
    }
    render() {
        return <ScrollView className="menu" scrollX enableFlex >
            {this.props.types.map((i, index) => <View onClick={() => this.setNav(index)} className={this.state['currentIndex'] == index ? 'menu-item-active' : 'menu-item'} key={index}>{i}</View>)}</ScrollView>
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
            <View className="index">
                <TopNav />
                <Nav />
                <Menu types={movie_types} />
                <Menu types={movie_areas} />
                <Menu types={movie_time} />
                <MovieList />
            </View>
        )
    }
}