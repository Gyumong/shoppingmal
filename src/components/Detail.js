import React,{useState,useEffect} from 'react'
import {Row,Col,Button,Input} from 'antd';
import {useHistory,useParams} from 'react-router-dom';
import Details from '../Details.scss';
import styled from 'styled-components';
import {connect} from 'react-redux';

const DetailBlock= styled.div`
    padding:20px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content:space-between;
    width:250px;
`;

const AlertBlock = styled.div`
    padding : 15px;
    border-radius : 5px;
    max-width : 500px;
    width : 100%;
    margin : auto;
    background:#ff4949;
    margin-bottom: 20px;
    transition:opacity 1s ;
    &:hover{
        opacity: 0.7;
    }
    p{
        margin:0;
        color:white;
    }
`;


function Detail(props) {

    const [ui,setUi] = useState(true);
    const [input,setInput] = useState('');
    
    useEffect(()=>{
        const timer =setTimeout(()=>{
            setUi(!ui);
            console.log(stored)
          },2000) 
    },[input]);
    const {id} = useParams();
    const history = useHistory();

    const stored= props.data.find((a)=>{
        return a.id == id;
    });
    
    return (

        <DetailBlock>
        {
        ui &&
        <AlertBlock >
            <p>품절 임박</p>
        </AlertBlock>
        }
        <Input onChange={(e)=>{
            const a = e.target.value
            setInput(a);
            console.log(input);
        }}/>
        <Row>      
            <Col md={12}> 
                <img src={require(`./img/img${id}.jpg`)} width="400px"/>
            </Col>
            <Col md={12} xs={24} className="content">
                <h4>{stored.title}</h4>
                <p>{stored.content}</p>
                <p>{stored.price}</p>
                <ButtonGroup>
                <Button type="primary" className="btn"stock={props.stock} setStock={props.setStock}onClick={()=>{
                   const a = (props.stock[0]-1);
                   props.setStock([a,10,10]);
                   props.dispatch({type:'데이터추가', payload:{id:'3',name:stored.title,    address: stored.content,
                   price:stored.price} });
                   history.push('/cart');
                   console.log(props);
                }}>주문하기</Button>
                <Button type="primary" className="btn" onClick={()=>{
                    history.goBack();
                }}>뒤로가기</Button>
                </ButtonGroup>
            </Col>
        </Row>
            <Info stock={props.stock}/>
          
        </DetailBlock>
    )
}

const Info=(props)=>{
    return(
    <p>상품제고: {props.stock[0]}</p>
    );
}


function statetoProps(state){
    return{
        state:state
    }

}
export default connect(statetoProps)(Detail);


