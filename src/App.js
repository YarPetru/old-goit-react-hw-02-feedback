import './App.css';
import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import DischargeBtn from './components/DischargeBtn';
import Section from './components/Section';
// import FeedbackStats from './components/FeedbackStats';
// import s from './components/FeedbackStats/FeedbackStats.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  handleIncrement = evt => {
    const feedBackType = evt.target.textContent.toLowerCase();
    if (feedBackType === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (feedBackType === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (feedBackType === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  dischargeRatings = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleIncrement}
          />

          {/* <FeedbackOptions
            onLeaveGoodFeedback={this.addGoodRating}
            onLeaveNeutralFeedback={this.addNeutralRating}
            onLeaveBadFeedback={this.addBadRating}
          /> */}
        </Section>
        {/* <div>
          <button type="button" onClick={this.addGoodRating}>
            Good
          </button>
          <button type="button" onClick={this.addNeutralRating}>
            Neutral
          </button>
          <button type="button" onClick={this.addBadRating}>
            Bad
          </button>
        </div> */}
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
          {/* <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          /> */}
          {/* <h3>Statistics</h3>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positive}%</li>
        </ul> */}
          <DischargeBtn onDischarge={this.dischargeRatings} />
        </Section>
        {/* <button type="button" onClick={this.dischargeRatings}>
          Discharge statistics
        </button> */}
      </div>
    );
  }
}

export default App;
