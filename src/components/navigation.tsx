import { Menu } from 'antd';
import * as React from 'react'
import { Link } from 'react-router-dom'


class Navigation extends React.Component {

    public render() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Link to="/tournaments">Tournaments</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
            </Menu>            			
        )
    }

}

export default Navigation