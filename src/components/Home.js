import React from "react";
import ".//Home.css";
import Carousel from 'react-bootstrap/Carousel'  
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Footer from "./Footer";
import CommentSection from "./comment-components/comment-section";
import CommentForm from "./comment-components/comment-form";
import Cuscowills from "../images/2.png"
import Pebble from "../images/1.png"
import National from "../images/3.png"
import Azalea from "../images/Azalea.jpg"
import Jacket from "../images/Jacket.jpg"
import Masters from "../images/Masters.png"

export default function Home () {
  return (
    <div >  
      <div>  

 <h1>
   <img src={Masters}/>
 </h1>
          <div className="row title" style={{ marginBottom: "10px"}} > </div>  
      </div>  
      <div >  
  <Carousel>  
    <Carousel.Item>  
      <img   className="d-block w-100" src={Cuscowills } alt="/"  />  
        <Carousel.Caption> <h4>Cuscowilla </h4>  </Carousel.Caption>  
    </Carousel.Item  >  
    <Carousel.Item >  
      <img className="d-block w-100" roundedCircle src={Pebble }  alt="/"  />  
        <Carousel.Caption> <h4>Pebble Beach</h4>   </Carousel.Caption>  
    </Carousel.Item>  
    <Carousel.Item >  
      <img className="d-block w-100" src={National} alt="/"  />  
        <Carousel.Caption> <h4>Augusta National</h4>   </Carousel.Caption>  
    </Carousel.Item>  
 </Carousel>  
 <p>
   Hi! My name is Tyler. I created this blog because of my passion for golfing. Thankfully I have been able to experience some incredible golf courses. 
    I will share my favorite courses, golf brands I really love and more! If you also like to golf and would like to connect, suscribe to my blog! 
 </p>
 <br/>
 <br/>

    </div> 
<br/>
<br/>
<br/>
<br/>
<br/>

<CardGroup>
  <Card>
    <Card.Img variant="fluid rounded-circle " src="https://countryclubeditions.com/media/catalog/product/t/h/the-augusta-national-clubhouse.jpg" />
    <Card.Body>
      <Card.Title>Agusta National</Card.Title>
      <Card.Text>
        The importance of an Azalea in golf is, it is the flower that is home to Georgia and in particular Augusta National. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img  variant="top rounded-circle" src={Jacket} />
    <Card.Body>
      <Card.Title>Green Jacket</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top rounded-circle" src="https://cdn.imgbin.com/5/7/25/imgbin-2018-masters-tournament-augusta-national-golf-club-2015-masters-tournament-valspar-championship-pga-championship-tcm-masters-dHTSL9z1RVeCiHuXsmPV9Vyiv.jpg" />
    <Card.Body>
      <Card.Title>The masters</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
<br/>
<br/>
<CommentSection />
<br/>
<br/>
<br/>

<CommentForm />
<br/>
<br/>
<br/>
<br/>
<br/>

<Footer></Footer>
    </div>  


                )  
        }  
               

 