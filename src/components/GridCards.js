/*eslint-disable */
import React,{useState} from 'react'
import {Row,Col} from 'antd';

import GridCard from '../GridCard.css'
import {Link,useParams} from 'react-router-dom';


function GridCards(props) {
    
    const {id} = useParams();

    return (
        <Col xs={24} lg={7} className="Cards">
                <Link to={`/detail`}>
                <img src={require(`./img/img${props.data.id}.jpg`)}width="100%"/>
                </Link>
            <h4>{props.data.title}</h4>
            <p>{props.data.content}</p>
        </Col>

        

    )
}

export default GridCards;
