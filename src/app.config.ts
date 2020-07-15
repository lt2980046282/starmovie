export default {
  pages: [
    'pages/index/index',
    'pages/search/index',
    'pages/movie/index',
    'pages/details/index',
    // 'pages/video/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/movie/index",
        text: "分类",
      },
      {
        pagePath: "pages/search/index",
        text: "搜索",
      },
     ]
  }
}
