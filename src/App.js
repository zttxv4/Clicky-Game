import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import players from "./cards.json";
import "./App.css";


class App extends Component {
    state = {
        players,
        clickedPlayer: [],
        score: 0,
        goal: 8,
        status: ""
    };

    shuffleScoreCard = id => {
        let clickedPlayer = this.state.clickedPlayer;

        if(clickedPlayer.includes(id)){
            this.setState({ clickedPlayer: [], score: 0, status: "Sorry! You have already clicked on that player." });
            return;
        } else{
            clickedPlayer.push(id)

            if(clickedPlayer.length === 8){
                this.setState({score: 8, status: "You win!!!", clickedPlayer: []});
                return;
            }
            this.setState({ players, clickedPlayer, score: clickedPlayer.length, status: " " });

            for (var i = players.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                [players[i], players[j]] = [players[j], players[i]];
            }
        }
    }

    render() {
        return (
            <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <p className="App-intro">
            Don't click the same player twice!
          </p>
        </header>
        <Title total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.players.map(player => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={player.id}
              key={player.id}
              image={player.image}
            />
          ))}
        </Wrapper>
    </div>
        )
    }
}

export default App;
