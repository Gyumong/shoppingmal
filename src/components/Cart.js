
import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
import { connect } from 'react-redux';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
      title:'price',
      dataIndex:'price'
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Cart = (props) => {
 const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>


      <Divider />
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={props.state}
      />
      {props.state[0].price}
      <button onClick={()=>{
        props.dispatch({type:'수량증가'})
      }}>+</button>
      <button onClick={()=>{
        props.dispatch({type:'수량감소'})
      }}>-</button>
    </div>
  );
};


function statetoProps(state){
    return{
        state:state
    }

}
export default connect(statetoProps)(Cart);