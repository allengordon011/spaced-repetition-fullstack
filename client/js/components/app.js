import React from 'react';
import LandingPage from './Landing';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    componentDidMount() {
        //use mapDispatchToProps below to dispatch Redux action here for AJAX fetch
        this.props.dispatch(actions.getFlashCards())
    }

    submitAnswer(event) {
        event.preventDefault();
        let answer = event.target.answer.value;
        //compare answers
        if (answer === this.props.english) {
            alert('Correct');
        //dispatch action for right wanswer (to send results and call next flashcards)
        } else {
            alert('Wrong')
            //dispatch action for wrong wanswer (to send results and call next flashcards)
        }

    }

    render() {
        return (
            <div className="box">
                <div className="header">FrenchX</div>
                <div className="flash-cards">
                    <div className="french">
                        <div className="french-legend">Français</div>
                        <div className="french-word">{this.props.french}</div>
                    </div>
                    <form onSubmit={this.submitAnswer}>
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
      french: state.french,
      english: state.english,
      freq: state.freq,
      dictionary: state.dictionary
    }
}

export default connect(mapStateToProps)(App);
