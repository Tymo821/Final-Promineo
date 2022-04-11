import React from "react";
import { Container } from "react-bootstrap";
import ".//qna.css"
export default class Faq extends React.Component {
    render() {
        return(
            <Container>
            <h3>Golf Q & A</h3>
            <div id="question">
                Q: <i>What is Augusta National?</i>
            </div>
            <div id="answer">
                A: The most exclusive golf course in the USA and the Masters Course
            </div> 
            <br></br>
            <div id="question">
                Q: <i>Who is Tiger Woods?</i>
            </div>
            <div id="answer">
                A: An icon in the golf world! 
            </div>
            <br></br>
            <div id="question">
                Q: <i>What is Cuscowilla?</i>
                <br></br>
                A: It is the course I grew up playing. A golf community on Lake Oconee!

            </div>
           
            <img style={{
                alignContent:'center',
                    width:"100%",
                  height: '100%',
                  padding: '5px', 
                  borderRadius: '20px',
                  boxShadow: '0px 5px 15px 0px rgb(0 0 0 / 20%)'
            }}
            
            src="https://golfweek.usatoday.com/wp-content/uploads/sites/87/2019/10/great-waters-golf-course-11.5-copy.jpg?w=1000&h=600&crop=1"></img>
        </Container>
        
        )
    }
}

  
