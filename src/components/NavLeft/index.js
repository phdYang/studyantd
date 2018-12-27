import React from 'react';
import MenuConfig from './../../config/menuConfig'
import {Menu} from 'antd'
import './index.less'
import {NavLink} from 'react-router-dom'

const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component{

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) } 
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item title={item.title} key={item.key}>
                        <NavLink to={item.key}>{ item.title}</NavLink>
                    </Menu.Item>
                )
            }
        })
    }

    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.png" alt=""/>
                </div>
                <Menu
                    theme="dark"
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}