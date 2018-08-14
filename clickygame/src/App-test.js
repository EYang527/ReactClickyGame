import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./styles/App.css";


const FriendCardList = friends.map((friends)=>{
  return(
    <FriendCard
    key={friends.key}
    image={friends.image}
    />
  )
}) //react components


const App = () => (
  <Wrapper>
    <h1 className="title">Friends List</h1>
  {FriendCardList}
  
  </Wrapper>
);

export default App;
