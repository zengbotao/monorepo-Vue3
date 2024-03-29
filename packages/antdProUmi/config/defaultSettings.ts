import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'mydesign', //页面title
  pwa: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

// navTheme: 'light' 设置导航主题为浅色。
// colorPrimary: '#1890ff' 设置主要颜色为主题蓝色。
// layout: 'mix' 设置布局模式为混合模式。
// contentWidth: 'Fluid' 设置内容宽度为流式布局。
// fixedHeader: true 设置头部固定。
// fixSiderbar: false 设置侧边栏不固定。
// colorWeak: false 关闭色弱模式。
// title: 'mydesign' 设置页面标题为 ‘mydesign’。
// pwa: true 启用渐进式网络应用程序功能。
export default Settings;
