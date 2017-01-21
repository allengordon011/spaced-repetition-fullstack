import React from 'react';
import LandingPage from './Landing';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.enterAnswer = this.enterAnswer.bind(this);
  }

    componentDidMount() {
      //use mapDispatchToProps below to dispatch Redux action here for AJAX fetch
      this.props.dispatch(actions.getFlashCards())
    }

  enterAnswer(event) {
        event.preventDefault();

        let answer = event.target.answer.value;
        //compare answers
        if (answer === this.props.flashcards.english) {
        alert('Correct')
      } else {
        alert('Wrong')
      }
        //dispatch action to send results and call next flashcards
        //
    }


    render() {
        return (
            <div className="box">
                <div className="header">FrenchX</div>
                <div className="flash-cards">
                    <div className="french">
                        <div className="french-legend">Français</div>
                        <div className="french-word">{this.french}</div>
                    </div>
                    <form onSubmit={this.enterAnswer}>
                        <div className="english-legend">English</div>
                        <input name="answer" placeholder="Enter your translation"></input>
                        <Button type="submit">?</Button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    flashcards: state.flashcards
  }
}

export default connect(mapStateToProps)(App);
