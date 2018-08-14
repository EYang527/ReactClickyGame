import React,{Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./styles/App.css";
import GameInfo from "./components/GameInfo/GameInfo";


class App extends Component{
  state={
    friends,
    score:0,
    topScore:0,
    clicked:[],
  };

  reset=()=>{
    this.setState({
      score:0,
      clicked:[],
      message:""
    });
  }

// Web ref for random function https://www.w3schools.com/js/js_array_sort.asp

  handleClick=id=>{
    if (this.state.clicked.indexOf(id) === -1){       // if image cliked not matched 
      console.log(this.state.clicked)
      this.setState({ 
        friends:friends.sort(function(a, b){return 0.5 - Math.random()}),
        score:this.state.score + 1,
        topScore:Math.max(this.state.topScore,this.state.score + 1),
        message:"Correct!",
        clicked:this.state.clicked.concat(id) 
      });
    }
    else if(this.state.score===12) {
      console.log("you will");
      this.setState({
        message:"you win the game",  })}
    
    else{
      this.setState({ 
        friends:friends.sort(function(a, b){return 0.5 - Math.random()}),
        message:"Incorrect!"
      });
      return this.reset();
    }
  };

  render() {
    return (
     <Wrapper>
      <GameInfo message={this.state.message} Score={this.state.score} highScore={this.state.topScore}   
      handleClick={this.reset}
      />
      {this.state.friends.map((characters)=>
      (
        <FriendCard
           handleClick={this.handleClick}
           id={characters.id}
           key={characters.id}
           name={characters.name}
           image={characters.image}
          />

      ))}


      
 
      
     </Wrapper>
    );
  }
}
 export default App;