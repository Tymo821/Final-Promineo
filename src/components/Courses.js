import React from "react";
import { Accordion } from "react-bootstrap";
import { Container } from "react-bootstrap";
 import ".//Courses.css";


export default function Courses () {
    return (
<div>
   <Container >
<br></br>
  <Accordion alwaysOpen flush>
   <Accordion.Item >
      <Accordion.Header   >Cuscowilla</Accordion.Header>
  <Accordion.Body style={{backgroundColor:"#1E8449"}}><img className="d-block w-100" src="http://nebula.wsimg.com/b295d13a7120c7e6f67c5523ea9bb610?AccessKeyId=08722E6ADAC7D1ABA69E&disposition=0&alloworigin=1"  alt="/"></img>
    <br/>
    <p>Located just 70 miles east of Atlanta along the shores of Lake Oconee, Cuscowilla is a private residential lake and golf community. Offering Georgia’s only Coore-Crenshaw designed golf course, unrivaled lake views, and most importantly, a laid-back take on true Southern Hospitality, Cuscowilla is the ideal location to build a lakefront legacy your family will cherish for generations to come.
    </p>
  </Accordion.Body>
  </Accordion.Item>
  <br></br>
  
  <Accordion.Item >
    <Accordion.Header>Augusta National</Accordion.Header>
    <Accordion.Body style={{backgroundColor:"#1E8449"}}><img className="d-block w-100" src="http://cdn4.creativecirclemedia.com/rome/original/20200410-133249-12c3233d7b.jpg" alt="/"></img>
    <br/>
    <p>Augusta National Golf Club, sometimes referred to as Augusta or the National, is a golf club in Augusta, Georgia, United States. Unlike most private clubs which operate as non-profits, Augusta National is a for-profit corporation, and it does not disclose its income, holdings, membership list, or ticket sales.</p>
    </Accordion.Body >
  </Accordion.Item>
  <br></br>
  <Accordion.Item >
    <Accordion.Header>Pebble Beach</Accordion.Header>
    <Accordion.Body style={{backgroundColor:"#1E8449"}}>
      <img className="d-block w-100" src="https://assets.simpleviewinc.com/simpleview/image/upload/crm/montereycounty/Pebble-Beach-Aerial---Henebry-26d43a2d5056a36_26d43d5d-5056-a36a-0a01f7a8ab761ba8.jpg" alt="/"></img>
      <br/>
    <p>Get goosebumps while standing on the first tee at Pebble Beach Golf Links — the No. 1 public course in the country. Let the bagpiper serenade you during a Spanish Bay sunset. Draw inspiration from the proud Lone Cypress. Discover your own favorite spot along 17-Mile Drive, or our 25 miles of trails, or the serene Stillwater Cove. Join us at Pebble Beach Resorts and make your own unforgettable memories.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

</Container>

</div>

    )
}
        