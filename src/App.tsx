import * as React from 'react'

import './App.css'
import MainContent from './components/mainContent'

import { Layout } from 'antd';

const { Content, Footer, Header } = Layout;

import Navigation from './components/navigation';

class App extends React.Component {
	public render() {
		
		return (
			<Layout className="layout">
				<Header>
					<div className="logo" />
					<Navigation />
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<MainContent />
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2016 Created by Ant UED
    			</Footer>
			</Layout>
		);
	}
}

export default App
