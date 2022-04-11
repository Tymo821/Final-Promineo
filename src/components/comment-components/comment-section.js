import React from "react";
import Comment from "./comment";
import CommentList from "./comment-list";
import { Container, Card, CardGroup } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class CommentSection extends React.Component{
    render(){
        let commentOne = {
            username: "Tiger Woods",
            message: "See you are Augusta next year!"
        }

        return( 
            <Container id="comment-section">
            <h4>Let us know your thoughts!:</h4>
    <div>

        <Card style={{
             height: '100%',
             padding: '15px', 
             borderRadius: '20px',
             boxShadow: '0px 5px 15px 0px rgb(0 0 0 / 20%)',
            
        }} id="comment">
   
        <Card.Body>
        <Card.Title>{commentOne.username}</Card.Title>
            <Card.Text>
            {commentOne.message}
            </Card.Text>
         </Card.Body>
        </Card>
    </div>
   
    <div>
     
        
    
    
        
        
    </div>
   
</Container>
        )
    }
}