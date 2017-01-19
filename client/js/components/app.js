import React from 'react';
import LandingPage from './Landing';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';

const enterAnswer = (event) => {
    event.preventDefault();
    let answer = event.target.value;
    console.log('answer:', answer)
}

class App extends React.Component {
    // componentDidMount() {
    //   //use mapDispatchToProps below to dispatch Redux action here for AJAX fetch
    //
    // }
    render() {
        return (
            <div className="box">
                <div className="header">FrenchX</div>
                <div className="flash-cards">
                    <div className="french">
                        <div className="french-legend">Français</div>
                        <div className="french-word">Pomme</div>
                    </div>
                    <form>
                        <div className="english-legend">English</div>
                        <input onSubmit={enterAnswer} placeholder="Enter your translation"></input>
                        <Button type="submit">?</Button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  return
}
//connect
export default connect(mapStateToProps)(App);
