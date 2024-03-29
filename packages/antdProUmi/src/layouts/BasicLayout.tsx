import { ProLayout } from "@ant-design/pro-components";
import { AvatarDropdown, AvatarName, Footer, Header, Question, SelectLang } from '@/components';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../../config/defaultSettings';
const BasicLayout=(props :any)=>{
    let {children}=props
    let HearContent = () => {
      return (
        <div style={{ display: 'flex' }}>
          <Header />
          <div>menuExtraRender</div>
        </div>
      );
    };
    return (
      <>
        <ProLayout
          {...defaultSettings}
          actionsRender={() => [<Question key="doc" />, <SelectLang key="SelectLang" />]}
          // menuItemRender:() =><div>{'headerRender'}</div>,
          headerContentRender={() => <HearContent />}
          footerRender={() => <Footer />}
          onPageChange={() => {
            const { location } = history;
            // 如果没有登录，重定向到 login
            console.log(location);
            // history.push(loginPath);
            return;
          }}
          rightContentRender={() => <AvatarDropdown>{'avatarChildren'}</AvatarDropdown>}
          // menuExtraRender:  () =><div>当前路由title</div>,
        >
          {children}
        </ProLayout>
      </>
    );
    
};
export default BasicLayout;