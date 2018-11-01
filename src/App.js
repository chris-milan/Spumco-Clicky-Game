import React, { Component } from "react";

import Body from "./components/Body";
import Header from "./components/Header";
import Score from "./components/Score";
import Container from "./components/Container";

import spumco from "./spumco-characters.json";
import SpumcoImage from "./components/SpumcoImage";

class App extends Component {
  // Setting this.state.spumco to the spumco json array
  state = {
    spumco,
    guessStatus: "",
    score: 0,
    scoreCurrent: 0,
    scoreTop: 0,
    choice: []
  };

  randomizeCharacters = () => {
    let shuffledSpumco = randomizeSpumcoCharacters(spumco);
    this.setState({spumco: shuffledSpumco});
  };

  userChoice = id => {
    if (this.state.choice.indexOf(id) === -1) {
      this.scoreUpdate();
      this.setState({choice: this.state.choice.concat(id) });
    } else {
      this.scoreReset();
    }
  };

  scoreUpdate = () => {
    let newScore = this.state.scoreCurrent + 1;
    this.setState({
      scoreCurrent: newScore,
      guessStatus: "You guessed correctly!"
    });
    if (newScore >= this.state.scoreTop) {
      this.setState({scoreTop: newScore});
    }
    else if (newScore === 10) {
      this.setState({guessStatus: "You win!"});
    }
    this.randomizeCharacters();
  };

  scoreReset = () => {
    this.setState({
      scoreCurrent: 0,
      scoreTop: this.state.scoreTop,
      guessStatus: "You guessed incorrectly!",
      choice: []
    });
    this.randomizeCharacters();
  };

  render() {
    return (
      <Body>
        <Header>

        </Header>
          <Score
            score={this.state.scoreCurrent}
            scoreTop={this.state.scoreTop}
            guessStatus={this.state.guessStatus}
          />

        <Container>

            {this.state.spumco.map(character => (

                <SpumcoImage
                  key={character.id}
                  userChoice={this.userChoice}
                  scoreUpdate={this.scoreUpdate}
                  scoreReset={this.scoreReset}
                  randomizeCharacters={this.randomizeCharacters}
                  id={character.id}
                  image={character.image}
                />

            ))}

        </Container>
      </Body>
    );
  }
}

function randomizeSpumcoCharacters(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x], array[i]];
  }
  return array;
};

export default App;
