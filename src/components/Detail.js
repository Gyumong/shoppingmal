import React,{useState} from 'react'
import {Row,Col,Button} from 'antd';
import {useHistory,useParams} from 'react-router-dom';
import Details from '../Details.css';

function Detail(props) {

    const {id} = useParams();
    const history = useHistory();

    const store= props.data.find((store)=>{
        return store.id == id;
    });
    
    return (
        <Row>
            <Col md={12}> 
                <img src={require(`./img/img${id}.jpg`)} width="550px"/>
            </Col>
            <Col md={12} xs={24} className="content">
                <h4>{store.title}</h4>
                <p>{store.content}</p>
                <p>{store.price}</p>
                <Button type="primary" className="btn">주문하기</Button>
                <Button type="primary" className="btn" onClick={()=>{
                    history.goBack();
                }}>뒤로가기</Button>
            </Col>
        </Row>
    )
}

{/* <div className="row">
<div className="col-md-6">
  <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
</div>
<div className="col-md-6 mt-4">
  <h4 className="pt-5">상품명</h4>
  <p>상품설명</p>
  <p>120000원</p>
  <button className="btn btn-danger">주문하기</button> 
</div>
</div> */}

export default Detail
