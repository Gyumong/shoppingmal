import React,{useState} from 'react'
import {Row,Col,Button} from 'antd';
import {useHistory,useParams} from 'react-router-dom';
import Details from '../Details.css';

function Detail(props) {

    const {id} = useParams();
    const history = useHistory();

    const store= props.data.find((a)=>{
        return a.id == id;
    });
    
    console.log(store)
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


export default Detail
