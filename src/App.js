/*eslint-disable */

import React,{useState} from 'react';
import logo from './logo.svg';
import { Button ,Row} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Menu } from 'antd';
import GridCards from './components/GridCards';
import Detail from './components/Detail';
import {Route,Link,Switch} from 'react-router-dom';
import Data from './Data';




function App() {
  const { SubMenu } = Menu;
  const [data,setData]= useState(Data);
  return (
    <div className="App">
       <Menu  mode="horizontal" className="Menu">
        <Menu.Item >
          <Link to="/">
          Cielo
          </Link>
        </Menu.Item>
        <SubMenu title="Outer">
        <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Jacket</Menu.Item>
            <Menu.Item key="setting:2">Coat</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu title="Shirt">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Login
          </a>
        </Menu.Item>
      </Menu>
      <Button onClick={()=>{
          const a = data.sort((a,b)=>{
          return parseFloat(a.price)-parseFloat(b.price);
          console.log(data);
        });
        setData(a);
      }}>버튼</Button>
    <Switch>
    <Route path="/" exact>
      <div className="landing">
        <div className="content">
          <h1 className="landing-title">가을이 다가온다..<br/>
            <strong>
              지금 <br/>
              뭐입지?<br/>
            </strong>
              선선해진 날씨에 찰떡!
              환절기템 싹-다 모음
            </h1>
        </div>
      </div>
      <Row className="Card">
        {   data.map((data,i)=>{
          return <GridCards data={data} key={i}/>
        })
        }
      </Row>
    </Route>
    <Route path="/detail/:id">
      <Detail data={data}/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
