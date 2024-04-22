import React, { useEffect, useState } from 'react';


import Heart from '../../assets/Heart';
import './Post.css';
import { Button, Card, Col, Row } from 'react-bootstrap';


function Posts() {




  
  const [album,setAlbum]=useState({})


  //api fetch
  
  const fetchdata=async()=>{
     const result=await fetch('https://fakestoreapi.com/products')
     .then((result)=> result.json())
     .then(songs=>setAlbum(songs))  
  }
  console.log(album);
  
  useEffect(()=>{
  
   fetchdata()
  
  },[])
  


  return (
   <Row>
    <h3 style={{color:'black'}}></h3>
    <Col lg={3}>
     <div className='main'>
      {
        Object.keys(album).map((item)=>
          (
            
                 
            
            <div className="post" key={item}>
             
              <div className='ccc'>
                
            
                <Card className='card'  >
      <Card.Img className='pic' variant="top" src={album[item].image} /><Heart/>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>{album[item].title}</Card.Title>
        <Card.Text className='price'>
        {album[item].price}
      
        </Card.Text>
        
      </Card.Body>
    </Card>
    
                </div>
                </div>
                
              
    
                )
                )
              }
                </div>
                </Col>
                </Row>
  )
            }

export default Posts;