import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const defaultstate = [
  {
    id: '1',
    name: '린넨 셔츠',
    address: 'New York No. 1 Lake Park',
    price:13000
  },
  {
    id: '2',
    name: '검정 슬렉스',
    address: 'Seoul',
    price:51000
  }];
  
  function reducer(state=defaultstate,액션){
    if(액션.type==="데이터추가"){
      if(액션.payload.id === defaultstate.id){
        const copy=[...defaultstate];
        copy.push(액션.payload);
        return 액션.payload.id++
      }
      const copy=[...defaultstate];
      copy.push(액션.payload);
      return copy;
    }
   else if(액션.type ==='수량증가'){
      const copy= [...defaultstate];
      copy[0].price++;
      return copy
    }else if(액션.type === '수량감소'){
      const copy= [...defaultstate];
      copy[0].price--;
      return copy
    }
    else{
      return state
    }
  }
  
  const store =createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
