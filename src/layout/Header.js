import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.less'
import { Layout, Menu } from 'antd'
const { Header } = Layout

const HeaderComp = props => {
    return (
        <Header>
            <div className={styles.headerLeft}>
                <img className={styles.logoImg} src={require('../assets/imgs/logo-white.png')} alt="zcy" />
                <div className={styles.title}>智能开放平台</div>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/home">应用分析</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/home">应用中心</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderComp