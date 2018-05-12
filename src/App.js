import React, { Component } from "react";
// import "./App.css";
import FriendCard from "./components/FriendCard";
// import Title from "./components/Title";
import friends from "./friends.json";
import Row from "./Row";
import Container from "./Container";
import Column from "./Column";
import Wrapper from "./Wrapper";
import Title from "./components/Title";



class App extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    clickedFriends: [],
  }

  render() {
    return (
    <Wrapper>
        <div
        title ="Tokugawa"
        score = {this.state.score}
        topScore = {this.state.topScore}
        />

        <Title>
        <div className="title1">
        Clicky Game!!
        </div>
        <div className="title2">
         Click on an image to earn points, but don't click on any more than once!
         </div>
       </Title>
 


      <Container>
        {this.state.friends.map(friend => (
          // <Column size="md-3 sm-6">
          <div className="col-sm-3 friend-card">
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          </div>
        ))}
      </Container> 

    </Wrapper>
    )
  }
}

export default App;
