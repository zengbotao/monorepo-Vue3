import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { history } from '@umijs/max';
function getChild(menuData:any):void{
    menuData.forEach((element:any) => {
        element.label=element.name
        element.key=element.path
        if(element.routes){
           element.children= getChild(element.routes)
        }
    });
    return menuData

}
const Header: React.FC = (props: any) => {
    console.log(props)
    let{ menuData}=props
    menuData=getChild(menuData)
console.log(menuData);
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
     history.push({
          pathname: e.key,
        });
  };

  return <Menu onClick={onClick} style={{width:'1200px'}} selectedKeys={[current]} mode="horizontal" items={menuData} />;
};

export default Header;