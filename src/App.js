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
import Cart from './components/Cart';
import axios from 'axios';




function App() {
  const { SubMenu } = Menu;
  const [data,setData]= useState(Data);
  const [stock,setStock]= useState([8,9,10]);
  return (
    <div className="App">
       <Menu  mode="horizontal" className="Menu">
        <Menu.Item >
          <Link className="link" to="/">
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
            Login
        </Menu.Item>
      </Menu>
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
      {/* <Button type="primary" onClick={()=>{
            axios.get('')
            .then((result)=>{
                const abc=data.concat(result.data)
                setData(abc);
            })
            .catch(()=>{
                console.log('실패 했습니다.')
            })
        }}>더보기</Button> */}
    </Route>
    <Route path="/detail/:id">
      <Detail data={data} stock={stock} setStock={setStock}/>
    </Route>
    <Route path= "/cart">
      <Cart/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
