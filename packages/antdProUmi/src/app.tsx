import { AvatarDropdown, AvatarName, Footer, Header, Question, SelectLang } from '@/components';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * @settings defaultSettings as Partial<LayoutSettings> 全局初始化信息
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  // const fetchUserInfo = async () => {
  //   try {
  //     const msg = await queryCurrentUser({
  //       skipErrorHandler: true,
  //     });
  //     return msg.data;
  //   } catch (error) {
  //     history.push(loginPath);
  //   }
  //   return undefined;
  // };
  // 如果不是登录页面，执行
  // const { location } = history;
  // if (![loginPath, '/user/register', '/user/register-result'].includes(location.pathname)) {
  //   const currentUser = await fetchUserInfo();
  //   return {
  //     fetchUserInfo,
  //     currentUser,
  //     settings: defaultSettings as Partial<LayoutSettings>,
  //   };
  // }
  return {
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
// export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
//   console.log(initialState);
//   let HearContent = () => {
//     return (
//       <div style={{ display: 'flex' }}>
//         <Header />
//         <div>menuExtraRender</div>
//       </div>
//     );
//   };
//   return {
//     ...defaultSettings,
//     actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
//     avatarProps: {
//       src: initialState?.currentUser?.avatar,
//       title: <AvatarName />,
//       render: (_, avatarChildren) => {
//         return <AvatarDropdown>{avatarChildren || 'zbt'}</AvatarDropdown>;
//       },
//     },
//     waterMarkProps: {
//       content: initialState?.currentUser?.name,
//     },
//     // menuItemRender:() =><div>{'headerRender'}</div>,
//     headerContentRender: () => <HearContent />,
//     footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { location } = history;
//       // 如果没有登录，重定向到 login
//       if (!initialState?.currentUser && location.pathname !== loginPath) {
//         // history.push(loginPath);
//         return;
//       }
//     },
//     links: isDev
//       ? [
//           <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
//             <LinkOutlined />
//             <span>OpenAPI 文档</span>
//           </Link>,
//         ]
//       : [],

//     rightContentRender: () => <AvatarDropdown>{'avatarChildren'}</AvatarDropdown>,
//     // menuExtraRender:  () =><div>当前路由title</div>,
//     // 自定义 403 页面
//     unAccessible: <div>unAccessible</div>,
//     // 增加一个 loading 的状态
//     childrenRender: (children) => {
//       // if (initialState?.loading) return <PageLoading />;
//       return (
//         <>
//           {children}
//           {isDev && (
//             <SettingDrawer
//               disableUrlParams
//               enableDarkTheme
//               settings={initialState?.settings}
//               onSettingChange={(settings) => {
//                 // setInitialState((preInitialState) => ({
//                 //   ...preInitialState,
//                 //   settings,
//                 // }));
//               }}
//             />
//           )}
//         </>
//       );
//     },
//     ...initialState?.settings,
//   };
// };

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  baseURL: 'https://proapi.azurewebsites.net',
  ...errorConfig,
};

export const qiankun = new Promise((resolve, reject) => {
  let route = {
    name: 'app1', // 唯一 id
    entry: '//localhost:8001', // html entry
  };
  resolve(route);
}).then((route) => {
  return {
    apps: [route],
    routes: [
      {
        name: 'app1',
        icon: 'warning',
        path: '/app1/table',
        microApp: 'app1',
        props: route,
      },
    ],
  };
});
